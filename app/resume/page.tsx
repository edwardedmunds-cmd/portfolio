import Link from "next/link";
import { Section } from "@/components/Section";
import { SITE_LINKS } from "@/lib/site";

const strengths = [
  "Enterprise analytics strategy and delivery across regulated data environments",
  "Executive dashboard product management from metric definition through adoption",
  "AI-ready data platform patterns for quality, lineage, consent, and governance",
  "Secure multi-tenant architecture concepts for domain and stakeholder separation",
  "Stakeholder alignment across business, risk, compliance, technology, and operations"
];

export default function ResumePage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pt-14">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Resume</p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">Ted Edmunds</h1>
      </section>
      <Section
        title="Positioning"
        description="Data product leader focused on enterprise analytics platforms, executive dashboard products, governed data assets, and AI-ready operating models for banking, insurance, healthcare, and enterprise data teams."
      >
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">Calls to action</h2>
            <div className="mt-4 grid gap-3 text-sm font-semibold text-blue-700">
              <a href={SITE_LINKS.linkedin}>Connect on LinkedIn</a>
              <a href={SITE_LINKS.github}>Review GitHub portfolio work</a>
              <Link href="/contact">Request a current resume</Link>
              <Link href="/contact">Start a role conversation</Link>
            </div>
          </aside>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">Positioning summary</h2>
            <p className="mt-3 leading-8 text-slate-600">
              I lead data product work that turns fragmented enterprise data into trusted decision systems. My work emphasizes metric design, dashboard adoption, governance, lineage, platform architecture, and clear communication with senior stakeholders.
            </p>
            <p className="mt-3 leading-8 text-slate-600">
              The strongest fit is a role where analytics, product judgment, platform thinking, and regulated-industry execution need to come together.
            </p>
            <h2 className="mt-8 text-lg font-bold text-slate-950">Core strengths</h2>
            <ul className="mt-3 grid gap-3">
              {strengths.map((strength) => (
                <li key={strength} className="rounded-md bg-slate-50 px-4 py-3 text-slate-700">
                  {strength}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="mt-8 inline-flex rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white">
              Discuss a Role
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
