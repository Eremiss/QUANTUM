"use client";

import { useI18n } from "@/i18n/LanguageProvider";

type SiteFooterProps = {
  telegram: string;
  xAllDayLaunch: string;
  xSpectraView: string;
  site: string;
};

export default function SiteFooter({
  telegram,
  xAllDayLaunch,
  xSpectraView,
  site,
}: SiteFooterProps) {
  const { t } = useI18n();
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="container-main py-10 text-sm text-[var(--muted)]">
        <div className="flex flex-col gap-3">
          <span>{t("home.footer.tagline")}</span>
          <a
            className="link-underline"
            href={telegram}
            target="_blank"
            rel="noreferrer"
          >
            {t("home.footer.telegram")}
          </a>
          <div className="flex flex-wrap gap-4">
            <a
              className="link-underline"
              href={xAllDayLaunch}
              target="_blank"
              rel="noreferrer"
            >
              {t("home.footer.xAllDayLaunch")}
            </a>
            <a
              className="link-underline"
              href={xSpectraView}
              target="_blank"
              rel="noreferrer"
            >
              {t("home.footer.xSpectraView")}
            </a>
          </div>
          <a className="link-underline" href={site} target="_blank" rel="noreferrer">
            {t("home.footer.site")}
          </a>
          <span>{t("home.footer.copyright")}</span>
        </div>
      </div>
    </footer>
  );
}
