import { LegalIndexPage } from "@/components/pages/LegalIndexPage";
import { getDictionary } from "@/content/dictionaries";
import { pageMetadata } from "@/content/i18n";

const locale = "en" as const;
const dict = getDictionary(locale);

export const metadata = pageMetadata({
  // Tab titles stay short and match the nav label that leads here.
  title: dict.nav.legal,
  description: dict.legalIndex.lead,
  path: "/legal",
  locale,
});

export default function Page() {
  return <LegalIndexPage locale={locale} />;
}
