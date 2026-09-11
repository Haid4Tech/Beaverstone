import { HugeiconsIcon } from '@hugeicons/react';
import {
  // Facebook01Icon,
  // YoutubeIcon,
  // Linkedin01Icon,
  WhatsappIcon,
  TiktokIcon,
  InstagramIcon,
} from '@hugeicons/core-free-icons';
import { cn } from '@/lib/utils';
import { contactDetails } from '@/data/contact';

const socials = [
  // { label: 'Facebook', href: '#', icon: Facebook01Icon },
  { label: 'WhatsApp', href: contactDetails.whatsappHref, icon: WhatsappIcon },
  // { label: 'YouTube', href: '#', icon: YoutubeIcon },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@thebeaverstone',
    icon: TiktokIcon,
  },
  // { label: 'LinkedIn', href: '#', icon: Linkedin01Icon },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/thebeaverstone?stkn=MXNzeWx4Z3VyYTA0Ng%3D%3D&utm_source=qr',
    icon: InstagramIcon,
  },
];

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target={s.href.startsWith('#') ? undefined : '_blank'}
            rel={s.href.startsWith('#') ? undefined : 'noopener noreferrer'}
            aria-label={s.label}
            className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
          >
            <HugeiconsIcon icon={s.icon} size={20} strokeWidth={2} />
          </a>
        </li>
      ))}
    </ul>
  );
}
