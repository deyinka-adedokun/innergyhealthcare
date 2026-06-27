import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout, PH2, PTable } from "@/components/site/PolicyLayout";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Innergy Healthcare" },
      { name: "description", content: "How Innergy Healthcare uses cookies on innergyglobal.com — essential, analytics, preference, security, and marketing cookies, and how to manage them." },
      { property: "og:title", content: "Cookie Policy — Innergy Healthcare" },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <PolicyLayout
      eyebrow="Policy"
      title="Cookie Policy"
      meta={[
        { label: "Last Updated", value: "27 June 2026" },
        { label: "Document Reference", value: "INN-POL-006" },
      ]}
    >
      <PH2>1. What Are Cookies?</PH2>
      <p>Cookies are small text files placed on your device when you visit a website. They help websites function correctly and provide information to website owners about how visitors use their site.</p>

      <PH2>2. How Innergy Healthcare Uses Cookies</PH2>
      <PTable
        headers={["Cookie Type", "Provider", "Purpose", "Duration", "Opt Out"]}
        rows={[
          ["Essential", "Session cookie", "Website login and navigation functionality", "Session", "No (required)"],
          ["Analytics", "Google Analytics", "Measuring traffic and page performance", "26 months", "Yes"],
          ["Preference", "User settings cookie", "Remembering your language or display preferences", "12 months", "Yes"],
          ["Security", "CSRF token", "Protecting against cross-site request forgery", "Session", "No (required)"],
          ["Marketing", "(Future use)", "Displaying relevant content", "90 days", "Yes"],
        ]}
      />

      <PH2>3. Managing Your Cookies</PH2>
      <p>You can manage cookie preferences by:</p>
      <ul className="list-disc pl-6 space-y-1.5 marker:text-[var(--gold)]">
        <li>Using our Cookie Consent banner when you first visit the website</li>
        <li>Adjusting your browser settings to block or delete cookies</li>
        <li>Opting out of Google Analytics via <a href="https://tools.google.com/dlpage/gaoptout" className="text-[var(--teal)] hover:underline">tools.google.com/dlpage/gaoptout</a></li>
      </ul>
      <p>Please note that disabling essential cookies may affect the functionality of our website.</p>

      <PH2>4. Third-Party Cookies</PH2>
      <p>Our website may include content or links from third parties (such as LinkedIn, Google, or YouTube) that set their own cookies. We have no control over these cookies and recommend reviewing the privacy policies of those services.</p>

      <PH2>5. Contact</PH2>
      <p>
        For questions about our use of cookies, email{" "}
        <a href="mailto:privacy@innergyglobal.com" className="text-[var(--teal)] hover:underline">privacy@innergyglobal.com</a>.
      </p>
    </PolicyLayout>
  );
}
