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

const stats = [
  { value: '7,000+', label: 'Lands & Houses Sold' },
  { value: '20+', label: 'Completed Projects' },
  { value: '500+', label: 'Staff Members' },
  { value: '6', label: 'Member Companies' },
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

export default function Hero() {
  return (
    <section className="relative flex h-[95vh] min-h-[500px] w-full flex-col justify-end overflow-hidden bg-ink">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero-placeholder.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
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

      <Stagger className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-8 border-t border-white/10 px-6 py-10 lg:grid-cols-4 lg:px-12">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <p className="font-display text-3xl font-light text-white lg:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-[11px] tracking-widest text-white/50 uppercase">
              {stat.label}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
