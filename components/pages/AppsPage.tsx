import { AppCard } from "@/components/site/AppCard";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { RuneDivider } from "@/components/site/RuneDivider";
import { apps } from "@/content/apps";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/content/i18n";

export function AppsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.apps.eyebrow}
        title={dict.apps.title}
        lead={dict.apps.lead}
      />

      <section className="container">
        <ul className="grid gap-5 lg:grid-cols-2">
          {apps.map((app) => (
            <AppCard
              key={app.slug}
              app={app}
              dict={dict}
              locale={locale}
              copy={dict.apps.entries[app.slug]}
            />
          ))}
        </ul>

        <RuneDivider className="my-16" />

        <Reveal className="mx-auto max-w-lg pb-4 text-center">
          <h2 className="text-lg font-semibold">{dict.apps.forgeTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-fg-faint">
            {dict.apps.forgeBody}
          </p>
        </Reveal>
      </section>
    </>
  );
}
