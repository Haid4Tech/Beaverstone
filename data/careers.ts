export type Job = {
  slug: string;
  title: string;
  company: string;
  location: string;
  department: string;
  reportsTo: string;
  summary: string[];
  responsibilities: { heading: string; items: string[] }[];
  requirements: string[];
  kpis: string[];
  compensation: string;
  applyEmail: string;
  applyCopy: string;
};

export const jobs: Job[] = [
  {
    slug: 'sales-executive',
    title: 'Sales Executive',
    company: 'Beaverstone Realty Ltd (The Beaverstone)',
    location: 'Gwarinpa, Abuja, Nigeria',
    department: 'Sales & Business Development',
    reportsTo: 'Director of Projects & Developments',
    summary: [
      "The Sales Executive will be responsible for driving property sales, generating qualified leads, developing client relationships, and identifying new business opportunities for Beaverstone. The successful candidate will actively market the company's properties, engage prospective buyers and investors, arrange property inspections, and convert enquiries into completed transactions.",
      'We are looking for a proactive, commercially minded individual who can independently source prospects, follow up consistently, negotiate professionally, and deliver measurable sales results.',
    ],
    responsibilities: [
      {
        heading: 'Property Sales & Marketing',
        items: [
          "Market and sell Beaverstone's residential properties, land, and investment opportunities.",
          'Identify prospective buyers, investors, and high-net-worth individuals.',
          'Present property offerings professionally and communicate their features, pricing, and investment potential.',
          'Arrange and conduct property inspections and client presentations.',
        ],
      },
      {
        heading: 'Lead Generation & Business Development',
        items: [
          'Generate leads through cold calling, direct outreach, referrals, networking, and digital channels.',
          'Build relationships with property agents, corporate organisations, professional firms, and potential investment partners.',
          "Identify new markets and opportunities for expanding Beaverstone's customer base.",
          'Develop and maintain a pipeline of qualified prospects.',
        ],
      },
      {
        heading: 'Client Relationship Management',
        items: [
          'Respond promptly to enquiries and follow up with prospective clients.',
          'Understand client needs and recommend suitable properties.',
          'Maintain relationships with existing clients and encourage referrals.',
          'Support clients throughout the sales process, from initial consultation to reservation and purchase.',
        ],
      },
      {
        heading: 'Negotiation & Sales Conversion',
        items: [
          'Negotiate professionally within company-approved pricing and payment terms.',
          'Follow up on offers, reservations, instalment plans, and outstanding client commitments.',
          'Work towards converting leads into sales and achieving assigned sales targets.',
          'Coordinate with management to ensure a smooth transaction and proper documentation.',
        ],
      },
      {
        heading: 'Reporting & Performance Tracking',
        items: [
          'Maintain accurate records of leads, calls, meetings, inspections, and sales activities.',
          'Submit regular sales reports and pipeline updates to management.',
          'Monitor market trends, competitor pricing, and customer feedback.',
          'Provide recommendations for improving sales performance and market penetration.',
        ],
      },
    ],
    requirements: [
      "Bachelor's degree, HND, or equivalent qualification in Business Administration, Marketing, Estate Management, or a related field is an advantage.",
      'Previous experience in real estate sales, business development, direct sales, or customer acquisition is preferred.',
      'Strong communication, presentation, persuasion, and negotiation skills.',
      'Ability to prospect independently and consistently follow up with leads.',
      'Commercial awareness and a results-driven mindset.',
      'Good organisational skills and proficiency with smartphones, email, spreadsheets, and digital communication tools.',
      'Knowledge of the Abuja property market is an advantage.',
      'Must be proactive, professional, trustworthy, and comfortable working towards sales targets.',
    ],
    kpis: [
      'Number and quality of qualified leads generated.',
      'Number of client meetings and property inspections arranged.',
      'Lead follow-up and conversion rates.',
      'Number and value of completed property sales.',
      'Revenue generated against assigned targets.',
      'New referral, agency, and corporate relationships established.',
      'Accuracy and consistency of sales reporting.',
    ],
    compensation:
      'Salary, sales commission, incentives, and other benefits will be communicated during the recruitment process and may be structured around experience and performance.',
    applyEmail: 'hr@thebeaverstone.com',
    applyCopy:
      'Interested candidates should submit their CV and a brief cover letter highlighting their sales experience, client acquisition skills, and relevant achievements.',
  },
];

export function getJob(slug: string) {
  return jobs.find((j) => j.slug === slug);
}
