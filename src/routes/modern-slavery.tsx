import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout, PH2, PH3, PUL } from "@/components/site/PolicyLayout";

export const Route = createFileRoute("/modern-slavery")({
  head: () => ({
    meta: [
      { title: "Modern Slavery Statement — Innergy Healthcare" },
      { name: "description", content: "Innergy Healthcare's voluntary statement on preventing modern slavery and human trafficking, aligned with the UK Modern Slavery Act 2015." },
      { property: "og:title", content: "Modern Slavery Statement — Innergy Healthcare" },
      { property: "og:url", content: "/modern-slavery" },
    ],
    links: [{ rel: "canonical", href: "/modern-slavery" }],
  }),
  component: ModernSlaveryPage,
});

function ModernSlaveryPage() {
  return (
    <PolicyLayout
      eyebrow="Policy"
      title="Modern Slavery & Human Trafficking Statement"
      meta={[
        { label: "Published", value: "27 June 2026" },
        { label: "Document Reference", value: "INN-POL-004" },
        { label: "Review Cycle", value: "Annual" },
      ]}
    >
      <PH2>1. Introduction</PH2>
      <p>
        This statement is published in accordance with the spirit of the Modern Slavery Act 2015 (UK) and reflects
        Innergy Healthcare's unconditional commitment to preventing modern slavery and human trafficking in all
        aspects of our operations and supply chain.
      </p>
      <p>
        Although Innergy Healthcare is registered in Nigeria and the Modern Slavery Act technically applies to
        organisations with a UK annual turnover exceeding £36 million, we voluntarily publish this statement
        because we recruit candidates for placement with UK and Irish employers, transparency in this area is
        non-negotiable, and we want our employer partners to be fully assured of our ethical standards.
      </p>

      <PH2>2. Our Business and Supply Chain</PH2>
      <p>Innergy Healthcare operates as a healthcare talent management company, sourcing candidates from Nigerian health institutions for placement with care employers in the United Kingdom and Ireland. Our supply chain involves:</p>
      <PUL>
        <li>Nigerian Colleges of Health Sciences and Nursing</li>
        <li>Psychometric assessment platforms</li>
        <li>English language test providers</li>
        <li>Immigration and legal advisors</li>
        <li>Background check and credential verification providers</li>
        <li>UK and Irish employer partners</li>
      </PUL>

      <PH2>3. Our Risk Assessment</PH2>
      <p>We recognise international recruitment carries inherent modern slavery risks, including:</p>
      <PUL>
        <li>Fraudulent job offers and deceptive recruitment</li>
        <li>Candidate fee charging and debt bondage</li>
        <li>Document confiscation</li>
        <li>Exploitation of vulnerable job-seekers</li>
        <li>Irregular migration facilitated by unethical recruiters</li>
      </PUL>
      <p>We assess our risk as <strong>moderate</strong> given the geographic and economic vulnerability of some candidates. This is precisely why our ethical controls are embedded at every stage of our process.</p>

      <PH2>4. Our Controls and Due Diligence</PH2>
      <PH3>4.1 Candidate Protection</PH3>
      <PUL>
        <li>Absolute prohibition on recruitment fees to candidates</li>
        <li>Written, transparent disclosure of all foreseeable candidate costs</li>
        <li>Consent-based submission of candidate profiles to employers</li>
        <li>Right to withdraw without penalty at any stage</li>
        <li>90-day post-placement pastoral support and welfare reporting channel</li>
      </PUL>
      <PH3>4.2 Employer Vetting</PH3>
      <PUL>
        <li>Verification of Sponsor Licence (UK) or Employment Permit eligibility (Ireland)</li>
        <li>Review of standard employment contract terms for compliance with minimum wage and working time legislation</li>
        <li>Assessment of employer's track record with international candidates</li>
        <li>Refusal to engage with employers flagged for exploitative practices</li>
      </PUL>
      <PH3>4.3 Staff Training and Awareness</PH3>
      <PUL>
        <li>All staff complete modern slavery awareness training at induction and annually</li>
        <li>Staff are trained to identify indicators of exploitation</li>
        <li>A clear internal reporting channel is available for staff concerns</li>
      </PUL>
      <PH3>4.4 Sub-Agent and Partner Management</PH3>
      <PUL>
        <li>All partner organisations sign our Code of Conduct including anti-trafficking commitments</li>
        <li>Due diligence on all sub-agents and partner institutions</li>
        <li>Partner compliance is reviewed annually</li>
      </PUL>

      <PH2>5. Key Performance Indicators</PH2>
      <PUL>
        <li>Number of candidate welfare concerns reported and resolved</li>
        <li>Number of employer partners verified through full due diligence</li>
        <li>Staff training completion rates</li>
        <li>Frequency of policy review and update</li>
        <li>Candidate satisfaction surveys (post-placement)</li>
      </PUL>

      <PH2>6. Commitment</PH2>
      <p>
        Innergy Healthcare's leadership is committed to continuous improvement in the prevention of modern slavery
        and human trafficking. We take every concern seriously and act decisively when any risk is identified.
      </p>
      <p className="pt-4">
        <strong>Signed:</strong><br />
        Adeyinka Adedokun<br />
        Director, Innergy Healthcare Talent Management &amp; Outsourcing<br />
        Date: 27 June 2026
      </p>
    </PolicyLayout>
  );
}
