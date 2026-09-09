"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { swapLocaleInPath } from "@/content/i18n";

/**
 * On navigation the router brings the new page's <main> to the top of the
 * viewport rather than the document itself, so arriving from a scrolled page
 * leaves the header sitting above the fold. Put the document back at zero.
 *
 * Leave back/forward, anchored URLs and the same page in another language
 * alone so their reading position is preserved.
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
    const languageOnly =
      previous.current !== null &&
      swapLocaleInPath(previous.current).href === pathname;
    previous.current = pathname;

    if (isFirstRender || !changed) return;

    if (restoring.current) {
      restoring.current = false;
      return;
    }

    if (languageOnly || window.location.hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
