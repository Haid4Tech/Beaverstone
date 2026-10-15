import {
  roceilli,
  brooksville,
  beavertonHeights,
  edenCrown,
  nelmond,
  gardenia,
  nelmondCourt,
  video,
} from './media';

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
    startingPrice: 'From ₦90,000,000',
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
      { label: 'Carcass Price', value: '₦90,000,000' },
      { label: 'Pre-finished Price', value: '₦150,000,000' },
      { label: 'Finished Price', value: '₦180,000,000' },
      { label: 'Project Status', value: 'Under Construction' },
      { label: 'Completion', value: 'Q2 2027' },
      { label: 'Land Title', value: 'Right of Occupancy' },
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
    name: 'The Brooksville Estate',
    location: 'Hutu Exclusive Phase 2, Lugbe, Airport Road, Abuja',
    status: 'Currently Selling',
    category: 'Land & Terraced Duplexes',
    tagline: 'Own Your Land. Build Your Future.',
    summary:
      'Estate land and three-bedroom terraced duplexes in Hutu Exclusive Phase 2, along Airport Road, Lugbe, Abuja.',
    description: [
      'Discover The Brooksville Estate, a flexible land and residential development in Hutu Exclusive Phase 2, along Airport Road, Lugbe, Abuja. Designed to accommodate different property ownership goals, Brooksville offers buyers the choice between securing estate land for future development and acquiring a three-bedroom terraced duplex.',
      'Whether you are taking your first step into real estate, planning to build a home on your own terms, or seeking a residential property in Abuja, Brooksville presents an accessible entry point into property ownership. With clearly defined options for both land and housing, you can choose the path that best suits your plans and budget.',
      'The development features 150 sqm estate plots alongside three-bedroom terraced duplexes arranged across three floors. The property is offered with a Certificate of Occupancy (C of O), providing a formal title framework for ownership.',
      'With prices starting from ₦22,150,000 for land and ₦150,000,000 for a duplex, The Brooksville Estate makes room for different ambitions, from land banking to creating a place to call home. Your property journey. Your choice. Your future.',
    ],
    startingPrice: 'From ₦22,150,000',
    availableUnits: '12 Available Units',
    unitTypes: ['3 Bedroom Terraced Duplexes', '150 sqm Estate Land'],
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
      { label: 'Project Type', value: 'Hybrid' },
      { label: 'Floors', value: '3' },
      { label: 'Total Units', value: '12' },
      { label: 'Land Price', value: '₦22,150,000' },
      { label: 'Duplex Price', value: '₦150,000,000' },
      { label: 'Project Status', value: 'Currently Selling' },
      { label: 'Completion', value: 'Q2 2027' },
      { label: 'Land Title', value: 'Certificate of Occupancy' },
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
  {
    slug: 'beaverstone-nok-residence',
    company: beaverstone,
    name: 'Beaverstone Nok Residence',
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
    startingPrice: 'From ₦90,000,000',
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
      { label: 'Carcass Price', value: '₦90,000,000' },
      { label: 'Pre-finished Price', value: '₦150,000,000' },
      { label: 'Finished Price', value: '₦180,000,000' },
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
    slug: 'eden-crown-estates',
    company: beaverstone,
    name: 'The Eden Crown Estates',
    location: 'Katampe Extension, Abuja',
    status: 'Ongoing',
    category: 'Terraced Duplexes',
    tagline: 'Refined Living. Elevated by Design.',
    summary:
      'An exclusive collection of 10 four-bedroom terraced duplexes in Katampe Extension, Abuja.',
    description: [
      "Introducing The Eden Crown Estates, an exclusive collection of 10 four-bedroom terraced duplexes in Katampe Extension, Abuja. Designed across three floors, each residence presents an opportunity to experience contemporary urban living in one of Abuja's sought-after residential districts.",
      'With a focus on modern architecture, spacious living, and enduring value, The Eden Crown Estates brings together the appeal of a private residential setting and the convenience of city living. Whether you are seeking a distinguished family home or a strategic real estate investment, this development offers an opportunity to own a thoughtfully positioned property in the Nigerian capital.',
      'Currently under construction, The Eden Crown Estates is scheduled for completion in Q3 2027 and is offered with a Certificate of Occupancy (C of O).',
    ],
    startingPrice: 'From ₦370,000,000',
    availableUnits: '10 Available Units',
    unitTypes: ['4 Bedroom Terraced Duplexes'],
    heroImage: edenCrown.gateway,
    thumbImage: edenCrown.gateway,
    gallery: [
      edenCrown.streetView,
      edenCrown.aerialView,
      edenCrown.courtyard,
      edenCrown.interiors,
      edenCrown.courtyardLounge,
      edenCrown.gateway,
    ],
    amenities: [],
    facts: [
      { label: 'Project Type', value: 'Terraced Duplexes' },
      { label: 'Floors', value: '3' },
      { label: 'Total Units', value: '10' },
      { label: 'Starting Price', value: '₦370,000,000' },
      { label: 'Project Status', value: 'Under Construction' },
      { label: 'Completion', value: 'Q3 2027' },
      { label: 'Land Title', value: 'Certificate of Occupancy' },
    ],
    neighbourhood: {
      name: 'Katampe Extension, Abuja',
      copy: 'Katampe Extension is one of Abuja’s sought-after residential districts, pairing a private residential setting with the convenience of city living.',
    },
    mapQuery: 'Katampe Extension, Abuja, Nigeria',
  },
  {
    slug: 'nelmond-metropolis',
    company: beaverstone,
    name: 'Nelmond Metropolis',
    location: 'Efab Metropolis, Karsana, Abuja',
    status: 'Ongoing',
    category: 'Detached Duplexes',
    tagline: 'Space to Live. Freedom to Build. Value to Own.',
    summary:
      'Seven six-bedroom detached duplexes on 770 sqm plots in Efab Metropolis, Karsana, Abuja.',
    description: [
      'Discover Nelmond Metropolis, an exclusive development of seven six-bedroom detached duplexes within Efab Metropolis, Karsana, Abuja. Set on generous 770 sqm plots, each property offers the space, privacy, and flexibility to create a distinguished residence tailored to your vision.',
      'Designed as a three-floor development, Nelmond Metropolis presents a hybrid ownership opportunity, allowing buyers to enter at different stages of development according to their investment goals and construction preferences. Whether you are acquiring land for future development or seeking a head start on building your dream home, Nelmond Metropolis offers a flexible pathway to property ownership.',
      'Currently under construction, the project is scheduled for completion in Q4 2027 and comes with a Right of Occupancy (R of O). With multiple acquisition stages available, you can choose the option that best aligns with your plans, budget, and timeline.',
      'Nelmond Metropolis is an opportunity to secure a substantial residential property in Abuja while choosing how far you want your investment to progress.',
    ],
    startingPrice: 'From ₦85,000,000',
    availableUnits: '7 Available Units',
    unitTypes: [
      '6 Bedroom Detached Duplexes',
      'Land — ₦85,000,000',
      'DPC Level — ₦160,000,000',
      'Carcass Level — ₦350,000,000',
    ],
    heroImage: nelmond.frontView,
    thumbImage: nelmond.frontView,
    gallery: [
      nelmond.aerialStreet,
      nelmond.aerialGateway,
      nelmond.aerialClose,
      nelmond.livingRoom,
      nelmond.frontView,
    ],
    amenities: [],
    facts: [
      { label: 'Project Type', value: 'Hybrid' },
      { label: 'Floors', value: '3' },
      { label: 'Total Units', value: '7' },
      { label: 'Plot Size', value: '770 sqm' },
      { label: 'Land Price', value: '₦85,000,000' },
      { label: 'DPC Level Price', value: '₦160,000,000' },
      { label: 'Carcass Level Price', value: '₦350,000,000' },
      { label: 'Project Status', value: 'Under Construction' },
      { label: 'Completion', value: 'Q4 2027' },
      { label: 'Land Title', value: 'Right of Occupancy' },
    ],
    neighbourhood: {
      name: 'Karsana, Abuja',
      copy: 'Efab Metropolis sits in Karsana, Abuja, offering generous plots with the space and privacy to build a distinguished residence.',
    },
    mapQuery: 'Efab Metropolis, Karsana, Abuja, Nigeria',
  },
  {
    slug: 'gardenia-court',
    company: beaverstone,
    name: 'Gardenia Court',
    location: 'Life Camp, Abuja',
    status: 'Completed',
    category: 'Luxury Duplexes',
    tagline: 'A Refined Address. A Place to Call Home.',
    summary:
      'An exclusive collection of five completed four-bedroom terraced duplexes in Life Camp, Abuja.',
    description: [
      'Welcome to Gardenia Court, an exclusive collection of five four-bedroom terraced duplexes in Life Camp, Abuja. Designed for contemporary urban living, this boutique residential development combines the appeal of a private, limited-unit community with the comfort and sophistication of a modern home.',
      'With three floors of thoughtfully arranged living space, Gardenia Court offers an opportunity for homeowners seeking a distinguished residence in Abuja and buyers looking to secure a completed property without the uncertainty of an ongoing construction project.',
      "Now completed and available from ₦270,000,000, Gardenia Court presents a straightforward path to ownership in one of Abuja's established residential districts. Each property is backed by a Certificate of Occupancy (C of O), providing an important foundation for the next chapter of homeownership.",
      'At Gardenia Court, refined living begins with the right address.',
    ],
    startingPrice: 'From ₦270,000,000',
    availableUnits: '5 Available Units',
    unitTypes: ['4 Bedroom Terraced Duplexes'],
    heroImage: gardenia.frontDusk,
    thumbImage: gardenia.frontDusk,
    gallery: [
      gardenia.frontView,
      gardenia.aerialView,
      gardenia.livingRoom,
      gardenia.frontPortrait,
      gardenia.frontDusk,
    ],
    amenities: [],
    facts: [
      { label: 'Project Type', value: 'Luxury Duplexes' },
      { label: 'Floors', value: '3' },
      { label: 'Total Units', value: '5' },
      { label: 'Starting Price', value: '₦270,000,000' },
      { label: 'Project Status', value: 'Completed' },
      { label: 'Land Title', value: 'Certificate of Occupancy' },
    ],
    neighbourhood: {
      name: 'Life Camp, Abuja',
      copy: "Life Camp is one of Abuja's established residential districts, offering a refined address for contemporary urban living.",
    },
    mapQuery: 'Life Camp, Abuja, Nigeria',
  },
  {
    slug: 'nelmond-court',
    company: beaverstone,
    name: 'Nelmond Court',
    location: 'F01 Layout Phase 1, Kubwa, Abuja',
    status: 'Ongoing',
    category: 'Terraced Duplexes',
    tagline: 'Modern Living. Within Reach. Built for the Future.',
    summary:
      '14 four-bedroom terraced duplexes on 180 sqm plots in F01 Layout Phase 1, Kubwa, Abuja.',
    description: [
      'Introducing Nelmond Court, a residential development comprising 14 four-bedroom terraced duplexes in F01 Layout Phase 1, Kubwa, Abuja. Designed across three floors, each residence offers a contemporary approach to family living, combining practical space with an accessible pathway to homeownership.',
      'Set on individual 180 sqm plots, Nelmond Court is designed for buyers seeking a modern home in Abuja without stepping into the price bracket of ultra-luxury developments. Whether you are purchasing a home for your family or expanding your real estate portfolio, the development offers two acquisition options to suit different budgets and preferences.',
      'Currently under construction, Nelmond Court is scheduled for completion in Q3 2027 and is offered with a Right of Occupancy (R of O) title document. Choose your preferred stage of development: Carcass Level at ₦90,000,000 or Finished Level at ₦130,000,000.',
      'At Nelmond Court, your next home begins with the freedom to choose how you own it.',
    ],
    startingPrice: 'From ₦90,000,000',
    availableUnits: '14 Available Units',
    unitTypes: [
      '4 Bedroom Terraced Duplexes',
      'Carcass Level — ₦90,000,000',
      'Finished Level — ₦130,000,000',
    ],
    heroImage: nelmondCourt.gateway,
    thumbImage: nelmondCourt.gateway,
    gallery: [
      nelmondCourt.driveway,
      nelmondCourt.aerialDusk,
      nelmondCourt.frontNight,
      nelmondCourt.livingRoom,
      nelmondCourt.aerialView,
      nelmondCourt.estateGate,
      nelmondCourt.gateway,
    ],
    amenities: [],
    facts: [
      { label: 'Project Type', value: 'Terraced Duplexes' },
      { label: 'Floors', value: '3' },
      { label: 'Total Units', value: '14' },
      { label: 'Plot Size', value: '180 sqm' },
      { label: 'Carcass Level Price', value: '₦90,000,000' },
      { label: 'Finished Level Price', value: '₦130,000,000' },
      { label: 'Project Status', value: 'Under Construction' },
      { label: 'Completion', value: 'Q3 2027' },
      { label: 'Land Title', value: 'Right of Occupancy' },
    ],
    neighbourhood: {
      name: 'Kubwa, Abuja',
      copy: 'F01 Layout Phase 1 sits in Kubwa, Abuja, offering modern family homes with an accessible pathway to ownership.',
    },
    mapQuery: 'F01 Layout, Kubwa, Abuja, Nigeria',
  },
];

export function projectHref(project: Project) {
  return `/projects/${project.company.slug}/${project.slug}`;
}

export function getProject(company: string, slug: string) {
  return projects.find((p) => p.slug === slug && p.company.slug === company);
}

// const liveSlugs = ['roceilli', 'brooksville', 'beaverton-heights'];

export function otherProjects(current: Project, count = 3) {
  return projects.filter((p) => p.slug !== current.slug).slice(0, count);
}
