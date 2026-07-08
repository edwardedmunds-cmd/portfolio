import type { Metadata } from "next";
import Link from "next/link";
import { SITE_LINKS, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ted Edmunds | Data Product Leader",
  description:
    "Ted Edmunds portfolio for enterprise analytics, AI-ready data products, executive dashboards, governance, and regulated-industry data product leadership across banking, insurance, and healthcare.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Ted Edmunds | Data Product Leader",
    description:
      "Enterprise analytics, AI-ready data products, executive dashboards, governance, and regulated-industry data product leadership.",
    url: SITE_URL,
    siteName: "Ted Edmunds Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ted Edmunds - Data Product Leader"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ted Edmunds | Data Product Leader",
    description:
      "Enterprise analytics, AI-ready data products, executive dashboards, governance, and regulated-industry data product leadership.",
    images: ["/opengraph-image"]
  }
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/92 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
            <Link href="/" className="text-sm font-bold uppercase tracking-[0.18em] text-slate-950">
              Ted Edmunds
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Discuss a role
            </Link>
          </div>
        </header>
        {children}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
            <p>2026 Ted Edmunds. Enterprise analytics and data product leadership.</p>
            <div className="flex flex-wrap gap-4">
              <a href={SITE_LINKS.linkedin} className="hover:text-slate-950">
                LinkedIn
              </a>
              <a href={SITE_LINKS.github} className="hover:text-slate-950">
                GitHub
              </a>
              <Link href="/resume" className="hover:text-slate-950">
                Resume
              </Link>
              <Link href="/contact" className="hover:text-slate-950">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
