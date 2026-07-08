type ArchitectureDiagramProps = {
  nodes: string[];
};

export function ArchitectureDiagram({ nodes }: ArchitectureDiagramProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-5 text-base font-bold text-slate-950">Reference architecture</h3>
      <div className="grid gap-3 md:grid-cols-5">
        {nodes.map((node, index) => (
          <div key={node} className="relative rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">{node}</p>
            {index < nodes.length - 1 ? (
              <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-slate-300 md:block" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
