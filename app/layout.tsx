import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { MotionConfig } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/animation/PageTransition';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Luxury Real Estate Company in Lagos & Abuja | Palton Morgan',
    template: '%s | Palton Morgan Holdings',
  },
  description:
    'Palton Morgan Holdings is a luxury real estate company in Nigeria, creating exceptional living spaces across Lagos and Abuja.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    type: 'website',
    siteName: 'Palton Morgan Holdings',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white text-ink-warm">
        <MotionConfig reducedMotion="user">
          <Header />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
