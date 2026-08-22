// Article and event content below is PLACEHOLDER written for this build.
// Category structure (News / Blogs / Events) mirrors the real site's media section.

export type MediaCategory = 'News' | 'Blogs';

export type Article = {
  slug: string;
  category: MediaCategory;
  title: string;
  excerpt: string;
  body: string[];
  date: string;
  author: string;
  image: string;
};

export type MediaEvent = {
  slug: string;
  title: string;
  date: string;
  description: string;
  images: string[];
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

const A = {
  award: '1541976590-713941681591',
  market: '1450101499163-c8848c66ca85',
  tower: '1600607688969-a5bfcd646154',
  site: '1600585152220-90363fe7e115',
  interior: '1600585154340-be6161a56a0c',
  hills: '1600607687920-4e2a09cf159d',
  water: '1600585154363-67eb9e2e2099',
  estate: '1600566752355-35792bedcfea',
  villa: '1600585154526-990dced4db0d',
  lobby: '1600566753086-00f18fb6b3ea',
  p1: '1560250097-0b93528c311a',
  p2: '1573497019940-1c28c88b4f3e',
  p3: '1556157382-97eda2d62296',
  p4: '1580489944761-15a19d654956',
  p5: '1519085360753-af0119f7cbe7',
  p6: '1519345182560-3f2917c472ef',
};

export const articles: Article[] = [
  {
    slug: 'real-estate-company-of-the-year',
    category: 'News',
    title: 'Palton Morgan Named Real Estate Company of the Year',
    excerpt:
      "The group has been recognised as Real Estate Company of the Year at this year's industry awards, citing consistency of delivery across its portfolio.",
    body: [
      "The group has been recognised as Real Estate Company of the Year at this year's industry awards, with judges citing consistency of delivery across the portfolio rather than any single scheme.",
      'The award reflects work across all six member companies — from land acquisition and design through to construction and handover — and the shared specification standard that runs between them.',
      'Leadership used the announcement to credit site teams and project managers, noting that awards follow build quality rather than the other way round.',
    ],
    date: '2026-07-22',
    author: 'Palton Morgan',
    image: u(A.award),
  },
  {
    slug: 'paramount-twin-towers-construction-update',
    category: 'News',
    title: 'Paramount Twin Towers Tops Out at the 13th Floor',
    excerpt:
      'Structural works at Paramount Twin Towers have reached the 13th floor, keeping the Oniru development on programme for its scheduled handover.',
    body: [
      'Structural works at Paramount Twin Towers have reached the 13th floor, keeping the Oniru development on programme for its scheduled handover.',
      'With the frame nearing completion, site teams are moving into facade installation and the first phase of mechanical and electrical fit-out.',
      'Buyers registered on the project will receive the next milestone update, including revised access arrangements for site visits, later in the quarter.',
    ],
    date: '2026-07-21',
    author: 'Palton Morgan',
    image: u(A.tower),
  },
  {
    slug: 'africa-international-housing-show',
    category: 'News',
    title: 'Palton Morgan Exhibits at the Africa Housing Show, Abuja',
    excerpt:
      "The group presented its Abuja portfolio at this year's Africa International Housing Show, with a focus on the Katampe developments.",
    body: [
      "The group presented its Abuja portfolio at this year's Africa International Housing Show, with a focus on the Katampe developments.",
      'Visitors to the stand were able to review floor plans, specification schedules and payment structures with advisors on hand throughout the week.',
      'The exhibition remains one of the main points of contact between developers and prospective buyers across the region.',
    ],
    date: '2026-06-18',
    author: 'Palton Morgan',
    image: u(A.site),
  },
  {
    slug: 'kadars-gate-roofing-milestone',
    category: 'News',
    title: 'Kadars Gate Reaches Roofing Stage',
    excerpt:
      'All residential blocks at Kadars Gate have reached roofing stage, moving the Victoria Island development into its finishing phase.',
    body: [
      'All residential blocks at Kadars Gate have reached roofing stage, moving the Victoria Island development into its finishing phase.',
      'Attention now turns to facade cladding and internal partitioning, ahead of services installation later in the year.',
    ],
    date: '2026-05-30',
    author: 'Palton Morgan',
    image: u(A.interior),
  },
  {
    slug: 'understanding-governors-consent',
    category: 'Blogs',
    title: "What Governor's Consent Means for Your Purchase",
    excerpt:
      "A short guide to Governor's Consent — what it is, why it matters, and what every buyer should confirm before completing a purchase in Lagos.",
    body: [
      "Governor's Consent is one of the most important — and most misunderstood — steps in a Lagos property transaction.",
      'In practice it means the transfer of an existing title from one party to another has been formally approved by the state, giving the buyer a clean, registrable interest in the land.',
      "Before completing, ask for sight of the title document, confirm the property's survey coordinates, and check that any outstanding consent application is already in progress rather than merely intended.",
    ],
    date: '2026-05-12',
    author: 'Palton Morgan',
    image: u(A.market),
  },
  {
    slug: 'choosing-between-plots-and-finished-homes',
    category: 'Blogs',
    title: 'Plots or Finished Homes: Which Suits You?',
    excerpt:
      'Buying a serviced plot and building to your own brief is a different proposition to purchasing a completed unit. Here is how the two compare.',
    body: [
      'Buying a serviced plot and building to your own brief is a different proposition to purchasing a completed unit, and the right answer depends mostly on time and appetite for management.',
      'A plot gives you control over layout, specification and phasing of spend, but it puts design, contracting and supervision on your side of the table.',
      'A finished home removes that burden and gives you a fixed cost and date, at the price of accepting decisions somebody else has already made.',
    ],
    date: '2026-04-24',
    author: 'Palton Morgan',
    image: u(A.estate),
  },
  {
    slug: 'what-to-check-on-a-site-visit',
    category: 'Blogs',
    title: 'Five Things Worth Checking on Any Site Visit',
    excerpt:
      'A site visit tells you more than a brochure ever will — provided you know what to look at once you are past the show unit.',
    body: [
      'A site visit tells you more than a brochure ever will, provided you know what to look at once you are past the show unit.',
      'Look at drainage and how the site sheds water, the finish quality in circulation areas rather than the show flat, the route in during peak traffic, the power and water provision, and the state of neighbouring plots.',
      'None of these are difficult to assess, and together they say more about how a development will age than any specification sheet.',
    ],
    date: '2026-03-19',
    author: 'Palton Morgan',
    image: u(A.villa),
  },
  {
    slug: 'scholars-graduate',
    category: 'Blogs',
    title: 'Sponsored Scholars Complete Secondary Education',
    excerpt:
      "Students supported through the group's education programme have completed their secondary schooling, marking the end of a multi-year sponsorship.",
    body: [
      "Students supported through the group's education programme have completed their secondary schooling, marking the end of a multi-year sponsorship.",
      'The programme covers tuition and materials from enrolment through to graduation, and continues with a new intake this academic year.',
    ],
    date: '2026-02-14',
    author: 'Palton Morgan',
    image: u(A.lobby),
  },
];

export const events: MediaEvent[] = [
  {
    slug: 'end-of-year-party',
    title: 'Palton Morgan Unwinds — End of Year Party',
    date: '2025-12-19',
    description:
      'The whole group came together to close out the year, with teams from every member company in one room.',
    images: [A.p1, A.p2, A.p3, A.p4, A.p5, A.p6].map((i) => u(i, 1200)),
  },
  {
    slug: 'quantum-leap-retreat',
    title: 'The Quantum Leap Retreat',
    date: '2025-10-08',
    description:
      'Two days away from the office to set priorities for the year ahead and work through them as one group.',
    images: [A.p3, A.p5, A.p2, A.p6, A.p1, A.p4].map((i) => u(i, 1200)),
  },
  {
    slug: 'international-womens-celebration',
    title: "International Women's Day Celebration",
    date: '2025-03-08',
    description:
      "A morning of talks and recognition for the women across the group's design, sales, legal and construction teams.",
    images: [A.p2, A.p4, A.p6, A.p1, A.p3, A.p5].map((i) => u(i, 1200)),
  },
  {
    slug: 'team-bonding',
    title: 'Team Bonding Afternoon',
    date: '2025-08-15',
    description:
      'An afternoon out of the office, mixing teams that usually only meet across a project schedule.',
    images: [A.p5, A.p1, A.p4, A.p2, A.p6, A.p3].map((i) => u(i, 1200)),
  },
  {
    slug: 'independence-celebration',
    title: 'Independence Day Celebration',
    date: '2025-10-01',
    description:
      "Marking Independence Day together across the group's Lagos and Abuja offices.",
    images: [A.p6, A.p3, A.p1, A.p5, A.p4, A.p2].map((i) => u(i, 1200)),
  },
  {
    slug: 'headquarters-opening',
    title: 'Opening of the Palton Morgan Headquarters',
    date: '2025-06-05',
    description:
      "The official opening of the group's headquarters, bringing all member companies under one roof.",
    images: [A.lobby, A.interior, A.water, A.hills, A.villa, A.site].map((i) =>
      u(i, 1200)
    ),
  },
];

export const categorySlug: Record<MediaCategory, string> = {
  News: 'news',
  Blogs: 'blogs',
};

export function articleHref(article: Article) {
  return `/media/${categorySlug[article.category]}/${article.slug}`;
}

export function articlesByCategory(category: MediaCategory) {
  return articles
    .filter((a) => a.category === category)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function recentArticles(count = 4) {
  return [...articles]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}

export function getArticle(category: MediaCategory, slug: string) {
  return articles.find((a) => a.category === category && a.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
