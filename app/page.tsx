"use client";

import { useState } from "react";
import Image from "next/image";
import LightPillar from "@/components/LightPillar";
import GlareHover from "@/components/GlareHover";
import CircularText from "@/components/CircularText";
import LogoLoop from "@/components/LogoLoop";
import type { LogoItem } from "@/components/LogoLoop";

const basePath = "/code-and-sorcery-website";

const techLogos: LogoItem[] = [
  { src: `${basePath}/svg/reactjs.svg`, alt: "React" },
  { src: `${basePath}/svg/nextjs.svg`, alt: "Next.js" },
  { src: `${basePath}/svg/typescript.svg`, alt: "TypeScript" },
  { src: `${basePath}/svg/nodejs.svg`, alt: "Node.js" },
  { src: `${basePath}/svg/python.svg`, alt: "Python" },
  { src: `${basePath}/svg/tailwindcss.svg`, alt: "Tailwind CSS" },
  { src: `${basePath}/svg/postgresql.svg`, alt: "PostgreSQL" },
  { src: `${basePath}/svg/mongodb.svg`, alt: "MongoDB" },
  { src: `${basePath}/svg/graphql.svg`, alt: "GraphQL" },
  { src: `${basePath}/svg/solidity.svg`, alt: "Solidity" },
  { src: `${basePath}/svg/playwright.svg`, alt: "Playwright" },
  { src: `${basePath}/svg/vitest.svg`, alt: "Vitest" },
  { src: `${basePath}/svg/storybook.svg`, alt: "Storybook" },
  { src: `${basePath}/svg/eslint.svg`, alt: "ESLint" },
  { src: `${basePath}/svg/zod.svg`, alt: "Zod" },
];

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
              spinDuration={120}
              onHover="slowDown"
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
      <div
        className="absolute bottom-6 left-0 right-0 z-10 opacity-50 flex justify-center max-w-[1000px] mx-auto"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      >
        <LogoLoop
          logos={techLogos}
          logoHeight={30}
          speed={20}
          hoverSpeed={0}
          pauseOnHover
          ariaLabel="Technologies we use"
          scaleOnHover={true}
          gap={45}
        />
      </div>
    </div>
  );
}
