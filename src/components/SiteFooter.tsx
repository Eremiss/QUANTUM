"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/LanguageProvider";

type SiteFooterProps = {
  telegram: string;
  email: string;
  x: string;
  site: string;
};

export default function SiteFooter({
  telegram,
  email,
  x,
  site,
}: SiteFooterProps) {
  const { t } = useI18n();

  return (
    <footer className="site-footer-shell">
      <div className="container-main">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <p className="site-footer-kicker">Quantum</p>
            <p className="site-footer-title">
              {t("home.footer.description")}
            </p>
          </div>

          <div className="site-footer-column">
            <p className="site-footer-label">{t("home.footer.navigate")}</p>
            <a className="site-footer-link" href="#top">
              {t("home.footer.home")}
            </a>
            <Link className="site-footer-link" href="/docs">
              {t("nav.docs")}
            </Link>
            <Link className="site-footer-link" href="/blog">
              {t("nav.blog")}
            </Link>
          </div>

          <div className="site-footer-column">
            <p className="site-footer-label">{t("home.footer.connect")}</p>
            <a
              className="site-footer-link"
              href={telegram}
              target="_blank"
              rel="noreferrer"
            >
              {t("home.footer.telegram")}
            </a>
            <a className="site-footer-link" href={`mailto:${email}`}>
              {t("home.footer.email")}
            </a>
            <a
              className="site-footer-link"
              href={x}
              target="_blank"
              rel="noreferrer"
            >
              {t("home.footer.x")}
            </a>
            <a
              className="site-footer-link"
              href={site}
              target="_blank"
              rel="noreferrer"
            >
              {t("home.footer.site")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
