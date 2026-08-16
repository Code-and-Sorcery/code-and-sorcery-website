import type { Metadata } from "next";

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

/**
 * English lives at the root of the tree, French under /fr. Keeping English
 * unprefixed preserves the /primz/privacy and /primz/terms URLs that are
 * already referenced from the app stores.
 */
export const defaultLocale: Locale = "en";

export const SITE_URL = "https://codeandsorcery.fr";
export const CONTACT_EMAIL = "contact@codeandsorcery.fr";

export const SOCIALS = {
  github: "https://github.com/Varadiell",
  org: "https://github.com/Code-and-Sorcery",
  linkedin: "https://www.linkedin.com/in/williamsimonvezo/",
  resume: "https://varadiell.github.io/CurriculumVitae/",
} as const;

/** Turns a locale-agnostic route into the real path for `locale`. */
export function localizePath(path: string, locale: Locale): string {
  const clean = path === "/" ? "" : path.replace(/\/+$/, "");
  if (locale === defaultLocale) return clean || "/";
  return `/fr${clean}`;
}

/** The same page in the other language — powers the locale switch. */
export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "fr" : "en";
}

/**
 * Given the current pathname, returns the same page in the other locale.
 * Used by the locale switch, which only knows the URL it is sitting on.
 */
export function swapLocaleInPath(pathname: string): {
  href: string;
  target: Locale;
} {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/fr" || path.startsWith("/fr/")) {
    return { href: path.slice(3) || "/", target: "en" };
  }
  return { href: `/fr${path === "/" ? "" : path}`, target: "fr" };
}

/** Canonical + hreflang set for a locale-agnostic route. */
export function alternatesFor(path: string, locale: Locale) {
  const languages = {
    en: `${SITE_URL}${localizePath(path, "en")}`,
    fr: `${SITE_URL}${localizePath(path, "fr")}`,
    "x-default": `${SITE_URL}${localizePath(path, "en")}`,
  };
  return { canonical: languages[locale], languages };
}

/** Shared metadata builder for every page in the site. */
export function pageMetadata({
  title,
  description,
  path,
  locale,
  /** Skip the "| Code and Sorcery" suffix — used by the home page. */
  titleAbsolute = false,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  titleAbsolute?: boolean;
}): Metadata {
  const url = `${SITE_URL}${localizePath(path, locale)}`;
  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    alternates: alternatesFor(path, locale),
    openGraph: {
      title,
      description,
      url,
      siteName: "Code and Sorcery",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [{ url: `${SITE_URL}/images/code-and-sorcery.png` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/images/code-and-sorcery.png`],
    },
  };
}
