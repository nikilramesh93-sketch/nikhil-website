import type { ReactNode } from "react";

type RibbonSize = "md" | "sm";

interface RibbonProps {
  children: ReactNode;
  size?: RibbonSize;
  className?: string;
}

const sizes: Record<RibbonSize, string> = {
  md: "px-4 py-1.5 text-[11px] tracking-[0.08em] sm:text-xs",
  sm: "px-2 py-0.5 text-[9px] tracking-[0.14em]",
};

export function Ribbon({ children, size = "md", className = "" }: RibbonProps) {
  return (
    <span
      className={`ribbon rounded-sm font-semibold uppercase leading-tight ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
