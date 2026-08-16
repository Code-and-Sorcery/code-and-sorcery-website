import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";
import { stagger } from "./stagger";

export function FeatureGrid({
  items,
  columns = 3,
  className,
}: {
  items: { title: string; body: string }[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-px overflow-hidden rounded-lg border border-line bg-line",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {items.map((item, index) => (
        // The cell itself stays put — only its contents fade in, so the grid
        // never flashes as a bare block of separator colour.
        <li
          key={item.title}
          className="group relative bg-ink/80 p-6 backdrop-blur-sm transition-colors hover:bg-ink-raised/80"
        >
          <span className="absolute left-6 top-[1.7rem] h-1.5 w-1.5 rotate-45 bg-line-strong transition-colors group-hover:bg-ember" />
          <Reveal delay={stagger(index)} className="pl-6">
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-faint">
              {item.body}
            </p>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
