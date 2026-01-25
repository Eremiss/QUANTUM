"use client";

import BlogIndex from "@/components/BlogIndex";
import CtaDropdown from "@/components/CtaDropdown";
import FadeIn from "@/components/FadeIn";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { authors } from "@/content/posts";
import { useI18n } from "@/i18n/LanguageProvider";

const LINKS = {
  telegram: "https://t.me/spectraview_bot",
  xAllDayLaunch: "https://x.com/AllDayLaunch_io",
  xSpectraView: "https://x.com/spectraview_io",
  site: "https://alldaylaunch.io/",
  email: "quantumhft1@gmail.com",
};

const NAV_ITEMS = [
  { label: "Главная", href: "/" },
  { label: "Блог", href: "/blog" },
  { label: "Market", href: "/market" },
  { label: "Tech", href: "/tech" },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function BlogPage() {
  const { t, lang } = useI18n();
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
            <div className="page-hero page-hero--blog">
              <FadeIn>
                <p className="eyebrow">{t("blog.eyebrow")}</p>
                <h1 className="section-title mt-6">{t("blog.title")}</h1>
                <p className="section-subtitle mt-6 max-w-2xl">
                  {t("blog.subtitle")}
                </p>
              </FadeIn>
            </div>
            <BlogIndex />
          </div>
        </section>

        <section className="section">
          <div className="container-main">
            <FadeIn>
              <p className="eyebrow">{t("blog.authors.eyebrow")}</p>
              <h2 className="section-title mt-6">
                {t("blog.authors.title")}
              </h2>
              <p className="section-subtitle mt-6 max-w-2xl">
                {t("blog.authors.subtitle")}
              </p>
            </FadeIn>
            <div className="author-grid mt-10">
              {authors.map((author) => (
                <FadeIn key={author.id} className="author-card" delay={0.05}>
                  <div className="author-header">
                    <span className="author-avatar">
                      {getInitials(author.name)}
                    </span>
                    <div>
                      <p className="text-lg font-semibold text-[var(--fg)]">
                        {lang === "en" ? author.nameEn : author.name}
                      </p>
                      <p className="text-sm text-[var(--muted)]">
                        {lang === "en" ? author.roleEn : author.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-[var(--muted)]">
                    {author.id === "beleken"
                      ? t("blog.authors.focus.beleken")
                      : t("blog.authors.focus.israelyan")}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                      {t("blog.authors.xSoon")}
                    </span>
                    <button
                      className="btn-secondary author-subscribe"
                      type="button"
                      disabled
                    >
                      {t("cta.subscribe")}
                    </button>
                  </div>
                </FadeIn>
              ))}
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
