import { LegalDoc } from "@/components/site/LegalDoc";
import { getDictionary } from "@/content/dictionaries";
import { pageMetadata } from "@/content/i18n";

const locale = "en" as const;
const dict = getDictionary(locale);
const doc = dict.legal.primzPrivacy;
const sibling = dict.legal.primzTerms;

export const metadata = pageMetadata({
  title: `Primz — ${doc.title}`,
  description: doc.lead,
  path: "/primz/privacy",
  locale,
});

export default function Page() {
  return (
    <LegalDoc
      doc={doc}
      dict={dict}
      locale={locale}
      sibling={{ title: sibling.title, path: "/primz/terms" }}
    />
  );
}
