import type { ReactNode } from "react";

// Keyword-matched so new amenity labels degrade to a sensible icon
// instead of needing a map entry for every string in the data.
const ICONS: { match: RegExp; path: ReactNode }[] = [
  {
    match: /security|cctv|camera|gated|estate security/i,
    path: <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" />,
  },
  {
    match: /pool|swim/i,
    path: <path d="M2 17c2 0 2 1.5 4 1.5S8 17 10 17s2 1.5 4 1.5S16 17 18 17s2 1.5 4 1.5M6 14V5a2 2 0 1 1 4 0M14 14V5a2 2 0 1 1 4 0M6 8h4M14 8h4" />,
  },
  {
    match: /fitness|gym/i,
    path: <path d="M4 9v6M8 7v10M16 7v10M20 9v6M8 12h8" />,
  },
  {
    match: /smart|automation|lift|concierge/i,
    path: <path d="M4 21V10l8-6 8 6v11M9 21v-6h6v6M12 8v.01" />,
  },
  {
    match: /water|drainage/i,
    path: <path d="M12 3s6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 6-10 6-10Z" />,
  },
  {
    match: /green|garden|landscap/i,
    path: <path d="M12 21v-7M12 14s-1-7 5-9c1 6-2 9-5 9ZM12 14s1-5-5-6c-1 4 2 6 5 6Z" />,
  },
  {
    match: /power|electric|lighting/i,
    path: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />,
  },
  {
    match: /parking|road|garage/i,
    path: <path d="M5 17h14M6 17V9l2-4h8l2 4v8M7 17v2M17 17v2M8 12h8" />,
  },
];

const FALLBACK = <path d="M20 6 9 17l-5-5" />;

export default function AmenityIcon({ label }: { label: string }) {
  const icon = ICONS.find((i) => i.match.test(label))?.path ?? FALLBACK;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7 text-gold"
      aria-hidden="true"
    >
      {icon}
    </svg>
  );
}
