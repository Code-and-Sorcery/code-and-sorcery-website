import { SplashPage } from "@/components/pages/SplashPage";
import { getDictionary } from "@/content/dictionaries";
import { pageMetadata } from "@/content/i18n";

const locale = "fr" as const;
const dict = getDictionary(locale);

export const metadata = pageMetadata({
  title: `Code and Sorcery — ${dict.splash.tagline}`,
  description: dict.splash.subtitle,
  path: "/",
  locale,
  titleAbsolute: true,
});

export default function Page() {
  return <SplashPage locale={locale} />;
}
