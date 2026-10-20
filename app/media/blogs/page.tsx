import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ArticleListing from '@/components/media/ArticleListing';
import { articlesByCategory } from '@/data/news';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guides and market insight on buying, building and investing in Nigerian real estate.',
  alternates: { canonical: '/media/blogs' },
};

export default function BlogsPage() {
  const list = articlesByCategory('Blogs');

  return (
    <>
      <PageHero
        eyebrow="Media"
        title="Blog"
        image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2400&auto=format&fit=crop"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Media' },
          { label: 'Blog' },
        ]}
      />
      <ArticleListing articles={list} basePath="/media/blogs" />
    </>
  );
}
