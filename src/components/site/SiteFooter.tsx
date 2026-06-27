import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/innergy/image1.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground mt-16">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logoAsset.url} alt="Innergy Healthcare" className="h-12 w-auto brightness-0 invert" />
            <div className="leading-tight">
              <div className="text-base font-bold tracking-wide text-white">INNERGY HEALTHCARE</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                Talent Management &amp; Outsourcing
              </div>
            </div>
          </div>
          <p className="text-sm text-white/70 max-w-sm">
            A subsidiary of The Psychotesting Enterprise. Innergy Healthcare adheres to the WHO
            Global Code of Practice on the International Recruitment of Health Personnel. We do
            not charge candidates placement fees.
          </p>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-[var(--gold)]">Home</Link></li>
            <li><Link to="/employers" className="hover:text-[var(--gold)]">For Employers</Link></li>
            <li><Link to="/candidates" className="hover:text-[var(--gold)]">For Candidates</Link></li>
            <li><Link to="/about" className="hover:text-[var(--gold)]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--gold)]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Programmes</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/candidates" hash="elderly" className="hover:text-[var(--gold)]">Elderly Care</Link></li>
            <li><Link to="/candidates" hash="nursing" className="hover:text-[var(--gold)]">Nursing</Link></li>
            <li><Link to="/candidates" hash="radiography" className="hover:text-[var(--gold)]">Radiography</Link></li>
            <li><Link to="/candidates" hash="biomedical" className="hover:text-[var(--gold)]">Biomedical Science</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
            Policies &amp; Compliance
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/privacy" className="hover:text-[var(--gold)]">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-[var(--gold)]">Terms of Service</Link></li>
            <li><Link to="/ethical-recruitment" className="hover:text-[var(--gold)]">Ethical Recruitment</Link></li>
            <li><Link to="/modern-slavery" className="hover:text-[var(--gold)]">Modern Slavery Statement</Link></li>
            <li><Link to="/candidate-welfare" className="hover:text-[var(--gold)]">Candidate Welfare</Link></li>
            <li><Link to="/cookies" className="hover:text-[var(--gold)]">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Innergy Healthcare Talent Management &amp; Outsourcing. All rights reserved.</p>
          <p>Committed to ethical, transparent international healthcare recruitment.</p>
        </div>
      </div>
    </footer>
  );
}
