"use client";

import { useEffect, useRef, useState } from "react";

import { pillarRuntime } from "@/lib/pillar";
import { cn } from "@/lib/utils";

/**
 * The entrance's shader background. The shader itself is lib/pillar.ts, and
 * its text is inlined into the HTML right after the element it draws into,
 * so that on the first page load it is fetched with the document and runs
 * before the React runtime and the page chunks have even arrived — on a slow
 * connection that is the difference between the field moving right after the
 * first paint and a second or two later. This component renders the host,
 * hands it its parameters through data-pillar, and starts and stops the
 * shader across client-side navigations, where no inline script runs.
 *
 * Under it sits a still field in the same two colours (see .pillar-stand-in).
 * The runtime marks the host data-ready on its first frame, the stylesheet
 * cross-fades the two on that, and the stand-in is dropped once it has
 * faded — or stays for good where the shader never comes: reduced motion,
 * no WebGL, a software rasteriser.
 */

/** Matches the opacity transitions on .pillar-host and .pillar-stand-in. */
const FADE_MS = 1000;
export interface LightPillarProps {
  topColor?: string;
  bottomColor?: string;
  intensity?: number;
  rotationSpeed?: number;
  className?: string;
  glowAmount?: number;
  pillarWidth?: number;
  pillarHeight?: number;
  noiseIntensity?: number;
  mixBlendMode?: React.CSSProperties["mixBlendMode"];
  pillarRotation?: number;
  /** "low" halves the resolution, shortens the march and caps at 30 fps. */
  quality?: "low" | "medium";
  /** Expand the top (blue) field in dark mode and the bottom (orange) in light. */
  followTheme?: boolean;
}

/* Both objects live for the life of the module: React re-applies innerHTML
   whenever the prop is a new reference, and on the host that would wipe the
   canvas on the very re-render that drops the stand-in. */
const OWNED_BY_SCRIPT = { __html: "" };
const INLINE_RUNTIME = { __html: `(${pillarRuntime.toString()})()` };

export default function LightPillar({
  className = "",
  mixBlendMode = "screen",
  ...params
}: LightPillarProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [standIn, setStandIn] = useState(true);
  const pillar = JSON.stringify(params);

  // On the first page load the inline copy has long found the host and both
  // calls are no-ops; on a client-side navigation they are what bring the
  // shader up. Either way the cleanup releases the context.
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    pillarRuntime();
    window.__pillar?.start(host);
    return () => window.__pillar?.stop(host);
  }, [pillar]);

  // Drop the stand-in a fade after the shader's first frame. Watched through
  // the attribute rather than transitionend: on a slow connection the fade
  // is long over before hydration has attached any handler to hear it.
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const drop = () => {
      timer = setTimeout(() => setStandIn(false), FADE_MS);
    };
    if (host.hasAttribute("data-ready")) drop();
    const observer = new MutationObserver(() => {
      if (host.hasAttribute("data-ready")) {
        observer.disconnect();
        drop();
      }
    });
    observer.observe(host, { attributes: true, attributeFilter: ["data-ready"] });
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* The runtime owns this element's children, so React is told not to
          look inside it: the canvas is there before hydration. */}
      <div
        ref={hostRef}
        className={cn("pillar-host absolute inset-0", className)}
        style={{ mixBlendMode }}
        data-pillar={pillar}
        suppressHydrationWarning
        dangerouslySetInnerHTML={OWNED_BY_SCRIPT}
      />

      {/* Runs as the parser reaches it, with the host already in the DOM.
          React never executes scripts it renders itself, which is what the
          effect above is for. Its text is the server bundle's compilation
          of the function, the client's differs, hence the suppression. */}
      <script suppressHydrationWarning dangerouslySetInnerHTML={INLINE_RUNTIME} />

      {standIn ? (
        <div
          aria-hidden="true"
          className={cn("pillar-stand-in absolute inset-0", className)}
        />
      ) : null}
    </>
  );
}
