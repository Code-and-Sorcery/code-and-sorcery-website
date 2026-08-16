import Link from "next/link";

import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/Icons";
import { AppIcon } from "@/components/site/AppIcon";
import { Logo } from "@/components/site/Logo";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { stagger } from "@/components/site/stagger";
import { RichText } from "@/components/site/RichText";
import { SpellCard } from "@/components/site/SpellCard";
import { apps } from "@/content/apps";
import { getDictionary, type LegalIndexEntry } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/content/i18n";

/** Same card body whether or not the entry leads anywhere. */
function EntryBody({
  entry,
  readMore,
}: {
  entry: LegalIndexEntry;
  readMore: string;
}) {
  return (
    <>
      <h3 className="text-base font-semibold">{entry.title}</h3>
      <p className="prose-arcane text-sm">
        <RichText text={entry.body} />
      </p>
      {entry.path ? (
        <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm text-fg-dim transition-colors group-hover:text-fg">
          {readMore}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      ) : null}
      {entry.href ? (
        <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm text-fg-dim transition-colors group-hover:text-fg">
          {readMore}
          <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      ) : null}
    </>
  );
}

const CARD = "flex h-full flex-col gap-3 p-7";

export function LegalIndexPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const copy = dict.legalIndex;

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} lead={copy.lead} />

      <section className="container space-y-14 pb-16">
        {copy.groups.map((group) => {
          // No slug means the publisher itself, which wears the studio mark.
          const app = apps.find((entry) => entry.slug === group.slug);

          return (
            <div key={group.name} className="space-y-5">
              <Reveal className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <div className="flex items-center gap-3">
                  {app ? (
                    <AppIcon app={app} className="h-9 w-9 rounded-lg" compact />
                  ) : (
                    <Logo className="h-9 w-9" />
                  )}
                  <h2 className="text-2xl font-semibold">{group.name}</h2>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-faint">
                  {group.note}
                </p>
              </Reveal>

              <ul className="grid gap-4 sm:grid-cols-2">
                {group.entries.map((entry, index) => {
                  const body = (
                    <EntryBody entry={entry} readMore={dict.common.readMore} />
                  );

                  return (
                    <Reveal as="li" key={entry.title} delay={stagger(index)}>
                      <SpellCard className="group h-full">
                        {entry.path ? (
                          <Link
                            href={localizePath(entry.path, locale)}
                            className={CARD}
                          >
                            {body}
                          </Link>
                        ) : entry.href ? (
                          <a
                            href={entry.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className={CARD}
                          >
                            {body}
                          </a>
                        ) : (
                          <div className={CARD}>{body}</div>
                        )}
                      </SpellCard>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </section>
    </>
  );
}
