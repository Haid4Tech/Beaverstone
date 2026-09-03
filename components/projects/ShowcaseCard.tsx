import Link from 'next/link';
import ImageReveal from '@/components/animation/ImageReveal';
import Reveal from '@/components/animation/Reveal';
import { projectHref, type Project } from '@/data/projects';

export default function ShowcaseCard({
  project,
  ratio,
  index = 0,
}: {
  project: Project;
  ratio: string;
  index?: number;
}) {
  return (
    <Reveal delay={index * 0.05}>
      <Link href={projectHref(project)} className="group block">
        <div className="relative">
          <ImageReveal
            src={project.thumbImage}
            alt={`${project.name}, ${project.location} — placeholder image`}
            className={`w-full ${ratio}`}
            sizes="(max-width: 1024px) 100vw, 50vw"
            imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {project.status === 'Currently Selling' && (
            <span className="absolute top-4 left-4 z-20 bg-mist px-3 py-1.5 text-[11px] font-medium tracking-widest text-ink uppercase">
              {project.status}
            </span>
          )}
        </div>

        <div className="mt-5">
          <p className="text-[11px] font-medium tracking-widest text-body uppercase">
            {project.location}
          </p>
          <h3 className="mt-1.5 font-display text-2xl text-ink-warm transition-colors group-hover:text-body lg:text-3xl">
            {project.name}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-body">
            {project.tagline}
          </p>

          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
            {project.unitTypes.map((unit) => (
              <li
                key={unit}
                className="flex items-center gap-2 text-[13px] text-body"
              >
                <span aria-hidden className="h-1 w-1 rounded-full bg-body" />
                {unit}
              </li>
            ))}
          </ul>

          <p className="mt-4 text-[13px] font-medium tracking-widest text-ink-warm uppercase">
            {project.startingPrice}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
