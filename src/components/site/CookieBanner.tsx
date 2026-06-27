import { useEffect, useState } from "react";

const KEY = "innergy_cookie_choice_v1";

export function CookieBanner() {
  const [choice, setChoice] = useState<string | null>("loading");

  useEffect(() => {
    try {
      setChoice(localStorage.getItem(KEY));
    } catch {
      setChoice(null);
    }
  }, []);

  if (choice === "loading" || choice === "accepted" || choice === "declined") return null;

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setChoice(value);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-white shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
      <div className="container-page py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-foreground/85 max-w-3xl">
          We use essential cookies to make this site work, and optional analytics cookies to understand
          how visitors use it. You can accept or decline optional cookies. See our privacy notice for
          details.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => decide("declined")}
            className="px-4 py-2 text-sm font-medium border border-navy/30 text-navy rounded-sm hover:bg-surface"
          >
            Decline
          </button>
          <button
            onClick={() => decide("accepted")}
            className="px-4 py-2 text-sm font-semibold bg-[var(--gold)] text-[var(--navy)] rounded-sm hover:bg-[var(--gold)]/90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
