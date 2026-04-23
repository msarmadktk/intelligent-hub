import Link from "next/link";

const homeTopics = [
  {
    label: "AI Market",
    href: "/directory/global-ai-market-2026",
    className: "home-orbit-link-one",
  },
  {
    label: "Mehmed",
    href: "/directory/mehmed-fetihler-sultani",
    className: "home-orbit-link-two",
  },
  {
    label: "Personal Role",
    href: "/directory/personal-role-report",
    className: "home-orbit-link-three",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="home-hero fade-up overflow-hidden">
        <div className="home-visual home-visual-expanded p-6 md:p-10">
          <div className="home-orbit home-orbit-expanded">
            <Link href="/directory" className="home-orbit-core home-orbit-core-link">
              <span>Directory</span>
            </Link>
            <div className="home-orbit-ring home-orbit-ring-one" />
            <div className="home-orbit-ring home-orbit-ring-two" />
            <div className="home-orbit-ring home-orbit-ring-three" />
            {homeTopics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className={`home-orbit-chip home-orbit-link ${topic.className}`}
              >
                {topic.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
