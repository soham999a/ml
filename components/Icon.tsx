import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  building: (
    <>
      <path d="M4 3h16v18H4z" />
      <path d="M8 7h3v3H8zM13 7h3v3h-3zM8 12h3v3H8zM13 12h3v3h-3z" />
      <path d="M10 21v-3h4v3" />
    </>
  ),
  landmark: (
    <>
      <path d="M3 21h18M6 21v-7M10 21v-7M14 21v-7M18 21v-7" />
      <path d="M12 3 3 8h18l-9-5z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.9 2z" />
  ),
  map: (
    <>
      <path d="M1 6v16l7-4 8 4 7-4V3l-7 4-8-4-7 3z" />
      <path d="M8 2v16M16 6v16" />
    </>
  ),
  medical: <path d="M12 3v18M5 12h14" />,
  hospital: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  book: (
    <>
      <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
      <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
    </>
  ),
  food: (
    <>
      <path d="M4 11h16a8 8 0 0 1-16 0z" />
      <path d="M6 8V6M10 8V6M14 8V6M18 8V6" />
    </>
  ),
  archive: (
    <>
      <rect x="2" y="3" width="20" height="5" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      <path d="M10 12h4" />
    </>
  ),
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  clipboard: (
    <>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </>
  ),
  chart: <path d="M6 20V10M12 20V4M18 20v-6" />,
  bolt: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  lock: (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  plane: (
    <>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </>
  ),
  "pen-tool": (
    <>
      <path d="m12 19 7-7 3 3-7 7-3-3z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="m2 2 3.5 3.5" />
    </>
  ),
  scroll: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6M9 17h6" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 4 13c0-6 4-9 16-9 0 12-6 16-9 16z" />
      <path d="M4 20c4-8 8-12 12-14" />
    </>
  ),
  wheat: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12c0-2-1.5-3.5-4-3.5S5 10 5 12s1.5 3.5 4 3.5 3-1.5 3-3.5z" />
      <path d="M12 12c0-2 1.5-3.5 4-3.5S19 10 19 12s-1.5 3.5-4 3.5-3-1.5-3-3.5z" />
      <path d="M12 16c0-2-1.5-3.5-4-3.5S5 14 5 16s1.5 3.5 4 3.5 3-1.5 3-3.5z" />
      <path d="M12 16c0-2 1.5-3.5 4-3.5S19 14 19 16s-1.5 3.5-4 3.5-3-1.5-3-3.5z" />
    </>
  ),
  user: (
    <>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  ball: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7l2 3 3.5.5-2 2.5 1 3.5L12 15.5 7.5 16.5l1-3.5-2-2.5L10 10z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  temple: (
    <>
      <path d="M12 3 4 9h16l-8-6z" />
      <path d="M6 9v9M10 9v9M14 9v9M18 9v9" />
      <path d="M3 18h18M3 21h18" />
    </>
  ),
  stone: (
    <>
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      <path d="M8 3l5 2" />
    </>
  ),
  flame: (
    <>
      <path d="M12 22c4-1 7-4.5 7-9 0-4-3-8-7-11-4 3-7 7-7 11 0 4.5 3 8 7 9z" />
      <path d="M12 22c-1.5-2-4-3-4-6 0-3 4-7 4-7s4 4 4 7c0 3-2.5 4-4 6z" />
    </>
  ),
  sparkles: (
    <>
      <path d="M11 4l1.5 3.5L16 9l-3.5 1.5L11 14l-1.5-3.5L6 9l3.5-1.5L11 4z" />
      <path d="M18.5 13l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1z" />
    </>
  ),
};

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name] ?? paths.food}
    </svg>
  );
}