import { PrimzPage } from "@/components/pages/PrimzPage";
import { getDictionary } from "@/content/dictionaries";
import { pageMetadata } from "@/content/i18n";

const locale = "en" as const;
const dict = getDictionary(locale);

export const metadata = pageMetadata({
  title: "Primz",
  description: dict.primz.lead,
  path: "/apps/primz",
  locale,
});

export default function Page() {
  return <PrimzPage locale={locale} />;
}
