import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/animation/Reveal';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you were looking for could not be found.',
  robots: { index: false, follow: true },
};

const suggestions = [
  { label: 'Projects', href: '/projects' },
  { label: 'About Us', href: '/about-us' },
  { label: 'News', href: '/media/news' },
  { label: 'Contact Us', href: '/contact-us' },
];

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink py-32 text-white">
      <Image
        src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2400&auto=format&fit=crop"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p
            aria-hidden="true"
            className="font-display text-[clamp(7rem,26vw,400px)] leading-[0.85] font-bold text-white"
          >
            404
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 font-display text-3xl font-light lg:text-5xl">
            This page could not be found.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70">
            The page may have been moved, renamed, or never existed. Try a
            search, or pick up from one of the sections below.
          </p>
        </Reveal>

        {/* Plain GET form — reuses the media search, no client JS needed */}
        <Reveal delay={0.3}>
          <form
            action="/media/news"
            role="search"
            className="mt-10 flex w-full max-w-md items-center border-b border-white/25 focus-within:border-mist"
          >
            <label htmlFor="notfound-search" className="sr-only">
              Search the site
            </label>
            <input
              id="notfound-search"
              type="search"
              name="q"
              placeholder="Search&hellip;"
              className="w-full bg-transparent py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 px-2 text-[13px] font-medium tracking-wide text-mist transition-colors hover:text-white"
            >
              Search
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-sm bg-mist px-8 py-3.5 text-[13px] font-medium tracking-wide text-ink transition-colors hover:bg-white"
            >
              Go Home
            </Link>
            <Link
              href="/projects"
              className="rounded-sm border border-white/30 px-8 py-3.5 text-[13px] font-medium tracking-wide text-white btn-wipe [--btn-wipe-fill:var(--color-cream)] hover:text-ink"
            >
              View Projects
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <nav
            aria-label="Suggested pages"
            className="mt-14 border-t border-white/10 pt-8"
          >
            <p className="text-[11px] tracking-widest text-white/40 uppercase">
              Or jump to
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {suggestions.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
