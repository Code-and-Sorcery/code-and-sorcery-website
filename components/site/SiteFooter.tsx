
import { MailIcon } from "@/components/Icons";
import { apps } from "@/content/apps";
import type { Dictionary } from "@/content/dictionaries";
import {
  CONTACT_EMAIL,
  LEGAL_DOCS,
  localizePath,
  SOCIALS,
  type Locale,
} from "@/content/i18n";

import { Logo } from "./Logo";
import { TransitionLink } from "./ViewTransitions";

export function SiteFooter({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const columns = [
    {
      title: dict.footer.siteTitle,
      links: [
        { label: dict.nav.home, href: localizePath("/", locale) },
        { label: dict.nav.apps, href: localizePath("/apps", locale) },
        { label: dict.nav.studio, href: localizePath("/studio", locale) },
      ],
    },
    {
      title: dict.footer.appsTitle,
      /* Only the apps with a page of their own: the ones still on the anvil
         are listed on /apps and have nowhere else to go. */
      links: apps.flatMap((app) =>
        app.path
          ? [{ label: app.name, href: localizePath(app.path, locale) }]
          : [],
      ),
    },
    {
      title: dict.footer.legalTitle,
      links: [
        { label: dict.nav.legal, href: localizePath("/legal", locale) },
        ...LEGAL_DOCS.map((doc) => ({
          label: dict.legal[doc.key].title,
          href: localizePath(doc.path, locale),
        })),
      ],
    },
  ];

  const external = [
    { label: "GitHub", href: SOCIALS.github },
    { label: "Code and Sorcery", href: SOCIALS.org },
    { label: "LinkedIn", href: SOCIALS.linkedin },
    { label: dict.studio.elsewhere[2].label, href: SOCIALS.resume },
  ];

  return (
    <footer className="relative mt-24 border-t border-line bg-ink-sunken/60">
      <div className="container py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]">
          <div className="space-y-4">
            <TransitionLink
              href={localizePath("/", locale)}
              className="inline-flex items-center gap-2.5"
            >
              <Logo className="h-7 w-7" />
              <span className="text-sm font-semibold">Code and Sorcery</span>
            </TransitionLink>
            <p className="max-w-xs text-sm leading-relaxed text-fg-faint">
              {dict.footer.tagline}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="link-wipe inline-flex items-center gap-2 font-mono text-xs text-fg-dim transition-colors hover:text-interactive"
            >
              <MailIcon className="h-3.5 w-3.5" />
              {CONTACT_EMAIL}
            </a>
          </div>

          {columns.map((column) => (
            <nav key={column.title} className="space-y-3.5">
              <h2 className="eyebrow">{column.title}</h2>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <TransitionLink
                      href={link.href}
                      className="text-sm text-fg-faint transition-colors hover:text-interactive"
                    >
                      {link.label}
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav className="space-y-3.5">
            <h2 className="eyebrow">{dict.footer.elsewhereTitle}</h2>
            <ul className="space-y-2.5">
              {external.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-fg-faint transition-colors hover:text-interactive"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {dict.footer.rights}
          </p>
          <p>codeandsorcery.fr</p>
        </div>
      </div>
    </footer>
  );
}
