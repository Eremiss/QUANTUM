"use client";

import BlogIndex from "@/components/BlogIndex";
import CtaDropdown from "@/components/CtaDropdown";
import FadeIn from "@/components/FadeIn";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getPrimaryNavItems, SITE_LINKS } from "@/content/site";
import { useI18n } from "@/i18n/LanguageProvider";

const LINKS = SITE_LINKS;

export default function MarketPage() {
  const { t, lang } = useI18n();
  const navItems = getPrimaryNavItems(lang);

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
            <div className="page-hero">
              <FadeIn>
                <p className="eyebrow">Market</p>
                <h1 className="section-title mt-6">{t("market.title")}</h1>
                <p className="section-subtitle mt-6 max-w-2xl">
                  {t("market.subtitle")}
                </p>
              </FadeIn>
            </div>
            <BlogIndex initialCategory="market" />
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
