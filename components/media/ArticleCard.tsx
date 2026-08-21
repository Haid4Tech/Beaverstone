import Link from "next/link";
import ImageReveal from "@/components/animation/ImageReveal";
import Reveal from "@/components/animation/Reveal";
import { articleHref, formatDate, type Article } from "@/data/news";

export default function ArticleCard({
  article,
  index = 0,
}: {
  article: Article;
  index?: number;
}) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <article className="group">
        <Link href={articleHref(article)} className="block">
          <ImageReveal
            src={article.image}
            alt={`${article.title} — placeholder image`}
            className="aspect-[16/9] w-full"
            sizes="(max-width: 1024px) 100vw, 66vw"
            imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        <p className="mt-5 flex flex-wrap items-center gap-x-3 text-[11px] font-medium tracking-widest text-gold uppercase">
          {article.category}
          <span aria-hidden className="h-px w-6 bg-gold/50" />
          <time dateTime={article.date} className="text-body">
            {formatDate(article.date)}
          </time>
        </p>

        <h2 className="font-display mt-2 text-2xl leading-snug text-ink-warm lg:text-3xl">
          <Link
            href={articleHref(article)}
            className="transition-colors hover:text-gold"
          >
            {article.title}
          </Link>
        </h2>

        <p className="mt-3 text-[15px] leading-relaxed text-body">
          {article.excerpt}
        </p>

        <Link
          href={articleHref(article)}
          className="mt-5 inline-flex items-center gap-2 border-b border-gold pb-1 text-[13px] font-medium tracking-wide text-ink-warm transition-colors hover:text-gold"
        >
          Read More <span aria-hidden>&rarr;</span>
        </Link>
      </article>
    </Reveal>
  );
}
