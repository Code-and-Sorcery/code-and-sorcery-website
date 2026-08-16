import Link from "next/link";

import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/Icons";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border-transparent bg-fg text-ink hover:bg-white [--icon-opacity:1]",
  outline:
    "border-line bg-white/[0.03] text-fg backdrop-blur-sm hover:border-line-strong",
  ghost: "border-transparent text-fg-dim hover:text-fg",
} as const;

export function LinkButton({
  href,
  children,
  variant = "outline",
  className,
  icon = "auto",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  icon?: "auto" | "none";
}) {
  const external = /^https?:/.test(href);
  const classes = cn(
    "group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
    variants[variant],
    className,
  );

  const label = (
    <>
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
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
