export type Article = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readMinutes: number;
  date: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "who-global-code-of-practice-explained",
    title: "The WHO Global Code of Practice: What Ethical International Recruitment Really Means",
    summary:
      "The WHO Global Code sets the bar for fair international health worker recruitment. Here is what employers and candidates need to understand.",
    category: "Ethical Recruitment",
    readMinutes: 6,
    date: "2026-04-18",
    body: [
      {
        paragraphs: [
          "The World Health Organization Global Code of Practice on the International Recruitment of Health Personnel is the international reference point for ethical cross-border hiring. It exists to protect health systems in countries facing workforce shortages while respecting the right of professionals to seek opportunities abroad.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Healthcare is a global labour market. Without shared standards, recruitment can quickly tip into exploitation: candidates paying fees they cannot afford, employers relying on opaque agents, and source-country health systems losing critical talent without compensation or planning.",
          "The Code addresses this by promoting transparency, fairness, and mutuality. For UK and Ireland employers, it directly informs the NHS Code of Practice and the HSE's recruitment guidance.",
        ],
      },
      {
        heading: "Five principles we apply",
        paragraphs: [
          "1. No fees to candidates. Candidates never pay placement, processing, or sponsorship fees.",
          "2. Transparent terms. Contracts, salaries, accommodation, and probation conditions are disclosed in writing before any commitment.",
          "3. Source-country awareness. We recruit selectively and avoid undermining critical-shortage specialties in Nigeria.",
          "4. Mutuality. Every placement is a two-way decision; candidates retain the right to withdraw without penalty at any stage.",
          "5. Post-arrival support. Ethical recruitment continues after the visa is granted — settlement, pastoral care, and progression matter.",
        ],
      },
      {
        heading: "What to look for in a partner",
        paragraphs: [
          "An ethical recruitment partner should be able to evidence its compliance, not just claim it. Ask for the names of regulators it engages with, its candidate-fee policy in writing, and how it documents informed consent.",
        ],
      },
    ],
  },
  {
    slug: "psychometric-assessment-in-healthcare-recruitment",
    title: "Beyond the CV: Why Psychometric Assessment Belongs in Healthcare Recruitment",
    summary:
      "Clinical qualifications tell you what a candidate can do. Psychometric assessment tells you how they will behave under pressure.",
    category: "Methodology",
    readMinutes: 7,
    date: "2026-04-02",
    body: [
      {
        paragraphs: [
          "In healthcare, behaviour is clinical performance. A nurse's empathy, a carer's resilience, a radiographer's communication under pressure — these are not soft skills. They are the operating conditions under which clinical knowledge gets used.",
        ],
      },
      {
        heading: "What we measure",
        paragraphs: [
          "Our assessment evaluates eight dimensions: clinical and care knowledge, English and communication, empathy and compassion, emotional resilience, safeguarding awareness, cultural adaptability, reliability and integrity, and professional conduct.",
          "Each is scored against benchmarks derived from UK and Ireland care settings — not generic personality archetypes.",
        ],
      },
      {
        heading: "Why it matters to employers",
        paragraphs: [
          "Behavioural data reduces the most expensive recruitment risk: the wrong-fit hire who completes onboarding but leaves within six months. By the time a CV reaches an employer's inbox, the most important variables have already been measured.",
        ],
      },
      {
        heading: "Why it matters to candidates",
        paragraphs: [
          "Assessment respects candidates' time. Those whose profile is not yet ready for international deployment learn what to strengthen, rather than being shipped abroad to discover the gap the hard way.",
        ],
      },
    ],
  },
  {
    slug: "nmc-osce-preparation-guide",
    title: "Preparing for the NMC OSCE: A Practical Roadmap for Internationally Educated Nurses",
    summary:
      "The Objective Structured Clinical Examination is the gateway to UK nursing practice. Here is how to prepare with confidence.",
    category: "Candidate Guidance",
    readMinutes: 8,
    date: "2026-03-22",
    body: [
      {
        paragraphs: [
          "The NMC OSCE is the practical component of UK nurse registration. It tests clinical decision-making, communication, and safe practice across simulated scenarios — and it has tripped up many otherwise excellent nurses who underestimate its format.",
        ],
      },
      {
        heading: "Understand the structure",
        paragraphs: [
          "The OSCE consists of stations covering assessment, planning, implementation, and evaluation of care, plus skill and values-based stations. Each station has a strict time window and a specific marking matrix.",
          "Familiarity with the format is half the battle. Practice in conditions that mirror the exam — including the pressure of being observed.",
        ],
      },
      {
        heading: "Train against UK protocols, not memory",
        paragraphs: [
          "Internationally educated nurses often have stronger clinical instincts than the exam credits, because the exam scores against specific UK protocols (ABCDE, SBAR, NEWS2, safeguarding escalation). Anchor your preparation to those frameworks.",
        ],
      },
      {
        heading: "Use structured rehearsal",
        paragraphs: [
          "Solo study has limits. Rehearse with a colleague playing the patient and another scoring against an OSCE matrix. Record yourself. Watch for what your hands and voice do when you are uncertain — examiners do.",
        ],
      },
      {
        heading: "Mind the values stations",
        paragraphs: [
          "Values-based stations assess dignity, consent, and communication. They are not 'easy marks.' Practise them with the same seriousness as clinical skills.",
        ],
      },
    ],
  },
  {
    slug: "what-uk-care-employers-look-for",
    title: "What UK Care Employers Actually Look For in International Hires",
    summary:
      "We asked partner care homes and clinical leads what separates a successful international hire from a difficult one. The answers were not about qualifications.",
    category: "For Employers",
    readMinutes: 5,
    date: "2026-03-08",
    body: [
      {
        paragraphs: [
          "International recruitment is solving a workforce gap that domestic supply cannot. But the cost of getting a hire wrong — sponsorship, induction, settlement support — is significant. Employers who have done this well consistently point to non-CV traits.",
        ],
      },
      {
        heading: "Resilience under unfamiliar pressure",
        paragraphs: [
          "Relocation, culture shock, climate, and an unfamiliar workplace all hit at once. Candidates who have demonstrably handled extended pressure perform better in the first 90 days than those with stronger paper qualifications but thinner resilience.",
        ],
      },
      {
        heading: "Communication that lands",
        paragraphs: [
          "Technical English is not the same as care English. The ability to de-escalate a distressed resident, hand over a deteriorating patient, or document an incident clearly is what determines whether shifts feel safe to the team around them.",
        ],
      },
      {
        heading: "Genuine compassion",
        paragraphs: [
          "Compassion is observable. Employers can tell — usually within two shifts — whether a new carer instinctively turns toward the resident or away. This is the trait our assessment scores hardest, and the one that predicts retention.",
        ],
      },
      {
        heading: "Coachability",
        paragraphs: [
          "Every international hire arrives with habits formed elsewhere. The ones who thrive are the ones who treat UK protocols as something to master rather than something to argue with.",
        ],
      },
    ],
  },
  {
    slug: "safeguarding-fundamentals-uk-care-settings",
    title: "Safeguarding Fundamentals for International Healthcare Professionals in the UK",
    summary:
      "UK safeguarding expectations are non-negotiable and apply from your first shift. Here is the baseline every international healthcare worker needs.",
    category: "Candidate Guidance",
    readMinutes: 6,
    date: "2026-02-20",
    body: [
      {
        paragraphs: [
          "Safeguarding in UK health and social care is not a single policy — it is a culture of vigilance protecting adults at risk and children. International professionals are held to the same standard as UK-trained staff from day one.",
        ],
      },
      {
        heading: "Know the categories of abuse",
        paragraphs: [
          "The Care Act 2014 lists ten categories: physical, sexual, psychological, financial, neglect, discriminatory, organisational, domestic, modern slavery, and self-neglect. You are expected to recognise indicators of all of them.",
        ],
      },
      {
        heading: "Mental Capacity Act and DoLS",
        paragraphs: [
          "Consent and capacity sit at the centre of safe care. You should understand the five principles of the Mental Capacity Act and how Deprivation of Liberty Safeguards apply in residential settings.",
        ],
      },
      {
        heading: "Whistleblowing is protected",
        paragraphs: [
          "Raising a safeguarding concern is not insubordination. The Public Interest Disclosure Act protects workers who report concerns in good faith. Know your employer's escalation route — and use it.",
        ],
      },
      {
        heading: "Document, do not interpret",
        paragraphs: [
          "When recording a safeguarding observation, record what you saw and heard, not what you concluded. Investigations rely on objective notes, not opinions.",
        ],
      },
    ],
  },
  {
    slug: "thriving-first-90-days-uk-care",
    title: "Thriving in Your First 90 Days as an International Care Worker in the UK",
    summary:
      "The first three months shape the next three years. Practical advice for landing well, integrating fast, and protecting your wellbeing.",
    category: "Candidate Guidance",
    readMinutes: 7,
    date: "2026-02-05",
    body: [
      {
        paragraphs: [
          "Arrival is not the finish line — it is the start of an intense adjustment. The professionals who flourish long-term tend to do the same handful of things in their first 90 days.",
        ],
      },
      {
        heading: "Treat induction as if it is graded",
        paragraphs: [
          "Take notes. Ask the questions you think are basic; they almost never are. Your supervisor would rather answer one extra question now than correct an error later.",
        ],
      },
      {
        heading: "Build one workplace ally early",
        paragraphs: [
          "Identify one experienced colleague who is willing to be your reference point for unwritten rules — break timing, handover etiquette, who to ask what. This relationship matters more than any policy document.",
        ],
      },
      {
        heading: "Protect rest aggressively",
        paragraphs: [
          "Shift work plus jet lag plus a new climate is a fatigue trap. Sleep, hydration, and proper meals are not optional self-care; they are the foundation of safe practice.",
        ],
      },
      {
        heading: "Stay connected to home, but not on shift",
        paragraphs: [
          "Family contact buffers homesickness. But on-shift phone use undermines trust. Schedule calls deliberately.",
        ],
      },
      {
        heading: "Engage your support network",
        paragraphs: [
          "Use the pastoral support your employer and Innergy Healthcare provide. The 30, 60, and 90 day check-ins exist because the issues that derail placements are almost always addressable when raised early.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
