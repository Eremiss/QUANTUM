export type Category = "market" | "tech";

export type Author = {
  id: "beleken" | "israelyan";
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
};

export type Post = {
  slug: string;
  category: Category;
  authorId: Author["id"];
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  date: string;
  dateEn: string;
  readTime: string;
  readTimeEn: string;
  tags: string[];
  image?: string;
  body: string[];
  bodyEn: string[];
  bullets: string[];
  bulletsEn: string[];
};

export const CATEGORY_LABELS: Record<Category, string> = {
  market: "Market",
  tech: "Tech",
};

export const authors: Author[] = [
  {
    id: "beleken",
    name: "Avrelios",
    nameEn: "Avrelios",
    role: "Инженерный лидер",
    roleEn: "Engineering lead",
  },
  {
    id: "israelyan",
    name: "Erem Is",
    nameEn: "Erem Is",
    role: "Продукт и стратегия",
    roleEn: "Product & strategy",
  },
];

export const getAuthorById = (authorId: Author["id"]) =>
  authors.find((author) => author.id === authorId);

export const posts: Post[] = [
  {
    slug: "web3-ux-sravnivaetsya-s-web2",
    category: "market",
    authorId: "israelyan",
    title: "Почему Web3 UX уже сравнивают с Web2",
    titleEn: "Why Web3 UX is finally being judged against Web2",
    excerpt:
      "Порог терпения пользователей резко снизился: если продукт не объясняет себя за секунды и не работает без friction, он проигрывает даже в нишевом Web3.",
    excerptEn:
      "User tolerance is collapsing. If a product cannot explain itself in seconds and operate without friction, it loses even in niche Web3 flows.",
    date: "Апрель 2026",
    dateEn: "April 2026",
    readTime: "5 мин",
    readTimeEn: "5 min",
    tags: ["UX", "Web3", "Product"],
    image: "/blog/web3-ux-sravnivaetsya-s-web2.jpg",
    body: [
      "Еще недавно пользователи были готовы прощать сложные кошельки, неочевидные маршруты и перегруженные интерфейсы только потому, что продукт давал доступ к новому рынку. Сейчас этого уже недостаточно.",
      "На зрелом рынке Web3 оценивают не по обещанию, а по тому, насколько быстро человек понимает сценарий, чувствует контроль и доходит до первого результата. Если продукт заставляет учиться слишком долго, он перестает быть конкурентным.",
      "Отсюда и новый стандарт: меньше магии в интерфейсе, больше ясности в статусах, рисках и действиях. В выигрыше оказываются команды, которые думают не только про механику блокчейна, но и про когнитивную нагрузку пользователя.",
    ],
    bodyEn: [
      "Users used to forgive complex wallets, unclear flows, and overloaded interfaces simply because the product opened access to a new market. That grace period is over.",
      "In a more mature Web3 market, products are judged by how quickly someone understands the flow, feels in control, and reaches a first outcome. If the learning curve is too steep, the product stops being competitive.",
      "That creates a new standard: less interface magic, more clarity around status, risk, and action. Teams that win are the ones thinking about cognitive load, not just blockchain mechanics.",
    ],
    bullets: [
      "Конкуренция сместилась из идеи в качество исполнения",
      "Первый результат должен быть достижим почти без обучения",
      "Ясность рисков и статусов важнее визуального шума",
    ],
    bulletsEn: [
      "Competition has shifted from ideas to execution quality",
      "The first outcome should require almost no learning",
      "Clear risk and status communication matters more than visual noise",
    ],
  },
  {
    slug: "order-books-na-onchain",
    category: "market",
    authorId: "israelyan",
    title: "Order books на onchain-рынках: где теряется скорость",
    titleEn: "Onchain order books: where speed actually gets lost",
    excerpt:
      "Проблема onchain-рынков не только в самой сети. Задержка накапливается на маршрутизации, чтении состояния, защите от риска и неидеальной клиентской логике.",
    excerptEn:
      "The bottleneck is not only the chain. Latency accumulates across routing, state reads, risk checks, and imperfect client logic.",
    date: "Март 2026",
    dateEn: "March 2026",
    readTime: "6 мин",
    readTimeEn: "6 min",
    tags: ["Latency", "Order books", "Infra"],
    image: "/blog/order-books-na-onchain.jpg",
    body: [
      "Когда команды говорят, что onchain-рынок медленный, они часто обвиняют только блокчейн. На практике пользователь чувствует суммарную задержку всей цепочки принятия решения.",
      "Пока система получает market data, пересчитывает риск, подготавливает ордер и ждет подтверждения, ценовое окно уже сдвигается. Поэтому скорость должна проектироваться как end-to-end свойство, а не как локальная оптимизация одного сервиса.",
      "Те, кто выигрывает, обычно режут путь до действия: меньше лишних hops, агрессивнее локальный кэш, лучше контроль очередей и предсказуемее поведение клиента под нагрузкой.",
    ],
    bodyEn: [
      "When teams say an onchain market is slow, they often blame the chain alone. In practice, users feel the accumulated delay of the full decision path.",
      "By the time a system fetches market data, recalculates risk, prepares an order, and waits for confirmation, the pricing window has already moved. Speed has to be designed as an end-to-end property, not a local optimization.",
      "The winning teams reduce the action path: fewer hops, stronger local caching, tighter queue control, and more predictable client behavior under load.",
    ],
    bullets: [
      "Latency складывается из всей цепочки, а не одного узла",
      "Риск-контур и client logic часто дороже сети",
      "Скорость выигрывают те, кто проектирует shortest path to action",
    ],
    bulletsEn: [
      "Latency is created by the entire path, not one node",
      "Risk checks and client logic often cost more than the network",
      "Speed belongs to teams designing the shortest path to action",
    ],
  },
  {
    slug: "copytrading-kak-ryinok-v-realnom-vremeni",
    category: "market",
    authorId: "israelyan",
    title: "Copy trading как рынок в реальном времени",
    titleEn: "Copy trading as a real-time market",
    excerpt:
      "Copy trading выигрывает не только интерфейсом, а качеством сигнала, скоростью переноса действий и тем, как система фильтрует шум.",
    excerptEn:
      "Copy trading wins not through UI alone, but through signal quality, execution transfer speed, and how well the system filters noise.",
    date: "Февраль 2026",
    dateEn: "February 2026",
    readTime: "4 мин",
    readTimeEn: "4 min",
    tags: ["Trading", "Signals", "Execution"],
    image: "/blog/copytrading-kak-ryinok-v-realnom-vremeni.jpg",
    body: [
      "Сильный copy-trading продукт больше похож на систему обработки сигналов, чем на социальную ленту. Главный вопрос не в том, кого копировать, а как быстро и аккуратно переносить действие в другой контекст риска.",
      "Если движение копируется без понимания размера позиции, ликвидности и текущего режима рынка, платформа превращается в генератор запаздывающих сделок. Пользователь чувствует это очень быстро.",
      "Поэтому хороший продукт строится вокруг фильтрации: какие действия считать сигналом, как их нормализовать и как адаптировать исполнение под конкретный аккаунт.",
    ],
    bodyEn: [
      "A strong copy-trading product behaves more like a signal-processing system than a social feed. The real question is not who to copy, but how quickly and safely to transfer action into a different risk context.",
      "If trades are mirrored without position sizing, liquidity awareness, and market regime context, the platform becomes a generator of delayed entries. Users feel that immediately.",
      "That is why the best products are built around filtering: which actions count as signals, how to normalize them, and how to adapt execution for a specific account.",
    ],
    bullets: [
      "Copy trading начинается с сигнала, а не с feed-механики",
      "Execution adaptation важнее слепого копирования",
      "Фильтрация шума определяет доверие к платформе",
    ],
    bulletsEn: [
      "Copy trading starts with signal quality, not feed mechanics",
      "Execution adaptation matters more than blind mirroring",
      "Noise filtering determines platform trust",
    ],
  },
  {
    slug: "borba-za-skorost-v-solana",
    category: "tech",
    authorId: "beleken",
    title: "Борьба за скорость в Solana",
    titleEn: "The fight for speed on Solana",
    excerpt:
      "В Solana побеждает не самый красивый стек, а тот, кто контролирует весь critical path: от источника сигнала до подтвержденного действия.",
    excerptEn:
      "On Solana, the winner is not the prettiest stack, but the team that controls the full critical path from signal source to confirmed action.",
    date: "Апрель 2026",
    dateEn: "April 2026",
    readTime: "7 мин",
    readTimeEn: "7 min",
    tags: ["Solana", "Performance", "Execution"],
    image: "/blog/borba-za-skorost-v-solana.jpg",
    body: [
      "Скорость в Solana редко сводится к одной оптимизации. Даже если отдельный сервис работает быстро, это не гарантирует результата, если рядом есть очередь, лишняя сериализация или нестабильный источник данных.",
      "По-настоящему быстрые системы проектируются вокруг предсказуемости. Они уменьшают число решений на горячем пути, заранее готовят зависимости и стараются не переносить неопределенность в момент исполнения.",
      "Именно поэтому архитектура и инфраструктура здесь неразделимы. Производительность нельзя докрутить на последнем спринте: она закладывается в форму всей системы.",
    ],
    bodyEn: [
      "Speed on Solana rarely comes from one optimization. Even if a single service is fast, the outcome still fails when a queue, serialization step, or unstable data source sits nearby.",
      "Truly fast systems are designed around predictability. They reduce hot-path decisions, prepare dependencies in advance, and avoid moving uncertainty into the execution moment.",
      "That is why architecture and infrastructure are inseparable here. Performance is not something you bolt on at the end of a sprint; it is embedded in the system shape.",
    ],
    bullets: [
      "Hot path должен быть минимальным и предсказуемым",
      "Очереди и сериализация часто съедают больше, чем вычисления",
      "Производительность проектируется на уровне системы, а не функции",
    ],
    bulletsEn: [
      "The hot path must stay minimal and predictable",
      "Queues and serialization often cost more than compute",
      "Performance is designed at the system level, not the function level",
    ],
  },
  {
    slug: "skorost-kak-risk",
    category: "tech",
    authorId: "beleken",
    title: "Скорость как риск: почему быстрый код не всегда безопасен",
    titleEn: "Speed as risk: why fast code is not always safe",
    excerpt:
      "Погоня за миллисекундами без дисциплины наблюдаемости и риск-контроля часто превращает выигрыш в скрытую операционную уязвимость.",
    excerptEn:
      "Chasing milliseconds without observability and risk discipline often turns a speed gain into a hidden operational vulnerability.",
    date: "Март 2026",
    dateEn: "March 2026",
    readTime: "5 мин",
    readTimeEn: "5 min",
    tags: ["Reliability", "Infra", "Risk"],
    image: "/blog/skorost-kak-risk.jpg",
    body: [
      "Чем быстрее работает система, тем меньше времени остается на реакцию, если что-то идет не так. Поэтому low-latency архитектура почти всегда требует более строгой культуры контроля и наблюдаемости.",
      "Если команда оптимизирует только throughput и время ответа, но не знает, как сервис деградирует под нестандартной нагрузкой, она получает хрупкую систему с красивыми метриками в спокойном режиме.",
      "Зрелый инженерный подход означает, что скорость и надежность считаются частью одного уравнения, а не двумя конкурирующими целями.",
    ],
    bodyEn: [
      "The faster a system moves, the less time remains to respond when something goes wrong. That is why low-latency architecture almost always requires stricter observability and control discipline.",
      "If a team optimizes only throughput and response time, but does not understand how the service degrades under abnormal load, it ends up with a fragile system that looks healthy only in calm conditions.",
      "A mature engineering approach treats speed and reliability as one equation rather than two competing goals.",
    ],
    bullets: [
      "Latency without observability creates operational blind spots",
      "Speed gains must be evaluated under degraded modes too",
      "Reliability is part of performance engineering, not its opposite",
    ],
    bulletsEn: [
      "Latency without observability creates operational blind spots",
      "Speed gains must be evaluated under degraded modes too",
      "Reliability is part of performance engineering, not its opposite",
    ],
  },
  {
    slug: "solana-kak-yavlenie",
    category: "tech",
    authorId: "beleken",
    title: "Solana как инженерное явление",
    titleEn: "Solana as an engineering phenomenon",
    excerpt:
      "Solana интересна не только скоростью, но и тем, как она заставляет команды переосмысливать границу между приложением, сетью и execution-логикой.",
    excerptEn:
      "Solana matters not only because of speed, but because it forces teams to rethink the boundary between application logic, networking, and execution.",
    date: "Январь 2026",
    dateEn: "January 2026",
    readTime: "6 мин",
    readTimeEn: "6 min",
    tags: ["Solana", "Architecture", "Systems"],
    image: "/blog/solana-kak-yavlenie.jpg",
    body: [
      "Solana ценна как среда, которая обнажает реальные инженерные компромиссы. Здесь быстро становится видно, где архитектура выдерживает продакшн, а где держится только на удаче и пустых буферах.",
      "Команды, приходящие в эту экосистему из более медленных стеков, часто недооценивают цену каждой лишней зависимости и каждого решения на горячем пути. Это быстро наказывается.",
      "В то же время именно здесь особенно заметно преимущество системного подхода: когда продукт, сеть и инфраструктура проектируются как единое пространство решений.",
    ],
    bodyEn: [
      "Solana is valuable because it exposes real engineering trade-offs. It quickly reveals whether architecture can survive production or is simply relying on luck and empty buffers.",
      "Teams entering the ecosystem from slower stacks often underestimate the cost of every extra dependency and hot-path decision. The platform punishes that quickly.",
      "At the same time, this is where system-level thinking becomes most visible: product, network, and infrastructure have to be designed as one decision space.",
    ],
    bullets: [
      "Solana усиливает цену архитектурных компромиссов",
      "Каждая лишняя зависимость заметна на критическом пути",
      "Системное мышление дает непропорциональное преимущество",
    ],
    bulletsEn: [
      "Solana amplifies the cost of architectural trade-offs",
      "Every extra dependency shows up on the critical path",
      "System-level thinking creates disproportionate advantage",
    ],
  },
];

export const postsBySlug: Record<string, Post> = Object.fromEntries(
  posts.map((post) => [post.slug, post]),
);
