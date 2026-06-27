import { createFileRoute } from "@tanstack/react-router";
import { CTALink } from "@/components/site/CTA";
import { Section, SectionHeading } from "@/components/site/Section";
import {
  Search,
  ClipboardCheck,
  Handshake,
  ShieldCheck,
  HeartHandshake,
  Users,
  LifeBuoy,
} from "lucide-react";
import hero from "@/assets/innergy/image3.jpeg.asset.json";
import elderly from "@/assets/innergy/image4.jpeg.asset.json";
import nursing from "@/assets/innergy/image5.jpeg.asset.json";
import radio from "@/assets/innergy/image6.jpeg.asset.json";
import biomed from "@/assets/innergy/image7.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Innergy — Quality Care Professionals. Properly Assessed." },
      {
        name: "description",
        content:
          "Ethical international healthcare recruitment connecting assessed Nigerian care professionals with UK and Ireland employers.",
      },
      { property: "og:title", content: "Innergy — Quality Care Professionals" },
      {
        property: "og:description",
        content:
          "Psychometrically assessed, professionally prepared care talent for UK and Ireland employers.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: hero.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Search,
    title: "Identify",
    body: "We source candidates from accredited healthcare training institutions and professional networks in Nigeria, targeting qualified care workers, healthcare assistants, nurses, and allied health professionals.",
  },
  {
    icon: ClipboardCheck,
    title: "Assess",
    body: "Through our psychometric assessment methodology, we evaluate candidates for behavioural suitability, empathy, emotional resilience, safeguarding awareness, communication ability, and cultural adaptability.",
  },
  {
    icon: Handshake,
    title: "Connect",
    body: "We match assessed and prepared candidates with verified UK and Ireland employers, supporting the process from candidate introduction through to placement and post-arrival integration.",
  },
];

const programmes = [
  {
    img: elderly.url,
    title: "Elderly Care Track",
    body: "Care assistants, healthcare assistants, senior care workers, and support workers for residential, nursing, and domiciliary care settings. Our fastest-moving talent pathway.",
    status: "Active — Accepting Employer Partners",
    active: true,
  },
  {
    img: nursing.url,
    title: "Nursing Track",
    body: "Registered nurses for elderly care, community nursing, general practice, and hospital settings. Candidates are guided through NMC/NMBI registration, OET/IELTS preparation, and OSCE readiness.",
    status: "In Development",
    active: false,
  },
  {
    img: radio.url,
    title: "Radiography & Medical Imaging Track",
    body: "Diagnostic radiographers and imaging professionals for NHS trusts, private diagnostic providers, and imaging networks. HCPC/CORU registration pathway support.",
    status: "In Development",
    active: false,
  },
  {
    img: biomed.url,
    title: "Biomedical Science Track",
    body: "Medical laboratory professionals and biomedical scientists for hospital laboratories, diagnostic services, and pathology departments. HCPC/CORU and IBMS pathway guidance.",
    status: "In Development",
    active: false,
  },
];

const values = [
  {
    icon: ClipboardCheck,
    title: "Psychometric Rigour",
    body: "We do not simply forward CVs. Every candidate undergoes structured psychometric assessment for empathy, integrity, resilience, safeguarding awareness, and care suitability.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Recruitment",
    body: "We are committed to transparent, responsible recruitment. No candidate fees for employment or sponsorship. No false promises. Full compliance with UK and Ireland ethical recruitment standards.",
  },
  {
    icon: Users,
    title: "Employer-Led Matching",
    body: "We begin with your requirements. Candidate sourcing is driven by your vacancy profile, team culture, care model, and regulatory needs — not by candidate availability alone.",
  },
  {
    icon: LifeBuoy,
    title: "End-to-End Support",
    body: "From candidate identification through assessment, preparation, documentation, visa support, and post-arrival follow-up, we manage the full talent journey.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--gold-tint)] overflow-hidden">
        <div className="container-page py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)] mb-5">
              Ethical International Healthcare Recruitment
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-navy leading-[1.1]">
              Quality Care Professionals. Properly Assessed. Professionally Prepared.
            </h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-xl">
              Innergy partners with UK and Ireland healthcare employers to source, assess, and
              prepare dedicated care professionals from Nigeria — through structured psychometric
              evaluation, career readiness development, and ethical recruitment practices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTALink to="/employers" variant="gold">Hire Care Professionals</CTALink>
              <CTALink to="/candidates" variant="navyOutline">Explore Career Pathways</CTALink>
            </div>
          </div>
          <div className="relative">
            <img
              src={hero.url}
              alt="Care professional supporting an elderly resident"
              className="w-full h-[420px] md:h-[520px] object-cover rounded-sm shadow-lg"
              loading="eager"
            />
            <div className="absolute -bottom-4 -left-4 hidden md:block h-24 w-24 border-4 border-[var(--gold)] rounded-sm pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-navy text-white">
        <div className="container-page py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-white/85 text-center">
          <span>A Psychotesting Enterprise Company</span>
          <span className="text-[var(--gold)]">|</span>
          <span>Ethical Recruitment Committed</span>
          <span className="text-[var(--gold)]">|</span>
          <span>UK &amp; Ireland Focused</span>
          <span className="text-[var(--gold)]">|</span>
          <span>Psychometric-Led Assessment</span>
        </div>
      </div>

      {/* What We Do */}
      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title="Structured Healthcare Talent Solutions"
          intro={
            <>
              Innergy is a specialist healthcare talent management company that identifies,
              assesses, prepares, and connects qualified care professionals with employers across
              the United Kingdom and Ireland. We work with care homes, nursing homes, domiciliary
              care providers, NHS trusts, HSE-contracted facilities, and healthcare recruitment
              agencies to address critical workforce shortages — particularly in elderly care,
              nursing, and allied health.
            </>
          }
        />
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-border p-8 rounded-sm hover:border-[var(--gold)] transition-colors"
            >
              <div className="h-12 w-12 grid place-items-center bg-[var(--gold-tint)] text-[var(--navy)] rounded-sm mb-5">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-foreground/80 text-[15px]">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Programmes */}
      <Section surface>
        <SectionHeading eyebrow="Our Programmes" title="Healthcare Talent Programmes" />
        <div className="grid md:grid-cols-2 gap-6">
          {programmes.map((p) => (
            <article key={p.title} className="bg-white border border-border rounded-sm overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img src={p.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-foreground/80 text-[15px] flex-1">{p.body}</p>
                <div className="mt-5">
                  <span
                    className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-sm ${
                      p.active
                        ? "bg-[var(--teal)]/10 text-[var(--teal)]"
                        : "bg-warm-grey/10 text-warm-grey"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        p.active ? "bg-[var(--teal)]" : "bg-warm-grey"
                      }`}
                    />
                    {p.status}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Why Innergy */}
      <Section>
        <SectionHeading eyebrow="Why Innergy" title="Why Employers Choose Innergy" />
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {values.map((v) => (
            <div key={v.title} className="flex gap-5">
              <div className="shrink-0 h-12 w-12 grid place-items-center bg-navy text-white rounded-sm">
                <v.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-foreground/80 text-[15px]">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats strip */}
      <div className="bg-navy text-white">
        <div className="container-page py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: "[XX]", l: "Candidates Assessed" },
            { v: "[XX]", l: "Employer Partners" },
            { v: "[XX]", l: "Countries" },
            { v: "100%", l: "Ethical Recruitment Commitment" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl md:text-4xl font-bold text-[var(--gold)]">{s.v}</div>
              <div className="text-sm text-white/75 mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Split CTA */}
      <section className="grid md:grid-cols-2">
        <div className="bg-navy text-white p-10 md:p-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white">For Employers</h3>
          <p className="mt-4 text-white/85 max-w-md">
            Looking for reliable, assessed care professionals for your organisation? Let us
            understand your needs and present suitable candidates.
          </p>
          <div className="mt-6">
            <CTALink to="/employers" variant="goldOnNavy">Discuss Your Workforce Needs</CTALink>
          </div>
        </div>
        <div className="bg-[var(--gold)] text-[var(--navy)] p-10 md:p-16">
          <h3 className="text-2xl md:text-3xl font-bold text-navy">For Candidates</h3>
          <p className="mt-4 text-navy/90 max-w-md">
            Are you a qualified Nigerian healthcare professional interested in building a career in
            the UK or Ireland? Learn about our structured career pathways.
          </p>
          <div className="mt-6">
            <CTALink to="/candidates" variant="navy">Explore Career Pathways</CTALink>
          </div>
        </div>
      </section>
    </>
  );
}
