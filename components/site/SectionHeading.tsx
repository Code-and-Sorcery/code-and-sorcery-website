import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={cn(
        "space-y-4",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {lead ? (
        <p className="max-w-2xl text-base leading-relaxed text-fg-dim">
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
