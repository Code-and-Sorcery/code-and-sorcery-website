import Image from "next/image";

import { CopyCommand } from "@/components/site/CopyCommand";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { LinkButton } from "@/components/site/LinkButton";
import { MetaList } from "@/components/site/MetaList";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { RichText } from "@/components/site/RichText";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SpellCard } from "@/components/site/SpellCard";
import { StatusPill } from "@/components/site/StatusPill";
import { getApp, MARKETPLACE_ID } from "@/content/apps";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/content/i18n";

const INSTALL_COMMAND = `code --install-extension ${MARKETPLACE_ID}`;

export function EnvCheckerPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const copy = dict.envChecker;
  const app = getApp("env-checker");

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={
          <>
            Env <span className="text-gradient">Checker</span>
          </>
        }
        lead={copy.lead}
        aside={
          <div className="space-y-5">
            <MetaList
              items={[
                {
                  label: dict.common.status,
                  value: (
                    <StatusPill
                      status={app.status}
                      label={dict.status[app.status]}
                    />
                  ),
                },
                { label: dict.common.version, value: app.version },
                { label: dict.common.license, value: app.license ?? "—" },
                { label: dict.common.platform, value: copy.requirements },
              ]}
            />
            <div className="flex flex-wrap gap-2">
              {app.links.map((link) => (
                <LinkButton
                  key={link.href}
                  href={link.href}
                  variant={link.primary ? "primary" : "outline"}
                >
                  {link.label}
                </LinkButton>
              ))}
            </div>
          </div>
        }
      >
        <div className="mt-8 max-w-xl space-y-3">
          <p className="eyebrow">{copy.installTitle}</p>
          <CopyCommand
            command={INSTALL_COMMAND}
            copyLabel={dict.common.copy}
            copiedLabel={dict.common.copied}
            ariaLabel={dict.common.copyAria}
          />
          <p className="text-xs text-fg-faint">{copy.installNote}</p>
        </div>
      </PageHero>

      <section className="container pb-16">
        <Reveal>
          <figure className="surface overflow-hidden rounded-lg p-2 shadow-lift">
            <div className="overflow-hidden rounded-md border border-line bg-ink-sunken">
              <Image
                src="/images/env-checker-preview.png"
                alt={copy.screenshotCaption}
                width={1790}
                height={862}
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="h-auto w-full"
                priority
              />
            </div>
            <figcaption className="px-3 py-3 text-center font-mono text-[11px] text-fg-faint">
              {copy.screenshotCaption}
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="container space-y-8 pb-16">
        <SectionHeading title={copy.featuresTitle} />
        <FeatureGrid items={copy.features} columns={3} />
      </section>

      <section className="container space-y-8 pb-16">
        <SectionHeading title={copy.commandsTitle} lead={copy.commandsNote} />
        <ul className="space-y-2">
          {copy.commands.map((command, index) => (
            <Reveal
              as="li"
              key={command.name}
              delay={Math.min(index * 50, 200)}
              className="surface rounded-md px-5 py-4 sm:flex sm:items-baseline sm:gap-6"
            >
              <code className="block font-mono text-[13px] text-fg sm:w-[26rem] sm:shrink-0">
                {command.name}
              </code>
              <p className="mt-1.5 text-sm text-fg-faint sm:mt-0">
                {command.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container grid gap-10 pb-16 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading title={copy.settingsTitle} />
          {copy.settings.map((setting) => (
            <div key={setting.name} className="surface rounded-md px-5 py-4">
              <code className="font-mono text-[13px] text-arcane">
                {setting.name}
              </code>
              <p className="mt-2 text-sm leading-relaxed text-fg-faint">
                {setting.body}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <SectionHeading title={copy.parserTitle} />
          <ul className="prose-arcane space-y-2.5 text-sm">
            {copy.parser.map((note) => (
              <li key={note.slice(0, 20)}>
                <RichText text={note} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container pb-8">
        <Reveal>
          <SpellCard className="p-8 sm:p-10">
            <h2 className="text-xl font-semibold">{copy.privacyTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-faint">
              {copy.privacyBody}
            </p>
          </SpellCard>
        </Reveal>
      </section>
    </>
  );
}
