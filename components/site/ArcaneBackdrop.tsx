/**
 * Static, GPU-cheap backdrop for the inner pages: two drifting glows, a faint
 * grid, and a 45° shaft that echoes the light pillar on the splash screen.
 * No canvas, no WebGL — the shader stays exclusive to the entrance.
 */
export function ArcaneBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
    >
      {/* Grid, fading out at every viewport edge. Anchored from the centre rather than the
          default top-left corner, so the tiling is symmetric about the middle of
          the viewport and both edges are cut by the same amount. */}
      <div
        className="mask-fade-edges absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--line-strong) / 0.42) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--line-strong) / 0.42) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          backgroundPosition: "center",
        }}
      />

      {/* The pillar, rotated to match the logo's diagonal. */}
      <div
        className="absolute left-1/2 top-[-30%] h-[160%] w-[38rem] -translate-x-1/2 rotate-[38deg] opacity-40 blur-3xl"
        style={{
          background:
            "linear-gradient(180deg, transparent, hsl(var(--pillar-upper)) 30%, hsl(var(--pillar-lower)) 70%, transparent)",
        }}
      />

      {/* Theme-specific washes, drifting on different phases. In dark mode,
          blue light echoes the cool half of the entrance pillar. */}
      <div
        className="absolute -left-40 -top-56 h-[38rem] w-[38rem] animate-aurora-drift rounded-full opacity-60 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--ambient-upper)), transparent 68%)",
        }}
      />
      <div
        className="absolute -bottom-72 -right-32 h-[42rem] w-[42rem] animate-aurora-drift rounded-full opacity-50 blur-[120px] [animation-delay:-13s]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--ambient-lower)), transparent 68%)",
        }}
      />

      {/* Sink the whole thing back toward ink so text keeps its contrast. */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/70 to-ink" />
    </div>
  );
}
