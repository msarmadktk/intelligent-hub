import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Research Intelligence Vault",
  description:
    "A feature-based personal research dashboard designed for readability and depth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <header className="top-nav">
          <div className="site-shell top-nav-inner">
            <Link href="/" className="brand-mark">
              Research Intelligence
            </Link>
            <nav className="main-links">
              <Link href="/">Home</Link>
              <Link href="/research">Research</Link>
              <Link href="/research/global-ai-market-2026">
                Global and AI Market 2026
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
