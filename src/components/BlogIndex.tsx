"use client";

import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import {
  CATEGORY_LABELS,
  getAuthorById,
  posts,
  type Category,
} from "@/content/posts";
import { useI18n } from "@/i18n/LanguageProvider";

type BlogIndexProps = {
  initialCategory?: "all" | Category;
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function BlogIndex({ initialCategory = "all" }: BlogIndexProps) {
  const { t, lang } = useI18n();
  const miniPageSize = 6;
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | Category>(
    initialCategory,
  );
  const [featuredSlug, setFeaturedSlug] = useState<string | null>(null);
  const [miniPage, setMiniPage] = useState(1);

  const filters: Array<{ key: "all" | Category; label: string }> = [
    { key: "all", label: t("blog.filters.all") },
    { key: "market", label: t("blog.filters.market") },
    { key: "tech", label: t("blog.filters.tech") },
  ];

  const localizedPosts = useMemo(
    () =>
      posts.map((post) => ({
        ...post,
        title: lang === "en" ? post.titleEn : post.title,
        excerpt: lang === "en" ? post.excerptEn : post.excerpt,
        date: lang === "en" ? post.dateEn : post.date,
        readTime: lang === "en" ? post.readTimeEn : post.readTime,
        body: lang === "en" ? post.bodyEn : post.body,
        bullets: lang === "en" ? post.bulletsEn : post.bullets,
      })),
    [lang],
  );

  useEffect(() => {
    const handle = window.setTimeout(() => {
      setDebouncedQuery(query);
    }, 200);
    return () => window.clearTimeout(handle);
  }, [query]);

  const normalizedQuery = debouncedQuery.trim().toLowerCase();

  useEffect(() => {
    setMiniPage(1);
  }, [activeCategory, normalizedQuery]);

  const highlightText = (text: string): ReactNode => {
    if (!normalizedQuery) {
      return text;
    }
    const escaped = normalizedQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "ig");
    const matches = text.match(regex);
    if (!matches) {
      return text;
    }
    const parts = text.split(regex);
    return parts.flatMap((part, index) => {
      const chunk: ReactNode[] = [part];
      const match = matches[index];
      if (match) {
        chunk.push(
          <mark key={`${index}-${match}`} className="search-highlight">
            {match}
          </mark>,
        );
      }
      return chunk;
    });
  };

  const filteredPosts = useMemo(() => {

    return localizedPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "all" || post.category === activeCategory;

      if (!matchesCategory) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const haystack = [
        post.title,
        post.excerpt,
        post.tags.join(" "),
        post.body.join(" "),
        post.bullets.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [activeCategory, localizedPosts, normalizedQuery]);

  useEffect(() => {
    if (filteredPosts.length === 0) {
      setFeaturedSlug(null);
      return;
    }

    const hasFeatured = filteredPosts.some(
      (post) => post.slug === featuredSlug,
    );

    if (!featuredSlug || !hasFeatured) {
      setFeaturedSlug(filteredPosts[0].slug);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, normalizedQuery, featuredSlug]);

  const featuredPost =
    filteredPosts.find((post) => post.slug === featuredSlug) ??
    filteredPosts[0];
  const listPosts = featuredPost
    ? filteredPosts.filter((post) => post.slug !== featuredPost.slug)
    : [];
  const totalMiniPages = Math.max(
    1,
    Math.ceil(listPosts.length / miniPageSize),
  );
  const pagedMiniPosts = listPosts.slice(
    (miniPage - 1) * miniPageSize,
    miniPage * miniPageSize,
  );

  const openPost = (slug: string) => {
    setFeaturedSlug(slug);
  };

  useEffect(() => {
    if (miniPage > totalMiniPages) {
      setMiniPage(totalMiniPages);
    }
  }, [miniPage, totalMiniPages]);

  return (
    <div>
      <div className="blog-controls">
        <div className="search-field">
          <label className="sr-only" htmlFor="blog-search">
            {t("blog.filters.searchPlaceholder")}
          </label>
          <input
            id="blog-search"
            className="search-input"
            type="search"
            placeholder={t("blog.filters.searchPlaceholder")}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="filter-chips" role="tablist">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className={`filter-chip${
                activeCategory === filter.key ? " is-active" : ""
              }`}
              aria-pressed={activeCategory === filter.key}
              onClick={() => setActiveCategory(filter.key)}
            >
              {filter.label}
            </button>
          ))}
          <span className="blog-count">
            {t("blog.filters.found")}: {filteredPosts.length}
          </span>
        </div>
      </div>

      {featuredPost ? (
        <div className="blog-featured-grid">
          {(() => {
            const author = getAuthorById(featuredPost.authorId);
            const authorName =
              lang === "en" ? author?.nameEn ?? author?.name : author?.name;
            const initials = authorName ? getInitials(authorName) : "Q";

            const featuredVisualStyle: CSSProperties | undefined = featuredPost
              .image
              ? {
                  ["--blog-visual-image" as string]: `url(${featuredPost.image})`,
                  ["--blog-visual-grid-opacity" as string]: 0,
                    ...(featuredPost.slug === "borba-za-skorost-v-solana"
                      ? {
                        ["--blog-visual-size" as string]: "93.5%",
                        ["--blog-visual-position" as string]: "50% 50%",
                      }
                    : featuredPost.slug === "solana-kak-yavlenie"
                      ? {
                          ["--blog-visual-size" as string]: "120%",
                          ["--blog-visual-position" as string]: "50% 50%",
                        }
                    : {}),
                }
              : undefined;

            return (
              <article
                className="blog-featured-card surface"
                data-category={featuredPost.category}
              >
                <div
                  className={`blog-visual blog-visual--featured${
                    featuredPost.image ? " blog-visual--has-image" : ""
                  }`}
                  aria-hidden="true"
                  style={featuredVisualStyle}
                />
                <div className="blog-card-meta">
                  <span className="chip">
                    {CATEGORY_LABELS[featuredPost.category]}
                  </span>
                  <span className="blog-meta">{featuredPost.date}</span>
                  <span className="blog-meta">{featuredPost.readTime}</span>
                </div>
                <h3 className="blog-featured-title">
                  {highlightText(featuredPost.title)}
                </h3>
                <p className="blog-featured-excerpt">
                  {highlightText(featuredPost.excerpt)}
                </p>
                <div className="blog-tags">
                  {featuredPost.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="blog-featured-body article-body">
                  {featuredPost.body.map((paragraph) => (
                    <p key={paragraph}>{highlightText(paragraph)}</p>
                  ))}
                  <h3>{t("blog.keyTakeaways")}</h3>
                  <ul>
                    {featuredPost.bullets.map((bullet) => (
                      <li key={bullet}>
                        <span className="article-dot" aria-hidden="true" />
                        <span>{highlightText(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="blog-featured-footer">
                  <div className="blog-author">
                    <span className="author-badge">{initials}</span>
                    <span className="blog-meta">
                      {authorName ?? t("blog.teamFallback")}
                    </span>
                  </div>
                </div>
              </article>
            );
          })()}

          <div className="blog-mini-list">
            {pagedMiniPosts.map((post) => {
              const miniVisualStyle: CSSProperties | undefined = post.image
                ? {
                    ["--blog-visual-image" as string]: `url(${post.image})`,
                    ["--blog-visual-grid-opacity" as string]: 0,
                    ...(post.slug === "borba-za-skorost-v-solana"
                      ? {
                          ["--blog-visual-size" as string]: "93.5%",
                          ["--blog-visual-position" as string]: "50% 50%",
                        }
                      : post.slug === "solana-kak-yavlenie"
                        ? {
                            ["--blog-visual-size" as string]: "120%",
                            ["--blog-visual-position" as string]: "50% 50%",
                          }
                      : {}),
                  }
                : undefined;

              return (
              <div
                key={post.slug}
                className="blog-mini-card"
                data-category={post.category}
                onClick={() => openPost(post.slug)}
              >
                <div
                  className={`blog-visual blog-visual--mini${
                    post.image ? " blog-visual--has-image" : ""
                  }`}
                  aria-hidden="true"
                  style={miniVisualStyle}
                />
                <div className="blog-mini-header">
                  <div className="blog-mini-meta">
                    <span className="blog-meta">
                      {CATEGORY_LABELS[post.category]}
                    </span>
                    <span className="blog-meta">{post.date}</span>
                  </div>
                  <button
                    className="pin-button"
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setFeaturedSlug(post.slug);
                    }}
                  >
                    {t("blog.pin")}
                  </button>
                </div>
                <h4 className="blog-mini-title">
                  {highlightText(post.title)}
                </h4>
                <p className="blog-mini-excerpt">
                  {highlightText(post.excerpt)}
                </p>
              </div>
            );
            })}
          </div>
          {totalMiniPages > 1 ? (
            <div className="blog-pagination" role="navigation">
              <button
                type="button"
                className="blog-page-button"
                onClick={() => setMiniPage((page) => Math.max(1, page - 1))}
                disabled={miniPage === 1}
                aria-label={lang === "en" ? "Previous page" : "Предыдущая страница"}
              >
                ←
              </button>
              {Array.from({ length: totalMiniPages }, (_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    type="button"
                    className={`blog-page-button${page === miniPage ? " is-active" : ""}`}
                    onClick={() => setMiniPage(page)}
                    aria-current={page === miniPage ? "page" : undefined}
                  >
                    {page}
                  </button>
                );
              })}
              <button
                type="button"
                className="blog-page-button"
                onClick={() =>
                  setMiniPage((page) => Math.min(totalMiniPages, page + 1))
                }
                disabled={miniPage === totalMiniPages}
                aria-label={lang === "en" ? "Next page" : "Следующая страница"}
              >
                →
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <p className="mt-6 text-sm text-[var(--muted)]">
          {t("blog.filters.nothingFound")}
        </p>
      )}
    </div>
  );
}
