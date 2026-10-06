"use client";

import { useCallback, useEffect, useRef } from "react";

import { MoonIcon, SunIcon } from "@/components/Icons";
import {
  currentTheme,
  syncThemeColor,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";
import { useShortcut } from "@/lib/useShortcut";

let swapTimer = 0;

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  // Colours live in custom properties, so the swap is instantaneous and reads
  // as a jump. .theme-switching fades it, and is taken back off afterwards so
  // it stops shadowing the hover transitions — see globals.css.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    root.classList.add("theme-switching");
    window.clearTimeout(swapTimer);
    swapTimer = window.setTimeout(
      () => root.classList.remove("theme-switching"),
      500,
    );
  }

  root.dataset.theme = theme;
  syncThemeColor();
}

/**
 * Dark / light switch. The glyphs are swapped by CSS off html[data-theme]
 * rather than by React state, so the button renders identically on the server
 * and on the client and never has a wrong first frame to correct.
 */
export function ThemeToggle({ label }: { label: string }) {
  const button = useRef<HTMLButtonElement>(null);

  // Nothing is stored until the reader picks a side; until then the OS
  // preference stays in charge, including when it flips mid-visit.
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: light)");

    const follow = (event: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem(THEME_STORAGE_KEY)) return;
      } catch {
        /* private mode — no stored choice to honour either way */
      }
      applyTheme(event.matches ? "light" : "dark");
    };

    query.addEventListener("change", follow);
    return () => query.removeEventListener("change", follow);
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = currentTheme() === "light" ? "dark" : "light";
    applyTheme(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* private mode — the choice just does not survive the tab */
    }
  }, []);

  useShortcut("t", toggle, button);

  return (
    <button
      ref={button}
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      data-key="T"
      className="kbd-hint inline-flex h-9 w-9 items-center justify-center rounded-full border border-edge bg-panel text-fg-dim backdrop-blur-sm transition-colors hover:border-edge-strong hover:text-interactive md:w-auto md:gap-2 md:px-3"
    >
      <span className="grid place-items-center">
        <SunIcon className="theme-icon theme-icon--sun h-4 w-4" />
        <MoonIcon className="theme-icon theme-icon--moon h-4 w-4" />
      </span>
    </button>
  );
}
