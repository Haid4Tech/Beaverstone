import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/animation/Reveal';
import { Stagger, StaggerItem } from '@/components/animation/Stagger';
import { jobs } from '@/data/careers';

export const metadata: Metadata = {
  title: 'Work With Us',
  description:
    "Explore career opportunities across Beaverstone' member companies.",
};

const benefits = [
  {
    title: 'Growth',
    copy: 'Structured career paths across six member companies.',
  },
  {
    title: 'Culture',
    copy: 'A collaborative, detail-driven team building real, lasting work.',
  },
  {
    title: 'Impact',
    copy: 'Direct involvement in projects that shape how people live.',
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work With Us"
        image="https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=2400&auto=format&fit=crop"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about-us' },
          { label: 'Work With Us' },
        ]}
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-ink uppercase">
            Why Beaverstone
            <span className="h-px w-12 bg-ink" />
          </p>
        </Reveal>
        <Stagger className="mt-4 grid gap-10 sm:grid-cols-3">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <h3 className="font-display text-xl text-ink-warm">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{b.copy}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl leading-tight font-light text-ink-warm lg:text-5xl">
              Current Openings
            </h2>
          </Reveal>

          <Stagger className="mt-12 divide-y divide-line border-t border-b border-line">
            {jobs.map((job) => (
              <StaggerItem key={job.slug}>
                <Link
                  href={`/about-us/careers/${job.slug}`}
                  className="group flex flex-col items-start justify-between gap-3 py-6 sm:flex-row sm:items-center"
                >
                  <div>
                    <h3 className="font-display text-xl text-ink-warm transition-colors group-hover:text-body">
                      {job.title}
                    </h3>
                    <p className="mt-1 text-sm text-body">
                      {job.department} &middot; {job.location}
                    </p>
                  </div>
                  <span className="border-b border-ink pb-1 text-[13px] font-medium tracking-wide text-ink-warm transition-colors group-hover:text-body">
                    View Role <span aria-hidden>&rarr;</span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
