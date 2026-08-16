"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import type { Dictionary } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/content/i18n";
import { cn } from "@/lib/utils";

import { LocaleSwitch } from "./LocaleSwitch";
import { Sigil } from "./Sigil";

export function SiteHeader({
  dict,
  locale,
  floating = false,
  extras,
}: {
  dict: Dictionary;
  locale: Locale;
  /** Splash mode: sits over the shader, never grows a border. */
  floating?: boolean;
  extras?: ReactNode;
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
        floating
          ? "absolute inset-x-0 top-0"
          : "sticky top-0 border-b",
        !floating && scrolled
          ? "border-line bg-ink/80 backdrop-blur-xl"
          : "border-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-3 sm:h-20 sm:gap-4">
        <div className="flex min-w-0 items-center gap-3 sm:gap-8">
          {!floating ? (
            <Link
              href={localizePath("/", locale)}
              className="group inline-flex items-center gap-2.5"
            >
              <Sigil
                className="h-6 w-6 text-fg-dim transition-colors group-hover:text-fg"
                gradientId="header-sigil"
              />
              <span className="hidden text-sm font-semibold tracking-tight sm:inline">
                Code and Sorcery
              </span>
            </Link>
          ) : null}

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
          {extras}
          <LocaleSwitch
            code={dict.switchCode}
            label={dict.switchTo}
            ariaLabel={dict.switchAria}
          />
        </div>
      </div>
    </header>
  );
}
