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
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {techStack.map((tech, index) => (
        <Reveal as="li" key={tech.name} delay={stagger(index)}>
          <div className="group flex h-full flex-col items-start gap-4 rounded-xl border border-line bg-ink-raised p-4 transition-[border-color,box-shadow] duration-300 hover:border-interactive-border hover:shadow-[0_8px_24px_-12px_hsl(var(--card-glow)/0.45)] sm:flex-row sm:items-center sm:p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line bg-veil transition-colors duration-300 group-hover:border-interactive-border/50 group-hover:bg-active-panel">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.src}
                alt=""
                width={28}
                height={28}
                loading="lazy"
                className={cn(
                  "h-7 w-7 object-contain",
                  tech.invertOnLight && "invert-on-light",
                )}
              />
            </span>
            <span className="text-sm font-medium leading-snug text-fg transition-colors duration-300 group-hover:text-interactive">
              {tech.name}
            </span>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
