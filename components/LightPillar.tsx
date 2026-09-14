"use client";

import dynamic from "next/dynamic";
import { useState, useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

import type { LightPillarProps } from "./LightPillarGL";

/**
 * The shader is 700 kB of three.js plus a full-screen fragment program, so it
 * is fetched only after the page has painted, and only where it earns its
 * keep: a pointer device, a working WebGL context, no request for reduced
 * motion. Everything else — and every first paint — gets the gradient below,
 * which draws the same diagonal for nothing.
 *
 * Loading it this way also keeps three.js out of the entrance route's chunk
 * list, so the <Link href="/"> on every other page stops prefetching it.
 */
const LightPillarGL = dynamic(() => import("./LightPillarGL"), { ssr: false });

/**
 * None of this changes for the life of the document, so it is decided once
 * and read through a store: the server answers no, the client answers for
 * itself right after hydration.
 */
let decision: boolean | null = null;

function wantsShader(): boolean {
  if (decision !== null) return decision;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return (decision = false);
  }
  // Phones. The chunk alone costs seconds of main thread on a mid-range
  // device, and the shader then runs for the life of the page.
  if (window.matchMedia("(pointer: coarse)").matches) {
    return (decision = false);
  }

  const canvas = document.createElement("canvas");
  return (decision = Boolean(
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl"),
  ));
}

const noopSubscribe = () => () => {};

export default function LightPillar({
  className = "",
  ...rest
}: LightPillarProps) {
  const shader = useSyncExternalStore(noopSubscribe, wantsShader, () => false);
  const [ready, setReady] = useState(false);
  const [standIn, setStandIn] = useState(true);

  return (
    <>
      {shader ? (
        <LightPillarGL
          {...rest}
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
