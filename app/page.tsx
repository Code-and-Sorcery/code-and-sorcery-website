"use client";

import { useState } from "react";
import Image from "next/image";
import LightPillar from "@/components/LightPillar";
import GlareHover from "@/components/GlareHover";
import CircularText from "@/components/CircularText";
import LogoLoop from "@/components/LogoLoop";
import type { LogoItem } from "@/components/LogoLoop";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MailIcon, LinkedInIcon, GitHubIcon, ResumeIcon } from "@/components/Icons";

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

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center -mt-[25px]">
        <div
          className={`relative transition-opacity duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ width: "min(450px, 66vw, 80vh)", aspectRatio: "1 / 1" }}
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

      <div className="absolute top-6 left-6 right-6 z-10 mx-auto flex max-w-[1000px] items-center justify-between">
      <a
        href="mailto:contact@codeandsorcery.fr"
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-white/15"
      >
        <MailIcon />
        Contact
      </a>

      <div className="flex items-center gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://www.linkedin.com/in/williamsimonvezo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-white/15"
            >
              <LinkedInIcon />
            </a>
          </TooltipTrigger>
          <TooltipContent className="bg-black text-white border-white/20">LinkedIn</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://github.com/Varadiell"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-white/15"
            >
              <GitHubIcon />
            </a>
          </TooltipTrigger>
          <TooltipContent className="bg-black text-white border-white/20">GitHub</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://varadiell.github.io/CurriculumVitae/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CV"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-white/15"
            >
              <ResumeIcon />
            </a>
          </TooltipTrigger>
          <TooltipContent className="bg-black text-white border-white/20">Resume</TooltipContent>
        </Tooltip>
      </div>
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
