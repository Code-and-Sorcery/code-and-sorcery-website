/** Shared with the restore script in app/layout.tsx, which reads both. */
export const THEME_STORAGE_KEY = "cas-theme";
export const THEME_COLOR = { dark: "#08080a", light: "#f9f8fc" } as const;

export type Theme = keyof typeof THEME_COLOR;

export function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

/**
 * Repaints the browser chrome to match the top of the page. That is not always
 * the reader's theme — the splash keeps the dark palette either way and says so
 * with data-chrome while it is mounted.
 */
export function syncThemeColor() {
  const root = document.documentElement;
  const theme = root.dataset.chrome === "dark" ? "dark" : currentTheme();
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLOR[theme]);
}
