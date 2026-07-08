type LineageDiagramProps = {
  steps: Array<{ title: string; detail: string }>;
};

export function LineageDiagram({ steps }: LineageDiagramProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-3 md:grid-cols-6">
        {steps.map((step, index) => (
          <div key={step.title} className="relative rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:shadow-sm">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">{index + 1}</div>
            <p className="font-bold text-slate-950">{step.title}</p>
            <p className="mt-2 text-xs leading-5 text-slate-500">{step.detail}</p>
            {index < steps.length - 1 ? <span className="absolute -right-3 top-8 hidden h-px w-6 bg-slate-300 md:block" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
