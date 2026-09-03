import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/animation/Reveal';
import MediaSidebar from '@/components/media/MediaSidebar';
import ArticleCard from '@/components/media/ArticleCard';
import {
  articles,
  categorySlug,
  formatDate,
  getArticle,
  type MediaCategory,
} from '@/data/news';

const SLUG_TO_CATEGORY: Record<string, MediaCategory> = {
  news: 'News',
  blogs: 'Blogs',
};

export function generateStaticParams() {
  return articles.map((a) => ({
    category: categorySlug[a.category],
    slug: a.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<'/media/[category]/[slug]'>
): Promise<Metadata> {
  const { category, slug } = await props.params;
  const mediaCategory = SLUG_TO_CATEGORY[category];
  const article = mediaCategory && getArticle(mediaCategory, slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/media/${category}/${slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticlePage(
  props: PageProps<'/media/[category]/[slug]'>
) {
  const { category, slug } = await props.params;
  const mediaCategory = SLUG_TO_CATEGORY[category];
  if (!mediaCategory) notFound();

  const article = getArticle(mediaCategory, slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    author: { '@type': 'Organization', name: article.author },
    publisher: { '@type': 'Organization', name: 'Beaverstone' },
  };

  const shareUrl = `https://example.com/media/${category}/${slug}`;
  const shares = [
    {
      label: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow={article.category}
        title={article.title}
        image={article.image}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Media' },
          {
            label: article.category,
            href: `/media/${categorySlug[article.category]}`,
          },
        ]}
      />

      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20">
          <article>
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line pb-6 text-[13px] text-body">
                <span className="font-medium tracking-widest text-body uppercase">
                  {article.category}
                </span>
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span aria-hidden>&middot;</span>
                <span>By {article.author}</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-5">
                {article.body.map((para) => (
                  <p key={para} className="text-[16px] leading-[1.8] text-body">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-line pt-6">
                <span className="text-[13px] tracking-widest text-ink-warm uppercase">
                  Share
                </span>
                {shares.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-ink pb-0.5 text-[13px] text-body transition-colors hover:text-ink"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </Reveal>

            {related.length > 0 && (
              <div className="mt-20">
                <h2 className="mb-10 font-display text-2xl font-light text-ink-warm">
                  Related Reading
                </h2>
                <div className="grid gap-12 sm:grid-cols-2">
                  {related.map((a, i) => (
                    <ArticleCard key={a.slug} article={a} index={i} />
                  ))}
                </div>
              </div>
            )}

            <Reveal delay={0.1}>
              <div className="mt-20 border-t border-line pt-10">
                <h2 className="font-display text-2xl font-light text-ink-warm">
                  Leave a Comment
                </h2>
                <form className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="c-name"
                      className="mb-2 block text-[13px] text-body"
                    >
                      Name
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full border-b border-line bg-transparent py-2 text-sm text-ink-warm focus:border-ink focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="c-email"
                      className="mb-2 block text-[13px] text-body"
                    >
                      Email
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full border-b border-line bg-transparent py-2 text-sm text-ink-warm focus:border-ink focus:outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="c-message"
                      className="mb-2 block text-[13px] text-body"
                    >
                      Comment
                    </label>
                    <textarea
                      id="c-message"
                      name="comment"
                      rows={4}
                      required
                      className="w-full border-b border-line bg-transparent py-2 text-sm text-ink-warm focus:border-ink focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="justify-self-start rounded-sm bg-ink px-8 py-3.5 text-[13px] font-medium tracking-wide text-white btn-wipe hover:text-ink sm:col-span-2"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </Reveal>

            <Link
              href={`/media/${categorySlug[article.category]}`}
              className="mt-14 inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-ink-warm transition-colors hover:text-body"
            >
              <span aria-hidden>&larr;</span> Back to {article.category}
            </Link>
          </article>

          <MediaSidebar action={`/media/${categorySlug[article.category]}`} />
        </div>
      </div>
    </>
  );
}
