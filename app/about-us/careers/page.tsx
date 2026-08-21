import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/animation/Reveal";
import { Stagger, StaggerItem } from "@/components/animation/Stagger";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Explore career opportunities across Palton Morgan Holdings' member companies.",
};

const openings = [
  { title: "Site Engineer", team: "Construction", location: "Lagos" },
  { title: "Sales Executive", team: "Brokerage", location: "Lagos" },
  { title: "Quantity Surveyor", team: "Development", location: "Abuja" },
  { title: "Interior Designer", team: "Development", location: "Lagos" },
];

const benefits = [
  { title: "Growth", copy: "Structured career paths across six member companies." },
  { title: "Culture", copy: "A collaborative, detail-driven team building real, lasting work." },
  { title: "Impact", copy: "Direct involvement in projects that shape how people live." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work With Us"
        image="https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=2400&auto=format&fit=crop"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about-us" },
          { label: "Work With Us" },
        ]}
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
            Why Palton Morgan
            <span className="h-px w-12 bg-gold" />
          </p>
        </Reveal>
        <Stagger className="mt-4 grid gap-10 sm:grid-cols-3">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <h3 className="font-display text-xl text-ink-warm">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{b.copy}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="font-display max-w-xl text-3xl font-light leading-tight text-ink-warm lg:text-5xl">
              Current Openings
            </h2>
          </Reveal>

          <Stagger className="mt-12 divide-y divide-line border-t border-b border-line">
            {openings.map((job) => (
              <StaggerItem
                key={job.title}
                className="flex flex-col items-start justify-between gap-3 py-6 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="font-display text-xl text-ink-warm">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-body">
                    {job.team} &middot; {job.location}
                  </p>
                </div>
                <a
                  href="mailto:careers@example.com"
                  className="border-b border-gold pb-1 text-[13px] font-medium tracking-wide text-ink-warm transition-colors hover:text-gold"
                >
                  Apply Now
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
