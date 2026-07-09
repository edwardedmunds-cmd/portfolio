import Link from "next/link";
import { BankArchitectureDiagram } from "@/components/BankArchitectureDiagram";
import { BankingDashboard } from "@/components/BankingDashboard";
import { DataTable } from "@/components/DataTable";
import { Section } from "@/components/Section";
import {
  backlog,
  dataQualityRules,
  dataSources,
  executiveInsights,
  executiveStakeholders,
  glossary,
  governanceAssumptions,
  kpiDefinitions,
  lineageExamples,
  productTradeoffs,
  roadmap,
  successMetrics
} from "@/data/modernBankData";

const caseStudyBlocks = [
  {
    title: "Problem",
    body: "Regional and national banks often have strong reporting teams, but fragmented definitions across deposits, lending, complaints, risk, and digital channels make executive decisions slower than they should be."
  },
  {
    title: "Business challenge",
    body: "Leadership needs growth, margin, risk, complaint, and AI-readiness signals in one place, with enough governance evidence to trust the numbers in board, risk, and product investment conversations."
  },
  {
    title: "Solution",
    body: "Design a governed banking data product that moves source data through bronze, silver, gold, semantic, dashboard, and AI layers while surfacing quality, lineage, ownership, and policy controls directly in the user experience."
  },
  {
    title: "Business impact",
    body: "The demo shows how a bank could reduce metric disputes, spot emerging customer issues faster, prioritize data remediation, and prepare AI use cases on top of certified data products."
  }
];

const personas = [
  { role: "CFO / executive committee", need: "Board-ready deposit, loan, margin, and risk trends with certified definitions." },
  { role: "Chief Data Officer", need: "Funding and prioritization signals for data products, ownership, lineage, and quality remediation." },
  { role: "Director of Analytics", need: "Reusable semantic metrics and trusted marts for dashboards, analysis, and self-service reporting." },
  { role: "Enterprise architect", need: "A clear reference architecture connecting operational systems, governance, security, analytics, and AI." },
  { role: "AI product manager", need: "Approved data products, consent-aware metadata, and evidence-backed executive AI outputs." }
];

const lessons = [
  "Executive dashboards are only persuasive when metric definitions, owners, and exceptions are visible.",
  "AI readiness is a data product outcome, not a model feature.",
  "Complaint analytics becomes more useful when joined to product, customer, region, and operational ownership.",
  "A portfolio demo should show the tradeoffs a real product team would make, not just ideal-state architecture."
];

export default function ModernBankDataPlatformPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Featured banking data product</p>
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">Modern Bank Data Platform</h1>
            <p className="mt-5 max-w-4xl text-xl leading-9 text-slate-600">
              A consulting-style portfolio demo showing how a bank can turn fragmented source data into certified KPIs, governed AI insights,
              executive decision support, and a practical data product roadmap.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#dashboard" className="rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">
                View Dashboard
              </a>
              <a
                href="https://github.com/edwardedmunds-cmd/portfolio/blob/main/docs/modern-bank-data-platform/README.md"
                className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:border-slate-500"
              >
                GitHub README
              </a>
              <a
                href="https://github.com/edwardedmunds-cmd/portfolio/tree/main/app/projects/banking-data-platform"
                className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:border-slate-500"
              >
                GitHub Repo
              </a>
              <Link href="/projects" className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:border-slate-500">
                All Projects
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Hiring signal</p>
            <p className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
              Data product leadership for banking analytics, governance, and AI readiness.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {["Executive KPIs", "Medallion architecture", "Governance controls", "AI evidence layer"].map((item) => (
                <span key={item} className="rounded-md border border-slate-200 bg-slate-50 p-3 font-semibold text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Case study" title="Problem, solution, and impact">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {caseStudyBlocks.map((block) => (
            <div key={block.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-950">{block.title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{block.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Data strategy" title="Public and synthetic source strategy">
        <DataTable
          minWidth="860px"
          columns={[
            { key: "name", label: "Dataset", render: (row: (typeof dataSources)[number]) => <strong className="text-slate-800">{row.name}</strong> },
            { key: "use", label: "Business use", render: (row: (typeof dataSources)[number]) => row.use },
            { key: "mode", label: "Portfolio-safe mode", render: (row: (typeof dataSources)[number]) => row.mode }
          ]}
          rows={dataSources}
        />
      </Section>

      <section id="architecture">
        <Section
          eyebrow="Architecture"
          title="From source systems to certified metrics and AI copilot"
          description="The architecture mirrors what a modern bank would need: medallion layers, semantic definitions, governance metadata, security controls, monitoring, and AI outputs grounded in trusted data."
        >
          <BankArchitectureDiagram />
        </Section>
      </section>

      <section id="dashboard">
        <Section
          eyebrow="Dashboard"
          title="Executive operating review"
          description="A realistic executive dashboard with balance sheet trends, credit and complaint indicators, customer segments, data quality, and AI-generated insights backed by evidence."
        >
          <BankingDashboard />
        </Section>
      </section>

      <section id="executive-insights">
      <Section eyebrow="AI layer" title="Why AI needs clean, governed data">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950">Product decision</h3>
            <p className="mt-3 leading-8 text-slate-600">
              The AI copilot is intentionally positioned after the gold and semantic layers. Executive summaries should only use approved
              data products with clear ownership, lineage, sensitivity classification, and quality thresholds.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              That makes AI a trusted consumption experience rather than an ungoverned narrative generator.
            </p>
          </div>
          <div className="grid gap-3">
            {executiveInsights.map((insight) => (
              <div key={insight.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-bold text-slate-950">{insight.title}</h3>
                  <span className="w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">{insight.confidence}</span>
                </div>
                <p className="mt-3 leading-7 text-slate-600">{insight.body}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">{insight.evidence}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      </section>

      <section id="governance">
      <Section eyebrow="Governance" title="Enterprise controls that make the product credible">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <DataTable
            minWidth="1100px"
            columns={[
              { key: "rule", label: "Rule", render: (row: (typeof dataQualityRules)[number]) => <strong className="text-slate-800">{row.rule}</strong> },
              { key: "cde", label: "CDE", render: (row: (typeof dataQualityRules)[number]) => row.cde },
              { key: "domain", label: "Domain", render: (row: (typeof dataQualityRules)[number]) => row.domain },
              { key: "current", label: "Current", render: (row: (typeof dataQualityRules)[number]) => row.current },
              { key: "owner", label: "Owner", render: (row: (typeof dataQualityRules)[number]) => row.owner },
              { key: "why", label: "Why it matters", render: (row: (typeof dataQualityRules)[number]) => row.why }
            ]}
            rows={dataQualityRules}
          />
          <ArtifactPanel title="Governance assumptions" items={governanceAssumptions.map((item) => `${item.topic}: ${item.detail}`)} />
        </div>
      </Section>
      </section>

      <Section eyebrow="Product management" title="Artifacts from an enterprise product team">
        <div className="grid gap-5 lg:grid-cols-2">
          <ArtifactPanel title="Executive stakeholders" items={executiveStakeholders.map((item) => `${item.group}: ${item.decision}`)} />
          <ArtifactPanel title="User personas" items={personas.map((persona) => `${persona.role}: ${persona.need}`)} />
          <DataTable
            minWidth="720px"
            columns={[
              { key: "quarter", label: "Quarter", render: (row: (typeof roadmap)[number]) => <strong className="text-slate-800">{row.quarter}</strong> },
              { key: "theme", label: "Theme", render: (row: (typeof roadmap)[number]) => row.theme },
              { key: "work", label: "Scope", render: (row: (typeof roadmap)[number]) => row.work },
              { key: "outcome", label: "Outcome", render: (row: (typeof roadmap)[number]) => row.outcome }
            ]}
            rows={roadmap}
          />
          <DataTable
            minWidth="720px"
            columns={[
              { key: "priority", label: "Priority", render: (row: (typeof backlog)[number]) => <strong className="text-slate-800">{row.priority}</strong> },
              { key: "story", label: "User story", render: (row: (typeof backlog)[number]) => row.story },
              { key: "acceptance", label: "Acceptance criteria", render: (row: (typeof backlog)[number]) => row.acceptance }
            ]}
            rows={backlog}
          />
        </div>
      </Section>

      <Section eyebrow="Definitions" title="Glossary, KPIs, success metrics, and lineage">
        <div className="grid gap-5 lg:grid-cols-2">
          <DataTable
            minWidth="760px"
            columns={[
              { key: "term", label: "Business glossary", render: (row: (typeof glossary)[number]) => <strong className="text-slate-800">{row.term}</strong> },
              { key: "definition", label: "Definition", render: (row: (typeof glossary)[number]) => row.definition }
            ]}
            rows={glossary}
          />
          <DataTable
            minWidth="760px"
            columns={[
              { key: "name", label: "KPI", render: (row: (typeof kpiDefinitions)[number]) => <strong className="text-slate-800">{row.name}</strong> },
              { key: "definition", label: "Definition", render: (row: (typeof kpiDefinitions)[number]) => row.definition },
              { key: "owner", label: "Owner", render: (row: (typeof kpiDefinitions)[number]) => row.owner },
              { key: "certification", label: "Status", render: (row: (typeof kpiDefinitions)[number]) => row.certification }
            ]}
            rows={kpiDefinitions}
          />
          <DataTable
            minWidth="760px"
            columns={[
              { key: "metric", label: "Success metric", render: (row: (typeof successMetrics)[number]) => <strong className="text-slate-800">{row.metric}</strong> },
              { key: "current", label: "Current", render: (row: (typeof successMetrics)[number]) => row.current },
              { key: "target", label: "Target", render: (row: (typeof successMetrics)[number]) => row.target },
              { key: "signal", label: "Why it matters", render: (row: (typeof successMetrics)[number]) => row.signal }
            ]}
            rows={successMetrics}
          />
          <ArtifactPanel title="Lineage examples" items={lineageExamples} />
        </div>
      </Section>

      <Section eyebrow="Tradeoffs" title="Product decisions, lessons learned, and future roadmap">
        <div className="grid gap-5 lg:grid-cols-3">
          <ArtifactPanel title="Tradeoffs" items={productTradeoffs} />
          <ArtifactPanel title="Lessons learned" items={lessons} />
          <ArtifactPanel title="Future roadmap" items={roadmap.map((item) => `${item.quarter}: ${item.outcome}`)} />
        </div>
      </Section>
    </main>
  );
}

function ArtifactPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-bold text-slate-950">{title}</h3>
      <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-600">
        {items.map((item) => (
          <li key={item} className="rounded-md border border-slate-200 bg-slate-50 p-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
