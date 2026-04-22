import type { Language } from "@/i18n/strings";

export const SITE_LINKS = {
  telegram: "https://t.me/quantumhft1",
  xQuantum: "https://x.com/quantumhtf1",
  xAllDayLaunch: "https://x.com/AllDayLaunch_io",
  xSpectraView: "https://x.com/spectraview_io",
  site: "https://quantum-hft.com/",
  alldaySite: "https://alldaylaunch.io/login",
  spectraSite: "https://www.spectraview.io/",
  spectraTelegram: "https://t.me/spectraview_bot?start=BIBYYPRIU3BV",
  email: "quantumhft1@gmail.com",
};

export const getPrimaryNavItems = (lang: Language) => [
  {
    label: lang === "en" ? "Capabilities" : "Возможности",
    href: "/#capabilities",
  },
  { label: "Work", href: "/work" },
  { label: lang === "en" ? "Products" : "Продукты", href: "/products" },
  { label: "Insights", href: "/insights" },
  { label: lang === "en" ? "Docs" : "Документация", href: "/docs" },
  { label: lang === "en" ? "Blog" : "Блог", href: "/blog" },
];

export type SectionPageKey = "work" | "products" | "insights";

export type SectionPageData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  proof: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  metrics: Array<{ label: string; value: string }>;
  featureEyebrow: string;
  featureTitle: string;
  featureCopy: string;
  items: Array<{
    label: string;
    title: string;
    body: string;
    meta: string;
  }>;
  finalTitle: string;
  finalCopy: string;
};

export const sectionPages: Record<SectionPageKey, Record<Language, SectionPageData>> = {
  work: {
    ru: {
      eyebrow: "Selected Work",
      title: "Системы, которые уже ведут себя как продукт.",
      subtitle:
        "Кейсы Q показывают не презентационные концепты, а production-направления: launch-инфраструктуру, market intelligence и execution-сценарии.",
      proof: "Launch speed · Signal clarity · Production reliability",
      primaryCta: "Обсудить архитектуру",
      secondaryCta: "Смотреть продукты",
      secondaryHref: "/products",
      metrics: [
        { label: "Focus", value: "Web3 / AI" },
        { label: "Stack", value: "Solana / Rust" },
        { label: "Mode", value: "Product-grade" },
      ],
      featureEyebrow: "Operating profile",
      featureTitle: "Не витрина, а рабочая система решений.",
      featureCopy:
        "Work-страница собирает направления, где команда превращает инфраструктуру в понятный продуктовый слой: скорость запуска, читаемый UX и контроль над нагрузкой.",
      items: [
        {
          label: "01",
          title: "AllDayLaunch",
          body:
            "High-frequency launch-платформа для creators и трейдеров на Solana: быстрое развертывание, читаемые состояния и надежный execution-cycle.",
          meta: "Launch stack",
        },
        {
          label: "02",
          title: "SpectraView",
          body:
            "Market intelligence слой для prediction markets: сигналы, наблюдаемость и compact UX для решений в реальном времени.",
          meta: "Market intelligence",
        },
        {
          label: "03",
          title: "Execution systems",
          body:
            "Инфраструктурные сценарии вокруг latency, order flow, AI-интерфейсов и production reliability под высокой нагрузкой.",
          meta: "Infrastructure",
        },
      ],
      finalTitle: "Есть задача, где скорость влияет на продукт?",
      finalCopy:
        "Разберем архитектуру, критические пути и то, где система должна оставаться читаемой под давлением.",
    },
    en: {
      eyebrow: "Selected Work",
      title: "Systems that already behave like products.",
      subtitle:
        "Q work is not presentation-only concepting. It is production direction: launch infrastructure, market intelligence, and execution scenarios.",
      proof: "Launch speed · Signal clarity · Production reliability",
      primaryCta: "Discuss architecture",
      secondaryCta: "View products",
      secondaryHref: "/products",
      metrics: [
        { label: "Focus", value: "Web3 / AI" },
        { label: "Stack", value: "Solana / Rust" },
        { label: "Mode", value: "Product-grade" },
      ],
      featureEyebrow: "Operating profile",
      featureTitle: "Not a showcase. A working system of decisions.",
      featureCopy:
        "The work page gathers areas where the team turns infrastructure into a clear product layer: launch speed, readable UX, and control under load.",
      items: [
        {
          label: "01",
          title: "AllDayLaunch",
          body:
            "A high-frequency launch platform for creators and traders on Solana: fast deployment, readable states, and reliable execution cycles.",
          meta: "Launch stack",
        },
        {
          label: "02",
          title: "SpectraView",
          body:
            "A market intelligence layer for prediction markets: signals, observability, and compact UX for real-time decisions.",
          meta: "Market intelligence",
        },
        {
          label: "03",
          title: "Execution systems",
          body:
            "Infrastructure scenarios around latency, order flow, AI interfaces, and production reliability under high load.",
          meta: "Infrastructure",
        },
      ],
      finalTitle: "Have a system where speed affects the product?",
      finalCopy:
        "We can review architecture, critical paths, and where the system must stay readable under pressure.",
    },
  },
  products: {
    ru: {
      eyebrow: "Products",
      title: "Продуктовая линейка вокруг скорости и рыночных сигналов.",
      subtitle:
        "Два направления Q соединяют launch-инфраструктуру, prediction market intelligence и компактные AI-интерфейсы.",
      proof: "Solana · Prediction markets · AI interfaces",
      primaryCta: "Обсудить продукт",
      secondaryCta: "Открыть work",
      secondaryHref: "/work",
      metrics: [
        { label: "ADL", value: "Launch stack" },
        { label: "Spectra", value: "Signals" },
        { label: "Core", value: "Infra" },
      ],
      featureEyebrow: "Product system",
      featureTitle: "Каждый продукт строится вокруг скорости принятия решений.",
      featureCopy:
        "Визуальный слой должен помогать операторам видеть состояние системы, а не украшать сложность. Поэтому продукты Q проектируются как интерфейсы управления.",
      items: [
        {
          label: "ADL",
          title: "AllDayLaunch",
          body:
            "Launch-инструмент для Solana-экосистемы: token workflows, creator tooling, трейдерские сценарии и ясная операционная поверхность.",
          meta: "Solana launch",
        },
        {
          label: "SPV",
          title: "SpectraView",
          body:
            "Интерфейс для наблюдения за рынком: prediction markets, сигналы, Telegram-дистрибуция и быстрый контекст для решений.",
          meta: "Prediction markets",
        },
        {
          label: "Q",
          title: "Infrastructure layer",
          body:
            "Общий инженерный слой: low-latency flows, monitoring, AI-assisted UX и reliability-паттерны для будущих продуктов.",
          meta: "Core systems",
        },
      ],
      finalTitle: "Нужно упаковать инфраструктуру в продукт?",
      finalCopy:
        "Поможем собрать UX, архитектуру и execution logic так, чтобы сложная система стала управляемой.",
    },
    en: {
      eyebrow: "Products",
      title: "A product line around speed and market signals.",
      subtitle:
        "Two Q directions connect launch infrastructure, prediction market intelligence, and compact AI interfaces.",
      proof: "Solana · Prediction markets · AI interfaces",
      primaryCta: "Discuss product",
      secondaryCta: "Open work",
      secondaryHref: "/work",
      metrics: [
        { label: "ADL", value: "Launch stack" },
        { label: "Spectra", value: "Signals" },
        { label: "Core", value: "Infra" },
      ],
      featureEyebrow: "Product system",
      featureTitle: "Each product is built around decision speed.",
      featureCopy:
        "The visual layer should help operators read system state, not decorate complexity. Q products are designed as control interfaces.",
      items: [
        {
          label: "ADL",
          title: "AllDayLaunch",
          body:
            "A launch tool for the Solana ecosystem: token workflows, creator tooling, trader scenarios, and a clear operating surface.",
          meta: "Solana launch",
        },
        {
          label: "SPV",
          title: "SpectraView",
          body:
            "An interface for market observation: prediction markets, signals, Telegram distribution, and fast context for decisions.",
          meta: "Prediction markets",
        },
        {
          label: "Q",
          title: "Infrastructure layer",
          body:
            "The shared engineering layer: low-latency flows, monitoring, AI-assisted UX, and reliability patterns for future products.",
          meta: "Core systems",
        },
      ],
      finalTitle: "Need to turn infrastructure into product?",
      finalCopy:
        "We can align UX, architecture, and execution logic so a complex system becomes controllable.",
    },
  },
  insights: {
    ru: {
      eyebrow: "Insights",
      title: "Исследовательский слой для рынков, UX и инженерии.",
      subtitle:
        "Insights показывает мышление команды: как мы смотрим на Web3-рынки, скорость, интерфейсы и инфраструктурные решения.",
      proof: "Market notes · Engineering logic · Product signals",
      primaryCta: "Читать блог",
      secondaryCta: "Открыть docs",
      secondaryHref: "/docs",
      metrics: [
        { label: "Topics", value: "Markets" },
        { label: "Format", value: "Field notes" },
        { label: "Depth", value: "Product logic" },
      ],
      featureEyebrow: "Research surface",
      featureTitle: "Блог и insights должны работать как доказательство глубины.",
      featureCopy:
        "Этот раздел направляет в материалы о рынках, инфраструктуре и продуктовых решениях, чтобы сайт не только выглядел премиально, но и демонстрировал экспертизу.",
      items: [
        {
          label: "01",
          title: "Market behavior",
          body:
            "Наблюдения за prediction markets, mem-рынками, ликвидностью и тем, как пользователи принимают решения в real-time среде.",
          meta: "Markets",
        },
        {
          label: "02",
          title: "Engineering notes",
          body:
            "Разборы latency, архитектуры, onchain execution, reliability и того, почему скорость без читаемости создает риск.",
          meta: "Engineering",
        },
        {
          label: "03",
          title: "Product signals",
          body:
            "UX-паттерны, интерфейсы управления и продуктовые решения для сложных систем, где важно доверие к данным.",
          meta: "Product",
        },
      ],
      finalTitle: "Добавим больше исследовательской глубины?",
      finalCopy:
        "Следующий шаг — усилить блог как proof-layer бренда: кейсы, графики, заметки и инженерные разборы.",
    },
    en: {
      eyebrow: "Insights",
      title: "A research layer for markets, UX, and engineering.",
      subtitle:
        "Insights shows how the team thinks about Web3 markets, speed, interfaces, and infrastructure decisions.",
      proof: "Market notes · Engineering logic · Product signals",
      primaryCta: "Read blog",
      secondaryCta: "Open docs",
      secondaryHref: "/docs",
      metrics: [
        { label: "Topics", value: "Markets" },
        { label: "Format", value: "Field notes" },
        { label: "Depth", value: "Product logic" },
      ],
      featureEyebrow: "Research surface",
      featureTitle: "Blog and insights should work as proof of depth.",
      featureCopy:
        "This section points to material on markets, infrastructure, and product decisions, so the site demonstrates expertise as well as atmosphere.",
      items: [
        {
          label: "01",
          title: "Market behavior",
          body:
            "Observations on prediction markets, meme markets, liquidity, and how users make decisions in real-time environments.",
          meta: "Markets",
        },
        {
          label: "02",
          title: "Engineering notes",
          body:
            "Breakdowns on latency, architecture, onchain execution, reliability, and why speed without readability creates risk.",
          meta: "Engineering",
        },
        {
          label: "03",
          title: "Product signals",
          body:
            "UX patterns, control interfaces, and product decisions for complex systems where data trust matters.",
          meta: "Product",
        },
      ],
      finalTitle: "Should we add more research depth?",
      finalCopy:
        "The next step is to strengthen the blog as a brand proof-layer: cases, charts, notes, and engineering breakdowns.",
    },
  },
};
