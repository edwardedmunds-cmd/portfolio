const flowLayers = [
  { title: "Source systems", detail: "Core banking, loan servicing, CRM, digital channels, CFPB, FRED, FFIEC, synthetic seed data", tone: "border-slate-300 bg-white" },
  { title: "Bronze", detail: "Raw immutable extracts, schema capture, landing zones, ingestion logs, source freshness", tone: "border-amber-200 bg-amber-50" },
  { title: "Silver", detail: "Standardized customer, account, loan, complaint, balance, risk, consent, and region entities", tone: "border-slate-300 bg-slate-50" },
  { title: "Gold", detail: "Certified KPI marts, Customer 360, risk indicators, complaint analytics, executive aggregates", tone: "border-yellow-200 bg-yellow-50" },
  { title: "Semantic layer", detail: "Shared definitions for deposits, loan growth, NIM, delinquency, complaints, AI readiness", tone: "border-blue-200 bg-blue-50" },
  { title: "Executive dashboards", detail: "Operating review, risk committee scorecard, complaint trends, data quality scorecard", tone: "border-teal-200 bg-teal-50" },
  { title: "AI copilot", detail: "Evidence-grounded summaries, anomaly prompts, next-best investigation, governed retrieval", tone: "border-emerald-200 bg-emerald-50" }
];

const governanceCapabilities = [
  { title: "Metadata", detail: "Dataset owner, refresh SLA, sensitivity, usage constraints" },
  { title: "Business glossary", detail: "Certified KPI and critical data element definitions" },
  { title: "Data catalog", detail: "Discoverable data products with approval status" },
  { title: "Lineage", detail: "Source-to-metric traceability for audit and trust" },
  { title: "Data quality", detail: "Rules, thresholds, exceptions, remediation owners" },
  { title: "Master data", detail: "Customer identity resolution and householding" }
];

const operatingControls = [
  "Role-based access",
  "PII classification",
  "Audit logging",
  "Retention policies",
  "Model evaluation",
  "Pipeline monitoring"
];

export function BankArchitectureDiagram() {
  return (
    <div data-testid="bank-architecture" className="space-y-5">
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950">Modern bank data product architecture</h3>
            <p className="mt-1 text-sm text-slate-500">A governed path from operational systems to certified analytics and evidence-grounded AI.</p>
          </div>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-500">
            Cloud medallion pattern
          </span>
        </div>

        <div className="grid gap-3 xl:grid-cols-7">
          {flowLayers.map((layer, index) => (
            <div key={layer.title} className={`relative rounded-lg border p-4 shadow-sm ${layer.tone}`}>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">0{index + 1}</p>
              <h4 className="mt-2 font-bold text-slate-950">{layer.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">{layer.detail}</p>
              {index < flowLayers.length - 1 ? (
                <span className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-slate-300 bg-inherit xl:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-bold text-slate-950">Governance and metadata control plane</h3>
          <p className="mt-1 text-sm text-slate-500">These capabilities make the dashboard and AI layer defensible in a regulated bank.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {governanceCapabilities.map((item) => (
              <div key={item.title} className="rounded-md border border-blue-100 bg-blue-50 p-3">
                <p className="text-sm font-bold text-blue-950">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-blue-900/80">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-950 p-5 text-white shadow-sm">
          <h3 className="text-base font-bold">Security, monitoring, and AI controls</h3>
          <p className="mt-1 text-sm text-slate-400">Controls that protect sensitive data and create audit-ready evidence.</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {operatingControls.map((item) => (
              <div key={item} className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
