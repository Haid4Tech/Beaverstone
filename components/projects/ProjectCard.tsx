import Link from 'next/link';
import ImageReveal from '@/components/animation/ImageReveal';
import Reveal from '@/components/animation/Reveal';
import { projectHref, type Project } from '@/data/projects';

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <Link href={projectHref(project)} className="group block">
        <div className="relative">
          <ImageReveal
            src={project.thumbImage}
            alt={`${project.name}, ${project.location} — placeholder image`}
            className="aspect-[4/3] w-full"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {project.status === 'Currently Selling' && (
            <span className="absolute top-4 left-4 z-20 bg-mist px-3 py-1.5 text-[11px] font-medium tracking-widest text-ink uppercase">
              {project.status}
            </span>
          )}
        </div>
        <h3 className="mt-5 font-display text-2xl text-ink-warm transition-colors group-hover:text-body">
          {project.name}
        </h3>
        <p className="mt-1 text-[13px] tracking-wide text-body">
          {project.location}
        </p>
      </Link>
    </Reveal>
  );
}
