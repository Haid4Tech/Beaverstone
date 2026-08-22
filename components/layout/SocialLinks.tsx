import { cn } from '@/lib/utils';

// Placeholder hrefs — deliberately not pointing at the real company's
// accounts. Swap for real profile URLs on the real site.
const socials = [
  {
    label: 'Facebook',
    href: '#',
    path: (
      <path d="M14 8.5h2.5V5.5H14c-2 0-3.5 1.5-3.5 3.5v2H8.5v3h2v7h3v-7H16l.5-3h-3v-1.5c0-.6.4-1 1-1Z" />
    ),
  },
  {
    label: 'WhatsApp',
    href: '#',
    path: (
      <>
        <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z" />
        <path d="M8.8 8.4c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2 0 .4-.1.6l-.4.5c-.1.2-.3.3-.1.6a6 6 0 0 0 2.7 2.3c.3.1.5.1.6-.1l.5-.6c.2-.2.3-.2.6-.1l1.5.7c.3.1.4.3.4.5a1.8 1.8 0 0 1-1.8 1.6 7.5 7.5 0 0 1-6.4-6.4c0-.6.2-1.1.5-1.6Z" />
      </>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    path: (
      <>
        <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
        <path d="m10.5 9.5 5 2.5-5 2.5v-5Z" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 10.5V17M7 7.5v.01M11 17v-3.8c0-1 .8-1.7 1.8-1.7s1.7.7 1.7 1.7V17M11 10.5V17" />
      </>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <path d="M17 6.8v.01" />
      </>
    ),
  },
];

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            aria-label={s.label}
            className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-gold hover:text-gold"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              {s.path}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
