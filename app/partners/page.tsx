import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/animation/Reveal';
import { Stagger, StaggerItem } from '@/components/animation/Stagger';
import ContactCTA from '@/components/ui/ContactCTA';

export const metadata: Metadata = {
  title: 'Our Trusted Partners',
  description:
    'Meet the reputable industry partners Beaverstone Realty Ltd collaborates with to deliver quality real estate developments.',
};

const partners = [
  { name: 'Nelmond Group Ltd', logo: '/partners/3.webp' },
  { name: 'Nelmond Homes & Properties', logo: '/partners/2.webp' },
  { name: 'Jemehomes', logo: '/partners/4.webp' },
  { name: 'Superior Homes and Properties', logo: '/partners/1.webp' },
  { name: 'Sondheid', logo: '/partners/5.webp' },
  { name: 'Big Uncle', logo: '/partners/6.webp' },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Our Trusted Partners"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Partners' }]}
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-ink uppercase">
                Collaboration
                <span className="h-px w-12 bg-ink" />
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl leading-tight font-light text-ink-warm lg:text-5xl">
                Stronger Together
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-[15px] leading-relaxed text-body lg:pt-10 lg:text-lg">
              At Beaverstone Realty Ltd, we believe that meaningful partnerships
              are essential to delivering exceptional real estate solutions.
              Through collaboration with reputable industry partners, we
              strengthen our capacity to create value, explore new
              opportunities, and deliver quality developments that meet the
              evolving needs of our clients.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="font-display text-2xl font-light text-ink-warm lg:text-3xl">
              Our valued partners include
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {partners.map(({ name, logo }, i) => (
              <StaggerItem
                key={name}
                className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden bg-white p-8 transition-colors duration-500 hover:bg-ink"
              >
                <div className="relative flex items-start justify-between gap-4">
                  <span className="text-[11px] tracking-widest text-body transition-colors duration-500 group-hover:text-mist">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={112}
                    height={112}
                    className="h-28 w-28 rounded-full object-contain"
                  />
                </div>
                <h3 className="relative max-w-[80%] font-display text-2xl leading-snug font-light text-ink-warm transition-colors duration-500 group-hover:text-white">
                  {name}
                </h3>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <p className="mx-auto mt-16 max-w-3xl text-center font-display text-xl leading-relaxed font-light text-ink-warm lg:text-2xl">
              Together, we are committed to fostering strategic relationships
              that promote excellence, innovation, and sustainable growth across
              the real estate sector.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCTA
        title="Become a Partner"
        copy="Interested in collaborating with Beaverstone on land, investment or development opportunities?"
        href="/about-us/partner-with-us"
        label="Partner With Us"
      />
    </>
  );
}
