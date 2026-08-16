"use client";

import { useEffect, useRef, useState } from "react";

import { CheckIcon, CopyIcon, TerminalIcon } from "@/components/Icons";

export function CopyCommand({
  command,
  copyLabel,
  copiedLabel,
  ariaLabel,
}: {
  command: string;
  copyLabel: string;
  copiedLabel: string;
  ariaLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard denied by the browser — leave the text selectable instead.
    }
  }

  return (
    <div className="surface flex items-center gap-3 rounded-lg p-1.5 pl-4">
      <TerminalIcon className="h-4 w-4 shrink-0 text-fg-faint" />
      <code className="min-w-0 flex-1 break-all py-2 font-mono text-[12.5px] leading-snug text-fg-dim">
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={ariaLabel}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-line bg-ink-raised px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-dim transition-colors hover:border-line-strong hover:text-fg"
      >
        {copied ? (
          <CheckIcon className="h-3.5 w-3.5 text-arcane" />
        ) : (
          <CopyIcon className="h-3.5 w-3.5" />
        )}
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}
