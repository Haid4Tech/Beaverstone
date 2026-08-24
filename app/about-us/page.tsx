import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/animation/Reveal';
import ImageReveal from '@/components/animation/ImageReveal';
import { Stagger, StaggerItem } from '@/components/animation/Stagger';

export const metadata: Metadata = {
  title: 'About Beaverstone',
  description:
    'Learn about Beaverstone — our history, vision, mission and values as a luxury real estate group in Nigeria.',
};

const values = [
  {
    letter: 'I',
    title: 'Integrity',
    copy: 'Transparent pricing, clear documentation and honest timelines on every transaction, from first enquiry to final title.',
  },
  {
    letter: 'C',
    title: 'Craft',
    copy: 'Specification and detailing are decided early and held to, because the quality of a home is settled long before handover.',
  },
  {
    letter: 'E',
    title: 'Excellence',
    copy: 'One standard of design and delivery across all six member companies, regardless of price point or address.',
  },
];

const journey = [
  {
    year: '2009',
    copy: 'Founded with a single residential development in Lagos.',
  },
  {
    year: '2014',
    copy: 'Expanded into brokerage with the launch of a dedicated sales arm.',
  },
  {
    year: '2018',
    copy: 'Brought construction in-house to control quality end-to-end.',
  },
  {
    year: '2023',
    copy: 'Grew to six member companies spanning development, capital and contracting.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Beaverstone"
        title="About Us"
        image="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2400&auto=format&fit=crop"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      {/* At the Core — asymmetric intro */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
                At the Core
                <span className="h-px w-12 bg-gold" />
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl leading-tight font-light text-ink-warm lg:text-5xl">
                A Group Built on Six Companies, One Standard
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-[15px] leading-relaxed text-body">
                Beaverstone was founded to bring the full real estate value
                chain — development, brokerage, contracting and capital — under
                one roof, with a single standard of design and delivery across
                every business.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-body">
                Today the group operates across Lagos and Abuja, with a
                portfolio spanning gated estates, waterfront towers and serviced
                plots.
              </p>
            </Reveal>
          </div>
          <ImageReveal
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
            alt="Interior of a Beaverstone residence — placeholder image"
            className="aspect-[4/5] w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Our Journey — timeline over a full-bleed image */}
      <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
        <Image
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2400&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
              Our Journey
              <span className="h-px w-12 bg-gold" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-2xl font-display text-3xl leading-tight font-light lg:text-5xl">
              Fifteen Years of Building Forward
            </h2>
          </Reveal>

          <Stagger className="mt-16 grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((j) => (
              <StaggerItem key={j.year}>
                <p className="font-display text-4xl font-light text-gold">
                  {j.year}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {j.copy}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Vision & Mission — centred pair */}
      <section className="mx-auto max-w-[1100px] px-6 py-24 text-center lg:px-12 lg:py-32">
        <div className="grid gap-16 sm:grid-cols-2">
          <Reveal>
            <p className="text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
              Our Vision
            </p>
            <p className="mt-5 font-display text-2xl leading-snug font-light text-ink-warm lg:text-3xl">
              To be Africa&rsquo;s most trusted name in luxury real estate.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
              Our Mission
            </p>
            <p className="mt-5 font-display text-2xl leading-snug font-light text-ink-warm lg:text-3xl">
              To create exceptional living spaces that stand the test of time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Values — centred, stacked rows with display initials */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal className="text-center">
            <p className="mb-4 flex items-center justify-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
              <span className="h-px w-12 bg-gold" />
              Our Values
              <span className="h-px w-12 bg-gold" />
            </p>
            <h2 className="font-display text-3xl leading-tight font-light text-ink-warm lg:text-5xl">
              What We Hold To
            </h2>
          </Reveal>

          <ImageReveal
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2400&auto=format&fit=crop"
            alt="Beaverstone residence detail — placeholder image"
            className="mx-auto mt-14 aspect-[21/9] w-full max-w-[1000px]"
            sizes="(max-width: 1024px) 100vw, 1000px"
          />

          <Stagger className="mx-auto mt-16 max-w-[760px] divide-y divide-line border-t border-b border-line">
            {values.map((v) => (
              <StaggerItem
                key={v.title}
                className="flex items-baseline gap-8 py-8"
              >
                <span
                  aria-hidden="true"
                  className="w-14 shrink-0 text-center font-display text-5xl font-light text-gold lg:text-6xl"
                >
                  {v.letter}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-light text-ink-warm">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {v.copy}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Our Commitment — centred statement */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 text-center lg:px-12 lg:py-32">
        <Reveal>
          <p className="mb-4 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
            Our Commitment
          </p>
          <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight font-light text-ink-warm lg:text-4xl">
            Built to Be Lived In, Not Just Sold
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-[1100px] text-[15px] leading-relaxed text-body">
            Our obligation to a client does not end at handover. We commit to
            clean, registrable title on every unit we sell, to construction
            timelines we are prepared to be held to, and to a standard of finish
            that still reads well a decade after completion. Where something
            falls short, we would rather correct it than explain it away — that
            is the whole of the commitment, and we intend to keep being measured
            against it.
          </p>
        </Reveal>
      </section>
    </>
  );
}
