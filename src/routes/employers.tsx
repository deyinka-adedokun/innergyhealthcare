import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTAButton, CTALink } from "@/components/site/CTA";
import { Section, SectionHeading } from "@/components/site/Section";
import { CheckCircle2, Phone } from "lucide-react";
import hero from "@/assets/innergy/image8.jpeg.asset.json";

export const Route = createFileRoute("/employers")({
  head: () => ({
    meta: [
      { title: "For Employers — Innergy Healthcare Talent" },
      {
        name: "description",
        content:
          "UK and Ireland healthcare employers: access psychometrically assessed, ethically sourced care professionals from Nigeria.",
      },
      { property: "og:title", content: "For Employers — Innergy Healthcare" },
      {
        property: "og:description",
        content:
          "Solve your care staffing challenge with properly assessed professionals.",
      },
      { property: "og:url", content: "/employers" },
      { property: "og:image", content: hero.url },
    ],
    links: [{ rel: "canonical", href: "/employers" }],
  }),
  component: EmployersPage,
});

const steps = [
  ["Employer Consultation", "We begin with a detailed discussion of your vacancy profile, care model, team culture, sponsorship capacity, and candidate preferences."],
  ["Candidate Sourcing", "We identify suitable candidates from our network of accredited healthcare training institutions and professional communities in Nigeria."],
  ["Assessment & Screening", "Candidates undergo documentation review, qualification verification, psychometric assessment, English language evaluation, and care readiness screening."],
  ["Profile Submission", "We present structured Candidate Readiness Profiles for your review — not standard CVs, but detailed suitability reports."],
  ["Employer Interview", "You interview shortlisted candidates directly. We coordinate scheduling and provide interview support."],
  ["Selection & Documentation", "Upon candidate selection, we support the documentation process, including visa guidance, pre-departure preparation, and compliance checks."],
  ["Arrival & Integration", "We provide pre-departure orientation and maintain contact during the early settlement period to support smoother integration."],
];

const assessment = [
  ["Empathy & Compassion", "Core requirement for elderly and vulnerable person care"],
  ["Emotional Stability", "Managing distress, end-of-life situations, challenging behaviour"],
  ["Safeguarding Awareness", "Protecting vulnerable adults from harm or neglect"],
  ["Reliability & Conscientiousness", "Attendance, punctuality, task completion"],
  ["Communication", "Interaction with residents, families, colleagues, and management"],
  ["Integrity", "Trustworthiness in unsupervised and sensitive environments"],
  ["Cultural Adaptability", "Adjusting to UK/Ireland workplace norms and expectations"],
  ["Stress Tolerance", "Managing shift work, physical demands, and emotional load"],
];

const categories = [
  ["Healthcare Assistants", "Formal HCA training and experience", "Care Assistant, HCA"],
  ["Care Certificate Holders", "Accredited care training", "Care Worker, Support Worker"],
  ["Community Health Workers", "CHEW qualification and community health experience", "Care Assistant, Senior Care Worker"],
  ["Geriatric Care Professionals", "Elderly care specialisation", "Elderly Care Assistant"],
  ["Health Support Workers", "Health facility experience", "Care Worker, HCA"],
];

const ethics = [
  "We do not charge candidates for job placement, visa sponsorship, or employment",
  "We only work with verified, appropriately registered healthcare employers",
  "We provide candidates with transparent information about roles, pay, conditions, and timelines",
  "We do not guarantee employment or visa outcomes",
  "We support fair pay, safe working conditions, and dignified treatment for all placed professionals",
  "We monitor relevant UK and Ireland government guidance on international healthcare recruitment",
];

function EmployersPage() {
  return (
    <>
      <section className="bg-[var(--gold-tint)]">
        <div className="container-page py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)] mb-5">
              For UK &amp; Ireland Healthcare Employers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy leading-[1.1] text-balance">
              Solve Your Care Staffing Challenge With Properly Assessed Professionals
            </h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-xl text-pretty">
              Innergy Healthcare provides UK and Ireland healthcare employers with access to psychometrically
              assessed, professionally prepared, and ethically sourced care talent from Nigeria.
            </p>
            <div className="mt-8">
              <CTALink to="/employers" hash="enquiry" variant="gold">
                Request a Partnership Discussion
              </CTALink>
            </div>
          </div>
          <img
            src={hero.url}
            alt="Care home staff supporting residents"
            className="w-full h-[420px] object-cover rounded-sm shadow-lg"
          />
        </div>
      </section>

      {/* Challenge */}
      <Section>
        <SectionHeading eyebrow="The Challenge" title="The Workforce Reality" />
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
          <p className="text-foreground/85 leading-relaxed">
            The UK adult social care sector faces persistent staffing shortages, with hundreds of
            thousands of vacancies across care homes, nursing homes, and domiciliary care services.
            Ireland faces similar pressures, with growing demand for care assistants and healthcare
            support workers.
          </p>
          <div>
            <p className="text-foreground/85 mb-3">Traditional recruitment approaches often result in:</p>
            <ul className="space-y-2 text-foreground/85">
              {[
                "High candidate dropout rates",
                "Poor cultural and behavioural fit",
                "Safeguarding concerns",
                "Costly turnover within the first 12 months",
                "Administrative burden of international recruitment compliance",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-foreground/85 max-w-4xl">
          Innergy Healthcare addresses these challenges at the source — by assessing candidates before they are
          introduced to employers, not after.
        </p>
      </Section>

      {/* Process */}
      <Section surface>
        <SectionHeading eyebrow="How We Work" title="Our Process" />
        <ol className="space-y-5">
          {steps.map(([title, body], i) => (
            <li key={title} className="bg-white border border-border p-6 rounded-sm flex gap-5">
              <div className="shrink-0 h-12 w-12 grid place-items-center bg-navy text-white font-bold rounded-sm">
                {i + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Step {i + 1}: {title}</h3>
                <p className="text-foreground/80 text-[15px]">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Assessment */}
      <Section>
        <SectionHeading
          eyebrow="Our Assessment Advantage"
          title="What We Assess"
          intro="Our psychometric assessment framework evaluates candidates across indicators that directly affect care quality and staff retention."
        />
        <div className="overflow-x-auto border border-border rounded-sm">
          <table className="w-full text-left">
            <thead className="bg-navy text-white text-sm">
              <tr>
                <th className="px-5 py-4 font-semibold">Indicator</th>
                <th className="px-5 py-4 font-semibold">Why It Matters</th>
              </tr>
            </thead>
            <tbody className="text-[15px]">
              {assessment.map(([k, v], i) => (
                <tr key={k} className={i % 2 ? "bg-surface" : "bg-white"}>
                  <td className="px-5 py-4 font-semibold text-navy w-1/3">{k}</td>
                  <td className="px-5 py-4 text-foreground/80">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Categories */}
      <Section surface>
        <SectionHeading eyebrow="Who We Supply" title="Candidate Categories" />
        <div className="overflow-x-auto bg-white border border-border rounded-sm">
          <table className="w-full text-left">
            <thead className="bg-navy text-white text-sm">
              <tr>
                <th className="px-5 py-4 font-semibold">Category</th>
                <th className="px-5 py-4 font-semibold">Background</th>
                <th className="px-5 py-4 font-semibold">Typical Role Match</th>
              </tr>
            </thead>
            <tbody className="text-[15px]">
              {categories.map(([a, b, c], i) => (
                <tr key={a} className={i % 2 ? "bg-surface" : "bg-white"}>
                  <td className="px-5 py-4 font-semibold text-navy">{a}</td>
                  <td className="px-5 py-4 text-foreground/80">{b}</td>
                  <td className="px-5 py-4 text-foreground/80">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-foreground/75 italic">
          <strong className="text-navy not-italic">Important Note:</strong> Registered Nurses are
          managed under a separate nursing pathway and are not placed into entry-level care roles.
        </p>
      </Section>

      {/* Ethics */}
      <Section>
        <SectionHeading
          eyebrow="Compliance & Ethics"
          title="Our Ethical Commitment"
          intro="Innergy Healthcare is committed to responsible international recruitment. We operate in alignment with the following principles:"
        />
        <ul className="grid md:grid-cols-2 gap-4 max-w-5xl">
          {ethics.map((e) => (
            <li key={e} className="flex gap-3 bg-surface p-5 rounded-sm">
              <CheckCircle2 className="h-5 w-5 text-[var(--teal)] shrink-0 mt-0.5" />
              <span className="text-[15px] text-foreground/85">{e}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Form */}
      <Section surface id="enquiry">
        <SectionHeading
          title="Ready to Discuss Your Workforce Needs?"
          intro="We welcome enquiries from care home groups, nursing homes, domiciliary care providers, healthcare recruitment agencies, and NHS/HSE-contracted facilities."
        />
        <div className="bg-white border border-[var(--teal)]/30 rounded-sm p-5 flex items-start gap-4 max-w-4xl mb-6">
          <div className="shrink-0 h-10 w-10 rounded-full bg-[var(--teal)]/10 flex items-center justify-center">
            <Phone className="h-5 w-5 text-[var(--teal)]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-navy uppercase tracking-wide">Need Express Service?</p>
            <p className="text-sm text-foreground/80 mt-1">
              Call our direct line for immediate assistance:
              <a href="tel:+2349052052136" className="ml-1.5 font-semibold text-[var(--teal)] underline underline-offset-2 hover:text-[var(--navy)] transition-colors">
                +234 (905) 205-2136
              </a>
            </p>
          </div>
        </div>
        <EmployerForm />
      </Section>
    </>
  );
}

function EmployerForm() {
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "");
    const body = [
      `Organisation: ${get("org")}`,
      `Contact: ${get("name")} (${get("title")})`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Roles needed: ${get("roles")}`,
      `Approx. vacancies: ${get("vacancies")}`,
      `Preferred timeline: ${get("timeline")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:partnerships@innergyhealthcare.com?subject=${encodeURIComponent(
      `[Employer Enquiry] ${get("org")}`,
    )}&body=${encodeURIComponent(body)}`;
    setDone(true);
  };

  if (done) {
    return (
      <div className="bg-white border border-[var(--teal)]/30 p-8 rounded-sm max-w-2xl">
        <h3 className="text-xl font-semibold text-navy">Thank you for your enquiry</h3>
        <p className="mt-3 text-foreground/80">
          Your message has been received. A member of our partnerships team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-white border border-border p-6 md:p-10 rounded-sm grid md:grid-cols-2 gap-5 max-w-4xl">
      <Field label="Full Name" name="name" required />
      <Field label="Organisation Name" name="org" required />
      <Field label="Job Title" name="title" required />
      <Field label="Email Address" name="email" type="email" required />
      <Field label="Phone Number" name="phone" type="tel" />
      <SelectField label="Type of Roles Needed" name="roles" required options={["Care Worker", "HCA", "Senior Care Worker", "Nurse", "Other"]} />
      <Field label="Approximate Number of Vacancies" name="vacancies" />
      <Field label="Preferred Start Timeline" name="timeline" />
      <div className="md:col-span-2">
        <Field label="Message / Additional Information" name="message" textarea />
      </div>
      <label className="md:col-span-2 flex items-start gap-3 text-sm text-foreground/80">
        <input type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--navy)]" />
        <span>
          I consent to Innergy Healthcare processing my information to respond to this enquiry, in line with
          UK GDPR.
        </span>
      </label>
      <div className="md:col-span-2">
        <CTAButton type="submit" variant="gold">Submit Enquiry</CTAButton>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", textarea = false, required = false }: { label: string; name: string; type?: string; textarea?: boolean; required?: boolean }) {
  const cls = "w-full border border-input bg-white px-3.5 py-2.5 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-[var(--gold)]";
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium text-navy mb-1.5">
        {label}{required && <span className="text-[var(--alert)] ml-0.5">*</span>}
      </label>
      {textarea ? (
        <textarea id={name} name={name} required={required} rows={4} className={cls} />
      ) : (
        <input id={name} name={name} type={type} required={required} className={cls} />
      )}
    </div>
  );
}

function SelectField({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) {
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
