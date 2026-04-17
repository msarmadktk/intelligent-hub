import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research index",
  description:
    "Feature-based research directory for finance, freelancing, jobs, startups, tech, education, and topic reports.",
};

const upcomingDomains = [
  "Finance",
  "Freelancing",
  "Jobs",
  "Startups",
  "Tech",
  "Education",
];

export default function ResearchIndexPage() {
  return (
    <main className="page-shell space-y-6">
      <section className="panel fade-up p-6 md:p-8">
        <p className="eyebrow">Research index</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Feature-based research vault
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-[color:var(--muted)]">
          Every major research domain is isolated by feature to keep the system
          scalable and easy to navigate. The first full topic report is now live.
        </p>
      </section>

      <section className="topic-card fade-up p-5 md:p-6">
        <p className="eyebrow">Available topic</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          Global and AI market in 2026
        </h2>
        <p className="mt-3 text-sm leading-7 text-[color:var(--muted)] md:text-base">
          Full report containing executive summary, market sizing, scenario
          model, jobs analysis, freelancing economy, startup ecosystem, key
          shifts, risks, and methodology.
        </p>
        <div className="mt-5">
          <Link href="/research/global-ai-market-2026" className="cta-link">
            Open full report
          </Link>
        </div>
      </section>

      <section className="panel fade-up p-5 md:p-6">
        <p className="eyebrow">Upcoming feature domains</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {upcomingDomains.map((domain) => (
            <div key={domain} className="metric-card p-3">
              <p className="font-medium text-foreground">{domain}</p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">
                Topic-ready section in progress
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

