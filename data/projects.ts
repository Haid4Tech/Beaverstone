import { roceilli, brooksville, beavertonHeights, video } from './media';

export type ProjectStatus =
  'Currently Selling' | 'Ongoing' | 'Completed' | 'Coming Soon';

export type Project = {
  slug: string;
  company: { slug: string; name: string };
  name: string;
  location: string;
  status: ProjectStatus;
  category: string;
  tagline: string;
  summary: string;
  description: string[];
  startingPrice: string;
  availableUnits: string;
  unitTypes: string[];
  heroImage: string;
  thumbImage: string;
  gallery: string[];
  progressVideo?: string;
  amenities: string[];
  facts: { label: string; value: string }[];
  neighbourhood: { name: string; copy: string };
  mapQuery: string;
};

const beaverstone = { slug: 'beaverstone', name: 'Beaverstone' };

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

const IMG = {
  kadars: '1600585154340-be6161a56a0c',
  rock: '1600607687920-4e2a09cf159d',
  l5: '1600585154363-67eb9e2e2099',
  paramount: '1600607688969-a5bfcd646154',
  meadows: '1600566752355-35792bedcfea',
  cerulean: '1600585152220-90363fe7e115',
  skyvilla: '1600566753086-00f18fb6b3ea',
  claren: '1600585154526-990dced4db0d',
  resort: '1600566753151-384129cf4e3e',
  shonny: '1600585153490-76fb20a32601',
  extraA: '1600607687939-ce8a6c25118c',
  extraB: '1600566752229-250ed79470f8',
};

export const projects: Project[] = [
  {
    slug: 'roceilli',
    company: beaverstone,
    name: 'Roceilli',
    location: 'Grace City Estate (Phase 1), Dakwa District, Abuja',
    status: 'Ongoing',
    category: 'Luxury Duplexes',
    tagline: 'Elegance, comfort and lasting value.',
    summary:
      'An exclusive collection of six luxury 5-bedroom duplexes in Grace City Estate, Dakwa, Abuja.',
    description: [
      'Introducing Roceilli by Beaverstone, an exclusive collection of luxury 5-bedroom duplexes thoughtfully designed for discerning homeowners and investors seeking elegance, comfort, and lasting value. Set within a secure, well-planned community, Roceilli blends contemporary architecture with premium infrastructure to deliver an exceptional living experience.',
      'Located within Grace City Estate (Phase 1) in the rapidly growing Dakwa District of Abuja, Roceilli offers residents the perfect balance of tranquility and convenience. Its strategic location provides easy access to major road networks, business districts, and essential lifestyle amenities, making it an ideal address for modern living.',
      'Each residence sits on 500 square metres of land and is meticulously crafted to offer spacious interiors, refined finishes, and functional layouts that cater to both family living and sophisticated lifestyles. With only six exclusive units, Roceilli provides residents with privacy, exclusivity, and a strong sense of community.',
      "More than just a residential development, Roceilli is a lifestyle destination where quality, security, and comfort come together. It offers a rare opportunity to own a prestigious home and a valuable long-term investment in one of Abuja's fastest-growing locations.",
    ],
    startingPrice: 'From ₦960,000,000',
    availableUnits: '6 Available Units',
    unitTypes: ['5 Bedroom Duplexes'],
    heroImage: roceilli.exteriorGate,
    thumbImage: roceilli.exteriorGate,
    gallery: [
      roceilli.livingRoom,
      roceilli.kitchen,
      roceilli.sideView,
      roceilli.bedroom,
      roceilli.dining,
      roceilli.entrance,
      roceilli.homefront,
      roceilli.aerialView,
      roceilli.exteriorGate,
    ],
    amenities: [
      '24/7 Security',
      '24/7 Electricity supply',
      'Childrens playground',
      'Shopping plaza',
      'School',
      'Filling station (Phase 2)',
      '1 ensuite boys quarter',
      '2 living rooms',
      '5 spacious bedrooms',
      'Large Patios',
      '500 sqm plot size',
      'Exclusive community of only 6 luxury duplexes',
    ],
    facts: [
      { label: 'Project Type', value: 'Luxury Duplexes' },
      { label: 'Plot Size', value: '500 sqm' },
      { label: 'Total Units', value: '6' },
      { label: 'Project Status', value: 'Under Construction' },
      { label: 'Completion', value: 'Q4 2027' },
      { label: 'Land Title', value: "Governor's Consent" },
    ],
    neighbourhood: {
      name: 'Dakwa, Abuja',
      copy: 'Grace City Estate (Phase 1) sits in the rapidly growing Dakwa District, with easy access to major road networks, business districts and essential lifestyle amenities.',
    },
    mapQuery: 'Grace City Estate Phase 1, Dakwa, Abuja, Nigeria',
  },
  {
    slug: 'brooksville',
    company: beaverstone,
    name: 'Brooksville',
    location: 'Hutu Exclusive Phase 2, Lugbe, Airport Road, Abuja',
    status: 'Currently Selling',
    category: 'Sky Villas',
    tagline: 'The privacy of a villa, carried into the air.',
    summary: 'Full-floor sky villas on Airport Road, Lugbe, Abuja.',
    description: [
      'Skyvilla gives each residence an entire floor, so arrival, living and sleeping areas belong to one household alone.',
      'Private lift lobbies open directly into each home, removing shared corridors altogether.',
    ],
    startingPrice: 'From ₦1,750,000,000',
    availableUnits: '8 Available Units',
    unitTypes: ['4 Bedroom Full-Floor Villas', 'Duplex Penthouse'],
    heroImage: brooksville.siteGateway,
    thumbImage: brooksville.siteGateway,
    gallery: [
      brooksville.sunsetPortrait,
      brooksville.sunsetLandscape,
      brooksville.sunsetLandscapeBranded,
      brooksville.siteGateway,
    ],
    progressVideo: video.brooksvilleProgress,
    amenities: [
      'Green Areas',
      'Hiking Trails',
      'Science Museums',
      'Love Garden',
      'Football Pitch',
      'Basketball Court',
      'Water Park',
      'Life Size Chess Pavilion',
      'Religious Centres',
    ],
    facts: [
      { label: 'Project Type', value: 'Full-Floor Sky Villas' },
      { label: 'Floors', value: '9' },
      { label: 'Total Units', value: '8' },
      { label: 'Project Status', value: 'Currently Selling' },
      { label: 'Completion', value: 'Q2 2027' },
      { label: 'Land Title', value: "Governor's Consent" },
    ],
    neighbourhood: {
      name: 'Lugbe, Abuja',
      copy: 'Hutu Exclusive Phase 2 sits along Airport Road in Lugbe, a fast-developing district close to the Nnamdi Azikiwe International Airport.',
    },
    mapQuery: 'Hutu Exclusive Phase 2, Lugbe, Airport Road, Abuja, Nigeria',
  },
  {
    slug: 'beaverton-heights',
    company: beaverstone,
    name: 'Beaverton Heights',
    location: '21 Boskel Road, Port Harcourt, Rivers State',
    status: 'Currently Selling',
    category: 'Terraces',
    tagline: 'A gated terrace community, thoughtfully designed.',
    summary: 'A gated terrace estate on Boskel Road, Port Harcourt.',
    description: [
      'Beaverton Heights brings six terrace homes together behind a single gated entrance, with a fitness centre, playground and sports courts within the estate.',
      'Full specification details for this project are still being finalised.',
    ],
    startingPrice: 'From ₦155,700,000',
    availableUnits: '6 Available Units',
    unitTypes: ['Middle Unit Terrace', 'Corner Unit Terrace'],
    heroImage: beavertonHeights.gateway,
    thumbImage: beavertonHeights.gateway,
    gallery: [
      beavertonHeights.streetDusk,
      beavertonHeights.aerialDay,
      beavertonHeights.streetRowDusk,
      beavertonHeights.facadeAngle,
      beavertonHeights.aerialTopDown,
      beavertonHeights.gymCentre,
      beavertonHeights.rowDusk,
      beavertonHeights.gatewayAlt,
      beavertonHeights.gateway,
    ],
    amenities: [
      'Fitness Centre',
      'Playground',
      'Table Tennis Court',
      'Basketball Court',
      '24/7 Security',
      '24/7 Water',
    ],
    facts: [
      { label: 'Project Type', value: 'Terrace Homes' },
      { label: 'Total Units', value: '6' },
      { label: 'Middle Unit Price', value: '₦155,700,000' },
      { label: 'Corner Unit Price', value: '₦165,000,000' },
      { label: 'Project Status', value: 'Currently Selling' },
      { label: 'Land Title', value: 'To be confirmed' },
    ],
    neighbourhood: {
      name: 'Port Harcourt',
      copy: 'Neighbourhood details for this location are still being finalised.',
    },
    mapQuery: '21 Boskel Road, Port Harcourt, Rivers State, Nigeria',
  },
];

export function projectHref(project: Project) {
  return `/projects/${project.company.slug}/${project.slug}`;
}

export function getProject(company: string, slug: string) {
  return projects.find((p) => p.slug === slug && p.company.slug === company);
}

const liveSlugs = ['roceilli', 'brooksville'];

export function otherProjects(current: Project, count = 3) {
  return projects
    .filter((p) => p.slug !== current.slug && liveSlugs.includes(p.slug))
    .slice(0, count);
}
