import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ProjectCard from '@/components/projects/ProjectCard';
import ContactCTA from '@/components/ui/ContactCTA';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore the Beaverstone portfolio of luxury residential developments across Lagos and Abuja.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Luxury Real Estate Projects by Beaverstone"
        image={projects[0].heroImage}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <ContactCTA
        title="Not Sure Where to Start?"
        copy="Tell us your budget and preferred location, and we will point you to the developments worth viewing."
        label="Speak to an Advisor"
      />
    </>
  );
}
