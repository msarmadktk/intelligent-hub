import {
  boundaries,
  executiveSummary,
  finalConclusion,
  growthPhases,
  heartSeriesVideos,
  quickMetrics,
  reportSubtitle,
  reportTitle,
  roleExpansion,
  sections,
  skillTracks,
  weeklyModel,
} from "./report-data";

function shortPreview(text: string): string {
  const firstStop = text.indexOf(". ");
  if (firstStop > 0) {
    return text.slice(0, firstStop + 1);
  }
  if (text.length <= 170) {
    return text;
  }
  return `${text.slice(0, 170)}...`;
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

function BulletCardList({ items }: { items: string[] }) {
  return (
    <div className="mt-3 grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <article key={item} className="metric-card p-4">
          <p className="text-sm leading-6 text-foreground">{item}</p>
        </article>
      ))}
    </div>
  );
}

function FavouriteSeriesSection() {
  return (
    <div className="mt-3 grid gap-3">
      {heartSeriesVideos.map((video, index) => (
        <details
          key={video.id}
          className="panel narrative-accordion fade-up overflow-hidden"
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <summary>
            <span>{video.englishTitle}</span>
            <span className="chip">{video.episode}</span>
          </summary>
          <div className="grid gap-4 p-4 md:grid-cols-2 md:p-5">
            <article className="topic-card p-5">
              <p className="eyebrow">A series close to my heart</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                {video.englishTitle}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                {video.note}
              </p>
              <div className="mt-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--teal)]">
                  Original title
                </p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                  {video.originalTitle}
                </p>
              </div>
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="cta-link mt-4 w-fit"
              >
                Watch on YouTube
              </a>
            </article>

            <article className="panel overflow-hidden p-3 md:p-4">
              <div
                className="overflow-hidden rounded-[1.3rem] border border-[color:var(--border)] bg-black"
                style={{ aspectRatio: "16 / 9" }}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0`}
                  title={video.englishTitle}
                  className="h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                Open the episode card to watch it here on the website, or use the
                YouTube button if you want to open the original page.
              </p>
            </article>
          </div>
        </details>
      ))}
    </div>
  );
}

export function PersonalRoleReportView() {
  return (
    <main className="page-shell space-y-8">
      <section className="panel fade-up overflow-hidden p-6 md:p-10">
        <p className="eyebrow">Feature Topic 02</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          {reportTitle}
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-[color:var(--muted)] md:text-lg">
          {reportSubtitle}
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <p className="eyebrow">Executive summary</p>
          <span className="chip">Full text included</span>
          <span className="chip">Role progression map</span>
          <span className="chip">Action-oriented structure</span>
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
              <p className="mt-2 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
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

      {sections.map((section, sectionIndex) => (
        <section key={section.id} className="section-gap">
          <div className="flex items-center gap-2">
            <p className="eyebrow">Section {sectionIndex + 1}</p>
            <span className="chip">{section.title}</span>
          </div>
          {section.paragraphs?.length ? (
            <ParagraphAccordion
              title={`Open ${section.title} narrative`}
              paragraphs={section.paragraphs}
            />
          ) : null}
          {section.bullets?.length ? <BulletCardList items={section.bullets} /> : null}
        </section>
      ))}

      <section className="section-gap">
        <div className="flex items-center gap-2">
          <p className="eyebrow">Six-month growth plan</p>
          <span className="chip">Month 1 to 6</span>
        </div>
        <div className="mt-3 grid gap-3">
          {growthPhases.map((phase) => (
            <article key={phase.id} className="panel fade-up p-5 md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {phase.period}
                </h3>
                <span className="chip">{phase.objective}</span>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <article className="scenario-card">
                  <p className="eyebrow">Focus areas</p>
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-[color:var(--muted)]">
                    {phase.focusAreas.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
                <article className="scenario-card">
                  <p className="eyebrow">What I should own</p>
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-[color:var(--muted)]">
                    {phase.ownership.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
                <article className="scenario-card">
                  <p className="eyebrow">What I should do</p>
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-[color:var(--muted)]">
                    {phase.actions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
                <article className="scenario-card">
                  <p className="eyebrow">Success by period end</p>
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-[color:var(--muted)]">
                    {phase.successMarkers.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {phase.skills?.length ? (
                    <div className="mt-3">
                      <p className="text-xs uppercase tracking-[0.12em] text-[color:var(--teal)]">
                        Skills to build in this stage
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {phase.skills.map((skill) => (
                          <span key={skill} className="chip">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </article>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap">
        <div className="flex items-center gap-2">
          <p className="eyebrow">Skills I must build</p>
          <span className="chip">{skillTracks.length} tracks</span>
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {skillTracks.map((skill, index) => (
            <article
              key={skill.id}
              className="topic-card fade-up p-5"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {skill.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                {skill.summary}
              </p>
              <ul className="mt-3 space-y-1 text-sm leading-6 text-foreground">
                {skill.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap">
        <div className="flex items-center gap-2">
          <p className="eyebrow">Role boundaries and expansion</p>
          <span className="chip">Ownership clarity</span>
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {boundaries.map((track) => (
            <article key={track.owner} className="risk-card">
              <p className="font-semibold tracking-tight text-foreground">{track.owner}</p>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-[color:var(--muted)]">
                {track.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <article className="panel mt-3 p-5">
          <p className="eyebrow">My role should gradually expand into</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {roleExpansion.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="section-gap">
        <div className="flex items-center gap-2">
          <p className="eyebrow">Weekly operating model</p>
          <span className="chip">Execution rhythm</span>
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {weeklyModel.map((item) => (
            <article key={`${item.split}-${item.title}`} className="panel p-5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </p>
                <span className="chip">{item.split}</span>
              </div>
              <ul className="mt-3 space-y-1 text-sm leading-6 text-[color:var(--muted)]">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap">
        <div className="flex flex-wrap items-center gap-2">
          <p className="eyebrow">Series close to my heart</p>
          <span className="chip">Embedded watching</span>
          <span className="chip">English titles</span>
          <span className="chip">{heartSeriesVideos.length} saved</span>
        </div>
        <FavouriteSeriesSection />
      </section>

      <section className="section-gap">
        <div className="flex items-center gap-2">
          <p className="eyebrow">Final conclusion</p>
          <span className="chip">Full guidance preserved</span>
        </div>
        <ParagraphAccordion
          title="Open final conclusion blocks"
          paragraphs={finalConclusion}
        />
      </section>
    </main>
  );
}
