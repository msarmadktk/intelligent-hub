import type { Metadata } from "next";
import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PersonalRoleReportView } from "@/features/topics/personal-role-report/report-view";

export const metadata: Metadata = {
  title: "Personal Role Report",
  description:
    "Detailed personal role report covering CMO strengths, growth-to-commercial transition, six-month execution plan, and CEO-level capability path.",
};

const ACCESS_COOKIE_NAME = "personal_role_report_access";
const ACCESS_COOKIE_PATH = "/directory/personal-role-report";
const EXPECTED_PASSWORD =
  process.env.PERSONAL_ROLE_REPORT_PASSWORD ?? "Personal@Focus32!";

function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

const EXPECTED_PASSWORD_HASH = sha256(EXPECTED_PASSWORD);

function isPasswordMatch(inputPassword: string): boolean {
  const inputHashBuffer = Buffer.from(sha256(inputPassword));
  const expectedHashBuffer = Buffer.from(EXPECTED_PASSWORD_HASH);
  return timingSafeEqual(inputHashBuffer, expectedHashBuffer);
}

export default async function PersonalRoleReportPage() {
  async function unlockPersonalRoleReport(formData: FormData) {
    "use server";

    const rawPassword = formData.get("password");
    const enteredPassword =
      typeof rawPassword === "string" ? rawPassword : "";

    if (isPasswordMatch(enteredPassword)) {
      const cookieStore = await cookies();
      cookieStore.set({
        name: ACCESS_COOKIE_NAME,
        value: EXPECTED_PASSWORD_HASH,
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: ACCESS_COOKIE_PATH,
        maxAge: 60 * 60 * 12,
      });
    }

    redirect(ACCESS_COOKIE_PATH);
  }

  const cookieStore = await cookies();
  const hasAccess =
    cookieStore.get(ACCESS_COOKIE_NAME)?.value === EXPECTED_PASSWORD_HASH;

  if (!hasAccess) {
    return (
      <main className="page-shell space-y-8">
        <section className="panel fade-up overflow-hidden p-6 md:p-10">
          <p className="eyebrow">Private Topic</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Password Protected Report
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[color:var(--muted)] md:text-lg">
            This topic is personal. Enter the password to unlock access.
          </p>
        </section>

        <section className="panel fade-up p-6 md:p-8">
          <form action={unlockPersonalRoleReport} className="space-y-4">
            <label
              htmlFor="personal-report-password"
              className="text-sm font-semibold text-foreground"
            >
              Topic password
            </label>
            <input
              id="personal-report-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="search-input"
              placeholder="Enter password"
            />
            <button type="submit" className="cta-link">
              Unlock report
            </button>
          </form>
        </section>
      </main>
    );
  }

  return <PersonalRoleReportView />;
}
