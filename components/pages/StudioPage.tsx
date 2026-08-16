import Image from "next/image";

import { FeatureGrid } from "@/components/site/FeatureGrid";
import { LinkButton } from "@/components/site/LinkButton";
import { Logo } from "@/components/site/Logo";
import { MetaList } from "@/components/site/MetaList";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SpellCard } from "@/components/site/SpellCard";
import { TechGrid } from "@/components/site/TechGrid";
import { getDictionary } from "@/content/dictionaries";
import { CONTACT_EMAIL, SOCIALS, type Locale } from "@/content/i18n";

export function StudioPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.studio.eyebrow}
        title={
          <>
            {dict.studio.titleParts[0]}
            <br />
            <span className="text-gradient">{dict.studio.titleParts[1]}</span>
          </>
        }
        lead={dict.studio.lead}
        aside={
          <div className="space-y-5">
            <MetaList items={dict.studio.facts} />
            <div className="flex flex-wrap gap-2">
              <LinkButton href={`mailto:${CONTACT_EMAIL}`} icon="none">
                {dict.studio.ctaAction}
              </LinkButton>
              <LinkButton href={SOCIALS.resume} variant="ghost">
                {dict.studio.elsewhere[2].value}
              </LinkButton>
            </div>
          </div>
        }
      >
        <div className="mt-9 flex max-w-xl flex-col gap-6 sm:flex-row sm:items-start">
          <Image
            src="/images/wsimonvezo.webp"
            alt="William Simon--Vezo"
            width={96}
            height={96}
            className="h-20 w-20 shrink-0 rounded-full border border-line object-cover sm:h-24 sm:w-24"
          />
          <div className="space-y-4 text-[15px] leading-relaxed text-fg-faint">
            {dict.studio.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="container space-y-8 py-6">
        <SectionHeading title={dict.studio.workTitle} />
        <FeatureGrid items={dict.studio.work} columns={2} />
      </section>

      <section className="container space-y-8 py-16">
        <SectionHeading
          title={dict.studio.stackTitle}
          lead={dict.studio.stackNote}
        />
        <TechGrid />
      </section>

      <section className="container space-y-8 pb-16">
        <SectionHeading title={dict.studio.elsewhereTitle} />
        <ul className="grid gap-4 sm:grid-cols-3">
          {dict.studio.elsewhere.map((item) => (
            <SpellCard as="li" key={item.key}>
              <a
                href={SOCIALS[item.key as keyof typeof SOCIALS]}
                target="_blank"
                rel="noreferrer noopener"
                className="block p-5"
              >
                <p className="eyebrow">{item.label}</p>
                <p className="mt-2.5 font-mono text-sm text-fg-dim">
                  {item.value}
                </p>
              </a>
            </SpellCard>
          ))}
        </ul>
      </section>

      <section className="container pb-8">
        <Reveal>
          <SpellCard className="overflow-hidden">
            <div className="relative flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <Logo className="pointer-events-none absolute -right-8 -top-10 h-44 w-44 opacity-[0.08]" />
              <div className="relative max-w-lg space-y-3">
                <h2 className="text-2xl font-semibold">
                  {dict.studio.ctaTitle}
                </h2>
                <p className="text-sm leading-relaxed text-fg-faint">
                  {dict.studio.ctaBody}
                </p>
              </div>
              <LinkButton
                href={`mailto:${CONTACT_EMAIL}`}
                variant="primary"
                className="relative shrink-0"
              >
                {CONTACT_EMAIL}
              </LinkButton>
            </div>
          </SpellCard>
        </Reveal>
      </section>
    </>
  );
}
