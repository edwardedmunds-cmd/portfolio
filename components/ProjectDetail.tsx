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
  hiringSignal
}: ProjectDetailProps) {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Project detail</p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-600">{subtitle}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={repo} className="inline-flex rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">
            Review GitHub repo
          </a>
          <a href={SITE_LINKS.linkedin} className="inline-flex rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:border-slate-500">
            Discuss on LinkedIn
          </a>
        </div>
      </section>

      <Section eyebrow="Case study" title="Business problem and product outcome">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">Business problem</h2>
            <p className="mt-3 leading-8 text-slate-600">{problem}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">Product outcome</h2>
            <p className="mt-3 leading-8 text-slate-600">{outcome}</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Users" title="Users and stakeholders">
        <div className="grid gap-3 md:grid-cols-4">
          {stakeholders.map((stakeholder) => (
            <div key={stakeholder} className="rounded-lg border border-slate-200 bg-white p-5 font-semibold text-slate-800 shadow-sm">
              {stakeholder}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Live product"
        title="Dashboard product surface"
        description="All data is fictional and portfolio-safe. The dashboard is designed to show KPI hierarchy, trust signals, filtering, and the kind of product experience a regulated enterprise team could use in working sessions."
      >
        {dashboard}
      </Section>

      <Section eyebrow="Architecture" title="How the product would be organized">
        <ArchitectureDiagram nodes={architecture} />
      </Section>

      <Section eyebrow="Data model" title="Data model and pipeline explanation">
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

      <Section eyebrow="Product decisions" title="What I optimized for">
        <div className="grid gap-4 md:grid-cols-3">
          {decisions.map((decision) => (
            <div key={decision} className="rounded-lg border border-slate-200 bg-white p-5 leading-7 text-slate-600 shadow-sm">
              {decision}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Hiring signal" title="What this demonstrates to hiring managers">
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
