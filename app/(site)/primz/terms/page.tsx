import { LegalDoc } from "@/components/site/LegalDoc";
import { getDictionary } from "@/content/dictionaries";
import { pageMetadata } from "@/content/i18n";

const locale = "en" as const;
const dict = getDictionary(locale);
const doc = dict.legal.primzTerms;
const sibling = dict.legal.primzPrivacy;

export const metadata = pageMetadata({
  title: `Primz — ${doc.title}`,
  description: doc.lead,
  path: "/primz/terms",
  locale,
});

export default function Page() {
  return (
    <LegalDoc
      doc={doc}
      dict={dict}
      locale={locale}
      appSlug="primz"
      sibling={{ title: sibling.title, path: "/primz/privacy" }}
    />
  );
}
