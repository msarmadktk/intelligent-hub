import Link from "next/link";

export default function Home() {
  return (
    <main className="page-shell space-y-6">
      <section className="panel fade-up overflow-hidden p-6 md:p-10">
        <p className="eyebrow">Personal research intelligence website</p>
        <h1 className="mt-2 max-w-4xl text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          One place to store, structure, and read dense research with clarity.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[color:var(--muted)] md:text-lg">
          This platform is designed to keep your long-form analysis intact while
          making it easier to scan, revisit, and understand. It is not about
          oversimplifying. It is about preserving depth in a UI that feels clean,
          modern, and practical for daily research work.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/directory" className="cta-link">
            Open directory
          </Link>
          <Link href="/directory/global-ai-market-2026" className="chip">
            Open first topic report
          </Link>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        <article className="metric-card fade-up p-5">
          <p className="eyebrow">Purpose</p>
          <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
            Transform long reports and notes into structured visual blocks that
            remain detailed and reliable.
          </p>
        </article>
        <article className="metric-card fade-up p-5" style={{ animationDelay: "80ms" }}>
          <p className="eyebrow">Architecture</p>
          <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
            Feature-based route and folder structure, organized by research
            domains and expanding topic modules.
          </p>
        </article>
        <article className="metric-card fade-up p-5" style={{ animationDelay: "160ms" }}>
          <p className="eyebrow">Reading system</p>
          <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
            Metrics, tables, grouped insights, and long-form text blocks to
            reduce eye strain without losing meaning.
          </p>
        </article>
      </section>

      <section className="topic-card fade-up p-6 md:p-7">
        <p className="eyebrow">First topic now added</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Global and AI market in 2026
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[color:var(--muted)] md:text-base">
          The full report has been integrated with all provided content in a
          structured format: executive summary, market sizing, scenario model,
          labour impact, freelancing dynamics, startup cycle, key shifts, risk
          probabilities, timeline, and methodology assumptions.
        </p>
        <div className="mt-5">
          <Link href="/directory/global-ai-market-2026" className="cta-link">
            Read full topic report
          </Link>
        </div>
      </section>
    </main>
  );
}
