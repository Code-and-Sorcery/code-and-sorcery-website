import Image from "next/image";

import type { AppEntry } from "@/content/apps";
import { cn } from "@/lib/utils";

/**
 * An app's own icon on a tile. Artwork with a transparent background gets the
 * solid colour named in the catalogue; everything else sits on a wash of the
 * app's accent. Padding is proportional so one component covers a 20px mark in
 * a legal header and a 64px one beside a page title.
 */
export function AppIcon({
  app,
  className = "h-11 w-11 rounded-xl",
  /** Prefer the glyph over the store icon — legible below roughly 48px. */
  compact = false,
}: {
  app: AppEntry;
  className?: string;
  compact?: boolean;
}) {
  const src = compact && app.mark ? app.mark : app.icon;

  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center overflow-hidden border border-line",
        className,
      )}
      style={{ background: app.iconBackground ?? `hsl(${app.accent} / 0.16)` }}
    >
      <Image
        src={src}
        alt=""
        width={128}
        height={128}
        className="h-full w-full object-contain p-[9%]"
      />
    </span>
  );
}
