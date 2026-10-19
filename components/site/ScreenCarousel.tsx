"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

/**
 * A row of phone screens that scrolls sideways and snaps on each one. The
 * buttons move one screen at a time and grey out at either end; touch, trackpad
 * and the keyboard (the row takes focus) scroll it natively.
 */
export function ScreenCarousel({
  screens,
  label,
  previous,
  next,
}: {
  screens: { src: string; alt: string }[];
  label: string;
  previous: string;
  next: string;
}) {
  const row = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const list = row.current;
    if (!list) return;
    const measure = () =>
      setEdges({
        start: list.scrollLeft <= 1,
        end: list.scrollLeft + list.clientWidth >= list.scrollWidth - 1,
      });
    measure();
    list.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      list.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const step = (direction: 1 | -1) => {
    const list = row.current;
    const card = list?.firstElementChild;
    if (!list || !(card instanceof HTMLElement)) return;
    const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
    list.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: window.matchMedia(REDUCED_MOTION).matches ? "auto" : "smooth",
    });
  };

  const button =
    "grid h-10 w-10 place-items-center rounded-full border border-line bg-ink-raised text-fg-dim transition-colors hover:text-interactive focus-visible:text-interactive disabled:pointer-events-none disabled:opacity-40";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label} className="space-y-5">
      <ul
        ref={row}
        tabIndex={0}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 [scrollbar-width:none] sm:-mx-0 sm:scroll-px-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {screens.map((screen, index) => (
          <li
            key={screen.src}
            aria-roledescription="slide"
            aria-label={`${index + 1} / ${screens.length}`}
            className="w-[62%] shrink-0 snap-start sm:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)]"
          >
            <figure className="surface overflow-hidden rounded-lg p-1.5 shadow-lift">
              <Image
                src={screen.src}
                alt={screen.alt}
                width={720}
                height={1280}
                sizes="(max-width: 640px) 62vw, (max-width: 1024px) 33vw, 25vw"
                className="h-auto w-full rounded-md"
                {...(index < 2 ? { priority: true } : { loading: "lazy" as const })}
              />
            </figure>
          </li>
        ))}
      </ul>
      <div className="flex justify-end gap-2">
        <button type="button" className={button} onClick={() => step(-1)} disabled={edges.start} aria-label={previous}>
          <ArrowLeftIcon className="h-4 w-4" />
        </button>
        <button type="button" className={button} onClick={() => step(1)} disabled={edges.end} aria-label={next}>
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
