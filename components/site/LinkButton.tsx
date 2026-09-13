
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/Icons";
import { cn } from "@/lib/utils";

import { TransitionLink } from "./ViewTransitions";

const variants = {
  primary:
    "border-transparent bg-action-fill text-action-text hover:bg-action-fill/90 [--icon-opacity:1]",
  outline:
    "border-line bg-panel text-fg backdrop-blur-sm hover:border-interactive-border hover:text-interactive",
  ghost: "border-transparent text-fg-dim hover:text-interactive",
} as const;

export function LinkButton({
  href,
  children,
  variant = "outline",
  className,
  icon = "auto",
  /** Sits before the label — a mail glyph on the contact buttons. */
  leadingIcon,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  icon?: "auto" | "none";
  leadingIcon?: React.ReactNode;
}) {
  const external = /^https?:/.test(href);
  const classes = cn(
    "group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
    variants[variant],
    className,
  );

  const label = (
    <>
      {leadingIcon}
      {children}
      {icon === "auto" ? (
        external ? (
          <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        ) : (
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        )
      ) : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={classes}
      >
        {label}
      </a>
    );
  }

  return (
    <TransitionLink href={href} className={classes}>
      {label}
    </TransitionLink>
  );
}
