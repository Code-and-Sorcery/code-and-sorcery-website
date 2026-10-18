import { LegalDoc } from "@/components/site/LegalDoc";
import { getDictionary } from "@/content/dictionaries";
import { pageMetadata } from "@/content/i18n";

const locale = "fr" as const;
const dict = getDictionary(locale);
const doc = dict.legal.lancePrivacy;

export const metadata = pageMetadata({
  title: `Lancé, ${doc.title}`,
  description: doc.lead,
  path: "/lance/privacy",
  locale,
});

export default function Page() {
  return (
    <LegalDoc
      doc={doc}
      dict={dict}
      locale={locale}
      appSlug="lance"
      // Lancé has no other document yet: the foot leads back to the index.
      sibling={{ title: dict.legalIndex.title, path: "/legal" }}
    />
  );
}
