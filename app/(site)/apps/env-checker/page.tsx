import { EnvCheckerPage } from "@/components/pages/EnvCheckerPage";
import { getDictionary } from "@/content/dictionaries";
import { pageMetadata } from "@/content/i18n";

const locale = "en" as const;
const dict = getDictionary(locale);

export const metadata = pageMetadata({
  title: "Env Checker",
  description: dict.envChecker.lead,
  path: "/apps/env-checker",
  locale,
});

export default function Page() {
  return <EnvCheckerPage locale={locale} />;
}
