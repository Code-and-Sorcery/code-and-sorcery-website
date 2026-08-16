"use client";

import { useCallback, type PointerEvent } from "react";

import { cn } from "@/lib/utils";

/**
 * Surface whose border and inner wash light up wherever the pointer is.
 * The cursor position is handed to CSS through --mx / --my; all the drawing
 * happens in the .spell-card rules in globals.css.
 */
export function SpellCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  const track = useCallback((event: PointerEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    target.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <Tag
      onPointerMove={track}
      className={cn("spell-card surface rounded-lg", className)}
    >
      {children}
    </Tag>
  );
}
