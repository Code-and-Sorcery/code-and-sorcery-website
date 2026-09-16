"use client";

import { usePathname } from "next/navigation";

import { LEGAL_DOCS, localizePath, type Locale } from "@/content/i18n";
import type { HeaderLabels } from "@/content/labels";
import { cn } from "@/lib/utils";

import { LocaleSwitch } from "./LocaleSwitch";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { ThemeToggle } from "./ThemeToggle";
import { TransitionLink } from "./ViewTransitions";

export function SiteHeader({
  labels,
  locale,
  floating = false,
}: {
  /** Only what is rendered — see content/labels.ts for why. */
  labels: HeaderLabels;
  locale: Locale;
  /** Splash mode: sits over the shader without a background or border. */
  floating?: boolean;
}) {
  const pathname = usePathname() ?? "/";

  // Each entry lights up for its own route and everything under it. The
  // legal documents live under their app's prefix, so that section names
  // them one by one.
  const nav = [
    { route: "/apps", label: labels.apps, covers: ["/apps"] },
    { route: "/studio", label: labels.studio, covers: ["/studio"] },
    {
      route: "/legal",
      label: labels.legal,
      covers: ["/legal", ...LEGAL_DOCS.map((doc) => doc.path)],
    },
  ].map((item) => {
    const paths = item.covers.map((route) => localizePath(route, locale));
    return {
      href: localizePath(item.route, locale),
      label: item.label,
      active: paths.some(
        (path) => pathname === path || pathname.startsWith(`${path}/`),
      ),
    };
  });

  return (
    /* site-header lifts it out of the page's route transition: it keeps its
       place while the page underneath fades and moves — see globals.css. */
    <header
      className={cn(
        "site-header z-50 w-full transition-colors duration-500",
        floating
          ? "absolute inset-x-0 top-0 border-b border-transparent"
          : "sticky top-0 border-b border-line bg-ink/80 backdrop-blur-xl",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-3 sm:h-20 sm:gap-4">
        <div className="flex min-w-0 items-center gap-3 sm:gap-8">
          {/* Named explicitly: below md the wordmark is hidden and the mark's
              alt is empty, which left the link with no name on phones. */}
          <TransitionLink
            href={localizePath("/", locale)}
            aria-label="Code and Sorcery"
            className="group inline-flex items-center gap-2.5"
          >
            <Logo className="h-7 w-7 opacity-90 transition-opacity group-hover:opacity-100" />
            {/* Held back to md: at sm the socials arrive and the wordmark would
                wrap onto two lines, stretching the header. */}
            <span className="hidden whitespace-nowrap text-sm font-semibold tracking-tight md:inline">
              Code and Sorcery
            </span>
          </TransitionLink>

          <nav aria-label={labels.menu} className="min-w-0">
            <ul className="flex items-center gap-0.5 sm:gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <TransitionLink
                    href={item.href}
                    aria-current={item.active ? "page" : undefined}
                    className={cn(
                      "inline-block whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] transition-colors sm:px-3 sm:text-sm",
                      item.active
                        ? "bg-active-panel text-interactive"
                        : "text-fg-dim hover:text-interactive",
                    )}
                  >
                    {item.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 [--edge:205_55%_80%/0.24] [--edge-strong:var(--ember-bright)/0.65]">
          {/* Below sm there is no room beside the nav; the footer carries
              these links on small screens. */}
          <SocialLinks className="hidden sm:flex" />
          <LocaleSwitch
            code={locale.toUpperCase()}
            label={labels.switchTo}
            ariaLabel={labels.switchAria}
          />
          <ThemeToggle label={labels.theme} />
        </div>
      </div>
    </header>
  );
}
