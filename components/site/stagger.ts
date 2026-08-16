/**
 * Reveal rhythm, kept out of Reveal.tsx: that file is a client component, so
 * anything exported from it can only be called on the client, and the pages
 * that space their children out are rendered on the server.
 *
 * Two frames between siblings — enough to read as a sweep, short enough that
 * the whole row is moving before the eye settles. Capped at three steps, so a
 * long list never turns into a queue.
 */
const STAGGER_STEP = 35;
const STAGGER_MAX = STAGGER_STEP * 3;

/** Delay for the nth sibling in a row or list, in milliseconds. */
export function stagger(index: number): number {
  return Math.min(index * STAGGER_STEP, STAGGER_MAX);
}
