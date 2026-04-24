import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { strings, type Language } from "@/i18n/strings";

const INITIAL_LANG: Language = "ru";

export function generateMetadata(): Metadata {
  const lang = INITIAL_LANG;
  return {
    title: strings[lang].meta.title,
    description: strings[lang].meta.description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={INITIAL_LANG}>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)] antialiased">
        <LanguageProvider initialLang={INITIAL_LANG}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
