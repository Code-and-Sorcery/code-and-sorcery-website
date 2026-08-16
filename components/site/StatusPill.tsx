import type { AppStatus } from "@/content/apps";
import { cn } from "@/lib/utils";

export function StatusPill({
  status,
  label,
  className,
}: {
  status: AppStatus;
  label: string;
  className?: string;
}) {
  const live = status === "live";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]",
        live
          ? "border-arcane/30 bg-arcane/10 text-arcane"
          : "border-ember/30 bg-ember/10 text-ember",
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          live ? "animate-pulse-dot bg-arcane" : "bg-ember",
        )}
      />
      {label}
    </span>
  );
}
