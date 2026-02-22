"use client";

import { useState } from "react";
import Image from "next/image";
import LightPillar from "@/components/LightPillar";
import GlareHover from "@/components/GlareHover";

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

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div
          className={`transition-opacity duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <GlareHover
            width="300px"
            height="300px"
            background="transparent"
            borderRadius="50%"
            borderColor="rgba(255,255,255,0.08)"
            glareOpacity={0.1}
            glareAngle={-45}
            glareSize={300}
            transitionDuration={1000}
          >
            <Image
              src="/images/code-and-sorcery-logo.webp"
              alt="Code and Sorcery"
              width={300}
              height={300}
              priority
              onLoad={() => setImageLoaded(true)}
              className="block h-full w-full drop-shadow-[0_0_40px_rgba(234,91,45,0.3)]"
            />
          </GlareHover>
        </div>
      </div>
    </div>
  );
}
