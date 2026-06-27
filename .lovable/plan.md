## Source of truth
Building strictly from `Innergy_Design_Prompt.docx`. All page copy, section order, headings, CTAs, tables, form fields, footer text, contact emails, and tone (UK English, no hype, no exclamation marks) will be lifted verbatim from the brief. The 12 images embedded in the doc (gold phoenix logo + 11 healthcare photos) will be extracted and used as the site's photography — no AI-generated stand-ins, no stock handshakes, no passport/airplane imagery.

## Brand system (locked exactly to the brief)
Tokens defined in `src/styles.css` via `@theme inline`:
- Innergy Gold `#D4A843` — CTAs, accents
- NHS-Adjacent Navy `#003057` — headers, nav, footer, authority text
- White `#FFFFFF` — main background
- Soft Grey `#F5F6FA` — alternating sections
- Dark Text `#1A1A2E` — body
- Trust Teal `#007C7A` — secondary buttons, success, candidate banner
- Warm Grey `#6B7280` — captions
- Soft Gold Tint `#FBF7F0` — hero/testimonial backgrounds
- Alert Red `#B91C1C` — critical notices only

Typography: Inter 400 body / 600–700 headings, loaded via `<link>` in `__root.tsx` head. Small radii, generous whitespace, conservative spacing — UK institutional feel.

## Image handling
Extract all 12 images from the .docx and upload via `lovable-assets` (CDN pointers in `src/assets/*.asset.json`):
- `image1.png` → gold phoenix logo (used in header + footer, plus a white-tinted variant for navy backgrounds via CSS filter)
- `image2`–`image12.jpeg` → care/healthcare photos distributed across hero, programme cards, employer/candidate/about pages

## Routes (TanStack Start, file-based)
```
src/routes/
  __root.tsx       -> Header + <Outlet/> + Footer + CookieBanner
  index.tsx        -> Homepage
  employers.tsx    -> For Employers
  candidates.tsx   -> For Candidates
  about.tsx        -> About
  contact.tsx      -> Contact
```
Each route gets its own `head()`: unique title, description, og:title, og:description; og:image only on leaf pages with a hero photo.

### Homepage (`/`) — exact sections from brief
1. Nav: logo + Healthcare Talent Solutions / For Employers / For Candidates / About / Resources / Contact + gold "Partner With Us" CTA
2. Hero: gold uppercase pre-heading "ETHICAL INTERNATIONAL HEALTHCARE RECRUITMENT", navy H1 "Quality Care Professionals. Properly Assessed. Professionally Prepared.", brief subhead, two CTAs ("Hire Care Professionals" gold, "Explore Career Pathways" navy outline)
3. Trust bar strip (4 items, pipe-separated as in brief)
4. "Structured Healthcare Talent Solutions" + 3 cards (Identify / Assess / Connect) — copy verbatim
5. "Healthcare Talent Programmes" — 4 cards with status badges (Elderly Care = Active, others = In Development) — copy verbatim
6. "Why Employers Choose Innergy" — 4 value points with icons (copy verbatim)
7. Stats strip with placeholder values `[XX]` exactly as the brief instructs
8. Split CTA: navy/white For Employers + gold/navy For Candidates
9. Footer with exact columns from brief

### For Employers (`/employers`)
Hero with pre-heading + H1 "Solve Your Care Staffing Challenge With Properly Assessed Professionals" + CTA → "The Workforce Reality" challenge section with bullet list → 7-step process timeline (vertical on mobile, horizontal stepper ≥md) → "What We Assess" 8-row assessment grid table → "Candidate Categories" table + Registered Nurses note → "Our Ethical Commitment" bullet list → enquiry form with the exact fields listed in the brief.

### For Candidates (`/candidates`)
Hero (pre-heading + H1 "Build Your International Healthcare Career — With Proper Guidance" + subhead) → teal disclaimer banner with the ⚠️ copy verbatim → 4 pathway cards (Elderly Care Active, others In Development) with For/Destination/Timeline/English/Registration/Status fields → "How Innergy Supports Your Journey" 8-item list → "Candidate Requirements" 8-item list → honest "Please Understand" section → application form with exact fields incl. CV upload + the italic disclaimer below.

### About (`/about`)
Hero → "From Assessment to Global Opportunity" story (Psychotesting Enterprise origin) → mission blockquote → 4 values (Integrity, Rigour, Respect, Accountability) → "Innergy Assessment Methodology" rendered as the requested hexagonal/circular diagram of the 8 dimensions (SVG, navy + gold) → 3 leadership placeholder cards with the brief's `*Add real photos and bios when ready.*` note.

### Contact (`/contact`)
H1 "Get in Touch" + intro → 3 contact cards with the exact emails (partnerships@ / careers@ / info@innergyhealthcare.com) → contact form (Name, Email, Subject dropdown with the exact options, Message) → "[Your Address]" placeholder block as written.

## Shared components
`Header` (navy bar, phoenix logo lockup with "Talent Management & Outsourcing" tagline, nav, gold CTA, mobile drawer), `Footer` (navy, columns per brief, ethical-recruitment line), `CookieBanner` (GDPR accept/decline, localStorage), `TrustBar`, `SectionHeading`, `CTAButton` (gold solid / navy outline / navy solid / gold-on-navy), `ProgrammeCard`, `PillarCard`, `ProcessStep`, `ValueCard`, `DisclaimerBanner`, `MethodologyHex` (SVG), `Form` primitives with `react-hook-form` + `zod`.

## Forms
Client-side validation only (no backend yet). Required GDPR consent checkbox on every form. CV upload restricted to PDF/DOC/DOCX ≤5MB. Success state shown inline; no real submission until Lovable Cloud is added later (flagged as out of scope).

## Technical
- TanStack Start file-based routes; per-route `head()` with unique meta
- Tailwind v4 tokens only in `src/styles.css`; no JS config; Inter via `<link>` in root head
- Semantic tokens everywhere — no hardcoded colors in components
- Mobile-first; header collapses to drawer under `md`
- Subtle scroll-fade only; no flashy motion
- Cookie banner state persisted in localStorage
- All copy in UK English exactly as written in the brief

## Out of scope (call out if wanted later)
- Real form submission backend (Lovable Cloud + Resend)
- Resources/blog page (linked in nav per brief but no content provided — will route to a simple "Coming soon" placeholder or be left out; recommend the placeholder)
- Real leadership names/photos/bios
- Live statistics (placeholders `[XX]` per brief instruction)
- Privacy Policy / Terms pages (footer links will route to placeholder pages with a notice)

Approve and I'll build it end-to-end.