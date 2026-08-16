/**
 * The house mark, distilled from the logo: a diamond outline with the
 * lower-right quadrant filled. Pass `gradientId` for the two-tone version
 * (each instance needs its own id, so the caller supplies it).
 */
export function Sigil({
  className = "h-6 w-6",
  gradientId,
  draw = false,
}: {
  className?: string;
  gradientId?: string;
  draw?: boolean;
}) {
  const outline = gradientId ? `url(#${gradientId}-a)` : "currentColor";
  const solid = gradientId ? `url(#${gradientId}-b)` : "hsl(var(--arcane))";

  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      {gradientId ? (
        <defs>
          <linearGradient id={`${gradientId}-a`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--ember))" />
            <stop offset="100%" stopColor="hsl(var(--arcane))" />
          </linearGradient>
          <linearGradient id={`${gradientId}-b`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--arcane))" />
            <stop offset="100%" stopColor="hsl(var(--arcane) / 0.5)" />
          </linearGradient>
        </defs>
      ) : null}
      <path d="M16 16h12L16 28Z" fill={solid} />
      <path
        d="M16 3.5 28.5 16 16 28.5 3.5 16 16 3.5Z"
        fill="none"
        stroke={outline}
        strokeWidth="1.5"
        strokeLinejoin="round"
        pathLength={draw ? 1 : undefined}
        className={draw ? "animate-sigil-draw [stroke-dasharray:1]" : undefined}
      />
      <path d="M3.5 16h25" stroke={outline} strokeWidth="1.5" opacity="0.45" />
    </svg>
  );
}
