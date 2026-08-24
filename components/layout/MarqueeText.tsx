import { cn } from '@/lib/utils';

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
      <div className="pm-marquee-track flex w-max [transform:translateZ(0)] antialiased will-change-transform [backface-visibility:hidden]">
        {copies.map((i) => (
          <span
            key={i}
            data-text={text}
            className={cn(
              'block pr-[0.28em] leading-none font-medium tracking-[0.02em] whitespace-nowrap uppercase',
              'text-[clamp(3rem,12vw,200px)]',
              variant === 'outline'
                ? 'pm-marquee-outline-layered'
                : 'text-white/10'
            )}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
