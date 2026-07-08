import Link from "next/link";
import { BankArchitectureDiagram } from "@/components/BankArchitectureDiagram";
import { BankingDashboard } from "@/components/BankingDashboard";
import { DataTable } from "@/components/DataTable";
import { Section } from "@/components/Section";
import {
  backlog,
  dataQualityRules,
  dataSources,
  glossary,
  governanceAssumptions,
  lineageExamples,
  roadmap
} from "@/data/modernBankData";

const personas = [
  { role: "CFO / executive committee", need: "Certified deposits, loan growth, margin, and risk trends for board-ready decisions." },
  { role: "Chief Data Officer", need: "Visible ownership, quality, lineage, and platform investment signals tied to business value." },
  { role: "Risk and compliance leader", need: "Complaint, credit, liquidity, and operational risk indicators with explainable definitions." },
  { role: "AI product manager", need: "Approved data products, consent-aware metadata, and reliable context for executive AI summaries." }
];

const kpiDefinitions = [
  { name: "Complaint rate", definition: "Consumer complaints per 10,000 active customers, grouped by product family and severity." },
  { name: "AI readiness index", definition: "Weighted score for data quality, freshness, lineage, sensitivity tagging, and policy coverage." },
  { name: "Certified KPI coverage", definition: "Share of executive metrics with approved definition, owner, source lineage, and refresh SLA." },
  { name: "Loan growth", definition: "Period-over-period change in outstanding loan balances by product, segment, and risk grade." }
];

const risks = [
  "Metric drift if dashboard logic is not governed through a semantic layer.",
  "AI summaries could overstate certainty without confidence thresholds and human review.",
  "Complaint themes may be biased by channel adoption, response practices, or missing product mapping.",
  "Production use would require privacy engineering, retention controls, and regulator-ready audit evidence."
];

export default function ModernBankDataPlatformPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Enterprise banking data product</p>
        <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">Modern Bank Data Platform</h1>
        <p className="mt-5 max-w-4xl text-xl leading-9 text-slate-600">
          A portfolio-ready demo for banking leaders: governed medallion architecture, executive KPIs, complaint analytics, credit risk signals,
          AI-ready data foundations, and product artifacts that show how a platform becomes a decision-support capability.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#dashboard" className="rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">
            View Live Demo
          </a>
          <a
            href="https://github.com/tededmunds/portfolio/blob/main/docs/modern-bank-data-platform/README.md"
            className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:border-slate-500"
          >
            GitHub README
          </a>
          <Link href="/projects" className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:border-slate-500">
            All Projects
          </Link>
        </div>
      </section>

      <Section eyebrow="Executive overview" title="Business problem and value">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Problem statement", "Banks need trusted, governed data products for growth, risk, complaints, and AI, but critical metrics often live across fragmented systems and inconsistent definitions."],
            ["Business value", "The demo connects customer, account, loan, complaint, and macro data into board-ready KPIs with visible quality, lineage, governance, and AI readiness signals."],
            ["Product positioning", "This is a data product management artifact: it frames platform health as an operating metric and shows what executives, risk teams, and AI teams need to make decisions."]
          ].map(([title, body]) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-950">{title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Data sources" title="Public and synthetic data strategy">
        <DataTable
          minWidth="760px"
          columns={[
            { key: "name", label: "Dataset", render: (row: (typeof dataSources)[number]) => <strong className="text-slate-800">{row.name}</strong> },
            { key: "use", label: "Demo use", render: (row: (typeof dataSources)[number]) => row.use },
            { key: "mode", label: "Integration mode", render: (row: (typeof dataSources)[number]) => row.mode }
          ]}
          rows={dataSources}
        />
      </Section>

      <Section
        eyebrow="Architecture"
        title="Source systems to bronze, silver, gold, analytics, and AI"
        description="The architecture is intentionally portfolio-friendly: static seed data powers the demo today, while the README documents how CFPB, FRED, FFIEC, and banking source feeds would plug into the same flow."
      >
        <BankArchitectureDiagram />
      </Section>

      <section id="dashboard">
        <Section
          eyebrow="Dashboard experience"
          title="Executive analytics and AI-ready data controls"
          description="All numbers are realistic sample values generated for a public portfolio. No private customer, account, transaction, or institution data is included."
        >
          <BankingDashboard />
        </Section>
      </section>

      <Section eyebrow="Product artifacts" title="Personas, glossary, KPIs, roadmap, and backlog">
        <div className="grid gap-5 lg:grid-cols-2">
          <ArtifactPanel title="User personas" items={personas.map((persona) => `${persona.role}: ${persona.need}`)} />
          <ArtifactPanel title="Sample roadmap" items={roadmap.map((item) => `${item.quarter} - ${item.theme}: ${item.work}`)} />
          <DataTable
            minWidth="620px"
            columns={[
              { key: "term", label: "Business glossary", render: (row: (typeof glossary)[number]) => <strong className="text-slate-800">{row.term}</strong> },
              { key: "definition", label: "Definition", render: (row: (typeof glossary)[number]) => row.definition }
            ]}
            rows={glossary}
          />
          <DataTable
            minWidth="620px"
            columns={[
              { key: "name", label: "KPI", render: (row: (typeof kpiDefinitions)[number]) => <strong className="text-slate-800">{row.name}</strong> },
              { key: "definition", label: "Definition", render: (row: (typeof kpiDefinitions)[number]) => row.definition }
            ]}
            rows={kpiDefinitions}
          />
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <ArtifactPanel title="Backlog and user stories" items={backlog} />
          <ArtifactPanel title="Lineage examples" items={lineageExamples} />
        </div>
      </Section>

      <Section eyebrow="Governance" title="Data quality rules, risks, and assumptions">
        <DataTable
          columns={[
            { key: "rule", label: "Rule", render: (row: (typeof dataQualityRules)[number]) => <strong className="text-slate-800">{row.rule}</strong> },
            { key: "domain", label: "Domain", render: (row: (typeof dataQualityRules)[number]) => row.domain },
            { key: "threshold", label: "Target", render: (row: (typeof dataQualityRules)[number]) => row.threshold },
            { key: "current", label: "Current", render: (row: (typeof dataQualityRules)[number]) => row.current },
            { key: "owner", label: "Owner", render: (row: (typeof dataQualityRules)[number]) => row.owner }
          ]}
          rows={dataQualityRules}
        />
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <ArtifactPanel title="Risks and mitigations" items={risks} />
          <ArtifactPanel title="Governance assumptions" items={governanceAssumptions} />
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
