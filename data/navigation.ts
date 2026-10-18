import { projects } from './projects';

export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; href: string; children: NavLink[] };
export type NavItem = NavLink | NavGroup;

export function isNavGroup(item: NavItem): item is NavGroup {
  return 'children' in item;
}

export const memberCompanies: NavGroup = {
  label: 'Partners',
  href: '/member-companies',
  children: [
    { label: 'Grenadines Homes', href: '/member-companies/grenadines-homes' },
    { label: 'Propertymart', href: '/member-companies/propertymart' },
    {
      label: 'Paltonloitte Limited',
      href: '/member-companies/paltonloitte-limited',
    },
    {
      label: 'Oceanna Development',
      href: '/member-companies/oceanna-development',
    },
    {
      label: 'Micherutti Contractors',
      href: '/member-companies/micherutti-contractors',
    },
    {
      label: 'Beaverstone Capital',
      href: '/member-companies/beaverstone-capital',
    },
  ],
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about-us',
    children: [
      { label: 'About Beaverstone', href: '/about-us' },
      { label: 'Management Team', href: '/about-us/management-team' },
      { label: 'Partner With Us', href: '/about-us/partner-with-us' },
      { label: 'Work With Us', href: '/about-us/careers' },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    children: [
      { label: 'All Projects', href: '/projects' },
      ...projects.map((p) => ({
        label: p.name,
        href: `/projects/${p.company.slug}/${p.slug}`,
      })),
    ],
  },
  { label: 'Partners', href: '/partners' },
  {
    label: 'Media',
    href: '/media',
    children: [
      // { label: 'News', href: '/media/news' },
      { label: 'Blog', href: '/media/blogs' },
      // { label: 'Events', href: '/media/events' },
    ],
  },
  { label: 'Contact Us', href: '/contact-us' },
];
