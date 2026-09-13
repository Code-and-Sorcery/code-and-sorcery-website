"use client";

import { usePathname } from "next/navigation";
import { useCallback } from "react";

import { LanguagesIcon } from "@/components/Icons";
import { swapLocaleInPath } from "@/content/i18n";
import { useShortcut } from "@/lib/useShortcut";

import { TransitionLink, useNavigate } from "./ViewTransitions";

export function LocaleSwitch({
  code,
  label,
  ariaLabel,
}: {
  /** Two-letter code of the language being read right now. */
  code: string;
  label: string;
  ariaLabel: string;
}) {
  const pathname = usePathname() ?? "/";
  const navigate = useNavigate();
  const { href, target } = swapLocaleInPath(pathname);

  useShortcut(
    "l",
    useCallback(() => navigate(href, { scroll: false }), [navigate, href]),
  );

  return (
    <TransitionLink
      href={href}
      scroll={false}
      hrefLang={target}
      /* Leads with the visible code: an accessible name that does not contain
         what sighted readers see trips voice control, which matches on it. */
      aria-label={`${code} · ${ariaLabel}`}
      title={label}
      data-key="L"
      className="kbd-hint inline-flex h-9 items-center gap-2 rounded-full border border-edge bg-panel pl-3.5 pr-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim backdrop-blur-sm transition-colors hover:border-edge-strong hover:text-interactive md:pr-2.5"
    >
      <LanguagesIcon className="h-3.5 w-3.5" />
      {code}
    </TransitionLink>
  );
}
