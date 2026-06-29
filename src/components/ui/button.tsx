import Link from "next/link";
import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.12em] transition-all duration-200 ease-out focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-xs",
  lg: "px-7 py-3.5 text-sm",
};

const variantStyles: Record<Variant, CSSProperties> = {
  primary: {
    backgroundColor: "var(--brand-red)",
    color: "var(--paper)",
    border: "1px solid var(--brand-red)",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "var(--brand-red)",
    border: "1px solid var(--brand-red)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--ink)",
    border: "1px solid transparent",
  },
};

const variantHoverClasses: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const classes = `${base} ${sizes[size]} ${variantHoverClasses[variant]} ${className}`;
  const style = variantStyles[variant];

  if ("href" in props && props.href !== undefined) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          style={style}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonAsButton;
  void _v;
  void _s;
  void _c;
  void _ch;
  return (
    <button type="button" className={classes} style={style} {...rest}>
      {children}
    </button>
  );
}
