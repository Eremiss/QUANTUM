"use client";

import CtaDropdown from "@/components/CtaDropdown";
import FadeIn from "@/components/FadeIn";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useMemo, useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";

type DocsMetric = {
  label: string;
  value: string;
};

type DocsCard = {
  title: string;
  body: string;
  hrefLabel?: string;
  status?: string;
};

const LINKS = {
  telegram: "https://t.me/spectraview_bot",
  xAllDayLaunch: "https://x.com/AllDayLaunch_io",
  xSpectraView: "https://x.com/spectraview_io",
  site: "https://alldaylaunch.io/",
  email: "hello@designquant.io",
};

const NAV_ITEMS = [
  { label: "Главная", href: "/" },
  { label: "Блог", href: "/blog" },
  { label: "Market", href: "/market" },
  { label: "Tech", href: "/tech" },
];

export default function DocsPage() {
  const { t, tArray } = useI18n();
  const navItems = NAV_ITEMS.map((item) => ({
    ...item,
    label:
      item.href === "/"
        ? t("nav.home")
        : item.href === "/blog"
          ? t("nav.blog")
          : item.href === "/market"
          ? t("nav.market")
          : t("nav.tech"),
  }));

  const metricItems = tArray<DocsMetric>("docs.metrics.items");
  const caseItems = tArray<DocsCard>("docs.sections.cases.items");
  const linkItems = tArray<DocsCard>("docs.sections.links.items");
  const architectureBullets = tArray<string>("docs.sections.architecture.bullets");
  const performanceBullets = tArray<string>("docs.sections.performance.bullets");
  const reliabilityBullets = tArray<string>("docs.sections.reliability.bullets");
  const processBullets = tArray<string>("docs.sections.process.bullets");

  const sectionNav = [
    { id: "overview", label: t("docs.sections.overview.title") },
    { id: "architecture", label: t("docs.sections.architecture.title") },
    { id: "performance", label: t("docs.sections.performance.title") },
    { id: "reliability", label: t("docs.sections.reliability.title") },
    { id: "process", label: t("docs.sections.process.title") },
    { id: "cases", label: t("docs.sections.cases.title") },
    { id: "links", label: t("docs.sections.links.title") },
  ];

  const [navQuery, setNavQuery] = useState("");
  const filteredNav = useMemo(() => {
    const query = navQuery.trim().toLowerCase();
    if (!query) {
      return sectionNav;
    }
    return sectionNav.filter((item) =>
      item.label.toLowerCase().includes(query),
    );
  }, [navQuery, sectionNav]);

  const caseLinks: Record<string, string> = {
    AllDayLaunch: LINKS.site,
    SpectraView: LINKS.xSpectraView,
  };

  return (
    <div className="relative overflow-hidden">
      <SiteHeader
        navItems={navItems}
        telegram={LINKS.telegram}
        email={LINKS.email}
      />
      <CtaDropdown variant="fab" telegram={LINKS.telegram} email={LINKS.email} />

      <main className="pt-24">
        <section className="section pt-12">
          <div className="container-main">
            <div className="page-hero page-hero--docs">
              <FadeIn>
                <p className="eyebrow">Docs</p>
                <h1 className="section-title mt-6">{t("docs.title")}</h1>
                <p className="section-subtitle mt-6 max-w-2xl">
                  {t("docs.subtitle")}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a className="btn-secondary" href="/blog">
                    {t("cta.readBlog")}
                  </a>
                  <a className="btn-primary" href="/">
                    {t("cta.backHome")}
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-main">
            <div className="docs-layout">
              <aside className="docs-nav">
                <p className="docs-nav-title">{t("docs.navTitle")}</p>
                <input
                  className="docs-search"
                  type="search"
                  value={navQuery}
                  onChange={(event) => setNavQuery(event.target.value)}
                  placeholder={t("docs.searchPlaceholder")}
                  aria-label={t("docs.searchPlaceholder")}
                />
                {filteredNav.map((item) => (
                  <a key={item.id} className="docs-nav-link" href={`#${item.id}`}>
                    {item.label}
                  </a>
                ))}
              </aside>

              <div className="docs-content">
                <section id="overview" className="docs-section">
                  <h2 className="docs-section-title">
                    {t("docs.sections.overview.title")}
                  </h2>
                  <p className="docs-section-body">
                    {t("docs.sections.overview.body")}
                  </p>
                  <p className="docs-metrics-title">{t("docs.metrics.title")}</p>
                  <div className="docs-metrics">
                    {metricItems.map((item) => (
                      <div key={item.label} className="docs-metric">
                        <p className="docs-metric-label">{item.label}</p>
                        <p className="docs-metric-value">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="docs-section-body">
                    {t("docs.placeholders.metrics")}
                  </p>
                </section>

                <section id="architecture" className="docs-section">
                  <h2 className="docs-section-title">
                    {t("docs.sections.architecture.title")}
                  </h2>
                  <p className="docs-section-body">
                    {t("docs.sections.architecture.body")}
                  </p>
                  <ul className="docs-list">
                    {architectureBullets.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </section>

                <section id="performance" className="docs-section">
                  <h2 className="docs-section-title">
                    {t("docs.sections.performance.title")}
                  </h2>
                  <p className="docs-section-body">
                    {t("docs.sections.performance.body")}
                  </p>
                  <ul className="docs-list">
                    {performanceBullets.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </section>

                <section id="reliability" className="docs-section">
                  <h2 className="docs-section-title">
                    {t("docs.sections.reliability.title")}
                  </h2>
                  <p className="docs-section-body">
                    {t("docs.sections.reliability.body")}
                  </p>
                  <ul className="docs-list">
                    {reliabilityBullets.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </section>

                <section id="process" className="docs-section">
                  <h2 className="docs-section-title">
                    {t("docs.sections.process.title")}
                  </h2>
                  <p className="docs-section-body">
                    {t("docs.sections.process.body")}
                  </p>
                  <ul className="docs-list">
                    {processBullets.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </section>

                <section id="cases" className="docs-section">
                  <h2 className="docs-section-title">
                    {t("docs.sections.cases.title")}
                  </h2>
                  <p className="docs-section-body">
                    {t("docs.sections.cases.body")}
                  </p>
                  <div className="docs-grid">
                    {caseItems.map((item) => {
                      const href = caseLinks[item.title];
                      return (
                        <article key={item.title} className="docs-card">
                          <div className="docs-card-meta">
                            <p className="docs-card-title">{item.title}</p>
                            <span className="docs-chip">{t("docs.placeholders.linksSoon")}</span>
                          </div>
                          <p className="docs-section-body">{item.body}</p>
                          {href ? (
                            <a
                              className="docs-card-link"
                              href={href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {item.hrefLabel ?? t("cta.openSite")}
                            </a>
                          ) : null}
                        </article>
                      );
                    })}
                  </div>
                </section>

                <section id="links" className="docs-section">
                  <h2 className="docs-section-title">
                    {t("docs.sections.links.title")}
                  </h2>
                  <p className="docs-section-body">
                    {t("docs.sections.links.body")}
                  </p>
                  <div className="docs-grid">
                    {linkItems.map((item) => (
                      <article key={item.title} className="docs-card">
                        <div className="docs-card-meta">
                          <p className="docs-card-title">{item.title}</p>
                          <span className="docs-chip">
                            {item.status ?? t("docs.placeholders.linksSoon")}
                          </span>
                        </div>
                        <p className="docs-section-body">{item.body}</p>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        telegram={LINKS.telegram}
        xAllDayLaunch={LINKS.xAllDayLaunch}
        xSpectraView={LINKS.xSpectraView}
        site={LINKS.site}
      />
    </div>
  );
}
