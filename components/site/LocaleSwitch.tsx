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
  /** Two-letter code of the target language, kept short for the header. */
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
      className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim backdrop-blur-sm transition-colors hover:border-line-strong hover:text-fg"
    >
      <LanguagesIcon className="h-3.5 w-3.5" />
      {code}
    </Link>
  );
}
