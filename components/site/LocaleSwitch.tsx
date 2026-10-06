"use client";

import { usePathname } from "next/navigation";
import { useCallback, useRef } from "react";

import { LanguagesIcon } from "@/components/Icons";
import { swapLocaleInPath } from "@/content/i18n";
import { useShortcut } from "@/lib/useShortcut";

import { TransitionLink, useNavigate } from "./ViewTransitions";

export function LocaleSwitch({
  code,
  language,
  ariaLabel,
}: {
  /** Two-letter code of the language being read right now. */
  code: string;
  /** That language spelled out — the tooltip expands the code, nothing more. */
  language: string;
  /** What the control does — "Read this page in French". */
  ariaLabel: string;
}) {
  const pathname = usePathname() ?? "/";
  const navigate = useNavigate();
  const { href, target } = swapLocaleInPath(pathname);
  const link = useRef<HTMLAnchorElement>(null);

  useShortcut(
    "l",
    // Long enough for the badge to reach the bottom of its dip before the
    // route transition snapshots the header and freezes it: without the
    // wait the key never visibly moves at all. Under a tenth of a second,
    // against a transition four times that.
    useCallback(
      () => window.setTimeout(() => navigate(href, { scroll: false }), 90),
      [navigate, href],
    ),
    link,
  );

  return (
    <TransitionLink
      ref={link}
      href={href}
      scroll={false}
      hrefLang={target}
      /* Leads with the visible code: an accessible name that does not contain
         what sighted readers see trips voice control, which matches on it.
         The name says what the control does; the tooltip only spells the
         badge out, since a lone language name there reads as a label for
         what is on screen rather than as what pressing it would do. */
      aria-label={`${code} · ${ariaLabel}`}
      title={language}
      data-key="L"
      className="kbd-hint inline-flex h-9 items-center gap-2 rounded-full border border-edge bg-panel pl-3.5 pr-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim backdrop-blur-sm transition-colors hover:border-edge-strong hover:text-interactive md:pr-2.5"
    >
      <LanguagesIcon className="h-3.5 w-3.5" />
      {code}
    </TransitionLink>
  );
}
