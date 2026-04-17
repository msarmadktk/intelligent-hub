"use client";

import { useState } from "react";
import Link from "next/link";

interface Topic {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
  status: "available" | "upcoming";
}

const topics: Topic[] = [
  {
    id: "global-ai-market-2026",
    title: "Global and AI market in 2026",
    description: "Full report containing executive summary, market sizing, scenario model, jobs analysis, freelancing economy, startup ecosystem, key shifts, risks, and methodology.",
    category: "Market Analysis",
    href: "/directory/global-ai-market-2026",
    status: "available",
  },
  {
    id: "finance",
    title: "Finance & Fintech Outlook",
    description: "Upcoming analysis on global financial shifts, digital banking, and investment transparency.",
    category: "Finance",
    href: "#",
    status: "upcoming",
  },
  {
    id: "freelancing",
    title: "The Freelance Economy",
    description: "Deep dive into the future of remote work, gig platforms, and independent skill valuation.",
    category: "Economy",
    href: "#",
    status: "upcoming",
  },
  {
    id: "startups",
    title: "Startup Ecosystem 2026",
    description: "Mapping the next wave of venture capital, bootstrapped growth, and exit strategies.",
    category: "Business",
    href: "#",
    status: "upcoming",
  },
  {
    id: "tech",
    title: "Core Tech Evolution",
    description: "Researching breakthroughs in quantum computing, semiconductors, and edge infrastructure.",
    category: "Tech",
    href: "#",
    status: "upcoming",
  },
  {
    id: "education",
    title: "Education Revolution",
    description: "How learning is changing through personalized paths, AI tutoring, and credential shifts.",
    category: "Education",
    href: "#",
    status: "upcoming",
  },
];

export function TopicDirectory() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="search-bar-container">
          <svg
            className="search-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search Intelligence Directory..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <span className="chip">Total: {topics.length}</span>
          <span className="chip text-[color:var(--teal)]">Available: {topics.filter(t => t.status === 'available').length}</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTopics.map((topic) => (
          <div
            key={topic.id}
            className={`${
              topic.status === "available" ? "topic-card" : "metric-card"
            } fade-up flex flex-col p-5 md:p-6 transition-transform hover:scale-[1.01]`}
          >
            <div className="flex items-start justify-between">
              <p className="eyebrow">{topic.category}</p>
              {topic.status === "upcoming" && (
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[color:var(--muted)] opacity-60">
                  In Progress
                </span>
              )}
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
              {topic.title}
            </h3>
            <p className="mt-3 flex-grow text-sm leading-relaxed text-[color:var(--muted)]">
              {topic.description}
            </p>
            <div className="mt-5">
              {topic.status === "available" ? (
                <Link href={topic.href} className="cta-link w-full">
                  Access Report
                </Link>
              ) : (
                <div className="chip w-fit opacity-80 cursor-default">Registered in Vault</div>
              )}
            </div>
          </div>
        ))}
        {filteredTopics.length === 0 && (
          <div className="col-span-full py-12 text-center">
            <p className="text-[color:var(--muted)]">No topics match your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
