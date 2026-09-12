import Link from "next/link";

import { ArrowRightIcon, LockIcon } from "@/components/Icons";
import { AppIcon } from "@/components/site/AppIcon";
import { AppShowcase } from "@/components/site/AppShowcase";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { stagger } from "@/components/site/stagger";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SpellCard } from "@/components/site/SpellCard";
import { StatusPill } from "@/components/site/StatusPill";
import { getApp } from "@/content/apps";
import { getDictionary } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/content/i18n";

export function PrimzPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const copy = dict.primz;
  const app = getApp("primz");

  const documents = [
    { title: dict.legal.primzPrivacy.title, path: "/primz/privacy" },
    { title: dict.legal.primzTerms.title, path: "/primz/terms" },
  ];

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title="Primz"
        revealAside={false}
        lead={copy.lead}
        back={{
          href: localizePath("/apps", locale),
          label: dict.common.backToApps,
        }}
        mark={
          <AppIcon
            app={app}
            className="h-12 w-12 rounded-2xl sm:h-16 sm:w-16"
            compact
          />
        }
        aside={
          <AppShowcase
            icon="/images/primz-icon.webp"
            iconAlt="Primz"
            iconBackground={app.iconBackground}
            accent={app.accent}
            badges={["iOS", "Android"]}
          />
        }
      >
        <div className="mt-8 max-w-md">
          <dl className="grid overflow-hidden rounded-2xl border border-line bg-ink-raised shadow-lift sm:grid-cols-2">
            <div className="p-6">
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-fg-faint">
                {dict.common.status}
              </dt>
              <dd className="mt-3">
                <StatusPill
                  status={app.status}
                  label={dict.status[app.status]}
                />
              </dd>
            </div>
            <div className="border-t border-line p-6 sm:border-l sm:border-t-0">
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-fg-faint">
                {dict.common.platform}
              </dt>
              <dd className="mt-3 text-base font-semibold leading-relaxed text-fg">
                {app.surface}
              </dd>
            </div>
            <div className="border-t border-line bg-veil px-6 py-5 sm:col-span-2">
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-fg-faint">
                {dict.common.stack}
              </dt>
              <dd className="mt-3">
                <ul className="flex flex-wrap gap-2">
                  {app.tech.map((tech) => (
                    <li key={tech} className="rounded-md border border-line bg-panel px-3 py-1.5 text-sm font-medium text-fg-dim">
                      {tech}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </PageHero>

      <section className="container pb-16">
        <Reveal>
          <div className="surface flex items-start gap-4 rounded-lg border-ember/20 bg-ember/[0.04] p-6">
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ember/25 bg-ember/10 text-interactive">
              <LockIcon className="h-4 w-4" />
            </span>
            <div>
              <h2 className="text-sm font-semibold">{copy.statusTitle}</h2>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-fg-faint">
                {copy.statusBody}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container space-y-8 pb-16">
        <SectionHeading title={copy.pillarsTitle} />
        <ul className="grid gap-4 lg:grid-cols-3">
          {copy.pillars.map((pillar, index) => (
            <Reveal as="li" key={pillar.title} delay={stagger(index)}>
              <SpellCard className="h-full p-7">
                <span className="font-mono text-xs text-interactive">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-faint">
                  {pillar.body}
                </p>
              </SpellCard>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container space-y-8 pb-16">
        <SectionHeading title={copy.featuresTitle} />
        <FeatureGrid items={copy.features} columns={4} />
      </section>

      <section className="container space-y-8 pb-8">
        <SectionHeading title={copy.legalTitle} lead={copy.legalBody} />
        <ul className="grid gap-4 sm:grid-cols-2">
          {documents.map((document) => (
            <SpellCard as="li" key={document.path} className="link-card group">
              <Link
                href={localizePath(document.path, locale)}
                className="flex items-center justify-between gap-4 p-6 transition-colors hover:text-interactive focus-visible:text-interactive"
              >
                <span className="text-sm font-medium">{document.title}</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </SpellCard>
          ))}
        </ul>
      </section>
    </>
  );
}
