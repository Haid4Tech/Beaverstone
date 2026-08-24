export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio?: string;
};

// Placeholder names/photos — not the real Beaverstone board or management team.
export const boardOfDirectors: TeamMember[] = [
  {
    name: 'Adebayo Coker',
    role: 'Chairman, Board of Directors',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    bio: 'Over two decades of experience across real estate development and finance in West Africa.',
  },
  {
    name: 'Ngozi Falade',
    role: 'Vice Chair, Board of Directors',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    bio: "Brings a background in corporate law and structured finance to the group's board.",
  },
  {
    name: 'Emeka Osayande',
    role: 'Non-Executive Director',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop',
    bio: "Advises on strategy and governance across the group's member companies.",
  },
  {
    name: 'Folake Adeyemi',
    role: 'Non-Executive Director',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: 'Specialises in urban planning policy and sustainable development.',
  },
];

export const managementTeam: TeamMember[] = [
  {
    name: 'Chukwuemeka Nwosu',
    role: 'Group Managing Director',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    bio: 'Leads strategy and day-to-day operations across all member companies.',
  },
  {
    name: 'Amara Eze',
    role: 'Chief Financial Officer',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    bio: 'Oversees financial planning, reporting and capital structuring for the group.',
  },
  {
    name: 'Segun Balogun',
    role: 'Head of Development',
    image:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop',
    bio: 'Manages the development pipeline from land acquisition through delivery.',
  },
  {
    name: 'Bimpe Okonkwo',
    role: 'Head of Sales & Marketing',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: 'Leads client relations, brand and go-to-market for every project launch.',
  },
  {
    name: 'Tunde Fashola',
    role: 'Head of Construction',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop',
    bio: 'Directs on-site delivery, quality control and contractor management.',
  },
  {
    name: 'Halima Suleiman',
    role: 'Head of Legal & Compliance',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: 'Oversees title documentation, regulatory compliance and contracts.',
  },
];
