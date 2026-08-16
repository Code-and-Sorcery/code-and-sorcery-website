import { cn } from "@/lib/utils";

export function MetaList({
  items,
  className,
}: {
  items: { label: string; value: React.ReactNode }[];
  className?: string;
}) {
  return (
    // Opaque, unlike the glass surfaces elsewhere: those blur what is behind
    // them, and this one carried no blur, so the backdrop grid ran straight
    // through the rows.
    <dl
      className={cn(
        "divide-y divide-line overflow-hidden rounded-lg border border-line bg-ink-raised",
        className,
      )}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-baseline justify-between gap-6 px-4 py-3"
        >
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-faint">
            {item.label}
          </dt>
          <dd className="text-right text-sm text-fg-dim">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
