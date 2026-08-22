import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/animation/Reveal';
import { Stagger, StaggerItem } from '@/components/animation/Stagger';

export const metadata: Metadata = {
  title: 'Partner With Us',
  description:
    'Explore land, joint-venture and investment partnership opportunities with Palton Morgan Holdings.',
};

const partnerships = [
  {
    title: 'Land Partnerships',
    copy: 'Bring land to the table and we handle planning, development and delivery under a joint venture structure.',
  },
  {
    title: 'Investment Partnerships',
    copy: 'Co-invest in a project pipeline with structured returns and full transparency into construction milestones.',
  },
  {
    title: 'Contractor & Supplier Partnerships',
    copy: 'Join our vetted network of contractors and suppliers delivering on active developments.',
  },
];

export default function PartnerWithUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Work With Us"
        title="Partner With Palton Morgan"
        image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2400&auto=format&fit=crop"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about-us' },
          { label: 'Partner With Us' },
        ]}
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
            Partnership Opportunities
            <span className="h-px w-12 bg-gold" />
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-2xl font-display text-3xl leading-tight font-light text-ink-warm lg:text-5xl">
            Three Ways to Build With Us
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-px overflow-hidden border border-line sm:grid-cols-3">
          {partnerships.map((p, i) => (
            <StaggerItem
              key={p.title}
              className="border-line bg-white p-8 sm:border-l first:sm:border-l-0"
            >
              <span className="font-display text-3xl text-gold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-xl text-ink-warm">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{p.copy}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[720px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-center font-display text-3xl leading-tight font-light text-ink-warm lg:text-4xl">
              Start a Conversation
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <form className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="pw-name"
                  className="mb-2 block text-[13px] text-body"
                >
                  Full Name
                </label>
                <input
                  id="pw-name"
                  name="name"
                  required
                  className="w-full border-b border-line bg-transparent py-2 text-sm focus:border-gold focus:outline-none"
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="pw-email"
                  className="mb-2 block text-[13px] text-body"
                >
                  Email Address
                </label>
                <input
                  id="pw-email"
                  type="email"
                  name="email"
                  required
                  className="w-full border-b border-line bg-transparent py-2 text-sm focus:border-gold focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="pw-type"
                  className="mb-2 block text-[13px] text-body"
                >
                  Partnership Type
                </label>
                <select
                  id="pw-type"
                  name="type"
                  className="w-full border-b border-line bg-transparent py-2 text-sm focus:border-gold focus:outline-none"
                >
                  <option>Land Partnership</option>
                  <option>Investment Partnership</option>
                  <option>Contractor / Supplier</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="pw-message"
                  className="mb-2 block text-[13px] text-body"
                >
                  Message
                </label>
                <textarea
                  id="pw-message"
                  name="message"
                  rows={4}
                  required
                  className="w-full border-b border-line bg-transparent py-2 text-sm focus:border-gold focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="justify-self-start rounded-sm bg-ink px-8 py-3.5 text-[13px] font-medium tracking-wide text-white transition-colors hover:bg-gold hover:text-ink sm:col-span-2"
              >
                Submit Enquiry
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
