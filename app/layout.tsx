import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { SITE_URL } from "@/content/i18n";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

/**
 * Runes for the splash mark (see CircularText). Geist has no Runic coverage and
 * the OS fallback for the block is absent on a bare Linux box, so ship it.
 * Not preloaded and pinned to the block: nothing fetches these 3.5 kB until a
 * rune is actually painted, which only happens on hover.
 */
const notoRunic = localFont({
  src: "./fonts/NotoSansRunic-Regular.woff2",
  variable: "--font-runic",
  weight: "400",
  display: "swap",
  preload: false,
  declarations: [{ prop: "unicode-range", value: "U+16A0-16F8" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Code and Sorcery",
    template: "%s | Code and Sorcery",
  },
  description:
    "Independent software studio. Apps, tools and onchain work, built with a bit of magic.",
  applicationName: "Code and Sorcery",
  authors: [{ name: "William Simon--Vezo" }],
  creator: "Code and Sorcery",
};

export const viewport: Viewport = {
  /* Kept as a single tag rather than a media-scoped pair: restoreTheme rewrites
     its content, and there would be no one tag to rewrite. */
  themeColor: "#070e18",
  colorScheme: "dark light",
};

/**
 * Restores the reader's theme before anything paints — see ThemeToggle for the
 * writing half. Inlined at the top of <body> and deliberately synchronous: the
 * document has not been painted yet at that point, so setting the attribute
 * here is what keeps a light-theme reader from seeing a black frame first.
 */
const restoreTheme = `(function(){
  var theme;
  try { theme = localStorage.getItem("cas-theme"); } catch (e) { /* private mode */ }
  if (theme !== "light" && theme !== "dark") {
    theme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  document.documentElement.dataset.theme = theme;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) { meta.setAttribute("content", theme === "light" ? "#ffffff" : "#070e18"); }
})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /* The theme attribute is written by a script the server never runs, so the
       markup React hydrates against always differs from the live element. */
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoRunic.variable} antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: restoreTheme }} />

        {/* Scroll reveals are JS driven; without it, show everything outright. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
