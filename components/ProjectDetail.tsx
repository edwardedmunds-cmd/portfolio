import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Section } from "@/components/Section";
import { SITE_LINKS } from "@/lib/site";
import type { ReactNode } from "react";

type ProjectDetailProps = {
  title: string;
  subtitle: string;
  repo: string;
  dashboard: ReactNode;
  problem: string;
  outcome: string;
  stakeholders: string[];
  architecture: string[];
  pipeline: string;
  stack: string[];
  decisions: string[];
  challenges?: string[];
  lessons?: string[];
  future?: string[];
  hiringSignal: string;
};

export function ProjectDetail({
  title,
  subtitle,
  repo,
  dashboard,
  problem,
  outcome,
  stakeholders,
  architecture,
  pipeline,
  stack,
  decisions,
  challenges = [],
  lessons = [],
  future = [],
  hiringSignal
}: ProjectDetailProps) {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Project detail</p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-600">{subtitle}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#dashboard" className="inline-flex rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">
            View Dashboard
          </a>
          <a href={repo} className="inline-flex rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:border-slate-500">
            Review GitHub repo
          </a>
          <a href={`mailto:${SITE_LINKS.email}`} className="inline-flex rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:border-slate-500">
            Contact
          </a>
        </div>
      </section>

      <Section eyebrow="Case study" title="Business Problem and Product Vision">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">Business Problem</h2>
            <p className="mt-3 leading-8 text-slate-600">{problem}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">Product Vision</h2>
            <p className="mt-3 leading-8 text-slate-600">{outcome}</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Users" title="Product Users">
        <div className="grid gap-3 md:grid-cols-4">
          {stakeholders.map((stakeholder) => (
            <div key={stakeholder} className="rounded-lg border border-slate-200 bg-white p-5 font-semibold text-slate-800 shadow-sm">
              {stakeholder}
            </div>
          ))}
        </div>
      </Section>

      <section id="dashboard">
        <Section
          eyebrow="Live product"
          title="Interactive Dashboard"
          description="All confidential data is excluded. Portfolio demos use public data or fictional, portfolio-safe sample data to show KPI hierarchy, trust signals, filtering, and regulated-enterprise product workflows."
        >
          {dashboard}
        </Section>
      </section>

      <Section eyebrow="Architecture" title="Architecture">
        <ArchitectureDiagram nodes={architecture} />
      </Section>

      <Section eyebrow="Technical Stack" title="Data model, pipeline, and implementation">
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
          <p className="rounded-lg border border-slate-200 bg-white p-6 leading-8 text-slate-600 shadow-sm">{pipeline}</p>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-slate-950">Technology stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Data Product Decisions" title="Governance, UX, and architecture choices">
        <div className="grid gap-4 md:grid-cols-3">
          {decisions.map((decision) => (
            <div key={decision} className="rounded-lg border border-slate-200 bg-white p-5 leading-7 text-slate-600 shadow-sm">
              {decision}
            </div>
          ))}
        </div>
      </Section>

      {challenges.length || lessons.length || future.length ? (
        <Section eyebrow="Execution Notes" title="Challenges solved, lessons learned, and future enhancements">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-950">Challenges Solved</h3>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600">
                {challenges.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-950">Lessons Learned</h3>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600">
                {lessons.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-950">Future Enhancements</h3>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600">
                {future.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </Section>
      ) : null}

      <Section eyebrow="What This Demonstrates" title="What this demonstrates to hiring managers">
        <p className="max-w-4xl rounded-lg border border-slate-200 bg-white p-6 text-lg leading-8 text-slate-600 shadow-sm">{hiringSignal}</p>
      </Section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Interested in this kind of data product leadership?</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Connect for roles involving enterprise analytics, regulated data platforms, executive dashboards, governance, and AI-ready product strategy.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 md:mt-0">
            <a href={SITE_LINKS.linkedin} className="rounded-md bg-white px-4 py-2 text-sm font-bold text-slate-950">
              LinkedIn
            </a>
            <a href="/resume" className="rounded-md border border-slate-600 px-4 py-2 text-sm font-bold text-white">
              Resume
            </a>
            <a href="/contact" className="rounded-md border border-slate-600 px-4 py-2 text-sm font-bold text-white">
              Contact
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
