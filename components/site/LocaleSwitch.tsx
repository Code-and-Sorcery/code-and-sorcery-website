"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LanguagesIcon } from "@/components/Icons";
import { swapLocaleInPath } from "@/content/i18n";

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
  const { href, target } = swapLocaleInPath(pathname);

  return (
    <Link
      href={href}
      hrefLang={target}
      aria-label={ariaLabel}
      title={label}
      className="inline-flex h-9 items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim backdrop-blur-sm transition-colors hover:border-white/35 hover:text-fg"
    >
      <LanguagesIcon className="h-3.5 w-3.5" />
      {code}
    </Link>
  );
}
