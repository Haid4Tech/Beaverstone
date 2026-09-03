import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/animation/Reveal';
import ImageReveal from '@/components/animation/ImageReveal';
import ArticleCard from '@/components/media/ArticleCard';
import { articles, events, recentArticles } from '@/data/news';

export const metadata: Metadata = {
  title: 'Media',
  description: 'News, insight and company events from across Beaverstone.',
  alternates: { canonical: '/media' },
};

const sections = [
  {
    href: '/media/news',
    label: 'News',
    copy: 'Company announcements, awards and construction milestones.',
    image:
      'https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1600&auto=format&fit=crop',
  },
  {
    href: '/media/blogs',
    label: 'Blog',
    copy: 'Guides and market insight for buyers, builders and investors.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop',
  },
  {
    href: '/media/events',
    label: 'Events',
    copy: 'Life across the group, from retreats to office openings.',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="Newsroom"
        image="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2400&auto=format&fit=crop"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Media' }]}
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-10 sm:grid-cols-3">
          {sections.map((s, i) => (
            <Reveal key={s.href} delay={i * 0.08}>
              <Link href={s.href} className="group block">
                <ImageReveal
                  src={s.image}
                  alt=""
                  className="aspect-[4/3] w-full"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <h2 className="mt-5 font-display text-2xl text-ink-warm transition-colors group-hover:text-body">
                  {s.label}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {s.copy}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-[13px] tracking-widest text-body uppercase">
          {articles.length} articles &middot; {events.length} events
        </p>
      </section>

      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="mb-14 font-display text-3xl leading-tight font-light text-ink-warm lg:text-4xl">
              Latest Stories
            </h2>
          </Reveal>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {recentArticles(3).map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
