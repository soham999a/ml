import { type ReactNode } from "react";

interface PillBadgeProps {
  children: ReactNode;
  variant?: "gold" | "maroon";
}

export default function PillBadge({ children, variant = "gold" }: PillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-widest ${
        variant === "gold"
          ? "border border-secondary/40 text-on-surface"
          : "bg-tertiary-container/60 text-secondary-fixed"
      }`}
    >
      {children}
    </span>
  );
}
