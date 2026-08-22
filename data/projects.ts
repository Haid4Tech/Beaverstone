// Project names, locations and member-company groupings mirror the real
// Palton Morgan portfolio. Prices, unit counts, descriptions and imagery are
// PLACEHOLDER content for this build — not official company figures.

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
  amenities: string[];
  facts: { label: string; value: string }[];
  neighbourhood: { name: string; copy: string };
  mapQuery: string;
};

const grenadines = { slug: 'grenadines-homes', name: 'Grenadines Homes' };
const propertymart = { slug: 'propertymart', name: 'Propertymart' };

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
    slug: 'kadars-gate',
    company: grenadines,
    name: 'Kadars Gate',
    location: 'Victoria Island, Lagos',
    status: 'Ongoing',
    category: 'Luxury Maisonettes',
    tagline: 'Address and architecture, held to the same standard.',
    summary:
      'Maisonettes, apartments and penthouses in the heart of Victoria Island.',
    description: [
      "Kadars Gate places a small number of homes on one of Lagos' most established addresses, arranged for privacy rather than density.",
      'Each maisonette is planned over two levels, with generous glazing designed to draw natural light deep into every room.',
    ],
    startingPrice: 'From ₦1,140,000,000',
    availableUnits: '18 Available Units',
    unitTypes: [
      '4 Bedroom Maisonettes',
      '3 Bedroom Maisonettes',
      '2 Bedroom Apartments',
      '4 Penthouses',
    ],
    heroImage: u(IMG.kadars, 2400),
    thumbImage: u(IMG.kadars, 1200),
    gallery: [u(IMG.extraA), u(IMG.skyvilla), u(IMG.cerulean), u(IMG.resort)],
    amenities: [
      '24/7 Security',
      'CCTV',
      'Fitness Centre',
      'Smart Home',
      'Swimming Pool',
      'Treated Water System',
    ],
    facts: [
      { label: 'Project Type', value: 'Maisonettes & Apartments' },
      { label: 'Floors', value: '5' },
      { label: 'Total Units', value: '18' },
      { label: 'Project Status', value: 'Under Construction' },
      { label: 'Completion', value: 'Q4 2026' },
      { label: 'Land Title', value: "Governor's Consent" },
    ],
    neighbourhood: {
      name: 'Victoria Island',
      copy: "Victoria Island remains Lagos' central business address, putting banking, dining and the Atlantic shoreline within a short drive of the front gate.",
    },
    mapQuery: 'Victoria Island, Lagos, Nigeria',
  },
  {
    slug: 'the-rockhampton',
    company: grenadines,
    name: 'The Rockhampton',
    location: 'Katampe, Abuja',
    status: 'Ongoing',
    category: 'Hillside Residences',
    tagline: 'Elevated living, written into the hillside.',
    summary:
      'Hillside condos, terraces and villas set above the city in Katampe.',
    description: [
      'The Rockhampton steps down its site rather than flattening it, so each home keeps a clear line of sight over the valley below.',
      'The mix spans condos, terraces and semi-detached villas, letting one address suit a range of households.',
    ],
    startingPrice: 'From ₦604,000,000',
    availableUnits: '24 Available Units',
    unitTypes: [
      '4 Bedroom Pent Apartments',
      '3 Bedroom Luxury Condos',
      '4 Bedroom Terrace Apartments',
      '4 Bedroom Semi-Detached Villas',
    ],
    heroImage: u(IMG.rock, 2400),
    thumbImage: u(IMG.rock, 1200),
    gallery: [u(IMG.claren), u(IMG.extraA), u(IMG.meadows), u(IMG.shonny)],
    amenities: [
      '24/7 Security',
      'CCTV',
      'Swimming Pool',
      'Fitness Centre',
      'Green Area',
      'Backup Power',
    ],
    facts: [
      { label: 'Project Type', value: 'Condos, Terraces & Villas' },
      { label: 'Floors', value: '4' },
      { label: 'Total Units', value: '24' },
      { label: 'Project Status', value: 'Under Construction' },
      { label: 'Completion', value: 'Q2 2027' },
      { label: 'Land Title', value: 'Certificate of Occupancy' },
    ],
    neighbourhood: {
      name: 'Katampe',
      copy: 'Katampe sits on the higher ground north-east of central Abuja, valued for its elevation, quiet streets and quick access into the city centre.',
    },
    mapQuery: 'Katampe, Abuja, Nigeria',
  },
  {
    slug: 'l5-banana',
    company: grenadines,
    name: 'L5 Banana',
    location: 'Banana Island, Ikoyi',
    status: 'Currently Selling',
    category: 'Waterfront Residences',
    tagline: 'A quiet kind of permanence, on the water.',
    summary: 'Waterfront residences and penthouses on Banana Island, Ikoyi.',
    description: [
      'L5 Banana takes its cues from the water beside it — a composition of glass, stone and shaded terraces facing the lagoon.',
      'Interiors are delivered as an elevated blank canvas, with full-height windows in every principal room.',
    ],
    startingPrice: 'From ₦2,400,000,000',
    availableUnits: '12 Available Units',
    unitTypes: ['2, 3 & 4 Bedroom Luxury Residences', 'Crowning Penthouses'],
    heroImage: u(IMG.l5, 2400),
    thumbImage: u(IMG.l5, 1200),
    gallery: [u(IMG.paramount), u(IMG.extraB), u(IMG.cerulean), u(IMG.kadars)],
    amenities: [
      '24/7 Security',
      'Swimming Pool',
      'Smart Home',
      'Fitness Centre',
      'Concierge',
      'Treated Water System',
    ],
    facts: [
      { label: 'Project Type', value: 'Waterfront Apartments' },
      { label: 'Floors', value: '7' },
      { label: 'Total Units', value: '12' },
      { label: 'Project Status', value: 'Currently Selling' },
      { label: 'Completion', value: 'Q1 2027' },
      { label: 'Land Title', value: "Governor's Consent" },
    ],
    neighbourhood: {
      name: 'Banana Island',
      copy: 'Banana Island is among the most tightly held addresses in Lagos — a planned, gated waterfront community with its own infrastructure and controlled access.',
    },
    mapQuery: 'Banana Island, Ikoyi, Lagos, Nigeria',
  },
  {
    slug: 'paramount-twin-towers',
    company: grenadines,
    name: 'Paramount Twin Towers',
    location: 'Oniru, Victoria Island',
    status: 'Ongoing',
    category: 'High-Rise Residences',
    tagline: 'Two towers, one horizon over the Atlantic.',
    summary: 'Twin residential towers near the ocean at Oniru.',
    description: [
      'Paramount Twin Towers rise above a shared podium, giving every resident gardens, a pool deck and a lounge without leaving the building.',
      'Floorplates are kept narrow to maximise cross-ventilation and open views in every direction.',
    ],
    startingPrice: 'From ₦858,000,000',
    availableUnits: '40 Available Units',
    unitTypes: [
      '2 Bedroom Premium Units',
      'Spacious Apartments',
      'Open Lounge',
    ],
    heroImage: u(IMG.paramount, 2400),
    thumbImage: u(IMG.paramount, 1200),
    gallery: [u(IMG.cerulean), u(IMG.l5), u(IMG.extraA), u(IMG.claren)],
    amenities: [
      '24/7 Security',
      'CCTV',
      'Swimming Pool',
      'Fitness Centre',
      'Green Area',
      'Concierge',
    ],
    facts: [
      { label: 'Project Type', value: 'High-Rise Apartments' },
      { label: 'Floors', value: '12' },
      { label: 'Total Units', value: '40' },
      { label: 'Project Status', value: 'Under Construction' },
      { label: 'Completion', value: 'Q3 2026' },
      { label: 'Land Title', value: "Governor's Consent" },
    ],
    neighbourhood: {
      name: 'Oniru',
      copy: 'Oniru pairs beachfront access with a short run into Victoria Island proper, making it one of the fastest-growing residential pockets in Lagos.',
    },
    mapQuery: 'Oniru, Victoria Island, Lagos, Nigeria',
  },
  {
    slug: 'the-meadows',
    company: propertymart,
    name: 'The Meadows',
    location: 'Magbon Alade, Ibeju-Lekki',
    status: 'Currently Selling',
    category: 'Serviced Plots',
    tagline: 'Room to build, on titled ground.',
    summary:
      'Serviced residential plots with clean title in the Ibeju-Lekki corridor.',
    description: [
      'The Meadows offers titled, serviced plots for buyers who would rather build to their own brief than buy a finished unit.',
      'The estate is laid out with internal roads, drainage and perimeter security already in place.',
    ],
    startingPrice: 'From ₦57,000,000',
    availableUnits: 'Limited Plots Available',
    unitTypes: [
      '600 SQM Plot Sizes',
      'Certificate of Occupancy',
      'Limited Plots Available',
    ],
    heroImage: u(IMG.meadows, 2400),
    thumbImage: u(IMG.meadows, 1200),
    gallery: [u(IMG.shonny), u(IMG.resort), u(IMG.extraB), u(IMG.rock)],
    amenities: [
      'Gated Entrance',
      'Internal Tarred Roads',
      'Central Drainage',
      'Green Area',
      'Estate Security',
      'Street Lighting',
    ],
    facts: [
      { label: 'Project Type', value: 'Serviced Residential Plots' },
      { label: 'Plot Size', value: '600 SQM' },
      { label: 'Project Status', value: 'Currently Selling' },
      { label: 'Handover', value: 'Immediate' },
      { label: 'Land Title', value: 'Certificate of Occupancy' },
    ],
    neighbourhood: {
      name: 'Ibeju-Lekki',
      copy: 'Ibeju-Lekki has become the main growth corridor east of Lagos, anchored by major port and industrial investment along the Lekki-Epe axis.',
    },
    mapQuery: 'Ibeju-Lekki, Lagos, Nigeria',
  },
  {
    slug: 'cerulean-towers',
    company: grenadines,
    name: 'Cerulean Towers',
    location: 'Water Corporation Rd, Victoria Island',
    status: 'Ongoing',
    category: 'Apartment Towers',
    tagline: "Vertical living, close to the water's edge.",
    summary: 'Apartment towers on Water Corporation Drive, Victoria Island.',
    description: [
      "Cerulean Towers takes a narrow waterfront plot and turns it upward, stacking apartments so that every home holds a view rather than a neighbour's wall.",
      'Shared amenity floors sit part-way up the building, keeping the ground plane clear for arrival and landscaping.',
    ],
    startingPrice: 'From ₦960,000,000',
    availableUnits: '32 Available Units',
    unitTypes: [
      '3 Bedroom Apartments',
      '4 Bedroom Apartments',
      'Sky Penthouses',
    ],
    heroImage: u(IMG.cerulean, 2400),
    thumbImage: u(IMG.cerulean, 1200),
    gallery: [u(IMG.l5), u(IMG.paramount), u(IMG.kadars), u(IMG.extraA)],
    amenities: [
      '24/7 Security',
      'CCTV',
      'Swimming Pool',
      'Fitness Centre',
      'Smart Home',
      'Concierge',
    ],
    facts: [
      { label: 'Project Type', value: 'Apartment Towers' },
      { label: 'Floors', value: '14' },
      { label: 'Total Units', value: '32' },
      { label: 'Project Status', value: 'Under Construction' },
      { label: 'Completion', value: 'Q4 2027' },
      { label: 'Land Title', value: "Governor's Consent" },
    ],
    neighbourhood: {
      name: 'Victoria Island',
      copy: 'Water Corporation Drive sits on the quieter western edge of Victoria Island, with marina frontage and quick access to Ikoyi across the bridge.',
    },
    mapQuery: 'Water Corporation Road, Victoria Island, Lagos, Nigeria',
  },
  {
    slug: 'skyvilla',
    company: grenadines,
    name: 'Skyvilla',
    location: 'Probyn Close, Ikoyi',
    status: 'Currently Selling',
    category: 'Sky Villas',
    tagline: 'The privacy of a villa, carried into the air.',
    summary: 'Full-floor sky villas on a quiet close in Old Ikoyi.',
    description: [
      'Skyvilla gives each residence an entire floor, so arrival, living and sleeping areas belong to one household alone.',
      'Private lift lobbies open directly into each home, removing shared corridors altogether.',
    ],
    startingPrice: 'From ₦1,750,000,000',
    availableUnits: '8 Available Units',
    unitTypes: ['4 Bedroom Full-Floor Villas', 'Duplex Penthouse'],
    heroImage: u(IMG.skyvilla, 2400),
    thumbImage: u(IMG.skyvilla, 1200),
    gallery: [u(IMG.claren), u(IMG.kadars), u(IMG.cerulean), u(IMG.extraB)],
    amenities: [
      '24/7 Security',
      'Private Lift Lobby',
      'Swimming Pool',
      'Smart Home',
      'Fitness Centre',
      'Treated Water System',
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
      name: 'Old Ikoyi',
      copy: "Probyn Close sits within Old Ikoyi's low-density streets, where mature trees and long-standing residential plots keep the pace notably slower.",
    },
    mapQuery: 'Probyn Road, Ikoyi, Lagos, Nigeria',
  },
  {
    slug: 'claren-villas',
    company: grenadines,
    name: 'Claren Villas',
    location: 'Lugard Avenue, Ikoyi',
    status: 'Ongoing',
    category: 'Private Villas',
    tagline: 'Detached, walled and entirely your own.',
    summary: 'A small enclave of detached villas on Lugard Avenue, Ikoyi.',
    description: [
      'Claren Villas is a short terrace of detached homes, each with its own gate, garden and staff quarters.',
      "The scheme is deliberately small, trading unit count for privacy on one of Ikoyi's most established avenues.",
    ],
    startingPrice: 'From ₦2,100,000,000',
    availableUnits: '6 Available Units',
    unitTypes: ['5 Bedroom Detached Villas', 'Private Staff Quarters'],
    heroImage: u(IMG.claren, 2400),
    thumbImage: u(IMG.claren, 1200),
    gallery: [u(IMG.skyvilla), u(IMG.shonny), u(IMG.rock), u(IMG.extraA)],
    amenities: [
      '24/7 Security',
      'Private Pool',
      'Green Area',
      'Smart Home',
      'Backup Power',
      'Treated Water System',
    ],
    facts: [
      { label: 'Project Type', value: 'Detached Villas' },
      { label: 'Floors', value: '3' },
      { label: 'Total Units', value: '6' },
      { label: 'Project Status', value: 'Under Construction' },
      { label: 'Completion', value: 'Q1 2027' },
      { label: 'Land Title', value: "Governor's Consent" },
    ],
    neighbourhood: {
      name: 'Ikoyi',
      copy: "Lugard Avenue runs through the heart of Ikoyi's diplomatic quarter, a stretch long favoured for its wide setbacks and quiet frontages.",
    },
    mapQuery: 'Lugard Avenue, Ikoyi, Lagos, Nigeria',
  },
  {
    slug: 'grenadines-resort',
    company: grenadines,
    name: 'Grenadines Resort',
    location: 'Katampe, Abuja',
    status: 'Coming Soon',
    category: 'Resort Residences',
    tagline: 'A resort footing for everyday living.',
    summary: 'Resort-style residences and leisure amenities in Katampe, Abuja.',
    description: [
      'Grenadines Resort borrows its planning from hospitality — arrival courts, shaded walkways and amenity buildings set among landscaping.',
      'Residences sit at the quieter edge of the site, insulated from the leisure facilities by planting and level changes.',
    ],
    startingPrice: 'From ₦720,000,000',
    availableUnits: 'Registration Open',
    unitTypes: [
      '2 & 3 Bedroom Resort Residences',
      'Serviced Apartments',
      'Leisure Suites',
    ],
    heroImage: u(IMG.resort, 2400),
    thumbImage: u(IMG.resort, 1200),
    gallery: [u(IMG.meadows), u(IMG.rock), u(IMG.extraB), u(IMG.cerulean)],
    amenities: [
      '24/7 Security',
      'Swimming Pool',
      'Fitness Centre',
      'Green Area',
      'Concierge',
      'Backup Power',
    ],
    facts: [
      { label: 'Project Type', value: 'Resort Residences' },
      { label: 'Floors', value: '6' },
      { label: 'Project Status', value: 'Coming Soon' },
      { label: 'Completion', value: 'Q4 2028' },
      { label: 'Land Title', value: 'Certificate of Occupancy' },
    ],
    neighbourhood: {
      name: 'Katampe',
      copy: "The Katampe hills offer some of Abuja's best elevated outlooks, with the city centre reachable in well under half an hour.",
    },
    mapQuery: 'Katampe, Abuja, Nigeria',
  },
  {
    slug: 'shonny-park-place',
    company: grenadines,
    name: 'Shonny Park Place',
    location: 'Shonibare Estate, Lagos',
    status: 'Completed',
    category: 'Luxury Residences',
    tagline: 'Finished, occupied and settled into its street.',
    summary:
      'Completed residences within the established Shonibare Estate, Ikeja.',
    description: [
      "Shonny Park Place is delivered and occupied, sitting inside one of mainland Lagos' better-planned private estates.",
      'The building was designed around a central garden court, giving every apartment a second aspect away from the road.',
    ],
    startingPrice: 'From ₦310,000,000',
    availableUnits: 'Resale Units Only',
    unitTypes: ['3 Bedroom Apartments', '4 Bedroom Duplexes'],
    heroImage: u(IMG.shonny, 2400),
    thumbImage: u(IMG.shonny, 1200),
    gallery: [u(IMG.claren), u(IMG.meadows), u(IMG.kadars), u(IMG.extraA)],
    amenities: [
      '24/7 Security',
      'CCTV',
      'Green Area',
      'Backup Power',
      'Treated Water System',
      'Dedicated Parking',
    ],
    facts: [
      { label: 'Project Type', value: 'Apartments & Duplexes' },
      { label: 'Floors', value: '4' },
      { label: 'Project Status', value: 'Completed' },
      { label: 'Handover', value: 'Delivered' },
      { label: 'Land Title', value: "Governor's Consent" },
    ],
    neighbourhood: {
      name: 'Shonibare Estate',
      copy: 'Shonibare Estate is a long-established private estate in Ikeja, with its own security, internal roads and quick access to the airport.',
    },
    mapQuery: 'Shonibare Estate, Ikeja, Lagos, Nigeria',
  },
];

export function projectHref(project: Project) {
  return `/projects/${project.company.slug}/${project.slug}`;
}

export function getProject(company: string, slug: string) {
  return projects.find((p) => p.slug === slug && p.company.slug === company);
}

export function otherProjects(current: Project, count = 3) {
  return projects.filter((p) => p.slug !== current.slug).slice(0, count);
}
