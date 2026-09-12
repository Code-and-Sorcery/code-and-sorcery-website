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

/** Static stand-in for the shader: same diagonal, no GPU. */
function fallbackGradient(
  topColor: string,
  bottomColor: string,
  rotation: number,
) {
  return `linear-gradient(${135 + rotation}deg, transparent 34%, ${topColor}2e calc(47% + var(--pillar-color-shift, 0%)), ${bottomColor}2e calc(57% + var(--pillar-color-shift, 0%)), transparent 70%)`;
}

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
  topColor = "#5227FF",
  bottomColor = "#FF9FFC",
  pillarRotation = 0,
  followTheme = false,
  className = "",
  ...rest
}: LightPillarProps) {
  const shader = useSyncExternalStore(noopSubscribe, wantsShader, () => false);
  const [ready, setReady] = useState(false);

  return (
    <>
      {shader ? (
        <LightPillarGL
          {...rest}
          topColor={topColor}
          bottomColor={bottomColor}
          pillarRotation={pillarRotation}
          followTheme={followTheme}
          className={className}
          onReady={() => setReady(true)}
        />
      ) : null}

      {/* Stays up until the shader has a frame on screen, so the swap never
          shows a bare frame — and stays for good where it never does. */}
      {ready ? null : (
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0",
            followTheme && "pillar-follow-theme",
            className,
          )}
          style={{
            background: fallbackGradient(topColor, bottomColor, pillarRotation),
          }}
        />
      )}
    </>
  );
}
