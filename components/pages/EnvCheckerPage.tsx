import Image from "next/image";

import { TerminalIcon } from "@/components/Icons";
import { AppIcon } from "@/components/site/AppIcon";
import { CopyCommand } from "@/components/site/CopyCommand";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { LinkButton } from "@/components/site/LinkButton";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { stagger } from "@/components/site/stagger";
import { RichText } from "@/components/site/RichText";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SpellCard } from "@/components/site/SpellCard";
import { StatusPill } from "@/components/site/StatusPill";
import { getApp, MARKETPLACE_ID } from "@/content/apps";
import { getDictionary } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/content/i18n";

const INSTALL_COMMAND = `code --install-extension ${MARKETPLACE_ID}`;

export function EnvCheckerPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const copy = dict.envChecker;
  const app = getApp("env-checker");

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title="Env Checker"
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
          <div className="space-y-5">
            <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-ink-raised shadow-lift">
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
              <div className="border-l border-line p-6">
                <dt className="text-xs font-medium uppercase tracking-[0.12em] text-fg-faint">
                  {dict.common.license}
                </dt>
                <dd className="mt-2 font-mono text-2xl font-medium text-fg">
                  {app.license ?? "N/A"}
                </dd>
              </div>
              <div className="col-span-2 border-t border-line bg-veil px-6 py-5">
                <dt className="text-xs font-medium uppercase tracking-[0.12em] text-fg-faint">
                  {dict.common.platform}
                </dt>
                <dd className="mt-3 flex items-center gap-3 text-sm font-medium text-fg-dim">
                  <TerminalIcon className="h-5 w-5 shrink-0 text-arcane" />
                  {copy.requirements}
                </dd>
              </div>
            </dl>
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
        footer={
          <div className="space-y-3">
            <p className="eyebrow">{copy.installTitle}</p>
            <CopyCommand
              command={INSTALL_COMMAND}
              copyLabel={dict.common.copy}
              copiedLabel={dict.common.copied}
              ariaLabel={dict.common.copyAria}
            />
            <p className="text-xs text-fg-faint">{copy.installNote}</p>
          </div>
        }
      />

      <section className="container pb-16">
        <Reveal>
          <figure className="surface overflow-hidden rounded-lg p-2 shadow-lift">
            <div className="overflow-hidden rounded-md border border-line bg-ink-sunken">
              <Image
                src="/images/env-checker-preview.png"
                alt={copy.screenshotCaption}
                width={1280}
                height={720}
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
        <SectionHeading title={copy.commandsTitle} lead={copy.commandsHelp} />
        <div className="surface overflow-hidden rounded-lg [html[data-theme=light]_&]:bg-white [html[data-theme=light]_&]:bg-none [html[data-theme=light]_&]:[--ink-sunken:22_65%_92%]">
          <div className="flex items-center justify-between gap-4 border-b border-line bg-ink-sunken/70 px-5 py-4">
            <span className="flex items-center gap-3 text-sm font-medium text-fg-dim">
              <TerminalIcon className="h-4 w-4 text-ember" />
              {copy.commandsPalette}
            </span>
            <kbd className="kbd font-mono">F1</kbd>
          </div>
          <ul className="divide-y divide-line">
            {copy.commands.map((command, index) => (
              <Reveal
                as="li"
                key={command.name}
                delay={stagger(index)}
                className="grid gap-3 px-5 py-5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center md:gap-8"
              >
                <div className="flex min-w-0 items-start gap-3 rounded-md border border-line bg-ink-sunken/80 px-4 py-3">
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm font-semibold leading-6 text-ember"
                  >
                    &gt;
                  </span>
                  <code className="min-w-0 break-words font-mono text-sm leading-6 text-fg">
                    {command.name}
                  </code>
                </div>
                <p className="text-sm leading-relaxed text-fg-dim">
                  {command.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
        <p className="text-sm leading-relaxed text-fg-faint">{copy.commandsNote}</p>
      </section>

      <section className="container space-y-8 pb-16">
        <SectionHeading title={copy.settingsTitle} lead={copy.settingsLead} />
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="min-w-0 space-y-6">
            {copy.settings.map((setting) => (
              <article key={setting.name} className="surface min-w-0 overflow-hidden rounded-lg">
                <div className="space-y-5 p-6">
                  <h3 className="text-lg font-semibold">{setting.title}</h3>
                  <p className="text-sm leading-relaxed text-fg-dim">{setting.body}</p>
                  <dl className="space-y-4">
                    <div>
                      <dt className="mb-1.5 text-xs text-fg-faint">{copy.settingKeyLabel}</dt>
                      <dd><code className="break-all font-mono text-sm text-ember">{setting.name}</code></dd>
                    </div>
                    <div>
                      <dt className="mb-1.5 text-xs text-fg-faint">{copy.settingTypeLabel}</dt>
                      <dd className="text-sm text-fg">{setting.valueType}</dd>
                    </div>
                  </dl>
                </div>
                <div className="border-t border-line bg-ink-sunken/80 p-6">
                  <p className="mb-4 font-mono text-xs text-fg-faint">{copy.settingsExampleLabel}</p>
                  <pre
                    tabIndex={0}
                    className="overflow-x-auto pb-2 font-mono text-sm leading-7 text-fg-dim"
                  >
                    <code>
                      {JSON.stringify(
                        { [setting.name]: setting.exampleValues },
                        null,
                        2,
                      )}
                    </code>
                  </pre>
                  <p className="mt-4 text-sm leading-relaxed text-fg-faint">{setting.exampleNote}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="surface min-w-0 space-y-5 rounded-lg p-6 sm:p-7">
            <h3 className="text-lg font-semibold">{copy.parserTitle}</h3>
            <div className="prose-arcane text-sm">
              <ul>
                {copy.parser.map((note) => (
                  <li key={note.slice(0, 20)}>
                    <RichText text={note} />
                  </li>
                ))}
              </ul>
            </div>
          </aside>
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
