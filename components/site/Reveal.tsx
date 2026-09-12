"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Fades content up the first time it enters the viewport. Deliberately hand
 * rolled rather than pulled from an animation library: the inner pages ship no
 * other client-side motion code.
 *
 * Fires at the viewport edge, with no offset to hold it back. Siblings pass a
 * short `delay` so a row sweeps in reading order: fired all at once they land
 * in the same frame but finish at different points on screen, which reads as
 * random rather than deliberate. See stagger.ts for the rhythm.
 *
 * Renders visible, and only hides what is below the fold once it has mounted.
 * Shipping the hidden state in the HTML meant a slow connection showed a blank
 * page until hydration — and the largest paint waited on the JavaScript with
 * it. Anything on screen at mount stays exactly as the first paint left it.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);

  // The hidden state lives on the element, not in React: it is only ever
  // applied after mount, and toggling a class is cheaper than a re-render for
  // every card on the page. The rule itself is .reveal-pending in globals.css.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Already in view: leave it. Hiding it now would blank content the reader
    // has been looking at since the first paint.
    if (node.getBoundingClientRect().top < window.innerHeight) return;
    node.classList.add("reveal-pending");

    // Readers who asked for less motion still get the reveal, minus the
    // transition — globals.css zeroes the duration for them.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          node.classList.remove("reveal-pending");
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
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
