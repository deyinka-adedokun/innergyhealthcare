import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTAButton, CTALink } from "@/components/site/CTA";
import { Section, SectionHeading } from "@/components/site/Section";
import { AlertTriangle, Check } from "lucide-react";
import hero from "@/assets/innergy/image9.jpeg.asset.json";

export const Route = createFileRoute("/candidates")({
  head: () => ({
    meta: [
      { title: "For Candidates — Build Your International Healthcare Career" },
      {
        name: "description",
        content:
          "Qualified Nigerian healthcare professionals: prepare for UK and Ireland career opportunities through structured assessment and honest guidance.",
      },
      { property: "og:title", content: "For Candidates — Innergy" },
      {
        property: "og:description",
        content:
          "Structured pathways for Nigerian healthcare professionals — honest guidance, no guaranteed jobs.",
      },
      { property: "og:url", content: "/candidates" },
      { property: "og:image", content: hero.url },
    ],
    links: [{ rel: "canonical", href: "/candidates" }],
  }),
  component: CandidatesPage,
});

const pathways = [
  {
    title: "Elderly Care Track",
    for: "Healthcare Assistants, Care Certificate Holders, CHEWs, Geriatric Care Professionals",
    destination: "UK and Ireland",
    timeline: "6–12 months",
    english: "IELTS UKVI (B1) or equivalent",
    registration: "Usually not required for care worker roles",
    status: "Active",
  },
  {
    title: "Nursing Track",
    for: "Registered Nurses, Registered Midwives",
    destination: "UK and Ireland",
    timeline: "12–18 months",
    english: "OET (B in all) or IELTS Academic (7.0+)",
    registration: "NMC (UK) or NMBI (Ireland)",
    status: "In Development",
  },
  {
    title: "Radiography Track",
    for: "Radiographers, Medical Imaging Technologists",
    destination: "UK and Ireland",
    timeline: "Variable",
    english: "IELTS or OET",
    registration: "HCPC (UK) or CORU (Ireland)",
    status: "In Development",
  },
  {
    title: "Biomedical Science Track",
    for: "Medical Laboratory Scientists, Medical Laboratory Technicians",
    destination: "UK and Ireland",
    timeline: "Variable",
    english: "IELTS or OET",
    registration: "HCPC + IBMS (UK) or CORU (Ireland)",
    status: "In Development",
  },
];

const supports = [
  "Career pathway assessment and psychometric profiling",
  "Documentation review and readiness guidance",
  "English language readiness evaluation",
  "Interview preparation and communication coaching",
  "Workplace culture and professional conduct orientation",
  "Employer matching based on your profile and preferences",
  "Pre-departure preparation and relocation guidance",
  "Post-arrival follow-up support",
];

const requirements = [
  "A relevant healthcare qualification from a recognised institution",
  "Professional registration in Nigeria, where applicable",
  "Work experience in a healthcare or care setting",
  "A valid international passport",
  "Willingness to undertake English language testing",
  "Clean background and professional references",
  "Realistic expectations about timelines, costs, and requirements",
  "Commitment to the preparation process",
];

function CandidatesPage() {
  return (
    <>
      <section className="bg-[var(--gold-tint)]">
        <div className="container-page py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)] mb-5">
              For Nigerian Healthcare Professionals
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy leading-[1.1]">
              Build Your International Healthcare Career — With Proper Guidance
            </h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-xl">
              Innergy helps qualified Nigerian healthcare professionals prepare for career
              opportunities in the United Kingdom and Ireland through structured assessment, career
              readiness development, and ethical employer matching.
            </p>
            <div className="mt-8">
              <CTALink to="/candidates" hash="apply" variant="gold">Register Your Interest</CTALink>
            </div>
          </div>
          <img src={hero.url} alt="Nurse in a hospital setting" className="w-full h-[420px] object-cover rounded-sm shadow-lg" />
        </div>
      </section>

      {/* Disclaimer banner */}
      <div className="bg-[var(--teal)] text-white">
        <div className="container-page py-5 flex items-start gap-4">
          <AlertTriangle className="h-6 w-6 shrink-0 text-white mt-0.5" />
          <p className="text-[15px] leading-relaxed">
            International healthcare careers require preparation, patience, and commitment. We
            provide honest guidance — not guaranteed jobs or visas. All opportunities are subject
            to employer selection, licensing requirements, and immigration approval.
          </p>
        </div>
      </div>

      <Section>
        <SectionHeading eyebrow="Career Pathways" title="Our Healthcare Career Pathways" />
        <div className="grid md:grid-cols-2 gap-6">
          {pathways.map((p) => {
            const active = p.status === "Active";
            return (
              <article key={p.title} className="bg-white border border-border p-7 rounded-sm">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <span
                    className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-sm shrink-0 ${
                      active ? "bg-[var(--teal)]/10 text-[var(--teal)]" : "bg-warm-grey/10 text-warm-grey"
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${active ? "bg-[var(--teal)]" : "bg-warm-grey"}`} />
                    {p.status}
                  </span>
                </div>
                <dl className="text-[15px] space-y-2.5">
                  <Row k="For" v={p.for} />
                  <Row k="Destination" v={p.destination} />
                  <Row k="Typical Timeline" v={p.timeline} />
                  <Row k="English Requirement" v={p.english} />
                  <Row k="Registration" v={p.registration} />
                </dl>
              </article>
            );
          })}
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="What We Provide" title="How Innergy Supports Your Journey" />
        <ul className="grid md:grid-cols-2 gap-3 max-w-5xl">
          {supports.map((s) => (
            <li key={s} className="flex gap-3 bg-white border border-border p-4 rounded-sm">
              <Check className="h-5 w-5 text-[var(--teal)] shrink-0 mt-0.5" />
              <span className="text-[15px] text-foreground/85">{s}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What You Need"
          title="Candidate Requirements"
          intro="To be considered for the programme, you will typically need:"
        />
        <ul className="grid md:grid-cols-2 gap-3 max-w-5xl">
          {requirements.map((s) => (
            <li key={s} className="flex gap-3 bg-surface p-4 rounded-sm">
              <Check className="h-5 w-5 text-[var(--gold)] shrink-0 mt-0.5" />
              <span className="text-[15px] text-foreground/85">{s}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Please Understand */}
      <Section surface>
        <SectionHeading eyebrow="Important Information" title="Please Understand" />
        <div className="max-w-4xl space-y-5 text-foreground/85 text-[15px] leading-relaxed">
          <p>
            Innergy does not sell jobs or visas. We do not guarantee employment outcomes.
            International healthcare careers involve licensing requirements, immigration processes,
            employer decisions, and regulatory approvals that are beyond our control.
          </p>
          <div>
            <p className="mb-2 font-semibold text-navy">Our role is to:</p>
            <ul className="space-y-2">
              {["Assess your suitability honestly", "Prepare you properly", "Connect you with legitimate opportunities", "Guide you through the process transparently"].map((x) => (
                <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />{x}</li>
              ))}
            </ul>
          </div>
          <p>
            If you are looking for a shortcut or a guaranteed visa, we are not the right
            organisation for you.
          </p>
          <p>
            If you are willing to invest time, effort, and patience into building a genuine
            international healthcare career, we welcome your application.
          </p>
        </div>
      </Section>

      <Section id="apply">
        <SectionHeading title="Register Your Interest" />
        <CandidateForm />
      </Section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-3">
      <dt className="text-navy font-semibold">{k}:</dt>
      <dd className="text-foreground/80">{v}</dd>
    </div>
  );
}

function CandidateForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="bg-white border border-[var(--teal)]/30 p-8 rounded-sm max-w-2xl">
        <h3 className="text-xl font-semibold text-navy">Application received</h3>
        <p className="mt-3 text-foreground/80">
          Thank you. Your application has been received and will be reviewed. We will be in touch if
          you meet the initial requirements.
        </p>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
        className="bg-white border border-border p-6 md:p-10 rounded-sm grid md:grid-cols-2 gap-5 max-w-4xl"
      >
        <F label="Full Name" name="name" required />
        <F label="Email Address" name="email" type="email" required />
        <F label="Phone Number (WhatsApp preferred)" name="phone" type="tel" required />
        <F label="State of Residence" name="state" required />
        <Sel label="Highest Healthcare Qualification" name="qual" required options={["Care Certificate / HCA", "CHEW", "Diploma in Nursing", "BSc Nursing", "Medical Laboratory Science", "Radiography", "Other"]} />
        <F label="Professional Registration Status" name="reg" />
        <F label="Years of Healthcare Experience" name="years" />
        <Sel label="Preferred Career Pathway" name="pathway" required options={["Elderly Care", "Nursing", "Radiography", "Lab Science"]} />
        <Sel label="Have You Taken IELTS or OET?" name="english" options={["Yes", "No"]} />
        <F label="If Yes, What Score?" name="score" />
        <div className="md:col-span-2">
          <F label="How Did You Hear About Innergy?" name="source" />
        </div>
        <div className="md:col-span-2 flex flex-col">
          <label htmlFor="cv" className="text-sm font-medium text-navy mb-1.5">Upload CV (optional)</label>
          <input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" className="text-sm" />
          <p className="text-xs text-warm-grey mt-1">PDF or Word document, up to 5MB.</p>
        </div>
        <label className="md:col-span-2 flex items-start gap-3 text-sm text-foreground/80">
          <input type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--navy)]" />
          <span>I consent to Innergy storing my information to assess my application, in line with UK GDPR.</span>
        </label>
        <div className="md:col-span-2">
          <CTAButton type="submit" variant="gold">Submit Application</CTAButton>
        </div>
      </form>
      <p className="mt-4 text-sm text-warm-grey italic max-w-4xl">
        Submitting this form does not guarantee acceptance into the programme. All applications are
        reviewed and candidates will be contacted if they meet the initial requirements.
      </p>
    </>
  );
}

function F({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium text-navy mb-1.5">
        {label}{required && <span className="text-[var(--alert)] ml-0.5">*</span>}
      </label>
      <input id={name} name={name} type={type} required={required} className="w-full border border-input bg-white px-3.5 py-2.5 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]" />
    </div>
  );
}
function Sel({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium text-navy mb-1.5">
        {label}{required && <span className="text-[var(--alert)] ml-0.5">*</span>}
      </label>
      <select id={name} name={name} required={required} defaultValue="" className="w-full border border-input bg-white px-3.5 py-2.5 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]">
        <option value="" disabled>Please select</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
