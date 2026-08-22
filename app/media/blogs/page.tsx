import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ArticleListing from '@/components/media/ArticleListing';
import { articlesByCategory } from '@/data/news';
import { searchArticles } from '@/lib/media';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guides and market insight on buying, building and investing in Nigerian real estate.',
  alternates: { canonical: '/media/blogs' },
};

export default async function BlogsPage(props: PageProps<'/media/blogs'>) {
  const { q } = await props.searchParams;
  const query = typeof q === 'string' ? q : '';
  const list = searchArticles(articlesByCategory('Blogs'), query);

  return (
    <>
      <PageHero
        eyebrow="Media"
        title="Blog"
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2400&auto=format&fit=crop"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Media' },
          { label: 'Blog' },
        ]}
      />
      <ArticleListing articles={list} basePath="/media/blogs" query={query} />
    </>
  );
}
