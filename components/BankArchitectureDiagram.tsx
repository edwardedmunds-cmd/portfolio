const medallionLayers = [
  { title: "Source systems", detail: "Core banking, loan servicing, CRM, digital events, CFPB complaints, FRED macro data, FFIEC benchmarks" },
  { title: "Bronze", detail: "Raw immutable extracts, schema capture, ingestion audit logs, source freshness checks" },
  { title: "Silver", detail: "Standardized customers, accounts, loans, complaints, balances, risk grades, consent attributes" },
  { title: "Gold", detail: "Certified KPI marts, Customer 360, complaint analytics, credit risk indicators, semantic metrics" },
  { title: "Analytics and AI", detail: "Executive dashboards, risk committee views, governed retrieval, AI-generated summaries" }
];

const platformCapabilities = [
  "Data catalog and glossary",
  "Lineage and quality rules",
  "Policy and consent controls",
  "Semantic layer",
  "Role-based access",
  "Audit and monitoring"
];

const securityControls = [
  "Identity-aware access",
  "PII tokenization",
  "Least privilege roles",
  "Usage logging",
  "Model output review",
  "Retention policies"
];

export function BankArchitectureDiagram() {
  return (
    <div className="space-y-5">
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950">Medallion data product flow</h3>
            <p className="mt-1 text-sm text-slate-500">Source systems move through governed bronze, silver, and gold layers before analytics and AI consumption.</p>
          </div>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-500">
            Portfolio-safe reference design
          </span>
        </div>
        <div className="grid gap-3 lg:grid-cols-5">
          {medallionLayers.map((layer, index) => (
            <div key={layer.title} className="relative rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-teal-700">0{index + 1}</p>
              <h4 className="mt-2 font-bold text-slate-950">{layer.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">{layer.detail}</p>
              {index < medallionLayers.length - 1 ? (
                <span className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-slate-300 bg-slate-50 lg:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-bold text-slate-950">Governance and semantic layer</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {platformCapabilities.map((item) => (
              <div key={item} className="rounded-md border border-blue-100 bg-blue-50 p-3 text-sm font-semibold text-blue-950">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-950 p-5 text-white shadow-sm">
          <h3 className="text-base font-bold">High-level security model</h3>
          <div className="mt-4 grid gap-2">
            {securityControls.map((item) => (
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
