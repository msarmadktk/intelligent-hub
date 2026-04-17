export interface ReportTable {
  headers: string[];
  rows: string[][];
}

export interface ReportSection {
  id: string;
  title: string;
  intro?: string[];
  table?: ReportTable;
  body?: string[];
}

export const reportTitle = "Global and AI market in 2026";

export const executiveSummary = [
  "The clearest public 2025 revenue anchor for the worldwide AI market is US$244.22 billion, with the same publicly reproduced dataset putting Europe at US$58.10 billion in 2025 and the worldwide market at roughly US$1.01 trillion by 2031. For Pakistan, the best recent public estimates diverge: a late-2025 local ecosystem note citing Statista put the country AI market at US$949.17 million in 2025 and US$3.23 billion by 2030, while a 2025 United Nations Development Programme-linked Pakistan note cited US$861 million for 2025 from an older Statista extract. In this report I therefore use US$0.95 billion as the base case, while explicitly treating US$0.86 to US$0.95 billion as the defensible public range. Under my scenario model, the global AI market reaches roughly US$660 billion, US$827 billion, or US$979 billion in 2030 under conservative, base, and optimistic cases; Pakistan reaches roughly US$2.36 billion, US$3.23 billion, or US$4.10 billion respectively.",
  "The labour-market picture is not a one-line AI destroys jobs story. The best current official global planning benchmark remains the World Economic Forum Future of Jobs Report 2025, which projects 170 million jobs created and 92 million displaced globally over 2025 to 2030 from structural labour-market transformation, for a net gain of 78 million; AI and information processing is the most transformative technology trend in the survey, with 86% of employers expecting it to reshape their business. For Pakistan, the official 2024 to 2025 labour survey reports a labour force of 83.1 million, employment of 77.2 million, and unemployment of 7.1% under current standards, while the newly approved national AI policy sets annual human-capital targets of 200,000 people trained, 3,000 scholarships, and 20,000 paid internships.",
  "Capital is flowing, but it is concentrating. Public Crunchbase data show AI funding reached US$211 billion in 2025, up 85% year on year from US$114 billion in 2024, and Q1 2026 alone saw US$300 billion invested across 6,000 startups globally. Yet the market is increasingly top-heavy: foundational AI startups raised US$178 billion across just 24 deals by 31 March 2026. In Pakistan, funding did recover in 2025, but from a low base: depending on definition, local reports show US$74.23 million in total reported startup funding across 16 deals with 11 disclosed deals, or US$36.6 million in disclosed equity capital across 14 transactions. Meanwhile Pakistan IT and ITeS exports hit a record US$3.8 billion in FY2025, and the central bank eased exporter and freelancer procedures in April 2026, which materially improves the monetisation environment for AI-linked services.",
];

export const quickMetrics = [
  {
    label: "Global AI revenue anchor (2025)",
    value: "US$244.22bn",
    context:
      "Primary public benchmark used for scenario projections in this report.",
  },
  {
    label: "Pakistan AI base case (2025)",
    value: "US$0.95bn",
    context:
      "Defensible public range treated as US$0.86bn to US$0.95bn in the methodology.",
  },
  {
    label: "Global funding in 2025",
    value: "US$211bn",
    context: "Public Crunchbase total with strong concentration in very large deals.",
  },
  {
    label: "Pakistan IT and ITeS exports (FY2025)",
    value: "US$3.8bn",
    context:
      "Formal export growth plus SBP easing in April 2026 improves monetisation conditions.",
  },
];

export const sections: ReportSection[] = [
  {
    id: "market-size-growth",
    title: "Market size and growth",
    intro: [
      "A rigorous reading of the market requires separating revenue, vendor spending, and venture funding. The most useful publicly accessible 2025 revenue anchors I found are the Statista-based market figures reproduced in 2025 to 2026 public sources. These are more suitable for a market-size report than venture totals, which measure financing, not customer demand. Pakistan is the least cleanly measured case because public sources expose several Statista-derived figures with different taxonomies or vintages; that is why I present a range and then take a base-case midpoint toward the upper, newer 2025 estimate.",
    ],
    table: {
      headers: [
        "Region",
        "2025 AI revenue",
        "Base-case forward growth metric",
        "Share of 2025 global market",
      ],
      rows: [
        ["United States", "US$73.98bn", "26.95% CAGR to 2031", "30.3%"],
        [
          "European Union*",
          "US$58.10bn",
          "26.27% CAGR to 2031",
          "23.8%",
        ],
        ["China", "US$45.45bn", "27.6% base-case CAGR**", "18.6%"],
        ["India", "US$7.84bn", "27.6% base-case CAGR**", "3.2%"],
        [
          "Pakistan",
          "US$0.95bn base case***",
          "27.75% CAGR to 2030",
          "0.39%",
        ],
      ],
    },
    body: [
      "* Europe figure publicly reproduced from a Statista source; used here as the best available public proxy for the EU-scale market.",
      "** For China and India, publicly accessible 2025 revenue points were available, but not a clean public country-specific forward CAGR from the same source family; I therefore apply the global base-case revenue CAGR for comparability.",
      "*** Public Pakistan estimates diverge between roughly US$0.861bn and US$0.949bn for 2025; I use US$0.949bn as the base case and show the lower figure in the methodology section as a downside bound.",
      "The table says two things very clearly. First, the 2025 market is still dominated by the U.S., Europe and China, which together account for roughly 72.7% of the global total on this revenue definition. Second, Pakistan is still tiny in absolute market revenue, but its growth rate is high enough that small base effects matter: if the country merely sustains the local-VC-reported 27.75% forward CAGR, it more than triples by 2030.",
      "Because accessible 2025 to 2026 public sources do not consistently expose a like-for-like 2020 base for the same market definition, I reconstruct 2020 to 2025 historical growth rather than pretend that a single official number exists. My method is: use the 2025 revenue anchor as fixed; preserve the forward growth profile implied by the source family; and back-cast a 2020 base that is consistent with the visible post-2023 acceleration in public reproductions of the same market dataset. On that basis, I estimate a global 2020 to 2025 CAGR of roughly 24%, 29%, or 34% under conservative, base, and optimistic reconstructions, implying a 2020 revenue base between about US$56.5 billion and US$83.3 billion, with US$68.4 billion as the base case. For Pakistan, the same back-cast logic yields a 2020 to 2025 CAGR of roughly 20%, 24%, or 28%, implying a 2020 base between about US$0.276 billion and US$0.381 billion, with US$0.324 billion as the base case. These are modelled estimates, not directly published official figures.",
      "2025 revenue anchor",
      "Conservative case",
      "Base case",
      "Optimistic case",
      "Global 2030: US$660bn",
      "Global 2030: US$827bn",
      "Global 2030: US$979bn",
      "Pakistan 2030: US$2.36bn",
      "Pakistan 2030: US$3.23bn",
      "Pakistan 2030: US$4.10bn",
      "Show code",
    ],
  },
  {
    id: "scenario-table",
    title: "Scenario model to 2030",
    table: {
      headers: [
        "Scenario",
        "Global CAGR 2025 to 2030",
        "Global market 2030",
        "Pakistan CAGR 2025 to 2030",
        "Pakistan market 2030",
        "Main assumption set",
      ],
      rows: [
        [
          "Conservative",
          "22.0%",
          "US$660bn",
          "20.0%",
          "US$2.36bn",
          "Slower enterprise conversion, tighter capital markets, patchy compute access",
        ],
        [
          "Base",
          "27.6%",
          "US$827bn",
          "27.75%",
          "US$3.23bn",
          "Current public growth path broadly holds",
        ],
        [
          "Optimistic",
          "32.0%",
          "US$979bn",
          "34.0%",
          "US$4.10bn",
          "Faster inference cost declines, stronger enterprise rollout, looser capital",
        ],
      ],
    },
    body: [
      "The base case simply preserves the publicly visible forward path in the market sources; the conservative and optimistic cases widen the band around adoption speed, model-cost decline and infrastructure availability. That keeps the scenario logic explicit rather than mystical.",
    ],
  },
  {
    id: "job-market-impact",
    title: "Job market impact",
    intro: [
      "The official global benchmark is sobering but not catastrophic. The International Labour Organization 2025 update on generative AI stresses that exposure should not be confused with immediate job loss, while the World Economic Forum projects a five-year labour-market reshuffle equal to 22% of today jobs, including 170 million new jobs and 92 million displaced jobs by 2030. If one annualises that five-year global transformation mechanically, the implied run-rate is about 34.0 million jobs created and 18.4 million displaced per year, with a net annual gain of about 15.6 million. That is not a forecast for calendar-year 2025 hiring or layoffs; it is the implied yearly pace from the official five-year employer survey.",
      "For Pakistan, there is no official national AI jobs created versus displaced in 2025 number. A defensible workaround is to model the AI-addressable workforce rather than the entire economy. Pakistan official labour survey shows 79.7 million employed under the older comparable standard, of whom 51.7 million are in non-agriculture; it also shows that the non-agriculture economy now makes up 64.9% of employment, with informality still dominating. If I apply the WEF five-year structural transformation shares only to Pakistan non-agricultural employment base, the implied AI-relevant annual run-rate is roughly 1.45 million jobs created and 0.83 million displaced, for a net gain of around 0.62 million jobs per year. This is a model, not an official forecast, but it is more realistic than applying rich-country AI disruption rates to the whole Pakistani labour force, including subsistence agriculture.",
      "Pakistan policy response recognises the bottleneck correctly: skills first. The national AI policy annual target of 200,000 people trained, plus 20,000 paid internships, is material. But it also reveals the scale of the gap. Even if every trained person were job-ready, that annual pipeline is still much smaller than the modelled AI-affected non-agricultural workforce. The risk is therefore not simply displacement; it is a mismatch between where work is moving and where skills are accumulating.",
    ],
    table: {
      headers: [
        "Role",
        "Compensation benchmark available publicly",
        "Source type",
        "Read-through",
      ],
      rows: [
        [
          "Machine learning engineer",
          "US$129k to US$203k (25th to 75th percentile, U.S.)",
          "Glassdoor, Apr 2026",
          "Mature, premium technical role",
        ],
        [
          "AI prompt engineer",
          "US$115.7k to US$172.0k (25th to 75th percentile, U.S.)",
          "Glassdoor, Apr 2026",
          "Market has stabilised, but still premium",
        ],
        [
          "Data scientist",
          "US$122.5k to US$198.7k (25th to 75th percentile, U.S.)",
          "Glassdoor, Apr 2026",
          "Broadest analytical role, large demand base",
        ],
        [
          "MLOps engineer",
          "US$132.3k to US$199.4k (25th to 75th percentile, U.S.)",
          "Glassdoor, Apr 2026",
          "Deployment and reliability are highly valued",
        ],
        [
          "AI product manager",
          "US$25 to US$45 per hour (freelance benchmark)",
          "Upwork, 2026",
          "Commercial orchestration matters, but public salaried AI-specific data are sparse",
        ],
      ],
    },
    body: [
      "These numbers are not directly portable to Pakistan payrolls. Local salaried data for Pakistan AI roles remain thin, noisy and in some public sources internally inconsistent, which is why the more actionable Pakistan compensation signal currently comes from remote freelance markets rather than domestic salary boards. Still, the ordering is clear: deployment-heavy roles such as ML engineering and MLOps sit at or near the top of the pay stack, while standalone prompt work is valuable but less structurally defensible than shipping, evaluation and integration.",
      "Demand trends from 2024 to 2026 all point in the same direction. WEF still ranks AI and machine learning specialists among the fastest-growing jobs in percentage terms. LinkedIn reports that 70% of the skills used in most jobs will change by 2030, that members have increased the rate at which they add new skills by 140% since 2022, and that businesses adopting generative AI already report measurable commercial upside, with 51% of adopters saying revenue rose 10% or more. LinkedIn 2026 Jobs on the Rise coverage also shows continued momentum for AI engineers, AI consultants and data annotators, while LinkedIn skills-based hiring work suggests firms can expand their AI talent pool by 7.4x to 8.2x by hiring on skills rather than pedigree.",
    ],
  },
  {
    id: "freelancing-economy",
    title: "Freelancing economy",
    intro: [
      "The Pakistan freelancing story is economically important, but platform measurement is weak. Neither Upwork nor Fiverr publicly discloses a clean 2025 to 2026 Pakistan-by-category headcount for AI freelancers, so an exact official count of AI-related Pakistani freelancers on either platform is not publicly verifiable from platform disclosures. What is publicly visible is still useful: Upwork has an explicit Pakistan AI hiring page; Pakistan AI talent on that page carries a 4.8/5 rating based on 359,707 client reviews; and the platform exposes Pakistan-specific submarkets for machine learning, data science, AI engineers and related skills across cities such as Islamabad, Lahore and Karachi. Fiverr publicly exposes AI-specific service categories such as AI chatbot development and AI websites and software, plus Pakistan-based sellers in those categories.",
    ],
    table: {
      headers: [
        "Platform",
        "What is publicly verifiable for Pakistan",
        "Pakistan-specific price signal",
        "Category or demand signal",
        "Bottom line",
      ],
      rows: [
        [
          "Upwork",
          "Dedicated Pakistan AI talent page; 4.8/5 based on 359,707 reviews; city and skill subpages for ML, AI engineering, data science",
          "Featured Pakistan AI profiles visible at US$5/hr and US$10/hr on the landing page; platform-wide benchmarks show ML engineers US$50 to 200/hr, prompt engineers US$35 to 60/hr, data scientists US$35 to 250/hr, product managers US$25 to 45/hr",
          "Upwork explicitly lists AI app development, chatbot development, machine learning and OpenAI jobs as active work categories",
          "Strong supply base, but huge price dispersion: entry-level Pakistan profiles compete on cost, specialists win on value",
        ],
        [
          "Fiverr",
          "AI chatbot development category; Pakistan sellers visible in AI development and AI websites or software",
          "Public gig example from a Pakistan-based AI profile shows US$200 to 400 package pricing",
          "Fiverr AI categories visibly skew to chatbots, AI websites and software and automation-heavy builds",
          "Better for productised offers than for deep custom engineering",
        ],
      ],
    },
    body: [
      "The rate distribution is the core economic insight. On Upwork, the client-facing benchmark for advanced AI work is already far above the low-dollar rates shown by early-career Pakistan profiles. That spread means Pakistan-based AI freelancers can still undercut Western rates dramatically, but only specialists in RAG, evaluation, data pipelines, MLOps, domain-specific copilots and workflow automation are likely to escape price compression. Standalone prompt engineering and generic chatbot gigs are where margin erosion is most likely.",
      "The external environment for Pakistani freelancers improved materially in 2025 to 2026. The official State Bank of Pakistan press release on 6 April 2026 removed the need for repetitive per-transaction Form R submissions for IT exporters and freelancers, standardised documentation and imposed faster processing expectations. At the same time, Pakistan IT exports grew 18% to US$3.8 billion in FY2025, with local reporting explicitly linking part of that momentum to software services and freelance earnings. That matters because AI freelancing in Pakistan is not just a marketplace phenomenon; it now sits inside a bigger, formalising export system.",
    ],
  },
  {
    id: "recommended-niches",
    title: "Recommended niches for Pakistan freelancers and operators",
    table: {
      headers: [
        "Recommended niche",
        "Why it is attractive now",
        "Why it is safer than generic gigs",
      ],
      rows: [
        [
          "RAG and document AI for SMEs",
          "Buyers want grounded outputs, not hallucination-prone demos",
          "Higher switching costs than simple prompting",
        ],
        [
          "AI workflow automation for Gulf and UK service firms",
          "Strong demand for operational efficiency and asynchronous delivery",
          "Clear ROI, easier cross-border sale",
        ],
        [
          "Urdu-English and Arabic-English support copilots",
          "Pakistan has language and regional advantages",
          "Lower direct competition from generic global sellers",
        ],
        [
          "AI quality assurance, red-teaming and evaluation",
          "Enterprises need reliability and guardrails",
          "Benefits from skills shortage and trust requirements",
        ],
        [
          "Computer vision for safety, retail and quality inspection",
          "More difficult than commodity chatbot work",
          "Better path to repeat contracts and higher pricing",
        ],
      ],
    },
    body: [
      "Those recommendations follow from the observed rate dispersion, the shift toward deployment and reliability roles, and the fact that firms can expand AI talent pools most efficiently via skills-based, applied hiring rather than degree filtering alone.",
    ],
  },
  {
    id: "startup-ecosystem",
    title: "Startup ecosystem",
    intro: [
      "The 2025 to 2026 startup cycle is best described as booming, but narrower. Crunchbase data show US$211 billion flowed to AI in 2025, about 50% of all global venture funding, and Q1 2026 then reset the bar again with US$300 billion invested across 6,000 startups globally. But the distribution is extreme: foundational AI startups alone had already raised US$178 billion across 24 deals by 31 March 2026, versus US$88.9 billion across 66 deals in all of 2025. In other words, the capital markets are rewarding scale, compute access and platform position far more than interesting models.",
      "Pakistan ecosystem recovered in 2025, but the rebound was still shallow relative to the 2021 to 2022 peak. Invest2Innovate reported US$74.23 million of total startup funding across 16 deals in 2025, including both equity and hybrid finance, with 11 disclosed deals. Meanwhile Data Darbar reported US$36.6 million in disclosed equity funding across 14 transactions, up from US$22.5 million in 2024, while Q1 2025 had been extremely weak at just US$196,000 across one disclosed round before Q2 rebounded sharply to US$58 million, the strongest quarter in almost three years. The right conclusion is not Pakistan is back; it is Pakistan has moved from collapse to selective recovery.",
    ],
    table: {
      headers: ["Exit or deal", "What happened", "Why it matters"],
      rows: [
        [
          "OpenAI / Jams",
          "Pakistani-founded generative AI startup Jams joined OpenAI in late 2025",
          "Proof that Pakistani founders can build into frontier ecosystems",
        ],
        [
          "Veeam / Securiti AI",
          "Reuters-reported acquisition of Pakistani-origin entrepreneur Rehan Jalil Securiti AI for US$1.73bn",
          "Largest visible Pakistan-linked AI exit in the period",
        ],
        [
          "AutoAcquire AI / Virtuans AI",
          "Seven-figure acquisition of a Pakistani agentic-AI startup in early 2026",
          "Shows U.S. buyers are willing to acquire niche Pakistan AI capability",
        ],
        [
          "Apple / Q.ai",
          "Reuters-reported acquisition of Israeli audio AI startup for about US$1.6bn",
          "Hardware incumbents are buying specialised AI capability",
        ],
        [
          "American Express / Hyper",
          "Reuters-reported acquisition of AI expense-management startup in April 2026",
          "Vertical AI with direct workflow ROI is a live M&A category",
        ],
      ],
    },
    body: [
      "These exits matter because they reveal which business models are liquid. The exits are not concentrated in general AI, but in workflow automation, data governance, vertical tooling and embedded infrastructure. That is exactly the pattern Pakistan should care about.",
      "The dominant business models in 2026 are now fairly visible. Infrastructure and compute capture extraordinary capital but require balance-sheet strength; foundation labs absorb giant rounds but are inaccessible to most new entrants; vertical AI software attracts buyers when it plugs into budgets with short payback periods; and AI services plus tooling remain the most realistic strategy for Pakistan, especially when they evolve from bespoke services into repeatable workflow products. The unit economics proxy from Upwork is revealing: machine-learning projects run from US$500 to 2,500 for small tasks and US$5,000 to 20,000+ for larger builds; prompt-engineering work ranges from US$100 to 300 for single-task optimisation up to US$5,000+ for enterprise fine-tuning strategy. At the opposite extreme, CoreWeave expects US$30 to 35 billion of 2026 capex and already carries US$14 billion+ in long-term debt. That is why AI startup is not one business model; it is at least four radically different capital structures.",
    ],
  },
  {
    id: "key-shifts",
    title: "Key shifts",
    intro: [
      "The clearest shift is that commercially grounded AI is working; spectacle AI is not enough.",
      "What is working now is enterprise AI that attaches to clear budgets and measurable workflows. LinkedIn Work Change Report says 51% of businesses that adopted generative AI reported a 10% or greater revenue increase, and LinkedIn 2026 labour-market material emphasises AI change management, internal mobility and skills-based hiring rather than abstract automation rhetoric. In the startup market, capital is still abundant for winners, but fundraising is overwhelmingly rewarding companies that own compute, distribution, workflow insertion or high-value data rights.",
      "What looks increasingly overhyped is standalone prompting as a moat, undifferentiated wrapper apps, and Pakistan trying to build frontier labs as if capital were unconstrained. Public rate data already show prompt engineering priced below ML engineering and often below advanced data science on freelance markets. Crunchbase 2026 numbers show how brutally concentrated funding has become at the top, while the NVCA and PitchBook Venture Monitor shows how misleading record headline values can be: remove the five largest deals and exits and Q1 2026 U.S. deal value and exit value fall 73.2% and 86.6% respectively.",
      "For Pakistan specifically, the winning pattern is likely to be applied B2B AI, not moonshot foundation-model spending. The policy emphasis on compute infrastructure, sector roadmaps, scholarships and internships is directionally correct, but the local funding base is still too narrow for broad frontier-model competition. The practical opening is in exports: copilots for services industries, multilingual support automation, document workflows, compliance systems, health-tech operations, and computer-vision use cases tied to manufacturing, logistics and safety.",
    ],
  },
  {
    id: "risks-future-outlook",
    title: "Risks and future outlook",
    intro: [
      "The next three to five years can be framed in three scenarios.",
    ],
    table: {
      headers: ["Scenario", "Probability", "What it looks like"],
      rows: [
        [
          "Base adoption path",
          "50%",
          "Enterprise AI keeps spreading, capital remains concentrated, Pakistan grows mainly through services, vertical tools and export-led freelancing",
        ],
        [
          "Upside acceleration",
          "25%",
          "Inference costs fall faster, enterprise procurement normalises, Pakistan compute and skills programmes execute well, and local AI revenue clears the optimistic path",
        ],
        [
          "Downside fragmentation",
          "25%",
          "Macro volatility, weak exits, regulatory drag and compute scarcity cause spending pauses and compress startup survival rates",
        ],
      ],
    },
    body: [
      "Those probabilities are my analytical assessment, not a sourced survey result. The evidence underneath them is straightforward: WEF shows large-scale skill transformation ahead; LinkedIn shows the skills response is accelerating; Crunchbase and NVCA show capital and exits are still unusually concentrated; and Pakistan own policy and central-bank actions show that institutional support is improving, but implementation risk remains real.",
      "2025",
      "AI policy approved in Pakistan",
      "Global AI revenue anchor around US$244bn",
      "2026",
      "Capital concentration intensifies",
      "Pakistan eases exporter and freelancer procedures",
      "2027",
      "Deployment economics become more important than demos",
      "2028",
      "Skills and compute bottlenecks decide winners",
      "2029",
      "Exit quality separates durable firms from wrappers",
      "2030",
      "Pakistan lands between US$2.36bn and US$4.10bn in market size depending on execution",
      "AI market outlook to 2030",
      "Show code",
    ],
  },
  {
    id: "risk-probability-table",
    title: "Highest-probability risks",
    table: {
      headers: ["Risk", "Probability", "Impact", "Why it matters"],
      rows: [
        [
          "Skills bottleneck",
          "80%",
          "High",
          "WEF says 59 of 100 workers will need training by 2030 and 63% of employers see skill gaps as the biggest barrier",
        ],
        [
          "Capital concentration",
          "75%",
          "High",
          "AI capital is flowing to a small set of very large deals; this hurts midsized ecosystems first",
        ],
        [
          "Compute and infrastructure scarcity",
          "65%",
          "High in Pakistan",
          "Pakistan own policy still needs to build the compute grid it has announced",
        ],
        [
          "Export and macro fragility",
          "60%",
          "Medium-high",
          "Pakistan AI opportunity is heavily export-linked; external shocks matter",
        ],
        [
          "Regulatory and governance lag",
          "55%",
          "Medium",
          "Pakistan has the policy architecture, but sandboxes and transparency rules must actually be implemented",
        ],
      ],
    },
    body: [
      "The good news is that Pakistan risk mitigation levers are visible and practical: formalise freelancer and export channels, expand applied AI training, prioritise sector datasets, fund compute access rather than prestige projects, and push skills-based hiring into both public procurement and private employers. The bad news is that none of these are automatic. They require execution discipline, not just announcements.",
    ],
  },
  {
    id: "methodology",
    title: "Methodology, assumptions and source hierarchy",
    intro: [
      "This report uses a source hierarchy rather than pretending all numbers are equally clean. My first preference was official public 2025 to 2026 material from Pakistan Bureau of Statistics, the Ministry of Information Technology and Telecommunication, the State Bank of Pakistan, the World Economic Forum, the International Labour Organization, LinkedIn Economic Graph and Stanford HAI. My second preference was public data disclosures from Crunchbase and the PitchBook and NVCA Venture Monitor. My third preference, used only when primary sources were not publicly accessible, was public reproductions of Statista market values and local ecosystem reports such as Invest2Innovate and Data Darbar.",
      "The most important assumption is the one around market-definition consistency. AI market size can mean software revenue, total AI vendor revenue, generative-AI software only, AI spending, or even AI-enabled infrastructure. I therefore anchored the report on the public 2025 Statista-style revenue figures where those were visible, and then used Crunchbase, LinkedIn and policy sources to interpret adoption, jobs and capital formation around that revenue base. I also treated Pakistan 2025 AI market as a range rather than a single point because the public 2025 to 2026 sources expose at least two different Statista-derived values.",
      "The second key assumption is the treatment of Pakistan job impact. There is no official 2025 count of AI-created and AI-displaced jobs in Pakistan, so I modelled the annualised effect using WEF five-year structural transformation rates and applied them to Pakistan non-agricultural employment base rather than to the whole workforce. That makes the estimate more useful for AI planning, but it remains a model.",
      "The third key assumption concerns freelancing platform metrics. Upwork and Fiverr do not publicly disclose authoritative Pakistan AI freelancer headcounts in 2025 to 2026, so exact platform population counts could not be verified from public sources. Where platform data were unavailable, I used public category pages, published rate cards, visible Pakistan landing pages, official SBP facilitation measures, and Pakistan broader export data to draw conclusions about rate positioning and opportunity structure. That is why the freelancing section is intentionally strongest on rates, categories and monetisation conditions, and more cautious on headcounts.",
    ],
  },
];

export const timelineMilestones = [
  {
    year: "2025",
    points: [
      "AI policy approved in Pakistan.",
      "Global AI revenue anchor around US$244bn.",
    ],
  },
  {
    year: "2026",
    points: [
      "Capital concentration intensifies.",
      "Pakistan eases exporter and freelancer procedures.",
    ],
  },
  {
    year: "2027",
    points: ["Deployment economics become more important than demos."],
  },
  {
    year: "2028",
    points: ["Skills and compute bottlenecks decide winners."],
  },
  {
    year: "2029",
    points: ["Exit quality separates durable firms from wrappers."],
  },
  {
    year: "2030",
    points: [
      "Pakistan lands between US$2.36bn and US$4.10bn in market size depending on execution.",
    ],
  },
];
