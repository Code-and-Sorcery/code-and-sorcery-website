import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ResumeIcon,
} from "@/components/Icons";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { LinkButton } from "@/components/site/LinkButton";
import { Logo } from "@/components/site/Logo";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { stagger } from "@/components/site/stagger";
import { SpellCard } from "@/components/site/SpellCard";
import { TechGrid } from "@/components/site/TechGrid";
import { getDictionary } from "@/content/dictionaries";
import { CONTACT_EMAIL, SOCIALS, type Locale } from "@/content/i18n";
import { cn } from "@/lib/utils";

/** Keyed by the dictionary's `elsewhere` entries. */
const elsewhereIcons: Record<
  string,
  (props: { className?: string }) => React.ReactNode
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  resume: ResumeIcon,
};

export function StudioPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.studio.eyebrow}
        title={
          <>
            {dict.studio.titleParts[0]}
            {dict.studio.titleParts[1] ? (
              <>
                <br />
                {dict.studio.titleParts[1]}
              </>
            ) : null}
          </>
        }
        lead={dict.studio.lead}
        aside={
          <div className="space-y-5">
            <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-ink-raised shadow-lift">
              {dict.studio.facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={cn(
                    "p-5 sm:p-6",
                    index === 1 && "order-last col-span-2 border-t border-line bg-veil",
                    index === 2 && "border-l border-line",
                  )}
                >
                  <dt className="text-xs font-medium uppercase tracking-[0.12em] text-fg-faint">
                    {fact.label}
                  </dt>
                  <dd className="mt-3">
                    {index === 1 ? (
                      <div className="flex flex-wrap gap-2">
                        {fact.value.split(" · ").map((field) => (
                          <span key={field} className="rounded-md border border-line bg-panel px-3 py-1.5 text-sm font-medium text-fg-dim">
                            {field}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-base font-semibold leading-relaxed text-fg">
                        {fact.value}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-2">
              <LinkButton
                href={`mailto:${CONTACT_EMAIL}`}
                icon="none"
                leadingIcon={<MailIcon className="h-4 w-4" />}
              >
                {dict.studio.ctaAction}
              </LinkButton>
              <LinkButton href={SOCIALS.resume} variant="ghost">
                {dict.studio.elsewhere[2].value}
              </LinkButton>
            </div>
          </div>
        }
      />

      <section className="container space-y-8 py-6">
        <SectionHeading title={dict.studio.workTitle} />
        <FeatureGrid items={dict.studio.work} columns={2} />
      </section>

      <section className="container space-y-8 py-16">
        <SectionHeading title={dict.studio.stackTitle} />
        <TechGrid />
      </section>

      <section className="container space-y-8 pb-16">
        <SectionHeading title={dict.studio.elsewhereTitle} />
        <ul className="grid gap-4 sm:grid-cols-3">
          {dict.studio.elsewhere.map((item, index) => {
            const Icon = elsewhereIcons[item.key];

            return (
              <Reveal as="li" key={item.key} delay={stagger(index)}>
                <SpellCard className="link-card group">
                  <a
                    href={SOCIALS[item.key as keyof typeof SOCIALS]}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-4 p-5"
                  >
                    {Icon ? (
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-panel text-fg-dim transition-colors group-hover:border-interactive-border group-hover:text-interactive">
                        <Icon className="h-4 w-4" />
                      </span>
                    ) : null}
                    <span className="min-w-0 flex-1">
                      <span className="eyebrow block transition-colors group-hover:text-interactive group-focus-within:text-interactive">{item.label}</span>
                      <span className="mt-1 block truncate font-mono text-sm text-fg-dim transition-colors group-hover:text-interactive group-focus-within:text-interactive">
                        {item.value}
                      </span>
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-fg-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-interactive" />
                  </a>
                </SpellCard>
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section className="container pb-8">
        <Reveal>
          <SpellCard className="overflow-hidden">
            <div className="relative flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <Logo className="pointer-events-none absolute -right-8 -top-10 h-44 w-44 opacity-[0.14]" />
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
