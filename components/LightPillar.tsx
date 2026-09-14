"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * The entrance's shader background. The shader itself is public/pillar.js, a
 * classic script kept outside the React bundle so that it can be fetched
 * and running before the runtime and the page chunks have even arrived —
 * on a slow connection that is the difference between the field moving
 * right after the first paint and a second or two later. This component
 * renders the element it draws into, hands it its parameters through
 * data-pillar, and starts and stops it across client-side navigations.
 *
 * Under it sits a still field in the same two colours (see .pillar-stand-in).
 * The script marks the host data-ready on its first frame, the stylesheet
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

declare global {
  interface Window {
    __pillar?: {
      start(host: HTMLElement): void;
      stop(host: HTMLElement): void;
    };
  }
}

/* One object for the life of the module: React re-applies innerHTML whenever
   the prop is a new reference, and that would wipe the canvas on the very
   re-render that drops the stand-in. */
const OWNED_BY_SCRIPT = { __html: "" };

export default function LightPillar({
  className = "",
  mixBlendMode = "screen",
  ...params
}: LightPillarProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [standIn, setStandIn] = useState(true);
  const pillar = JSON.stringify(params);

  // On the first page load the script has usually found the host before this
  // runs and start() is a no-op; on a client-side navigation it is this call
  // that brings the shader up. Either way the cleanup releases the context.
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
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
      {/* Ahead of the runtime's own chunks in the fetch queue, which are all
          async and therefore low priority: this one is what puts the field
          on screen first. */}
      <script async src="/pillar.js" fetchPriority="high" />

      {/* The script owns this element's children, so React is told not to
          look inside it: the canvas is there before hydration. */}
      <div
        ref={hostRef}
        className={cn("pillar-host absolute inset-0", className)}
        style={{ mixBlendMode }}
        data-pillar={pillar}
        suppressHydrationWarning
        dangerouslySetInnerHTML={OWNED_BY_SCRIPT}
      />

      {standIn ? (
        <div
          aria-hidden="true"
          className={cn("pillar-stand-in absolute inset-0", className)}
        />
      ) : null}
    </>
  );
}
