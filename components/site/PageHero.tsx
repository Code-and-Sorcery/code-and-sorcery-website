import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
  aside,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  /** Right-hand column on wide screens: meta, artwork, status. */
  aside?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="container pb-14 pt-10 sm:pb-20 sm:pt-16">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-6xl">
              {title}
            </h1>
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
