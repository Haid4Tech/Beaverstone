import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/animation/Reveal';
import { getJob, jobs } from '@/data/careers';

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata(
  props: PageProps<'/about-us/careers/[slug]'>
): Promise<Metadata> {
  const { slug } = await props.params;
  const job = getJob(slug);
  if (!job) return {};

  return {
    title: `${job.title} | Careers`,
    description: job.summary[0],
  };
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-[15px] leading-relaxed text-body"
        >
          <span
            aria-hidden
            className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-body"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl font-light text-ink-warm lg:text-3xl">
      {children}
    </h2>
  );
}

export default async function JobPage(
  props: PageProps<'/about-us/careers/[slug]'>
) {
  const { slug } = await props.params;
  const job = getJob(slug);
  if (!job) notFound();

  const details = [
    { label: 'Company', value: job.company },
    { label: 'Location', value: job.location },
    { label: 'Department', value: job.department },
    { label: 'Reports To', value: job.reportsTo },
  ];

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={job.title}
        image="https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=2400&auto=format&fit=crop"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Work With Us', href: '/about-us/careers' },
          { label: job.title },
        ]}
      />

      <section className="border-b border-line bg-white">
        <dl className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-8 gap-y-6 px-6 py-8 lg:grid-cols-4 lg:px-12">
          {details.map((d) => (
            <div key={d.label}>
              <dt className="text-[11px] tracking-widest text-body uppercase">
                {d.label}
              </dt>
              <dd className="mt-1.5 font-display text-lg leading-snug text-ink-warm">
                {d.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <article className="mx-auto max-w-[900px] space-y-16 px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <Heading>About Beaverstone</Heading>
          <p className="mt-5 text-[15px] leading-relaxed text-body">
            Beaverstone Realty Ltd is a real estate development company focused
            on delivering thoughtfully designed residential properties,
            strategic property investments, and quality construction. We combine
            architectural excellence, functionality, and long-term value to
            create distinctive real estate opportunities.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-body">
            Our philosophy is simple: Build. Beyond. Better.
          </p>
        </Reveal>

        <Reveal>
          <Heading>Job Summary</Heading>
          {job.summary.map((p) => (
            <p key={p} className="mt-5 text-[15px] leading-relaxed text-body">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal>
          <Heading>Key Responsibilities</Heading>
          <div className="mt-8 space-y-10">
            {job.responsibilities.map((group, i) => (
              <div key={group.heading}>
                <h3 className="font-display text-xl text-ink-warm">
                  <span className="mr-3 text-[13px] tracking-widest text-body">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {group.heading}
                </h3>
                <Bullets items={group.items} />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <Heading>Requirements &amp; Qualifications</Heading>
          <Bullets items={job.requirements} />
        </Reveal>

        <Reveal>
          <Heading>Key Performance Indicators</Heading>
          <p className="mt-5 text-[15px] leading-relaxed text-body">
            Performance will be evaluated based on:
          </p>
          <Bullets items={job.kpis} />
        </Reveal>

        <Reveal>
          <Heading>Compensation</Heading>
          <p className="mt-5 text-[15px] leading-relaxed text-body">
            {job.compensation}
          </p>
        </Reveal>

        <Reveal>
          <div className="bg-cream p-8 lg:p-12">
            <Heading>How to Apply</Heading>
            <p className="mt-5 text-[15px] leading-relaxed text-body">
              {job.applyCopy}
            </p>
            <a
              href={`mailto:${job.applyEmail}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
              className="btn-wipe mt-8 inline-block rounded-sm bg-ink px-8 py-3.5 text-[13px] font-medium tracking-wide text-white hover:text-ink"
            >
              Apply via {job.applyEmail}
            </a>
          </div>
        </Reveal>
      </article>
    </>
  );
}
