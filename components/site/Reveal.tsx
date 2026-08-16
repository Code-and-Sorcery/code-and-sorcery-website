"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Fades content up the first time it enters the viewport. Deliberately hand
 * rolled rather than pulled from an animation library: the inner pages ship no
 * other client-side motion code.
 *
 * No stagger and no trigger offset: content moves the moment it touches the
 * viewport edge, because anything else reads as lag while you are scrolling.
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Readers who asked for less motion still get the reveal, minus the
    // transition — globals.css zeroes the duration for them.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px", threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal=""
      className={cn(
        "transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
