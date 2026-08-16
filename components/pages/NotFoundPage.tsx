import { LinkButton } from "@/components/site/LinkButton";
import { Logo } from "@/components/site/Logo";
import { getDictionary } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/content/i18n";

export function NotFoundPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="container flex min-h-[60svh] flex-col items-center justify-center py-24 text-center">
      <Logo className="h-20 w-20 animate-rise-in" priority />
      <p className="eyebrow mt-10">{dict.notFound.eyebrow}</p>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
        {dict.notFound.title}
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-fg-dim">
        {dict.notFound.lead}
      </p>
      <LinkButton
        href={localizePath("/", locale)}
        variant="outline"
        className="mt-9"
      >
        {dict.common.backHome}
      </LinkButton>
    </section>
  );
}
