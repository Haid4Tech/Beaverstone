import type { Project } from "@/data/projects";

export default function ProjectQuickFacts({ project }: { project: Project }) {
  const items = [
    { label: "Location", value: project.location },
    { label: "Unit Type", value: project.unitTypes[0] },
    { label: "Prices From", value: project.startingPrice.replace(/^From\s*/i, "") },
    { label: "Availability", value: project.availableUnits },
  ];

  return (
    <section className="border-b border-line bg-white">
      <dl className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-8 gap-y-6 px-6 py-8 lg:grid-cols-4 lg:px-12">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="text-[11px] tracking-widest text-body uppercase">
              {item.label}
            </dt>
            <dd className="font-display mt-1.5 text-lg leading-snug text-ink-warm">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
