export type MediaCategory = 'News' | 'Blogs';

export type ArticleBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'link'; text: string; href: string }
  | { type: 'list'; style: 'bullet' | 'number'; items: string[] };

export type Article = {
  slug: string;
  category: MediaCategory;
  title: string;
  excerpt: string;
  body: ArticleBlock[];
  date: string;
  author: string;
  image: string;
  imagePosition?: string;
};

const p = (text: string): ArticleBlock => ({ type: 'paragraph', text });

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
    slug: 'real-estate-nigeria',
    category: 'Blogs',
    title:
      'Why Real Estate Remains One of Nigeria’s Most Reliable Wealth-Building Assets',
    excerpt:
      'Real estate has long been regarded as one of the most powerful ways to preserve and grow wealth. In Nigeria, where population growth, urbanisation and increasing demand for housing continue to shape the property market, real estate remains an attractive investment option for individuals, families and businesses.',
    body: [
      p(
        'Real estate has long been regarded as one of the most powerful ways to preserve and grow wealth. In Nigeria, where population growth, urbanisation and increasing demand for housing continue to shape the property market, real estate remains an attractive investment option for individuals, families and businesses.'
      ),
      p(
        'Unlike some investments that can fluctuate significantly within short periods, strategically acquired property can appreciate in value over time, particularly when it is located in an area experiencing economic and infrastructural development.'
      ),
      { type: 'heading', text: 'Why Do People Invest in Real Estate?' },
      {
        type: 'list',
        style: 'number',
        items: [
          'Property Can Appreciate Over Time — Land and property in developing locations can increase in value as demand grows and infrastructure improves. An area that appears relatively undeveloped today may become highly sought-after in a few years.',
          'Real Estate Can Generate Rental Income — Investors can generate recurring income by developing or purchasing properties for residential or commercial rental purposes.',
          'Property Can Provide Long-Term Security — Unlike many financial assets, real estate is a tangible asset. You can physically own, develop, lease or sell it.',
          'It Can Help Preserve Wealth — Property can serve as a long-term store of value and can be transferred from one generation to another.',
        ],
      },
      { type: 'heading', text: 'The Importance of Strategy' },
      p(
        'Not every property is automatically a good investment. Location, title documentation, accessibility, infrastructure, development plans and market demand all influence the potential performance of a property.'
      ),
      p(
        'The key is not simply to buy property, but to buy the right property in the right location at the right price.'
      ),
      p(
        'At Beaverstone, we believe strategic real estate investment begins with informed decisions, proper due diligence and a clear understanding of the market. Take a look at [our current projects](/projects) to see where we are building next.'
      ),
    ],
    date: '2026-05-12',
    author: 'Beaverstone',
    image: '/other_images/13.png',
  },
  {
    slug: 'property-title-documents-nigeria',
    category: 'Blogs',
    title: 'Property Title Documents in Nigeria: A Guide to Buying Land Safely',
    excerpt:
      'Buying land or property in Nigeria is a major investment. Before you make that payment, you must be able to answer one question: what exactly proves that this person has the right to sell this property to me?',
    body: [
      p(
        'Buying land or property in Nigeria is a major investment. But before you make that payment, there is one question you must be able to answer: "What exactly proves that this person has the right to sell this property to me?"'
      ),
      p(
        'A beautiful house, an attractive estate, or a seemingly cheap plot of land does not automatically mean the property is legally safe to purchase.'
      ),
      p(
        'In Nigeria, land administration is governed largely by the [Land Use Act](https://lawsofnigeria.placng.org/view2.php?sn=228), under which land in each state is vested in the Governor to hold in trust for the people, subject to the Act. In the Federal Capital Territory, land administration is handled by the FCT authorities, including the department responsible for land titles and registration.'
      ),
      p(
        'This is why understanding property title documents — and conducting proper due diligence — is essential.'
      ),

      { type: 'heading', text: '1. Certificate of Occupancy (C of O)' },
      p(
        'The Certificate of Occupancy, commonly called a C of O, is one of the most recognized statutory land documents in Nigeria.'
      ),
      p(
        'It is evidence of a statutory right of occupancy granted over a defined parcel of land. Government land agencies describe the [C of O](https://bengis.benuestate.gov.ng/services/) as a statutory title document evidencing the right granted to the holder to occupy and use the land.'
      ),
      p(
        "A C of O can provide strong evidence of the holder's interest in the land and is an important document when dealing with subsequent transactions, financing, development and registration."
      ),
      p(
        'However, seeing a C of O is not the end of your due diligence. You still need to verify:'
      ),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'The authenticity of the document',
          'The name of the registered holder',
          "The property's location",
          'Plot number and size',
          'Survey information',
          'Whether there are encumbrances or restrictions',
          'Whether the person selling has the legal authority to transfer the interest',
        ],
      },
      p(
        "For example, the [FCT's land administration system](https://www.fcta.gov.ng/ova_dep/land-administration-department/) handles the registration and management of land titles and documents affecting land in Abuja."
      ),

      { type: 'heading', text: '2. Right of Occupancy (R of O)' },
      p(
        'A Right of Occupancy, commonly called an R of O, is another important document you may encounter, particularly in land allocations.'
      ),
      p(
        'In the FCT, [AGIS](https://www.agis.fcta.gov.ng/title-collections/) specifically provides for the collection of Rights of Occupancy/Land Allocation Letters and subsequently lists an original R of O among the requirements associated with C of O processing.'
      ),
      p(
        'Simply put, an R of O is evidence of a granted right of occupancy over a particular property. But don\'t make the mistake of assuming "R of O = automatically safe to buy."'
      ),
      p(
        'The document still needs to be verified, and the transaction itself may require additional documentation and government consent/registration depending on the circumstances.'
      ),

      { type: 'heading', text: '3. Deed of Assignment' },
      p(
        'A Deed of Assignment is a legal instrument used to transfer an interest in land or property from one party to another — for example, seller to buyer. The deed documents the transaction and the interest being transferred.'
      ),
      p(
        "This is particularly important when you're purchasing an existing property from someone who already holds an interest in the land."
      ),
      p(
        'In Abuja, [AGIS lists specific requirements](https://agis.fcta.gov.ng/Processes%20and%20payments%20requirements/) for Deeds of Assignment/Gift and related title processing.'
      ),
      p(
        'Why should you care? Because paying someone for land is not the same thing as properly documenting and perfecting your interest in that land.'
      ),
      p(
        'A proper property transaction should establish: who owned it, what interest they have, what they are transferring, to whom, under what terms, and whether the required consent/registration has been obtained.'
      ),

      { type: 'heading', text: "4. Governor's Consent" },
      p('This is one that many first-time property buyers overlook.'),
      p(
        "Under Section 22 of the [Land Use Act](https://lawsofnigeria.placng.org/view2.php?sn=228), the holder of a statutory right of occupancy generally cannot alienate the right through assignment, mortgage, transfer of possession, sublease or similar transaction without the Governor's consent first being obtained."
      ),
      p(
        'In simple terms: someone having a valid interest in a property does not mean they can simply transfer it however they want without complying with the required legal process.'
      ),
      p(
        'For property transactions in Abuja, the relevant consent process involves the FCT authorities. A transaction can have a seemingly impressive title document but still require proper consent and registration to perfect the transfer — which is why buyers should have a qualified property lawyer examine the transaction rather than relying solely on what a salesperson or seller says.'
      ),

      { type: 'heading', text: '5. Survey Plan' },
      p(
        "A Survey Plan is one of the most important documents you should pay attention to when purchasing land. It helps identify the property's:"
      ),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Location',
          'Boundaries',
          'Dimensions',
          'Coordinates',
          'Plot information',
          'Survey details',
        ],
      },
      p(
        'Think of it as the property\'s geographical identity card. A seller may tell you "This is Plot 25" — but your question should be "Can the plot be independently identified and verified on the ground and in the relevant land records?"'
      ),
      p(
        'A proper survey and title search can help uncover issues such as overlapping claims, wrong plot numbers, encumbrances or land that is not where the seller claims it is.'
      ),

      { type: 'heading', text: '6. Allocation Letter / Offer Letter' },
      p(
        'Government-allotted land may come with an Allocation Letter or Offer Letter. It is evidence that the relevant government authority has made an allocation or offer to the named person or entity, subject to the applicable conditions.'
      ),
      p(
        'In the FCT, [AGIS identifies](https://www.agis.fcta.gov.ng/title-collections/) Right of Occupancy/Land Allocation documentation as part of its land administration processes.'
      ),
      p(
        'However, an allocation or offer letter should not be treated as though it automatically eliminates the need for further title verification.'
      ),

      { type: 'heading', text: '7. Deed of Assignment + Registered Title' },
      p(
        'One of the biggest mistakes buyers make is focusing only on the document sitting in front of them. A property transaction involves more than a piece of paper.'
      ),
      p(
        'For example, a buyer may receive a Deed of Assignment, but the important questions include:'
      ),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Was the seller actually entitled to assign the property?',
          'Was the previous title genuine?',
          'Was the transaction properly executed?',
          'Was the required consent obtained?',
          'Has the transaction been registered/perfected?',
          'Are there outstanding charges or restrictions?',
        ],
      },
      p(
        'The [FCT land administration process](https://www.fcta.gov.ng/ova_dep/land-administration-department/), for example, includes registration and management of land titles and documents affecting land.'
      ),

      { type: 'heading', text: '8. Gazette and Excision' },
      p(
        'These terms are particularly important when dealing with land that is said to have been excised or released from government acquisition.'
      ),
      p(
        'An excision generally refers to land being carved out of an area that was previously subject to government acquisition and formally released through the relevant government process. A Gazette is an official government publication through which government decisions, notices and other official information may be published.'
      ),
      p(
        'If a seller tells you "This land is excised," don\'t simply take their word for it. Ask: "What is the official evidence of that excision, and can it be verified with the relevant authority?"'
      ),
      p(
        'This is especially important because land can be marketed using impressive-sounding title terminology that does not necessarily mean the specific plot you are buying is covered.'
      ),

      {
        type: 'heading',
        text: 'Why You Must Be Careful When Buying Property in Nigeria',
      },
      p(
        "The biggest mistake a property buyer can make is falling in love with the property before verifying the title. A beautiful location doesn't guarantee good title. A cheap price doesn't guarantee a good deal. A colourful brochure doesn't guarantee ownership. And even a document presented by a seller should be independently verified."
      ),
      p('Some common risks include:'),
      {
        type: 'list',
        style: 'number',
        items: [
          "Buying from someone who isn't the true owner — someone may present themselves as the owner when they have no legal authority to sell.",
          'Buying the same land another person has already purchased — this is one reason independent searches and verification are critical.',
          'Buying land under government acquisition — a property may look perfectly fine physically while having an underlying title problem.',
          "Fake or altered documents — documents can be fabricated or manipulated. Don't authenticate documents by appearance alone.",
          'Outstanding encumbrances — the property may have a mortgage, restriction, dispute, charge or other issue affecting the transaction.',
          "Buying based solely on what an agent says — an agent can introduce you to a property, but your legal due diligence should not depend solely on the agent's assurances.",
        ],
      },

      {
        type: 'heading',
        text: 'Don\'t Let "Urgency" Make You Lose Your Money',
      },
      p(
        'One of the biggest red flags in real estate is pressure: "Pay today or the price increases tomorrow." "Someone else is already waiting." "Don\'t worry about the documents; everything is sorted." "Just pay the commitment fee first."'
      ),
      p(
        'A genuine investment deserves proper verification. Government processes themselves emphasize documentation, verification and proper processing — for example, [AGIS publishes specific requirements](https://www.agis.fcta.gov.ng/title-collections/) for Rights of Occupancy, Certificates of Occupancy and title transactions in the FCT.'
      ),

      {
        type: 'heading',
        text: '7 Things You Should Do Before Paying for Property',
      },
      {
        type: 'list',
        style: 'number',
        items: [
          'Verify the seller — confirm that the person or company selling the property has the legal authority to sell it.',
          "Get copies of the title documents — don't rely on verbal explanations.",
          'Conduct a proper title search — have the relevant land registry/authority records checked.',
          'Engage a property lawyer — a qualified real-estate lawyer can review the documents and transaction structure.',
          'Verify the survey — make sure the physical property corresponds with the survey and title information.',
          "Investigate the land's history — find out whether there are previous owners, claims, acquisition issues, mortgages or disputes.",
          "Don't pay into a suspicious account — where you're dealing with a company, make sure payments follow the company's legitimate payment instructions and documentation.",
        ],
      },

      {
        type: 'heading',
        text: 'The Smart Property Buyer Doesn\'t Just Ask, "How Much?"',
      },
      p('They ask:'),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Who owns it?',
          'What is the title?',
          'Can the title be verified?',
          'Where exactly is the property?',
          'Can the seller legally transfer it?',
          'Are there restrictions or encumbrances?',
          'Has the transaction been properly documented and perfected?',
        ],
      },
      p(
        'These questions can save you from turning what should have been a profitable investment into a long and expensive legal battle.'
      ),

      { type: 'heading', text: 'Final Thoughts' },
      p(
        'Real estate can be one of the most powerful ways to build and preserve wealth — but the quality of your investment is not determined by the property alone. It is also determined by the quality of the title and the due diligence behind the transaction.'
      ),
      p(
        'At Beaverstone, we believe property investment should be built on more than beautiful locations and attractive offers. It should be built on transparency, proper documentation, professional due diligence and informed decision-making.'
      ),
      p(
        "Don't just buy property. Understand what you're buying. Verify before you commit. Invest with confidence."
      ),
    ],
    date: '2026-08-05',
    author: 'Beaverstone',
    image: '/other_images/4.png',
    imagePosition: 'center 10%',
  },
  {
    slug: 'from-land-to-home-property-development',
    category: 'Blogs',
    title: 'From Land to Home: How a Property Development Comes to Life',
    excerpt:
      'A completed building may look simple when viewed from the outside, but bringing a property from a piece of land to a finished home requires careful planning, technical expertise and coordinated execution.',
    body: [
      p(
        'A completed building may look simple when viewed from the outside, but bringing a property from a piece of land to a finished home requires careful planning, technical expertise and coordinated execution.'
      ),
      p(
        'Every successful development begins long before the first block is laid.'
      ),
      { type: 'heading', text: 'Step 1: Land Acquisition and Due Diligence' },
      p('The process begins with identifying and securing suitable land.'),
      p(
        'Before development, important factors such as ownership, title documentation, land use, accessibility, planning requirements, soil conditions and surrounding infrastructure must be carefully assessed.'
      ),
      { type: 'heading', text: 'Step 2: Site Investigation' },
      p(
        'Understanding the site is essential before design and construction decisions are finalised.'
      ),
      p(
        'Professionals assess the soil, terrain, drainage conditions and other characteristics that may influence the building.'
      ),
      { type: 'heading', text: 'Step 3: Architectural and Engineering Design' },
      p(
        'Architects and engineers transform the development concept into detailed plans.'
      ),
      p(
        'Architectural drawings establish the appearance, functionality and layout of the building, while structural and other engineering designs ensure that the proposed development is technically sound.'
      ),
      {
        type: 'heading',
        text: 'Step 4: Approvals and Pre-Construction Planning',
      },
      p(
        'Relevant drawings and documents are submitted for the necessary approvals.'
      ),
      p(
        'At the same time, budgets, schedules, materials, labour and construction methodologies are planned.'
      ),
      { type: 'heading', text: 'Step 5: Foundation and Structural Works' },
      p(
        'Construction begins on site with setting out, excavation and foundation works.'
      ),
      p(
        "The foundation transfers the building's loads safely into the ground and therefore requires careful execution."
      ),
      p(
        'The structural frame then progresses through stages such as columns, beams, slabs and walls.'
      ),
      { type: 'heading', text: 'Step 6: Roofing, Services and Finishing' },
      p(
        'Once the main structure is established, the project progresses into roofing, plumbing, electrical installations, plastering, screeding, tiling, painting, cabinetry and other finishing works.'
      ),
      { type: 'heading', text: 'Step 7: Quality Control and Handover' },
      p(
        'Before completion, the development undergoes inspections to identify defects, incomplete works and areas requiring correction.'
      ),
      p(
        'Only after the necessary checks and finishing works are completed should the property be prepared for handover.'
      ),
      p(
        'A quality property is not created by chance. It is the result of a well-managed process.'
      ),
    ],
    date: '2026-08-06',
    author: 'Beaverstone',
    image: '/projects/brooksville/sunset-portrait.png',
  },
  {
    slug: 'complete-journey-building-house-nigeria',
    category: 'Blogs',
    title: 'The Complete Journey of Building a House in Nigeria',
    excerpt:
      'Building a house is one of the biggest investments many people will make in their lifetime. Understanding the process can help property owners make better decisions and avoid costly mistakes.',
    body: [
      p(
        'Building a house is one of the biggest investments many people will make in their lifetime.'
      ),
      p(
        'Understanding the process can help property owners make better decisions, manage expectations and avoid costly mistakes.'
      ),
      {
        type: 'list',
        style: 'number',
        items: [
          'Define Your Requirements — Start with your needs, budget, preferred location and intended use of the property.',
          'Acquire Suitable Land — The land should be properly verified before construction begins.',
          'Conduct Site Investigation — Understanding the soil and site conditions helps professionals determine suitable foundation and construction requirements.',
          'Develop the Design — Architectural and engineering professionals create the drawings required for the project.',
          'Obtain Necessary Approvals — Building plans and other required documentation should be processed through the appropriate authorities.',
          'Prepare the Site — The site is cleared, surveyed and set out according to the approved drawings.',
          'Construct the Foundation — Excavation, reinforcement, formwork and concrete works are carried out according to the structural requirements.',
          'Build the Superstructure — The project progresses through walls, columns, beams and suspended slabs where applicable.',
          'Complete Roofing and Building Services — Roofing, plumbing, electrical and mechanical installations are integrated into the building.',
          'Finishing — Plastering, screeding, tiling, painting, doors, windows, ceilings and other finishes transform the structure into a functional home.',
          'Inspection and Handover — The completed property is inspected, defects are addressed and the building is prepared for occupation.',
        ],
      },
      p('Good construction is a process — not an event.'),
    ],
    date: '2026-08-07',
    author: 'Beaverstone',
    image: '/projects/roceilli/homefront.png',
  },
  {
    slug: 'what-happens-before-construction-begins',
    category: 'Blogs',
    title: 'What Happens Before Construction Begins?',
    excerpt:
      'Construction does not begin when the excavator arrives on site. Some of the most important decisions are made before construction starts.',
    body: [
      p('Construction does not begin when the excavator arrives on site.'),
      p(
        'Some of the most important decisions are made before construction starts.'
      ),
      { type: 'heading', text: 'Land Verification' },
      p(
        'The ownership and documentation of the property must be properly investigated.'
      ),
      { type: 'heading', text: 'Site Survey' },
      p(
        "A survey establishes important information about the site's boundaries, levels and physical characteristics."
      ),
      { type: 'heading', text: 'Soil Investigation' },
      p(
        'Soil conditions can influence the appropriate foundation system and other structural decisions.'
      ),
      { type: 'heading', text: 'Architectural Design' },
      p(
        'The architect develops the building concept, floor plans, elevations and other required drawings.'
      ),
      { type: 'heading', text: 'Structural Design' },
      p(
        'Structural engineers determine how the building will safely support and transfer its loads.'
      ),
      { type: 'heading', text: 'Cost Planning' },
      p(
        'A realistic project budget should be developed based on the design, materials, labour and scope of work.'
      ),
      { type: 'heading', text: 'Construction Planning' },
      p(
        'A project schedule, procurement plan and construction methodology help establish how the project will be executed.'
      ),
      { type: 'heading', text: 'Approvals' },
      p(
        'The required regulatory approvals should be obtained before construction proceeds.'
      ),
      p(
        'The better the preparation, the fewer surprises a project is likely to encounter.'
      ),
    ],
    date: '2026-08-08',
    author: 'Beaverstone',
    image: '/projects/brooksville/site-gateway.png',
    imagePosition: 'center',
  },
  {
    slug: 'why-site-investigation-matters',
    category: 'Blogs',
    title: 'Why Proper Site Investigation Matters Before Building',
    excerpt:
      'What lies beneath a building can be just as important as what you see above ground. Two sites that look almost identical on the surface can have completely different soil and groundwater conditions.',
    body: [
      p(
        'What lies beneath a building can be just as important as what you see above ground.'
      ),
      p(
        'Two sites that look almost identical on the surface can have completely different soil and groundwater conditions.'
      ),
      { type: 'heading', text: 'What Is Site Investigation?' },
      p(
        'Site investigation involves examining the physical and engineering characteristics of a proposed construction site.'
      ),
      p('Depending on the project, this may involve:'),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Site reconnaissance',
          'Topographical surveys',
          'Soil investigation',
          'Trial pits',
          'Boreholes',
          'Laboratory testing',
          'Groundwater assessment',
        ],
      },
      { type: 'heading', text: 'Why Is It Important?' },
      p(
        'Proper investigation helps professionals understand the conditions they are designing for. It can help identify:'
      ),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Weak or compressible soils that may require special consideration.',
          'Groundwater conditions that can affect excavation and foundations.',
          'Variations in soil layers across the site.',
          'Potential drainage or stability issues.',
        ],
      },
      { type: 'heading', text: 'The Cost of Getting It Wrong' },
      p(
        'Inadequate site investigation can contribute to inappropriate foundation decisions, excessive settlement, cracking and other structural or construction problems.'
      ),
      p(
        'The cost of investigation is therefore not simply another project expense. It is an investment in informed design and construction.'
      ),
    ],
    date: '2026-08-09',
    author: 'Beaverstone',
    image: '/projects/brooksville/sunset-landscape.png',
  },
  {
    slug: 'common-construction-mistakes',
    category: 'Blogs',
    title: '5 Common Construction Mistakes That Can Cost You Millions',
    excerpt:
      'Construction mistakes can be expensive to correct — especially when they are discovered after the building has progressed significantly. Here are five common mistakes property owners should avoid.',
    body: [
      p(
        'Construction mistakes can be expensive to correct — especially when they are discovered after the building has progressed significantly.'
      ),
      p('Here are five common mistakes property owners should avoid.'),
      {
        type: 'list',
        style: 'number',
        items: [
          'Starting Without Proper Planning — Beginning construction without complete drawings, budgets and a realistic project plan can create delays and unexpected expenses.',
          'Using Poor-Quality Materials — Trying to reduce costs through unsuitable or substandard materials can compromise durability and performance.',
          'Ignoring Site Conditions — Building without adequately understanding soil, drainage and terrain conditions can create serious problems later.',
          'Poor Workmanship — Even quality materials can produce poor results when installation and construction are not properly executed.',
          'Inadequate Supervision — Without effective site supervision, deviations from drawings, specifications and quality requirements may go unnoticed.',
        ],
      },
      { type: 'heading', text: 'The Bigger Lesson' },
      p(
        "Saving money during construction should not mean compromising the elements that determine the building's safety, durability and performance."
      ),
      p('Build correctly the first time.'),
    ],
    date: '2026-08-10',
    author: 'Beaverstone',
    image: '/other_images/8.png',
  },
  {
    slug: 'poor-foundation-work-effects',
    category: 'Blogs',
    title: 'How Poor Foundation Work Can Affect a Building',
    excerpt:
      'A building is only as reliable as the system supporting it. The foundation transfers the loads from the structure into the ground, making foundation design and construction one of the most critical stages of a building project.',
    body: [
      p('A building is only as reliable as the system supporting it.'),
      p(
        'The foundation transfers the loads from the structure into the ground, making foundation design and construction one of the most critical stages of a building project.'
      ),
      {
        type: 'heading',
        text: 'Problems Associated With Poor Foundation Work',
      },
      p('Poor foundation construction can contribute to:'),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Differential settlement',
          'Cracking',
          'Uneven floors',
          'Misaligned structural elements',
          'Doors and windows becoming difficult to operate',
          'Water-related problems',
          'Structural distress',
        ],
      },
      { type: 'heading', text: 'What Can Cause Foundation Problems?' },
      p('Several factors can contribute, including:'),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Inadequate site investigation',
          'Incorrect foundation selection',
          'Poor excavation',
          'Improper reinforcement',
          'Poor concrete quality',
          'Inadequate workmanship',
          'Incorrect setting out',
          'Failure to follow structural drawings',
        ],
      },
      { type: 'heading', text: "Don't Cut Corners Below Ground" },
      p(
        'Foundation works are often hidden once construction is complete. That makes quality control during this stage particularly important.'
      ),
      p(
        'What you cannot see after construction can still determine how the building performs for decades.'
      ),
    ],
    date: '2026-08-11',
    author: 'Beaverstone',
    image: '/other_images/15.png',
  },
  {
    slug: 'understanding-building-foundations',
    category: 'Blogs',
    title:
      'Understanding Building Foundations: What Every Property Owner Should Know',
    excerpt:
      'The foundation is the interface between a building and the ground beneath it. Its purpose is to safely transfer the loads of the structure to the soil without unacceptable movement or failure.',
    body: [
      p(
        'The foundation is the interface between a building and the ground beneath it.'
      ),
      p(
        'Its purpose is to safely transfer the loads of the structure to the soil without unacceptable movement or failure.'
      ),
      { type: 'heading', text: 'Common Foundation Types' },
      p(
        'Depending on the building and site conditions, foundations may include:'
      ),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Strip foundations — often used beneath load-bearing walls where soil conditions and building loads are suitable.',
          'Pad foundations — used to support individual columns or concentrated loads.',
          'Raft foundations — a large reinforced concrete foundation that distributes building loads over a wider area.',
          'Pile foundations — used where suitable bearing strata are deeper or where site and structural conditions require deep foundations.',
        ],
      },
      { type: 'heading', text: 'There Is No Universal Foundation' },
      p(
        'A foundation should not be selected simply because it was used successfully on another project. The appropriate foundation depends on factors such as:'
      ),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Soil conditions',
          'Building loads',
          'Groundwater',
          'Site constraints',
          'Structural design',
          'Applicable standards and regulations',
        ],
      },
      p('The right foundation begins with understanding the ground.'),
    ],
    date: '2026-08-12',
    author: 'Beaverstone',
    image: '/other_images/5.png',
  },
  {
    slug: 'quality-materials-property-development',
    category: 'Blogs',
    title: 'Why Quality Materials Matter in Property Development',
    excerpt:
      'Construction materials directly influence the durability, safety, appearance and performance of a building. Every component contributes to the final result.',
    body: [
      p(
        'Construction materials directly influence the durability, safety, appearance and performance of a building.'
      ),
      p(
        'From cement and aggregates to reinforcement steel, blocks, roofing materials, windows, doors and finishing products, every component contributes to the final result.'
      ),
      { type: 'heading', text: 'Quality Is More Than Appearance' },
      p(
        'A material may look good but still perform poorly if it does not meet the required specifications. Quality construction requires:'
      ),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Appropriate material selection',
          'Proper storage',
          'Correct proportions and mix designs where applicable',
          'Testing where required',
          'Proper installation',
          'Quality control throughout construction',
        ],
      },
      { type: 'heading', text: 'The Cost of Poor Materials' },
      p(
        'Using unsuitable materials can result in premature deterioration, increased maintenance costs, poor finishes and potentially serious construction defects.'
      ),
      { type: 'heading', text: 'Building for the Long Term' },
      p(
        'A property should not simply look impressive when completed. It should be designed and constructed to perform over time.'
      ),
      p(
        'At Beaverstone, our philosophy is simple: quality should be built into a property — not added as an afterthought.'
      ),
    ],
    date: '2026-08-13',
    author: 'Beaverstone',
    image: '/projects/roceilli/kitchen.jpg',
  },
  {
    slug: 'identify-poor-construction-work',
    category: 'Blogs',
    title: 'How to Identify Poor Construction Work',
    excerpt:
      'A finished building can look attractive while concealing underlying construction problems. Learning what to look for can help you make better decisions.',
    body: [
      p(
        'A finished building can look attractive while concealing underlying construction problems.'
      ),
      p(
        'Whether you are buying a newly completed property or inspecting an existing building, learning what to look for can help you make better decisions.'
      ),
      { type: 'heading', text: 'Look at the Walls' },
      p(
        'Watch for significant cracks, damp patches, uneven surfaces and poor finishing.'
      ),
      p(
        'Not every crack indicates structural failure, but unusual or progressive cracking deserves professional assessment.'
      ),
      { type: 'heading', text: 'Examine Floors' },
      p(
        'Look for excessive unevenness, hollow-sounding tiles, poor slopes and water ponding.'
      ),
      { type: 'heading', text: 'Check Doors and Windows' },
      p(
        'Difficulty opening or closing doors and windows may sometimes indicate poor installation, movement or other building issues.'
      ),
      { type: 'heading', text: 'Inspect Plumbing' },
      p(
        'Check for leaks, poor drainage, inadequate water pressure and signs of moisture.'
      ),
      { type: 'heading', text: 'Examine Electrical Installations' },
      p(
        'Electrical installations should be properly executed and protected according to applicable requirements.'
      ),
      { type: 'heading', text: 'Look at Finishes' },
      p(
        'Poor alignment, inconsistent joints, uneven plastering and low-quality finishing can indicate inadequate workmanship.'
      ),
      { type: 'heading', text: 'Get Professional Advice' },
      p('A visual inspection is useful, but it cannot reveal every problem.'),
      p(
        'For significant property purchases, professional inspection can provide a much more comprehensive assessment.'
      ),
    ],
    date: '2026-08-14',
    author: 'Beaverstone',
    image: '/other_images/7.png',
  },
  {
    slug: 'importance-professional-project-supervision',
    category: 'Blogs',
    title: 'The Importance of Professional Project Supervision',
    excerpt:
      'A construction project can have excellent drawings and quality materials and still produce poor results if execution is not properly supervised.',
    body: [
      p(
        'A construction project can have excellent drawings and quality materials and still produce poor results if execution is not properly supervised.'
      ),
      { type: 'heading', text: 'What Does Project Supervision Involve?' },
      p(
        'Professional supervision helps ensure that construction activities are carried out in accordance with approved drawings, specifications, quality requirements and project plans. This can include monitoring:'
      ),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Setting out',
          'Excavation',
          'Reinforcement',
          'Formwork',
          'Concrete works',
          'Masonry',
          'Roofing',
          'Building services',
          'Finishes',
          'Health and safety requirements',
        ],
      },
      { type: 'heading', text: 'Why Does It Matter?' },
      p(
        'Effective supervision can help identify problems early rather than allowing them to become expensive defects.'
      ),
      p(
        'It also helps coordinate contractors, artisans, suppliers and other project stakeholders.'
      ),
      { type: 'heading', text: 'Supervision Protects the Investment' },
      p(
        'For property owners, professional supervision provides greater confidence that money is being spent according to the intended design and construction requirements.'
      ),
      p(
        'A construction project needs more than workers. It needs competent oversight.'
      ),
    ],
    date: '2026-08-15',
    author: 'Beaverstone',
    image: '/other_images/12.png',
    imagePosition: 'center 20%',
  },
  {
    slug: 'construction-quality-property-value',
    category: 'Blogs',
    title: 'How Construction Quality Affects Property Value',
    excerpt:
      "Property value is influenced by more than location and land size. The quality of construction can have a significant effect on a property's desirability, durability and long-term performance.",
    body: [
      p('Property value is influenced by more than location and land size.'),
      p(
        "The quality of construction can have a significant effect on a property's desirability, durability and long-term performance."
      ),
      { type: 'heading', text: 'Quality Construction Can Provide' },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Greater durability — well-executed buildings can perform better over time.',
          'Lower maintenance requirements — quality workmanship and materials can reduce the frequency of repairs.',
          'Better buyer confidence — prospective buyers are more likely to value properties that demonstrate good construction standards.',
          'Better marketability — a well-designed and well-built property can stand out in a competitive market.',
        ],
      },
      { type: 'heading', text: 'Construction Is an Investment' },
      p(
        'Cutting corners during construction may reduce initial expenditure, but it can create higher costs later through repairs, maintenance and reduced property appeal.'
      ),
      p(
        "For developers, homeowners and investors alike: construction quality is part of the property's value proposition."
      ),
    ],
    date: '2026-08-16',
    author: 'Beaverstone',
    image: '/projects/gardenia_court/4.png',
  },
  {
    slug: 'what-makes-well-designed-home',
    category: 'Blogs',
    title: 'What Makes a Well-Designed Home?',
    excerpt:
      'A beautiful home is not necessarily a well-designed home. Good residential design combines aesthetics, functionality, comfort, safety and efficient use of space.',
    body: [
      p('A beautiful home is not necessarily a well-designed home.'),
      p(
        'Good residential design combines aesthetics, functionality, comfort, safety and efficient use of space.'
      ),
      { type: 'heading', text: 'Functionality' },
      p('Rooms should be arranged according to how people actually use them.'),
      { type: 'heading', text: 'Natural Light and Ventilation' },
      p(
        'Thoughtful placement of windows and openings can improve indoor comfort and reduce reliance on artificial lighting and mechanical ventilation.'
      ),
      { type: 'heading', text: 'Efficient Space Planning' },
      p('Good design makes every square metre useful.'),
      { type: 'heading', text: 'Privacy' },
      p(
        'Bedrooms, living areas, service spaces and outdoor areas should be arranged with appropriate consideration for privacy.'
      ),
      { type: 'heading', text: 'Circulation' },
      p(
        'Movement through the house should feel natural rather than confusing or restrictive.'
      ),
      { type: 'heading', text: 'Climate Responsiveness' },
      p(
        "In Nigeria's climate, factors such as solar exposure, shading, ventilation, rainwater management and material selection deserve careful consideration."
      ),
      { type: 'heading', text: 'Beauty and Performance' },
      p('The best homes combine visual appeal with practical performance.'),
      p(
        'A well-designed home should not only look good — it should live well.'
      ),
    ],
    date: '2026-08-17',
    author: 'Beaverstone',
    image: '/other_images/9.png',
  },
  {
    slug: 'inspect-property-before-buying',
    category: 'Blogs',
    title: 'Why You Should Inspect a Property Before Buying It',
    excerpt:
      'Buying property is a significant financial commitment. A property may look perfect during a brief viewing, but a proper inspection can reveal issues that are not immediately visible.',
    body: [
      p('Buying property is a significant financial commitment.'),
      p(
        'A property may look perfect during a brief viewing, but a proper inspection can reveal issues that are not immediately visible.'
      ),
      { type: 'heading', text: 'What Should You Inspect?' },
      p('Look at:'),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Structural condition',
          'Walls and ceilings',
          'Roof',
          'Floors',
          'Doors and windows',
          'Plumbing',
          'Electrical installations',
          'Drainage',
          'Water systems',
          'Finishes',
          'External works',
          'Site conditions',
        ],
      },
      { type: 'heading', text: 'Why Inspection Matters' },
      p(
        'An inspection can help you identify defects, estimate potential repair costs and make a more informed purchasing decision.'
      ),
      p(
        'It can also help you negotiate when significant defects are discovered.'
      ),
      { type: 'heading', text: "Don't Inspect With Your Eyes Alone" },
      p(
        'For substantial property purchases, consider engaging qualified professionals who can assess the building from technical and legal perspectives.'
      ),
      p(
        'A few hours of professional inspection can help protect an investment worth millions of naira.'
      ),
    ],
    date: '2026-08-18',
    author: 'Beaverstone',
    image: '/other_images/1.png',
  },
  {
    slug: 'architectural-design-to-construction-process',
    category: 'Blogs',
    title:
      'From Architectural Design to Construction: The Development Process Explained',
    excerpt:
      'Successful property development requires multiple professionals and disciplines working together. The journey from an idea to a completed building typically follows several stages.',
    body: [
      p(
        'Successful property development requires multiple professionals and disciplines working together.'
      ),
      p(
        'The journey from an idea to a completed building typically follows several stages.'
      ),
      {
        type: 'list',
        style: 'number',
        items: [
          "Concept Development — The developer establishes the project's purpose, target market, location, budget and overall vision.",
          'Site Assessment — The site is examined to understand its physical, environmental and regulatory characteristics.',
          'Architectural Design — Architects transform the concept into functional spaces and architectural drawings.',
          'Engineering Design — Structural, electrical, mechanical and other engineering requirements are developed as appropriate.',
          'Cost Planning — Quantities, materials, labour and other project costs are evaluated to establish a realistic budget.',
          'Approvals — Relevant planning and building approvals are obtained.',
          'Construction — The project moves from drawings to physical execution — from setting out and foundation works through structural construction, services and finishing.',
          'Quality Control — Construction activities and materials are monitored to ensure the project meets the required standards.',
          'Completion and Handover — The finished property is inspected, outstanding issues are addressed and the property is prepared for occupation or delivery.',
        ],
      },
      p(
        'Great buildings begin as ideas, but they become valuable assets through disciplined design and execution.'
      ),
    ],
    date: '2026-08-19',
    author: 'Beaverstone',
    image: '/projects/beaverton-heights/aerial-top-down.jpeg',
  },
  {
    slug: 'beaverstone-builds-behind-the-scenes',
    category: 'Blogs',
    title:
      'BEAVERSTONE BUILDS: Behind the Scenes of How We Design, Develop & Deliver',
    excerpt:
      'A building is more than concrete, blocks and finishes. Through BEAVERSTONE BUILDS, we take you behind the scenes of our development process — from the first concept on paper to the finished property.',
    body: [
      p('A building is more than concrete, blocks and finishes.'),
      p(
        'Behind every completed Beaverstone property is a process of planning, design, engineering, construction, supervision and attention to detail.'
      ),
      p(
        'Through BEAVERSTONE BUILDS, we take you behind the scenes of our development process — from the first concept on paper to the finished property.'
      ),
      { type: 'heading', text: 'Concept' },
      p('Every project begins with a vision.'),
      p(
        "We identify the purpose of the development, understand the target market and establish the project's design and investment objectives."
      ),
      { type: 'heading', text: 'Design' },
      p('Ideas become detailed plans.'),
      p(
        'Our architectural and engineering processes transform concepts into functional, practical and aesthetically considered designs.'
      ),
      { type: 'heading', text: 'Site & Foundation' },
      p('Before a building rises, the ground beneath it matters.'),
      p(
        'Site preparation, setting out, excavation and foundation works establish the base upon which the structure will stand.'
      ),
      { type: 'heading', text: 'Structure' },
      p('This is where the building begins to take shape.'),
      p(
        "Columns, beams, slabs, walls and other structural elements are carefully executed according to the project's technical requirements."
      ),
      { type: 'heading', text: 'Finishing' },
      p('The structure becomes a home.'),
      p(
        'Roofing, doors, windows, electrical and plumbing installations, flooring, painting, ceilings, landscaping and other finishing elements bring the development to life.'
      ),
      { type: 'heading', text: 'Completion' },
      p('The details come together.'),
      p(
        'After inspections, quality checks and final corrections, the completed property is prepared for delivery.'
      ),
      { type: 'heading', text: 'The Result' },
      p(
        'A property designed not only to look good, but to serve its purpose, perform over time and create lasting value.'
      ),
      p(
        'BEAVERSTONE BUILDS is our opportunity to show you what happens behind the finished walls.'
      ),
      p(
        "Because at Beaverstone, we don't just sell property. We understand how it is designed. We understand how it is built. And we understand why quality matters."
      ),
    ],
    date: '2026-08-20',
    author: 'Beaverstone',
    image: '/other_images/14.png',
    imagePosition: 'center 15%',
  },
  {
    slug: 'why-abuja-attractive-real-estate-market',
    category: 'Blogs',
    title:
      "Why Abuja Remains One of Nigeria's Most Attractive Real Estate Markets",
    excerpt:
      "Abuja is more than Nigeria's capital city. It is a rapidly developing urban centre with growing demand for residential, commercial and investment properties.",
    body: [
      p(
        "Abuja is more than Nigeria's capital city. It is a rapidly developing urban centre with growing demand for residential, commercial and investment properties."
      ),
      p(
        'As the seat of government, Abuja attracts civil servants, diplomats, business owners, professionals, entrepreneurs, investors and families from across Nigeria and beyond. This continuous influx of people creates sustained demand for housing and other forms of real estate.'
      ),
      { type: 'heading', text: 'A City Designed for Growth' },
      p(
        'Unlike many older cities, Abuja was planned with distinct districts, major road networks and designated areas for residential, commercial and institutional development.'
      ),
      p(
        'Over the years, development has continued to expand beyond the traditional city centre into areas such as Kubwa, Lugbe, Dei-Dei, Gwarinpa and other emerging districts.'
      ),
      p(
        'This expansion creates opportunities for property investors who understand where development is heading.'
      ),
      { type: 'heading', text: 'Why Investors Look to Abuja' },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Growing population — more residents create greater demand for housing.',
          'Economic activity — businesses and professionals continue to establish themselves across the Federal Capital Territory.',
          'Infrastructure development — roads and other infrastructure can influence accessibility and property demand.',
          'Land availability — developing districts can provide opportunities for investors seeking land before areas become fully established.',
          "Strong housing demand — Abuja's expanding population continues to support demand for apartments, duplexes, terraces and other residential developments.",
        ],
      },
      { type: 'heading', text: "Look Beyond Today's Price" },
      p('A property should not be judged only by how much it costs today.'),
      p(
        'Investors should also consider what the surrounding location could become in five, ten or fifteen years.'
      ),
      p(
        'At Beaverstone, we believe the best real estate decisions combine location, quality, due diligence and long-term vision.'
      ),
    ],
    date: '2026-08-21',
    author: 'Beaverstone',
    image: '/projects/eden_crown_estate/5.png',
  },
  {
    slug: 'emerging-areas-real-estate-investment-abuja',
    category: 'Blogs',
    title: 'Emerging Areas to Watch for Real Estate Investment in Abuja',
    excerpt:
      "Abuja's real estate landscape is constantly evolving. As the city expands, previously less-developed areas can gradually become more connected, populated and commercially active.",
    body: [
      p("Abuja's real estate landscape is constantly evolving."),
      p(
        'As the city expands, previously less-developed areas can gradually become more connected, populated and commercially active.'
      ),
      p(
        'For investors, this creates an important question: where is Abuja growing next?'
      ),
      { type: 'heading', text: 'What Makes an Emerging Area Attractive?' },
      p(
        'Rather than focusing solely on a particular district, investors should look for certain indicators.'
      ),
      {
        type: 'list',
        style: 'number',
        items: [
          'Improving Infrastructure — new and improved roads can make previously less-accessible locations more attractive.',
          'Increasing Construction Activity — when developers begin acquiring land and constructing residential estates, it can indicate growing confidence in an area.',
          'Population Growth — new residents create demand for houses, shops, schools, healthcare facilities and other services.',
          'Proximity to Established Districts — areas close to established neighbourhoods and major transportation routes can benefit from urban expansion.',
          'Commercial Development — the arrival of businesses and commercial facilities can contribute to increasing activity and demand.',
        ],
      },
      { type: 'heading', text: 'Invest Before the Crowd?' },
      p(
        'Buying into an emerging area can provide investors with an opportunity to enter the market before prices potentially rise significantly.'
      ),
      p('However, emerging does not automatically mean profitable.'),
      p(
        'Always investigate title documentation, accessibility, infrastructure plans, development patterns and market demand before investing.'
      ),
    ],
    date: '2026-08-22',
    author: 'Beaverstone',
    image: '/projects/nelmond_metropolis/2.png',
  },
  {
    slug: 'abuja-kubwa-corridor-property-investors',
    category: 'Blogs',
    title: 'Why the Abuja–Kubwa Corridor Is Attracting Property Investors',
    excerpt:
      "The Abuja–Kubwa corridor has become an increasingly important part of the Federal Capital Territory's residential and commercial growth.",
    body: [
      p(
        "The Abuja–Kubwa corridor has become an increasingly important part of the Federal Capital Territory's residential and commercial growth."
      ),
      p(
        "Its connection to Abuja's wider road network, established communities and expanding development has made the corridor an area worth watching."
      ),
      { type: 'heading', text: 'Accessibility Matters' },
      p(
        'One of the biggest factors influencing real estate value is accessibility.'
      ),
      p(
        'People want homes and businesses that allow them to conveniently connect to workplaces, commercial centres and other parts of the city.'
      ),
      p(
        'The Abuja–Kubwa axis provides access to several important parts of the FCT and surrounding areas.'
      ),
      { type: 'heading', text: 'Development Creates Opportunity' },
      p(
        'As population and construction activity increase along a corridor, demand for residential properties, land, commercial spaces, retail outlets and rental accommodation can also increase.'
      ),
      p(
        'This makes the corridor relevant to both owner-occupiers and investors.'
      ),
      { type: 'heading', text: 'Why Investors Should Pay Attention' },
      p(
        'Real estate opportunities are often created by the interaction between location, infrastructure and demand.'
      ),
      p(
        'For investors considering the Abuja–Kubwa axis, the important question is not simply "Is property available here?" It is "What is happening here, and where is development heading?"'
      ),
      p('That distinction can help investors make more strategic decisions.'),
    ],
    date: '2026-08-23',
    author: 'Beaverstone',
    image: '/projects/nelmond_metropolis/5.png',
  },
  {
    slug: 'dei-dei-kubwa-lugbe-gwarinpa-comparison',
    category: 'Blogs',
    title: 'Dei-Dei, Kubwa, Lugbe or Gwarinpa: Which Area Is Right for You?',
    excerpt:
      'There is no single "best" location in Abuja. The right location depends on your budget, lifestyle, investment objective and preferred level of development.',
    body: [
      p('There is no single "best" location in Abuja.'),
      p(
        'The right location depends on your budget, lifestyle, investment objective and preferred level of development.'
      ),
      { type: 'heading', text: 'Dei-Dei' },
      p(
        'Dei-Dei and its surrounding areas are associated with significant commercial and residential activity.'
      ),
      p(
        'For investors, developing areas around major transportation routes can be worth considering because accessibility and commercial activity can influence future demand.'
      ),
      { type: 'heading', text: 'Kubwa' },
      p(
        "Kubwa is one of Abuja's established satellite communities, offering a large residential population and extensive supporting infrastructure."
      ),
      p(
        'It can appeal to people looking for established communities and investors interested in residential demand.'
      ),
      { type: 'heading', text: 'Lugbe' },
      p(
        "Lugbe's proximity to the airport corridor and major transportation routes has contributed to its residential growth."
      ),
      p(
        'The area offers a mixture of established communities and developing estates.'
      ),
      { type: 'heading', text: 'Gwarinpa' },
      p(
        "Gwarinpa is one of Abuja's prominent residential districts, known for its established housing market, businesses and amenities."
      ),
      p(
        'Properties in more established neighbourhoods may command higher prices, but they can also benefit from existing infrastructure and demand.'
      ),
      { type: 'heading', text: 'So Which One Should You Choose?' },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Lower entry cost — look at developing locations.',
          'Rental income — look at areas with strong housing demand.',
          'Long-term appreciation — look at growth corridors.',
          'Immediate residential use — look at established neighbourhoods.',
          'Commercial investment — look at high-traffic locations.',
          'Future development — look at infrastructure and expansion corridors.',
        ],
      },
      p(
        "The best location isn't necessarily the most expensive one. It's the one that best matches your investment strategy."
      ),
    ],
    date: '2026-08-24',
    author: 'Beaverstone',
    image: '/projects/eden_crown_estate/4.png',
  },
  {
    slug: 'roads-infrastructure-property-values-abuja',
    category: 'Blogs',
    title: 'How New Roads and Infrastructure Affect Property Values in Abuja',
    excerpt:
      'Infrastructure is one of the most important forces shaping real estate development. A new road can do more than reduce travel time.',
    body: [
      p(
        'Infrastructure is one of the most important forces shaping real estate development.'
      ),
      p(
        'A new road can do more than reduce travel time. It can change how people perceive and interact with an entire neighbourhood.'
      ),
      { type: 'heading', text: 'Accessibility Creates Demand' },
      p(
        'When a previously difficult-to-reach area becomes easier to access, it can attract residents, businesses, developers, investors and service providers.'
      ),
      p(
        'As activity increases, demand for land and property may also increase.'
      ),
      { type: 'heading', text: 'Infrastructure Can Unlock Development' },
      p('Roads often encourage other forms of development.'),
      p(
        'New residential estates may emerge. Businesses may open. Schools, supermarkets, healthcare facilities and other services may follow.'
      ),
      p(
        'This creates a development cycle: Infrastructure → Accessibility → Population Growth → Business Activity → Increased Property Demand.'
      ),
      { type: 'heading', text: "But Infrastructure Alone Isn't Enough" },
      p('A new road does not automatically guarantee property appreciation.'),
      p('Investors should also consider:'),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Land titles',
          'Flood risk and drainage',
          'Security',
          'Planning regulations',
          'Surrounding development',
          'Market demand',
          'Quality of the infrastructure',
        ],
      },
      p('Smart property investment requires looking at the entire picture.'),
    ],
    date: '2026-08-25',
    author: 'Beaverstone',
    image: '/projects/nelmond_metropolis/3.png',
  },
  {
    slug: 'future-residential-development-abuja',
    category: 'Blogs',
    title: 'The Future of Residential Development in Abuja',
    excerpt:
      "Abuja's residential landscape is changing. As the population grows and lifestyles evolve, demand is shifting toward developments that combine accessibility, functionality, security, comfort and modern design.",
    body: [
      p("Abuja's residential landscape is changing."),
      p(
        'As the population grows and lifestyles evolve, demand is shifting toward residential developments that combine accessibility, functionality, security, comfort and modern design.'
      ),
      { type: 'heading', text: 'From Houses to Communities' },
      p(
        'Modern buyers increasingly want more than four walls and a roof. They are looking for communities with:'
      ),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Good roads',
          'Security',
          'Green spaces',
          'Reliable infrastructure',
          'Recreation',
          'Modern architectural designs',
          'Proximity to essential services',
        ],
      },
      p(
        'This is encouraging developers to think beyond individual buildings and focus on well-planned communities.'
      ),
      { type: 'heading', text: 'The Rise of Emerging Districts' },
      p(
        'As established areas become increasingly expensive, developers and investors are exploring emerging districts where land may be more accessible and larger developments can be planned.'
      ),
      { type: 'heading', text: 'The Future Is Strategic' },
      p(
        'Successful residential development will increasingly depend on understanding where people want to live, how they want to live, and what they can afford.'
      ),
      p(
        'At Beaverstone, our approach to development is centred on creating spaces that combine thoughtful planning, quality construction and long-term value.'
      ),
    ],
    date: '2026-08-26',
    author: 'Beaverstone',
    image: '/projects/nelmond_metropolis/1.png',
  },
  {
    slug: 'what-makes-location-premium-abuja',
    category: 'Blogs',
    title: 'What Makes a Location Premium in Abuja Real Estate?',
    excerpt:
      'The word "premium" is often used when describing Abuja properties. But what actually makes a location premium? It is rarely just the appearance of the neighbourhood.',
    body: [
      p('The word "premium" is often used when describing Abuja properties.'),
      p(
        'But what actually makes a location premium? It is rarely just the appearance of the neighbourhood.'
      ),
      {
        type: 'list',
        style: 'number',
        items: [
          'Accessibility — premium locations are generally well connected to major roads and important parts of the city.',
          'Infrastructure — reliable infrastructure contributes significantly to comfort, convenience and property demand.',
          'Security — safety is an important consideration for families, businesses and investors.',
          'Proximity to Amenities — being close to schools, hospitals, shopping centres, restaurants, offices and recreational facilities can increase the attractiveness of a location.',
          'Neighbourhood Quality — well-planned communities with good layouts, drainage, landscaping and building standards can command greater demand.',
          'Future Potential — a location can also be considered premium because of what it is likely to become.',
        ],
      },
      p(
        "This is why experienced investors don't only examine the current state of a location. They study its development trajectory."
      ),
    ],
    date: '2026-08-27',
    author: 'Beaverstone',
    image: '/projects/nelmond_court/5.png',
  },
  {
    slug: 'buying-property-abuja-diaspora-nigerians',
    category: 'Blogs',
    title:
      'Buying Property in Abuja as a Diaspora Nigerian: What You Should Know',
    excerpt:
      'Living outside Nigeria should not prevent you from investing in Nigerian real estate. However, buying property remotely requires careful planning and proper verification.',
    body: [
      p(
        'Living outside Nigeria should not prevent you from investing in Nigerian real estate.'
      ),
      p(
        'However, buying property remotely requires careful planning and proper verification.'
      ),
      {
        type: 'list',
        style: 'number',
        items: [
          'Work With Reputable Professionals — whether you are buying land or a completed property, work with reputable developers, real estate professionals and legal practitioners.',
          'Verify Documentation — never rely solely on photographs, videos or verbal assurances. Property documentation and ownership should be properly verified.',
          'Understand the Location — if you cannot visit personally, arrange a trusted representative or professional to inspect the property and surrounding area.',
          'Request Proper Documentation — ask for relevant documents, survey information, agreements and receipts associated with the transaction.',
          'Understand the Payment Process — make sure payments are made through legitimate and traceable channels and that you receive appropriate documentation for every transaction.',
          'Consider Your Investment Objective — are you buying for your future home, rental income, capital appreciation, your family, or development? Your objective should determine the property you choose.',
        ],
      },
      p(
        'Distance should not prevent you from investing — but it should make due diligence even more important.'
      ),
    ],
    date: '2026-08-28',
    author: 'Beaverstone',
    image: '/other_images/3.jpeg',
    imagePosition: 'center',
  },
  {
    slug: 'developing-areas-better-investment-opportunities',
    category: 'Blogs',
    title: 'Why Developing Areas Can Offer Better Investment Opportunities',
    excerpt:
      'Established neighbourhoods often come with established infrastructure, amenities and higher property prices. Developing areas can provide access to property at earlier stages of growth.',
    body: [
      p(
        'Established neighbourhoods often come with established infrastructure, amenities and higher property prices.'
      ),
      p(
        "Developing areas, on the other hand, can provide investors with access to property at earlier stages of an area's growth."
      ),
      { type: 'heading', text: 'The Growth Opportunity' },
      p(
        'Imagine buying property when an area has few developments, limited commercial activity, developing roads and relatively low demand.'
      ),
      p(
        'Over time, infrastructure improves, developers arrive, businesses open and more residents move in.'
      ),
      p('Demand can increase — and property values may respond accordingly.'),
      { type: 'heading', text: 'The Important Question' },
      p(
        "The goal isn't to buy in any developing area. It is to identify a developing area with strong fundamentals. Look for:"
      ),
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Strategic location',
          'Government or private infrastructure investment',
          'Accessibility',
          'Population growth',
          'Developer activity',
          'Clear property documentation',
          'Long-term development potential',
        ],
      },
      p(
        'Early investment can create opportunity, but informed early investment is even more powerful.'
      ),
    ],
    date: '2026-08-29',
    author: 'Beaverstone',
    image: '/projects/gardenia_court/2.png',
  },
  {
    slug: 'buying-land-developing-estate-checklist',
    category: 'Blogs',
    title: 'What to Look for When Buying Land in a Developing Estate',
    excerpt:
      "Buying land in a developing estate can be an excellent way to enter the real estate market. But investors should look beyond the estate's marketing materials.",
    body: [
      p(
        'Buying land in a developing estate can be an excellent way to enter the real estate market.'
      ),
      p("But investors should look beyond the estate's marketing materials."),
      {
        type: 'list',
        style: 'number',
        items: [
          'Verify the Title — find out who owns the land and what title or documentation supports the ownership.',
          'Confirm the Estate Layout — make sure the plot being offered actually corresponds with the approved or registered layout.',
          'Inspect the Land — visit the property or engage a trusted professional to inspect it.',
          'Examine Accessibility — consider existing roads and the likelihood of future accessibility improvements.',
          'Check Infrastructure — ask about electricity, water, drainage, roads and other planned infrastructure.',
          "Understand the Development Plan — what is the developer's vision for the estate? Are there building guidelines, commercial areas, recreational spaces or future infrastructure plans?",
          'Understand All Costs — the advertised land price may not always represent the total cost of acquisition. Ask about documentation, development fees, infrastructure charges, legal fees and other applicable costs.',
          'Think Long Term — don\'t ask only "Can I afford this plot?" Also ask "What could this property be worth and how useful could this location become in the future?"',
        ],
      },
    ],
    date: '2026-08-30',
    author: 'Beaverstone',
    image: '/other_images/11.png',
    imagePosition: 'center 30%',
  },
  {
    slug: 'abuja-property-investment-first-time-buyers',
    category: 'Blogs',
    title: 'Abuja Property Investment: What First-Time Buyers Should Know',
    excerpt:
      'Buying your first property is exciting. It can also be overwhelming — different locations, different prices and numerous documents to consider.',
    body: [
      p('Buying your first property is exciting.'),
      p('It can also be overwhelming.'),
      p(
        'There are many properties on the market, different locations, different prices and numerous documents to consider.'
      ),
      p(
        'Here are some fundamental principles every first-time buyer should understand.'
      ),
      {
        type: 'list',
        style: 'number',
        items: [
          'Define Your Purpose — are you buying to live in the property, rent it out, resell it or hold it for appreciation? Your purpose should guide your decision.',
          'Set a Realistic Budget — consider not only the purchase price but also legal, documentation, development, maintenance and other associated costs.',
          'Research the Location — visit the area. Study accessibility, infrastructure, security and surrounding development.',
          'Never Ignore Documentation — a beautiful property with problematic ownership documentation can become a serious financial burden. Always conduct proper due diligence.',
          'Don\'t Rush Because of Pressure — statements such as "price is increasing tomorrow" or "only one plot remains" should not replace proper verification. A good investment deserves careful consideration.',
          'Think About the Future — consider how the area could develop over the next five to ten years.',
          'Work With Trusted Professionals — real estate involves significant financial commitments. Independent legal and professional advice can help you identify potential risks before completing a transaction.',
        ],
      },
      {
        type: 'heading',
        text: 'Your Next Property Decision Should Be Built on Vision',
      },
      p(
        "Abuja's real estate market continues to evolve, creating opportunities for homeowners, investors and developers. But finding the right opportunity requires more than simply finding a property at the right price."
      ),
      p(
        'It requires understanding location, infrastructure, documentation, market demand and long-term potential.'
      ),
      p(
        'At Beaverstone, we are committed to creating and identifying real estate opportunities that combine strategic locations, quality development and lasting value.'
      ),
      p(
        "Whether you're purchasing your first plot of land, looking for your next investment, building your dream home or expanding your property portfolio, we are ready to help you make a more informed decision."
      ),
    ],
    date: '2026-08-31',
    author: 'Beaverstone',
    image: '/other_images/10.png',
  },
];

export const events: MediaEvent[] = [
  {
    slug: 'end-of-year-party',
    title: 'Beaverstone Unwinds — End of Year Party',
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
    title: 'Opening of the Beaverstone Headquarters',
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
