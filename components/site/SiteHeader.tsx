"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import type { Dictionary } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/content/i18n";
import { cn } from "@/lib/utils";

import { LocaleSwitch } from "./LocaleSwitch";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function SiteHeader({
  dict,
  locale,
  floating = false,
}: {
  dict: Dictionary;
  locale: Locale;
  /** Splash mode: sits over the shader, never grows a border. */
  floating?: boolean;
}) {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (floating) return;
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [floating]);

  const nav = [
    { href: localizePath("/apps", locale), label: dict.nav.apps },
    { href: localizePath("/studio", locale), label: dict.nav.studio },
    { href: localizePath("/legal", locale), label: dict.nav.legal },
  ];

  return (
    <header
      className={cn(
        "z-50 w-full transition-colors duration-500",
        floating ? "absolute inset-x-0 top-0" : "sticky top-0 border-b",
        !floating && scrolled
          ? "border-line bg-ink/80 backdrop-blur-xl"
          : "border-transparent",
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
                          ? "bg-white/[0.06] text-fg"
                          : "text-fg-dim hover:text-fg",
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
        </div>
      </div>
    </header>
  );
}
