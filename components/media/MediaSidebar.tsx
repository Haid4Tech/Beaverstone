import Image from 'next/image';
import Link from 'next/link';
import {
  articleHref,
  articles,
  categorySlug,
  formatDate,
  recentArticles,
  type MediaCategory,
} from '@/data/news';

const CATEGORIES: MediaCategory[] = ['News', 'Blogs'];

export default function MediaSidebar({
  action = '/media/news',
  query = '',
}: {
  action?: string;
  query?: string;
}) {
  return (
    <aside className="flex flex-col gap-12" aria-label="Media sidebar">
      {/* Search — a plain GET form so filtering works without client JS */}
      <div>
        <h2 className="font-display text-xl text-ink-warm">Search Here</h2>
        <form
          action={action}
          className="mt-4 flex border-b border-line focus-within:border-ink"
        >
          <label htmlFor="media-search" className="sr-only">
            Search articles
          </label>
          <input
            id="media-search"
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search&hellip;"
            className="w-full bg-transparent py-2 text-sm text-ink-warm placeholder:text-body/60 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="px-2 text-body transition-colors hover:text-ink-warm"
          >
            &rarr;
          </button>
        </form>
      </div>

      <div>
        <h2 className="font-display text-xl text-ink-warm">Recent Posts</h2>
        <ul className="mt-5 flex flex-col gap-5">
          {recentArticles(4).map((article) => (
            <li key={article.slug}>
              <Link href={articleHref(article)} className="group flex gap-4">
                <span className="relative h-16 w-20 shrink-0 overflow-hidden bg-cream">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm leading-snug text-ink-warm transition-colors group-hover:text-body">
                    {article.title}
                  </span>
                  <span className="mt-1 block text-[11px] tracking-wide text-body">
                    {formatDate(article.date)}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-display text-xl text-ink-warm">Categories</h2>
        <ul className="mt-5 flex flex-col gap-3">
          {CATEGORIES.map((category) => (
            <li key={category}>
              <Link
                href={`/media/${categorySlug[category]}`}
                className="flex items-center justify-between border-b border-line pb-2 text-sm text-body transition-colors hover:text-ink"
              >
                {category}
                <span className="text-[12px] text-body/70">
                  {articles.filter((a) => a.category === category).length}
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/media/events"
              className="flex items-center justify-between border-b border-line pb-2 text-sm text-body transition-colors hover:text-ink"
            >
              Events
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
