import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { articles, getArticle } from "@/lib/resources";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a)
      return {
        meta: [{ title: "Article not found — Innergy Healthcare" }],
      };
    return {
      meta: [
        { title: `${a.title} — Innergy Healthcare Resources` },
        { name: "description", content: a.summary },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/resources/${a.slug}` },
        { property: "article:published_time", content: a.date },
        { property: "article:section", content: a.category },
      ],
      links: [{ rel: "canonical", href: `/resources/${a.slug}` }],
    };
  },
  notFoundComponent: () => (
    <Section>
      <div className="text-center py-12">
        <h1 className="text-2xl font-semibold text-navy">Article not found</h1>
        <Link to="/resources" className="mt-4 inline-block text-[var(--gold)] font-semibold">
          ← Back to all resources
        </Link>
      </div>
    </Section>
  ),
  errorComponent: ({ reset }) => (
    <Section>
      <div className="text-center py-12">
        <h1 className="text-xl font-semibold text-navy">Could not load this article</h1>
        <button
          onClick={reset}
          className="mt-4 inline-block bg-[var(--gold)] text-navy font-semibold px-4 py-2 rounded-sm"
        >
          Try again
        </button>
      </div>
    </Section>
  ),
  component: ArticlePage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <section className="bg-[var(--gold-tint)] border-b border-border">
        <div className="container-page py-14 md:py-20 max-w-3xl">
          <Link
            to="/resources"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)] hover:underline"
          >
            ← Resources
          </Link>
          <div className="mt-4 text-[11px] uppercase tracking-[0.18em] text-navy/60 font-semibold">
            {article.category}
          </div>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-navy leading-tight">
            {article.title}
          </h1>
          <p className="mt-5 text-lg text-foreground/80">{article.summary}</p>
          <div className="mt-6 text-xs text-warm-grey">
            {formatDate(article.date)} · {article.readMinutes} min read
          </div>
        </div>
      </section>

      <Section>
        <article className="max-w-3xl mx-auto prose-article">
          {article.body.map((block, i) => (
            <div key={i} className="mb-8">
              {block.heading && (
                <h2 className="text-xl md:text-2xl font-semibold text-navy mt-10 mb-4">
                  {block.heading}
                </h2>
              )}
              {block.paragraphs.map((p, j) => (
                <p key={j} className="text-foreground/85 leading-relaxed mb-4 text-[16px]">
                  {p}
                </p>
              ))}
            </div>
          ))}

          <div className="mt-12 border-t border-border pt-8 bg-[var(--gold-tint)] -mx-6 px-6 py-8 rounded-sm">
            <p className="text-sm text-navy/80">
              Innergy Healthcare is a subsidiary of The Psychotesting Enterprise. We adhere to the
              WHO Global Code of Practice and do not charge candidates placement fees.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                to="/employers"
                hash="enquiry"
                className="inline-flex items-center bg-[var(--gold)] text-navy font-semibold text-sm px-4 py-2.5 rounded-sm"
              >
                Partner with us
              </Link>
              <Link
                to="/candidates"
                className="inline-flex items-center border border-navy text-navy font-semibold text-sm px-4 py-2.5 rounded-sm"
              >
                For candidates
              </Link>
            </div>
          </div>
        </article>
      </Section>

      <Section surface>
        <h2 className="text-2xl font-bold text-navy mb-8">More resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((a) => (
            <Link
              key={a.slug}
              to="/resources/$slug"
              params={{ slug: a.slug }}
              className="bg-white border border-border rounded-sm p-6 hover:border-[var(--gold)] transition-colors group"
            >
              <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--gold)] font-semibold">
                {a.category}
              </div>
              <h3 className="mt-2 text-base font-semibold text-navy group-hover:text-[var(--gold)] transition-colors">
                {a.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">{a.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
