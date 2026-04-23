import {
  reportSubtitle,
  reportTitle,
  savedEpisodes,
  seriesHighlights,
} from "./report-data";

function MehmedEpisodeGallery() {
  return (
    <div className="mt-3 grid gap-3">
      {savedEpisodes.map((video, index) => (
        <details
          key={video.id}
          className="panel narrative-accordion fade-up overflow-hidden"
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <summary>
            <span>{video.englishTitle}</span>
            <span className="chip">{video.episode}</span>
          </summary>
          <div className="p-4 md:p-6">
            <article className="panel overflow-hidden p-3 md:p-5">
              <div
                className="overflow-hidden rounded-[1.3rem] border border-[color:var(--border)] bg-black"
                style={{ aspectRatio: "16 / 9", minHeight: "320px" }}
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
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {video.englishTitle}
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[color:var(--muted)]">
                {video.description}
              </p>
            </article>
          </div>
        </details>
      ))}
    </div>
  );
}

export function MehmedFetihlerSultaniReportView() {
  return (
    <main className="page-shell space-y-8">
      <section className="panel fade-up overflow-hidden p-6 md:p-10">
        <p className="eyebrow">Feature Topic 03</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          {reportTitle}
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-[color:var(--muted)] md:text-lg">
          {reportSubtitle}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Page snapshot
        </h2>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {seriesHighlights.map((item, index) => (
            <article
              key={item.label}
              className="metric-card fade-up p-4 md:p-5"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]">
                {item.label}
              </p>
              <p className="mt-2 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                {item.context}
              </p>
              <div className="glow-accent" />
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap">
        <div className="flex flex-wrap items-center gap-2">
          <p className="eyebrow">Saved episodes</p>
          <span className="chip">Public access</span>
          <span className="chip">Embedded player</span>
          <span className="chip">English titles</span>
          <span className="chip">{savedEpisodes.length} saved</span>
        </div>
        <MehmedEpisodeGallery />
      </section>
    </main>
  );
}
