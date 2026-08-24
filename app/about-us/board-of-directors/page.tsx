import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import TeamCard from '@/components/ui/TeamCard';
import ContactCTA from '@/components/ui/ContactCTA';
import { boardOfDirectors } from '@/data/team';

export const metadata: Metadata = {
  title: 'Board of Directors',
  description:
    'Meet the Board of Directors guiding strategy and governance at Beaverstone.',
};

export default function BoardOfDirectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Board of Directors"
        image="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2400&auto=format&fit=crop"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about-us' },
          { label: 'Board of Directors' },
        ]}
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {boardOfDirectors.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
