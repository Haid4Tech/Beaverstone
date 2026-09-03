import Link from 'next/link';
import { projects } from '@/data/projects';
import Reveal from '@/components/animation/Reveal';
import ShowcaseCard from '@/components/projects/ShowcaseCard';

// Asymmetric editorial layout: wide/narrow pair, single centred feature, wide/narrow pair.
const layout = [
  { span: 'lg:col-span-7', ratio: 'aspect-[5/3]', offset: '' },
  {
    span: 'lg:col-span-4 lg:col-start-9',
    ratio: 'aspect-[16/9]',
    offset: 'lg:mt-16',
  },
  {
    span: 'lg:col-span-6 lg:col-start-4',
    ratio: 'aspect-[3/2]',
    offset: 'lg:mt-8',
  },
  { span: 'lg:col-span-7', ratio: 'aspect-[16/9]', offset: '' },
  {
    span: 'lg:col-span-4 lg:col-start-9',
    ratio: 'aspect-[3/2]',
    offset: 'lg:mt-16',
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-ink uppercase">
                Our Projects
                <span className="h-px w-12 bg-ink" />
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="max-w-xl font-display text-3xl leading-tight font-light text-ink-warm lg:text-5xl">
                A Portfolio Built for High-End Living
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border-b border-ink pb-1 text-[13px] font-medium tracking-wide text-ink-warm transition-colors hover:text-body"
            >
              View All Projects <span aria-hidden>&rarr;</span>
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-x-8 gap-y-16 lg:grid-cols-12">
          {projects.slice(0, layout.length).map((project, i) => {
            const l = layout[i];
            return (
              <div key={project.slug} className={`${l.span} ${l.offset}`}>
                <ShowcaseCard project={project} ratio={l.ratio} index={i} />
              </div>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-20 flex justify-center">
            <Link
              href="/projects"
              className="rounded-sm bg-ink px-8 py-3.5 text-[13px] font-medium tracking-wide text-white btn-wipe hover:text-ink"
            >
              See More Projects
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
