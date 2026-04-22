"use client";

import Image from "next/image";
import Link from "next/link";
import CtaDropdown from "@/components/CtaDropdown";
import LanguageToggle from "@/components/LanguageToggle";
import { useEffect, useMemo, useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  navItems: NavItem[];
  telegram: string;
  email: string;
  animateNav?: boolean;
};

export default function SiteHeader({
  navItems,
  telegram,
  email,
  animateNav = false,
}: SiteHeaderProps) {
  const { lang } = useI18n();
  const [logoReady, setLogoReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMegaHref, setActiveMegaHref] = useState<string | null>(null);
  const navClasses = `${
    animateNav ? "nav-sweep " : ""
  }site-nav-links`;
  const megaNav = useMemo(() => {
    const isRu = lang === "ru";

    return {
      "/#capabilities": {
        kicker: isRu ? "Возможности" : "Capabilities",
        title: isRu
          ? "Архитектура, которая держит скорость."
          : "Architecture built to hold speed.",
        description: isRu
          ? "Показываем, где команда усиливает продукт: latency, надежность, AI-flows и наблюдаемость."
          : "A quick map of where the team strengthens products: latency, reliability, AI flows, and observability.",
        points: isRu
          ? ["Low-latency infrastructure", "AI-enabled execution flows", "Production reliability"]
          : ["Low-latency infrastructure", "AI-enabled execution flows", "Production reliability"],
        meta: "Architecture · Reliability · Result",
        cta: isRu ? "Смотреть возможности" : "View capabilities",
      },
      "/work": {
        kicker: isRu ? "Work" : "Work",
        title: isRu
          ? "Кейсы, доведенные до продакшна."
          : "Selected systems with product-grade execution.",
        description: isRu
          ? "AllDayLaunch, SpectraView и инфраструктурные сценарии: короткий обзор того, что мы строим и доводим до продакшна."
          : "AllDayLaunch, SpectraView, and infrastructure scenarios: a concise preview of what we build and ship.",
        points: isRu
          ? ["AllDayLaunch launch stack", "SpectraView market intelligence", "Execution systems"]
          : ["AllDayLaunch launch stack", "SpectraView market intelligence", "Execution systems"],
        meta: "Launch · Markets · Infra",
        cta: isRu ? "Открыть work" : "Open work",
      },
      "/products": {
        kicker: isRu ? "Продукты" : "Products",
        title: isRu
          ? "Продукты в одной инженерной системе."
          : "Two product directions inside one engineering system.",
        description: isRu
          ? "Здесь собраны интерфейсы, рыночные сигналы и launch-инфраструктура, где важны скорость, читаемость и контроль."
          : "Interfaces, market signals, and launch infrastructure where speed, readability, and control matter.",
        points: isRu
          ? ["Solana launch tooling", "Prediction market intelligence", "Compact AI interfaces"]
          : ["Solana launch tooling", "Prediction market intelligence", "Compact AI interfaces"],
        meta: "Solana · AI · Order flow",
        cta: isRu ? "Смотреть продукты" : "View products",
      },
      "/insights": {
        kicker: isRu ? "Insights" : "Insights",
        title: isRu
          ? "Заметки о рынках, скорости и архитектуре."
          : "Field notes on markets, speed, and product architecture.",
        description: isRu
          ? "Блог работает как исследовательская витрина: без шума, только выводы из инженерии, трейдинга и Web3-продуктов."
          : "The blog works as a research surface: no noise, just takeaways from engineering, trading, and Web3 products.",
        points: isRu
          ? ["Market behavior", "Web3 infrastructure", "Product decisions"]
          : ["Market behavior", "Web3 infrastructure", "Product decisions"],
        meta: "Research · Notes · Signals",
        cta: isRu ? "Читать insights" : "Read insights",
      },
      "/docs": {
        kicker: isRu ? "Документация" : "Documentation",
        title: isRu
          ? "Архитектурные заметки и спецификации."
          : "Architecture notes and public specifications.",
        description: isRu
          ? "Раздел для инженерной логики: обзор, производительность, надежность, процессы и кейсы."
          : "A section for engineering logic: overview, performance, reliability, process, and cases.",
        points: isRu
          ? ["Architecture & stack", "Performance & latency", "Reliability & security"]
          : ["Architecture & stack", "Performance & latency", "Reliability & security"],
        meta: "Guides · Specs · Principles",
        cta: isRu ? "Открыть docs" : "Open docs",
      },
      "/blog": {
        kicker: isRu ? "Блог" : "Blog",
        title: isRu
          ? "Web3, AI и рынки без шума."
          : "Editorial stream on Web3, AI, and markets.",
        description: isRu
          ? "Материалы, которые объясняют мышление команды и помогают увидеть глубину за визуальной оболочкой."
          : "Articles that reveal the team's thinking and add depth behind the visual layer.",
        points: isRu
          ? ["Практические разборы", "Инженерные решения", "Рыночные наблюдения"]
          : ["Practical breakdowns", "Engineering decisions", "Market observations"],
        meta: "Editorial · Product · Markets",
        cta: isRu ? "Перейти в блог" : "Go to blog",
      },
    } as Record<string, {
      kicker: string;
      title: string;
      description: string;
      points: string[];
      meta: string;
      cta: string;
    }>;
  }, [lang]);
  const activeMegaItem = navItems.find((item) => item.href === activeMegaHref);
  const activeMega = activeMegaHref ? megaNav[activeMegaHref] : null;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container-main relative z-10">
        <div
          className="site-header-interaction"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setActiveMegaHref(null);
            }
          }}
          onMouseLeave={() => setActiveMegaHref(null)}
        >
          <div className="site-header-bar">
            <button
              type="button"
              className="logo-sweep-motion logo-sweep-button"
              onClick={() => window.location.reload()}
              aria-label="Обновить сайт"
              disabled={!logoReady}
              onAnimationEnd={() => setLogoReady(true)}
            >
              <Image
                className="logo-sweep-img site-header-logo"
                src="/q-logo.png"
                alt=""
                width={64}
                height={64}
              />
            </button>
            <button
              type="button"
              className={`menu-toggle${menuOpen ? " is-open" : ""}`}
              aria-expanded={menuOpen}
              aria-label="Open navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
            <div className={`site-nav-shell${menuOpen ? " is-open" : ""}`}>
              <nav className={navClasses}>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    className={`mega-nav-trigger link-underline${
                      activeMegaHref === item.href ? " is-active" : ""
                    }`}
                    href={item.href}
                    aria-haspopup={megaNav[item.href] ? "dialog" : undefined}
                    onMouseEnter={() => setActiveMegaHref(item.href)}
                    onFocus={() => setActiveMegaHref(item.href)}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveMegaHref(null);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                <LanguageToggle />
              </nav>
              <div className="site-header-actions">
                <CtaDropdown variant="header" telegram={telegram} email={email} />
              </div>
            </div>
          </div>
          {activeMega && activeMegaItem ? (
            <div
              className="site-mega-layer"
              role="dialog"
              aria-label={activeMegaItem.label}
              onMouseEnter={() => setActiveMegaHref(activeMegaItem.href)}
            >
              <div className="site-mega-orb" aria-hidden="true" />
              <div className="site-mega-copy">
                <p className="site-mega-kicker">{activeMega.kicker}</p>
                <h2 className="site-mega-title">{activeMega.title}</h2>
                <p className="site-mega-description">{activeMega.description}</p>
                <Link
                  className="site-mega-cta"
                  href={activeMegaItem.href}
                  onClick={() => setActiveMegaHref(null)}
                >
                  {activeMega.cta}
                </Link>
              </div>
              <div className="site-mega-index">
                <p className="site-mega-meta">{activeMega.meta}</p>
                <div className="site-mega-lines">
                  {activeMega.points.map((point, index) => (
                    <Link
                      key={point}
                      className="site-mega-line"
                      href={activeMegaItem.href}
                      onClick={() => setActiveMegaHref(null)}
                    >
                      <span>{(index + 1).toString().padStart(2, "0")}</span>
                      <p>{point}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
