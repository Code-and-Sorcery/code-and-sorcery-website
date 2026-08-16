"use client";

import { useEffect, useState } from "react";

/** Thin gradient bar under the header showing how far down the document you are. */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = document.documentElement;

    const update = () => {
      // Both figures come off the same element: mixing scrollHeight with
      // window.innerHeight compares two different box models, and the ends stop
      // lining up. Clamped as well, since scrollHeight is a rounded integer
      // while scrollTop is not, so the last fraction of a pixel would otherwise
      // leave the bar just short of the end.
      const scrollable = root.scrollHeight - root.clientHeight;
      const ratio = scrollable > 0 ? root.scrollTop / scrollable : 1;
      setProgress(Math.min(1, Math.max(0, ratio)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    // A page can still grow after mount — a font swapping in, an image settling
    // — and neither scroll nor resize fires for that, which would freeze the
    // bar against a stale document height.
    const observer = new ResizeObserver(update);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[55] h-px bg-transparent"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-ember to-arcane"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
