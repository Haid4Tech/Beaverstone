import Link from 'next/link';
import { articleHref, recentArticles } from '@/data/news';
import Reveal from '@/components/animation/Reveal';
import ImageReveal from '@/components/animation/ImageReveal';

export default function News() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
              Latest Updates
              <span className="h-px w-12 bg-gold" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-xl font-display text-3xl leading-tight font-light text-ink-warm lg:text-5xl">
              News &amp; Insights
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <Link
            href="/media/news"
            className="inline-flex items-center gap-2 border-b border-gold pb-1 text-[13px] font-medium tracking-wide text-ink-warm transition-colors hover:text-gold"
          >
            View All News <span aria-hidden>&rarr;</span>
          </Link>
        </Reveal>
      </div>

      <div className="grid gap-8 sm:grid-cols-3">
        {recentArticles(3).map((article, i) => (
          <Reveal key={article.slug} delay={i * 0.1}>
            <Link href={articleHref(article)} className="group block">
              <ImageReveal
                src={article.image}
                alt={`${article.title} — placeholder image`}
                className="aspect-[4/3] w-full"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <p className="mt-4 text-[11px] font-medium tracking-widest text-gold uppercase">
                {article.category} &middot;{' '}
                {new Date(article.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
              <h3 className="mt-2 font-display text-xl leading-snug text-ink-warm">
                {article.title}
              </h3>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
