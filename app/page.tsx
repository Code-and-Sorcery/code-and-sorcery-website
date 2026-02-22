"use client";

import { useState } from "react";
import Image from "next/image";
import LightPillar from "@/components/LightPillar";
import GlareHover from "@/components/GlareHover";
import CircularText from "@/components/CircularText";

export default function Landing() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <LightPillar
        topColor="#ff5b2d"
        bottomColor="#60a7ff"
        intensity={1.2}
        rotationSpeed={0.25}
        glowAmount={0.0015}
        pillarWidth={10}
        noiseIntensity={0.8}
        pillarRotation={45}
        pillarHeight={0.03}
        quality="high"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div
          className={`relative transition-opacity duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ width: 450, height: 450 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <CircularText
              text="CODE AND SORCERY "
              spinDuration={60}
              size={420}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
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
              />
            </GlareHover>
          </div>
        </div>
      </div>
    </div>
  );
}
