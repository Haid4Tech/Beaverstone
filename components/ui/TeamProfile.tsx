'use client';

import Image from 'next/image';
import { useRef } from 'react';
import TeamCard from '@/components/ui/TeamCard';
import type { TeamMember } from '@/data/team';

// Card that opens the member's full bio in a native <dialog>, which gives us
// Esc-to-close, focus trapping and the top layer without extra libraries.
export default function TeamProfile({
  member,
  index = 0,
}: {
  member: TeamMember;
  index?: number;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const close = () => dialog.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        aria-haspopup="dialog"
        className="group block w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4"
      >
        <TeamCard member={member} index={index} />
        <span className="mt-4 inline-flex items-center gap-2 border-b border-ink pb-1 text-[12px] font-medium tracking-widest text-ink-warm uppercase transition-colors group-hover:text-body">
          View Profile <span aria-hidden>+</span>
        </span>
      </button>

      <dialog
        ref={dialog}
        aria-label={`${member.name} profile`}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto h-[min(90vh,680px)] w-[min(1000px,calc(100vw-2rem))] overflow-y-auto overscroll-contain bg-white p-0 text-left backdrop:bg-ink/75 backdrop:backdrop-blur-sm open:animate-[profile-in_0.4s_cubic-bezier(0.22,1,0.36,1)] md:overflow-hidden"
      >
        {/* Zero-height sticky bar keeps the close button visible while the
            dialog (mobile) or the text column (desktop) scrolls. */}
        <div className="sticky top-0 z-10 flex h-0 justify-end">
          <button
            type="button"
            onClick={close}
            aria-label="Close profile"
            className="m-3 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/90 text-2xl leading-none text-body shadow-sm transition-colors hover:text-ink"
          >
            &times;
          </button>
        </div>

        <div className="grid md:h-full md:grid-cols-[2fr_3fr] md:grid-rows-[minmax(0,1fr)]">
          <div className="relative aspect-[4/5] bg-ink md:aspect-auto md:h-full">
            <Image
              src={member.image}
              alt={`Portrait of ${member.name}`}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-top"
            />
          </div>

          <div className="overscroll-contain p-8 md:h-full md:overflow-y-auto lg:p-12">
            <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-body uppercase">
              {member.role}
              <span className="h-px w-10 bg-body" />
            </p>
            <h2 className="mt-3 pr-8 font-display text-3xl leading-tight font-light text-ink-warm lg:text-4xl">
              {member.name}
            </h2>

            <div className="mt-8 space-y-4">
              {member.bio?.map((p) => (
                <p key={p} className="text-[15px] leading-relaxed text-body">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
