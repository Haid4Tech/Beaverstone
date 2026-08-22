'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Reveal from '@/components/animation/Reveal';
import { cn } from '@/lib/utils';

const steps = [
  {
    n: '01',
    title: 'Discover',
    copy: 'Browse the portfolio and shortlist the development that fits how you actually want to live or invest.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    n: '02',
    title: 'Consult',
    copy: 'Sit down with an advisor to walk through available units, pricing and the payment structure that suits you.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    n: '03',
    title: 'Reserve',
    copy: 'Hold your preferred unit with a reservation fee while our legal team prepares the purchase documentation.',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    n: '04',
    title: 'Own',
    copy: 'Complete the purchase, receive your title and keys, and take possession of a home built to last.',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop',
  },
];

// Expansion runs on a native CSS transition rather than a JS-driven animation:
// flex-grow relayouts every frame, so keeping it off the main-thread animation
// loop is what makes the hover feel immediate instead of stuttering.
const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]';

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
      <Reveal>
        <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
          How It Works
          <span className="h-px w-12 bg-gold" />
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="max-w-2xl font-display text-3xl leading-tight font-light text-ink-warm lg:text-5xl">
          Your Path to Ownership
        </h2>
      </Reveal>

      {/* Desktop: horizontal expanding accordion */}
      <div className="mt-16 hidden h-[460px] gap-3 lg:flex">
        {steps.map((step, i) => {
          const isActive = i === active;
          return (
            <button
              key={step.n}
              type="button"
              aria-expanded={isActive}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={cn(
                'group relative basis-0 cursor-pointer overflow-hidden bg-ink text-left',
                'transition-[flex-grow] duration-[900ms] motion-reduce:transition-none',
                EASE,
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
                isActive ? 'grow-[6]' : 'grow'
              )}
            >
              <Image
                src={step.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={cn(
                  'object-cover transition-[opacity,transform] duration-[900ms] motion-reduce:transition-none',
                  EASE,
                  isActive ? 'scale-100 opacity-50' : 'scale-105 opacity-25'
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

              <div className="relative flex h-full flex-col p-6">
                <span className="font-display text-3xl text-gold">
                  {step.n}
                </span>

                {/* Collapsed: vertical label. Decorative — the expanded
                    content below is what screen readers announce. */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute bottom-6 left-6 rotate-180 font-display text-xl font-light whitespace-nowrap text-white [writing-mode:vertical-rl]',
                    'transition-opacity duration-300 motion-reduce:transition-none',
                    isActive ? 'opacity-0' : 'opacity-100 delay-300'
                  )}
                >
                  {step.title}
                </span>

                {/* Expanded content is absolutely positioned so the
                    cross-fade never triggers a reflow inside the panel. */}
                <div
                  className={cn(
                    'absolute bottom-6 left-6 w-[420px] max-w-[calc(100vw-8rem)]',
                    'transition-opacity duration-500 motion-reduce:transition-none',
                    isActive ? 'opacity-100 delay-200' : 'opacity-0'
                  )}
                >
                  <h3 className="font-display text-3xl font-light text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {step.copy}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile / tablet: stacked */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:hidden">
        {steps.map((step) => (
          <div key={step.n}>
            <div className="relative aspect-[16/10] overflow-hidden bg-ink">
              <Image
                src={step.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <span className="absolute bottom-4 left-4 font-display text-3xl text-gold">
                {step.n}
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl text-ink-warm">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              {step.copy}
            </p>
          </div>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-line pt-10 sm:flex-row">
          <p className="font-display text-2xl font-light text-ink-warm">
            Be a part of our journey.
          </p>
          <Link
            href="/contact-us"
            className="rounded-sm bg-ink px-8 py-3.5 text-[13px] font-medium tracking-wide text-white transition-colors hover:bg-gold hover:text-ink"
          >
            Get In Touch
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
