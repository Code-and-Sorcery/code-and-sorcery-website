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
            Last updated: April 23, 2026
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-4 py-10">
        <article className="space-y-8 text-[15px] leading-relaxed text-foreground/90 sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
            <p>
              This Privacy Policy describes how the mobile application{" "}
              <strong>Primz</strong> (“the App”) handles information when you use
              it. Primz is developed by <strong>Code and Sorcery</strong>{" "}
              (“we,” “us,” or “our”). The App is designed to help you record and
              organize meaningful moments and “firsts” (for example, a timeline
              and achievements) on your own device.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Local-first by design</h2>
            <p>
              Primz stores your content—such as profile details you enter,
              achievement entries, optional notes and dates, and media you
              attach—<strong>on your device</strong>, within the App’s private
              storage. We do not operate a user account system in the App for
              the purpose of syncing your personal timeline to our servers, and
              the App is not designed to upload your full dataset to Code and
              Sorcery for storage or processing.
            </p>
            <p>
              Because your primary data remains on the device, you are in
              control of it through your device and the App’s settings (for
              example, data export and cleanup options where available).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              3. Information and permissions
            </h2>
            <p>The App may request access to the following, depending on how you use it:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Photos and media</strong> — to let you pick images (for
                example, profile images or media linked to entries). You can
                decline access; some features will then be unavailable. Where
                the App offers to <strong>copy</strong> media into its own
                folder, that copy is stored locally to keep it available
                offline; your originals in the gallery remain under your
                control.
              </li>
              <li>
                <strong>Biometric authentication</strong> (where supported) —
                only to unlock the App on your device, using the platform’s
                secure APIs. We do not receive your biometric data.
              </li>
            </ul>
            <p>
              The App also uses device capabilities common to iOS and Android
              apps (for example, language or accessibility preferences you set
              in the App) stored locally in app storage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              4. Data you might send to us
            </h2>
            <p>
              The App is built so that routine use does <strong>not</strong>{" "}
              require sending your timeline or media to us. If you contact us
              (for example, by email) with a question or feedback, we will
              process the information you choose to include in that message
              (such as your email address and the content of your request) to
              respond and improve our services as appropriate.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              5. App stores and system services
            </h2>
            <p>
              When you download or update the App from Apple App Store or Google
              Play, those companies process certain information in line with
              their own policies (for example, device and download metadata).
              Your use of the App is also subject to the platform terms that
              apply to your device.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Children and families</h2>
            <p>
              Primz is intended to help families document milestones. If you
              add information that relates to a child, you should only do so
              as a parent or legal guardian, or with appropriate consent, and
              in line with the laws that apply to you. We do not knowingly
              solicit personal information from children for profiling or
              marketing through the App.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. Retention and deletion</h2>
            <p>
              Data stored in the App remains on your device until you remove it
              (for example, by editing or deleting entries, using cleanup or
              reset features where provided, or uninstalling the App).
              Uninstalling may delete local App data according to your
              platform’s rules; you should use export or backup options before
              removal if you need to keep a copy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">8. Security</h2>
            <p>
              We design the App to keep your data in its private app sandbox on
              the device. No method of storage or transmission is 100% secure;
              you should protect your device with a passcode, biometrics, and
              system updates, and avoid sharing an unlocked device with
              untrusted people.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">9. International users</h2>
            <p>
              The App is distributed through global app marketplaces. If you
              contact us from another country, your message will be processed
              according to this policy and applicable law. Local privacy laws
              may give you additional rights.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">10. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The “Last
              updated” date at the top will change when we do. We encourage you
              to review this page periodically. Continued use of the App after
              changes means you accept the updated policy, to the extent
              permitted by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">11. Contact</h2>
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
