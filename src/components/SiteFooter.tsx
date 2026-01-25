"use client";

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
    <footer className="border-t border-[var(--line)]">
      <div className="container-main py-10 text-sm text-[var(--muted)]">
        <div className="flex flex-col gap-3">
          <a
            className="link-underline"
            href={telegram}
            target="_blank"
            rel="noreferrer"
          >
            {t("home.footer.telegram")}
          </a>
          <a className="link-underline" href={`mailto:${email}`}>
            {t("home.footer.email")}
          </a>
          <a className="link-underline" href={x} target="_blank" rel="noreferrer">
            {t("home.footer.x")}
          </a>
          <a
            className="link-underline"
            href={site}
            target="_blank"
            rel="noreferrer"
          >
            {t("home.footer.site")}
          </a>
        </div>
      </div>
    </footer>
  );
}
