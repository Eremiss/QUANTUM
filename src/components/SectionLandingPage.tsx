"use client";

import Link from "next/link";
import CtaDropdown from "@/components/CtaDropdown";
import FadeIn from "@/components/FadeIn";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  getPrimaryNavItems,
  sectionPages,
  SITE_LINKS,
  type SectionPageKey,
} from "@/content/site";
import { useI18n } from "@/i18n/LanguageProvider";

type SectionLandingPageProps = {
  pageKey: SectionPageKey;
};

export default function SectionLandingPage({ pageKey }: SectionLandingPageProps) {
  const { lang } = useI18n();
  const page = sectionPages[pageKey][lang];
  const navItems = getPrimaryNavItems(lang);

  return (
    <div className={`subpage subpage--${pageKey}`}>
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
        <section className="subpage-hero">
          <div className="subpage-atmosphere" aria-hidden="true" />
          <div className="subpage-shell">
            <FadeIn className="subpage-hero-copy" variant="soft-scale">
              <p className="eyebrow">{page.eyebrow}</p>
              <h1 className="subpage-title">{page.title}</h1>
              <p className="subpage-subtitle">{page.subtitle}</p>
              <p className="subpage-proof">{page.proof}</p>
              <div className="subpage-actions">
                <a
                  className="btn-light"
                  href={SITE_LINKS.telegram}
                  target="_blank"
                  rel="noreferrer"
                >
                  {page.primaryCta}
                </a>
                <Link className="btn-quiet" href={page.secondaryHref}>
                  {page.secondaryCta}
                </Link>
              </div>
            </FadeIn>

            <FadeIn className="subpage-orbit-panel" delay={0.08} variant="slide-left">
              <div className="subpage-orbit-core" aria-hidden="true" />
              <div className="subpage-metric-grid">
                {page.metrics.map((metric) => (
                  <div key={metric.label} className="subpage-metric">
                    <span>{metric.label}</span>
                    <p>{metric.value}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="subpage-section">
          <div className="subpage-shell">
            <div className="subpage-feature-grid">
              <FadeIn variant="slide-right">
                <p className="eyebrow">{page.featureEyebrow}</p>
                <h2 className="subpage-section-title">{page.featureTitle}</h2>
                <p className="subpage-section-copy">{page.featureCopy}</p>
              </FadeIn>

              <div className="subpage-index-list">
                {page.items.map((item, index) => (
                  <FadeIn
                    key={item.title}
                    className="subpage-index-item"
                    delay={0.05 * index}
                    variant={index % 2 === 0 ? "slide-left" : "soft-scale"}
                  >
                    <span className="subpage-index-label">{item.label}</span>
                    <div>
                      <p className="subpage-index-meta">{item.meta}</p>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="subpage-final">
          <div className="subpage-shell">
            <FadeIn className="subpage-final-panel" variant="soft-scale">
              <div>
                <p className="eyebrow">Final CTA</p>
                <h2>{page.finalTitle}</h2>
                <p>{page.finalCopy}</p>
              </div>
              <a
                className="btn-light"
                href={SITE_LINKS.telegram}
                target="_blank"
                rel="noreferrer"
              >
                {page.primaryCta}
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
