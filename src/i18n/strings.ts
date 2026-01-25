export type Language = "ru" | "en";

export const strings = {
  ru: {
    nav: {
      home: "Главная",
      blog: "Блог",
      market: "Market",
      tech: "Tech",
      docs: "Доксы",
      capabilities: "Возможности",
      products: "Продукты",
      process: "Процесс",
    },
    cta: {
      write: "Написать",
      contacts: "Контакты",
      discussArchitecture: "Обсудить архитектуру",
      startConversation: "Начать разговор",
      openSite: "Открыть сайт",
      openTelegram: "Открыть Telegram",
      openX: "Открыть X",
      telegramLabel: "Telegram",
      emailLabel: "Email",
      readBlog: "Читать блог",
      backHome: "На главную",
      subscribe: "Подписаться",
    },
    blog: {
      eyebrow: "Blog",
      title: "Инсайты Q",
      subtitle:
        "Пишем о скорости, рынках и технологиях Web3. Только практичные выводы, которые можно использовать в продукте и инфраструктуре.",
      filters: {
        all: "Все",
        market: "Market",
        tech: "Tech",
        found: "Найдено",
        searchPlaceholder: "Поиск по статьям",
        nothingFound: "Ничего не найдено. Попробуйте изменить запрос или фильтр.",
      },
      keyTakeaways: "Ключевые тезисы",
      pin: "Закрепить",
      teamFallback: "Команда Q",
      authors: {
        eyebrow: "Co-founders",
        title: "Авторы и со-фаундеры",
        subtitle:
          "Пишем сами — изнутри продукта, инфраструктуры и трейдинга. Никакой редакции отдельно: только практический опыт.",
        focus: {
          beleken:
            "Фокус на архитектуре, производительности и low-latency системах.",
          israelyan:
            "Фокус на продуктовой стратегии, рынках и growth-моделях.",
        },
        xSoon: "X: скоро",
      },
    },
    docs: {
      title: "Документация в работе",
      subtitle:
        "Подготавливаем гайды, архитектурные заметки и публичные спецификации. Скоро откроем доступ к материалам.",
      navTitle: "На этой странице",
      searchPlaceholder: "Поиск по разделам",
      placeholders: {
        metrics: "Метрики будут добавлены позже.",
        linksSoon: "Скоро",
      },
      metrics: {
        title: "Скорость и надежность",
        items: [
          { label: "p95 latency", value: "Скоро" },
          { label: "Throughput", value: "Скоро" },
          { label: "Uptime", value: "Скоро" },
        ],
      },
      sections: {
        overview: {
          title: "Обзор",
          body:
            "Мы строим инфраструктуру и продукты в Web3 и AI с упором на скорость, надежность и масштабирование. Здесь описываем ключевые инженерные принципы и подходы.",
        },
        architecture: {
          title: "Архитектура и стек",
          body:
            "Архитектура проектируется вокруг минимальной латентности и устойчивости под нагрузкой. Используем практики, которые позволяют быстро итератировать и безопасно масштабировать.",
          bullets: [
            "Модульная архитектура сервисов",
            "Низкие задержки на критических путях",
            "Наблюдаемость и алертинг как стандарт",
            "Автоматизация релизов и инфраструктуры",
          ],
        },
        performance: {
          title: "Производительность и latency",
          body:
            "Фокус на предсказуемой латентности и скорости обработки в реальном продакшне. Метрики добавим после финальных замеров.",
          bullets: [
            "Оптимизация пути транзакций",
            "Тюнинг сетевых и вычислительных bottleneck",
            "Проверка под пиковыми нагрузками",
          ],
        },
        reliability: {
          title: "Надежность и безопасность",
          body:
            "Системы проектируются с учетом отказоустойчивости, изоляции рисков и безопасного доступа.",
          bullets: [
            "Мониторинг ключевых сервисов 24/7",
            "Планирование отказов и резервирование",
            "Контроль доступа и аудит событий",
          ],
        },
        process: {
          title: "Процессы",
          body:
            "Работаем как инженерные партнеры: фиксируем цель, строим архитектуру, тестируем под нагрузкой и доводим до стабильного продакшна.",
          bullets: [
            "Прозрачный план и контроль рисков",
            "Короткие итерации и быстрые проверки",
            "Документирование решений",
          ],
        },
        cases: {
          title: "Кейсы и продукты",
          body:
            "Технические решения живут в наших продуктах. Ниже — основные направления.",
          items: [
            {
              title: "AllDayLaunch",
              body:
                "Инфраструктура для запуска и масштабирования Web3-проектов с фокусом на скорость и стабильность.",
              hrefLabel: "Открыть сайт",
            },
            {
              title: "SpectraView",
              body:
                "Платформа мониторинга и аналитики, где важны real-time сигналы и высокая отказоустойчивость.",
              hrefLabel: "Открыть X",
            },
          ],
        },
        links: {
          title: "Гайды и материалы",
          body:
            "Публичные гайды и технические заметки появятся здесь. Пока готовим первую пачку.",
          items: [
            {
              title: "Low-latency playbook",
              body: "Набор практик по снижению задержек.",
              status: "Скоро",
            },
            {
              title: "Архитектура высоких нагрузок",
              body: "Шаблоны и решения для роста под нагрузкой.",
              status: "Скоро",
            },
            {
              title: "RPC & data pipelines",
              body: "Гайд по обработке потоковых данных.",
              status: "Скоро",
            },
          ],
        },
      },
    },
    tech: {
      title: "Архитектура и скорость",
      subtitle:
        "Разбираем low-latency инфраструктуру, масштабируемые решения и практики продакшн-уровня.",
    },
    market: {
      title: "Рынки и поведение капитала",
      subtitle:
        "Смотрим на динамику ликвидности, prediction-маркеты и новые стратегии трейдинга.",
    },
    home: {
      hero: {
        eyebrow: "Q · engineering lab",
        title:
          "Проектируем и запускаем высоконагруженные Web3 и AI-системы",
        subtitle:
          "Мы — инженерная и продуктовая команда, работающая как co-founder: low-latency инфраструктура и продукты, где важны скорость, надежность и масштабирование.",
        tagline: "Архитектура. Производительность. Результат.",
      },
      notOutsourcing: {
        eyebrow: "Not outsourcing",
        title: "Мы не аутсорс. Мы — инженерные партнеры",
        subtitle:
          "Если задачу можно решить шаблоном — вероятно, это не наш профиль.",
        tags: ["Скорость", "Архитектура", "Масштаб"],
        points: [
          "Работаем по результату, а не по часам",
          "Думаем как владельцы продукта",
          "Любим сложность и ответственность",
          "Находим рычаги там, где их не видно",
          "Работаем по строгим дедлайнам",
        ],
      },
      capabilities: {
        eyebrow: "Capabilities",
        title: "Что мы проектируем и запускаем",
        subtitle:
          "Ставим архитектуру так, чтобы выдерживать пики, волатильность и реальный продакшен.",
        list: [
          "High-load архитектура",
          "Low-latency trading инфраструктура",
          "Web3 core (Solana / EVM)",
          "AI / агенты / инфраструктура",
          "Рынки предсказаний и data-driven продукты",
        ],
      },
      segments: {
        eyebrow: "Who it is for",
        title: "Для кого мы работаем",
        items: [
          { title: "MVP стартапы", description: "Быстро в прод без костылей" },
          { title: "Трейдинговые команды", description: "Миллисекунды = PnL" },
          {
            title: "Web3-фонды и команды",
            description: "Инфраструктура / аналитика / execution",
          },
          { title: "Enterprise", description: "Надежность / контроль / масштаб" },
        ],
      },
      team: {
        eyebrow: "Team",
        title: "Команда",
        copy:
          "Мы небольшая команда, которая лично ведет каждый проект от стратегии до релиза. Фокусируемся на архитектуре, скорости и надежности, а не на красивых обещаниях. Работаем как партнеры: погружаемся в продукт, берем ответственность и доводим до результата. Ни один ключевой этап не уходит на сторону.",
        members: [
          {
            name: "Avrelios",
            role: "Инженерный лидер",
            title: "Co-Founder / Engineering",
            description:
              "Отвечает за всю техническую часть: архитектуру проектов, инженерные решения, разработку и инфраструктуру. Принимает ключевые технические решения и отвечает за стабильность и масштабируемость систем.",
          },
          {
            name: "Erem Is",
            role: "Продукт и стратегия",
            title: "Co-Founder / Product & Strategy",
            description:
              "Отвечает за стратегию, продукт и бизнес-направление. Занимается формированием продукта, коммуникациями, бизнес-процессами и развитием компании.",
          },
        ],
      },
      products: {
        eyebrow: "Products",
        title: "Наши продукты",
        allday: {
          description: "High-frequency платформа для creators и трейдеров на Solana",
          bullets: [
            "Live events + Twitter лента",
            "Token triggers: threshold / time trigger",
            "Продажа созданных токенов < 400ms (slot-in-slot)",
            "Симуляция атаки снайпер ботов на созданный токен",
          ],
        },
        spectra: {
          description: "Trading bot для prediction markets",
          bullets: [
            "Лимитные ордера, стопы, риск-контроль",
            "Один из самых быстрых copy-trading движков",
            "Wallet scanner + AI-анализ действий кошельков",
            "Работает в любом GEO, широкий спектр рынков",
          ],
        },
      },
      process: {
        eyebrow: "Process",
        title: "Как мы работаем",
        subtitle: "Чистый, предсказуемый и проверенный цикл.",
        steps: [
          "Погружаемся в цель и ограничения",
          "Фиксируем архитектуру и план",
          "Собираем рабочее ядро",
          "Проверяем под нагрузкой",
          "Доводим до продакшна и масштаба",
        ],
      },
      finalCta: {
        eyebrow: "Final CTA",
        title: "Начать разговор",
        subtitle:
          "Если у вас есть продукт или инфраструктурная задача, где важны скорость, масштаб и качество решений — давайте обсудим архитектуру.",
      },
      footer: {
        tagline: "Q — engineering lab for Web3 & AI",
        telegram: "Telegram: @spectraview_bot",
        xAllDayLaunch: "X: @AllDayLaunch_io",
        xSpectraView: "X: @spectraview_io",
        site: "Site: alldaylaunch.io",
        copyright: "© Q",
      },
    },
    meta: {
      title: "Q — инженерная лаборатория Web3 & AI",
      description:
        "Q — инженерная и продуктовая команда, создающая высоконагруженные Web3 и AI-системы с фокусом на скорость, надежность и масштабирование.",
    },
  },
  en: {
    nav: {
      home: "Home",
      blog: "Blog",
      market: "Market",
      tech: "Tech",
      docs: "Docs",
      capabilities: "Capabilities",
      products: "Products",
      process: "Process",
    },
    cta: {
      write: "Write",
      contacts: "Contacts",
      discussArchitecture: "Discuss architecture",
      startConversation: "Start a conversation",
      openSite: "Open site",
      openTelegram: "Open Telegram",
      openX: "Open X",
      telegramLabel: "Telegram",
      emailLabel: "Email",
      readBlog: "Read blog",
      backHome: "Back home",
      subscribe: "Subscribe",
    },
    blog: {
      eyebrow: "Blog",
      title: "Q Insights",
      subtitle:
        "We write about speed, markets, and Web3 technology. Only practical takeaways you can use in products and infrastructure.",
      filters: {
        all: "All",
        market: "Market",
        tech: "Tech",
        found: "Found",
        searchPlaceholder: "Search articles",
        nothingFound: "Nothing found. Try changing the query or filter.",
      },
      keyTakeaways: "Key takeaways",
      pin: "Pin",
      teamFallback: "Q Team",
      authors: {
        eyebrow: "Co-founders",
        title: "Authors & Co-founders",
        subtitle:
          "We write ourselves — from inside the product, infrastructure, and trading. No separate editorial team: only hands-on experience.",
        focus: {
          beleken: "Focus on architecture, performance, and low-latency systems.",
          israelyan: "Focus on product strategy, markets, and growth models.",
        },
        xSoon: "X: soon",
      },
    },
    docs: {
      title: "Documentation in progress",
      subtitle:
        "We are preparing guides, architecture notes, and public specs. Access will open soon.",
      navTitle: "On this page",
      searchPlaceholder: "Search sections",
      placeholders: {
        metrics: "Metrics will be added later.",
        linksSoon: "Soon",
      },
      metrics: {
        title: "Performance signals",
        items: [
          { label: "p95 latency", value: "Soon" },
          { label: "Throughput", value: "Soon" },
          { label: "Uptime", value: "Soon" },
        ],
      },
      sections: {
        overview: {
          title: "Overview",
          body:
            "We build Web3 and AI infrastructure and products focused on speed, reliability, and scale. Here we outline the key engineering principles and approaches.",
        },
        architecture: {
          title: "Architecture & stack",
          body:
            "Architecture is designed around low latency and resilience under load. We use practices that enable fast iteration and safe scaling.",
          bullets: [
            "Modular service architecture",
            "Low latency on critical paths",
            "Observability and alerting by default",
            "Automated releases and infrastructure",
          ],
        },
        performance: {
          title: "Performance & latency",
          body:
            "We focus on predictable latency and real production throughput. Metrics will be added after final measurements.",
          bullets: [
            "Transaction path optimization",
            "Tuning network and compute bottlenecks",
            "Load testing under peak conditions",
          ],
        },
        reliability: {
          title: "Reliability & security",
          body:
            "Systems are designed for fault tolerance, risk isolation, and secure access.",
          bullets: [
            "24/7 monitoring of critical services",
            "Failure planning and redundancy",
            "Access control and audit trails",
          ],
        },
        process: {
          title: "Process",
          body:
            "We work as engineering partners: define the goal, design architecture, test under load, and ship stable production systems.",
          bullets: [
            "Transparent plan and risk control",
            "Short iterations and fast validation",
            "Decision documentation",
          ],
        },
        cases: {
          title: "Cases & products",
          body:
            "Our technical solutions live in our products. Below are the main directions.",
          items: [
            {
              title: "AllDayLaunch",
              body:
                "Infrastructure for launching and scaling Web3 products with a focus on speed and stability.",
              hrefLabel: "Open site",
            },
            {
              title: "SpectraView",
              body:
                "Monitoring and analytics platform where real-time signals and reliability matter.",
              hrefLabel: "Open X",
            },
          ],
        },
        links: {
          title: "Guides & materials",
          body:
            "Public guides and technical notes will appear here. We are preparing the first batch.",
          items: [
            {
              title: "Low-latency playbook",
              body: "Practical patterns for reducing latency.",
              status: "Soon",
            },
            {
              title: "High-load architecture",
              body: "Templates and tactics for scaling under load.",
              status: "Soon",
            },
            {
              title: "RPC & data pipelines",
              body: "Guide to streaming data processing.",
              status: "Soon",
            },
          ],
        },
      },
    },
    tech: {
      title: "Architecture and speed",
      subtitle:
        "We break down low-latency infrastructure, scalable solutions, and production-grade practices.",
    },
    market: {
      title: "Markets and capital behavior",
      subtitle:
        "We look at liquidity dynamics, prediction markets, and new trading strategies.",
    },
    home: {
      hero: {
        eyebrow: "Q · engineering lab",
        title: "We design and launch high-load Web3 and AI systems",
        subtitle:
          "We are an engineering and product team working as a co-founder: low-latency infrastructure and products where speed, reliability, and scale matter.",
        tagline: "Architecture. Performance. Outcome.",
      },
      notOutsourcing: {
        eyebrow: "Not outsourcing",
        title: "We are not outsourcing. We are engineering partners",
        subtitle:
          "If the task can be solved with a template, it is probably not our profile.",
        tags: ["Speed", "Architecture", "Scale"],
        points: [
          "We work for outcomes, not hours",
          "We think like product owners",
          "We embrace complexity and accountability",
          "We find leverage where others do not",
          "We work with strict deadlines",
        ],
      },
      capabilities: {
        eyebrow: "Capabilities",
        title: "What we design and launch",
        subtitle:
          "We set architecture to handle peaks, volatility, and real production loads.",
        list: [
          "High-load architecture",
          "Low-latency trading infrastructure",
          "Web3 core (Solana / EVM)",
          "AI / agents / infrastructure",
          "Prediction markets and data-driven products",
        ],
      },
      segments: {
        eyebrow: "Who it is for",
        title: "Who we work for",
        items: [
          { title: "MVP startups", description: "Fast to prod without hacks" },
          { title: "Trading teams", description: "Milliseconds = PnL" },
          {
            title: "Web3 funds & teams",
            description: "Infrastructure / analytics / execution",
          },
          { title: "Enterprise", description: "Reliability / control / scale" },
        ],
      },
      team: {
        eyebrow: "Team",
        title: "Team",
        copy:
          "We are a small team that personally leads every project from strategy to launch. We focus on architecture, speed, and reliability, not empty promises. We work as partners: we dive into the product, take ownership, and deliver outcomes. No key stage is outsourced.",
        members: [
          {
            name: "Avrelios",
            role: "Engineering Lead",
            title: "Co-Founder / Engineering",
            description:
              "Owns the entire technical stack: project architecture, engineering decisions, development, and infrastructure. Makes key technical decisions and is responsible for system stability and scalability.",
          },
          {
            name: "Erem Is",
            role: "Product & Strategy",
            title: "Co-Founder / Product & Strategy",
            description:
              "Owns strategy, product, and business direction. Shapes the product, communications, business processes, and company growth.",
          },
        ],
      },
      products: {
        eyebrow: "Products",
        title: "Our products",
        allday: {
          description: "High-frequency platform for creators and traders on Solana",
          bullets: [
            "Live events + X feed",
            "Token triggers: threshold / time trigger",
            "Token sale execution < 400ms (slot-in-slot)",
            "Sniper bot attack simulation on newly created tokens",
          ],
        },
        spectra: {
          description: "Trading bot for prediction markets",
          bullets: [
            "Limit orders, stops, risk control",
            "One of the fastest copy-trading engines",
            "Wallet scanner + AI analysis of wallet actions",
            "Works in any GEO, broad market coverage",
          ],
        },
      },
      process: {
        eyebrow: "Process",
        title: "How we work",
        subtitle: "A clean, predictable, and proven cycle.",
        steps: [
          "Dive into goals and constraints",
          "Lock architecture and plan",
          "Build the working core",
          "Test under load",
          "Ship to production and scale",
        ],
      },
      finalCta: {
        eyebrow: "Final CTA",
        title: "Start a conversation",
        subtitle:
          "If you have a product or infrastructure challenge where speed, scale, and quality matter — let’s discuss the architecture.",
      },
      footer: {
        tagline: "Q — engineering lab for Web3 & AI",
        telegram: "Telegram: @spectraview_bot",
        xAllDayLaunch: "X: @AllDayLaunch_io",
        xSpectraView: "X: @spectraview_io",
        site: "Site: alldaylaunch.io",
        copyright: "© Q",
      },
    },
    meta: {
      title: "Q — Web3 & AI engineering lab",
      description:
        "Q is an engineering and product team building high-load Web3 and AI systems with a focus on speed, reliability, and scaling.",
    },
  },
} as const;
