import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CtaDropdown from "@/components/CtaDropdown";
import FadeIn from "@/components/FadeIn";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  CATEGORY_LABELS,
  getAuthorById,
  posts,
  postsBySlug,
} from "@/content/posts";
import { getPrimaryNavItems, SITE_LINKS } from "@/content/site";
import type { Language } from "@/i18n/strings";

const LINKS = SITE_LINKS;

const resolveLang = async (): Promise<Language> => "ru";

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const lang = await resolveLang();
  const post = postsBySlug[params.slug];

  if (!post) {
    return {
      title: lang === "en" ? "Article not found — Q" : "Статья не найдена — Q",
    };
  }

  return {
    title: `${lang === "en" ? post.titleEn : post.title} — Q`,
    description: lang === "en" ? post.excerptEn : post.excerpt,
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const lang = await resolveLang();
  const post = postsBySlug[params.slug];
  const navItems = getPrimaryNavItems(lang);

  if (!post) {
    notFound();
  }

  const author = getAuthorById(post.authorId);
  const authorName =
    lang === "en" ? author?.nameEn ?? author?.name : author?.name;
  const initials = authorName ? getInitials(authorName) : "Q";
  const related = posts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="subpage subpage--blog">
      <SiteHeader
        navItems={navItems}
        telegram={LINKS.telegram}
        email={LINKS.email}
      />
      <CtaDropdown variant="fab" telegram={LINKS.telegram} email={LINKS.email} />

      <main>
        <section className="subpage-docs-hero">
          <div className="subpage-shell">
            <Link className="eyebrow link-underline" href="/blog">
              {lang === "en" ? "Back to blog" : "Назад в блог"}
            </Link>
            <div className="page-hero page-hero--blog mt-6">
              <FadeIn variant="soft-scale">
                <p className="eyebrow">{CATEGORY_LABELS[post.category]}</p>
                <h1 className="section-title mt-6 max-w-3xl">
                  {lang === "en" ? post.titleEn : post.title}
                </h1>
                <p className="section-subtitle mt-6 max-w-2xl">
                  {lang === "en" ? post.excerptEn : post.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="chip">
                    {lang === "en" ? post.readTimeEn : post.readTime}
                  </span>
                  <span className="chip">
                    {lang === "en" ? post.dateEn : post.date}
                  </span>
                  <span className="chip">
                    {authorName ?? (lang === "en" ? "Q Team" : "Команда Q")}
                  </span>
                </div>
              </FadeIn>
            </div>

            <FadeIn className="article-body mt-10">
              {(lang === "en" ? post.bodyEn : post.body).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <h3>{lang === "en" ? "Key takeaways" : "Ключевые тезисы"}</h3>
              <ul>
                {(lang === "en" ? post.bulletsEn : post.bullets).map(
                  (bullet) => (
                  <li key={bullet}>
                    <span className="article-dot" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="article-author">
                <span className="author-badge">{initials}</span>
                <div>
                  <p className="text-sm text-[var(--muted)]">
                    {lang === "en" ? "Author" : "Автор"}
                  </p>
                  <p className="text-base font-semibold text-[var(--fg)]">
                    {authorName ?? (lang === "en" ? "Q Team" : "Команда Q")}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="section">
          <div className="subpage-shell">
            <FadeIn>
              <p className="eyebrow">
                {lang === "en" ? "More" : "Еще материалы"}
              </p>
              <h2 className="section-title mt-6">
                {lang === "en" ? "Read also" : "Читайте также"}
              </h2>
            </FadeIn>
            <div className="blog-grid mt-8">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="blog-card surface"
                  data-category={item.category}
                >
                  <div className="blog-card-meta">
                    <span className="chip">{CATEGORY_LABELS[item.category]}</span>
                    <span className="blog-meta">{item.date}</span>
                    <span className="blog-meta">{item.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{item.title}</h3>
                  <p className="blog-card-excerpt">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        telegram={LINKS.telegram}
        email={LINKS.email}
        x={LINKS.xQuantum}
        site={LINKS.site}
      />
    </div>
  );
}
