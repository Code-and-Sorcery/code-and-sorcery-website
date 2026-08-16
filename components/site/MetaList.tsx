import { cn } from "@/lib/utils";

export function MetaList({
  items,
  className,
}: {
  items: { label: string; value: React.ReactNode }[];
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "divide-y divide-line overflow-hidden rounded-lg border border-line",
        className,
      )}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-baseline justify-between gap-6 bg-white/[0.02] px-4 py-3"
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
