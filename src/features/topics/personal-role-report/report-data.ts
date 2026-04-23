export interface RoleSection {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface GrowthPhase {
  id: string;
  period: string;
  objective: string;
  focusAreas: string[];
  ownership: string[];
  actions: string[];
  skills?: string[];
  successMarkers: string[];
}

export interface SkillTrack {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
}

export interface BoundaryTrack {
  owner: string;
  responsibilities: string[];
}

export interface HeartSeriesVideo {
  id: string;
  episode: string;
  englishTitle: string;
  originalTitle: string;
  note: string;
  youtubeUrl: string;
  videoId: string;
}

export const reportTitle = "Personal Role Report";

export const reportSubtitle =
  "My Current Position in Zahanat, My Strength as CMO, and My Path Toward CEO-Level Capability";

export const executiveSummary = [
  "I am currently part of Zahanat, an edtech startup focused on educational growth and platform development. Within the startup, I have been given the role of CMO, while the other cofounders are positioned as CEO and CTO.",
  "At this stage, my role should not be treated as a traditional corporate CMO role. In an early-stage startup context, it is a growth, positioning, and market development role tied to outcomes such as acquisition, conversion, trust, and scalable demand generation.",
  "My long-term interest extends beyond marketing toward sales, partnerships, commercial strategy, and leadership. The strongest path is to use the current role as a base: first master growth and market understanding, then expand into commercial ownership, and later develop CEO-level capability.",
];

export const quickMetrics = [
  {
    label: "Current Startup Role",
    value: "CMO",
    context:
      "Practical scope is broader than title: growth, positioning, demand generation, and market development.",
  },
  {
    label: "Best Functional Title Right Now",
    value: "Growth & Market Development Lead",
    context:
      "Better reflects real ownership in an early-stage environment and planned evolution into commercial contribution.",
  },
  {
    label: "Long-Term Direction",
    value: "Commercial Leadership",
    context:
      "Not title-first progression. Build capability through execution across growth, messaging, sales support, and business judgment.",
  },
  {
    label: "Progression Path",
    value: "Growth -> Product Marketing -> Sales/Partnerships -> Commercial Leadership -> CEO Capability",
    context:
      "A staged path that avoids both stagnation in content-only work and premature transition into CEO responsibilities.",
  },
];

export const sections: RoleSection[] = [
  {
    id: "current-role",
    title: "My Current Role in Zahanat",
    paragraphs: [
      "Although the current label is CMO, the working role at this stage should be Growth & Market Development Lead.",
      "Marketing should not be separated from growth. It should produce real outcomes, including stronger visibility, higher signups, improved trust, clearer messaging, better conversion, and greater academy interest.",
    ],
    bullets: [
      "Market positioning",
      "Demand generation",
      "SEO and content strategy",
      "User acquisition",
      "Funnel understanding",
      "Conversion improvement",
      "Product messaging",
      "Trust-building assets",
      "Customer understanding",
      "Support for sales and partnerships",
    ],
  },
  {
    id: "current-strength",
    title: "My Current Strength as CMO",
    paragraphs: [
      "My strength is not being the loudest communicator. My strength is becoming the person who deeply understands how the market sees Zahanat, how value should be communicated, and how messaging drives growth.",
    ],
    bullets: [
      "Positioning strength: who Zahanat is for, what problem it solves, and how it differs from alternatives",
      "Growth strength: user acquisition, visibility, channel development, and early growth systems",
      "Product marketing strength: translating features into user-facing benefits and clarity",
      "Market understanding: pain points, behavior patterns, objections, trust triggers, and conversion logic",
      "Commercial potential: customer language, offer design, persuasion, sales support, and deal structure",
    ],
  },
  {
    id: "role-risks",
    title: "What My Role Should Not Become",
    paragraphs: [
      "One major startup risk is allowing the CMO title to become vague and low-impact. If the role becomes content-only execution, it disconnects from business outcomes and becomes replaceable.",
    ],
    bullets: [
      "Just making posts",
      "Only handling social media or reels",
      "Only visual production",
      "Branding without measurable outcomes",
      "Marketing work detached from growth and revenue goals",
    ],
  },
  {
    id: "long-term-importance",
    title: "Why This Role Matters for My Long-Term Goal",
    paragraphs: [
      "This role should be used as the foundation for commercial leadership capability. Great CEOs are built through market understanding, customer insight, demand generation, communication, negotiation, and strategic decision-making.",
      "The role becomes high-leverage only if approached as a capability-building lane, not a fixed title.",
    ],
    bullets: [
      "Learn the market deeply",
      "Understand customer behavior and objections",
      "Strengthen value proposition and offer clarity",
      "Build business judgment through repeated commercial exposure",
      "Develop decision quality before seeking title transitions",
    ],
  },
  {
    id: "main-weakness",
    title: "My Main Weakness Right Now",
    paragraphs: [
      "My current weakness is not ambition. It is communication maturity in outward-facing business conversations, especially compared with the current CEO.",
      "The right move is not to replace the CEO too early and not to avoid business exposure. The right move is gradual skill expansion through observation, repetition, and structured involvement.",
    ],
    bullets: [
      "Do not force early CEO-level positioning",
      "Do not avoid sales and business learning",
      "Build confidence through real conversations and follow-up execution",
    ],
  },
  {
    id: "best-path-now",
    title: "The Best Path Right Now",
    paragraphs: [
      "Keep owning growth and marketing while intentionally training toward sales, partnerships, and business development.",
      "This path is stronger than staying locked in marketing-only work or jumping too early into CEO-style commercial leadership.",
    ],
    bullets: [
      "Stay strong in growth ownership",
      "Join business and sales conversations",
      "Support offers, proposals, and follow-ups",
      "Build communication quality over time",
      "Gradually take ownership of defined commercial activities",
    ],
  },
];

export const growthPhases: GrowthPhase[] = [
  {
    id: "month-1-2",
    period: "Month 1-2",
    objective:
      "Become highly useful in growth while gaining structured exposure to business conversations.",
    focusAreas: [
      "Define Zahanat positioning",
      "Improve market-facing messaging",
      "Build SEO and content foundations",
      "Understand customer segments",
      "Map funnel from awareness to signup",
      "Attend sales and business meetings as observer-contributor",
    ],
    ownership: [
      "Value proposition",
      "Content direction",
      "SEO basics",
      "Landing page clarity",
      "Trust assets",
      "User-facing communication",
    ],
    actions: [
      "Attend at least 2 business or sales calls per week",
      "Capture objections and buying triggers",
      "Write post-meeting summaries",
      "Help refine Zahanat pitch language with CEO and CTO",
    ],
    successMarkers: [
      "Clearer positioning and messaging",
      "Improved audience understanding",
      "More confident presence in meetings",
      "Stronger ability to explain Zahanat clearly",
    ],
  },
  {
    id: "month-3-4",
    period: "Month 3-4",
    objective:
      "Move from observer to active contributor in business development activity.",
    focusAreas: [
      "Support offers and proposals",
      "Contribute directly in meetings",
      "Own parts of follow-up communication",
      "Improve sales materials",
      "Convert marketing insight into commercial actions",
    ],
    ownership: [
      "Pitch decks and one-pagers",
      "Academy-facing communication",
      "Follow-up templates and proposal support",
      "Partial ownership of warm leads",
    ],
    actions: [
      "Explain product sections clearly in calls",
      "Improve proposal flow and commercial clarity",
      "Support lead progression through written follow-ups",
    ],
    skills: [
      "Sales communication",
      "Offer framing",
      "Objection handling",
      "Business writing",
      "Calm speaking under pressure",
    ],
    successMarkers: [
      "Meaningful contribution in sales and partnership discussions",
      "Higher trust in follow-up and proposal support",
      "Visible movement from marketing support to commercial utility",
    ],
  },
  {
    id: "month-5-6",
    period: "Month 5-6",
    objective:
      "Own a defined commercial slice without creating role conflict.",
    focusAreas: [
      "Warm academy lead follow-up",
      "Partnership exploration",
      "Growth-to-sales handoff",
      "Offer packaging",
      "User conversion systems",
      "Commercial communication assets",
    ],
    ownership: [
      "One defined commercial lane",
      "First-contact or follow-up ownership for selected leads",
      "Support expansion through partnerships or acquisition channels",
    ],
    actions: [
      "Run selected commercial loops end-to-end",
      "Build repeatable communication and follow-up assets",
      "Document learnings and improve conversion playbooks",
    ],
    successMarkers: [
      "Shift from growth-only role to growth + commercial contributor",
      "Trusted participation in business-facing conversations",
      "Established base for future business leadership growth",
    ],
  },
];

export const skillTracks: SkillTrack[] = [
  {
    id: "copywriting",
    title: "Copywriting",
    summary: "Strong writing improves both marketing and sales outcomes.",
    bullets: [
      "Landing page copy",
      "Outreach messages",
      "Offer language",
      "Follow-up messages",
      "CTAs",
      "Trust-building statements",
      "Product explanations",
    ],
  },
  {
    id: "seo",
    title: "SEO",
    summary: "Practical SEO should support conversion, not just traffic.",
    bullets: [
      "Keyword research",
      "Search intent mapping",
      "Content clusters",
      "On-page optimization",
      "Internal linking",
      "Conversion-aligned content planning",
    ],
  },
  {
    id: "product-marketing",
    title: "Product Marketing",
    summary: "Translate product features into user outcomes and trust.",
    bullets: [
      "Feature-to-benefit translation",
      "Outcome-based messaging",
      "Pain-point alignment",
      "Clarity and trust in product communication",
    ],
  },
  {
    id: "funnel-analytics",
    title: "Funnel and Analytics Thinking",
    summary: "Understand what drives conversion and where users drop.",
    bullets: [
      "Traffic quality",
      "Click-through behavior",
      "Signup and activation flow",
      "Drop-off analysis",
      "Retention signals",
      "Real conversion drivers",
    ],
  },
  {
    id: "communication",
    title: "Communication",
    summary: "This is one of the highest-leverage development areas.",
    bullets: [
      "Clarity",
      "Calm speaking",
      "Structured thinking",
      "Better questioning",
      "Active listening",
      "Confidence in business discussions",
    ],
  },
  {
    id: "sales-understanding",
    title: "Sales Understanding",
    summary: "Learn consultative sales flow from discovery to progression.",
    bullets: [
      "Discovery",
      "Objection handling",
      "Offer design",
      "Consultative conversation",
      "Lead progression",
      "Partnership logic",
    ],
  },
  {
    id: "business-judgment",
    title: "Business Judgment",
    summary:
      "Develop stronger prioritization and opportunity-quality decisions.",
    bullets: [
      "Is this opportunity worth pursuing?",
      "What offer makes sense here?",
      "What is the highest-leverage move now?",
      "What should be prioritized versus ignored?",
    ],
  },
];

export const boundaries: BoundaryTrack[] = [
  {
    owner: "CEO",
    responsibilities: [
      "Company direction",
      "Major partnerships",
      "Sales closing",
      "Revenue accountability",
      "Strategic execution",
    ],
  },
  {
    owner: "CTO",
    responsibilities: [
      "Technical architecture",
      "Product development",
      "Engineering decisions",
      "Product stability and delivery",
    ],
  },
  {
    owner: "My Current Ownership",
    responsibilities: [
      "Positioning",
      "Demand generation",
      "Content and SEO",
      "User acquisition",
      "Conversion support",
      "Product messaging",
      "Sales enablement",
      "Market development",
      "Gradual commercial contribution",
    ],
  },
];

export const roleExpansion = [
  "Warm partnerships",
  "Offer design",
  "Proposal support",
  "Selected lead progression",
  "Direct business participation",
];

export const weeklyModel = [
  {
    split: "35%",
    title: "Growth and content systems",
    points: [
      "SEO research",
      "Content planning",
      "Landing page improvement",
      "Message refinement",
    ],
  },
  {
    split: "25%",
    title: "Product marketing",
    points: [
      "Onboarding messaging",
      "Feature communication",
      "Trust assets",
      "User value framing",
    ],
  },
  {
    split: "20%",
    title: "Funnel and analytics",
    points: [
      "Traffic review",
      "User journey analysis",
      "Conversion drop-offs",
      "Performance measurement",
    ],
  },
  {
    split: "20%",
    title: "Business development learning and support",
    points: [
      "Joining calls",
      "Follow-up writing",
      "Proposal support",
      "Partnership observation",
      "Offer improvement",
    ],
  },
];

export const heartSeriesVideos: HeartSeriesVideo[] = [
  {
    id: "mehmed-episode-77",
    episode: "Episode 77",
    englishTitle:
      "Will Sultan Mehmed Listen to Candarli or Aksemseddin?",
    originalTitle:
      "Sultan Mehmed, Candarli'yi Mi, Aksemseddin'i Mi Dinleyecek? - Mehmed: Fetihler Sultani 77. Bolum",
    note:
      "A Mehmed: Sultan of Conquests episode that feels especially close to my heart and worth revisiting right inside this space.",
    youtubeUrl: "https://www.youtube.com/watch?v=pcpqaSKtpxM",
    videoId: "pcpqaSKtpxM",
  },
];

export const finalConclusion = [
  "My current role in Zahanat should not be reduced to simple marketing. It should operate as a growth, market development, and future commercial leadership role.",
  "My present strengths are positioning, growth understanding, messaging, product communication, and market development potential.",
  "My current weakness is business-facing communication maturity compared with the CEO and limited direct sales or partnership execution experience.",
  "The strongest path is to become excellent in growth and market development first, build communication aggressively, enter commercial work gradually, and use this role as a practical stepping stone to stronger leadership.",
  "In short: my current role is the foundation; my long-term direction is commercial leadership; and my path to CEO-level strength begins by mastering growth, market understanding, communication, and business contribution from where I am now.",
];
