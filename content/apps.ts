/**
 * Locale-independent facts about the apps. Everything the reader sees as prose
 * lives in the dictionaries; this file holds versions, links and identifiers.
 */

export type AppStatus = "live" | "building";

export type AppSlug = "env-checker" | "primz" | "lance";

export type AppEntry = {
  slug: AppSlug;
  /** Route under /apps — set once the app has a page of its own. */
  path?: string;
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
  /** Artwork that fills its square, and is rounded to sit on the tile. */
  iconRounded?: boolean;
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
    icon: "/images/env-checker-icon.webp",
    iconRounded: true,
    links: [
      {
        label: "Visual Studio Marketplace",
        href: `https://marketplace.visualstudio.com/items?itemName=${MARKETPLACE_ID}`,
        primary: true,
      },
      {
        label: "Open VSX",
        href: "https://open-vsx.org/extension/CodeandSorcery/vscode-env-checker",
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
    icon: "/images/primz-icon.webp",
    mark: "/images/primz-mark.webp",
    iconBackground: "#ffffff",
    links: [],
  },
  {
    slug: "lance",
    name: "lancé.",
    status: "building",
    surface: "iOS · Android",
    tech: ["React Native", "Bullet", "Filament"],
    accent: "27 70% 70%",
    icon: "/images/lance-icon.webp",
    iconRounded: true,
    links: [],
  },
];

export function getApp(slug: AppSlug): AppEntry {
  const app = apps.find((entry) => entry.slug === slug);
  if (!app) throw new Error(`Unknown app: ${slug}`);
  return app;
}
