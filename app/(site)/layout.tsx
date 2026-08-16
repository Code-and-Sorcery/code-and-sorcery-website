import { PageShell } from "@/components/site/PageShell";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/content/i18n";

const locale: Locale = "en";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <PageShell dict={getDictionary(locale)} locale={locale}>
      {children}
    </PageShell>
  );
}
