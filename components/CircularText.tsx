"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { motion, useAnimation, useMotionValue } from "motion/react";
import "./CircularText.css";

type OnHover = "slowDown" | "speedUp" | "pause" | "goBonkers";

/**
 * ASCII stand-ins for Elder Futhark. Geist carries no Runic block, so real
 * runes would drop to whatever face the OS happens to have for them — or to
 * tofu. These angular marks are guaranteed to render in the same font as the
 * letters they replace.
 */
const RUNES = Array.from("FNRPHIXSTBMLY<>/\\|+*=^");

const STEP_MS = 42; // gap between two letters starting to turn
const CHURN_MS = 150; // how long a letter cycles before it settles
const PHASE_MS = 52; // one glyph per phase while churning, so it steps instead of strobing

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const getReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches;
const getReducedMotionOnServer = () => false;

/** Fisher-Yates, returned as ranks[slot] = that slot's place in the turn order. */
function shuffledRanks(length: number): number[] {
  const slots = Array.from({ length }, (_, index) => index);
  for (let i = length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [slots[i], slots[j]] = [slots[j], slots[i]];
  }
  const ranks = new Array<number>(length);
  slots.forEach((slot, rank) => {
    ranks[slot] = rank;
  });
  return ranks;
}

const randomRune = () => RUNES[Math.floor(Math.random() * RUNES.length)];

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: OnHover;
  className?: string;
  size?: number | string;
  /** Carve the letters into runes, one at a time, in a fresh random order. */
  runic?: boolean;
}

const getRotationTransition = (
  duration: number,
  from: number,
  loop = true,
) => ({
  from,
  to: from + 360,
  ease: "linear" as const,
  duration,
  type: "tween" as const,
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
  },
});

export default function CircularText({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  size = 200,
  runic = false,
}: CircularTextProps) {
  const letters = useMemo(() => Array.from(text), [text]);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionOnServer,
  );

  // null means "plain text", so a run that never happens costs no state and the
  // letters cannot go stale if `text` changes.
  const [glyphs, setGlyphs] = useState<string[] | null>(null);
  // What is actually on screen: an interrupted run must turn back from the
  // glyphs the eye last saw, not from the ones it was heading for.
  const onScreen = useRef<string[]>(letters);
  const everRunic = useRef(false);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  useEffect(() => {
    if (reducedMotion) return;
    // Nothing to undo before the first hover.
    if (!runic && !everRunic.current) return;
    everRunic.current = true;

    const length = letters.length;
    const ranks = shuffledRanks(length);
    const seed = Math.floor(Math.random() * RUNES.length);
    const from =
      onScreen.current.length === length ? onScreen.current : letters;
    const to = runic
      ? letters.map((letter) => (letter.trim() ? randomRune() : letter))
      : letters;

    const total = (length - 1) * STEP_MS + CHURN_MS;
    const started = performance.now();
    let frame = 0;

    const draw = (now: number) => {
      const elapsed = now - started;
      const next = letters.map((letter, index) => {
        if (!letter.trim()) return letter;
        const local = elapsed - ranks[index] * STEP_MS;
        if (local <= 0) return from[index];
        if (local >= CHURN_MS) return to[index];
        const phase = Math.floor(local / PHASE_MS);
        return RUNES[(index * 7 + phase * 13 + seed) % RUNES.length];
      });

      onScreen.current = next;
      setGlyphs(next);

      if (elapsed < total) {
        frame = requestAnimationFrame(draw);
      } else if (!runic) {
        setGlyphs(null);
      }
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [letters, runic, reducedMotion]);

  const handleHoverStart = () => {
    const start = rotation.get();
    if (!onHover) return;

    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring" as const, damping: 20, stiffness: 300 },
          scale: { type: "spring" as const, damping: 20, stiffness: 300 },
        };
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  const shown = glyphs ?? letters;

  return (
    <motion.div
      className={`circular-text ${className}`}
      style={{ width: size, height: size, rotate: rotation }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {shown.map((glyph, i) => {
        const rotationDeg = (360 / shown.length) * i;
        const factor = Math.PI / shown.length;
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span key={i} style={{ transform }}>
            {glyph}
          </span>
        );
      })}
    </motion.div>
  );
}
