import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout, PH2, PH3, PUL } from "@/components/site/PolicyLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Innergy Healthcare" },
      { name: "description", content: "Terms governing your use of the Innergy Healthcare website and services for candidates, employers, and institutional partners." },
      { property: "og:title", content: "Terms of Service — Innergy Healthcare" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PolicyLayout
      eyebrow="Policy"
      title="Terms of Service"
      meta={[
        { label: "Last Updated", value: "27 June 2026" },
        { label: "Document Reference", value: "INN-POL-002" },
        { label: "Review Cycle", value: "Annual" },
      ]}
    >
      <PH2>1. Introduction</PH2>
      <p>
        These Terms of Service ("Terms") govern your use of Innergy Healthcare's website at innergyhealthcare.com and
        the services provided by Innergy Healthcare Talent Management &amp; Outsourcing ("Innergy Healthcare", "we",
        "us", "our"). By accessing our website or engaging our services, you agree to be bound by these Terms.
      </p>

      <PH2>2. About Innergy Healthcare</PH2>
      <p>
        Innergy Healthcare is a healthcare talent management and global outsourcing company. We identify, assess,
        prepare, and connect qualified healthcare professionals with international career opportunities, primarily
        in the United Kingdom and Ireland. Innergy Healthcare is a subsidiary of The Psychotesting Enterprise,
        registered in Nigeria.
      </p>

      <PH2>3. Our Services</PH2>
      <PH3>3.1 For Candidates</PH3>
      <PUL>
        <li>Psychometric assessment and care readiness evaluation</li>
        <li>Professional credential verification support</li>
        <li>English language readiness guidance</li>
        <li>Career preparation and orientation programmes</li>
        <li>Introduction and referral to international employer partners</li>
        <li>Documentation and immigration readiness support</li>
        <li>Post-placement pastoral support</li>
      </PUL>
      <PH3>3.2 For Employers</PH3>
      <PUL>
        <li>Candidate sourcing from accredited Nigerian health institutions</li>
        <li>Candidate assessment, screening, and shortlisting</li>
        <li>Interview facilitation and coordination</li>
        <li>Compliance and sponsorship support guidance</li>
        <li>Post-placement integration support</li>
      </PUL>
      <PH3>3.3 For Institutions</PH3>
      <PUL>
        <li>NBTE Psychometric Course delivery support</li>
        <li>Student career pathway assessment</li>
        <li>International career orientation</li>
        <li>Institutional partnership programmes</li>
      </PUL>

      <PH2>4. Critical Disclaimer</PH2>
      <p>
        <strong>Innergy Healthcare does not guarantee employment, visa approval, job placement, or successful
        immigration outcomes.</strong> We act as a talent preparation and connection service. All final hiring
        decisions rest exclusively with employer partners. All visa and immigration decisions rest exclusively
        with relevant government authorities.
      </p>
      <p>Our services are preparation and facilitation in nature. We cannot and do not guarantee that:</p>
      <PUL>
        <li>Any candidate will receive a job offer</li>
        <li>Any job offer will result in a successful visa application</li>
        <li>Any candidate will successfully pass professional registration assessments (NMC, HCPC, CORU, etc.)</li>
        <li>Any candidate will be suitable for a specific employer's requirements</li>
      </PUL>

      <PH2>5. User Eligibility and Registration</PH2>
      <PH3>5.1 Candidates</PH3>
      <PUL>
        <li>A qualified or trainee healthcare professional</li>
        <li>A Nigerian national or legally resident in Nigeria</li>
        <li>Aged 18 years or above</li>
        <li>Genuinely interested in international healthcare career opportunities</li>
      </PUL>
      <PH3>5.2 Employers</PH3>
      <PUL>
        <li>A registered healthcare or care provider</li>
        <li>Hold or be eligible to hold a valid Sponsor Licence (UK) or Critical Skills Employment Permit (Ireland)</li>
        <li>Comply with CQC (UK) or HIQA (Ireland) registration requirements</li>
        <li>Commit to ethical, fair employment of international candidates</li>
      </PUL>
      <PH3>5.3 Institutions</PH3>
      <PUL>
        <li>Accredited healthcare training institution</li>
        <li>Hold valid NBTE, NCCE, or relevant accreditation</li>
        <li>Commit to ethical student data handling and candidate consent</li>
      </PUL>

      <PH2>6. User Obligations</PH2>
      <PUL>
        <li>Provide accurate, complete, and truthful information at all times</li>
        <li>Notify us promptly of any changes to information provided</li>
        <li>Maintain confidentiality of account credentials</li>
        <li>Not misrepresent qualifications, experience, or professional status</li>
        <li>Not use our services for any fraudulent, exploitative, or illegal purpose</li>
        <li>Comply with all applicable laws, including immigration, employment, and data protection</li>
        <li>Treat all parties with respect and professionalism throughout the process</li>
      </PUL>

      <PH2>7. Fees and Payment</PH2>
      <PH3>7.1 Candidate Fees</PH3>
      <p>
        Innergy Healthcare does not charge candidates recruitment fees for job placement. Candidates may be
        required to pay third-party statutory costs directly, including visa application fees, English language
        test fees, professional registration fees, medical and TB screening fees, and criminal records check
        fees. These are paid directly to the relevant authorities.
      </p>
      <PH3>7.2 Employer Fees</PH3>
      <p>Employer placement fees are agreed separately through a formal Partnership Agreement, communicated transparently before services commence.</p>
      <PH3>7.3 Institutional Fees</PH3>
      <p>Fees for NBTE course delivery or institutional partnership programmes are agreed through a formal Memorandum of Understanding (MoU).</p>

      <PH2>8. Intellectual Property</PH2>
      <p>
        All content on the Innergy Healthcare website and within our service materials — text, assessments,
        frameworks, psychometric tools, brochures, training materials, graphics, and the Innergy Healthcare brand —
        is the intellectual property of Innergy Healthcare Talent Management &amp; Outsourcing or its licensors.
      </p>

      <PH2>9. Confidentiality</PH2>
      <p>Both parties agree to maintain strict confidentiality regarding candidate personal and assessment data, employer staffing strategies and vacancies, commercial terms of any partnership, and any information marked confidential. This obligation survives termination.</p>

      <PH2>10. Third-Party Links and Services</PH2>
      <p>Our website may contain links to third-party websites (HCPC, NMC, UKVI, IELTS). These links are provided for information only and Innergy Healthcare is not responsible for their content, privacy practices, or accuracy.</p>

      <PH2>11. Limitation of Liability</PH2>
      <PH3>11.1 Innergy Healthcare shall not be liable for:</PH3>
      <PUL>
        <li>Employer hiring decisions or the outcome of any job application</li>
        <li>Visa or immigration decisions made by government authorities</li>
        <li>Failure of candidates to meet professional registration requirements</li>
        <li>Loss arising from candidate or employer misrepresentation</li>
        <li>Indirect, consequential, incidental, or special damages</li>
        <li>Loss of income, opportunity, or anticipated savings</li>
        <li>Costs arising from delays in visa processing or employer decision-making</li>
      </PUL>
      <PH3>11.2 Financial Cap</PH3>
      <p>Where liability cannot be excluded, our total aggregate liability shall not exceed the lesser of the total fees paid to Innergy Healthcare in the preceding 12 months, or £500 (or its Nigerian Naira equivalent).</p>
      <PH3>11.3 Force Majeure</PH3>
      <p>Innergy Healthcare shall not be liable for delays or failures caused by circumstances beyond our reasonable control, including changes to immigration law, employer insolvency, pandemic conditions, or government policy changes.</p>

      <PH2>12. Indemnification</PH2>
      <p>You agree to indemnify and hold harmless Innergy Healthcare, its directors, employees, and representatives against all claims, damages, losses, and expenses arising from your breach of these Terms, misrepresentation, violation of applicable laws, or third-party claims arising from your conduct.</p>

      <PH2>13. Termination</PH2>
      <PH3>13.1 Termination by Innergy Healthcare</PH3>
      <PUL>
        <li>Provision of false or misleading information</li>
        <li>Breach of these Terms or our Ethical Recruitment Policy</li>
        <li>Abusive, threatening, or fraudulent behaviour</li>
        <li>Continued engagement that creates legal or reputational risk</li>
      </PUL>
      <PH3>13.2 Termination by You</PH3>
      <p>You may withdraw at any time by providing written notice to <a href="mailto:info@innergyhealthcare.com" className="text-[var(--teal)] hover:underline">info@innergyhealthcare.com</a>.</p>

      <PH2>14. Governing Law and Dispute Resolution</PH2>
      <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
      <PUL>
        <li><strong>Step 1:</strong> Good-faith negotiation within 14 days of written notice.</li>
        <li><strong>Step 2:</strong> Mediation under the rules of the Lagos Court of Arbitration or a mutually agreed mediator.</li>
        <li><strong>Step 3:</strong> Arbitration under Nigerian law.</li>
      </PUL>
      <p>For UK and Irish employer partners, we commit to good-faith compliance with applicable UK and Irish employment and immigration laws and will cooperate with regulatory enquiries from CQC, HIQA, the Home Office, or other relevant authorities.</p>

      <PH2>15. Amendments</PH2>
      <p>We reserve the right to amend these Terms at any time. Material changes will be communicated via email with a minimum of 30 days' notice and via a prominent notice on our website.</p>

      <PH2>16. Severability</PH2>
      <p>If any provision is found to be unenforceable, that provision will be modified to the minimum extent necessary, and the remaining provisions will continue in full force.</p>

      <PH2>17. Entire Agreement</PH2>
      <p>These Terms, together with our Privacy Policy, Ethical Recruitment Policy, Cookie Policy, and any specific Partnership Agreement or MoU, constitute the entire agreement between you and Innergy Healthcare.</p>

      <PH2>18. Contact</PH2>
      <p>
        Innergy Healthcare Talent Management &amp; Outsourcing<br />
        Email: <a href="mailto:info@innergyhealthcare.com" className="text-[var(--teal)] hover:underline">info@innergyhealthcare.com</a><br />
        Address: H16, Alafia Estate, Ibadan, Nigeria<br />
        Phone: 09052052136
      </p>
    </PolicyLayout>
  );
}
