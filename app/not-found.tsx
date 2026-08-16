import { NotFoundPage } from "@/components/pages/NotFoundPage";
import { PageShell } from "@/components/site/PageShell";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/content/i18n";

/**
 * GitHub Pages serves this one 404 document for every unmatched path, French
 * ones included, so it stays in the default locale.
 */
const locale: Locale = "en";

export const metadata = { title: "404" };

export default function NotFound() {
  return (
    <PageShell dict={getDictionary(locale)} locale={locale}>
      <NotFoundPage locale={locale} />
    </PageShell>
  );
}
