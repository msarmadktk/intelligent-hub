import {
  executiveSummary,
  quickMetrics,
  reportTitle,
  sections,
  timelineMilestones,
  type ReportTable,
} from "./report-data";

function parsePercent(value: string): number {
  const parsed = Number.parseFloat(value.replace("%", "").trim());
  return Number.isNaN(parsed) ? 0 : parsed;
}

function parseBillions(value: string): number {
  const match = value.match(/([\d.]+)\s*bn/i);
  if (!match) {
    return 0;
  }
  const parsed = Number.parseFloat(match[1]);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function shortPreview(text: string): string {
  const firstStop = text.indexOf(". ");
  if (firstStop > 0) {
    return text.slice(0, firstStop + 1);
  }
  if (text.length <= 165) {
    return text;
  }
  return `${text.slice(0, 165)}...`;
}

function DataTable({ table }: { table: ReportTable }) {
  return (
    <div className="panel overflow-x-auto p-2 md:p-3">
      <table className="data-table w-full">
        <thead>
          <tr>
            {table.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ParagraphAccordion({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <details className="panel narrative-accordion mt-3">
      <summary>
        <span>{title}</span>
        <span className="chip">{paragraphs.length} blocks</span>
      </summary>
      <div className="grid gap-3 p-4 md:grid-cols-2 md:p-5">
        {paragraphs.map((paragraph) => (
          <article key={paragraph} className="topic-card p-4">
            <p className="text-sm leading-6 text-[color:var(--muted)]">
              {shortPreview(paragraph)}
            </p>
            <details className="mt-3">
              <summary className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--teal)]">
                Read full text
              </summary>
              <p className="mt-3 text-sm leading-7 text-foreground">
                {paragraph}
              </p>
            </details>
          </article>
        ))}
      </div>
    </details>
  );
}

export function GlobalAiMarketReportView() {
  const marketRows =
    sections.find((item) => item.id === "market-size-growth")?.table?.rows ?? [];
  const scenarioRows =
    sections.find((item) => item.id === "scenario-table")?.table?.rows ?? [];
  const riskRows =
    sections.find((item) => item.id === "risk-probability-table")?.table?.rows ?? [];
  const maxScenarioGlobal = Math.max(
    ...scenarioRows.map((row) => parseBillions(row[2])),
    1,
  );

  return (
    <main className="page-shell space-y-8">
      <section className="panel fade-up overflow-hidden p-6 md:p-10">
        <p className="eyebrow">Feature Topic 01</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          {reportTitle}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[color:var(--muted)] md:text-lg">
          Structured long-form intelligence report preserving full detail while
          improving readability, scan speed, and visual clarity.
        </p>
      </section>

      <section className="visual-grid">
        <article className="panel fade-up p-5 md:p-6">
          <p className="eyebrow">2025 market-share map</p>
          <div className="mt-4 space-y-3">
            {marketRows.map((row) => {
              const share = parsePercent(row[3]);
              return (
                <div key={row[0]} className="bar-row">
                  <div className="flex items-center justify-between gap-2 text-sm">
                    <p className="font-semibold text-foreground">{row[0]}</p>
                    <p className="font-medium text-[color:var(--muted)]">{row[3]}</p>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${share}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </article>

        <article className="panel fade-up p-5 md:p-6" style={{ animationDelay: "80ms" }}>
          <p className="eyebrow">2030 scenario comparison</p>
          <div className="mt-4 grid gap-3">
            {scenarioRows.map((row) => {
              const ratio = (parseBillions(row[2]) / maxScenarioGlobal) * 100;
              return (
                <div key={row[0]} className="scenario-card">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold tracking-tight text-foreground">
                      {row[0]}
                    </p>
                    <p className="text-sm font-medium text-[color:var(--muted)]">
                      Global {row[2]} | Pakistan {row[4]}
                    </p>
                  </div>
                  <div className="bar-track mt-3">
                    <div
                      className="bar-fill bar-fill-alt"
                      style={{ width: `${ratio}%` }}
                    />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                    {row[5]}
                  </p>
                </div>
              );
            })}
          </div>
        </article>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <p className="eyebrow">Executive summary</p>
          <span className="chip">Full text included</span>
          <span className="chip">Visual-first layout</span>
          <span className="chip">Less cognitive load</span>
        </div>
        <ParagraphAccordion
          title="Open executive summary blocks"
          paragraphs={executiveSummary}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Signal snapshot
        </h2>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {quickMetrics.map((metric, index) => (
            <article
              key={metric.label}
              className="metric-card fade-up p-4 md:p-5"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                {metric.context}
              </p>
              <div className="glow-accent" />
            </article>
          ))}
        </div>
      </section>

      <section className="panel fade-up p-5 md:p-6">
        <p className="eyebrow">Risk heat overview</p>
        <div className="mt-4 grid gap-3">
          {riskRows.map((row) => {
            const probability = parsePercent(row[1]);
            return (
              <article key={row[0]} className="risk-card">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-foreground">{row[0]}</p>
                  <p className="chip">{row[1]}</p>
                </div>
                <div className="bar-track mt-3">
                  <div
                    className="bar-fill bar-fill-risk"
                    style={{ width: `${probability}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Impact: {row[2]} | {row[3]}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {sections.map((section, sectionIndex) => (
        <section key={section.id} className="section-gap">
          <div className="flex items-center gap-2">
            <p className="eyebrow">Section {sectionIndex + 1}</p>
            <span className="chip">{section.title}</span>
          </div>
          {section.intro?.length ? (
            <ParagraphAccordion
              title={`Open ${section.title} narrative intro`}
              paragraphs={section.intro}
            />
          ) : null}
          {section.table ? (
            <div className="mt-3">
              <DataTable table={section.table} />
            </div>
          ) : null}
          {section.body?.length ? (
            <ParagraphAccordion
              title={`Open ${section.title} full notes`}
              paragraphs={section.body}
            />
          ) : null}
        </section>
      ))}

      <section className="section-gap">
        <div className="flex items-center gap-2">
          <p className="eyebrow">AI market outlook to 2030</p>
          <span className="chip">Show code</span>
        </div>
        <article className="panel fade-up mt-3 p-6 md:p-7">
          <ul className="timeline-list">
            {timelineMilestones.map((item) => (
              <li key={item.year}>
                <p className="font-semibold tracking-tight text-foreground">
                  {item.year}
                </p>
                <div className="mt-1 space-y-1 text-sm leading-6 text-[color:var(--muted)]">
                  {item.points.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
