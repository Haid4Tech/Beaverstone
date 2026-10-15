import Image from 'next/image';
import Reveal from '@/components/animation/Reveal';
import { Stagger, StaggerItem } from '@/components/animation/Stagger';

const expertise = [
  {
    title: 'Architecture & Construction',
    copy: 'We provide innovative architectural solutions and premium construction services, combining thoughtful design, technical precision, and superior craftsmanship to deliver durable, functional, and aesthetically refined structures that meet modern standards and exceed client expectations.',
    icon: <path d="M2 18h20M4 18a8 8 0 0 1 16 0M12 6v5M8.5 8v3M15.5 8v3" />,
  },
  {
    title: 'Residential Development',
    copy: 'We develop thoughtfully planned residential communities that blend comfort, security, and modern living, creating exceptional homes and sustainable investment opportunities with lasting value for homeowners and investors.',
    icon: <path d="M3 11 12 3l9 8M5 9.5V21h14V9.5M10 21v-6h4v6" />,
  },
  {
    title: 'Landscape & Interior Design',
    copy: 'We craft sophisticated interior spaces and beautifully landscaped environments that harmonise functionality, aesthetics, and comfort, elevating residential and commercial spaces through thoughtful design and refined finishes.',
    icon: <path d="M12 22v-6M7 16h10l-3-5h2l-4-7-4 7h2z" />,
  },
  {
    title: 'Real Estate Investment Advisory',
    copy: 'We provide strategic real estate advisory services, identifying promising investment opportunities and equipping clients with market insights and professional guidance to make informed property decisions and pursue sustainable returns.',
    icon: <path d="M3 3v18h18M7 15l4-4 3 3 5-6M15 8h4v4" />,
  },
  {
    title: 'Commercial Development',
    copy: 'We develop strategically located commercial properties designed to drive business growth, maximise investment potential, and contribute to sustainable urban development through innovative planning and quality construction.',
    icon: <path d="M5 21V4h9v17M14 9h5v12M3 21h18M8 8h3M8 12h3M8 16h3" />,
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
          <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-mist uppercase">
            What We Do
            <span className="h-px w-12 bg-mist" />
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-2xl font-display text-4xl leading-[1.1] font-light lg:text-7xl">
            Expertise
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-px overflow-hidden border border-white/10 sm:grid-cols-2 lg:grid-cols-3">
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
                className="h-9 w-9 text-mist"
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
