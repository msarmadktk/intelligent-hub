import type { Metadata } from "next";
import { GlobalAiMarketReportView } from "@/features/topics/global-ai-market-2026/report-view";

export const metadata: Metadata = {
  title: "Global and AI market in 2026",
  description:
    "Full long-form report with structured readability blocks, scenarios, labour impact, freelancing, startup ecosystem, and risk outlook.",
};

export default function GlobalAiMarket2026Page() {
  return <GlobalAiMarketReportView />;
}

