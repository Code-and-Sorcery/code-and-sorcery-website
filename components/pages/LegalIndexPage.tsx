import Link from "next/link";

import { ArrowRightIcon, PuzzleIcon } from "@/components/Icons";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { RichText } from "@/components/site/RichText";
import { SpellCard } from "@/components/site/SpellCard";
import { getDictionary } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/content/i18n";

export function LegalIndexPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const copy = dict.legalIndex;

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        lead={copy.lead}
      />

      <section className="container space-y-12 pb-16">
        {copy.groups.map((group) => (
          <div key={group.app} className="space-y-5">
            <Reveal className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h2 className="text-2xl font-semibold">{group.app}</h2>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-faint">
                {group.note}
              </p>
            </Reveal>

            <ul className="grid gap-4 sm:grid-cols-2">
              {group.docs.map((doc, index) => (
                <Reveal as="li" key={doc.path} delay={index * 70}>
                  <SpellCard className="group h-full">
                    <Link
                      href={localizePath(doc.path, locale)}
                      className="flex h-full flex-col gap-3 p-7"
                    >
                      <h3 className="text-base font-semibold">{doc.title}</h3>
                      <p className="text-sm leading-relaxed text-fg-faint">
                        {doc.body}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm text-fg-dim transition-colors group-hover:text-fg">
                        {dict.common.readMore}
                        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </SpellCard>
                </Reveal>
              ))}
            </ul>
          </div>
        ))}

        <Reveal className="grid gap-4 sm:grid-cols-2">
          <div className="surface rounded-lg p-7">
            <span className="inline-grid h-9 w-9 place-items-center rounded-full border border-line text-fg-faint">
              <PuzzleIcon className="h-4 w-4" />
            </span>
            <h2 className="mt-4 text-base font-semibold">
              {copy.envCheckerTitle}
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-fg-faint">
              {copy.envCheckerBody}
            </p>
          </div>

          <div className="surface rounded-lg p-7">
            <h2 className="text-base font-semibold">{copy.companyTitle}</h2>
            <p className="prose-arcane mt-2.5 text-sm">
              <RichText text={copy.companyBody} />
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
