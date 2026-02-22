"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LightPillar from "@/components/LightPillar";

export default function Landing() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <LightPillar
        topColor="#ea5b2d"
        bottomColor="#60a7c5"
        intensity={1.2}
        rotationSpeed={0.2}
        glowAmount={0.001}
        pillarWidth={8}
        noiseIntensity={0}
        pillarRotation={42}
        quality="high"
      />

      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div
          className={`transition-opacity duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src="/images/code-and-sorcery-logo.webp"
            alt="Code and Sorcery"
            width={320}
            height={320}
            priority
            onLoad={() => setImageLoaded(true)}
            className="drop-shadow-[0_0_40px_rgba(234,91,45,0.3)]"
          />
        </div>
      </div>
    </div>
  );
}
