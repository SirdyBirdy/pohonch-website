// ═══════════════════════════════════════════════════════════════
// POHONCH — SITE CONTENT
// ═══════════════════════════════════════════════════════════════
// Edit this file to update all website content.
// After editing, save and push to GitHub — the site will update.
// Do NOT edit index.html unless you know what you're doing.
// ═══════════════════════════════════════════════════════════════

const CONTENT = {

  // ─── SITE META ───────────────────────────────────────────────
  siteName: "pohonch",
  siteTagline: "a space to arrive",
  siteDescription: "A collective of independent therapists. Affirming, accessible, online — at your pace, in languages you actually think in.",

  // ─── INQUIRY FORM ────────────────────────────────────────────
  // Google Form link used for ALL "book", "inquire", "begin" buttons
  inquiryFormUrl: "https://forms.gle/soFwpjkmvZtoqw766",

  // ─── HERO SECTION ────────────────────────────────────────────
  hero: {
    kicker: "पहुँच · to arrive",
    headline: ["growth happens", "in unlikely", "places."],
    headlineEmphasisWord: "unlikely", // which word gets italic green styling
    subtext: "A collective of independent therapists. Affirming, accessible, online — at your pace, in languages you actually think in.",
    primaryCTA: "meet the team",
    secondaryCTA: "how it works",
    tags: [
      "online sessions",
      "₹500 sliding scale",
      "hindi & english"
    ]
  },

  // ─── MARQUEE STRIP ───────────────────────────────────────────
  marqueeItems: [
    "affirming care",
    "sliding scale",
    "online sessions",
    "trauma informed",
    "liberation focused",
    "somatic approaches",
    "expressive arts",
    "person centred",
    "consent forward",
    "real supervision"
  ],

  // ─── PHILOSOPHY SECTION ──────────────────────────────────────
  philosophy: {
    quote: "pohonch — पहुँच — to arrive. not fixing, not performing wellness. just slowly, honestly, arriving.",
    quoteAttribution: "on what we believe",
    body: [
      "We see relationship with nature, gentleness, resilience, playfulness, and growth in unlikely places. Healing isn't about becoming someone new — it's about finding the life that already exists in you.",
      "Help is available whenever you are ready for it."
    ]
  },

  // ─── ABOUT SECTION ───────────────────────────────────────────
  about: {
    label: "who we are",
    heading: "a collective built on care, not scale",
    body: "Pohonch started from a belief that therapy shouldn't be a luxury — and that finding the right person should feel possible, not overwhelming.",
    stats: [
      { number: "6", label: "therapists" },
      { number: "6", label: "languages" },
      { number: "₹500", label: "starting fee" }
    ],
    bodyRight: [
      "Every therapist here brings their full self: their lived experiences, their training, their way of seeing. We don't believe in blank-wall therapy. We believe in human beings meeting human beings.",
      "All our therapists use sliding scale fees where possible, hold supervision, and are committed to affirming, consent-forward practice."
    ],
    pullQuote: "We don't need to be perfect to belong. That's a lovely therapeutic stance.",
    // Founder strip — leave empty strings if not yet ready
    founder: {
      initials: "P",
      name: "[Founder Name]",
      role: "founder · pohonch",
      bio: "A short note from the founder — warm, personal, unhurried. About why Pohonch exists and who they hope finds their way here."
    }
  },

  // ─── HOW IT WORKS ────────────────────────────────────────────
  howItWorks: {
    label: "how it works",
    heading: "three steps, no pressure",
    steps: [
      {
        number: "01",
        title: "read slowly",
        body: "Browse the profiles. Notice who you feel drawn to. This part is allowed to take time — there's no timer, no urgency."
      },
      {
        number: "02",
        title: "a brief consultation",
        body: "Each therapist offers a short call to see if you're a good fit. You're interviewing them too. That's how this should work."
      },
      {
        number: "03",
        title: "begin, at your pace",
        body: "Consent, first session, then the actual work — messy and imperfect and deeply, deeply human."
      }
    ]
  },

  // ─── THERAPISTS ──────────────────────────────────────────────
  // avatarInitials: shown if no image file found in /images/
  // imagePath: file name inside /images/ folder (e.g. "aishwarya-temgire.jpg")
  //            Leave as "" to show initials instead.
  // feeNote: small text below the fee (e.g. "sliding scale")
  // daysNote: small text below days (e.g. "9 slots/week")
  // metaItems: up to 3 items shown at bottom of card (experience, languages, mode)

  therapists: [
    {
      id: "aishwarya-temgire",
      name: "Aishwarya Temgire",
      pronouns: "she/her",
      location: "Pune · online",
      fee: "₹1000–1400",
      feeUnit: "/ session",
      feeNote: "sliding scale · NRI ₹1500–2000",
      days: "Wed · Fri · Sat",
      daysNote: "9 slots/week · 3/day",
      avatarInitials: "AT",
      avatarBg: "#E1F5EE",
      avatarColor: "#085041",
      imagePath: "aishwarya-temgire.jpg",
      tags: ["chronic illness", "trauma & PTSD", "neurodivergence", "immigration anxiety", "anxiety", "grief", "IFS", "somatic"],
      bio: "Raised in the Gulf for 18 years, now based in Pune. She knows what it means to not quite belong anywhere — and to slowly, imperfectly build a sense of self anyway. Aishwarya is a neurodivergent therapist and SA survivor who brings IFS parts-based work, expressive arts, and somatic approaches. She practices from a liberation-focused lens and believes healing happens in relationship — with ourselves, with others, with our bodies.",
      metaItems: ["~1000 hrs counselling", "English · Hindi · Marathi", "online only"],
      active: true
    },
    {
      id: "juhi",
      name: "Juhi",
      pronouns: "she/her",
      location: "Mumbai · online",
      fee: "₹500–1600",
      feeUnit: "/ session",
      feeNote: "40% concessional slots",
      days: "Mon · Wed · Thu · Fri · Sun",
      daysNote: "15–20 slots/week",
      avatarInitials: "J",
      avatarBg: "#FBEAF0",
      avatarColor: "#72243E",
      imagePath: "juhi.jpg",
      tags: ["identity & self", "relationships", "trauma", "emotional burnout", "existential", "attachment", "schema therapy"],
      bio: "MSc in Clinical Psychology from Christ University. Juhi identifies with the wounded healer — what she's carried personally doesn't sit separate from her work, it sharpens it. She draws from Transactional Analysis, Schema Therapy, Gestalt, ACT and Somatic approaches. Her therapy is like a road trip: destination agreed on, but detours are welcome. 3 in 8 slots are concessional — intentionally.",
      metaItems: ["15–20 slots/week", "English · Hindi · Kutchi", "online only"],
      active: true
    },
    {
      id: "preksha-porwal",
      name: "Preksha Porwal",
      pronouns: "she/her",
      location: "Pune · online",
      fee: "₹1500",
      feeUnit: "/ 50 min",
      feeNote: "referrals if unaffordable",
      days: "Mon – Fri",
      daysNote: "max 2 sessions/day",
      avatarInitials: "PP",
      avatarBg: "#EAF3DE",
      avatarColor: "#27500A",
      imagePath: "preksha-porwal.jpg",
      tags: ["grief & loss", "identity", "neurodivergence", "family dynamics", "expressive arts", "children & adolescents"],
      bio: "Counselling psychologist and Expressive Arts Facilitator, based in Pune. Works with children, adolescents, and young adults across schools, NGOs, and private practice. Integrative — person-centred and psychodynamic at the core, with art, movement, play and writing woven in. She'll probably invite creative work at some point. Always an invitation. Never an expectation.",
      metaItems: ["MSc Counselling Psychology 2023", "English · Hindi", "Google Meet"],
      active: true
    },
    {
      id: "shraddha-litoriya",
      name: "Shraddha Litoriya",
      pronouns: "she/her",
      location: "Madhya Pradesh · online",
      fee: "₹1200–1600",
      feeUnit: "/ session",
      feeNote: "45 or 60 min",
      days: "5 days a week",
      daysNote: "15 slots/week",
      avatarInitials: "SL",
      avatarBg: "#E1F5EE",
      avatarColor: "#0F6E56",
      imagePath: "shraddha-litoriya.jpg",
      tags: ["CPTSD", "chronic pain", "narcissistic abuse", "somatic", "therapeutic movement", "neurodivergent HSP"],
      bio: "Neurodivergent, Highly Sensitive Person, and deeply anti-discriminatory. Shraddha lives with CPTSD, fibromyalgia, and migraines — these experiences have made her a more grounded therapist, not despite them but through them. Eclectic, trauma-informed, drawing from narrative, somatic, movement-based, and dynamic frameworks. Also offers short-term therapeutic movement sessions for chronic pain.",
      metaItems: ["3 years experience", "Hindi · English", "Google Meet"],
      active: true
    },
    {
      id: "vipasha",
      name: "Vipasha",
      pronouns: "she/they",
      location: "Mumbai · online",
      fee: "₹800–1000",
      feeUnit: "/ session",
      feeNote: "₹800 for students & low income",
      days: "Mon · Tue · Wed",
      daysNote: "3–4 sessions/day",
      avatarInitials: "V",
      avatarBg: "#EEEDFE",
      avatarColor: "#3C3489",
      imagePath: "vipasha.jpg",
      tags: ["feminist therapy", "REBT", "narrative", "identity", "inclusive practice", "humanistic"],
      bio: "MSc in Applied Clinical Psychology, also counselling psychologist at a college. Takes an eclectic feminist approach rooted in inclusion — deep commitment to consent and confidentiality at every step. Cares about making care genuinely accessible: 45-minute sessions, sliding scale, honest about what she can and can't do. Loves science, music, nature, art, furniture, and animals.",
      metaItems: ["200+ hours", "English · Gujarati · Hindi", "Google Meet · 45 min"],
      active: true
    },
    {
      id: "pravalika-buddha",
      name: "Pravalika Buddha",
      pronouns: "she/they",
      location: "Bangalore · online & offline",
      fee: "₹900–1500",
      feeUnit: "/ session",
      feeNote: "sliding scale for students & trans folx",
      days: "Wed · Thu · Fri · Sat · Sun",
      daysNote: "23 slots/week",
      avatarInitials: "PB",
      avatarBg: "#E8F4D9",
      avatarColor: "#2A5C0A",
      imagePath: "pravalika-buddha.jpg",
      tags: ["cPTSD", "queer folx", "neurodivergent", "grief", "dissociation", "anxiety", "decolonised lens"],
      bio: "Anti-capitalist, neurodivergent, queer therapist from an OBC background. Pravalika identifies as Anti-caste and is a survivor of abuse with lived experience of CPTSD and chronic depression. MSc from IIPR. Her approach is relational and non-directive — she relies on forming deep relationships to create corrective experiences. She brings community, art and plants into her therapy room.",
      metaItems: ["400+ hrs · 20 hrs group therapy", "Telugu · Hindi · English", "Online & offline · HSR Bangalore"],
      active: true
    }
  ],

  // ─── FOOTER ──────────────────────────────────────────────────
  footer: {
    navLinks: [
      { label: "about pohonch", href: "#about" },
      { label: "our therapists", href: "#therapists" },
      { label: "how it works", href: "#how" }
    ],
    connectLinks: [
      { label: "instagram", href: "#" },         // ← replace with real Instagram URL
      { label: "get in touch", href: "https://forms.gle/soFwpjkmvZtoqw766" },
      { label: "privacy policy", href: "#" }     // ← replace with real privacy policy URL
    ],
    crisisLine1: "iCall 9152987821",
    crisisLine2: "Vandrevala 1860-2662-345",
    copyrightYear: "2025"
  }

};

// ─── DO NOT EDIT BELOW THIS LINE ──────────────────────────────
if (typeof module !== 'undefined') module.exports = CONTENT;
