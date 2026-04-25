"use client";

import Image from "next/image";
import Link from "next/link";
import CtaDropdown from "@/components/CtaDropdown";
import FadeIn from "@/components/FadeIn";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getPrimaryNavItems, SITE_LINKS } from "@/content/site";
import { useI18n } from "@/i18n/LanguageProvider";

const workContent = {
  ru: {
    hero: {
      eyebrow: "Selected work",
      title: "Работа, которая уже ведет себя как продукт.",
      subtitle:
        "Мы показываем не презентационные концепты, а направления, где Q проектирует продуктовый слой поверх сложной инфраструктуры: launch, market intelligence и execution.",
      proof: "Launch systems · Market signal · Execution reliability",
      primaryCta: "Обсудить архитектуру",
      secondaryCta: "Смотреть продукты",
    },
    metrics: [
      { label: "Фокус", value: "Web3 / AI" },
      { label: "Стек", value: "Solana / Rust" },
      { label: "Режим", value: "Production" },
    ],
    intro: {
      eyebrow: "Operating profile",
      title: "Каждый кейс собирается вокруг скорости, читаемости и контроля.",
      copy:
        "Для нас work — это не портфолио картинок. Это карта систем, где архитектура, интерфейс и операционный контур должны работать вместе: запускаться быстро, оставаться понятными под нагрузкой и не ломать будущий рост.",
    },
    cases: [
      {
        label: "01",
        title: "AllDayLaunch",
        tag: "Solana launch stack",
        image: "/product-adl.png",
        summary:
          "Launch-инфраструктура для creators, трейдеров и команд, которым нужен быстрый путь от идеи токена до управляемого запуска.",
        role: "Q отвечает за продуктовую архитектуру, execution-flow и поверхность, где сложные действия становятся короткими сценариями.",
        points: [
          "Собираем token workflows в последовательный launch-путь.",
          "Проектируем состояния, которые понятны creator-ам и трейдерам.",
          "Держим критический путь коротким: меньше ручного шума, больше контроля.",
        ],
        stack: ["Solana", "Launch UX", "Execution flow"],
      },
      {
        label: "02",
        title: "SpectraView",
        tag: "Prediction market intelligence",
        image: "/product-spectra.png",
        summary:
          "Market intelligence слой для prediction markets: сигналы, контекст и компактный UX для решений в реальном времени.",
        role:
          "Q превращает рыночный шум в читаемую поверхность: что происходит, где меняется вероятность, какой сигнал требует внимания.",
        points: [
          "Выводим market state в формат, который можно быстро сканировать.",
          "Связываем сигналы, события и поведение ликвидности.",
          "Проектируем дистрибуцию через Telegram и продуктовые поверхности.",
        ],
        stack: ["Signals", "Telegram", "Realtime UX"],
      },
      {
        label: "03",
        title: "Execution systems",
        tag: "Infrastructure layer",
        image: "/q-logo.png",
        summary:
          "Инженерный слой вокруг latency, order flow, AI-интерфейсов и надежности там, где скорость напрямую меняет продукт.",
        role:
          "Q проектирует критические пути: ingest, risk gates, route logic, наблюдаемость и контролируемую деградацию.",
        points: [
          "Сокращаем путь от сигнала до действия.",
          "Делаем состояние системы понятным оператору и продуктовой команде.",
          "Закладываем reliability-паттерны до момента пиковых нагрузок.",
        ],
        stack: ["Latency", "Risk gates", "Observability"],
      },
    ],
    anatomy: {
      eyebrow: "How we shape work",
      title: "Кейс начинается не с экрана, а с критического пути.",
      steps: [
        {
          title: "Map the pressure",
          copy:
            "Определяем, где скорость, нагрузка или рыночный сигнал реально влияют на продуктовый результат.",
        },
        {
          title: "Design the control layer",
          copy:
            "Собираем состояния, роли, risk gates и интерфейс так, чтобы команда понимала систему без лишних объяснений.",
        },
        {
          title: "Ship the working core",
          copy:
            "Доводим не только визуал, а рабочий контур: сценарии, edge states, надежность и дальнейшую масштабируемость.",
        },
      ],
    },
    signals: [
      "Система должна быть читаемой в момент шума.",
      "Интерфейс обязан показывать не красоту, а состояние и следующий шаг.",
      "Архитектура не должна создавать долг, который блокирует следующий запуск.",
      "AI-flow нужен там, где он ускоряет решение, а не прячет контроль.",
    ],
    final: {
      eyebrow: "Build with Q",
      title: "Есть продукт, где скорость уже стала частью UX?",
      copy:
        "Разберем систему, найдем критические пути и соберем рабочую архитектуру вокруг результата.",
    },
  },
  en: {
    hero: {
      eyebrow: "Selected work",
      title: "Work that already behaves like product.",
      subtitle:
        "We show production directions, not presentation-only concepts: Q designs product layers over complex infrastructure across launch, market intelligence, and execution.",
      proof: "Launch systems · Market signal · Execution reliability",
      primaryCta: "Discuss architecture",
      secondaryCta: "View products",
    },
    metrics: [
      { label: "Focus", value: "Web3 / AI" },
      { label: "Stack", value: "Solana / Rust" },
      { label: "Mode", value: "Production" },
    ],
    intro: {
      eyebrow: "Operating profile",
      title: "Every case is shaped around speed, readability, and control.",
      copy:
        "For us, work is not a gallery of screens. It is a map of systems where architecture, interface, and operations must move together: launch fast, stay readable under load, and keep future growth open.",
    },
    cases: [
      {
        label: "01",
        title: "AllDayLaunch",
        tag: "Solana launch stack",
        image: "/product-adl.png",
        summary:
          "Launch infrastructure for creators, traders, and teams that need a fast path from token idea to controlled release.",
        role:
          "Q owns product architecture, execution flow, and the surface where complex actions become short scenarios.",
        points: [
          "Turns token workflows into a coherent launch path.",
          "Designs states that creators and traders can read quickly.",
          "Keeps the critical path short: less manual noise, more control.",
        ],
        stack: ["Solana", "Launch UX", "Execution flow"],
      },
      {
        label: "02",
        title: "SpectraView",
        tag: "Prediction market intelligence",
        image: "/product-spectra.png",
        summary:
          "A market intelligence layer for prediction markets: signals, context, and compact UX for real-time decisions.",
        role:
          "Q turns market noise into a readable surface: what is happening, where probability moves, and which signal needs attention.",
        points: [
          "Makes market state fast to scan.",
          "Connects signals, events, and liquidity behavior.",
          "Shapes distribution through Telegram and product surfaces.",
        ],
        stack: ["Signals", "Telegram", "Realtime UX"],
      },
      {
        label: "03",
        title: "Execution systems",
        tag: "Infrastructure layer",
        image: "/q-logo.png",
        summary:
          "An engineering layer around latency, order flow, AI interfaces, and reliability where speed directly changes product value.",
        role:
          "Q designs critical paths: ingest, risk gates, route logic, observability, and controlled degradation.",
        points: [
          "Shortens the path from signal to action.",
          "Makes system state readable for operators and product teams.",
          "Builds reliability patterns before peak load arrives.",
        ],
        stack: ["Latency", "Risk gates", "Observability"],
      },
    ],
    anatomy: {
      eyebrow: "How we shape work",
      title: "A case starts with the critical path, not the screen.",
      steps: [
        {
          title: "Map the pressure",
          copy:
            "We identify where speed, load, or market signal changes the product outcome.",
        },
        {
          title: "Design the control layer",
          copy:
            "We connect states, roles, risk gates, and interface so the team can understand the system without extra explanation.",
        },
        {
          title: "Ship the working core",
          copy:
            "We ship more than visuals: scenarios, edge states, reliability, and room for the next scale step.",
        },
      ],
    },
    signals: [
      "The system must stay readable when everything gets noisy.",
      "The interface should show state and next action, not decorate complexity.",
      "Architecture must not create debt that blocks the next launch.",
      "AI flow matters where it speeds decisions without hiding control.",
    ],
    final: {
      eyebrow: "Build with Q",
      title: "Have a product where speed is already part of UX?",
      copy:
        "We can map the system, find the critical paths, and shape a working architecture around the outcome.",
    },
  },
} as const;

export default function WorkPage() {
  const { lang } = useI18n();
  const content = workContent[lang];
  const navItems = getPrimaryNavItems(lang);

  return (
    <div className="subpage work-page">
      <SiteHeader
        navItems={navItems}
        telegram={SITE_LINKS.telegram}
        email={SITE_LINKS.email}
      />
      <CtaDropdown
        variant="fab"
        telegram={SITE_LINKS.telegram}
        email={SITE_LINKS.email}
      />

      <main>
        <section className="work-hero">
          <div className="work-hero-media" aria-hidden="true" />
          <div className="work-shell work-hero-grid">
            <FadeIn className="work-hero-copy" variant="soft-scale">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1>{content.hero.title}</h1>
            </FadeIn>

            <FadeIn className="work-hero-dock" delay={0.08} variant="blur-up">
              <div className="work-hero-dock-copy">
                <p>{content.hero.subtitle}</p>
                <div className="work-hero-proof">
                  {content.hero.proof.split(" · ").map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="work-hero-case-strip">
                {content.cases.map((item) => (
                  <div key={item.title}>
                    <span>{item.label}</span>
                    <strong>{item.title}</strong>
                    <p>{item.tag}</p>
                  </div>
                ))}
              </div>

              <div className="work-actions">
                <a
                  className="btn-light"
                  href={SITE_LINKS.telegram}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.hero.primaryCta}
                </a>
                <Link className="btn-quiet" href="/products">
                  {content.hero.secondaryCta}
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="work-intro-section">
          <div className="work-shell work-intro-grid">
            <FadeIn variant="slide-right">
              <p className="eyebrow">{content.intro.eyebrow}</p>
              <h2>{content.intro.title}</h2>
            </FadeIn>
            <FadeIn delay={0.08} variant="slide-left">
              <p>{content.intro.copy}</p>
            </FadeIn>
          </div>
        </section>

        <section className="work-case-section">
          <div className="work-shell">
            <div className="work-case-stack">
              {content.cases.map((item, index) => (
                <FadeIn
                  key={item.title}
                  className="work-case"
                  delay={0.04 * index}
                  variant={index % 2 === 0 ? "slide-right" : "slide-left"}
                >
                  <div className="work-case-media">
                    <Image
                      src={item.image}
                      alt=""
                      width={160}
                      height={160}
                      className="work-case-logo"
                    />
                    <span>{item.label}</span>
                  </div>
                  <div className="work-case-main">
                    <p className="work-case-tag">{item.tag}</p>
                    <h3>{item.title}</h3>
                    <p className="work-case-summary">{item.summary}</p>
                    <p className="work-case-role">{item.role}</p>
                  </div>
                  <div className="work-case-detail">
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <div className="work-case-stack-tags">
                      {item.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="work-anatomy-section">
          <div className="work-shell work-anatomy-grid">
            <FadeIn className="work-anatomy-copy" variant="slide-right">
              <p className="eyebrow">{content.anatomy.eyebrow}</p>
              <h2>{content.anatomy.title}</h2>
            </FadeIn>
            <div className="work-step-list">
              {content.anatomy.steps.map((step, index) => (
                <FadeIn
                  key={step.title}
                  className="work-step"
                  delay={0.05 * index}
                  variant="soft-scale"
                >
                  <span>{(index + 1).toString().padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="work-signal-section">
          <div className="work-shell">
            <div className="work-signal-grid">
              {content.signals.map((signal, index) => (
                <FadeIn
                  key={signal}
                  className="work-signal"
                  delay={0.04 * index}
                  variant="blur-up"
                >
                  <span>{(index + 1).toString().padStart(2, "0")}</span>
                  <p>{signal}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="work-final-section">
          <div className="work-shell">
            <FadeIn className="work-final-panel" variant="soft-scale">
              <div>
                <p className="eyebrow">{content.final.eyebrow}</p>
                <h2>{content.final.title}</h2>
                <p>{content.final.copy}</p>
              </div>
              <a
                className="btn-light"
                href={SITE_LINKS.telegram}
                target="_blank"
                rel="noreferrer"
              >
                {content.hero.primaryCta}
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      <SiteFooter
        telegram={SITE_LINKS.telegram}
        email={SITE_LINKS.email}
        x={SITE_LINKS.xQuantum}
        site={SITE_LINKS.site}
      />
    </div>
  );
}
