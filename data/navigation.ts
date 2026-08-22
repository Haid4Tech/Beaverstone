export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; href: string; children: NavLink[] };
export type NavItem = NavLink | NavGroup;

export function isNavGroup(item: NavItem): item is NavGroup {
  return 'children' in item;
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about-us',
    children: [
      { label: 'About Palton Morgan', href: '/about-us' },
      { label: 'Board of Directors', href: '/about-us/board-of-directors' },
      { label: 'Management Team', href: '/about-us/management-team' },
      { label: 'Partner With Us', href: '/about-us/partner-with-us' },
      { label: 'Work With Us', href: '/about-us/careers' },
    ],
  },
  {
    label: 'Member Companies',
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
        label: 'Palton Morgan Capital',
        href: '/member-companies/palton-morgan-capital',
      },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    children: [
      { label: 'All Projects', href: '/projects' },
      { label: 'Kadars Gate', href: '/projects/grenadines-homes/kadars-gate' },
      {
        label: 'The Rockhampton',
        href: '/projects/grenadines-homes/the-rockhampton',
      },
      { label: 'L5 Banana', href: '/projects/grenadines-homes/l5-banana' },
      {
        label: 'Paramount Twin Towers',
        href: '/projects/grenadines-homes/paramount-twin-towers',
      },
      { label: 'The Meadows', href: '/projects/propertymart/the-meadows' },
    ],
  },
  {
    label: 'Media',
    href: '/media',
    children: [
      { label: 'News', href: '/media/news' },
      { label: 'Blog', href: '/media/blogs' },
      { label: 'Events', href: '/media/events' },
    ],
  },
  { label: 'Contact Us', href: '/contact-us' },
];
