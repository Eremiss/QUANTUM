"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import CtaDropdown from "@/components/CtaDropdown";
import LanguageToggle from "@/components/LanguageToggle";
import { useI18n } from "@/i18n/LanguageProvider";

const IconGlobe = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a16 16 0 0 1 0 18" />
    <path d="M12 3a16 16 0 0 0 0 18" />
  </svg>
);

const IconTelegram = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="currentColor"
  >
    <path d="M21.8 4.2c.4-.8-.2-1.5-1.1-1.2L3.5 9.6c-1 .3-1 1.7 0 2l4.7 1.5 1.8 5.6c.3 1 1.7 1 2 .1l2.7-3.6 4.9 3.6c.8.6 1.9.1 2.1-.9l2.1-13.7zM9.1 12.5l8.5-6.1-6.6 7.6-.3 3.2-1.2-3.8-3.4-1.1z" />
  </svg>
);

const IconX = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="currentColor"
  >
    <path d="M18.9 3H21l-6.6 7.5L22 21h-6l-4.7-6.3L5.4 21H3.2l7.1-8.1L2 3h6.1l4.3 5.7L18.9 3zm-2.1 16h1.7L7.3 5H5.5l11.3 14z" />
  </svg>
);

const LINKS = {
  telegram: "https://t.me/spectraview_bot",
  xAllDayLaunch: "https://x.com/AllDayLaunch_io",
  xSpectraView: "https://x.com/spectraview_io",
  site: "https://alldaylaunch.io/",
  spectraSite: "https://www.spectraview.io/",
  email: "quantumhft1@gmail.com",
};

export default function Home() {
  const { t, tArray } = useI18n();
  const [logoReady, setLogoReady] = useState(false);
  const notOutsourcing = tArray<string>("home.notOutsourcing.points");
  const capabilities = tArray<string>("home.capabilities.list");
  const segments = tArray<{ title: string; description: string }>(
    "home.segments.items",
  );
  const teamMembers = tArray<{
    name: string;
    role: string;
    title: string;
    description: string;
  }>("home.team.members").map((member, index) => ({
    ...member,
    photo: index === 0 ? "/team-1.svg" : "/team-2.svg",
  }));
  const processSteps = tArray<string>("home.process.steps");
  const alldayBullets = tArray<string>("home.products.allday.bullets");
  const spectraBullets = tArray<string>("home.products.spectra.bullets");

  return (
    <div id="top" className="relative overflow-hidden">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--line)] bg-black">
        <button
          type="button"
          className="logo-sweep-motion logo-sweep-button"
          onClick={() => window.location.reload()}
          aria-label="Обновить сайт"
          disabled={!logoReady}
          onAnimationEnd={() => setLogoReady(true)}
        >
          <Image
            className="logo-sweep-img"
            src="/q-logo.png"
            alt=""
            width={64}
            height={64}
          />
        </button>
        <div className="container-main relative z-10 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <CtaDropdown
              variant="header"
              telegram={LINKS.telegram}
              email={LINKS.email}
            />
            <nav className="nav-sweep order-3 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-[var(--muted)] md:order-2 md:ml-auto md:justify-end">
              <a className="link-underline" href="#capabilities">
                {t("nav.capabilities")}
              </a>
              <a className="link-underline" href="#products">
                {t("nav.products")}
              </a>
              <a className="link-underline" href="#process">
                {t("nav.process")}
              </a>
              <a className="link-underline" href="/docs">
                {t("nav.docs")}
              </a>
              <a className="link-underline" href="/blog">
                {t("nav.blog")}
              </a>
              <LanguageToggle />
            </nav>
          </div>
        </div>
      </header>

      <CtaDropdown variant="fab" telegram={LINKS.telegram} email={LINKS.email} />

      <main className="pt-24 md:pt-20">
        <section className="section pt-16 pb-20 md:pt-24 md:pb-24">
          <div className="container-main">
            <div className="hero-stage">
              <div className="hero-light" aria-hidden="true" />
              <div className="hero-logo-bg" aria-hidden="true">
                <div className="hero-logo-spin">
                  <Image
                    className="hero-logo-img"
                    src="/q-logo.png"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 60vw, 80vw"
                  />
                </div>
              </div>
              <FadeIn className="relative z-10 max-w-[980px]">
                <div className="mb-5 flex items-center gap-4">
                  <p className="eyebrow">{t("home.hero.eyebrow")}</p>
                </div>
                <h1 className="mt-5 text-[clamp(1.6rem,3.4vw,3.4rem)] font-semibold leading-[1.05] text-[var(--fg)]">
                  {t("home.hero.title")}
                </h1>
                <p className="mt-5 max-w-2xl text-base text-[var(--muted)] md:text-lg">
                  {t("home.hero.subtitle")}
                </p>
                <p className="mt-5 text-sm uppercase tracking-[0.4em] text-[var(--muted)]">
                  {t("home.hero.tagline")}
                </p>
                <div className="mt-6 h-px w-40 bg-gradient-to-r from-[var(--accent)]/70 via-[var(--accent-2)]/40 to-transparent" />
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    className="btn-primary"
                    href={LINKS.telegram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("cta.discussArchitecture")}
                  </a>
                </div>
                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--muted)]">
                  Rust · Solana · EVM · High-load · AI · Markets
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="section scroll-mt-28 relative z-10"
        >
          <div className="container-main">
            <div className="grid gap-12 lg:grid-cols-2">
              <FadeIn>
                <p className="eyebrow">{t("home.notOutsourcing.eyebrow")}</p>
                <h2 className="section-title mt-6">
                  {t("home.notOutsourcing.title")}
                </h2>
                <p className="section-subtitle mt-6">
                  {t("home.notOutsourcing.subtitle")}
                </p>
                <div className="tech-strip mt-8">
                  {tArray<string>("home.notOutsourcing.tags").map((tag) => (
                    <div key={tag} className="tech-node">
                      {tag}
                    </div>
                  ))}
                </div>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {notOutsourcing.map((point) => (
                    <li
                      key={point}
                      className="rounded-2xl border border-[var(--line)] bg-[rgba(12,16,24,0.55)] p-4 text-sm leading-snug text-[var(--fg)] sm:flex sm:min-h-[72px] sm:items-center"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn>
                <p className="eyebrow">{t("home.capabilities.eyebrow")}</p>
                <h2 className="section-title mt-6">
                  {t("home.capabilities.title")}
                </h2>
                <p className="section-subtitle mt-6">
                  {t("home.capabilities.subtitle")}
                </p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {capabilities.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-[var(--line)] bg-[rgba(12,16,24,0.55)] p-4 text-sm leading-snug text-[var(--fg)] sm:flex sm:min-h-[72px] sm:items-center"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="proof-stack mt-8">
                  <div className="proof-card">
                    <p className="proof-title">Latency-first</p>
                    <div className="proof-bars">
                      <span className="proof-bar proof-bar-strong" />
                      <span className="proof-bar" />
                      <span className="proof-bar proof-bar-soft" />
                    </div>
                  </div>
                  <div className="proof-card">
                    <p className="proof-title">Production ready</p>
                    <div className="proof-bars">
                      <span className="proof-bar" />
                      <span className="proof-bar proof-bar-strong" />
                      <span className="proof-bar proof-bar-soft" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <div className="section-video-wrap">
          <video
            className="section-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/q-loop.mp4" type="video/mp4" />
          </video>

          <section className="section">
            <div className="container-main">
              <FadeIn>
                <p className="eyebrow">{t("home.segments.eyebrow")}</p>
                <h2 className="section-title mt-6">
                  {t("home.segments.title")}
                </h2>
              </FadeIn>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {segments.map((segment, index) => (
                  <FadeIn key={segment.title} delay={0.05 * index}>
                  <div className="rounded-3xl border border-[var(--line)] bg-[rgba(8,10,14,0.72)] p-6">
                      <p className="text-lg font-semibold text-[var(--fg)]">
                        {segment.title}
                      </p>
                      <p className="mt-3 text-sm text-[var(--muted)]">
                        {segment.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          <section className="section team-section">
            <div className="container-main grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <FadeIn>
                <p className="eyebrow">{t("home.team.eyebrow")}</p>
                <h2 className="section-title mt-6">{t("home.team.title")}</h2>
                <p className="team-copy mt-6">
                  {t("home.team.copy")}
                </p>
              </FadeIn>
              <FadeIn delay={0.1} className="team-grid sm:grid-cols-2">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="team-card flex flex-col items-center gap-5 text-center"
                  >
                    <div className="team-photo relative overflow-hidden">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="128px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-base font-semibold">{member.name}</p>
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {member.role}
                      </p>
                    </div>
                    <div className="team-hover">
                      <p className="team-hover-title">{member.title}</p>
                      <p className="team-hover-text">{member.description}</p>
                    </div>
                  </div>
                ))}
              </FadeIn>
            </div>
          </section>
        </div>

        <section
          id="products"
          className="section scroll-mt-28"
        >
          <div className="container-main">
            <FadeIn>
              <p className="eyebrow">{t("home.products.eyebrow")}</p>
              <h2 className="section-title mt-6">{t("home.products.title")}</h2>
            </FadeIn>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <FadeIn className="surface product-card product-card--adl p-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      className="product-logo"
                      src="/product-adl.png"
                      alt="AllDayLaunch"
                      width={64}
                      height={64}
                    />
                    <p className="text-xl font-semibold">AllDayLaunch</p>
                  </div>
                  <span className="chip">Solana</span>
                </div>
                <p className="mt-4 text-sm text-[var(--muted)]">
                  {t("home.products.allday.description")}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
                  {alldayBullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-2)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    className="btn-secondary btn-icon"
                    href={LINKS.site}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="AllDayLaunch site"
                  >
                    <IconGlobe />
                    <span className="sr-only">{t("cta.openSite")}</span>
                  </a>
                  <a
                    className="btn-secondary btn-icon"
                    href={LINKS.xAllDayLaunch}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="AllDayLaunch X"
                  >
                    <IconX />
                    <span className="sr-only">{t("cta.openX")}</span>
                  </a>
                </div>
              </FadeIn>

              <FadeIn
                delay={0.1}
                className="surface product-card product-card--spectra p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      className="product-logo"
                      src="/product-al.png"
                      alt="SpectraView"
                      width={64}
                      height={64}
                    />
                    <p className="text-xl font-semibold">SpectraView</p>
                  </div>
                  <span className="chip">Prediction markets</span>
                </div>
                <p className="mt-4 text-sm text-[var(--muted)]">
                  {t("home.products.spectra.description")}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
                  {spectraBullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    className="btn-secondary btn-icon"
                    href={LINKS.spectraSite}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="SpectraView site"
                  >
                    <IconGlobe />
                    <span className="sr-only">{t("cta.openSite")}</span>
                  </a>
                  <a
                    className="btn-secondary btn-icon"
                    href={LINKS.telegram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="SpectraView Telegram"
                  >
                    <IconTelegram />
                    <span className="sr-only">{t("cta.openTelegram")}</span>
                  </a>
                  <a
                    className="btn-secondary btn-icon"
                    href={LINKS.xSpectraView}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="SpectraView X"
                  >
                    <IconX />
                    <span className="sr-only">{t("cta.openX")}</span>
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section
          id="process"
          className="section scroll-mt-28"
        >
          <div className="container-main">
            <FadeIn>
              <p className="eyebrow">{t("home.process.eyebrow")}</p>
              <h2 className="section-title mt-6">{t("home.process.title")}</h2>
              <p className="section-subtitle mt-6">
                {t("home.process.subtitle")}
              </p>
            </FadeIn>
            <div className="process-timeline mt-10">
              <ol className="process-steps">
                {processSteps.map((step, index) => (
                  <li
                    key={step}
                    className="process-step"
                    data-step={(index + 1).toString().padStart(2, "0")}
                  >
                    <span className="process-dot" aria-hidden="true" />
                    <span className="process-index">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="process-text">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-main">
            <div className="surface cta-surface grid gap-10 p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <video
                className="cta-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
              >
                <source src="/cta-loop.mp4" type="video/mp4" />
              </video>
              <FadeIn className="relative z-10">
                <p className="eyebrow">{t("home.finalCta.eyebrow")}</p>
                <h2 className="section-title mt-6">
                  {t("home.finalCta.title")}
                </h2>
                <p className="section-subtitle mt-6">
                  {t("home.finalCta.subtitle")}
                </p>
              </FadeIn>
              <FadeIn delay={0.1} className="relative z-10 md:justify-self-end">
                <div className="flex flex-col items-start gap-3 md:items-end">
                  <a
                    className="btn-primary w-fit"
                    href={LINKS.telegram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("cta.discussArchitecture")}
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)]">
        <div className="container-main py-10 text-sm text-[var(--muted)]">
          <div className="flex flex-col gap-3">
            <span>{t("home.footer.tagline")}</span>
            <a
              className="link-underline"
              href={LINKS.telegram}
              target="_blank"
              rel="noreferrer"
            >
              {t("home.footer.telegram")}
            </a>
            <div className="flex flex-wrap gap-4">
              <a
                className="link-underline"
                href={LINKS.xAllDayLaunch}
                target="_blank"
                rel="noreferrer"
              >
                {t("home.footer.xAllDayLaunch")}
              </a>
              <a
                className="link-underline"
                href={LINKS.xSpectraView}
                target="_blank"
                rel="noreferrer"
              >
                {t("home.footer.xSpectraView")}
              </a>
            </div>
            <a
              className="link-underline"
              href={LINKS.site}
              target="_blank"
              rel="noreferrer"
            >
              {t("home.footer.site")}
            </a>
            <span>{t("home.footer.copyright")}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
