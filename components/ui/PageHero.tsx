import Image from 'next/image';
import Link from 'next/link';

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  image,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  image: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative flex h-[60vh] min-h-[420px] w-full items-end overflow-hidden bg-ink">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 lg:px-12">
        {crumbs && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-white/50"
          >
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {c.href ? (
                  <Link
                    href={c.href}
                    className="transition-colors hover:text-white"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="mb-3 text-[13px] font-medium tracking-[0.3em] text-mist uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-4xl leading-[1.05] font-light text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
