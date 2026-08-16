import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * The house mark — the actual logo rather than a redrawn approximation of it.
 * Small placements get a 128px copy; the splash screen keeps the full-size
 * artwork it needs for a 420px mark.
 */
export function Logo({
  className = "h-6 w-6",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/code-and-sorcery-mark.png"
      alt=""
      width={128}
      height={128}
      priority={priority}
      className={cn("shrink-0 object-contain", className)}
    />
  );
}
