import { LancePage } from "@/components/pages/LancePage";
import { getDictionary } from "@/content/dictionaries";
import { pageMetadata } from "@/content/i18n";

const locale = "en" as const;
const dict = getDictionary(locale);

export const metadata = pageMetadata({
  title: "Lancé",
  description: dict.lance.lead,
  path: "/apps/lance",
  locale,
});

export default function Page() {
  return <LancePage locale={locale} />;
}
