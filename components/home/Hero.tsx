import { Stagger, StaggerItem } from '@/components/animation/Stagger';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  InstagramIcon,
  TiktokIcon,
  WhatsappIcon,
  Linkedin01Icon,
  NewTwitterIcon,
} from '@hugeicons/core-free-icons';
import { contactDetails } from '@/data/contact';
import Image from 'next/image';
import { projects } from '@/data/projects';

const stats = [
  { value: '50+', label: 'Residential units in development' },
  { value: '7+', label: 'Strategic development locations' },
  { value: '₦11bn+', label: 'Development portfolio value' },
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/thebeaverstone?stkn=MXNzeWx4Z3VyYTA0Ng%3D%3D&utm_source=qr',
    icon: InstagramIcon,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@thebeaverstone',
    icon: TiktokIcon,
  },
  {
    label: 'WhatsApp',
    href: contactDetails.whatsappHref,
    icon: WhatsappIcon,
  },
  // { label: 'LinkedIn', href: '#', icon: Linkedin01Icon },
  // { label: 'X', href: '#', icon: NewTwitterIcon },
];

// One image per project, deduped so projects sharing a photo only show once.
const slides = [...new Map(projects.map((p) => [p.heroImage, p])).values()];

// Pure-CSS crossfade: every slide runs the same keyframes, offset by its index.
const SLIDE = 6; // seconds each image is fully visible
const FADE = 1.5; // seconds of crossfade
const total = slides.length * SLIDE;
const pct = (s: number) => ((s / total) * 100).toFixed(2);
const css = `
@keyframes hero-fade {
  0% { opacity: 0; transform: scale(1.08); }
  ${pct(FADE)}% { opacity: 1; }
  ${pct(SLIDE)}% { opacity: 1; }
  ${pct(SLIDE + FADE)}% { opacity: 0; transform: scale(1); }
  100% { opacity: 0; }
}
.hero-slide { animation: hero-fade linear infinite backwards; }
@media (prefers-reduced-motion: reduce) { .hero-slide { animation: none; } }
`;

export default function Hero() {
  return (
    <section className="relative flex h-[95vh] min-h-[500px] w-full flex-col justify-end overflow-hidden bg-ink">
      <style>{css}</style>
      {slides.map((project, i) => (
        <Image
          key={project.slug}
          src={project.heroImage}
          alt={i === 0 ? `${project.name}, ${project.location}` : ''}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`hero-slide object-cover ${i === 0 ? '' : 'opacity-0'}`}
          // Start one fade early so the first image is already fully visible on load.
          style={{
            animationDuration: `${total}s`,
            animationDelay: `${i * SLIDE - FADE}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />

      <div className="absolute top-1/2 right-6 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 text-white/60 lg:right-12 lg:flex">
        <span className="text-[11px] tracking-[0.25em] uppercase [writing-mode:vertical-lr]">
          Follow Us
        </span>
        <span className="h-8 w-px bg-white/30" />
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="transition-colors hover:text-white"
          >
            <HugeiconsIcon icon={s.icon} size={20} strokeWidth={2} />
          </a>
        ))}
      </div>

      <div className="relative z-10 w-full border-t border-white/10 bg-ink/90 backdrop-blur-sm">
        <Stagger className="mx-auto grid max-w-[1400px] divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-12">
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="py-5 sm:px-8 sm:py-8 sm:first:pl-0 lg:py-10"
            >
              <p className="font-display text-3xl font-light text-white lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] tracking-widest text-white/60 uppercase">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
