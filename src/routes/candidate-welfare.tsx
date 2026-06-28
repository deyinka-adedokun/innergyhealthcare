import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout, PH2, PH3, PUL } from "@/components/site/PolicyLayout";

export const Route = createFileRoute("/candidate-welfare")({
  head: () => ({
    meta: [
      { title: "Candidate Welfare Statement — Innergy Healthcare" },
      { name: "description", content: "What Innergy Healthcare commits to every candidate — honesty, no recruitment fees, the right to choose, data protection, and 90-day post-arrival support." },
      { property: "og:title", content: "Candidate Welfare Statement — Innergy Healthcare" },
      { property: "og:url", content: "/candidate-welfare" },
    ],
    links: [{ rel: "canonical", href: "/candidate-welfare" }],
  }),
  component: WelfarePage,
});

function WelfarePage() {
  return (
    <PolicyLayout
      eyebrow="Policy"
      title="Candidate Welfare & Compliance Statement"
      meta={[
        { label: "Document Reference", value: "INN-POL-005" },
        { label: "Review Cycle", value: "Annual" },
      ]}
    >
      <PH2>Our Commitment to Every Candidate</PH2>
      <p>
        Innergy Healthcare exists to create ethical, structured, and transparent international career pathways for
        qualified healthcare professionals. Every person who engages with us deserves to be treated with dignity,
        given honest information, and supported throughout their journey.
      </p>

      <PH2>What We Promise You</PH2>
      <PH3>1. We Will Never Charge You for Finding You a Job</PH3>
      <p>
        We do not charge placement fees, referral fees, or recruitment commissions to candidates. If anyone
        representing themselves as Innergy Healthcare asks you to pay money in exchange for a job offer, please
        report this to us immediately at{" "}
        <a href="mailto:compliance@innergyhealthcare.com" className="text-[var(--teal)] hover:underline">compliance@innergyhealthcare.com</a>.
      </p>

      <PH3>2. We Will Be Honest With You at All Times</PH3>
      <p>We will not exaggerate your chances of success or make promises we cannot keep. We will give you a realistic, honest picture of:</p>
      <PUL>
        <li>What the job involves — including night shifts, weekend work, and physical demands</li>
        <li>What the salary will be and what deductions to expect</li>
        <li>What the cost of living is like in the UK or Ireland</li>
        <li>What the visa conditions are, including rules about bringing family members</li>
        <li>How long the process realistically takes</li>
        <li>What qualifications or scores you will need to achieve</li>
      </PUL>

      <PH3>3. We Will Respect Your Right to Choose</PH3>
      <p>No one at Innergy Healthcare will pressure you into accepting an opportunity. You have the right to:</p>
      <PUL>
        <li>Take time to consider any offer</li>
        <li>Ask as many questions as you need</li>
        <li>Decline an employer without explanation</li>
        <li>Withdraw from our programme at any stage without penalty</li>
      </PUL>

      <PH3>4. We Will Protect Your Personal Data</PH3>
      <p>Your personal and professional information is treated with strict confidentiality. We will never share your profile with any employer without your explicit, written consent for that specific opportunity.</p>

      <PH3>5. We Will Support You Beyond Placement</PH3>
      <p>Our relationship does not end when you receive a job offer. We provide 90 days of post-arrival support to help you settle into your new country, role, and community.</p>

      <PH2>What We Ask of You</PH2>
      <PH3>1. Be Honest</PH3>
      <p>Provide accurate information about your qualifications, experience, and personal circumstances. Misrepresentation puts you, Innergy Healthcare, and your future employer at serious risk.</p>
      <PH3>2. Be Committed</PH3>
      <p>International career preparation requires time, effort, and genuine commitment. If you are in our programme, you are expected to complete required training, sit English tests, and prepare your documents diligently.</p>
      <PH3>3. Be Realistic</PH3>
      <p>We understand the appeal of international opportunities. But please approach this process with realistic expectations. Not every candidate will be placed. Not every application will succeed. We will be honest with you, and we ask for the same in return.</p>

      <PH2>Important Disclaimer</PH2>
      <p><strong>Participation in any Innergy Healthcare programme does not guarantee:</strong></p>
      <PUL>
        <li>A job offer from any employer</li>
        <li>A successful visa application</li>
        <li>Approval by NMC, HCPC, CORU, or any professional registration body</li>
        <li>Approval to bring dependants to the destination country</li>
        <li>Any specific salary level or working arrangement</li>
      </PUL>
      <p>All outcomes are subject to employer decisions, regulatory assessments, and government immigration decisions over which Innergy Healthcare has no control.</p>

      <PH2>Safeguarding and Reporting</PH2>
      <p>If at any point during your engagement with Innergy Healthcare you feel pressured or coerced, misled or deceived, exploited or treated unfairly, or unsafe or vulnerable — please contact us immediately:</p>
      <p>
        <strong>Candidate Welfare Officer</strong><br />
        Email: <a href="mailto:welfare@innergyhealthcare.com" className="text-[var(--teal)] hover:underline">welfare@innergyhealthcare.com</a>
      </p>
      <p>All reports are handled confidentially, and you will not face any negative consequences for raising a genuine concern.</p>
    </PolicyLayout>
  );
}
