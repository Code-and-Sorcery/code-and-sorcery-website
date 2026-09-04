import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";
import { stagger } from "./stagger";

export type TechItem = {
  name: string;
  src: string;
  /** Flat white artwork, which has nothing left to show on the light page. */
  invertOnLight?: boolean;
};

export const techStack: TechItem[] = [
  { name: "TypeScript", src: "/svg/typescript.svg" },
  { name: "React", src: "/svg/reactjs.svg" },
  { name: "Next.js", src: "/svg/nextjs.svg" },
  { name: "Node.js", src: "/svg/nodejs.svg" },
  { name: "Tailwind CSS", src: "/svg/tailwindcss.svg" },
  { name: "Radix UI", src: "/svg/radixui.svg" },
  { name: "PostgreSQL", src: "/svg/postgresql.svg" },
  { name: "MongoDB", src: "/svg/mongodb.svg" },
  { name: "GraphQL", src: "/svg/graphql.svg" },
  { name: "Python", src: "/svg/python.svg" },
  { name: "Solidity", src: "/svg/solidity.svg", invertOnLight: true },
  { name: "Vitest", src: "/svg/vitest.svg" },
  { name: "Playwright", src: "/svg/playwright.svg" },
  { name: "Storybook", src: "/svg/storybook.svg" },
  { name: "Zod", src: "/svg/zod.svg" },
  { name: "VS Code", src: "/svg/vscode.svg" },
];

export function TechGrid() {
  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
      {techStack.map((tech, index) => (
        <Reveal as="li" key={tech.name} delay={stagger(index)}>
          <div className="surface flex items-center gap-3 rounded-md px-3.5 py-3 transition-colors hover:border-line-strong">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tech.src}
              alt=""
              width={20}
              height={20}
              loading="lazy"
              className={cn(
                "h-5 w-5 shrink-0 rounded-[3px] object-contain",
                tech.invertOnLight && "invert-on-light",
              )}
            />
            <span className="truncate text-[13px] text-fg-dim">
              {tech.name}
            </span>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
