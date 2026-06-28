import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/innergy/image1.png.asset.json";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/employers", label: "For Employers" },
  { to: "/candidates", label: "For Candidates" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-navy text-navy-foreground border-b border-white/10">
      <div className="container-page flex items-center justify-between gap-6 py-3">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img src={logoAsset.url} alt="Innergy Healthcare" className="h-10 w-auto" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-base font-bold tracking-wide text-white">INNERGY HEALTHCARE</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-white/70">
              Talent Management &amp; Outsourcing
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-white/85 hover:text-[var(--gold)] transition-colors"
              activeProps={{ className: "text-[var(--gold)]" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/employers"
            hash="enquiry"
            className="inline-flex items-center justify-center bg-[var(--gold)] text-[var(--navy)] font-semibold text-sm px-4 py-2.5 rounded-sm hover:bg-[var(--gold)]/90 transition-colors"
          >
            Partner With Us
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 -mr-2 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy">
          <nav className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-white/90 hover:text-[var(--gold)]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/employers"
              hash="enquiry"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center bg-[var(--gold)] text-[var(--navy)] font-semibold text-sm px-4 py-3 rounded-sm"
            >
              Partner With Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
