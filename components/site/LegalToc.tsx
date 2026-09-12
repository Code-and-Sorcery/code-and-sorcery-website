"use client";

import { useEffect, useState } from "react";

import type { LegalSection } from "@/content/dictionaries";
import { cn } from "@/lib/utils";

export function LegalToc({
  sections,
  title,
}: {
  sections: LegalSection[];
  title: string;
}) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label={title}
      className="hidden lg:sticky lg:top-28 lg:flex lg:max-h-[calc(100dvh-9rem)] lg:flex-col lg:self-start"
    >
      <h2 className="eyebrow mb-4 shrink-0">{title}</h2>
      <ol
        tabIndex={0}
        aria-label={title}
        className="min-h-0 space-y-0.5 overflow-y-auto overscroll-contain border-l border-line py-1 pl-1 pr-2 [scrollbar-gutter:stable]"
      >
        {sections.map((section, index) => {
          const current = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(event) => {
                  // Glide to the section without putting scroll-behavior on
                  // <html>, which would turn the router's own scroll reset into
                  // an animation and break page-to-page navigation. scroll-mt
                  // on the sections keeps them clear of the sticky header.
                  const target = document.getElementById(section.id);
                  if (!target) return;
                  event.preventDefault();
                  const reduced = window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches;
                  target.scrollIntoView({
                    behavior: reduced ? "auto" : "smooth",
                    block: "start",
                  });
                  // replace, not push: a table of contents should not bury the
                  // previous page under a dozen history entries.
                  history.replaceState(null, "", `#${section.id}`);
                }}
                aria-current={current ? "true" : undefined}
                className={cn(
                  "-ml-px flex gap-2.5 border-l py-1.5 pl-4 text-[13px] leading-snug transition-colors",
                  current
                    ? "border-[hsl(var(--card-glow))] text-interactive"
                    : "border-transparent text-fg-faint hover:border-interactive-border hover:text-fg-dim",
                )}
              >
                <span className="font-mono text-[10px] tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{section.heading}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
