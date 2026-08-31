import type { ReactNode } from "react";

interface StampBadgeProps {
  lines: [ReactNode, ReactNode];
  tone?: "on-light" | "on-dark";
  size?: number;
  className?: string;
}

export function StampBadge({
  lines,
  tone = "on-light",
  size = 112,
  className = "",
}: StampBadgeProps) {
  const isOnDark = tone === "on-dark";
  const ringColor = isOnDark ? "var(--paper)" : "var(--brand-red)";
  const textColor = isOnDark ? "var(--paper)" : "var(--brand-red)";
  const secondTextColor = isOnDark ? "var(--brand-gold)" : "var(--brand-gold)";

  return (
    <div
      className={`stamp-badge border-[1.5px] px-3 ${className}`}
      style={{ width: size, borderColor: ringColor }}
    >
      <span
        className="text-[9px] font-semibold uppercase leading-[1.3] tracking-[0.06em]"
        style={{ color: textColor }}
      >
        {lines[0]}
      </span>
      <span
        className="text-[9px] font-semibold uppercase leading-[1.3] tracking-[0.06em]"
        style={{ color: secondTextColor }}
      >
        {lines[1]}
      </span>
    </div>
  );
}
