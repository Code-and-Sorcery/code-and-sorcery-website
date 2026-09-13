"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ComponentProps,
  type MouseEvent,
} from "react";

/**
 * Animated route changes on the browser's own View Transitions API: it takes
 * a snapshot of the page, the router swaps the route underneath, it snapshots
 * again and animates between the two. The stylesheet decides what moves —
 * see "Route transitions" in globals.css.
 *
 * Deliberately not Next's experimental.viewTransition flag, which puts the
 * whole app on React's experimental build. This is sixty lines on a stable
 * API, and a browser without it simply navigates the way it always did.
 */

type Options = { scroll?: boolean };
type Navigate = (href: string, options?: Options) => void;

const NavigateContext = createContext<Navigate | null>(null);

/** How long a navigation may take before the page is handed back as it is. */
const SETTLE_TIMEOUT_MS = 1500;

function isEntrance(pathname: string): boolean {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return clean === "/" || clean === "/fr";
}

/** Read by the stylesheet, which animates leaving the entrance differently. */
function direction(from: string, to: string) {
  if (isEntrance(to) && !isEntrance(from)) return "to-entrance";
  if (isEntrance(from) && !isEntrance(to)) return "from-entrance";
  return "between-pages";
}

export function ViewTransitions({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  // Resolves the transition's update promise once the new route has painted.
  const settle = useRef<(() => void) | null>(null);

  useEffect(() => {
    settle.current?.();
    settle.current = null;
  }, [pathname]);

  const navigate = useCallback<Navigate>(
    (href, options) => {
      const plain = () => router.push(href, options);
      const target = new URL(href, window.location.href).pathname;

      if (
        typeof document.startViewTransition !== "function" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        settle.current !== null ||
        target === window.location.pathname
      ) {
        plain();
        return;
      }

      const root = document.documentElement;
      root.dataset.navigation = direction(window.location.pathname, target);

      const transition = document.startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            settle.current = resolve;
            // A route that never commits must not leave the page frozen under
            // its old snapshot.
            window.setTimeout(resolve, SETTLE_TIMEOUT_MS);
            plain();
          }),
      );

      transition.finished.finally(() => {
        delete root.dataset.navigation;
        settle.current = null;
      });
    },
    [router],
  );

  return (
    <NavigateContext.Provider value={navigate}>
      {children}
    </NavigateContext.Provider>
  );
}

/** Programmatic navigation through the same transition the links get. */
export function useNavigate(): Navigate {
  const navigate = useContext(NavigateContext);
  const router = useRouter();
  return navigate ?? ((href, options) => router.push(href, options));
}

/**
 * next/link, with the click routed through the transition. Anything that is
 * not a plain left click on an internal page — modifier keys, new tab,
 * external and mail links — is left to the browser as usual.
 */
export function TransitionLink({
  href,
  onClick,
  scroll,
  target,
  ...rest
}: Omit<ComponentProps<typeof Link>, "href"> & { href: string }) {
  const navigate = useContext(NavigateContext);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || !navigate) return;
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    if ((target && target !== "_self") || /^[a-z][a-z0-9+.-]*:/i.test(href)) {
      return;
    }

    event.preventDefault();
    navigate(href, { scroll });
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      scroll={scroll}
      target={target}
      {...rest}
    />
  );
}
