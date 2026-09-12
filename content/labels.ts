import type { Dictionary } from "./dictionaries";

/**
 * The strings the client-side chrome renders, picked out of the dictionary on
 * the server. Whatever a client component is handed is serialised into every
 * page — passed the whole dictionary, the header shipped the legal corpus in
 * both languages on every route, and the entrance bundled it into its script.
 *
 * Plain functions, kept out of the "use client" modules that consume them:
 * imported from one of those, a server component would get a client reference
 * rather than something it can call.
 */

export type HeaderLabels = {
  apps: string;
  studio: string;
  legal: string;
  menu: string;
  theme: string;
  switchTo: string;
  switchAria: string;
};

export function headerLabels(dict: Dictionary): HeaderLabels {
  return {
    apps: dict.nav.apps,
    studio: dict.nav.studio,
    legal: dict.nav.legal,
    menu: dict.nav.menu,
    theme: dict.nav.theme,
    switchTo: dict.switchTo,
    switchAria: dict.switchAria,
  };
}

/** Everything the entrance says. */
export type SplashCopy = {
  header: HeaderLabels;
  tagline: string;
  subtitle: string;
  enter: string;
  contact: string;
  rights: string;
};

export function splashCopy(dict: Dictionary): SplashCopy {
  return {
    header: headerLabels(dict),
    tagline: dict.splash.tagline,
    subtitle: dict.splash.subtitle,
    enter: dict.splash.enter,
    contact: dict.splash.contact,
    rights: dict.footer.rights,
  };
}
