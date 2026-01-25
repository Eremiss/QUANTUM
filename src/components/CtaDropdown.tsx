"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useI18n } from "@/i18n/LanguageProvider";

type CtaDropdownProps = {
  telegram: string;
  email: string;
  variant?: "header" | "fab";
};

export default function CtaDropdown({
  telegram,
  email,
  variant = "fab",
}: CtaDropdownProps) {
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const isFab = variant === "fab";
  const { t } = useI18n();
  const telegramHandle = telegram.replace(/^https?:\/\/t\.me\//, "@");

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const details = detailsRef.current;
      if (!details?.open) {
        return;
      }

      if (details.contains(event.target as Node)) {
        return;
      }

      details.open = false;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      const details = detailsRef.current;
      if (details?.open) {
        details.open = false;
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <details
      ref={detailsRef}
      className={
        isFab
          ? "cta-fab"
          : "order-2 relative self-end md:order-3 md:self-auto"
      }
    >
      <summary
        className={
          isFab
            ? "cta-fab-button"
            : "btn-primary flex cursor-pointer items-center gap-2 px-4 py-2 text-[11px] uppercase tracking-[0.26em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        }
        aria-label={isFab ? t("cta.contacts") : undefined}
      >
        {isFab ? (
          <>
            <Image
              className="cta-fab-logo"
              src="/q-logo.png"
              alt=""
              width={38}
              height={38}
            />
            <span className="sr-only">{t("cta.contacts")}</span>
          </>
        ) : (
          <>
            {t("cta.write")}
            <svg
              className="cta-caret h-4 w-4 transition-transform"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M6 9l6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        )}
      </summary>
      <div
        className={
          isFab
            ? "cta-panel-wrap absolute bottom-full right-0 mb-3"
            : "cta-panel-wrap absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2"
        }
      >
        <div className="cta-panel w-60 rounded-2xl p-3 shadow-[var(--shadow)]">
          <p className="cta-panel-title">{t("cta.contacts")}</p>
          <a
            className="cta-panel-link"
            href={telegram}
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            title="Telegram"
          >
            <svg
              className="cta-panel-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            <span className="cta-panel-text">
              <span className="cta-panel-label">{t("cta.telegramLabel")}</span>
              <span className="cta-panel-value">{telegramHandle}</span>
            </span>
          </a>
          <a
            className="cta-panel-link"
            href={`mailto:${email}`}
            aria-label="Email"
            title="Email"
          >
            <svg
              className="cta-panel-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
              <path d="m22 8-10 6L2 8" />
            </svg>
            <span className="cta-panel-text">
              <span className="cta-panel-label">{t("cta.emailLabel")}</span>
              <span className="cta-panel-value">{email}</span>
            </span>
          </a>
        </div>
      </div>
    </details>
  );
}
