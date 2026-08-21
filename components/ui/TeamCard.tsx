import ImageReveal from "@/components/animation/ImageReveal";
import Reveal from "@/components/animation/Reveal";
import type { TeamMember } from "@/data/team";

export default function TeamCard({
  member,
  index = 0,
}: {
  member: TeamMember;
  index?: number;
}) {
  return (
    <Reveal delay={index * 0.06}>
      <div className="group">
        <ImageReveal
          src={member.image}
          alt={`${member.name} — placeholder portrait`}
          className="aspect-[3/4] w-full grayscale transition-[filter] duration-500 group-hover:grayscale-0"
        />
        <div className="mt-4">
          <h3 className="font-display text-lg text-ink-warm">{member.name}</h3>
          <p className="mt-1 text-[13px] tracking-wide text-gold">{member.role}</p>
          {member.bio && (
            <p className="mt-2 text-sm leading-relaxed text-body">{member.bio}</p>
          )}
        </div>
      </div>
    </Reveal>
  );
}
