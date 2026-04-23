import type { Metadata } from "next";
import { MehmedFetihlerSultaniReportView } from "@/features/topics/mehmed-fetihler-sultani/report-view";

export const metadata: Metadata = {
  title: "Mehmed: Sultan of Conquests",
  description:
    "Public page for Mehmed: Sultan of Conquests episodes saved with English titles, embedded playback, and direct YouTube access.",
};

export default function MehmedFetihlerSultaniPage() {
  return <MehmedFetihlerSultaniReportView />;
}
