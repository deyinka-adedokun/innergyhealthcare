import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout, PH2, PH3, PUL, POL, PTable } from "@/components/site/PolicyLayout";

export const Route = createFileRoute("/ethical-recruitment")({
  head: () => ({
    meta: [
      { title: "Ethical Recruitment Policy — Innergy Healthcare" },
      { name: "description", content: "Innergy Healthcare's commitment to ethical, transparent, and humane recruitment of healthcare professionals — aligned with the WHO Global Code of Practice." },
      { property: "og:title", content: "Ethical Recruitment Policy — Innergy Healthcare" },
      { property: "og:url", content: "/ethical-recruitment" },
    ],
    links: [{ rel: "canonical", href: "/ethical-recruitment" }],
  }),
  component: EthicalPage,
});

function EthicalPage() {
  return (
    <PolicyLayout
      eyebrow="Policy"
      title="Ethical Recruitment Policy"
      meta={[
        { label: "Last Updated", value: "27 June 2026" },
        { label: "Document Reference", value: "INN-POL-003" },
        { label: "Policy Owner", value: "Director, Compliance & International Operations" },
        { label: "Review Cycle", value: "Annual" },
      ]}
    >
      <PH2>1. Statement of Commitment</PH2>
      <p>
        Innergy Healthcare Talent Management &amp; Outsourcing is unconditionally committed to the ethical,
        transparent, and humane recruitment of healthcare professionals for international career opportunities.
        We recognise that international healthcare recruitment carries profound responsibilities — to candidates
        and their families, to destination country healthcare systems, to Nigeria's own healthcare needs, and to
        the integrity of the global healthcare workforce.
      </p>

      <PH2>2. Legal and Regulatory Framework</PH2>
      <POL>
        <li>WHO Global Code of Practice on the International Recruitment of Health Personnel (2010, 2023 reviews)</li>
        <li>UK Code of Practice for International Recruitment (NHS Employers, 2023)</li>
        <li>Modern Slavery Act 2015 (UK)</li>
        <li>ILO Conventions on Migrant Workers</li>
        <li>Nigeria Labour Act (Cap L1, LFN 2004)</li>
        <li>NAPTIP Act (National Agency for the Prohibition of Trafficking in Persons)</li>
        <li>Federal Ministry of Labour and Employment (Nigeria) Regulations on International Recruitment</li>
        <li>EU Directive on Transparent and Predictable Working Conditions</li>
      </POL>

      <PH2>3. Core Ethical Principles</PH2>
      <PH3>Principle 1: No Fees for Recruitment or Job Placement</PH3>
      <p>Innergy Healthcare categorically does not charge candidates fees for recruitment, job matching, CV submission, interview arrangement, or contract facilitation. This principle is absolute and non-negotiable.</p>
      <p>Candidates may bear legitimate third-party statutory costs (visa fees, language test fees, professional registration fees, medical screening) paid directly to the relevant authorities. Innergy Healthcare will always clearly explain these costs in writing before a candidate incurs them.</p>

      <PH3>Principle 2: Full Transparency and Informed Consent</PH3>
      <p>Before commitment to any programme or employer engagement, we provide in writing:</p>
      <PUL>
        <li>A clear description of the role and employer</li>
        <li>Salary, benefits, shift patterns, and working hours</li>
        <li>Location of employment and accommodation options</li>
        <li>All foreseeable costs the candidate will personally incur</li>
        <li>The realistic timeline from assessment to potential placement</li>
        <li>An honest assessment of the candidate's probability of placement</li>
        <li>The visa conditions, including any restrictions on dependants</li>
      </PUL>
      <p>No candidate is submitted to an employer without explicit, documented, written consent.</p>

      <PH3>Principle 3: Protection from Exploitation and Trafficking</PH3>
      <p>Zero tolerance toward any form of human trafficking, forced labour, or modern slavery. We will not:</p>
      <PUL>
        <li>Withhold or threaten to withhold any candidate's identity documents</li>
        <li>Create debt arrangements that restrict a candidate's freedom</li>
        <li>Use threats, deception, or coercion at any stage of recruitment</li>
        <li>Knowingly work with employers who engage in exploitative practices</li>
        <li>Place candidates with employers who have a history of non-payment or abuse</li>
      </PUL>

      <PH3>Principle 4: Fair and Non-Discriminatory Recruitment</PH3>
      <p>We recruit and assess solely on qualifications, professional registration, care experience, clinical competence, psychometric readiness, English proficiency, and motivation. We do not discriminate on gender, religion, ethnicity, age (within legal limits), marital or family status, political opinion, or disability (unless a genuine occupational requirement prevents placement).</p>

      <PH3>Principle 5: Candidate Welfare and Dignity</PH3>
      <PUL>
        <li>Timely, honest communication at every stage</li>
        <li>Acknowledge and process applications within 14 working days</li>
        <li>Inform candidates of unsuccessful outcomes respectfully and promptly</li>
        <li>Maintain a safe and confidential channel for concerns</li>
        <li>Provide 90-day post-arrival pastoral support</li>
      </PUL>
      <p>Candidates have the right to withdraw at any time, without penalty or financial obligation.</p>

      <PH3>Principle 6: Source Country Responsibility</PH3>
      <PUL>
        <li>We do not actively recruit healthcare workers critically needed in underserved Nigerian communities</li>
        <li>We focus primarily on professionals already seeking international opportunities through self-initiated mobility</li>
        <li>We partner with colleges and training institutions to support additional Nigerian healthcare capacity</li>
        <li>We support circular migration and will not discourage candidates from returning to Nigeria</li>
      </PUL>

      <PH3>Principle 7: Post-Placement Responsibility</PH3>
      <PUL>
        <li>Remain accessible to placed candidates for a minimum of 90 days post-arrival</li>
        <li>Provide a confidential welfare reporting channel</li>
        <li>Respond to welfare concerns within 48 hours</li>
        <li>Escalate serious welfare concerns to relevant authorities</li>
        <li>Maintain a record of all post-placement welfare contacts</li>
      </PUL>

      <PH2>4. Staff and Partner Obligations</PH2>
      <PUL>
        <li>Read, understand, and sign this policy annually</li>
        <li>Complete modern slavery awareness training</li>
        <li>Report ethical concerns to the Compliance Officer immediately</li>
        <li>Refuse to engage in any practice that contradicts this policy</li>
      </PUL>
      <p>Any staff member or partner found in violation is subject to immediate disciplinary action, contract termination, and referral to appropriate authorities where applicable.</p>

      <PH2>5. Employer Due Diligence Framework</PH2>
      <PTable
        headers={["Check", "Verification Method"]}
        rows={[
          ["Sponsor Licence (UK)", "Home Office public register"],
          ["HIQA/CQC Registration", "Public regulatory registers"],
          ["Company registration", "Companies House (UK) / CRO (Ireland)"],
          ["Employment contract review", "Legal review of standard terms"],
          ["Candidate welfare provisions", "Written confirmation from employer"],
          ["Salary benchmarking", "Cross-reference with UK/Irish minimum wage and care sector rates"],
          ["History of complaints", "Public records and industry references"],
        ]}
      />

      <PH2>6. Grievance and Whistleblowing Mechanism</PH2>
      <p>
        <strong>Compliance Officer:</strong><br />
        Email: <a href="mailto:info@innergyhealthcare.com" className="text-[var(--teal)] hover:underline">info@innergyhealthcare.com</a><br />
        Phone: 09052052136
      </p>
      <p>All reports are acknowledged within 48 hours, investigated confidentially and impartially, and resolved with written outcome notification within 30 days. We guarantee no retaliation for genuine, good-faith reports.</p>

      <PH2>7. Policy Review</PH2>
      <p>Reviewed annually or following changes to UK, Irish, or Nigerian recruitment law; changes to WHO or NHS Employer guidance; any material ethical incident; or expansion to new destination countries or professional tracks.</p>
    </PolicyLayout>
  );
}
