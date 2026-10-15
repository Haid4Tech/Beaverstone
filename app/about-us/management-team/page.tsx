import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import TeamProfile from '@/components/ui/TeamProfile';
import ContactCTA from '@/components/ui/ContactCTA';
import { managementTeam } from '@/data/team';

export const metadata: Metadata = {
  title: 'Management Team',
  description:
    'Meet the Management Team running day-to-day operations across Beaverstone.',
};

export default function ManagementTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Management Team"
        image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2400&auto=format&fit=crop"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about-us' },
          { label: 'Management Team' },
        ]}
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {managementTeam.map((member, i) => (
            <TeamProfile key={member.name} member={member} index={i} />
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
