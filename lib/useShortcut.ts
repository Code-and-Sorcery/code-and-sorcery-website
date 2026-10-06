"use client";

import { useEffect, type RefObject } from "react";

/** As long as the kbd-press animation in globals.css. */
const PRESS_MS = 260;

/**
 * Binds a bare letter key on the document — the same set the resume this site
 * shares its furniture with uses. Modified presses are left alone so the
 * browser and OS shortcuts keep working, as is anything typed into a field.
 *
 * `run` has to be stable, or the listener is torn down and rebuilt on every
 * render: wrap it in useCallback.
 */
export function useShortcut(
  key: string,
  run: () => void,
  /**
   * The control whose shortcut badge should play along — see .kbd-hint in
   * globals.css. Clicking it is its own feedback; this is for the key, which
   * otherwise gives none.
   */
  badge?: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.repeat || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (/^(input|textarea|select)$/i.test(target?.tagName ?? "")) return;

      if (event.key.toLowerCase() !== key) return;

      const element = badge?.current;
      if (element) {
        delete element.dataset.pressed;
        // Reading the layout back restarts the animation rather than letting
        // a press that lands mid-flight pass unseen.
        void element.offsetWidth;
        element.dataset.pressed = "";
        window.setTimeout(() => delete element.dataset.pressed, PRESS_MS);
      }

      run();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [key, run, badge]);
}
