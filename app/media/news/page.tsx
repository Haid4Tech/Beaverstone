import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ArticleListing from '@/components/media/ArticleListing';
import { articlesByCategory } from '@/data/news';
import { searchArticles } from '@/lib/media';

export const metadata: Metadata = {
  title: 'News',
  description:
    'Company news and project updates from Beaverstone across Lagos and Abuja.',
  alternates: { canonical: '/media/news' },
};

export default async function NewsPage(props: PageProps<'/media/news'>) {
  const { q } = await props.searchParams;
  const query = typeof q === 'string' ? q : '';
  const list = searchArticles(articlesByCategory('News'), query);

  return (
    <>
      <PageHero
        eyebrow="Media"
        title="News"
        image="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2400&auto=format&fit=crop"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Media' },
          { label: 'News' },
        ]}
      />
      <ArticleListing articles={list} basePath="/media/news" query={query} />
    </>
  );
}
