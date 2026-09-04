"use client";

import { useEffect } from "react";

/**
 * Binds a bare letter key on the document — the same set the resume this site
 * shares its furniture with uses. Modified presses are left alone so the
 * browser and OS shortcuts keep working, as is anything typed into a field.
 *
 * `run` has to be stable, or the listener is torn down and rebuilt on every
 * render: wrap it in useCallback.
 */
export function useShortcut(key: string, run: () => void) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.repeat || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (/^(input|textarea|select)$/i.test(target?.tagName ?? "")) return;

      if (event.key.toLowerCase() !== key) return;
      run();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [key, run]);
}
