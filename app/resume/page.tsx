import Link from "next/link";
import { Section } from "@/components/Section";
import { SITE_LINKS } from "@/lib/site";

const strengths = [
  "Healthcare analytics strategy across hospitals, supply chain, member organizations, and commercial data products",
  "Secure cloud and multi-tenant platform leadership with governance, SSO, RBAC, and scalable data integration",
  "Executive dashboard and KPI product management from metric definition through adoption",
  "AI-ready data product patterns for quality, lineage, workflow automation, and governed insight generation",
  "Cross-functional leadership across business, IT, operations, finance, compliance, and external partners"
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
        description="Healthcare data product and platform leader focused on enterprise analytics, commercial data products, governed cloud platforms, executive dashboards, and AI-ready operating models. Banking, insurance, and enterprise data roles are strong adjacent fits where regulated data, security, governance, and adoption are central."
      >
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">Calls to action</h2>
            <div className="mt-4 grid gap-3 text-sm font-semibold text-blue-700">
              <a href={SITE_LINKS.linkedin}>Connect on LinkedIn</a>
              <a href={SITE_LINKS.github}>Review GitHub portfolio work</a>
              <a href={SITE_LINKS.resume}>Download resume PDF</a>
              <a href={`mailto:${SITE_LINKS.email}`}>Email Edward.Edmunds@gmail.com</a>
            </div>
          </aside>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">Positioning summary</h2>
            <p className="mt-3 leading-8 text-slate-600">
              Enterprise technology and analytics executive with a record of building secure, scalable cloud platforms and commercial data products supporting more than $2B in managed spend. Healthcare is the core domain: supply chain analytics, hospital operations, member-facing data products, governed platform architecture, and executive KPI products.
            </p>
            <p className="mt-3 leading-8 text-slate-600">
              The strongest fit is a leadership role where analytics strategy, product judgment, governance, cloud platform execution, and AI-ready data foundations need to come together across business and technology stakeholders.
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
              Contact
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
