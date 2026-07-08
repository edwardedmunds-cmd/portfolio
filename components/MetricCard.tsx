type MetricCardProps = {
  label: string;
  value: string;
  detail?: string;
  trend?: string;
  tone?: "default" | "blue" | "teal" | "amber" | "emerald" | "rose";
};

const tones = {
  default: "border-slate-200 bg-white",
  blue: "border-blue-200 bg-blue-50",
  teal: "border-teal-200 bg-teal-50",
  amber: "border-amber-200 bg-amber-50",
  emerald: "border-emerald-200 bg-emerald-50",
  rose: "border-rose-200 bg-rose-50"
};

export function MetricCard({ label, value, detail, trend, tone = "default" }: MetricCardProps) {
  return (
    <div className={`rounded-lg border p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${tones[tone]}`}>
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-bold text-slate-600">{label}</p>
        {trend ? <span className="rounded-full border border-white/80 bg-white/70 px-2 py-1 text-xs font-bold text-slate-700 shadow-sm">{trend}</span> : null}
      </div>
      <p className="mt-4 text-3xl font-bold tracking-tight text-slate-950">{value}</p>
      {detail ? <p className="mt-2 text-sm text-slate-500">{detail}</p> : null}
    </div>
  );
}
