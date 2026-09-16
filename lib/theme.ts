/** Shared with the restore script in app/layout.tsx, which reads both. */
export const THEME_STORAGE_KEY = "cas-theme";
export const THEME_COLOR = { dark: "#070e18", light: "#ffffff" } as const;

export type Theme = keyof typeof THEME_COLOR;

export function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

/**
 * Match the browser chrome to the theme. The entrance keeps its dark canvas
 * in both themes, but its chrome follows the theme like every other page's
 * — a light-theme reader expects the white bar there too.
 */
export function syncThemeColor() {
  const theme = currentTheme();
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLOR[theme]);
}
