import Link from "next/link";

import { ArrowLeftIcon } from "@/components/Icons";

import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
  /** Way back up the tree, shown above the eyebrow. */
  back,
  /** Sits to the left of the title — an app's icon on its own page. */
  mark,
  aside,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  back?: { href: string; label: string };
  mark?: React.ReactNode;
  /** Right-hand column on wide screens: meta, artwork, status. */
  aside?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="container pb-14 pt-10 sm:pb-20 sm:pt-16">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <Reveal>
            {back ? (
              <Link
                href={back.href}
                className="group mb-6 inline-flex items-center gap-2 text-sm text-fg-faint transition-colors hover:text-fg"
              >
                <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                {back.label}
              </Link>
            ) : null}
            <p className="eyebrow">{eyebrow}</p>
            <div className="mt-5 flex items-center gap-4 sm:gap-5">
              {mark}
              <h1 className="text-4xl font-semibold leading-[1.05] sm:text-6xl">
                {title}
              </h1>
            </div>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-dim">
              {lead}
            </p>
          </Reveal>
          {children ? <Reveal delay={90}>{children}</Reveal> : null}
        </div>
        {aside ? <Reveal delay={140}>{aside}</Reveal> : null}
      </div>
    </section>
  );
}
