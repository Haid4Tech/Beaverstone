import Link from 'next/link';
import Reveal from '@/components/animation/Reveal';
import ImageReveal from '@/components/animation/ImageReveal';

export default function About() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <ImageReveal
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
          alt="Interior of a Beaverstone residence, placeholder image"
          className="aspect-[4/5] w-full"
        />
        <div>
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-ink uppercase">
              About Beaverstone
              <span className="h-px w-12 bg-ink" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl leading-tight font-light text-ink-warm lg:text-5xl">
              The Preferred <span className="text-body">Luxury</span> Real
              Estate Brand.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-[15px] leading-relaxed text-body">
              Beaverstone is a forward-thinking real estate development and
              construction company committed to creating exceptional spaces that
              inspire confidence, comfort, and long-term value. Guided by its
              phillosophy, "Build. Beyond. Better." Beaverstone goes beyond
              constructing buildings- it develops throughtfully designed
              communities and investment opportunities that enhance the way
              people live and grow
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              At Beaverstone, we deliver quality developments through
              transparent transactions, innovative designs, timely project
              delivery, and a customer-first approach — creating lasting value
              you can trust.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              href="/about-us"
              className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-[13px] font-medium tracking-wide text-ink-warm transition-colors hover:text-body"
            >
              Learn More About Us <span aria-hidden>&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
