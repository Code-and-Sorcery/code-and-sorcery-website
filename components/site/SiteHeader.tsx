"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Dictionary } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/content/i18n";
import { cn } from "@/lib/utils";

import { LocaleSwitch } from "./LocaleSwitch";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader({
  dict,
  locale,
  floating = false,
}: {
  dict: Dictionary;
  locale: Locale;
  /** Splash mode: sits over the shader, never grows a border — and drops the
      theme switch, since the entrance is pinned to the dark palette. */
  floating?: boolean;
}) {
  const pathname = usePathname() ?? "/";

  const nav = [
    { href: localizePath("/apps", locale), label: dict.nav.apps },
    { href: localizePath("/studio", locale), label: dict.nav.studio },
    { href: localizePath("/legal", locale), label: dict.nav.legal },
  ];

  return (
    <header
      className={cn(
        "z-50 w-full transition-colors duration-500",
        floating
          ? "absolute inset-x-0 top-0 border-transparent"
          : "sticky top-0 border-b border-line bg-ink/80 backdrop-blur-xl",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-3 sm:h-20 sm:gap-4">
        <div className="flex min-w-0 items-center gap-3 sm:gap-8">
          <Link
            href={localizePath("/", locale)}
            className="group inline-flex items-center gap-2.5"
          >
            <Logo className="h-7 w-7 opacity-90 transition-opacity group-hover:opacity-100" />
            {/* Held back to md: at sm the socials arrive and the wordmark would
                wrap onto two lines, stretching the header. */}
            <span className="hidden whitespace-nowrap text-sm font-semibold tracking-tight md:inline">
              Code and Sorcery
            </span>
          </Link>

          <nav aria-label={dict.nav.menu} className="min-w-0">
            <ul className="flex items-center gap-0.5 sm:gap-1">
              {nav.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "inline-block whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] transition-colors sm:px-3 sm:text-sm",
                        active
                          ? "bg-active-panel text-interactive"
                          : "text-fg-dim hover:text-interactive",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Below sm there is no room beside the nav; the footer carries
              these links on small screens. */}
          <SocialLinks className="hidden sm:flex" />
          <LocaleSwitch
            code={locale.toUpperCase()}
            label={dict.switchTo}
            ariaLabel={dict.switchAria}
          />
          {/* Unmounting it takes the T shortcut with it, which is the point:
              neither can show the reader anything on this page. */}
          {floating ? null : <ThemeToggle label={dict.nav.theme} />}
        </div>
      </div>
    </header>
  );
}
