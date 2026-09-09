/** Shared with the restore script in app/layout.tsx, which reads both. */
export const THEME_STORAGE_KEY = "cas-theme";
export const THEME_COLOR = { dark: "#070e18", light: "#ffffff" } as const;

export type Theme = keyof typeof THEME_COLOR;

export function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

/** Match the page canvas, including the splash's shared dark background. */
export function syncThemeColor() {
  const theme = document.documentElement.dataset.chrome === "dark" ? "dark" : currentTheme();
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLOR[theme]);
}
