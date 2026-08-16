import { AppsPage } from "@/components/pages/AppsPage";
import { getDictionary } from "@/content/dictionaries";
import { pageMetadata } from "@/content/i18n";

const locale = "fr" as const;
const dict = getDictionary(locale);

export const metadata = pageMetadata({
  // Tab titles stay short and match the nav label that leads here.
  title: dict.nav.apps,
  description: dict.apps.lead,
  path: "/apps",
  locale,
});

export default function Page() {
  return <AppsPage locale={locale} />;
}
