import Link from 'next/link';
import Reveal from '@/components/animation/Reveal';

export default function ContactCTA({
  title = 'Get in Touch',
  copy = 'Have a question about a project, partnership or career opportunity? Our team is ready to help.',
  href = '/contact-us',
  label = 'Contact Us',
}: {
  title?: string;
  copy?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12">
      <Reveal className="flex flex-col items-center gap-6 border border-line px-6 py-16 text-center">
        <h2 className="font-display text-3xl font-light text-ink-warm lg:text-4xl">
          {title}
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-body">{copy}</p>
        <Link
          href={href}
          className="mt-2 rounded-sm bg-ink px-8 py-3.5 text-[13px] font-medium tracking-wide text-white transition-colors hover:bg-gold hover:text-ink"
        >
          {label}
        </Link>
      </Reveal>
    </section>
  );
}
