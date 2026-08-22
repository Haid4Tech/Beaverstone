import Image from 'next/image';
import Reveal from '@/components/animation/Reveal';
import { Stagger, StaggerItem } from '@/components/animation/Stagger';

const expertise = [
  {
    title: 'Development',
    copy: 'End-to-end delivery of residential and mixed-use developments, from land acquisition to handover.',
    icon: <path d="M4 21V10l8-6 8 6v11M9 21v-7h6v7" />,
  },
  {
    title: 'Brokerage',
    copy: 'A dedicated sales arm connecting buyers and investors with verified, titled property across Nigeria.',
    icon: (
      <path d="M3 10h18M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4M4 10v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V10" />
    ),
  },
  {
    title: 'Contracting',
    copy: 'In-house construction and project management, keeping quality and timelines under one roof.',
    icon: <path d="m14.5 3.5 6 6L9 21H3v-6zM12 6l6 6" />,
  },
  {
    title: 'Capital',
    copy: 'Structured financing and investment vehicles for individuals and institutions entering real estate.',
    icon: <path d="M3 17V9l9-6 9 6v8M3 21h18M7 21v-6h4v6" />,
  },
];

export default function Expertise() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
      <Image
        src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2400&auto=format&fit=crop"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-15"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
            What We Do
            <span className="h-px w-12 bg-gold" />
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-2xl font-display text-4xl leading-[1.1] font-light lg:text-7xl">
            Expertise
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-px overflow-hidden border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, i) => (
            <StaggerItem
              key={item.title}
              className="border-white/10 bg-ink p-8 sm:border-l lg:border-l"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-9 w-9 text-gold"
                aria-hidden="true"
              >
                {item.icon}
              </svg>
              <span className="mt-6 block text-[11px] tracking-widest text-white/30">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-2xl font-light">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {item.copy}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
