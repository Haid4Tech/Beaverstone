import Link from 'next/link';
import TeamCard from '@/components/ui/TeamCard';
import { memberSlug, type TeamMember } from '@/data/team';

// Card linking to the member's full profile page.
export default function TeamProfile({
  member,
  index = 0,
}: {
  member: TeamMember;
  index?: number;
}) {
  return (
    <Link
      href={`/about-us/management-team/${memberSlug(member)}`}
      className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4"
    >
      <TeamCard member={member} index={index} />
      <span className="mt-4 inline-flex items-center gap-2 border-b border-ink pb-1 text-[12px] font-medium tracking-widest text-ink-warm uppercase transition-colors group-hover:text-body">
        View Profile <span aria-hidden>&rarr;</span>
      </span>
    </Link>
  );
}
