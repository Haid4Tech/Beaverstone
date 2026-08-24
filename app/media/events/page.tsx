import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/animation/Reveal';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ContactCTA from '@/components/ui/ContactCTA';
import { events, formatDate } from '@/data/news';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Company events and celebrations across the Beaverstone group.',
  alternates: { canonical: '/media/events' },
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="Events"
        image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2400&auto=format&fit=crop"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Media' },
          { label: 'Events' },
        ]}
      />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {events.map((event, i) => (
          <section
            key={event.slug}
            aria-labelledby={`event-${event.slug}`}
            className={`py-20 lg:py-24 ${i > 0 ? 'border-t border-line' : ''}`}
          >
            <Reveal>
              <p className="text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
                <time dateTime={event.date}>{formatDate(event.date)}</time>
              </p>
              <h2
                id={`event-${event.slug}`}
                className="mt-3 max-w-2xl font-display text-3xl leading-tight font-light text-ink-warm lg:text-4xl"
              >
                {event.title}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-body">
                {event.description}
              </p>
            </Reveal>

            <div className="mt-10">
              <ProjectGallery images={event.images} projectName={event.title} />
            </div>
          </section>
        ))}
      </div>

      <ContactCTA
        title="Work With Us"
        copy="We are always interested in people who care about how things get built. See what is open across the group."
        href="/about-us/careers"
        label="View Openings"
      />
    </>
  );
}
