import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import hero from "@/assets/innergy/image10.jpeg.asset.json";
import story from "@/assets/innergy/image11.jpeg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Innergy" },
      {
        name: "description",
        content:
          "Innergy is a specialist healthcare talent management company connecting assessed Nigerian healthcare professionals with UK and Ireland employers.",
      },
      { property: "og:title", content: "About — Innergy" },
      { property: "og:description", content: "Ethical healthcare talent management built on psychometric assessment expertise." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: hero.url },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  ["Integrity", "We operate transparently. We do not make promises we cannot keep. We do not exploit candidates or mislead employers."],
  ["Rigour", "Our psychometric assessment methodology ensures that every candidate we present has been evaluated for behavioural suitability, not just qualifications."],
  ["Respect", "We treat every candidate as a professional with dignity, potential, and agency. We treat every employer as a partner with legitimate needs and standards."],
  ["Accountability", "We take responsibility for the quality of our recommendations, the accuracy of our information, and the ethics of our operations."],
];

const dimensions = [
  "Clinical / Care Knowledge",
  "English & Communication",
  "Empathy & Compassion",
  "Emotional Resilience",
  "Safeguarding Awareness",
  "Cultural Adaptability",
  "Reliability & Integrity",
  "Professional Conduct",
];

function AboutPage() {
  return (
    <>
      <section className="bg-[var(--gold-tint)]">
        <div className="container-page py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)] mb-5">
              About Innergy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy leading-[1.1]">
              Ethical Healthcare Talent Management
            </h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-xl">
              Innergy is a specialist healthcare talent management and outsourcing company focused
              on connecting assessed and prepared Nigerian healthcare professionals with career
              opportunities in the United Kingdom and Ireland.
            </p>
          </div>
          <img src={hero.url} alt="Healthcare professionals collaborating" className="w-full h-[420px] object-cover rounded-sm shadow-lg" />
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img src={story.url} alt="Assessment and training" className="w-full h-[400px] object-cover rounded-sm" />
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="From Assessment to Global Opportunity"
            />
            <div className="space-y-4 text-foreground/85 text-[15px] leading-relaxed">
              <p>
                Innergy was established as a subsidiary of <strong className="text-navy">Psychotesting Enterprise</strong>, a
                human capital assessment and psychometric services organisation with experience in
                behavioural evaluation, career profiling, and talent development across Nigerian
                educational and healthcare institutions.
              </p>
              <p>
                Through our work with colleges of health sciences, nursing schools, and healthcare
                training centres, we identified a clear opportunity: Nigeria produces thousands of
                qualified healthcare professionals each year, while the UK and Ireland face
                critical shortages in care, nursing, and allied health.
              </p>
              <p>Innergy was created to bridge this gap — responsibly.</p>
              <p>
                We combine Psychotesting Enterprise's assessment expertise with structured
                international recruitment processes to ensure that candidates are not only
                qualified on paper, but genuinely suitable for the demands of international
                healthcare practice.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section surface>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)] mb-3">
            Our Mission
          </div>
          <blockquote className="text-2xl md:text-3xl font-semibold text-navy leading-snug border-l-4 border-[var(--gold)] pl-6 text-left">
            To ethically connect assessed Nigerian healthcare talent with UK and Ireland employers,
            ensuring quality outcomes for employers, meaningful careers for candidates, and better
            care for the communities they serve.
          </blockquote>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our Values" title="What Guides Us" />
        <div className="grid md:grid-cols-2 gap-6">
          {values.map(([t, b]) => (
            <div key={t} className="bg-white border border-border p-7 rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-8 w-1 bg-[var(--gold)]" />
                <h3 className="text-xl font-semibold">{t}</h3>
              </div>
              <p className="text-foreground/80 text-[15px]">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeading
          eyebrow="Our Methodology"
          title="The Innergy Assessment Methodology"
          intro="Our assessment process is built on the psychometric expertise of Psychotesting Enterprise and adapted specifically for international healthcare recruitment."
        />
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <MethodologyDiagram />
          <ul className="grid sm:grid-cols-2 gap-3">
            {dimensions.map((d) => (
              <li key={d} className="bg-white border border-border p-4 rounded-sm flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
                <span className="text-[15px] text-navy font-medium">{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-foreground/80 text-[15px] max-w-3xl">
          This multi-dimensional approach allows us to provide employers with a far richer
          understanding of each candidate than a CV alone can offer.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Leadership" title="Leadership" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["[Name]", "Founder & CEO"],
            ["[Name]", "Director of Operations"],
            ["[Name]", "Head of Assessment"],
          ].map(([n, r]) => (
            <div key={r} className="bg-white border border-border p-7 rounded-sm">
              <div className="h-32 w-32 rounded-full bg-surface border border-border grid place-items-center text-warm-grey text-xs mx-auto mb-5">
                Photo
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-navy">{n}</div>
                <div className="text-sm text-[var(--gold)] font-semibold mt-1">{r}</div>
                <p className="text-sm text-foreground/70 mt-3">Brief bio</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-warm-grey italic text-center">
          Add real photos and bios when ready.
        </p>
      </Section>
    </>
  );
}

function MethodologyDiagram() {
  const cx = 200;
  const cy = 200;
  const rOuter = 160;
  const labels = [
    "Clinical / Care Knowledge",
    "English & Communication",
    "Empathy & Compassion",
    "Emotional Resilience",
    "Safeguarding Awareness",
    "Cultural Adaptability",
    "Reliability & Integrity",
    "Professional Conduct",
  ];
  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-auto">
        {/* outer ring */}
        <circle cx={cx} cy={cy} r={rOuter + 20} fill="none" stroke="#003057" strokeOpacity="0.1" />
        <circle cx={cx} cy={cy} r={rOuter - 30} fill="none" stroke="#003057" strokeOpacity="0.08" />
        {/* center */}
        <circle cx={cx} cy={cy} r={56} fill="#003057" />
        <text x={cx} y={cy - 6} textAnchor="middle" fill="#D4A843" fontSize="14" fontWeight="700">INNERGY</text>
        <text x={cx} y={cy + 12} textAnchor="middle" fill="white" fontSize="9" letterSpacing="2">ASSESSMENT</text>
        {labels.map((label, i) => {
          const angle = (i / labels.length) * Math.PI * 2 - Math.PI / 2;
          const x = cx + Math.cos(angle) * rOuter;
          const y = cy + Math.sin(angle) * rOuter;
          return (
            <g key={label}>
              <line x1={cx} y1={cy} x2={x} y2={y} stroke="#003057" strokeOpacity="0.15" />
              <circle cx={x} cy={y} r={10} fill="#D4A843" />
              <circle cx={x} cy={y} r={4} fill="#003057" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
