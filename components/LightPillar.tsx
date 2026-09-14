"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

import type { LightPillarProps } from "./LightPillarGL";

/**
 * The shader is 500 kB of three.js plus a full-screen fragment program, so it
 * is fetched only after the page has painted, and only where it earns its
 * keep: a working WebGL context and no request for reduced motion. Every
 * first paint — and every device that never qualifies — gets the still field
 * below, which draws the same two halves for nothing.
 *
 * Loading it this way also keeps three.js out of the entrance route's chunk
 * list, so the <Link href="/"> on every other page stops prefetching it.
 */
const LightPillarGL = dynamic(() => import("./LightPillarGL"), { ssr: false });

/**
 * How much of the shader a device gets. "full" is a pointer device with
 * WebGL: the shader comes as soon as the page has painted. "light" is a touch
 * device, which gets the same shader on its low profile — half resolution,
 * fewer steps, 30 fps — and only once the page has settled and the
 * connection allows it (see useDeferredStart). "none" keeps the still field
 * for good.
 *
 * None of this changes for the life of the document, so it is decided once
 * and read through a store: the server answers "none", the client answers for
 * itself right after hydration.
 */
type Tier = "none" | "light" | "full";

let decision: Tier | null = null;

function shaderTier(): Tier {
  if (decision !== null) return decision;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return (decision = "none");
  }
  // A touch device is not probed here: the context costs a few dozen
  // milliseconds of main thread on a phone, so it waits for the deferred
  // start and is only paid if the shader is actually coming.
  if (window.matchMedia("(pointer: coarse)").matches) {
    return (decision = "light");
  }
  return (decision = hasWebGL() ? "full" : "none");
}

function hasWebGL(): boolean {
  const canvas = document.createElement("canvas");
  return Boolean(
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl"),
  );
}

const noopSubscribe = () => () => {};

/** Chromium's Network Information API; absent elsewhere, which reads as go. */
interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: string;
}

/**
 * When a touch device may fetch the shader. Its chunk costs seconds of main
 * thread on a mid-range phone, so it waits until the page has loaded, sat for
 * a moment and gone idle — the first tap must never land on the compile —
 * and it never comes at all on a metered or slow connection, where the still
 * field is the better deal.
 */
function useDeferredStart(enabled: boolean): boolean {
  const [go, setGo] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const { connection } = navigator as Navigator & {
      connection?: NetworkInformation;
    };
    if (connection?.saveData) return;
    if (connection?.effectiveType && connection.effectiveType !== "4g") return;

    let settle: ReturnType<typeof setTimeout> | undefined;
    let idle: number | undefined;
    const start = () => {
      if (hasWebGL()) setGo(true);
    };
    const onLoad = () => {
      settle = setTimeout(() => {
        if ("requestIdleCallback" in window) {
          idle = window.requestIdleCallback(start, { timeout: 2000 });
        } else {
          start();
        }
      }, 2500);
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    return () => {
      window.removeEventListener("load", onLoad);
      if (settle !== undefined) clearTimeout(settle);
      if (idle !== undefined) window.cancelIdleCallback(idle);
    };
  }, [enabled]);

  return go;
}

export default function LightPillar({
  className = "",
  quality,
  ...rest
}: LightPillarProps) {
  const tier = useSyncExternalStore(noopSubscribe, shaderTier, () => "none");
  const deferred = useDeferredStart(tier === "light");
  const shader = tier === "full" || (tier === "light" && deferred);
  const [ready, setReady] = useState(false);
  const [standIn, setStandIn] = useState(true);

  return (
    <>
      {shader ? (
        <LightPillarGL
          {...rest}
          quality={quality ?? (tier === "light" ? "low" : "medium")}
          className={cn(
            className,
            "transition-opacity duration-1000 ease-out",
            ready ? "opacity-100" : "opacity-0",
          )}
          onReady={() => setReady(true)}
        />
      ) : null}

      {/* A still field in the theme's own light (see .pillar-stand-in). It
          holds until the shader has a frame on screen, then the two cross-fade
          and it goes — and it stays for good where the shader never comes. */}
      {standIn ? (
        <div
          aria-hidden="true"
          className={cn(
            "pillar-stand-in absolute inset-0 transition-opacity duration-1000 ease-out",
            ready && "opacity-0",
            className,
          )}
          onTransitionEnd={() => {
            if (ready) setStandIn(false);
          }}
        />
      ) : null}
    </>
  );
}
