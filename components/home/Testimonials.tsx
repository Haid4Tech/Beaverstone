'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '@/components/animation/Reveal';
import { Stagger, StaggerItem } from '@/components/animation/Stagger';

const testimonials = [
  {
    quote:
      'From our initial enquiry to the construction updates, Beaverstone maintained clear communication throughout. We appreciate the professionalism and attention given to our investment at Nelmond Metropolis.',
    name: 'Engr. Chinedu Okafor',
    role: 'Homeowner, Roceilli',
    dark: false,
  },
  {
    quote:
      'Gardenia Court offers the kind of luxury, space, and architectural elegance we were looking for. The completed property made our decision much easier.',
    name: 'Mrs. Amina Ibrahim',
    role: 'Homeowner, Gardenia Court',
    dark: true,
  },
  {
    quote:
      'What impressed us most was the clarity of the documentation and the guidance provided throughout the purchase process. Beaverstone made the experience feel structured and professional.',
    name: 'Mr. Tunde Adeyemi',
    role: 'Property Investor, Brooksville',
    dark: false,
  },
  {
    quote:
      'The Eden Crown Estates stands out for its premium location and impressive development concept. We look forward to seeing the project completed to the expected standard.',
    name: 'Mrs. Ngozi Eze',
    role: 'Prospective Homeowner, The Eden Crown Estates',
    dark: false,
  },
  {
    quote:
      'Beaverstone helped us understand the different development stages and pricing options available. Their explanations made it easier to evaluate the property opportunity against our budget.',
    name: 'Mr. Ibrahim Musa',
    role: 'Property Investor, Nelmond Metropolis',
    dark: true,
  },
  {
    quote:
      "The combination of contemporary design, practical layouts, and a focus on quality makes Nelmond Court an attractive residential development. We value the team's professionalism and responsiveness.",
    name: 'Mrs. Blessing Nwankwo',
    role: 'Client, Brooksville',
    dark: false,
  },
];

function StarRow({ dark }: { dark: boolean }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${dark ? 'fill-mist' : 'fill-ink'}`}
        >
          <polygon points="12,1 15.09,8.26 23,9.27 17,14.97 18.18,22.9 12,19.1 5.82,22.9 7,14.97 1,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

function QuoteMark() {
  return (
    <svg width="28" height="24" viewBox="0 0 35 30" className="fill-line">
      <path d="M0 15V30H14.9996V15H4.99991C4.99991 9.48612 9.48589 5.00003 14.9996 5.00003V0C6.72834 0 0 6.7285 0 15Z" />
      <path d="M35.0001 5.00003V0C26.7288 0 20.0005 6.7285 20.0005 15V30H35.0001V15H25.0004C25.0004 9.48612 29.4864 5.00003 35.0001 5.00003Z" />
    </svg>
  );
}

function ScrollHeading() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['30%', '-30%']);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="hidden overflow-hidden lg:block"
    >
      <motion.p
        style={{ x }}
        className="text-[clamp(4rem,11vw,200px)] leading-none font-bold whitespace-nowrap text-ink-warm"
      >
        What Our Residents Say
      </motion.p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-cream py-24 lg:py-32">
      <div className="lg:hidden">
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-ink uppercase">
              Testimonials
              <span className="h-px w-12 bg-ink" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-xl font-display text-3xl leading-tight font-light text-ink-warm">
              What Our Residents Say
            </h2>
          </Reveal>
        </div>
      </div>
      <ScrollHeading />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Stagger
          once={false}
          className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <div
                className={`flex h-full flex-col justify-between rounded-[10px] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.1)] ${
                  t.dark ? 'bg-ink text-white' : 'bg-white text-ink-warm'
                }`}
              >
                <div>
                  <StarRow dark={t.dark} />
                  <p
                    className={`mt-5 text-base leading-relaxed ${
                      t.dark ? 'text-white/70' : 'text-body'
                    }`}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p
                      className={`text-xs tracking-widest uppercase ${
                        t.dark ? 'text-white/50' : 'text-body'
                      }`}
                    >
                      {t.role}
                    </p>
                  </div>
                  <QuoteMark />
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
