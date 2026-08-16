import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/Icons";
import type { AppEntry } from "@/content/apps";
import type { Dictionary } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/content/i18n";

import { SpellCard } from "./SpellCard";
import { StatusPill } from "./StatusPill";

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
  return (
    <SpellCard as="li" className="group">
      <Link
        href={localizePath(app.path, locale)}
        className="flex h-full flex-col gap-6 p-7 sm:p-8"
      >
        {/* Per-app accent wash, lit only on hover. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(60% 100% at 50% 0%, hsl(${app.accent} / 0.16), transparent 70%)`,
          }}
        />

        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-line"
              style={{
                background: app.iconBackground ?? `hsl(${app.accent} / 0.16)`,
              }}
            >
              <Image
                src={app.icon}
                alt=""
                width={88}
                height={88}
                className="h-full w-full object-contain p-1"
              />
            </span>
            <div>
              <h3 className="text-lg font-semibold">{app.name}</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-faint">
                {app.surface}
              </p>
            </div>
          </div>
          <StatusPill status={app.status} label={dict.status[app.status]} />
        </div>

        <div className="space-y-3">
          <p className="text-[15px] font-medium text-fg">{copy.tagline}</p>
          <p className="text-sm leading-relaxed text-fg-faint">{copy.summary}</p>
        </div>

        <div className="mt-auto space-y-5">
          <ul className="flex flex-wrap gap-1.5">
            {app.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line bg-white/[0.02] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-faint"
              >
                {tech}
              </li>
            ))}
          </ul>

          <span className="inline-flex items-center gap-2 text-sm text-fg-dim transition-colors group-hover:text-fg">
            {dict.common.readMore}
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </SpellCard>
  );
}
