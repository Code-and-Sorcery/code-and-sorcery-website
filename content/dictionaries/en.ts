import type { LegalDocument, LegalIndexGroup } from "./types";

const primzPrivacy: LegalDocument = {
  eyebrow: "Primz",
  title: "Privacy Policy",
  updated: "June 1, 2026",
  lead: "How the Primz mobile app handles information — and why most of it never leaves your device.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          p: "This Privacy Policy describes how the mobile application **Primz** (“the App”) handles information when you use it. Primz is developed by **Code and Sorcery** (“we,” “us,” or “our”).",
        },
        {
          p: "Primz is a private journal on your phone for children you care about: first times, everyday moments, photos, short notes, and related content. The App is designed to keep your primary data on your device, not on our servers.",
        },
      ],
    },
    {
      id: "local-first",
      heading: "Local-first by design",
      blocks: [
        {
          p: "Primz stores your content **on your device**, within the App’s private storage. This may include, depending on how you use the App:",
        },
        {
          ul: [
            "**Profiles** — such as a name, optional birth date, and profile photo;",
            "**Firsts** — milestone entries, dates, notes, and linked media;",
            "**Memories** — moments you choose to keep, with titles, categories, dates, and media;",
            "**Gems** — short highlights with a title, optional description, date, and media;",
            "**App settings** — such as language, theme, accessibility options, notification preferences, and app-lock settings.",
          ],
        },
        {
          p: "We do not operate a user account system in the App for syncing your personal content to our servers, and the App is not designed to upload your full dataset to Code and Sorcery for storage or processing.",
        },
        {
          p: "Because your primary data remains on the device, you control it through the App and your device settings — for example, by editing or deleting entries, exporting media, using cleanup options, or uninstalling the App.",
        },
      ],
    },
    {
      id: "permissions",
      heading: "Permissions",
      blocks: [
        {
          p: "The App may request access to the following, depending on how you use it:",
        },
        {
          ul: [
            "**Photos and media library** — to pick images and videos (for example, profile photos or media linked to entries). You can decline access; some features will then be unavailable.",
            "**Camera** — to take photos or record video directly in the App. You can decline access; camera features will then be unavailable.",
            "**Microphone** — to record audio when you capture video or add audio media. You can decline access; related features will then be unavailable.",
            "**Notifications** — to show local reminders you enable in the App (for example, monthly milestone reminders). You can decline or disable them in the App or system settings.",
            "**Biometric authentication** (where supported) — only to unlock the App on your device, using the platform’s secure APIs. We do not receive your biometric data.",
          ],
        },
        {
          p: "Where the App offers to **copy** media into its own folder, that copy is stored locally to keep it available offline; your originals in the gallery remain under your control.",
        },
      ],
    },
    {
      id: "notifications",
      heading: "Notifications",
      blocks: [
        {
          p: "If you enable notifications, Primz schedules **local reminders on your device** — for example, monthly milestone reminders based on a profile’s birth date. These notifications are generated and delivered on your device; we do not send push notifications from our servers and we do not receive the content of your journal through notification features.",
        },
      ],
    },
    {
      id: "no-advertising",
      heading: "No advertising or tracking",
      blocks: [
        {
          p: "Primz does **not** include third-party advertising, sell your personal data, or use cross-app tracking for marketing purposes. Routine use of the App does not require creating an account with Code and Sorcery or sending your timeline or media to us.",
        },
      ],
    },
    {
      id: "data-you-send",
      heading: "Data you might send to us",
      blocks: [
        {
          p: "The App is built so that everyday use does **not** require sending your content to us. If you contact us (for example, by email) with a question, feedback, or support request, we will process the information you choose to include in that message — such as your email address and the content of your request — to respond and improve our services as appropriate.",
        },
      ],
    },
    {
      id: "app-stores",
      heading: "App stores and system services",
      blocks: [
        {
          p: "When you download or update the App from the Apple App Store or Google Play, those companies process certain information in line with their own policies (for example, device and download metadata). Your use of the App is also subject to the platform terms that apply to your device.",
        },
      ],
    },
    {
      id: "children",
      heading: "Children and families",
      blocks: [
        {
          p: "Primz is intended to help families document milestones. If you add information that relates to a child, you should only do so as a parent or legal guardian, or with appropriate consent, and in line with the laws that apply to you. We do not knowingly solicit personal information from children for profiling or marketing through the App.",
        },
      ],
    },
    {
      id: "retention",
      heading: "Export, retention, and deletion",
      blocks: [
        {
          p: "Data stored in the App remains on your device until you remove it (for example, by editing or deleting entries or profiles, using cleanup or reset features, or uninstalling the App).",
        },
        {
          p: "The App may offer export options — for example, exporting copied media as a file you can save or share through your device. Export is initiated by you; once shared outside the App, that copy is under your control.",
        },
        {
          p: "Uninstalling may delete local App data according to your platform’s rules. Use export or backup options before removal if you need to keep a copy.",
        },
      ],
    },
    {
      id: "security",
      heading: "Security",
      blocks: [
        {
          p: "We design the App to keep your data in its private app sandbox on the device. Sensitive preferences (such as app-lock settings) may be stored using the platform’s secure storage APIs.",
        },
        {
          p: "No method of storage or transmission is 100% secure. You should protect your device with a passcode, biometrics, and system updates, and avoid sharing an unlocked device with untrusted people.",
        },
      ],
    },
    {
      id: "international",
      heading: "International users",
      blocks: [
        {
          p: "The App is distributed through global app marketplaces. If you contact us from another country, your message will be processed according to this policy and applicable law. Local privacy laws may give you additional rights.",
        },
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      blocks: [
        {
          p: "We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do. We encourage you to review this page periodically. Continued use of the App after changes means you accept the updated policy, to the extent permitted by law.",
        },
      ],
    },
    {
      id: "terms",
      heading: "Terms of use",
      blocks: [
        {
          p: "Your use of the App is also governed by our [Terms of Use](/primz/terms). If this Privacy Policy and the Terms of Use conflict on personal data matters, this Privacy Policy prevails for those matters.",
        },
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        {
          p: "For questions about this Privacy Policy or Primz, you can contact Code and Sorcery at [contact@codeandsorcery.fr](mailto:contact@codeandsorcery.fr).",
        },
      ],
    },
  ],
};

const primzTerms: LegalDocument = {
  eyebrow: "Primz",
  title: "Terms of Use",
  updated: "June 1, 2026",
  lead: "The licence, the responsibilities, and the legal terms that come with using Primz.",
  sections: [
    {
      id: "acceptance",
      heading: "Introduction and acceptance",
      blocks: [
        {
          p: "These Terms of Use (“Terms”) govern your access to and use of the mobile application **Primz** (“the App”), published by **Code and Sorcery** (“we,” “us,” or “our”).",
        },
        {
          p: "By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not accept them, you must not use the App.",
        },
      ],
    },
    {
      id: "service",
      heading: "Description of the service",
      blocks: [
        {
          p: "Primz is a mobile app for documenting and organizing meaningful moments — first times, memories, photos, notes, and related content — about children or people you follow.",
        },
        {
          p: "The App is designed with a **local-first** approach: your content is primarily stored **on your device** in the App’s private storage. Primz is not designed to sync your full dataset to Code and Sorcery servers or to provide an online account for cloud backup.",
        },
        { p: "Features may include, without limitation:" },
        {
          ul: [
            "creating and managing profiles;",
            "recording firsts, memories, and gems on a timeline;",
            "attaching media (photos, videos, audio);",
            "export and data management options;",
            "app lock using device biometrics or passcode;",
            "local notifications, depending on your settings.",
          ],
        },
      ],
    },
    {
      id: "eligibility",
      heading: "Eligibility and permissions",
      blocks: [
        {
          p: "The App is intended for **adults** who can enter into a binding agreement under applicable law. If you use Primz on behalf of a minor or to document information about a child, you represent that you are a parent, legal guardian, or otherwise authorized to do so.",
        },
        {
          p: "Primz is available on **iOS** and **Android**. You are responsible for using a compatible device and keeping your operating system reasonably up to date.",
        },
        {
          p: "Some features require system permissions (photos, camera, microphone, notifications, biometric authentication, and others). You may deny these permissions; related features may then be unavailable or limited.",
        },
      ],
    },
    {
      id: "license",
      heading: "License to use",
      blocks: [
        {
          p: "Subject to these Terms and the rules of the relevant app store, we grant you a **personal, non-exclusive, non-transferable, revocable, limited** license to use the App for **private, non-commercial** purposes.",
        },
        { p: "You may not, without our prior written permission:" },
        {
          ul: [
            "copy, modify, adapt, translate, reverse engineer, decompile, or attempt to extract the App’s source code, except where the law allows;",
            "sell, rent, sublicense, or distribute the App;",
            "use the App for unlawful, fraudulent, or infringing purposes;",
            "circumvent security or access controls in the App;",
            "use the App to build a competing product or service in an unfair manner.",
          ],
        },
      ],
    },
    {
      id: "your-content",
      heading: "Your content and responsibility",
      blocks: [
        {
          p: "You retain all rights to content you enter, import, or create in the App (text, dates, media, profiles, and similar items) (“Your Content”).",
        },
        {
          p: "You are solely responsible for Your Content and for ensuring that you have the rights needed to record, reproduce, and keep it, including when it relates to third parties or children.",
        },
        {
          p: "You must not use Primz to store or share content that is illegal, defamatory, abusive, hateful, violent, pornographic, or that infringes privacy, image rights, or intellectual property.",
        },
        {
          p: "Because Your Content stays on your device, Code and Sorcery does not routinely review what you store in the App and is not responsible for content you add.",
        },
      ],
    },
    {
      id: "children",
      heading: "Children and families",
      blocks: [
        {
          p: "Primz is designed to help families document milestones. If you record information about a child, you must do so in compliance with applicable law and with any required consent. The App is not intended for unsupervised use by children.",
        },
      ],
    },
    {
      id: "local-storage",
      heading: "Local storage, backup, and data loss",
      blocks: [
        {
          p: "Your content is mainly kept **on your device**. You acknowledge that loss, theft, failure, or replacement of the device, or uninstalling the App, may result in **permanent loss** of your data if you have not exported or backed it up.",
        },
        {
          p: "Export features (for example, exporting media) are provided to help you keep a copy, but they do **not** constitute automatic backup. Code and Sorcery is not liable for data loss caused by lack of backup, device issues, or actions you take (deletion, reset, and similar).",
        },
      ],
    },
    {
      id: "export",
      heading: "Export, sharing, and deletion",
      blocks: [
        {
          p: "The App may let you export or share content through your device’s system features. Once exported or shared, that content is outside the App and under your control.",
        },
        {
          p: "You may delete Your Content, reset certain settings, or uninstall the App at any time. Deletion may be irreversible.",
        },
      ],
    },
    {
      id: "security",
      heading: "App lock, notifications, and security",
      blocks: [
        {
          p: "If you enable app lock (Face ID, Touch ID, fingerprint, or equivalent), it relies on your device’s secure platform APIs. We do not receive your biometric data.",
        },
        {
          p: "The App may send **local notifications** according to your settings. You can enable or disable them in the App and/or device settings.",
        },
        {
          p: "Protecting your content also depends on securing your device (passcode, updates, and not sharing an unlocked device with unauthorized people). No storage method is completely secure.",
        },
      ],
    },
    {
      id: "support",
      heading: "Support and feedback",
      blocks: [
        {
          p: "You may contact us with questions about the App or these Terms (see [Contact](#contact)). If you send a report, support request, or feedback, please avoid including sensitive personal information that is not necessary to resolve your request, unless you choose to do so.",
        },
      ],
    },
    {
      id: "ip",
      heading: "Intellectual property",
      blocks: [
        {
          p: "The App, its name, logo, interface, design, code, documentation, and all related elements (excluding Your Content) are owned by Code and Sorcery or its licensors and are protected by applicable intellectual property laws.",
        },
        {
          p: "Nothing in these Terms grants you ownership of the App or our trademarks.",
        },
      ],
    },
    {
      id: "third-parties",
      heading: "App stores and third-party services",
      blocks: [
        {
          p: "The App is distributed through the Apple App Store and/or Google Play. Your use is also subject to the terms and policies of the relevant store and platform.",
        },
        {
          p: "Some features rely on third-party or system services (operating system, sharing, local storage, and others). We are not responsible for third-party services or their terms.",
        },
      ],
    },
    {
      id: "updates",
      heading: "Updates and changes to the service",
      blocks: [
        {
          p: "We may update, modify, suspend, or discontinue all or part of the App for maintenance, security, compliance, or improvement reasons. Updates may be required to continue using certain features.",
        },
      ],
    },
    {
      id: "warranties",
      heading: "Disclaimer of warranties",
      blocks: [
        {
          p: "To the fullest extent permitted by applicable law, the App is provided **“as is”** and **“as available,”** without express or implied warranties of performance, fitness for a particular purpose, error-free operation, or uninterrupted availability.",
        },
        {
          p: "Mandatory consumer protection rules remain applicable where the law does not allow them to be waived.",
        },
      ],
    },
    {
      id: "liability",
      heading: "Limitation of liability",
      blocks: [
        {
          p: "To the fullest extent permitted by applicable law, Code and Sorcery and its officers, employees, and partners shall not be liable for indirect, incidental, special, or consequential damages, loss of data, loss of profits, or harm arising from Your Content, your use of the App, or use by a third party on your device.",
        },
        {
          p: "Where permitted by law, our total liability for any claim relating to the App or these Terms is limited to the amount you paid for the App in the twelve (12) months before the event giving rise to the claim, or zero if the App is free.",
        },
      ],
    },
    {
      id: "termination",
      heading: "Termination",
      blocks: [
        {
          p: "You may stop using the App at any time by uninstalling it. We may suspend or withdraw access if you breach these Terms or if required by law.",
        },
        {
          p: "Sections that by nature should survive (intellectual property, disclaimers, limitations of liability, governing law, and similar) continue to apply after you stop using the App.",
        },
      ],
    },
    {
      id: "changes",
      heading: "Changes to these Terms",
      blocks: [
        {
          p: "We may update these Terms from time to time. The “Last updated” date at the top will change when we do. Continued use of the App after changes take effect means you accept the updated Terms, to the extent permitted by law.",
        },
      ],
    },
    {
      id: "law",
      heading: "Governing law and disputes",
      blocks: [
        {
          p: "These Terms are governed by **French law**, subject to mandatory consumer rules in your country of residence.",
        },
        {
          p: "If a dispute cannot be resolved amicably, the courts of France shall have jurisdiction, subject to mandatory rules on consumer jurisdiction.",
        },
      ],
    },
    {
      id: "privacy",
      heading: "Privacy policy",
      blocks: [
        {
          p: "How information is handled in connection with the App is described in our [Privacy Policy](/primz/privacy). If these Terms and the Privacy Policy conflict on personal data matters, the Privacy Policy prevails for those matters.",
        },
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        {
          p: "For questions about these Terms or Primz, contact Code and Sorcery at [contact@codeandsorcery.fr](mailto:contact@codeandsorcery.fr).",
        },
      ],
    },
  ],
};

const legalIndexGroups: LegalIndexGroup[] = [
      {
        slug: "primz",
        name: "Primz",
        note: "iOS & Android · in development",
        entries: [
          {
            title: "Privacy Policy",
            body: "What Primz stores, what it asks permission for, and why almost nothing reaches us.",
            path: "/primz/privacy",
          },
          {
            title: "Terms of Use",
            body: "Licence, responsibilities, liability and governing law.",
            path: "/primz/terms",
          },
        ],
      },
      {
        slug: "env-checker",
        name: "Env Checker",
        note: "VS Code · MIT",
        entries: [
          {
            title: "No separate policy",
            body: "The extension runs entirely inside your editor, with no account, no telemetry and no network call. There is nothing for a privacy policy to describe, and no terms to accept beyond the licence.",
          },
          {
            title: "MIT licence",
            body: "The source is public and the licence text sits in the repository.",
            href: "https://github.com/Code-and-Sorcery/vscode-env-checker/blob/main/LICENSE",
          },
        ],
      },
      {
        name: "Code and Sorcery",
        note: "SASU · France",
        entries: [
          {
            title: "Publisher",
            body: "Code and Sorcery, SASU registered in France, publishes the apps listed above. Written enquiries and legal notices: [contact@codeandsorcery.fr](mailto:contact@codeandsorcery.fr).",
          },
        ],
      },
    ];

export const en = {
  htmlLang: "en",
  localeName: "English",
  switchTo: "Français",
  switchAria: "Read this page in French",

  nav: {
    apps: "Apps",
    studio: "Studio",
    legal: "Legal",
    home: "Home",
    skipToContent: "Skip to content",
    menu: "Menu",
    close: "Close",
  },

  common: {
    updated: "Last updated",
    onThisPage: "On this page",
    copy: "Copy",
    copied: "Copied",
    copyAria: "Copy to clipboard",
    open: "Open",
    readMore: "Read more",
    contact: "Contact",
    backHome: "Back to the entrance",
    backToApps: "Back to apps",
    version: "Version",
    license: "Licence",
    status: "Status",
    platform: "Platform",
    stack: "Stack",
    external: "opens in a new tab",
  },

  status: {
    live: "Live",
    building: "In development",
  },

  splash: {
    tagline: "Independent software studio",
    subtitle: "Apps, tools, onchain, built with a bit of magic.",
    enter: "See the apps",
    contact: "Contact me",
  },

  studio: {
    eyebrow: "The studio",
    title: "Cast the spell, then ship",
    /** Rendered as two lines. */
    titleParts: ["Cast the spell,", "then ship"],
    lead: "Code and Sorcery is a one-person software studio registered in France as a SASU. I design, build and ship products end to end — and I publish my own apps under the same name.",
    facts: [
      { label: "Structure", value: "SASU · France" },
      { label: "Practice", value: "Web · Mobile · Onchain" },
      { label: "Languages", value: "French · English" },
    ],
    workTitle: "What I build",
    work: [
      {
        title: "Product engineering",
        body: "TypeScript from end to end: Next.js front ends, Node services, Postgres or Mongo underneath, GraphQL or REST between them.",
      },
      {
        title: "Mobile apps",
        body: "React Native and Expo for iOS and Android, offline-first when the product deserves it — as in Primz, which never needs a server.",
      },
      {
        title: "Onchain work",
        body: "Solidity contracts and the dapps around them, from prototype to something you would let an auditor read.",
      },
      {
        title: "Quality as a feature",
        body: "Typed boundaries, Vitest and Playwright suites, Storybook for the parts people touch, CI that blocks instead of nagging.",
      },
    ],
    stackTitle: "Spell components",
    stackNote: "The set I reach for most.",
    elsewhereTitle: "Elsewhere",
    elsewhere: [
      { label: "GitHub", value: "Varadiell", key: "github" },
      { label: "LinkedIn", value: "williamsimonvezo", key: "linkedin" },
      { label: "Résumé", value: "Curriculum vitae", key: "resume" },
    ],
    ctaTitle: "Something to build?",
    ctaBody:
      "Product work, greenfield builds, audits, or a codebase that grew faster than its foundations — tell me what you are up against.",
    ctaAction: "Write to me",
  },

  apps: {
    eyebrow: "Catalogue",
    title: "Apps from the forge",
    lead: "Everything Code and Sorcery has published or is preparing to publish. Legal documents for each one live in the Legal section.",
    entries: {
      "env-checker": {
        tagline: "Read, document and compare .env files inside VS Code.",
        summary:
          "A custom editor that turns a dotenv file into a table: comments become documentation, and a second file shows you exactly which keys are missing or left over.",
      },
      primz: {
        tagline: "Keep track of all your first times.",
        summary:
          "A private journal for the children you care about — firsts, memories, photos, audio and small notes, kept on the phone and nowhere else.",
      },
    },
    forgeTitle: "Still in the forge",
    forgeBody:
      "Other projects are being hammered on and are not public yet. They land here when they are ready, not before.",
  },

  envChecker: {
    eyebrow: "VS Code extension",
    lead: "Open a .env file in a structured view. Comments become documentation next to each key, and comparing two variants shows what is missing or left over at a glance.",
    screenshotCaption:
      ".env checked against .env.example — matching keys, an extra one, and a missing one.",
    installTitle: "Install",
    installNote:
      "Or search for “Env Checker” in the Extensions view of your editor.",
    requirements: "VS Code 1.85.0 or newer",
    featuresTitle: "What it does",
    features: [
      {
        title: "Custom editor",
        body: "Opening .env or .env.* files uses the Env Checker view. One command takes you back to the plain text editor whenever you want.",
      },
      {
        title: "Formatted table",
        body: "Keys, values, and documentation merged from the # lines above each key plus the optional inline comment after the value.",
      },
      {
        title: "Side-by-side comparison",
        body: "Pick a base file and a comparison file from the same folder. When both exist, .env against .env.example is the default.",
      },
      {
        title: "Live updates",
        body: "Editing an env file in that folder refreshes the view, and unsaved buffer content is used when the file is open in a tab.",
      },
      {
        title: "Dotenv language",
        body: "A dotenv language id is registered for the usual filename patterns, so plain-text editing behaves properly too.",
      },
    ],
    commandsTitle: "Commands",
    commandsNote:
      "Also available from the Explorer context menu and the editor title bar when the file is an env file.",
    commands: [
      {
        name: "Env Checker: Open formatted view",
        body: "Opens the comparison panel for the active env file.",
      },
      {
        name: "Env Checker: Compare with .env.example (and related)",
        body: "The same panel, focused on your example and related files.",
      },
      {
        name: "Env Checker: Compare env files…",
        body: "Choose files from a dialog; the first selection sets the folder context.",
      },
      {
        name: "Env Checker: Reopen as text editor",
        body: "Opens the same file in the default text editor.",
      },
    ],
    settingsTitle: "Settings",
    settings: [
      {
        name: "envChecker.relatedFileNames",
        body: "Basenames in the same folder as the active file that count as related env files, in addition to the .env and .env.* patterns.",
      },
    ],
    parserTitle: "Parser notes",
    parser: [
      "An optional `export` before `KEY=value` is supported.",
      "Comment lines immediately above a key attach to it as documentation; two or more consecutive blank lines break that link, one is still fine.",
      "Quoted values support escaping the way common dotenv implementations do.",
    ],
    privacyTitle: "Nothing leaves the editor",
    privacyBody:
      "Env Checker reads the files you open and nothing else. There is no account, no telemetry and no network call, which is why it has no separate privacy policy. The source is MIT licensed and public.",
  },

  primz: {
    eyebrow: "iOS & Android",
    lead: "A private journal for the children you care about. Firsts, memories, photos, audio and small notes — kept on the phone, with no account and no server in the middle.",
    statusTitle: "Not on the stores yet",
    statusBody:
      "Primz is still in development. Its terms and privacy policy are already published here so the app can point at a stable address from day one.",
    pillarsTitle: "The idea",
    pillars: [
      {
        title: "Local-first, not cloud-first",
        body: "No account to create, no sync to trust. Your timeline lives in the app’s private storage on your device, and the app is not built to upload it anywhere.",
      },
      {
        title: "Every first, kept",
        body: "Firsts, memories and gems on a single timeline, with photos, video, audio and dates — plus one profile per child.",
      },
      {
        title: "Yours to take out",
        body: "Export what you want, share with a nearby phone over Bluetooth without a server, or turn a memory into something printed.",
      },
    ],
    featuresTitle: "Inside the app",
    features: [
      { title: "Timeline", body: "Every entry in order, per profile." },
      { title: "Firsts", body: "Milestones with dates, notes and media." },
      { title: "Memories", body: "Moments worth keeping, by category." },
      { title: "Gems", body: "Short highlights, one line and an image." },
      { title: "Album", body: "Everything visual, in one place." },
      { title: "Audio notes", body: "The voice, not just the words." },
      { title: "Calendar", body: "Look back by date instead of by list." },
      { title: "Achievements", body: "Quiet nudges to keep the journal alive." },
      { title: "Postcards & prints", body: "Turn a memory into paper." },
      { title: "Share nearby", body: "Bluetooth handoff, no server involved." },
      { title: "App lock", body: "Face ID, Touch ID or fingerprint." },
      { title: "Reminders", body: "Local notifications, scheduled on device." },
    ],
    legalTitle: "Legal",
    legalBody:
      "Both documents are published at stable URLs referenced from the app and the stores.",
  },

  legalIndex: {
    eyebrow: "Legal",
    title: "App documents",
    lead: "Terms of use, privacy policies and licences for everything Code and Sorcery publishes.",
    groups: legalIndexGroups,
  },

  legal: {
    primzPrivacy,
    primzTerms,
  },

  notFound: {
    eyebrow: "404",
    title: "Nothing at this sigil",
    lead: "The page you asked for is not here. It may have been renamed, or it may never have existed.",
  },

  footer: {
    tagline: "Independent software studio. Apps, tools and onchain work.",
    siteTitle: "Site",
    appsTitle: "Apps",
    elsewhereTitle: "Elsewhere",
    legalTitle: "Legal",
    rights: "Code and Sorcery · SASU registered in France",
  },
};

export type Dictionary = typeof en;
