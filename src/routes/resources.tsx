import { Link, createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { articles } from "@/lib/resources";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Innergy Healthcare" },
      {
        name: "description",
        content:
          "Insights on ethical international healthcare recruitment, NMC OSCE preparation, safeguarding, and life as an international healthcare professional in the UK.",
      },
      { property: "og:title", content: "Resources — Innergy Healthcare" },
      {
        property: "og:description",
        content:
          "Guidance for UK and Ireland healthcare employers and internationally educated healthcare professionals.",
      },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ResourcesPage() {
  const [featured, ...rest] = articles;
  return (
    <>
      <section className="bg-[var(--gold-tint)]">
        <div className="container-page py-16 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)] mb-5">
            Resources
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy max-w-3xl">
            Insight on ethical healthcare recruitment, candidate readiness, and UK clinical practice.
          </h1>
          <p className="mt-5 text-lg text-foreground/80 max-w-2xl">
            Practical guidance for employers building international healthcare teams and for
            professionals preparing for UK and Ireland practice.
          </p>
        </div>
      </section>

      <Section>
        <Link
          to="/resources/$slug"
          params={{ slug: featured.slug }}
          className="block group bg-white border border-border rounded-sm overflow-hidden hover:border-[var(--gold)] transition-colors"
        >
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-0">
            <div className="bg-navy text-white p-10 md:p-12 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--gold)] font-semibold mb-4">
                  Featured · {featured.category}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold leading-snug group-hover:text-[var(--gold)] transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-white/80 text-[15px]">{featured.summary}</p>
              </div>
              <div className="mt-6 text-xs text-white/60">
                {formatDate(featured.date)} · {featured.readMinutes} min read
              </div>
            </div>
            <div className="bg-[var(--gold-tint)] p-10 md:p-12 flex items-center">
              <div className="text-navy">
                <div className="text-6xl font-bold text-[var(--gold)] leading-none">“</div>
                <p className="mt-3 text-lg italic text-navy/90">
                  {featured.body[0].paragraphs[0]}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-[var(--gold)]">
                  Read article <span aria-hidden>→</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Latest articles" title="All resources" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((a) => (
            <Link
              key={a.slug}
              to="/resources/$slug"
              params={{ slug: a.slug }}
              className="bg-white border border-border rounded-sm p-7 hover:border-[var(--gold)] transition-colors group flex flex-col"
            >
              <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--gold)] font-semibold">
                {a.category}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-navy group-hover:text-[var(--gold)] transition-colors">
                {a.title}
              </h3>
              <p className="mt-3 text-sm text-foreground/75 flex-1">{a.summary}</p>
              <div className="mt-5 text-xs text-warm-grey">
                {formatDate(a.date)} · {a.readMinutes} min read
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
