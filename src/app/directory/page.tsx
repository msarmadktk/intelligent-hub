import type { Metadata } from "next";
import { TopicDirectory } from "@/features/topics/topic-directory";

export const metadata: Metadata = {
  title: "Intelligence Directory",
  description:
    "Explore the research vault: market analysis, finance, tech, and strategic reports.",
};

export default function DirectoryPage() {
  return (
    <main className="page-shell space-y-8">
      <section className="panel fade-up p-6 md:p-8">
        <p className="eyebrow">Intelligence Directory</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          Centralized Research Hub
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-[color:var(--muted)] md:text-lg">
          Search and navigate through all integrated research modules. Every topic is 
          isolated to ensure maximum clarity and depth without information fragmentation.
        </p>
      </section>

      <TopicDirectory />
    </main>
  );
}
