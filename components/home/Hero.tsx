import { Stagger, StaggerItem } from '@/components/animation/Stagger';

const stats = [
  { value: '7,000+', label: 'Lands & Houses Sold' },
  { value: '20+', label: 'Completed Projects' },
  { value: '500+', label: 'Staff Members' },
  { value: '6', label: 'Member Companies' },
];

const socials = [
  {
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.83v1.98h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.6c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V23h-4V8.5z" />
      </svg>
    ),
  },
  {
    label: 'X',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2H21.5l-7.5 8.57L23 22h-7.19l-5.63-6.76L3.51 22H.25l8.02-9.17L1 2h7.36l5.09 6.19L18.244 2Zm-1.26 18h1.8L7.1 4H5.17l11.81 16Z" />
      </svg>
    ),
  },
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
        <span className="[writing-mode:vertical-lr] text-[11px] tracking-[0.25em] uppercase">
          Follow Us
        </span>
        <span className="h-8 w-px bg-white/30" />
        {socials.map((s) => (
          <a
            key={s.label}
            href="#"
            aria-label={s.label}
            className="h-4 w-4 transition-colors hover:text-white"
          >
            {s.icon}
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
