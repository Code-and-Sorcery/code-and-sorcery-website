
import { ArrowRightIcon } from "@/components/Icons";
import type { AppEntry } from "@/content/apps";
import type { Dictionary } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/content/i18n";

import { AppIcon } from "./AppIcon";
import { SpellCard } from "./SpellCard";
import { StatusPill } from "./StatusPill";
import { TransitionLink } from "./ViewTransitions";

export function AppCard({
  app,
  dict,
  locale,
  copy,
}: {
  app: AppEntry;
  dict: Dictionary;
  locale: Locale;
  copy: { tagline: string; summary: string };
}) {
  /* An app with nothing to read yet keeps the same card, minus the link:
     the forge section is where those live, and the section says as much. */
  const href = app.path ? localizePath(app.path, locale) : null;
  const panel = "flex h-full flex-col gap-6 p-7 sm:p-8";

  const content = (
    <>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <AppIcon app={app} className="h-11 w-11 rounded-xl" compact />
            <div>
              <h2 className="text-lg font-semibold">{app.name}</h2>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-faint">
                {app.surface}
              </p>
            </div>
          </div>
          <StatusPill status={app.status} label={dict.status[app.status]} />
        </div>

        <div className="space-y-3">
          <p className="text-[15px] font-medium text-fg">{copy.tagline}</p>
          <p className="text-sm leading-relaxed text-fg-faint">
            {copy.summary}
          </p>
        </div>

        <div className="mt-auto space-y-5">
          <ul className="flex flex-wrap gap-1.5">
            {app.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line bg-veil px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-faint"
              >
                {tech}
              </li>
            ))}
          </ul>

          {href ? (
            <span className="inline-flex items-center gap-2 text-sm text-fg-dim transition-colors group-hover:text-interactive">
              {dict.common.readMore}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          ) : null}
        </div>
    </>
  );

  return (
    <SpellCard as="li" className="app-card group">
      {href ? (
        <TransitionLink href={href} className={panel}>
          {content}
        </TransitionLink>
      ) : (
        <div className={panel}>{content}</div>
      )}
    </SpellCard>
  );
}
