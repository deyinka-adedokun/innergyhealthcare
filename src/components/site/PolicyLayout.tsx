import type { ReactNode } from "react";

export function PolicyLayout({
  eyebrow,
  title,
  meta,
  children,
}: {
  eyebrow?: string;
  title: string;
  meta?: { label: string; value: string }[];
  children: ReactNode;
}) {
  return (
    <>
      <section className="bg-[var(--gold-tint)]">
        <div className="container-page py-14 md:py-20 max-w-4xl">
          {eyebrow && (
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)] mb-5">
              {eyebrow}
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-navy leading-[1.1]">{title}</h1>
          {meta && (
            <dl className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-foreground/80 max-w-2xl">
              {meta.map((m) => (
                <div key={m.label} className="flex gap-2">
                  <dt className="font-semibold text-navy">{m.label}:</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="container-page max-w-4xl">
          <article className="prose-policy text-foreground/85 text-[15px] leading-relaxed space-y-5">
            {children}
          </article>
        </div>
      </section>
    </>
  );
}

export function PH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-navy mt-12 mb-4 border-l-4 border-[var(--gold)] pl-4">
      {children}
    </h2>
  );
}

export function PH3({ children }: { children: ReactNode }) {
  return <h3 className="text-lg md:text-xl font-semibold text-navy mt-8 mb-3">{children}</h3>;
}

export function PUL({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 space-y-1.5 marker:text-[var(--gold)]">{children}</ul>;
}

export function POL({ children }: { children: ReactNode }) {
  return <ol className="list-decimal pl-6 space-y-1.5 marker:text-[var(--gold)] marker:font-semibold">{children}</ol>;
}

export function PTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | ReactNode)[][];
}) {
  return (
    <div className="overflow-x-auto my-6 border border-border rounded-sm">
      <table className="w-full text-sm">
        <thead className="bg-navy text-white">
          <tr>
            {headers.map((h) => (
              <th key={h} className="text-left font-semibold px-4 py-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? "bg-[var(--gold-tint)]/40" : "bg-white"}>
              {r.map((c, j) => (
                <td key={j} className="px-4 py-3 align-top border-t border-border">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
