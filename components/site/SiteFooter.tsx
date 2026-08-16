import Link from "next/link";

import { MailIcon } from "@/components/Icons";
import { apps } from "@/content/apps";
import type { Dictionary } from "@/content/dictionaries";
import { CONTACT_EMAIL, localizePath, SOCIALS, type Locale } from "@/content/i18n";

import { Sigil } from "./Sigil";

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
      links: apps.map((app) => ({
        label: app.name,
        href: localizePath(app.path, locale),
      })),
    },
    {
      title: dict.footer.legalTitle,
      links: [
        { label: dict.nav.legal, href: localizePath("/legal", locale) },
        {
          label: dict.legal.primzPrivacy.title,
          href: localizePath("/primz/privacy", locale),
        },
        {
          label: dict.legal.primzTerms.title,
          href: localizePath("/primz/terms", locale),
        },
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
            <Link
              href={localizePath("/", locale)}
              className="inline-flex items-center gap-2.5"
            >
              <Sigil className="h-6 w-6 text-fg-dim" gradientId="footer-sigil" />
              <span className="text-sm font-semibold">Code and Sorcery</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-fg-faint">
              {dict.footer.tagline}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="link-wipe inline-flex items-center gap-2 font-mono text-xs text-fg-dim transition-colors hover:text-fg"
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
                    <Link
                      href={link.href}
                      className="text-sm text-fg-faint transition-colors hover:text-fg"
                    >
                      {link.label}
                    </Link>
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
                    className="text-sm text-fg-faint transition-colors hover:text-fg"
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
