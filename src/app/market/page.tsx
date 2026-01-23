"use client";

import BlogIndex from "@/components/BlogIndex";
import CtaDropdown from "@/components/CtaDropdown";
import FadeIn from "@/components/FadeIn";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useI18n } from "@/i18n/LanguageProvider";

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

export default function MarketPage() {
  const { t } = useI18n();
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
        xAllDayLaunch={LINKS.xAllDayLaunch}
        xSpectraView={LINKS.xSpectraView}
        site={LINKS.site}
      />
    </div>
  );
}
