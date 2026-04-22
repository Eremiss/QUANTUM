"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { strings, type Language } from "@/i18n/strings";

type I18nContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  tArray: <T>(key: string) => T[];
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "q-lang";

const getByPath = (obj: Record<string, unknown>, path: string) =>
  path
    .split(".")
    .reduce<unknown>(
      (acc, key) => (acc ? (acc as Record<string, unknown>)[key] : undefined),
      obj,
    );

const resolveInitialLang = (): Language => {
  if (typeof window === "undefined") {
    return "ru";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "ru" || stored === "en") {
    return stored;
  }

  const browserLang = window.navigator.language.toLowerCase();
  return browserLang.startsWith("ru") ? "ru" : "en";
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(resolveInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.cookie = `${STORAGE_KEY}=${lang}; path=/; max-age=31536000; samesite=lax`;
  }, [lang]);

  const setLang = useCallback((nextLang: Language) => {
    setLangState(nextLang);
  }, []);

  const t = useCallback(
    (key: string) => {
      const value = getByPath(strings[lang], key);
      return typeof value === "string" ? value : key;
    },
    [lang],
  );

  const tArray = useCallback(
    <T,>(key: string) => {
      const value = getByPath(strings[lang], key);
      return Array.isArray(value) ? (value as T[]) : [];
    },
    [lang],
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang,
      t,
      tArray,
    }),
    [lang, setLang, t, tArray],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
};
