import Link from 'next/link';
import SocialLinks from './SocialLinks';
import MarqueeText from './MarqueeText';
import { navigation, isNavGroup } from '@/data/navigation';
import { contactDetails } from '@/data/contact';

const memberCompanies = navigation.find((n) => n.label === 'Member Companies');

// Column-major so the two rendered columns read down, matching the reference.
const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Projects', href: '/projects' },
  { label: 'Work With Us', href: '/about-us/careers' },
  { label: 'Partner With Us', href: '/about-us/partner-with-us' },
  { label: 'Contact', href: '/contact-us' },
  { label: 'Blog', href: '/media/blogs' },
  { label: 'News', href: '/media/news' },
  { label: 'Events', href: '/media/events' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      {/* Stay Informed */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-6 py-14 lg:flex-row lg:items-center lg:px-12">
          <div>
            <h2 className="font-display text-3xl font-light text-white lg:text-4xl">
              Stay <span className="text-gold">Informed</span>
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed">
              New releases, project milestones and market insight, straight to
              your inbox.
            </p>
          </div>

          <form className="flex w-full max-w-md items-center border-b border-white/25 focus-within:border-gold">
            <label htmlFor="footer-email" className="sr-only">
              Your email address
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="Your Email Address"
              className="w-full bg-transparent py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 px-2 text-[13px] font-medium tracking-wide whitespace-nowrap text-gold transition-colors hover:text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main columns */}
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 lg:grid-cols-[1.3fr_1.4fr_1fr_1.1fr] lg:px-12">
        <div>
          <Link href="/" className="font-display text-2xl text-white">
            Palton Morgan
            <span className="ml-2 align-middle font-sans text-[10px] font-medium tracking-[0.3em] text-gold">
              HOLDINGS
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            A luxury real estate group creating exceptional living spaces across
            Lagos and Abuja.
          </p>
          <SocialLinks className="mt-7" />
        </div>

        <div>
          <h2 className="mb-5 text-[13px] font-medium tracking-widest text-white uppercase">
            Quick Links
          </h2>
          <ul className="grid grid-flow-col grid-cols-2 grid-rows-5 gap-x-8 gap-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-[13px] font-medium tracking-widest text-white uppercase">
            Subsidiaries
          </h2>
          <ul className="flex flex-col gap-3 text-sm">
            {memberCompanies &&
              isNavGroup(memberCompanies) &&
              memberCompanies.children.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-[13px] font-medium tracking-widest text-white uppercase">
            Catch us here
          </h2>
          <address className="flex flex-col gap-3 text-sm not-italic">
            <p className="leading-relaxed">{contactDetails.address}</p>
            <a
              href={`mailto:${contactDetails.email}`}
              className="transition-colors hover:text-gold"
            >
              {contactDetails.email}
            </a>
            <a
              href={`tel:${contactDetails.phoneHref}`}
              className="transition-colors hover:text-gold"
            >
              {contactDetails.phone}
            </a>
          </address>
        </div>
      </div>

      {/* Drifting wordmark */}
      <MarqueeText text="Palton Morgan Holdings" className="py-2" />

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-5 px-6 py-6 text-xs text-white/40 sm:flex-row lg:px-12">
          <p>
            Copyright &copy; Palton Morgan Holdings {new Date().getFullYear()}
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
