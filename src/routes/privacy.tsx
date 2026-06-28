import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout, PH2, PH3, PUL, PTable } from "@/components/site/PolicyLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Innergy Healthcare" },
      { name: "description", content: "How Innergy Healthcare collects, uses, stores, shares, and protects your personal data under UK GDPR, EU GDPR, and the Nigeria Data Protection Act." },
      { property: "og:title", content: "Privacy Policy — Innergy Healthcare" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PolicyLayout
      eyebrow="Policy"
      title="Privacy Policy"
      meta={[
        { label: "Last Updated", value: "27 June 2026" },
        { label: "Effective Date", value: "27 June 2026" },
        { label: "Document Reference", value: "INN-POL-001" },
        { label: "Review Cycle", value: "Annual" },
      ]}
    >
      <PH2>1. Introduction and Identity of the Data Controller</PH2>
      <p>
        Innergy Healthcare Talent Management &amp; Outsourcing ("Innergy Healthcare", "we", "us", "our") is a
        healthcare talent management and global outsourcing company registered in Nigeria and operating
        internationally, including in the United Kingdom and Ireland.
      </p>
      <p><strong>Registered Address:</strong> H16, Alafia Estate, Ibadan, Nigeria</p>
      <p>
        <strong>Data Protection Officer:</strong><br />
        Email: <a href="mailto:info@innergyhealthcare.com" className="text-[var(--teal)] hover:underline">info@innergyhealthcare.com</a>
      </p>
      <p>
        We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect,
        use, store, share, and protect your personal data when you visit our website at innergyhealthcare.com, submit
        an expression of interest as a candidate, engage with us as an employer or institutional partner, or
        communicate with us by email, phone, or other means.
      </p>

      <PH2>2. Legal Framework</PH2>
      <p>We process personal data in accordance with:</p>
      <PUL>
        <li>UK General Data Protection Regulation (UK GDPR)</li>
        <li>UK Data Protection Act 2018</li>
        <li>EU General Data Protection Regulation 2016/679 (EU GDPR) (for Irish operations)</li>
        <li>Nigeria Data Protection Act 2023 (NDPA)</li>
        <li>Nigeria Data Protection Regulation 2019 (NDPR)</li>
      </PUL>
      <p>
        Where we transfer data from Nigeria to the UK or Ireland, we implement appropriate safeguards including
        Standard Contractual Clauses (SCCs) and align with adequacy decisions where applicable.
      </p>

      <PH2>3. What Personal Data We Collect</PH2>
      <PH3>3.1 Candidate Data</PH3>
      <p><strong>Identity Data:</strong> Full legal name, date of birth, gender, nationality, passport number and expiry, NIN where applicable.</p>
      <p><strong>Contact Data:</strong> Email, mobile, WhatsApp, residential address, emergency contact details.</p>
      <p><strong>Professional and Qualification Data:</strong> Academic certificates, transcripts, professional registration numbers (MLSCN, NMCN, MDCN), employment history, references, licences, IELTS/SELT/OET results, Care Certificate or equivalent training records.</p>
      <p><strong>Assessment Data:</strong> Psychometric scores, English communication evaluations, interview notes, care readiness outcomes, behavioural and personality profile summaries.</p>
      <p><strong>Sensitive Personal Data:</strong> Health information (where required for visa or fitness-to-work), criminal records disclosure (Enhanced DBS or equivalent), immigration status.</p>
      <p><strong>Immigration and Visa Data:</strong> Passport biographic pages, visa application documentation, TB test results, biometric information (indirectly via government authorities).</p>
      <PH3>3.2 Employer Data</PH3>
      <PUL>
        <li>Organisation name and registered address</li>
        <li>Sponsor licence number (where applicable)</li>
        <li>Contact person details</li>
        <li>CQC/HIQA registration details</li>
        <li>Contractual and payment information</li>
        <li>Correspondence records</li>
      </PUL>
      <PH3>3.3 Institutional Partner Data</PH3>
      <PUL>
        <li>Institution name and address</li>
        <li>NBTE or relevant accreditation details</li>
        <li>Contact person details</li>
        <li>Partnership agreement records</li>
        <li>Student cohort data (aggregated and anonymised where possible)</li>
      </PUL>
      <PH3>3.4 Website Visitor Data</PH3>
      <PUL>
        <li>IP address, browser type and version, device type and OS</li>
        <li>Pages visited, time spent, referral source</li>
        <li>Cookie identifiers (see our Cookie Policy)</li>
      </PUL>

      <PH2>4. How We Collect Your Data</PH2>
      <PUL>
        <li><strong>Website forms:</strong> Expression of interest, employer enquiry, institutional partnership, and contact forms.</li>
        <li><strong>Direct communication:</strong> Email, phone, WhatsApp, or video calls.</li>
        <li><strong>Institutional partners:</strong> Colleges and training institutions referring candidates with consent.</li>
        <li><strong>Assessment platforms:</strong> Psychometric and English evaluation tools.</li>
        <li><strong>Third-party verification services:</strong> Credential verification and background check providers.</li>
        <li><strong>Public professional records:</strong> Professional council registers where publicly available.</li>
      </PUL>

      <PH2>5. How We Use Your Data</PH2>
      <PH3>5.1 Candidate Data</PH3>
      <PUL>
        <li>Assess eligibility and suitability for international healthcare opportunities</li>
        <li>Conduct psychometric and professional readiness evaluations</li>
        <li>Verify qualifications and professional registrations</li>
        <li>Match profiles with appropriate employer vacancies</li>
        <li>Prepare and submit documentation for professional registration (NMC, HCPC, CORU, etc.)</li>
        <li>Support visa and immigration applications where instructed</li>
        <li>Communicate about applications, progress, and opportunities</li>
        <li>Provide pre-departure and post-arrival support</li>
        <li>Comply with legal and regulatory obligations and maintain audit records</li>
      </PUL>
      <PH3>5.2 Employer Data</PH3>
      <PUL>
        <li>Manage commercial relationships, match candidates, facilitate interviews</li>
        <li>Issue and manage contracts and invoices</li>
        <li>Comply with legal obligations</li>
      </PUL>
      <PH3>5.3 Website Visitor Data</PH3>
      <PUL>
        <li>Operate and maintain our website</li>
        <li>Analyse traffic and improve user experience</li>
        <li>Detect and prevent security threats</li>
      </PUL>

      <PH2>6. Legal Basis for Processing</PH2>
      <PTable
        headers={["Purpose", "Legal Basis"]}
        rows={[
          ["Candidate assessment and matching", "Consent / Contract"],
          ["Credential verification", "Legitimate Interests / Legal Obligation"],
          ["Visa and immigration documentation", "Consent / Legal Obligation"],
          ["Employer partnership management", "Contract / Legitimate Interests"],
          ["Website analytics", "Consent (Cookies)"],
          ["Compliance and audit records", "Legal Obligation"],
          ["Post-placement support", "Legitimate Interests / Contract"],
          ["Marketing communications", "Consent"],
        ]}
      />

      <PH2>7. International Data Transfers</PH2>
      <p>
        As a Nigerian-based company with operations in the UK and Ireland, your personal data may be transferred
        internationally. Transfers from Nigeria to the UK are protected by Standard Contractual Clauses (SCCs),
        Data Processing Agreements, and technical and organisational security measures. The UK and EU have
        adequacy arrangements in place. We never sell your personal data.
      </p>

      <PH2>8. Who We Share Your Data With</PH2>
      <PUL>
        <li>Employer partners (with explicit consent)</li>
        <li>Professional registration bodies (NMC, HCPC, CORU, MLSCN, NMCN, MDCN)</li>
        <li>UK Home Office / Irish Immigration Service</li>
        <li>Background check providers (DBS, AccessNI, Nigerian Police equivalents)</li>
        <li>English language testing centres (IELTS, OET, PTE)</li>
        <li>IT and platform providers (hosting, CRM, assessment platforms)</li>
        <li>Legal and compliance advisors</li>
        <li>Regulatory authorities (where legally required)</li>
      </PUL>

      <PH2>9. Data Retention</PH2>
      <PTable
        headers={["Data Category", "Retention Period"]}
        rows={[
          ["Active candidate data", "Duration of engagement + 2 years"],
          ["Successfully placed candidates", "6 years from placement date"],
          ["Unsuccessful candidates", "1 year (unless you request deletion)"],
          ["Employer partner data", "Duration of contract + 7 years"],
          ["Website analytics data", "26 months"],
          ["Financial/invoicing records", "7 years (legal requirement)"],
          ["Psychometric assessment data", "3 years from assessment date"],
        ]}
      />

      <PH2>10. Your Rights</PH2>
      <p>Under UK GDPR and the Nigeria Data Protection Act, you have the following rights:</p>
      <PUL>
        <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
        <li><strong>Rectification</strong> — correct inaccurate or incomplete data.</li>
        <li><strong>Erasure</strong> — request deletion, subject to legal retention obligations.</li>
        <li><strong>Restriction</strong> — temporarily stop processing while a dispute is resolved.</li>
        <li><strong>Data portability</strong> — receive your data in a structured, machine-readable format.</li>
        <li><strong>Object</strong> — object to processing based on legitimate interests or direct marketing.</li>
        <li><strong>Withdraw consent</strong> — at any time, without affecting prior lawful processing.</li>
        <li><strong>Automated decision-making</strong> — we do not make fully automated decisions with legal effects.</li>
      </PUL>
      <p>
        To exercise any right, contact our Data Protection Officer at{" "}
        <a href="mailto:info@innergyhealthcare.com" className="text-[var(--teal)] hover:underline">info@innergyhealthcare.com</a>. Response within 30 days of receipt.
      </p>

      <PH2>11. Security</PH2>
      <PUL>
        <li>Encrypted data storage and transmission (SSL/TLS)</li>
        <li>Access controls and role-based permissions</li>
        <li>Regular security assessments</li>
        <li>Staff data protection training</li>
        <li>Incident response procedures</li>
      </PUL>
      <p>
        In the event of a data breach likely to cause risk to your rights, we notify the relevant supervisory
        authority within 72 hours and affected individuals without undue delay.
      </p>

      <PH2>12. Cookie Policy</PH2>
      <p>See our dedicated <a href="/cookies" className="text-[var(--teal)] hover:underline">Cookie Policy</a> for full details on how we use cookies on this website.</p>

      <PH2>13. Complaints</PH2>
      <p>You have the right to complain to the supervisory authority:</p>
      <PUL>
        <li><strong>UK:</strong> Information Commissioner's Office (ICO) — ico.org.uk — 0303 123 1113</li>
        <li><strong>Ireland:</strong> Data Protection Commission (DPC) — dataprotection.ie</li>
        <li><strong>Nigeria:</strong> Nigeria Data Protection Commission (NDPC) — ndpc.gov.ng</li>
      </PUL>

      <PH2>14. Changes to This Policy</PH2>
      <p>
        We review and update this policy at least annually. Material changes will be communicated via email to
        registered users and a prominent notice on our website.
      </p>
    </PolicyLayout>
  );
}
