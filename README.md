# Code and Sorcery — website

Showcase for the studio and the home of the legal documents for the apps it
publishes. Next.js App Router, statically exported and served from GitHub Pages
at [codeandsorcery.fr](https://codeandsorcery.fr).

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static export into out/
pnpm typecheck
pnpm lint
```

## Structure

```
app/                    routes only — every page body lives in components/pages
  page.tsx              splash screen (English)
  fr/page.tsx           splash screen (French)
  (site)/               English pages, wrapped in PageShell by its layout
  fr/(site)/            French pages, same shell
components/pages/       one component per page, parameterised by locale
components/site/        the design system: shell, cards, legal doc, primitives
content/i18n.ts         locales, path helpers, metadata builder
content/apps.ts         locale-independent facts about each app
content/dictionaries/   all user-facing copy, English and French
```

## Languages

English lives at the root of the tree, French under `/fr`. **English stays
unprefixed on purpose**: `/primz/privacy` and `/primz/terms` are referenced from
the Primz app and its store listings, so those two paths must never move.

Copy is data, not JSX: `content/dictionaries/en.ts` defines the shape and
`fr.ts` is typed against it, so a missing translation is a type error. The long
legal documents are stored as sections of blocks with a tiny inline markup
(`**bold**`, `` `code` ``, `[label](href)`) rendered by `components/site/RichText`
— which also lets the table of contents and the section numbering come out of
the same data in both languages. Section `id`s are shared across locales, so a
deep link survives a language switch.

## Adding an app

1. Add an entry to `content/apps.ts` (slug, status, version, links, accent, icon).
2. Add its copy under `apps.entries.<slug>` in both dictionaries.
3. Create `app/(site)/apps/<slug>/page.tsx` and its `app/fr/(site)/` twin, plus
   a page component in `components/pages/`.
4. Add its route to `app/sitemap.ts`.

Legal documents get a `LegalDocument` in both dictionaries and a route under
`app/(site)/` — pick the URL carefully, since app stores will point at it.

## Deployment

`.github/workflows/deploy.yml` builds on every push to `master` and publishes
`out/` to GitHub Pages. The custom domain is configured in the repository's
Pages settings.
