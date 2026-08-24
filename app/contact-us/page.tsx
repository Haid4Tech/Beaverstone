import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/animation/Reveal';
import ContactForm from '@/components/contact/ContactForm';
import { contactDetails } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Beaverstone for project enquiries, partnerships and general questions.',
  alternates: { canonical: '/contact-us' },
};

const details = [
  {
    label: 'Email',
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    icon: (
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm0 .5 9 6 9-6" />
    ),
  },
  {
    label: 'Phone',
    value: contactDetails.phone,
    href: `tel:${contactDetails.phoneHref}`,
    icon: (
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
    ),
  },
  {
    label: 'Address',
    value: contactDetails.address,
    icon: (
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Zm0-8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
    ),
  },
  {
    label: 'Office Hours',
    value: contactDetails.hours,
    icon: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3.5 2" />,
  },
];

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Beaverstone',
    email: contactDetails.email,
    telephone: contactDetails.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactDetails.address,
      addressCountry: 'NG',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2400&auto=format&fit=crop"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
            We&rsquo;d Love to Hear From You
            <span className="h-px w-12 bg-gold" />
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-2xl font-display text-3xl leading-tight font-light text-ink-warm lg:text-5xl">
            Call Us Today or Leave a Message
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-24">
          {/* Contact details */}
          <Reveal>
            <h3 className="font-display text-2xl font-light text-ink-warm">
              Catch us here
            </h3>
            <ul className="mt-8 flex flex-col gap-7">
              {details.map((d) => (
                <li key={d.label} className="flex gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 h-6 w-6 shrink-0 text-gold"
                    aria-hidden="true"
                  >
                    {d.icon}
                  </svg>
                  <div>
                    <p className="text-[11px] tracking-widest text-body uppercase">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-1 block text-[15px] text-ink-warm transition-colors hover:text-gold"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[15px] leading-relaxed text-ink-warm">
                        {d.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Full-width map */}
      <section
        aria-label="Office location map"
        className="border-t border-line"
      >
        <div className="aspect-[21/9] w-full lg:aspect-[3/1]">
          <iframe
            title="Map of the Beaverstone office"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              contactDetails.mapQuery
            )}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
        </div>
      </section>
    </>
  );
}
