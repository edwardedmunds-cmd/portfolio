type ArchitectureDiagramProps = {
  nodes: string[];
};

const layers = [
  { label: "Source systems", detail: "FDA AccessGUDID release archive", color: "border-blue-200 bg-blue-50" },
  { label: "Ingestion", detail: "Download, raw ZIP cache, validation", color: "border-teal-200 bg-teal-50" },
  { label: "Raw / staging", detail: "Pipe-delimited files loaded to SQLite", color: "border-slate-200 bg-slate-50" },
  { label: "Quality / transform", detail: "Normalized devices, counts, impact scores", color: "border-amber-200 bg-amber-50" },
  { label: "Product layer", detail: "Express REST API and analytics views", color: "border-emerald-200 bg-emerald-50" },
  { label: "Experience", detail: "React / Next.js dashboard", color: "border-indigo-200 bg-indigo-50" }
];

export function ArchitectureDiagram({ nodes }: ArchitectureDiagramProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-950">Reference architecture</h3>
          <p className="mt-1 text-sm text-slate-500">Executive view of source, ingestion, analytics, governance, and dashboard delivery.</p>
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-500">
          Public data / governed pipeline
        </span>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-4">
        <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" aria-hidden="true">
          <defs>
            <marker id="arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
              <path d="M0,0 L8,4 L0,8 Z" fill="#94a3b8" />
            </marker>
          </defs>
          <line x1="14%" y1="50%" x2="86%" y2="50%" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />
        </svg>
        <div className="relative grid gap-3 md:grid-cols-6">
          {layers.map((layer, index) => (
            <div key={layer.label} className={`rounded-lg border p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${layer.color}`}>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">0{index + 1}</p>
              <p className="mt-2 font-bold text-slate-950">{layer.label}</p>
              <p className="mt-2 text-xs leading-5 text-slate-600">{nodes[index] ?? layer.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {["GitHub Actions weekly refresh", "Governance and traceability", "Portfolio dashboard and API consumers"].map((item) => (
          <div key={item} className="rounded-md border border-slate-200 bg-white p-3 text-sm font-semibold text-slate-700 shadow-sm">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
