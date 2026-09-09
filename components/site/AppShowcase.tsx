import Image from "next/image";

/**
 * Store-listing style presentation: the app's real icon, its own accent glowing
 * behind it, platforms underneath. Deliberately not a faked screenshot.
 */
export function AppShowcase({
  icon,
  iconAlt,
  iconBackground,
  accent,
  badges,
}: {
  icon: string;
  iconAlt: string;
  /** Tile colour behind the artwork; defaults to a wash of the accent. */
  iconBackground?: string;
  accent: string;
  badges: string[];
}) {
  return (
    <div className="relative isolate mx-auto w-full max-w-sm">
      {/* A soft gradient needs no blur filter. Keep the halo and opaque card
          outside reveal animations to avoid compositor changes on arrival. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-12 z-0 rounded-full"
        style={{
          background: `radial-gradient(ellipse, hsl(${accent} / 0.2), hsl(${accent} / 0.08) 40%, transparent 72%)`,
        }}
      />

      <div className="relative z-10 rounded-[2rem] border border-line bg-ink-raised p-8 sm:p-10">
        <div
          className="mx-auto grid aspect-square w-44 place-items-center overflow-hidden rounded-[1.75rem] border border-edge p-5 shadow-lift"
          style={{
            background: iconBackground ?? `hsl(${accent} / 0.2)`,
          }}
        >
          <Image
            src={icon}
            alt={iconAlt}
            width={512}
            height={512}
            priority
            className="h-full w-full object-contain"
          />
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-1.5">
          {badges.map((badge) => (
            <li
              key={badge}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-faint"
            >
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
