import { AppCard } from "@/components/site/AppCard";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { RuneDivider } from "@/components/site/RuneDivider";
import { apps } from "@/content/apps";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/content/i18n";

export function AppsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const published = apps.filter((app) => app.status === "live");
  const onTheAnvil = apps.filter((app) => app.status === "building");

  return (
    <>
      <PageHero
        eyebrow={dict.apps.eyebrow}
        title={dict.apps.title}
        lead={dict.apps.lead}
      />

      <section className="container">
        <ul className="grid gap-5 lg:grid-cols-2">
          {published.map((app) => (
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

        <Reveal className="mx-auto max-w-lg text-center">
          <h2 className="text-lg font-semibold">{dict.apps.forgeTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-fg-faint">
            {dict.apps.forgeBody}
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-5 pb-4 lg:grid-cols-2">
          {onTheAnvil.map((app) => (
            <AppCard
              key={app.slug}
              app={app}
              dict={dict}
              locale={locale}
              copy={dict.apps.entries[app.slug]}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
