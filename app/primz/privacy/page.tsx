import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Primz — Privacy Policy | Code and Sorcery",
  description:
    "Privacy policy for the Primz mobile app: how your data is handled on your device.",
};

export default function PrimzPrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container mx-auto max-w-3xl px-4 py-8">
          <p className="text-sm text-muted-foreground">
            <Link
              href="/"
              className="text-primary underline-offset-4 hover:underline"
            >
              Code and Sorcery
            </Link>
            <span className="mx-2 opacity-50">/</span>
            <span>Primz</span>
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: June 1, 2026
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-4 py-10">
        <article className="space-y-8 text-[15px] leading-relaxed text-foreground/90 sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy describes how the mobile application{" "}
              <strong>Primz</strong> (“the App”) handles information when you
              use it. Primz is developed by{" "}
              <strong>Code and Sorcery</strong> (“we,” “us,” or “our”).
            </p>
            <p>
              Primz is a private journal on your phone for children you care
              about: first times, everyday moments, photos, short notes, and
              related content. The App is designed to keep your primary data on
              your device, not on our servers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              2. Local-first by design
            </h2>
            <p>
              Primz stores your content <strong>on your device</strong>, within
              the App’s private storage. This may include, depending on how you
              use the App:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Profiles</strong> — such as a name, optional birth
                date, and profile photo;
              </li>
              <li>
                <strong>Firsts</strong> — milestone entries, dates, notes, and
                linked media;
              </li>
              <li>
                <strong>Memories</strong> — moments you choose to keep, with
                titles, categories, dates, and media;
              </li>
              <li>
                <strong>Gems</strong> — short highlights with a title,
                optional description, date, and media;
              </li>
              <li>
                <strong>App settings</strong> — such as language, theme,
                accessibility options, notification preferences, and app-lock
                settings.
              </li>
            </ul>
            <p>
              We do not operate a user account system in the App for syncing
              your personal content to our servers, and the App is not designed
              to upload your full dataset to Code and Sorcery for storage or
              processing.
            </p>
            <p>
              Because your primary data remains on the device, you control it
              through the App and your device settings—for example, by editing
              or deleting entries, exporting media, using cleanup options, or
              uninstalling the App.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              3. Permissions
            </h2>
            <p>
              The App may request access to the following, depending on how you
              use it:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Photos and media library</strong> — to pick images and
                videos (for example, profile photos or media linked to
                entries). You can decline access; some features will then be
                unavailable.
              </li>
              <li>
                <strong>Camera</strong> — to take photos or record video
                directly in the App. You can decline access; camera features
                will then be unavailable.
              </li>
              <li>
                <strong>Microphone</strong> — to record audio when you capture
                video or add audio media. You can decline access; related
                features will then be unavailable.
              </li>
              <li>
                <strong>Notifications</strong> — to show local reminders you
                enable in the App (for example, monthly milestone reminders).
                You can decline or disable them in the App or system settings.
              </li>
              <li>
                <strong>Biometric authentication</strong> (where supported) —
                only to unlock the App on your device, using the platform’s
                secure APIs. We do not receive your biometric data.
              </li>
            </ul>
            <p>
              Where the App offers to <strong>copy</strong> media into its own
              folder, that copy is stored locally to keep it available offline;
              your originals in the gallery remain under your control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              4. Notifications
            </h2>
            <p>
              If you enable notifications, Primz schedules{" "}
              <strong>local reminders on your device</strong>—for example,
              monthly milestone reminders based on a profile’s birth date. These
              notifications are generated and delivered on your device; we do not
              send push notifications from our servers and we do not receive
              the content of your journal through notification features.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              5. No advertising or tracking
            </h2>
            <p>
              Primz does <strong>not</strong> include third-party advertising,
              sell your personal data, or use cross-app tracking for marketing
              purposes. Routine use of the App does not require creating an
              account with Code and Sorcery or sending your timeline or media to
              us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              6. Data you might send to us
            </h2>
            <p>
              The App is built so that everyday use does{" "}
              <strong>not</strong> require sending your content to us. If you
              contact us (for example, by email) with a question, feedback, or
              support request, we will process the information you choose to
              include in that message—such as your email address and the content
              of your request—to respond and improve our services as
              appropriate.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              7. App stores and system services
            </h2>
            <p>
              When you download or update the App from the Apple App Store or
              Google Play, those companies process certain information in line
              with their own policies (for example, device and download
              metadata). Your use of the App is also subject to the platform
              terms that apply to your device.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              8. Children and families
            </h2>
            <p>
              Primz is intended to help families document milestones. If you
              add information that relates to a child, you should only do so as a
              parent or legal guardian, or with appropriate consent, and in line
              with the laws that apply to you. We do not knowingly solicit
              personal information from children for profiling or marketing
              through the App.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              9. Export, retention, and deletion
            </h2>
            <p>
              Data stored in the App remains on your device until you remove it
              (for example, by editing or deleting entries or profiles, using
              cleanup or reset features, or uninstalling the App).
            </p>
            <p>
              The App may offer export options—for example, exporting copied
              media as a file you can save or share through your device. Export
              is initiated by you; once shared outside the App, that copy is
              under your control.
            </p>
            <p>
              Uninstalling may delete local App data according to your
              platform’s rules. Use export or backup options before removal if
              you need to keep a copy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              10. Security
            </h2>
            <p>
              We design the App to keep your data in its private app sandbox on
              the device. Sensitive preferences (such as app-lock settings) may
              be stored using the platform’s secure storage APIs.
            </p>
            <p>
              No method of storage or transmission is 100% secure. You should
              protect your device with a passcode, biometrics, and system
              updates, and avoid sharing an unlocked device with untrusted
              people.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              11. International users
            </h2>
            <p>
              The App is distributed through global app marketplaces. If you
              contact us from another country, your message will be processed
              according to this policy and applicable law. Local privacy laws may
              give you additional rights.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              12. Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The “Last
              updated” date at the top will change when we do. We encourage you
              to review this page periodically. Continued use of the App after
              changes means you accept the updated policy, to the extent
              permitted by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              13. Terms of use
            </h2>
            <p>
              Your use of the App is also governed by our{" "}
              <Link
                href="/primz/terms"
                className="text-primary underline-offset-4 hover:underline"
              >
                Terms of Use
              </Link>
              . If this Privacy Policy and the Terms of Use conflict on personal
              data matters, this Privacy Policy prevails for those matters.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              14. Contact
            </h2>
            <p>
              For questions about this Privacy Policy or Primz, you can contact
              Code and Sorcery at:{" "}
              <a
                href="mailto:contact@codeandsorcery.fr"
                className="text-primary underline-offset-4 hover:underline"
              >
                contact@codeandsorcery.fr
              </a>
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
