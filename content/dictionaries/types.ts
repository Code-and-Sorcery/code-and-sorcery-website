/**
 * Long-form legal copy is stored as data rather than JSX so both locales share
 * one layout, and so the table of contents can be derived from the headings.
 *
 * Inline markup inside `p` / `ul` strings is deliberately tiny — see RichText:
 *   **bold**            -> <strong>
 *   [label](/path)      -> internal link
 *   [label](https://…)  -> external link
 *   [label](mailto:…)   -> mail link
 */
export type Block = { p: string } | { ul: string[] };

export type LegalSection = {
  /** Stable across locales so #anchors survive a language switch. */
  id: string;
  heading: string;
  blocks: Block[];
};

export type LegalDocument = {
  eyebrow: string;
  title: string;
  updated: string;
  lead: string;
  /** Shown above the document when the copy is a translation. */
  translationNote?: string;
  sections: LegalSection[];
};
