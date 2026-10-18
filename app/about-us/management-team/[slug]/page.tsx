import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import PageHero from '@/components/ui/PageHero';
import ContactCTA from '@/components/ui/ContactCTA';
import { managementTeam, memberSlug } from '@/data/team';

const getMember = (slug: string) =>
  managementTeam.find((m) => memberSlug(m) === slug);

export function generateStaticParams() {
  return managementTeam.map((m) => ({ slug: memberSlug(m) }));
}

export async function generateMetadata(
  props: PageProps<'/about-us/management-team/[slug]'>
): Promise<Metadata> {
  const member = getMember((await props.params).slug);
  if (!member) return {};
  return {
    title: `${member.name} | ${member.role}`,
    description: member.bio?.[0],
  };
}

export default async function TeamMemberPage(
  props: PageProps<'/about-us/management-team/[slug]'>
) {
  const member = getMember((await props.params).slug);
  if (!member) notFound();

  return (
    <>
      <PageHero
        eyebrow={member.role}
        title={member.name}
        image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2400&auto=format&fit=crop"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about-us' },
          { label: 'Management Team', href: '/about-us/management-team' },
          { label: member.name },
        ]}
      />

      <section className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-[2fr_3fr] lg:gap-20 lg:px-12 lg:py-32">
        <div className="relative aspect-[4/5] bg-ink md:sticky md:top-32 md:self-start">
          <Image
            src={member.image}
            alt={`Portrait of ${member.name}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-top"
          />
        </div>

        <div>
          <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-body uppercase">
            {member.role}
            <span className="h-px w-10 bg-body" />
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-light text-ink-warm lg:text-4xl">
            {member.name}
          </h2>
          <div className="mt-8 space-y-4">
            {member.bio?.map((p) => (
              <p key={p} className="text-[15px] leading-relaxed text-body">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
