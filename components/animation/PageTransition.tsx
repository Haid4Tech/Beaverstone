'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname } from 'next/navigation';
import { useContext, useState, type ReactNode } from 'react';

const PANELS = 5;
const DURATION = 0.35;
const STAGGER = 0.04;
const EASE = [0.76, 0, 0.24, 1] as const;

/**
 * Next's `children` is a router outlet that reads the live segment out of
 * context rather than a static tree, so an exiting subtree re-renders showing
 * the page we are navigating *to* — the swap would happen before the curtain
 * ever covers it. Pinning the context value at mount keeps the outgoing page
 * on screen until it is hidden.
 *
 * LayoutRouterContext is a Next internal; this import is the one place a
 * future upgrade would break.
 */
function FrozenRouter({ children }: { children: ReactNode }) {
  // useState (not useRef) so the capture is a pure render-time read.
  const [frozen] = useState(useContext(LayoutRouterContext));
  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

/**
 * Two panel sets sweep downwards in sequence. The outgoing page's `cover`
 * panels drop in from above; the incoming page mounts with its `reveal`
 * panels already covering the screen and drops them out of the bottom.
 * AnimatePresence runs in `mode="wait"`, so the handoff lands while both sets
 * are fully covering and the two halves read as one continuous curtain.
 */
function Panels({ variant }: { variant: 'cover' | 'reveal' }) {
  const cover = variant === 'cover';
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] flex overflow-hidden"
    >
      {Array.from({ length: PANELS }).map((_, i) => (
        <motion.div
          key={i}
          // -mr-px overlaps neighbours so subpixel flex widths cannot leave
          // seams of the page showing through the curtain.
          className="-mr-px h-full flex-1 bg-ink"
          initial={{ y: cover ? '-100%' : '0%' }}
          animate={{ y: cover ? '-100%' : '100%' }}
          exit={cover ? { y: '0%' } : undefined}
          transition={{ duration: DURATION, ease: EASE, delay: i * STAGGER }}
        />
      ))}
    </div>
  );
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  // A curtain is pure motion with nothing to degrade to — skip it entirely
  // rather than let it snap on and off as a colour flash.
  if (reduced) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={pathname}>
        <FrozenRouter>{children}</FrozenRouter>
        <Panels variant="cover" />
        <Panels variant="reveal" />
      </div>
    </AnimatePresence>
  );
}
