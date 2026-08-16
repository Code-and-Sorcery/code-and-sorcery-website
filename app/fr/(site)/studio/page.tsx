import { StudioPage } from "@/components/pages/StudioPage";
import { getDictionary } from "@/content/dictionaries";
import { pageMetadata } from "@/content/i18n";

const locale = "fr" as const;
const dict = getDictionary(locale);

export const metadata = pageMetadata({
  // Tab titles stay short and match the nav label that leads here.
  title: dict.nav.studio,
  description: dict.studio.lead,
  path: "/studio",
  locale,
});

export default function Page() {
  return <StudioPage locale={locale} />;
}
