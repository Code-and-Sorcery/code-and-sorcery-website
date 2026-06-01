import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Primz — Terms of Use | Code and Sorcery",
  description:
    "Terms of use for the Primz mobile app: license, responsibilities, and legal terms.",
};

export default function PrimzTermsPage() {
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
            Terms of Use
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
              1. Introduction and acceptance
            </h2>
            <p>
              These Terms of Use (“Terms”) govern your access to and use of
              the mobile application <strong>Primz</strong> (“the App”),
              published by <strong>Code and Sorcery</strong> (“we,” “us,” or
              “our”).
            </p>
            <p>
              By downloading, installing, or using the App, you agree to be
              bound by these Terms. If you do not accept them, you must not use
              the App.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              2. Description of the service
            </h2>
            <p>
              Primz is a mobile app for documenting and organizing meaningful
              moments—first times, memories, photos, notes, and related
              content—about children or people you follow.
            </p>
            <p>
              The App is designed with a <strong>local-first</strong> approach:
              your content is primarily stored <strong>on your device</strong>{" "}
              in the App’s private storage. Primz is not designed to sync your
              full dataset to Code and Sorcery servers or to provide an online
              account for cloud backup.
            </p>
            <p>Features may include, without limitation:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>creating and managing profiles;</li>
              <li>
                recording firsts, memories, and gems on a timeline;
              </li>
              <li>attaching media (photos, videos, audio);</li>
              <li>export and data management options;</li>
              <li>app lock using device biometrics or passcode;</li>
              <li>local notifications, depending on your settings.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              3. Eligibility and permissions
            </h2>
            <p>
              The App is intended for <strong>adults</strong> who can enter into
              a binding agreement under applicable law. If you use Primz on
              behalf of a minor or to document information about a child, you
              represent that you are a parent, legal guardian, or otherwise
              authorized to do so.
            </p>
            <p>
              Primz is available on <strong>iOS</strong> and{" "}
              <strong>Android</strong>. You are responsible for using a
              compatible device and keeping your operating system reasonably
              up to date.
            </p>
            <p>
              Some features require system permissions (photos, camera,
              microphone, notifications, biometric authentication, and others).
              You may deny these permissions; related features may then be
              unavailable or limited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              4. License to use
            </h2>
            <p>
              Subject to these Terms and the rules of the relevant app store,
              we grant you a <strong>personal, non-exclusive, non-transferable,
              revocable, limited</strong> license to use the App for{" "}
              <strong>private, non-commercial</strong> purposes.
            </p>
            <p>You may not, without our prior written permission:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                copy, modify, adapt, translate, reverse engineer, decompile, or
                attempt to extract the App’s source code, except where the law
                allows;
              </li>
              <li>sell, rent, sublicense, or distribute the App;</li>
              <li>
                use the App for unlawful, fraudulent, or infringing purposes;
              </li>
              <li>circumvent security or access controls in the App;</li>
              <li>
                use the App to build a competing product or service in an
                unfair manner.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              5. Your content and responsibility
            </h2>
            <p>
              You retain all rights to content you enter, import, or create in
              the App (text, dates, media, profiles, and similar items) (“Your
              Content”).
            </p>
            <p>
              You are solely responsible for Your Content and for ensuring that
              you have the rights needed to record, reproduce, and keep it,
              including when it relates to third parties or children.
            </p>
            <p>
              You must not use Primz to store or share content that is illegal,
              defamatory, abusive, hateful, violent, pornographic, or that
              infringes privacy, image rights, or intellectual property.
            </p>
            <p>
              Because Your Content stays on your device, Code and Sorcery does
              not routinely review what you store in the App and is not
              responsible for content you add.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              6. Children and families
            </h2>
            <p>
              Primz is designed to help families document milestones. If you
              record information about a child, you must do so in compliance
              with applicable law and with any required consent. The App is not
              intended for unsupervised use by children.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              7. Local storage, backup, and data loss
            </h2>
            <p>
              Your content is mainly kept <strong>on your device</strong>. You
              acknowledge that loss, theft, failure, or replacement of the
              device, or uninstalling the App, may result in{" "}
              <strong>permanent loss</strong> of your data if you have not
              exported or backed it up.
            </p>
            <p>
              Export features (for example, exporting media) are provided to
              help you keep a copy, but they do <strong>not</strong> constitute
              automatic backup. Code and Sorcery is not liable for data loss
              caused by lack of backup, device issues, or actions you take
              (deletion, reset, and similar).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              8. Export, sharing, and deletion
            </h2>
            <p>
              The App may let you export or share content through your device’s
              system features. Once exported or shared, that content is outside
              the App and under your control.
            </p>
            <p>
              You may delete Your Content, reset certain settings, or uninstall
              the App at any time. Deletion may be irreversible.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              9. App lock, notifications, and security
            </h2>
            <p>
              If you enable app lock (Face ID, Touch ID, fingerprint, or
              equivalent), it relies on your device’s secure platform APIs. We
              do not receive your biometric data.
            </p>
            <p>
              The App may send <strong>local notifications</strong> according
              to your settings. You can enable or disable them in the App
              and/or device settings.
            </p>
            <p>
              Protecting your content also depends on securing your device
              (passcode, updates, and not sharing an unlocked device with
              unauthorized people). No storage method is completely secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              10. Support and feedback
            </h2>
            <p>
              You may contact us with questions about the App or these Terms
              (see section 20). If you send a report, support request, or
              feedback, please avoid including sensitive personal information
              that is not necessary to resolve your request, unless you choose
              to do so.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              11. Intellectual property
            </h2>
            <p>
              The App, its name, logo, interface, design, code, documentation,
              and all related elements (excluding Your Content) are owned by
              Code and Sorcery or its licensors and are protected by applicable
              intellectual property laws.
            </p>
            <p>
              Nothing in these Terms grants you ownership of the App or our
              trademarks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              12. App stores and third-party services
            </h2>
            <p>
              The App is distributed through the Apple App Store and/or Google
              Play. Your use is also subject to the terms and policies of the
              relevant store and platform.
            </p>
            <p>
              Some features rely on third-party or system services (operating
              system, sharing, local storage, and others). We are not
              responsible for third-party services or their terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              13. Updates and changes to the service
            </h2>
            <p>
              We may update, modify, suspend, or discontinue all or part of the
              App for maintenance, security, compliance, or improvement reasons.
              Updates may be required to continue using certain features.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              14. Disclaimer of warranties
            </h2>
            <p>
              To the fullest extent permitted by applicable law, the App is
              provided <strong>“as is”</strong> and{" "}
              <strong>“as available,”</strong> without express or implied
              warranties of performance, fitness for a particular purpose,
              error-free operation, or uninterrupted availability.
            </p>
            <p>
              Mandatory consumer protection rules remain applicable where the
              law does not allow them to be waived.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              15. Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, Code and
              Sorcery and its officers, employees, and partners shall not be
              liable for indirect, incidental, special, or consequential
              damages, loss of data, loss of profits, or harm arising from Your
              Content, your use of the App, or use by a third party on your
              device.
            </p>
            <p>
              Where permitted by law, our total liability for any claim relating
              to the App or these Terms is limited to the amount you paid for
              the App in the twelve (12) months before the event giving rise to
              the claim, or zero if the App is free.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              16. Termination
            </h2>
            <p>
              You may stop using the App at any time by uninstalling it. We may
              suspend or withdraw access if you breach these Terms or if
              required by law.
            </p>
            <p>
              Sections that by nature should survive (intellectual property,
              disclaimers, limitations of liability, governing law, and similar)
              continue to apply after you stop using the App.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              17. Changes to these Terms
            </h2>
            <p>
              We may update these Terms from time to time. The “Last updated”
              date at the top will change when we do. Continued use of the App
              after changes take effect means you accept the updated Terms, to
              the extent permitted by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              18. Governing law and disputes
            </h2>
            <p>
              These Terms are governed by <strong>French law</strong>, subject
              to mandatory consumer rules in your country of residence.
            </p>
            <p>
              If a dispute cannot be resolved amicably, the courts of France
              shall have jurisdiction, subject to mandatory rules on consumer
              jurisdiction.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              19. Privacy policy
            </h2>
            <p>
              How information is handled in connection with the App is
              described in our{" "}
              <Link
                href="/primz/privacy"
                className="text-primary underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              . If these Terms and the Privacy Policy conflict on personal
              data matters, the Privacy Policy prevails for those matters.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              20. Contact
            </h2>
            <p>
              For questions about these Terms or Primz, contact Code and Sorcery
              at:{" "}
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
