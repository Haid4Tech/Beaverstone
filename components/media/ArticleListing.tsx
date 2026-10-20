'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ArticleCard from './ArticleCard';
import MediaSidebar from './MediaSidebar';
import { searchArticles } from '@/lib/media';
import type { Article } from '@/data/news';

type Props = { articles: Article[]; basePath: string };

// Static export can't read searchParams on the server, so the ?q= filter runs here.
export default function ArticleListing(props: Props) {
  return (
    <Suspense fallback={<Listing {...props} query="" />}>
      <SearchableListing {...props} />
    </Suspense>
  );
}

function SearchableListing(props: Props) {
  const query = useSearchParams().get('q') ?? '';
  return <Listing {...props} query={query} />;
}

function Listing({
  articles: all,
  basePath,
  query,
}: Props & { query: string }) {
  const articles = searchArticles(all, query);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20">
        <div className="flex flex-col gap-20">
          {query && (
            <p className="text-sm text-body">
              {articles.length === 0
                ? 'No articles found for '
                : `${articles.length} result${articles.length === 1 ? '' : 's'} for `}
              <span className="text-ink-warm">&ldquo;{query}&rdquo;</span>
            </p>
          )}

          {articles.length === 0 && !query && (
            <p className="text-sm text-body">Nothing published here yet.</p>
          )}

          {articles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} index={i} />
          ))}
        </div>

        <MediaSidebar action={basePath} query={query} />
      </div>
    </section>
  );
}
