import { LegalIndexPage } from "@/components/pages/LegalIndexPage";
import { getDictionary } from "@/content/dictionaries";
import { pageMetadata } from "@/content/i18n";

const locale = "fr" as const;
const dict = getDictionary(locale);

export const metadata = pageMetadata({
  title: dict.legalIndex.title,
  description: dict.legalIndex.lead,
  path: "/legal",
  locale,
});

export default function Page() {
  return <LegalIndexPage locale={locale} />;
}
