import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/animation/Reveal';
import ImageReveal from '@/components/animation/ImageReveal';
import { Stagger, StaggerItem } from '@/components/animation/Stagger';
import Expertise from '@/components/home/Expertise';

export const metadata: Metadata = {
  title: 'About Beaverstone',
  description:
    'Learn about Beaverstone — our target market, vision, mission and values as a luxury real estate group in Nigeria.',
};

const values = [
  {
    letter: 'E',
    title: 'Excellence',
    copy: 'We deliver beyond expectations.',
  },
  {
    letter: 'I',
    title: 'Integrity',
    copy: 'Transparency and honesty in all dealings.',
  },
  {
    letter: 'I',
    title: 'Innovation',
    copy: 'Modern designs and forward-thinking solutions.',
  },
  {
    letter: 'C',
    title: 'Customer-Centricity',
    copy: 'Clients are at the heart of every project.',
  },
  {
    letter: 'Q',
    title: 'Quality',
    copy: 'Commitment to durability and superior standards.',
  },
];

const markets = [
  'High-net-worth individuals and investors',
  'Families seeking premium residential properties',
  'Luxury and upper-mid-segment housing market',
  'Local and diaspora investors',
  'Corporate clients and businesses',
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
              <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-ink uppercase">
                At the Core
                <span className="h-px w-12 bg-ink" />
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl leading-tight font-light text-ink-warm lg:text-5xl">
                BUILD. BEYOND. BETTER
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

      {/* Target Market — intro beside a numbered list, over a full-bleed image */}
      <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
        <Image
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2400&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="relative mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[5fr_7fr] lg:px-12">
          <div>
            <Reveal>
              <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-mist uppercase">
                Target Market
                <span className="h-px w-12 bg-mist" />
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl leading-tight font-light lg:text-5xl">
                Who We Build For
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
                We focus on the luxury and upper-mid market, delivering comfort,
                style, and lasting value.
              </p>
            </Reveal>
          </div>

          <Stagger className="divide-y divide-white/15 border-t border-b border-white/15">
            {markets.map((m, i) => (
              <StaggerItem key={m} className="flex items-baseline gap-6 py-6">
                <span className="w-8 shrink-0 text-[11px] tracking-widest text-mist">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-display text-xl font-light lg:text-2xl">
                  {m}
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
            <p className="text-[13px] font-medium tracking-[0.3em] text-ink uppercase">
              Our Vision
            </p>
            <p className="mt-5 font-display text-2xl leading-snug font-light text-ink-warm lg:text-3xl">
              To revolutionize real estate development through better
              innovation, quality, and timeless architectural excellence.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[13px] font-medium tracking-[0.3em] text-ink uppercase">
              Our Mission
            </p>
            <p className="mt-5 font-display text-2xl leading-snug font-light text-ink-warm lg:text-3xl">
              To design, develop and deliver high-quality real estate solutions
              that blend functionality, luxury, and long-term value with helping
              clients build sustainable wealth through property investments.
            </p>
          </Reveal>
        </div>
      </section>

      <Expertise />

      {/* Our Values — centred, stacked rows with display initials */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal className="text-center">
            <p className="mb-4 flex items-center justify-center gap-3 text-[13px] font-medium tracking-[0.3em] text-ink uppercase">
              <span className="h-px w-12 bg-ink" />
              Our Values
              <span className="h-px w-12 bg-ink" />
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
                  className="w-14 shrink-0 text-center font-display text-5xl font-light text-ink lg:text-6xl"
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
          <p className="mb-4 text-[13px] font-medium tracking-[0.3em] text-ink uppercase">
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
