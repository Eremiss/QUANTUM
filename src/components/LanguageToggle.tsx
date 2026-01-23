"use client";

import { useI18n } from "@/i18n/LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useI18n();
  const nextLang = lang === "ru" ? "en" : "ru";

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={() => setLang(nextLang)}
      aria-label={`Switch language to ${nextLang.toUpperCase()}`}
    >
      <span className={lang === "ru" ? "is-active" : undefined}>RU</span>
      <span className="lang-separator">/</span>
      <span className={lang === "en" ? "is-active" : undefined}>EN</span>
    </button>
  );
}
