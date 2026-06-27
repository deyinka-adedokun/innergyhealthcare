import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment} mb-10`}>
      {eyebrow && (
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)] mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy">{title}</h2>
      {intro && <p className="mt-4 text-base md:text-lg text-foreground/80">{intro}</p>}
    </div>
  );
}

export function Section({
  children,
  surface = false,
  className = "",
  id,
}: {
  children: ReactNode;
  surface?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${surface ? "bg-surface" : "bg-background"} ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}
