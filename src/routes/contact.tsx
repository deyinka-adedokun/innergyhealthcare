import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTAButton } from "@/components/site/CTA";
import { Section } from "@/components/site/Section";
import { Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Innergy" },
      {
        name: "description",
        content:
          "Contact Innergy — employer partnerships, candidate enquiries, and general healthcare recruitment questions.",
      },
      { property: "og:title", content: "Contact — Innergy" },
      { property: "og:description", content: "Get in touch with Innergy's partnerships, candidate, and general enquiries teams." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const cards = [
  {
    title: "Employer Partnerships",
    body: "For care homes, nursing homes, NHS trusts, HSE facilities, and recruitment agencies.",
    email: "partnerships@innergyglobal.com",
  },
  {
    title: "Candidate Enquiries",
    body: "For healthcare professionals interested in career pathways.",
    email: "careers@innergyglobal.com",
  },
  {
    title: "General Enquiries",
    body: "For media, partnerships, institutional collaboration, and other matters.",
    email: "info@innergyglobal.com",
  },
];

function ContactPage() {
  return (
    <>
      <section className="bg-[var(--gold-tint)]">
        <div className="container-page py-16 md:py-20 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)] mb-5">
            Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy leading-[1.1]">Get in Touch</h1>
          <p className="mt-6 text-lg text-foreground/80">
            Whether you are an employer seeking care professionals, a recruitment partner exploring
            collaboration, or a healthcare professional interested in our career pathways, we
            welcome your enquiry.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((c) => (
            <div key={c.title} className="bg-white border border-border p-7 rounded-sm">
              <div className="h-12 w-12 grid place-items-center bg-[var(--gold-tint)] text-navy rounded-sm mb-5">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-foreground/80 text-[15px] mb-4">{c.body}</p>
              <a href={`mailto:${c.email}`} className="text-[var(--teal)] font-semibold text-sm break-all hover:underline">
                {c.email}
              </a>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <ContactForm />
          <aside className="bg-navy text-white p-8 rounded-sm">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-5 w-5 text-[var(--gold)]" />
              <h3 className="text-lg font-semibold text-white">Nigerian Office</h3>
            </div>
            <p className="text-white/80 text-[15px] leading-relaxed">
              H16, Alafia Estate,<br />Ibadan, Nigeria
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 text-sm text-white/70">
              <p>
                Web:{" "}
                <a href="https://innergyglobal.com" className="text-[var(--gold)] hover:underline">
                  innergyglobal.com
                </a>
              </p>
              <p className="mt-3">A Psychotesting Enterprise Company</p>
              <p className="mt-2">Innergy is committed to ethical international healthcare recruitment.</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function ContactForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="bg-white border border-[var(--teal)]/30 p-8 rounded-sm">
        <h3 className="text-xl font-semibold text-navy">Message sent</h3>
        <p className="mt-3 text-foreground/80">Thank you. A member of our team will be in touch.</p>
      </div>
    );
  }
  const input = "w-full border border-input bg-white px-3.5 py-2.5 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]";
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("cname") ?? "");
    const email = String(fd.get("cemail") ?? "");
    const subject = String(fd.get("csub") ?? "General Enquiry");
    const message = String(fd.get("cmsg") ?? "");
    const body =
      `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    window.location.href = `mailto:info@innergyglobal.com?subject=${encodeURIComponent(
      `[Website] ${subject}`,
    )}&body=${body}`;
    setDone(true);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white border border-border p-6 md:p-8 rounded-sm grid gap-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label htmlFor="cname" className="text-sm font-medium text-navy mb-1.5">Name<span className="text-[var(--alert)] ml-0.5">*</span></label>
          <input id="cname" required className={input} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cemail" className="text-sm font-medium text-navy mb-1.5">Email<span className="text-[var(--alert)] ml-0.5">*</span></label>
          <input id="cemail" type="email" required className={input} />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="csub" className="text-sm font-medium text-navy mb-1.5">Subject<span className="text-[var(--alert)] ml-0.5">*</span></label>
        <select id="csub" required defaultValue="" className={input}>
          <option value="" disabled>Please select</option>
          {["Employer Enquiry", "Candidate Enquiry", "Partnership", "Media", "Other"].map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="cmsg" className="text-sm font-medium text-navy mb-1.5">Message<span className="text-[var(--alert)] ml-0.5">*</span></label>
        <textarea id="cmsg" rows={6} required className={input} />
      </div>
      <label className="flex items-start gap-3 text-sm text-foreground/80">
        <input type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--navy)]" />
        <span>I consent to Innergy processing my information to respond to this enquiry, in line with UK GDPR.</span>
      </label>
      <div>
        <CTAButton type="submit" variant="gold">Send Message</CTAButton>
      </div>
    </form>
  );
}
