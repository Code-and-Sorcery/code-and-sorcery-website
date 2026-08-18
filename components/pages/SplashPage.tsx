"use client";

import { useState } from "react";
import Image from "next/image";

import { MailIcon } from "@/components/Icons";
import CircularText from "@/components/CircularText";
import GlareHover from "@/components/GlareHover";
import LightPillar from "@/components/LightPillar";
import { LinkButton } from "@/components/site/LinkButton";
import { SiteHeader } from "@/components/site/SiteHeader";
import { getDictionary } from "@/content/dictionaries";
import { CONTACT_EMAIL, localizePath, type Locale } from "@/content/i18n";

/**
 * The entrance. Kept deliberately scroll-free: one shader, one mark, and the
 * doors into the rest of the site.
 */
export function SplashPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [runic, setRunic] = useState(false);

  return (
    <div
      lang={locale === "en" ? undefined : locale}
      className="grain relative h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* Blue up, orange down: the ramp runs along the pillar, so the diagonal
          reads the same way round as the logo. The blue is sampled from the
          logo's triangle; the orange is lifted off its red-leaning gradient so
          it still reads orange once the glow dims it. */}
      <LightPillar
        topColor="#61a6c3"
        bottomColor="#ff8a3c"
        intensity={1.5}
        rotationSpeed={0.1}
        glowAmount={0.002}
        pillarWidth={7}
        noiseIntensity={0.1}
        pillarRotation={45}
        pillarHeight={0.75}
      />

      <SiteHeader dict={dict} locale={locale} floating />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 px-6 pb-24 pt-24 sm:gap-10">
        {/* Faded in by CSS rather than by the image's load event: the asset is
            local and prioritised, and a cached hit can fire onLoad before
            hydration, leaving the mark stuck at zero opacity. */}
        <div
          className="relative animate-rise-in"
          style={{
            width: "min(62vw, 42vh, 420px)",
            aspectRatio: "1 / 1",
          }}
          onPointerEnter={() => setRunic(true)}
          onPointerLeave={() => setRunic(false)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <CircularText
              text="CODE AND SORCERY "
              spinDuration={120}
              onHover="slowDown"
              size="93.33%"
              runic={runic}
            />
          </div>
          {/* The artwork carries a transparent margin: its disc is 93.769% of
              the 666px square, so object-fit painted it well inside the ring.
              The ring is pulled in to the disc (66.67 x 0.93769) and the image
              scaled back out by the reciprocal, which leaves the logo at the
              size it always rendered — the overflowing margin is transparent
              and clipped by the circle anyway. */}
          <div className="absolute inset-0 flex items-center justify-center">
            <GlareHover
              width="62.513%"
              height="62.513%"
              background="transparent"
              borderRadius="50%"
              borderColor="rgba(255,255,255,0.08)"
              glareOpacity={0.1}
              glareAngle={-45}
              glareSize={300}
              transitionDuration={1000}
            >
              <Image
                src="/images/code-and-sorcery-logo.webp"
                alt="Code and Sorcery"
                fill
                sizes="(max-width: 640px) 45vw, 300px"
                priority
                style={{ objectFit: "contain", transform: "scale(1.06645)" }}
              />
            </GlareHover>
          </div>
        </div>

        {/* The shader runs bright in places, so the copy carries its own shadow. */}
        <div
          className="max-w-md space-y-4 text-center"
          style={{ textShadow: "0 1px 24px rgba(0,0,0,0.8)" }}
        >
          <p className="eyebrow text-white/65">{dict.splash.tagline}</p>
          <p className="text-balance text-[15px] leading-relaxed text-white/85 sm:text-base">
            {dict.splash.subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <LinkButton
              href={localizePath("/apps", locale)}
              variant="outline"
              className="border-white/20 bg-white/10 text-white hover:border-white/35"
            >
              {dict.splash.enter}
            </LinkButton>
            <LinkButton
              href={`mailto:${CONTACT_EMAIL}`}
              variant="outline"
              icon="none"
              leadingIcon={<MailIcon className="h-4 w-4" />}
              className="border-white/20 text-white/90 hover:border-white/35 hover:text-white"
            >
              {dict.splash.contact}
            </LinkButton>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-7 z-10 flex justify-center">
        <p
          className="px-6 text-center font-mono text-[9px] uppercase tracking-[0.14em] text-white/45 sm:text-[10px] sm:tracking-[0.22em]"
          style={{ textShadow: "0 1px 16px rgba(0,0,0,0.85)" }}
        >
          {dict.footer.rights}
        </p>
      </div>
    </div>
  );
}
