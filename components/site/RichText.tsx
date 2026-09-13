import type { ReactNode } from "react";

import { TransitionLink } from "./ViewTransitions";

/**
 * French typography: no colon, semicolon, question or exclamation mark left
 * hanging at the start of a line, and guillemets kept against their content.
 * Harmless for English, which never puts a space before those marks.
 */
function tightenPunctuation(text: string): string {
  return text.replace(/ ([:;?!»])/g, "\u00a0$1").replace(/« /g, "«\u00a0");
}

const TOKEN = /\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Renders the minimal markup used in the content dictionaries: bold, backtick
 * code spans, and links. Anything else is plain text.
 */
export function RichText({ text }: { text: string }): ReactNode {
  const source = tightenPunctuation(text);
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (const match of source.matchAll(TOKEN)) {
    const at = match.index ?? 0;
    if (at > cursor) nodes.push(source.slice(cursor, at));

    const [raw, bold, code, label, href] = match;

    if (bold) {
      nodes.push(<strong key={key++}>{bold}</strong>);
    } else if (code) {
      nodes.push(<code key={key++}>{code}</code>);
    } else if (label && href) {
      const external = /^(https?:|mailto:)/.test(href);
      nodes.push(
        external ? (
          <a
            key={key++}
            href={href}
            {...(href.startsWith("http")
              ? { target: "_blank", rel: "noreferrer noopener" }
              : {})}
          >
            {label}
          </a>
        ) : (
          <TransitionLink key={key++} href={href}>
            {label}
          </TransitionLink>
        ),
      );
    }

    cursor = at + raw.length;
  }

  if (cursor < source.length) nodes.push(source.slice(cursor));
  return nodes;
}
