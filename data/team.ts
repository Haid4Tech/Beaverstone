export type TeamMember = {
  name: string;
  role: string;
  image: string;
  email?: string;
  bio?: string[];
};

// URL slug from a member's name, e.g. "Engr. Jane Doe" -> "engr-jane-doe".
export const memberSlug = (m: TeamMember) =>
  m.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// Placeholder names/photos — not the real Beaverstone board or management team.
export const boardOfDirectors: TeamMember[] = [
  {
    name: 'Adebayo Coker',
    role: 'Chairman, Board of Directors',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    bio: [
      'Over two decades of experience across real estate development and finance in West Africa.',
    ],
  },
  {
    name: 'Ngozi Falade',
    role: 'Vice Chair, Board of Directors',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    bio: [
      "Brings a background in corporate law and structured finance to the group's board.",
    ],
  },
  {
    name: 'Emeka Osayande',
    role: 'Non-Executive Director',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop',
    bio: [
      "Advises on strategy and governance across the group's member companies.",
    ],
  },
  {
    name: 'Folake Adeyemi',
    role: 'Non-Executive Director',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: ['Specialises in urban planning policy and sustainable development.'],
  },
];

export const managementTeam: TeamMember[] = [
  {
    name: 'Engr. Izuchukwu Joseph',
    email: 'jay@thebeaverstone.com',
    role: 'Managing Director/ CEO',
    image: '/staff/eng_joseph.webp',
    bio: [
      'Engr. Izuchukwu Joseph is the Managing Director and Chief Executive Officer of Beaverstone Realty Ltd. He is an engineering graduate of Purdue University in West Lafayette, Indiana, USA and University of West Georgia in Carrollton, Georgia, USA.',
      'His experience spans real estate investment analysis, property acquisition, project development, contractor coordination, deal structuring, joint venture planning, and luxury property market positioning.',
      'He previously worked as an independent real estate broker and joint venture expert before moving into full time luxury development with a drive to revolutionize the sector with standard architectural and functional developments. A very good example of this is Beaverstone NOK Residences, which will be built using sustainable home-sourced materials like terracotta, wood, and red bricks.',
      'As the driving force behind Beaverstone, he oversees the company’s strategic direction, identifies development opportunities, structures investment propositions, and leads initiatives to deliver properties that combine architectural quality, functionality, and investment potential. Through projects such as Roceilli, NOK Residences, Brooksville Estate, and more, he continues to pursue his vision of building distinctive real estate assets and creating lasting value for investors and homeowners, guided by Beaverstone’s philosophy: “Build. Beyond. Better.”',
    ],
  },
  {
    name: 'Engr. Emmanuel Asomugha',
    email: 'shoms@thebeaverstone.com',
    role: 'Executive Director/ COO',
    image: '/staff/eng_emmanuel.webp',
    bio: [
      'Engr. Emmanuel Asomugha is an engineering graduate of University of Texas at Arlington, Texas, USA.',
      'He is a real estate and venture capital investor who transitioned into a strategic leadership role as a board-level partner in the company. Bringing a strong investment-oriented perspective to the business, his expertise centers on risk assessment, asset positioning, and identifying opportunities that enhance property value and long-term investment performance.',
      'His experience in luxury real estate investment informs Beaverstone’s approach to evaluating development opportunities, positioning assets within competitive markets, and balancing investment potential with risk management. As a member of the board, he contributes to strategic decision-making, investment evaluation, and the company’s broader vision of developing distinctive properties that combine lasting value, quality, and exclusivity.',
    ],
  },
  {
    name: 'Engr. Samuel Ocheja',
    email: 'sam@thebeaverstone.com',
    role: 'Director of Projects & Development',
    image: '/staff/samuel.webp',
    bio: [
      'Engr. Samuel Ebiojo Ocheja is a Civil Engineer who graduated with distinction from Ahmadu Bello University, Zaria, with a B.Eng. in Civil Engineering. He holds professional certifications in Construction Project Management from Columbia University and Google Project Management.',
      'With experience in construction, site supervision, project coordination, and property development, he brings a strategic and quality-driven approach to every project. At Beaverstone, he oversees project execution and development initiatives, ensuring efficiency, structural quality, and lasting value.',
    ],
  },
  {
    name: 'Delight Olusegun',
    email: 'kehinde@thebeaverstone.com',
    role: 'Operations Manager',
    image: '/staff/delight_o.webp',
    bio: [
      'Delight Kehinde Olusegun is a real estate professional, entrepreneur, and Head of Operations at Beaverstone Realty, bringing a blend of strategic thinking, operational leadership, and a passion for excellence to the real estate industry. He studied Public Health at the prestigious School of Health, Kaduna, an educational background that has contributed to his detail-oriented approach, analytical thinking, and appreciation for structure and effective management.',
      'Having been involved in various building projects, Delight has developed a practical appreciation for the processes, coordination, and attention to detail required to bring development projects to life. His broader experience in business operations, strategy, and project coordination informs his approach to real estate, where he values professionalism, efficiency, and the delivery of quality results.',
      'As Head of Operations at Beaverstone Realty, he is committed to strengthening operational processes, supporting the successful execution of projects, and contributing to the company’s vision of delivering quality properties and creating lasting value for clients and investors. Driven by a forward-thinking mindset and a commitment to continuous growth, Delight believes that successful real estate development goes beyond constructing buildings; it is about creating spaces that inspire confidence, serve meaningful purposes, and stand the test of time.',
    ],
  },
  {
    name: 'Faith Nwajiobi',
    email: 'faith@thebeaverstone.com',
    role: 'Human Resource Manager',
    image: '/staff/faith.webp',
    bio: [
      'Nwajiobi Faith holds a B.Agric. in Soil Science and Land Resources Management from the University of Nigeria, Nsukka. With skills in human resource management, administration, communication, and organisational coordination, she contributes to fostering a productive work environment and supporting the company’s operational objectives.',
      'At Beaverstone Realty Ltd, she is responsible for human resource functions, staff coordination, and administrative support, helping to promote organisational efficiency and maintain a professional workplace culture.',
    ],
  },
  {
    name: 'Brightstar Oluchi',
    email: 'oluchi@thebeaverstone.com',
    role: 'Social Media Strategist',
    image: '/staff/brightstar.webp',
    bio: [
      'Brightstar Oluchi Emmanuella is a Creative Professional who graduated with a 2:1 in History and International Studies Education from the University of Benin. She holds additional studies in Foreign Languages, with focus on French and Japanese.',
      'With experience in video editing, social media management, and content creation, she brings a creative, strategic, and globally-informed approach to every project. Combining strong research, storytelling, and cross-cultural communication skills, she builds compelling visual narratives and drives meaningful audience engagement.',
    ],
  },
  {
    name: 'Delight Onyewuchi',
    email: 'delight@thebeaverstone.com',
    role: 'Multimedia Producer | Graphic Designer',
    image: '/staff/delight.webp',
    bio: [
      'Delight Onyewuchi is a creative multimedia producer skilled in graphic design, video editing, videography, and print production. He is currently studying Science Laboratory Technology (SLT) at Nasarawa State University, Keffi.',
      'Proficient in Adobe Photoshop, CorelDRAW, and Canva, he is committed to delivering quality visual designs and multimedia content.',
    ],
  },
];
