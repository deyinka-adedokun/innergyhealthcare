import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type Variant = "gold" | "navyOutline" | "navy" | "goldOnNavy";

const variants: Record<Variant, string> = {
  gold:
    "bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold)]/90 border border-transparent",
  navyOutline:
    "bg-transparent text-[var(--navy)] border border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white",
  navy:
    "bg-[var(--navy)] text-white hover:bg-[var(--navy)]/90 border border-transparent",
  goldOnNavy:
    "bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold)]/90 border border-transparent",
};

const base =
  "inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2";

type LinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function CTALink({ variant = "gold", className = "", children, ...rest }: LinkProps) {
  return (
    <Link {...rest} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

type ButtonProps = Omit<ComponentProps<"button">, "className"> & {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function CTAButton({ variant = "gold", className = "", children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
