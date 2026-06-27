import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/innergy/image1.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground mt-16">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logoAsset.url} alt="Innergy" className="h-12 w-auto" />
            <div className="leading-tight">
              <div className="text-base font-bold tracking-wide text-white">INNERGY</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                Talent Management &amp; Outsourcing
              </div>
            </div>
          </div>
          <p className="text-sm text-white/70">A Psychotesting Enterprise Company</p>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
            Healthcare Talent Solutions
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/employers" className="hover:text-[var(--gold)]">For Employers</Link></li>
            <li><Link to="/candidates" className="hover:text-[var(--gold)]">For Candidates</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Programmes</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Elderly Care</li>
            <li>Nursing</li>
            <li>Radiography</li>
            <li>Biomedical Science</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-[var(--gold)]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--gold)]">Contact</Link></li>
            <li><a href="mailto:info@innergyhealthcare.com" className="hover:text-[var(--gold)]">Email</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Innergy. All rights reserved.</p>
          <p>Innergy is committed to ethical international healthcare recruitment.</p>
        </div>
      </div>
    </footer>
  );
}
