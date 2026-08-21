import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/animation/Reveal";
import ImageReveal from "@/components/animation/ImageReveal";
import { Stagger, StaggerItem } from "@/components/animation/Stagger";
import ProjectQuickFacts from "@/components/projects/ProjectQuickFacts";
import ProjectGallery from "@/components/projects/ProjectGallery";
import RegisterInterest from "@/components/projects/RegisterInterest";
import AmenityIcon from "@/components/projects/AmenityIcon";
import ProjectCard from "@/components/projects/ProjectCard";
import { getProject, otherProjects, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ company: p.company.slug, slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[company]/[slug]">
): Promise<Metadata> {
  const { company, slug } = await props.params;
  const project = getProject(company, slug);
  if (!project) return {};

  return {
    title: `${project.name} | ${project.category} in ${project.location}`,
    description: project.summary,
    alternates: { canonical: `/projects/${company}/${slug}` },
    openGraph: {
      title: project.name,
      description: project.summary,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectDetailPage(
  props: PageProps<"/projects/[company]/[slug]">
) {
  const { company, slug } = await props.params;
  const project = getProject(company, slug);
  if (!project) notFound();

  const related = otherProjects(project);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: project.name,
    description: project.summary,
    image: project.heroImage,
    address: {
      "@type": "PostalAddress",
      addressLocality: project.location,
      addressCountry: "NG",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow={project.company.name}
        title={project.name}
        image={project.heroImage}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.name },
        ]}
      />

      <ProjectQuickFacts project={project} />

      {/* About */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
                About {project.name}
                <span className="h-px w-12 bg-gold" />
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl font-light leading-tight text-ink-warm lg:text-4xl">
                {project.tagline}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              {project.description.map((para) => (
                <p key={para} className="mt-5 text-[15px] leading-relaxed text-body">
                  {para}
                </p>
              ))}
            </Reveal>
          </div>
          <ImageReveal
            src={project.gallery[0]}
            alt={`${project.name} — placeholder image`}
            className="aspect-[4/5] w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Project Summary */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
              Project Summary
              <span className="h-px w-12 bg-gold" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display max-w-2xl text-3xl font-light leading-tight text-ink-warm lg:text-5xl">
              The Specification
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-16 lg:grid-cols-2">
            <Stagger className="divide-y divide-line border-t border-b border-line">
              {project.facts.map((fact) => (
                <StaggerItem
                  key={fact.label}
                  className="flex items-baseline justify-between gap-6 py-4"
                >
                  <span className="text-[13px] tracking-widest text-body uppercase">
                    {fact.label}
                  </span>
                  <span className="font-display text-lg text-ink-warm">
                    {fact.value}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.15}>
              <h3 className="font-display text-xl text-ink-warm">
                Available Unit Types
              </h3>
              <ul className="mt-5 space-y-3">
                {project.unitTypes.map((unit) => (
                  <li
                    key={unit}
                    className="flex items-start gap-3 text-[15px] text-body"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold"
                    />
                    {unit}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[13px] tracking-widest text-ink-warm uppercase">
                {project.startingPrice}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Location */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ImageReveal
            src={project.gallery[1]}
            alt={`${project.location} — placeholder image`}
            className="aspect-[4/3] w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div>
            <Reveal>
              <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
                The Location
                <span className="h-px w-12 bg-gold" />
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl font-light leading-tight text-ink-warm lg:text-4xl">
                {project.location}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-[15px] leading-relaxed text-body">
                {project.neighbourhood.copy}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features & Amenities */}
      <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
        <Image
          src={project.gallery[2]}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
              Features &amp; Amenities
              <span className="h-px w-12 bg-gold" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display max-w-2xl text-3xl font-light leading-tight lg:text-5xl">
              Everything On Site
            </h2>
          </Reveal>

          <Stagger className="mt-14 grid gap-px overflow-hidden border border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {project.amenities.map((amenity) => (
              <StaggerItem
                key={amenity}
                className="flex items-center gap-4 border-white/10 bg-ink p-6 sm:border-l"
              >
                <AmenityIcon label={amenity} />
                <span className="text-sm text-white/80">{amenity}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Neighbourhood map */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
            Neighbourhood
            <span className="h-px w-12 bg-gold" />
          </p>
          <h2 className="font-display text-3xl font-light leading-tight text-ink-warm lg:text-4xl">
            {project.neighbourhood.name}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 aspect-[21/9] w-full overflow-hidden border border-line">
            <iframe
              title={`Map of ${project.neighbourhood.name}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                project.mapQuery
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">
              Gallery
              <span className="h-px w-12 bg-gold" />
            </p>
            <h2 className="font-display text-3xl font-light leading-tight text-ink-warm lg:text-5xl">
              Inside {project.name}
            </h2>
          </Reveal>
          <div className="mt-14">
            <ProjectGallery
              images={project.gallery}
              projectName={project.name}
            />
          </div>
        </div>
      </section>

      <RegisterInterest
        projectName={project.name}
        unitTypes={project.unitTypes}
      />

      {/* Other Projects */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <h2 className="font-display mb-14 text-3xl font-light leading-tight text-ink-warm lg:text-4xl">
            Other Projects
          </h2>
        </Reveal>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
