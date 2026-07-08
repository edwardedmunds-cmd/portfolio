import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { SITE_LINKS } from "@/lib/site";

const capabilities = [
  {
    title: "Data products",
    body: "Reusable datasets, KPIs, and workflows that business teams can trust, adopt, and manage."
  },
  {
    title: "Executive dashboards",
    body: "Decision-ready views for growth, risk, quality, compliance, and operating performance."
  },
  {
    title: "AI-ready platforms",
    body: "Data foundations shaped for quality, consent, lineage, evaluation, and governed AI use."
  },
  {
    title: "Governance and lineage",
    body: "Ownership, controls, traceability, and plain-English confidence signals built into the product."
  },
  {
    title: "Secure multi-tenant analytics",
    body: "Portfolio patterns for protected data access across teams, domains, and regulated use cases."
  }
];

const outcomes = [
  ["Banking", "Customer 360, risk visibility, data quality, consent-aware AI readiness"],
  ["Healthcare", "Regulatory intelligence, market signals, provider and patient-access analytics"],
  ["Insurance", "Claims operations, policy intelligence, fraud signals, member journey analytics"],
  ["Enterprise data", "Catalogs, lineage, executive metrics, platform adoption, governed self-service"]
];

export default function Home() {
  const featuredProject = projects.find((project) => project.slug === "banking-data-platform");
  const remainingProjects = projects.filter((project) => project.slug !== "banking-data-platform");

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Executive data product portfolio</p>
          <h1 className="text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">Ted Edmunds - Data Product Leader</h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-600">
            Building enterprise analytics products that help leaders see risk, growth, quality, and AI readiness clearly enough to act.
          </p>
          <p className="mt-4 max-w-2xl leading-8 text-slate-600">
            This portfolio is built for regulated, data-intensive organizations: banking, insurance, healthcare, and enterprise platforms where trusted metrics, governance, and adoption matter as much as the interface.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">
              View Case Studies
            </Link>
            <Link href="/resume" className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:border-slate-500">
              Review Resume
            </Link>
            <Link href="/contact" className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:border-slate-500">
              Discuss a Role
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
            <a href={SITE_LINKS.linkedin} className="hover:text-slate-950">
              Connect on LinkedIn
            </a>
            <a href={SITE_LINKS.github} className="hover:text-slate-950">
              Review GitHub work
            </a>
            <Link href="/resume" className="hover:text-slate-950">
              Read resume summary
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="border-b border-slate-200 pb-4">
            <p className="text-sm font-bold text-slate-500">Leadership signal</p>
            <p className="mt-2 text-3xl font-bold text-slate-950">Data products that turn complexity into operating decisions</p>
          </div>
          <div className="mt-5 grid gap-3">
            {["Board-ready KPI hierarchy", "Trusted domain data model", "Governed AI usage patterns", "Secure tenant-aware access"].map((item) => (
              <div key={item} className="flex items-center justify-between gap-4 rounded-md bg-slate-50 px-4 py-3">
                <span className="font-semibold text-slate-800">{item}</span>
                <span className="rounded-full bg-teal-100 px-2.5 py-1 text-xs font-bold text-teal-800">Productized</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="Featured case studies"
        title="Executive data products for regulated industries"
        description="The portfolio leads with a banking platform demo built to show data product management, governance, architecture, AI readiness, and executive reporting in one polished case study."
      >
        {featuredProject ? (
          <div data-testid="homepage-bank-feature" className="mb-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">Featured project</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight">{featuredProject.title}</h3>
              <p className="mt-4 max-w-3xl leading-8 text-slate-300">{featuredProject.summary}</p>
              <p className="mt-4 max-w-3xl leading-8 text-slate-300">{featuredProject.value}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-4">
                {featuredProject.metrics.map((metric) => (
                  <span key={metric} className="rounded-md border border-slate-700 bg-slate-900 p-3 text-sm font-bold text-slate-100">
                    {metric}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/projects/${featuredProject.slug}`} className="rounded-md bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-slate-100">
                  Open Banking Demo
                </Link>
                {featuredProject.readme ? (
                  <a href={featuredProject.readme} className="rounded-md border border-slate-600 px-5 py-3 text-sm font-bold text-white hover:border-slate-400">
                    Read GitHub README
                  </a>
                ) : null}
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">What hiring managers should see fast</p>
              <div className="mt-5 grid gap-3">
                {[
                  "Banking KPIs tied to source lineage and ownership",
                  "Medallion architecture with semantic and governance layers",
                  "AI insights grounded in certified data products",
                  "Roadmap, backlog, personas, risks, and success metrics"
                ].map((item) => (
                  <div key={item} className="rounded-md border border-slate-200 bg-slate-50 p-4 font-semibold leading-6 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
        <div className="grid gap-5 md:grid-cols-3">
          {remainingProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Target roles" title="Where this work creates value">
        <div className="grid gap-4 md:grid-cols-4">
          {outcomes.map(([title, body]) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="What I build" title="Analytics products for regulated enterprises">
        <div className="grid gap-4 md:grid-cols-5">
          {capabilities.map((capability) => (
            <div key={capability.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-950">{capability.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{capability.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
