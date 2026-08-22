import { cn } from '@/lib/utils';

/**
 * Infinite horizontal wordmark marquee.
 *
 * Decorative by design: the text repeats content already present as real
 * headings/links, so the whole strip is hidden from assistive tech.
 */
export default function MarqueeText({
  text,
  variant = 'outline',
  durationSeconds = 15,
  className,
}: {
  text: string;
  variant?: 'outline' | 'solid';
  durationSeconds?: number;
  className?: string;
}) {
  // Two copies so the -50% loop point lands seamlessly on the second.
  const copies = [0, 1];

  return (
    <div
      aria-hidden="true"
      className={cn('w-full overflow-hidden', className)}
      style={
        {
          '--pm-marquee-duration': `${durationSeconds}s`,
        } as React.CSSProperties
      }
    >
      <div className="pm-marquee-track flex w-max">
        {copies.map((i) => (
          <span
            key={i}
            className={cn(
              'block pr-[0.28em] leading-none font-medium tracking-[0.02em] whitespace-nowrap uppercase',
              'text-[clamp(3rem,12vw,200px)]',
              variant === 'outline' ? 'pm-marquee-outline' : 'text-white/10'
            )}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
