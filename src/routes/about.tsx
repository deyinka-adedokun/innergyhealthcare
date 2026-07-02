import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import hero from "@/assets/innergy/image10.jpeg.asset.json";
import story from "@/assets/innergy/image11.jpeg.asset.json";
import adeyinka from "@/assets/innergy/team/adeyinka.jpg.asset.json";
import olufemi from "@/assets/innergy/team/olufemi.jpg.asset.json";
import ainabor from "@/assets/innergy/team/ainabor.jpg.asset.json";
import adewumi from "@/assets/innergy/team/adewumi.jpg.asset.json";
import helen from "@/assets/innergy/team/helen.jpg.asset.json";
import aduratomi from "@/assets/innergy/team/aduratomi.png.asset.json";

const leaders = [
  {
    name: "Adeyinka Adedokun",
    role: "Director of Partnerships",
    photo: adeyinka.url,
    bio: "Adeyinka Adedokun leads strategic relationships with UK and Ireland care providers and recruitment agencies to connect psychometrically assessed, ethically sourced Nigerian care professionals with employers facing critical workforce shortages.",
  },
  {
    name: "Professor Olufemi A. Adegbesan",
    role: "Strategic Advisor",
    photo: olufemi.url,
    bio: "A distinguished Professor of Sport Psychology, Professor Adegbesan leverages his expertise in behavioural science, mental resilience, leadership, and performance optimization to strengthen the development, well-being, and global readiness of our healthcare professionals.",
  },
  {
    name: "Dr. Ainabor Augustine Eguavuon",
    role: "Director of Training",
    photo: ainabor.url,
    bio: "A distinguished academic leader, Dr. Eguavuon leverages his expertise in curriculum development, quality assurance, and professional education to build internationally competent, practice-ready carers and allied health professionals for the global healthcare workforce.",
  },
  {
    name: "Dr. Adewumi Oreoluwa, FCIHRM",
    role: "Director of Global Talent",
    photo: adewumi.url,
    bio: "A distinguished global human capital executive, Dr. Adewumi leverages her expertise in international talent acquisition, workforce mobility, regulatory compliance, and strategic outsourcing to lead Innergy Healthcare's global sourcing, deployment, and optimization of world-class carers and allied health professionals.",
  },
  {
    name: "Helen A.",
    role: "Operations Manager",
    photo: helen.url,
    bio: "An accomplished operations leader, Helen drives operational excellence, process optimisation, quality assurance, and seamless global workforce coordination to support the company's international healthcare talent management and outsourcing services.",
  },
  {
    name: "Aduratomi",
    role: "Travel & Mobility Coordinator",
    photo: aduratomi.url,
    bio: "Aduratomi manages the end-to-end travel and mobility experience for our deployed professionals — coordinating visa applications, flight bookings, ticketing, and pre-departure logistics so every candidate arrives at their placement smoothly and on schedule.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Innergy Healthcare" },
      {
        name: "description",
        content:
          "Innergy Healthcare is a specialist healthcare talent management company connecting assessed Nigerian healthcare professionals with UK and Ireland employers.",
      },
      { property: "og:title", content: "About — Innergy Healthcare" },
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
              About Innergy Healthcare
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy leading-[1.1] text-balance">
              Ethical Healthcare Talent Management
            </h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-xl text-pretty">
              Innergy Healthcare is a specialist healthcare talent management and outsourcing company focused
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
                Innergy Healthcare was established as a subsidiary of <strong className="text-navy">Psychotesting Enterprise</strong>, a
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
              <p>Innergy Healthcare was created to bridge this gap — responsibly.</p>
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
          title="The Innergy Healthcare Assessment Methodology"
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
        <SectionHeading
          eyebrow="Leadership"
          title="Our Leadership"
          intro="The people driving Innergy Healthcare's mission — combining decades of expertise in psychometric assessment, global talent mobility, clinical training, and operational excellence."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((l) => (
            <article
              key={l.name}
              className="bg-white border border-border rounded-sm overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/5] bg-[var(--gold-tint)] overflow-hidden">
                <img
                  src={l.photo}
                  alt={`Portrait of ${l.name}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-navy leading-snug">{l.name}</h3>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gold)] mt-1">
                  {l.role}
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-foreground/80">{l.bio}</p>
              </div>
            </article>
          ))}
        </div>
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
        <text x={cx} y={cy - 8} textAnchor="middle" fill="#D4A843" fontSize="13" fontWeight="700">INNERGY</text>
        <text x={cx} y={cy + 6} textAnchor="middle" fill="#D4A843" fontSize="9" fontWeight="700" letterSpacing="1">HEALTHCARE</text>
        <text x={cx} y={cy + 20} textAnchor="middle" fill="white" fontSize="8" letterSpacing="2">ASSESSMENT</text>
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
