import Link from "next/link";

export default function Home() {
  return (
    <main className="page-shell space-y-6">
      <section className="panel home-hero fade-up overflow-hidden">
        <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <div className="p-6 md:p-10">
            <p className="eyebrow">Research intelligence</p>
            <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              Read important research without feeling lost on first look.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--muted)] md:text-lg">
              A calmer space for saved topics, featured reports, and focused reading.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/directory" className="cta-link">
                Open directory
              </Link>
              <Link href="/directory/mehmed-fetihler-sultani" className="chip">
                Open featured series
              </Link>
            </div>
          </div>

          <div className="home-visual p-6 md:p-10">
            <div className="home-orbit">
              <div className="home-orbit-core">
                <span>Focus</span>
              </div>
              <div className="home-orbit-ring home-orbit-ring-one" />
              <div className="home-orbit-ring home-orbit-ring-two" />
              <div className="home-orbit-chip home-orbit-chip-one">Read</div>
              <div className="home-orbit-chip home-orbit-chip-two">Store</div>
              <div className="home-orbit-chip home-orbit-chip-three">Explore</div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
        <article className="topic-card fade-up p-6 md:p-7">
          <p className="eyebrow">Featured report</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Global and AI market in 2026
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted)] md:text-base">
            A complete market report with structured sections, scenario thinking,
            risk signals, and a cleaner reading flow.
          </p>
          <div className="mt-5">
            <Link href="/directory/global-ai-market-2026" className="cta-link">
              Read report
            </Link>
          </div>
        </article>

        <article className="panel fade-up p-6 md:p-7" style={{ animationDelay: "90ms" }}>
          <p className="eyebrow">Start here</p>
          <div className="mt-4 space-y-4">
            <div className="home-step">
              <span className="home-step-index">01</span>
              <div>
                <p className="font-semibold text-foreground">Open the directory</p>
                <p className="text-sm leading-6 text-[color:var(--muted)]">
                  See all public topics in one simple place.
                </p>
              </div>
            </div>
            <div className="home-step">
              <span className="home-step-index">02</span>
              <div>
                <p className="font-semibold text-foreground">Choose one focus</p>
                <p className="text-sm leading-6 text-[color:var(--muted)]">
                  Start with a featured report or a saved series.
                </p>
              </div>
            </div>
            <div className="home-step">
              <span className="home-step-index">03</span>
              <div>
                <p className="font-semibold text-foreground">Read with clarity</p>
                <p className="text-sm leading-6 text-[color:var(--muted)]">
                  Cleaner layout, less noise, and easier scanning.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
