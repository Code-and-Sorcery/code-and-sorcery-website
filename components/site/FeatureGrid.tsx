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
          <Reveal delay={stagger(index)}>
            <div className="flex items-center gap-[1.125rem]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rotate-45 bg-ember-bright/50 transition-[background-color,box-shadow,transform] duration-500 ease-out group-hover:scale-125 group-hover:bg-ember-bright group-hover:shadow-[0_0_14px_hsl(var(--ember-bright)/0.55)]"
              />
              <h3 className="text-sm font-semibold">{item.title}</h3>
            </div>
            <p className="mt-2 pl-6 text-sm leading-relaxed text-fg-faint">
              {item.body}
            </p>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
