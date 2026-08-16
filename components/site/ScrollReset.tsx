"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * On navigation the router brings the new page's <main> to the top of the
 * viewport rather than the document itself, so arriving from a scrolled page
 * leaves the header sitting above the fold. Put the document back at zero.
 *
 * Two cases must be left alone: back/forward, where the browser is restoring a
 * position on purpose, and a URL carrying an anchor, which names its own
 * destination.
 */
export function ScrollReset() {
  const pathname = usePathname();
  const previous = useRef<string | null>(null);
  const restoring = useRef(false);

  useEffect(() => {
    const onPopState = () => {
      restoring.current = true;
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const isFirstRender = previous.current === null;
    const changed = previous.current !== pathname;
    previous.current = pathname;

    if (isFirstRender || !changed) return;

    if (restoring.current) {
      restoring.current = false;
      return;
    }

    if (window.location.hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
