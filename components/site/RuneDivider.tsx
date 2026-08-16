import { cn } from "@/lib/utils";

/** Hairline rule broken in the middle by the house mark. */
export function RuneDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center gap-4 py-2", className)}
    >
      <span className="hairline flex-1" />
      <span className="relative h-2 w-2 rotate-45 bg-gradient-to-br from-ember to-arcane" />
      <span className="hairline flex-1" />
    </div>
  );
}
