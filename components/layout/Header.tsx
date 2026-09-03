'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navigation, isNavGroup } from '@/data/navigation';
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
        <Link href="/" className="font-display text-xl tracking-wide">
          <span className={dark ? 'text-white' : 'text-ink-warm'}>
            Beaverstone
          </span>
          <span
            className={cn(
              'ml-2 align-middle font-sans text-[10px] font-medium tracking-[0.3em]',
              dark ? 'text-mist' : 'text-body'
            )}
          >
            HOLDINGS
          </span>
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
                        className="absolute top-full left-0 min-w-[240px] border-t-2 border-ink bg-white py-3 shadow-xl"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-6 py-2.5 text-[13px] text-ink-warm/70 transition-colors hover:bg-cream hover:text-ink"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
        </nav>

        <div className="flex items-center gap-4">
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
