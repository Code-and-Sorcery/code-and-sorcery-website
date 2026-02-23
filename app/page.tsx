"use client";

import { useState } from "react";
import Image from "next/image";
import LightPillar from "@/components/LightPillar";
import GlareHover from "@/components/GlareHover";
import CircularText from "@/components/CircularText";
import LogoLoop from "@/components/LogoLoop";
import type { LogoItem } from "@/components/LogoLoop";

const techLogos: LogoItem[] = [
  { src: "/svg/reactjs.svg", alt: "React" },
  { src: "/svg/nextjs.svg", alt: "Next.js" },
  { src: "/svg/typescript.svg", alt: "TypeScript" },
  { src: "/svg/nodejs.svg", alt: "Node.js" },
  { src: "/svg/python.svg", alt: "Python" },
  { src: "/svg/tailwindcss.svg", alt: "Tailwind CSS" },
  { src: "/svg/postgresql.svg", alt: "PostgreSQL" },
  { src: "/svg/mongodb.svg", alt: "MongoDB" },
  { src: "/svg/graphql.svg", alt: "GraphQL" },
  { src: "/svg/solidity.svg", alt: "Solidity" },
  { src: "/svg/playwright.svg", alt: "Playwright" },
  { src: "/svg/vitest.svg", alt: "Vitest" },
  { src: "/svg/storybook.svg", alt: "Storybook" },
  { src: "/svg/eslint.svg", alt: "ESLint" },
  { src: "/svg/zod.svg", alt: "Zod" },
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
          className={`relative aspect-square transition-opacity duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ width: "min(450px, 66vw, 80vh)", height: "min(450px, 66vw, 70vh)" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <CircularText
              text="CODE AND SORCERY "
              spinDuration={120}
              onHover="slowDown"
              size="93.33%"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <GlareHover
              width="66.67%"
              height="66.67%"
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
                fill
                sizes="min(300px, 44vw)"
                priority
                onLoad={() => setImageLoaded(true)}
                style={{ objectFit: "contain" }}
              />
            </GlareHover>
          </div>
        </div>
      </div>

      <a
        href="mailto:contact@codeandsorcery.fr"
        className="absolute top-6 left-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-white/15"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 4L12 13 2 4" />
        </svg>
        Contact
      </a>

      <div className="absolute top-6 right-6 z-10 flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/williamsimonvezo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-white/15"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href="https://github.com/Varadiell"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-white/15"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
      </div>
      <div
        className="absolute bottom-6 left-0 right-0 z-10 flex justify-center max-w-[1000px] mx-auto"
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
