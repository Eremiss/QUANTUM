"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import CtaDropdown from "@/components/CtaDropdown";
import FadeIn from "@/components/FadeIn";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { posts } from "@/content/posts";
import { getPrimaryNavItems, SITE_LINKS } from "@/content/site";
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

const LINKS = SITE_LINKS;

const getArtifactCode = (lang: "ru" | "en") =>
  lang === "en"
    ? `import { QuantumRuntime } from "@quantum/execution";
import { MarketSignal } from "@quantum/signals";
import { glassConsole } from "@quantum/interface";

type Market = "solana" | "prediction" | "ai";

const runtime = new QuantumRuntime({
  mode: "real-time",
  reliability: "production",
  latencyBudget: "low",
  observability: true,
});

const markets: Market[] = [
  "solana",
  "prediction",
  "ai",
];

const signals = markets.map((market) =>
  new MarketSignal({
    market,
    refreshRate: "sub-second",
    noiseFilter: "operator-readable",
  }),
);

const executionGraph = runtime.compose({
  input: signals,
  stages: [
    "ingest",
    "normalize",
    "risk-check",
    "route",
    "render",
  ],
  guarantees: {
    degradedState: "predictable",
    interfaceState: "readable",
    operatorControl: "always-on",
  },
});

await executionGraph.compile({
  target: "brand-terminal",
  surface: "dark-glass",
  motion: "restrained",
});

const output = await glassConsole.open({
  theme: "warm-amber",
  title: "Q / execution",
  copy: "Company slogan",
});

runtime.reveal(output);`
    : `import { QuantumRuntime } from "@quantum/execution";
import { MarketSignal } from "@quantum/signals";
import { glassConsole } from "@quantum/interface";

type Market = "solana" | "prediction" | "ai";

const runtime = new QuantumRuntime({
  mode: "real-time",
  reliability: "production",
  latencyBudget: "low",
  observability: true,
});

const markets: Market[] = [
  "solana",
  "prediction",
  "ai",
];

const signals = markets.map((market) =>
  new MarketSignal({
    market,
    refreshRate: "sub-second",
    noiseFilter: "operator-readable",
  }),
);

const executionGraph = runtime.compose({
  input: signals,
  stages: [
    "ingest",
    "normalize",
    "risk-check",
    "route",
    "render",
  ],
  guarantees: {
    degradedState: "predictable",
    interfaceState: "readable",
    operatorControl: "always-on",
  },
});

await executionGraph.compile({
  target: "brand-terminal",
  surface: "dark-glass",
  motion: "restrained",
});

const output = await glassConsole.open({
  theme: "warm-amber",
  title: "Q / execution",
  copy: "Слоган компании",
});

runtime.reveal(output);`;

export default function Home() {
  const { t, tArray, lang } = useI18n();
  const [artifactCopied, setArtifactCopied] = useState(false);
  const [artifactExecuted, setArtifactExecuted] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90]);
  const heroGridY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 54]);
  const heroGlowY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 56]);
  const heroCopyY = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const heroConsoleY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -22]);
  const heroMarqueeY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -8]);

  const navItems = getPrimaryNavItems(lang);
  const notOutsourcing = tArray<string>("home.notOutsourcing.points");
  const executionProfileItems = tArray<string>("home.execution.profileItems");
  const executionMetrics = tArray<{ label: string; value: string }>(
    "home.execution.profileMetrics",
  );
  const executionStagePoints = tArray<{ label: string; value: string }>(
    "home.execution.stagePoints",
  );
  const executionFlow = tArray<{ label: string; value: string }>("home.execution.flow");
  const executionFocusItems = tArray<string>("home.execution.focusItems");
  const executionPreserveItems = tArray<string>("home.execution.preserveItems");
  const processSteps = tArray<string>("home.process.steps");
  const alldayBullets = tArray<string>("home.products.allday.bullets");
  const spectraBullets = tArray<string>("home.products.spectra.bullets");
  const trustProducts = tArray<{
    name: string;
    label: string;
    description: string;
  }>("home.trust.products");
  const trustEngagements = tArray<string>("home.trust.engagements");
  const trustSignals = tArray<string>("home.trust.signals");
  const teamMembers = tArray<{
    name: string;
    role: string;
    title: string;
    description: string;
  }>("home.team.members").map((member, index) => ({
    ...member,
    photo: index === 0 ? "/team-1.svg" : "/team-2.svg",
  }));

  const featuredPosts = posts.slice(0, 3).map((post) => ({
    slug: post.slug,
    title: lang === "en" ? post.titleEn : post.title,
    excerpt: lang === "en" ? post.excerptEn : post.excerpt,
    date: lang === "en" ? post.dateEn : post.date,
    readTime: lang === "en" ? post.readTimeEn : post.readTime,
  }));
  const artifactCode = getArtifactCode(lang);

  const copyArtifactCode = async () => {
    await navigator.clipboard.writeText(artifactCode);
    setArtifactCopied(true);
    window.setTimeout(() => setArtifactCopied(false), 1800);
  };

  return (
    <div id="top" className="home-page">
      <SiteHeader
        navItems={navItems}
        telegram={LINKS.telegram}
        email={LINKS.email}
        animateNav
      />
      <CtaDropdown variant="fab" telegram={LINKS.telegram} email={LINKS.email} />

      <main className="home-main">
        <section ref={heroRef} className="cinema-hero">
          <motion.div
            className="cinema-hero-bg"
            aria-hidden="true"
            style={{ y: heroBgY }}
          />
          <motion.div
            className="cinema-hero-grid"
            aria-hidden="true"
            style={{ y: heroGridY }}
          />
          <motion.div
            className="cinema-hero-glow cinema-hero-glow--top"
            aria-hidden="true"
            style={{ y: heroGlowY }}
          />
          <motion.div
            className="cinema-hero-glow cinema-hero-glow--bottom"
            aria-hidden="true"
            style={{ y: heroGlowY }}
          />

          <div className="cinema-shell">
            <motion.div style={{ y: heroCopyY }} className="cinema-copy-wrap">
              <FadeIn className="cinema-copy" variant="soft-scale">
                <p className="eyebrow">{t("home.hero.eyebrow")}</p>
                <p className="cinema-kicker">{t("home.hero.label")}</p>
                <h1 className="cinema-title">{t("home.hero.title")}</h1>
                <p className="cinema-subtitle">{t("home.hero.subtitle")}</p>
                <p className="cinema-caption">{t("home.hero.tagline")}</p>
                <div className="cinema-actions">
                  <a
                    className="btn-light"
                    href={LINKS.telegram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("cta.discussArchitecture")}
                  </a>
                  <Link className="btn-quiet" href="/work">
                    {t("cta.viewWork")}
                  </Link>
                </div>
              </FadeIn>
            </motion.div>

            <motion.div
              className="cinema-console-shell"
              style={{ y: heroConsoleY }}
            >
              <FadeIn delay={0.12} className="cinema-console-wrap" variant="soft-scale">
                <div className="cinema-console">
                  <div className="cinema-console-head">
                    <div>
                      <p className="cinema-console-label">{t("home.execution.eyebrow")}</p>
                      <p className="cinema-console-title">{t("home.execution.title")}</p>
                      <p className="cinema-console-subtitle">
                        {t("home.execution.subtitle")}
                      </p>
                    </div>

                    <div className="cinema-console-head-meta">
                      <span className="cinema-console-chip">{t("home.execution.status")}</span>
                      <p className="cinema-console-meta">{t("home.execution.meta")}</p>
                    </div>
                  </div>

                  <div className="cinema-console-panels">
                    <article className="console-panel console-panel--support">
                      <p className="console-panel-kicker">{t("home.execution.profileTitle")}</p>
                      <ul className="console-list">
                        {executionProfileItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <div className="console-metric-strip">
                        {executionMetrics.map((metric) => (
                          <div key={metric.label} className="console-metric">
                            <span>{metric.label}</span>
                            <p>{metric.value}</p>
                          </div>
                        ))}
                      </div>
                    </article>

                    <article className="console-panel console-panel--focus console-panel--atlas">
                      <div className="console-product console-product--hero">
                        <div className="console-product-badge">{t("home.execution.stageKicker")}</div>
                        <div>
                          <p className="console-product-name">
                            {t("home.execution.stageTitle")}
                          </p>
                          <p className="console-product-copy">
                            {t("home.execution.stageCopy")}
                          </p>
                        </div>
                      </div>

                      <div className="console-atlas-grid">
                        {executionStagePoints.map((item) => (
                          <div key={item.label} className="console-atlas-item">
                            <span>{item.label}</span>
                            <p>{item.value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="console-spectrum" aria-hidden="true">
                        {executionFlow.map((item) => (
                          <div key={item.label} className="console-spectrum-step">
                            <span className="console-spectrum-arch" />
                            <strong>{item.label}</strong>
                            <p>{item.value}</p>
                          </div>
                        ))}
                      </div>
                    </article>

                    <article className="console-panel console-panel--support">
                      <p className="console-panel-kicker">{t("home.execution.focusTitle")}</p>
                      <div className="console-stack">
                        {executionFocusItems.map((item, index) => (
                          <div key={item}>
                            <span>{(index + 1).toString().padStart(2, "0")}</span>
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>

                      <div className="console-support-divider" />

                      <p className="console-panel-kicker">{t("home.execution.preserveTitle")}</p>
                      <ul className="console-guard-list">
                        {executionPreserveItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </div>
              </FadeIn>
            </motion.div>

            <motion.div style={{ y: heroMarqueeY }}>
              <FadeIn delay={0.18} className="cinema-marquee" variant="blur-up">
              {[
                "Solana",
                "Prediction markets",
                "Execution infra",
                "AI interfaces",
                "Real-time products",
                "High-load systems",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
              </FadeIn>
            </motion.div>
          </div>
        </section>

        <section className="proof-editorial-section">
          <div className="proof-editorial-shell">
            <FadeIn className="proof-editorial-head" variant="soft-scale">
              <div className="proof-editorial-topline">
                <span className="proof-dot" aria-hidden="true" />
                <span>
                  {lang === "en" ? "Observed system behavior" : "Наблюдаемое поведение систем"}
                </span>
              </div>
              <div className="proof-editorial-title-row">
                <h2 className="proof-editorial-title">
                  {lang === "en"
                    ? "Speed under real pressure."
                    : "Скорость под реальной нагрузкой."}
                </h2>
                <p className="proof-editorial-title proof-editorial-title--side">
                  {lang === "en" ? "Without collapse." : "Без деградации."}
                </p>
              </div>
            </FadeIn>

            <FadeIn className="proof-chart-card" delay={0.06} variant="soft-scale">
              <div className="proof-figure-label">
                {lang === "en"
                  ? "Fig 2.a - latency stability under production load"
                  : "Fig 2.a - стабильность задержки под production-нагрузкой"}
              </div>
              <div className="proof-chart-grid" aria-hidden="true">
                <div className="proof-chart-area">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </FadeIn>

            <div className="proof-editorial-bottom">
              <FadeIn className="proof-mini-chart" delay={0.1} variant="slide-right">
                <div className="proof-figure-label">
                  {lang === "en"
                    ? "Fig 2.b - launch paths with shortest execution cycle"
                    : "Fig 2.b - launch-сценарии с кратчайшим execution cycle"}
                </div>
                <div className="proof-bars" aria-hidden="true">
                  <div className="proof-bar-col">
                    <span className="proof-bar-value">42%</span>
                    <div className="proof-bar-shape proof-bar-shape--low" />
                    <p>Baseline</p>
                  </div>
                  <div className="proof-bar-col">
                    <span className="proof-bar-value">57%</span>
                    <div className="proof-bar-shape proof-bar-shape--mid" />
                    <p>Optimized</p>
                  </div>
                  <div className="proof-bar-col">
                    <span className="proof-bar-value">74%</span>
                    <div className="proof-bar-shape proof-bar-shape--high" />
                    <p>Quantum</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn className="proof-quote-card" delay={0.14} variant="slide-left">
                <div className="proof-figure-label">
                  {lang === "en" ? "Fig 2.c - field note" : "Fig 2.c - field note"}
                </div>
                <div className="proof-quote-body">
                  <div className="proof-avatar" aria-hidden="true">
                    Q
                  </div>
                  <div>
                    <p className="proof-quote-text">
                      {lang === "en"
                        ? '"The difference is not only speed. The system stays readable and controllable while everything else gets noisy."'
                        : '"Разница не только в скорости. Система остаётся читаемой и управляемой, когда всё остальное начинает шуметь."'}
                    </p>
                    <p className="proof-quote-meta">
                      {lang === "en"
                        ? "Infrastructure partner, market product team"
                        : "Infrastructure partner, market product team"}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="artifact-section">
          <div className="artifact-shell">
            <FadeIn className="artifact-copy" variant="slide-right">
              <p className="eyebrow">
                {lang === "en" ? "Execution artifact" : "Execution artifact"}
              </p>
              <h2 className="artifact-title">
                {lang === "en"
                  ? "A small fragment that opens the brand system."
                  : "Фрагмент кода, который открывает бренд-систему."}
              </h2>
              <p className="artifact-text">
                {lang === "en"
                  ? "The right half behaves like an engineering note. Scroll through the fragment, then run it to open a dark glass output over the code."
                  : "Правая половина работает как инженерная заметка. Код можно скроллить, изучить и запустить, чтобы поверх него открылся темный стеклянный output."}
              </p>
            </FadeIn>

            <FadeIn className="artifact-stage" delay={0.08} variant="soft-scale">
              <div className="artifact-code-window">
                <div className="artifact-window-bar">
                  <span>source.fragment.ts</span>
                  <span>Q / execution</span>
                </div>
                <pre className="artifact-code-scroll">
                  <code>{artifactCode}</code>
                </pre>
                <div className="artifact-window-actions">
                  <button type="button" onClick={copyArtifactCode}>
                    {artifactCopied
                      ? lang === "en"
                        ? "Copied"
                        : "Скопировано"
                      : lang === "en"
                        ? "Copy code"
                        : "Copy code"}
                  </button>
                  <button
                    type="button"
                    className="artifact-run-button"
                    onClick={() => setArtifactExecuted(true)}
                  >
                    {lang === "en" ? "Run fragment" : "Run fragment"}
                  </button>
                </div>
              </div>
            </FadeIn>

            <div className={`artifact-output${artifactExecuted ? " is-executed" : ""}`}>
              <div className="artifact-output-grid" aria-hidden="true" />
              <div className="artifact-terminal-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="artifact-terminal-body">
                <p className="artifact-terminal-kicker">
                  {artifactExecuted
                    ? lang === "en"
                      ? "Output ready"
                      : "Output ready"
                    : lang === "en"
                      ? "Awaiting execution"
                      : "Awaiting execution"}
                </p>
                <p className="artifact-terminal-slogan">
                  {artifactExecuted
                    ? lang === "en"
                      ? "Company slogan"
                      : "Слоган компании"
                    : "run ./source.fragment.ts"}
                </p>
                <p className="artifact-terminal-note">
                  {artifactExecuted
                    ? lang === "en"
                      ? "Temporary placeholder. We will replace this with the final brand line."
                      : "Временный placeholder. Заменим на финальную бренд-фразу."
                    : lang === "en"
                      ? "The terminal stays dark until the fragment is opened."
                      : "Терминал остается темным, пока фрагмент не открыт."}
                </p>
                <button
                  type="button"
                  className="artifact-close-button"
                  onClick={() => setArtifactExecuted(false)}
                >
                  {lang === "en" ? "Close output" : "Закрыть output"}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="cinema-dark-band scroll-mt-28">
          <div className="container-main">
            <div className="dark-band-grid">
              <FadeIn variant="slide-right">
                <p className="eyebrow">{t("home.notOutsourcing.eyebrow")}</p>
                <h2 className="dark-band-title">{t("home.notOutsourcing.title")}</h2>
                <p className="dark-band-copy">{t("home.notOutsourcing.subtitle")}</p>
              </FadeIn>
              <FadeIn delay={0.08} variant="slide-left">
                <div className="line-list">
                  {notOutsourcing.map((point) => (
                    <div key={point} className="line-list-item">
                      <span>+</span>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="trust" className="editorial-section scroll-mt-28">
          <div className="editorial-shell">
            <FadeIn className="editorial-intro" variant="soft-scale">
              <div>
                <p className="editorial-kicker">{t("home.trust.eyebrow")}</p>
                <h2 className="editorial-title">{t("home.trust.title")}</h2>
              </div>
              <p className="editorial-copy">{t("home.trust.subtitle")}</p>
            </FadeIn>

            <div className="editorial-grid">
              <FadeIn className="editorial-column" delay={0.04} variant="slide-right">
                <p className="editorial-label">{t("home.trust.productsTitle")}</p>
                <div className="editorial-stack">
                  {trustProducts.map((product) => (
                    <article key={product.name} className="editorial-feature">
                      <p className="editorial-feature-title">{product.name}</p>
                      <p className="editorial-feature-label">{product.label}</p>
                      <p className="editorial-feature-copy">{product.description}</p>
                    </article>
                  ))}
                </div>
              </FadeIn>

              <FadeIn className="editorial-column" delay={0.08} variant="soft-scale">
                <p className="editorial-label">{t("home.trust.engagementsTitle")}</p>
                <div className="editorial-lines">
                  {trustEngagements.map((item) => (
                    <div key={item} className="editorial-line-item">
                      <span>01</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn className="editorial-column" delay={0.12} variant="slide-left">
                <p className="editorial-label">{t("home.trust.signalsTitle")}</p>
                <div className="editorial-lines editorial-lines--metrics">
                  {trustSignals.map((item, index) => (
                    <div key={item} className="editorial-line-item">
                      <span>{(index + 1).toString().padStart(2, "0")}</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="products" className="showcase-section scroll-mt-28">
          <div className="container-main">
            <FadeIn className="showcase-heading" variant="slide-right">
              <p className="eyebrow">{t("home.products.eyebrow")}</p>
              <h2 className="dark-band-title">{t("home.products.title")}</h2>
              <p className="showcase-copy">{t("home.capabilities.subtitle")}</p>
            </FadeIn>

            <div className="showcase-stack">
              <FadeIn className="showcase-stage" variant="soft-scale">
                <div className="showcase-stage-head">
                  <div className="showcase-stage-brand">
                    <Image
                      className="product-logo"
                      src="/product-adl.png"
                      alt="AllDayLaunch"
                      width={68}
                      height={68}
                    />
                    <div>
                      <p className="showcase-product-title">AllDayLaunch</p>
                      <p className="showcase-product-kicker">Solana launch stack</p>
                    </div>
                  </div>
                  <span className="showcase-chip">Launch systems</span>
                </div>

                <div className="showcase-stage-grid">
                  <div>
                    <p className="showcase-product-copy">
                      {t("home.products.allday.description")}
                    </p>
                    <div className="showcase-actions">
                      <a
                        className="btn-light"
                        href={LINKS.alldaySite}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t("cta.openSite")}
                      </a>
                      <a
                        className="btn-quiet btn-icon"
                        href={LINKS.xAllDayLaunch}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="AllDayLaunch X"
                      >
                        <IconX />
                      </a>
                    </div>
                  </div>
                  <div className="showcase-list">
                    {alldayBullets.map((bullet) => (
                      <div key={bullet} className="showcase-list-item">
                        <span />
                        <p>{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn
                delay={0.1}
                className="showcase-stage showcase-stage--alt"
                variant="soft-scale"
              >
                <div className="showcase-stage-head">
                  <div className="showcase-stage-brand">
                    <Image
                      className="product-logo"
                      src="/product-spectra.png"
                      alt="SpectraView"
                      width={68}
                      height={68}
                    />
                    <div>
                      <p className="showcase-product-title">SpectraView</p>
                      <p className="showcase-product-kicker">Prediction market tooling</p>
                    </div>
                  </div>
                  <span className="showcase-chip">Market intelligence</span>
                </div>

                <div className="showcase-stage-grid">
                  <div>
                    <p className="showcase-product-copy">
                      {t("home.products.spectra.description")}
                    </p>
                    <div className="showcase-actions">
                      <a
                        className="btn-light"
                        href={LINKS.spectraSite}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t("cta.openSite")}
                      </a>
                      <a
                        className="btn-quiet btn-icon"
                        href={LINKS.spectraTelegram}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="SpectraView Telegram"
                      >
                        <IconTelegram />
                      </a>
                      <a
                        className="btn-quiet btn-icon"
                        href={LINKS.xSpectraView}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="SpectraView X"
                      >
                        <IconX />
                      </a>
                    </div>
                  </div>
                  <div className="showcase-list">
                    {spectraBullets.map((bullet) => (
                      <div key={bullet} className="showcase-list-item">
                        <span />
                        <p>{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="insights" className="editorial-section editorial-section--soft scroll-mt-28">
          <div className="editorial-shell">
            <FadeIn className="editorial-intro" variant="slide-right">
              <div>
                <p className="editorial-kicker">
                  {lang === "en" ? "Research notes" : "Research notes"}
                </p>
                <h2 className="editorial-title">
                  {lang === "en"
                    ? "Signals from the markets we build for."
                    : "Signals from the markets we build for."}
                </h2>
              </div>
              <Link className="editorial-link" href="/blog">
                {t("nav.blog")}
              </Link>
            </FadeIn>

            <div className="insight-grid">
              {featuredPosts.map((post, index) => (
                <FadeIn
                  key={post.slug}
                  className="insight-card"
                  delay={0.04 * index}
                  variant={index % 2 === 0 ? "slide-right" : "slide-left"}
                >
                  <p className="insight-meta">
                    {post.date} · {post.readTime}
                  </p>
                  <h3 className="insight-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="insight-copy">{post.excerpt}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="cinema-dark-band cinema-dark-band--large">
          <div className="container-main">
            <div className="dark-band-grid dark-band-grid--tall">
              <FadeIn variant="slide-right">
                <p className="eyebrow">{t("home.team.eyebrow")}</p>
                <h2 className="dark-band-title">{t("home.team.title")}</h2>
                <p className="dark-band-copy">{t("home.team.copy")}</p>

                <div className="team-inline-grid">
                  {teamMembers.map((member) => (
                    <article key={member.name} className="team-inline-card">
                      <div className="team-photo team-photo--inline relative overflow-hidden">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          sizes="104px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="team-inline-name">{member.name}</p>
                        <p className="team-inline-role">{member.role}</p>
                        <p className="team-inline-title">{member.title}</p>
                        <p className="team-inline-copy">{member.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.08} variant="slide-left">
                <p className="eyebrow">{t("home.process.eyebrow")}</p>
                <h2 className="dark-band-title">{t("home.process.title")}</h2>
                <p className="dark-band-copy">{t("home.process.subtitle")}</p>
                <div className="line-list line-list--process">
                  {processSteps.map((step, index) => (
                    <div key={step} className="line-list-item">
                      <span>{(index + 1).toString().padStart(2, "0")}</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="final-cinema">
          <div className="final-cinema-glow" aria-hidden="true" />
          <div className="container-main">
            <div className="final-cinema-row">
              <FadeIn variant="slide-right">
                <p className="eyebrow">{t("home.finalCta.eyebrow")}</p>
                <h2 className="final-cinema-title">{t("home.finalCta.title")}</h2>
                <p className="final-cinema-copy">{t("home.finalCta.subtitle")}</p>
              </FadeIn>
              <FadeIn delay={0.08} className="final-cinema-actions" variant="slide-left">
                <a
                  className="btn-light"
                  href={LINKS.telegram}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("cta.startConversation")}
                </a>
                <a
                  className="btn-quiet btn-icon"
                  href={LINKS.site}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Quantum site"
                >
                  <IconGlobe />
                </a>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        telegram={LINKS.telegram}
        email={LINKS.email}
        x={LINKS.xQuantum}
        site={LINKS.site}
      />
    </div>
  );
}
