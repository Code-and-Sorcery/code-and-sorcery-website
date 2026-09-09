import { cn } from "@/lib/utils";

/** Hairline rule broken in the middle by the house mark. */
export function RuneDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center gap-4 py-2", className)}
    >
      <span className="hairline flex-1" />
      <span className="group/rune -m-2 grid h-6 w-6 shrink-0 place-items-center">
        <span className="h-2 w-2 rotate-45 bg-ember-bright/50 transition-[background-color,box-shadow,transform] duration-500 ease-out group-hover/rune:scale-125 group-hover/rune:bg-ember-bright group-hover/rune:shadow-[0_0_14px_hsl(var(--ember-bright)/0.55)]" />
      </span>
      <span className="hairline flex-1" />
    </div>
  );
}
