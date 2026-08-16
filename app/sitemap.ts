import type { MetadataRoute } from "next";

import { localizePath, locales, SITE_URL } from "@/content/i18n";

// Required by `output: export`.
export const dynamic = "force-static";

/** Locale-agnostic routes; both language variants are emitted for each. */
const routes = [
  "/",
  "/apps",
  "/apps/env-checker",
  "/apps/primz",
  "/studio",
  "/legal",
  "/primz/privacy",
  "/primz/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${localizePath(route, locale)}`,
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((other) => [
            other,
            `${SITE_URL}${localizePath(route, other)}`,
          ]),
        ),
      },
    })),
  );
}
