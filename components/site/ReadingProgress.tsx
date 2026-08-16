"use client";

import { useEffect, useState } from "react";

/** Thin gradient bar under the header showing how far down the document you are. */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
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
