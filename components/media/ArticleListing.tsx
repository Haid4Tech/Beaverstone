import ArticleCard from './ArticleCard';
import MediaSidebar from './MediaSidebar';
import type { Article } from '@/data/news';

export default function ArticleListing({
  articles,
  basePath,
  query = '',
}: {
  articles: Article[];
  basePath: string;
  query?: string;
}) {
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
