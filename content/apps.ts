/**
 * Locale-independent facts about the apps. Everything the reader sees as prose
 * lives in the dictionaries; this file holds versions, links and identifiers.
 */

export type AppStatus = "live" | "building";

export type AppSlug = "env-checker" | "primz";

export type AppEntry = {
  slug: AppSlug;
  /** Route under /apps. */
  path: string;
  name: string;
  status: AppStatus;
  /** Mono metadata rendered as `key · key · key` on the card. */
  surface: string;
  license?: string;
  tech: string[];
  /** Per-app accent, as an HSL triple so it can drop into `hsl(...)`. */
  accent: string;
  /** The app's own store icon, copied out of its repository. */
  icon: string;
  /** Compact glyph for small tiles, where a logotype turns to mush. */
  mark?: string;
  /** Tile colour behind the icon — set when the artwork has a transparent
   *  background and is too dark to read on ink. */
  iconBackground?: string;
  links: { label: string; href: string; primary?: boolean }[];
};

export const MARKETPLACE_ID = "CodeandSorcery.vscode-env-checker";

export const apps: AppEntry[] = [
  {
    slug: "env-checker",
    path: "/apps/env-checker",
    name: "Env Checker",
    status: "live",
    surface: "VS Code",
    license: "MIT",
    tech: ["TypeScript", "VS Code API", "esbuild"],
    accent: "199 89% 64%",
    icon: "/images/env-checker-icon.png",
    links: [
      {
        label: "Marketplace",
        href: `https://marketplace.visualstudio.com/items?itemName=${MARKETPLACE_ID}`,
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/Code-and-Sorcery/vscode-env-checker",
      },
    ],
  },
  {
    slug: "primz",
    path: "/apps/primz",
    name: "Primz",
    status: "building",
    surface: "iOS · Android",
    tech: ["React Native", "Expo", "SQLite"],
    accent: "184 39% 34%",
    icon: "/images/primz-icon.png",
    mark: "/images/primz-mark.png",
    iconBackground: "#ffffff",
    links: [],
  },
];

export function getApp(slug: AppSlug): AppEntry {
  const app = apps.find((entry) => entry.slug === slug);
  if (!app) throw new Error(`Unknown app: ${slug}`);
  return app;
}
