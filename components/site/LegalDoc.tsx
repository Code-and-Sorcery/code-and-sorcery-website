import Link from "next/link";

import { ArrowRightIcon } from "@/components/Icons";
import { getApp, type AppSlug } from "@/content/apps";
import type { Dictionary, LegalDocument } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/content/i18n";

import { AppIcon } from "./AppIcon";
import { LegalToc } from "./LegalToc";
import { ReadingProgress } from "./ReadingProgress";
import { RichText } from "./RichText";
import { RuneDivider } from "./RuneDivider";

export function LegalDoc({
  doc,
  dict,
  locale,
  /** Whose document this is — its icon heads the page. */
  appSlug,
  /** The sibling document, linked at the foot of the page. */
  sibling,
}: {
  doc: LegalDocument;
  dict: Dictionary;
  locale: Locale;
  appSlug: AppSlug;
  sibling: { title: string; path: string };
}) {
  const app = getApp(appSlug);

  return (
    <>
      <ReadingProgress />

      <div className="container max-w-6xl py-14 sm:py-20">
        <header className="max-w-2xl">
          <div className="flex items-center gap-3">
            <AppIcon app={app} className="h-6 w-6 rounded-md" compact />
            <p className="eyebrow">{doc.eyebrow}</p>
          </div>
          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-fg-dim">
            {doc.lead}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-faint">
            {dict.common.updated}
            <span className="text-fg-dim">{doc.updated}</span>
          </p>
          {doc.translationNote ? (
            <p className="prose-arcane mt-6 border-l-2 border-line-strong pl-4 text-[13px]">
              <RichText text={doc.translationNote} />
            </p>
          ) : null}
        </header>

        <RuneDivider className="my-12" />

        <div className="grid gap-12 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-16">
          <LegalToc sections={doc.sections} title={dict.common.onThisPage} />

          <article className="prose-arcane max-w-2xl space-y-12">
            {doc.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 space-y-4"
              >
                <h2 className="flex gap-3 text-lg font-semibold text-fg">
                  <span className="mt-0.5 font-mono text-xs tabular-nums text-ember/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{section.heading}</span>
                </h2>
                {section.blocks.map((block, blockIndex) =>
                  "p" in block ? (
                    <p key={blockIndex}>
                      <RichText text={block.p} />
                    </p>
                  ) : (
                    <ul key={blockIndex}>
                      {block.ul.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <RichText text={item} />
                        </li>
                      ))}
                    </ul>
                  ),
                )}
              </section>
            ))}

            <div className="border-t border-line pt-8">
              <Link
                href={localizePath(sibling.path, locale)}
                className="group inline-flex items-center gap-2 text-sm text-fg-dim transition-colors hover:text-fg"
              >
                {sibling.title}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
