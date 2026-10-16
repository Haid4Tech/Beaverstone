'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { WhatsappIcon } from '@hugeicons/core-free-icons';
import { navigation, isNavGroup } from '@/data/navigation';
import { contactDetails } from '@/data/contact';
import { logo } from '@/data/media';
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const dark = !scrolled;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled
          ? 'bg-white shadow-[0_1px_0_0_theme(colors.line)]'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link href="/">
          <Image
            src={dark ? logo.fullWhite : logo.fullNavy}
            alt="Beaverstone"
            width={1647}
            height={690}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Primary">
          {navigation
            .filter((item) => item.label !== 'Contact Us')
            .map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  isNavGroup(item) && setOpenGroup(item.label)
                }
                onMouseLeave={() => setOpenGroup(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex h-20 items-center px-4 text-[13px] font-medium tracking-wide transition-colors',
                    dark
                      ? 'text-white/70 hover:text-white'
                      : 'text-ink-warm/70 hover:text-ink-warm'
                  )}
                >
                  {item.label}
                </Link>
                {isNavGroup(item) && (
                  <AnimatePresence>
                    {openGroup === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className={cn(
                          'absolute top-full left-0 min-w-[240px] border-t-2 border-ink bg-white py-3 shadow-xl',
                          item.children.length > 5 &&
                            'grid w-[520px] grid-cols-2'
                        )}
                      >
                        {item.children.map((child) => {
                          // Wide dropdowns pin their overview link to the bottom.
                          const footer =
                            item.children.length > 5 &&
                            child.href === item.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                'block px-6 py-2.5 text-[13px] text-ink-warm/70 transition-colors hover:bg-cream hover:text-ink',
                                footer &&
                                  'order-last col-span-2 mt-2 border-t border-line pt-3 font-medium text-ink'
                              )}
                            >
                              {child.label}
                              {footer && ' →'}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={contactDetails.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white transition-opacity hover:opacity-85"
          >
            <HugeiconsIcon icon={WhatsappIcon} size={20} strokeWidth={2} />
          </a>
          <Link
            href="/contact-us"
            className={cn(
              'btn-wipe hidden rounded-sm border px-6 py-2.5 text-[13px] font-medium tracking-wide lg:inline-block',
              dark
                ? 'border-white/40 text-white [--btn-wipe-fill:var(--color-cream)] hover:text-ink'
                : 'border-ink-warm/30 text-ink-warm [--btn-wipe-fill:var(--color-ink)] hover:text-white'
            )}
          >
            Contact Us
          </Link>
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={cn('h-[1.5px] w-6', dark ? 'bg-white' : 'bg-ink-warm')}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className={cn('h-[1.5px] w-6', dark ? 'bg-white' : 'bg-ink-warm')}
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className={cn('h-[1.5px] w-6', dark ? 'bg-white' : 'bg-ink-warm')}
            />
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
