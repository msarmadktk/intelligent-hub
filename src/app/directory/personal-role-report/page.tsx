import type { Metadata } from "next";
import { PersonalRoleReportView } from "@/features/topics/personal-role-report/report-view";

export const metadata: Metadata = {
  title: "Personal Role Report",
  description:
    "Detailed personal role report covering CMO strengths, growth-to-commercial transition, six-month execution plan, and CEO-level capability path.",
};

export default function PersonalRoleReportPage() {
  return <PersonalRoleReportView />;
}
