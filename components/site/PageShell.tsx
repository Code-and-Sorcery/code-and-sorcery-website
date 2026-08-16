import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/content/i18n";

import { ArcaneBackdrop } from "./ArcaneBackdrop";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/** Chrome shared by every page except the splash screen. */
export function PageShell({
  dict,
  locale,
  children,
}: {
  dict: Dictionary;
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <div
      lang={locale === "en" ? undefined : locale}
      className="grain relative flex min-h-svh flex-col"
    >
      <ArcaneBackdrop />

      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-ink-raised focus:px-4 focus:py-2 focus:text-sm"
      >
        {dict.nav.skipToContent}
      </a>

      <SiteHeader dict={dict} locale={locale} />

      <main id="content" className="flex-1">
        {children}
      </main>

      <SiteFooter dict={dict} locale={locale} />
    </div>
  );
}
