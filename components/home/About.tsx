import Link from 'next/link';
import Reveal from '@/components/animation/Reveal';
import ImageReveal from '@/components/animation/ImageReveal';

export default function About() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <ImageReveal
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
          alt="Interior of a Palton Morgan residence, placeholder image"
          className="aspect-[4/5] w-full"
        />
        <div>
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
              About Palton Morgan Holdings
              <span className="h-px w-12 bg-gold" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl leading-tight font-light text-ink-warm lg:text-5xl">
              The Preferred <span className="text-gold">Luxury</span> Real
              Estate Brand.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-[15px] leading-relaxed text-body">
              Palton Morgan Holdings brings together six member companies
              spanning development, brokerage, contracting and capital, each
              working toward a single standard of design and delivery.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              From gated residential estates to waterfront towers, every project
              is shaped around the way people actually want to live —
              considered, private, and built to last.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-[13px] font-medium tracking-wide text-ink-warm transition-colors hover:text-gold"
            >
              Learn More About Us <span aria-hidden>&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
