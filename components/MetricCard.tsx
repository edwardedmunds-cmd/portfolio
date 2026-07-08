type MetricCardProps = {
  label: string;
  value: string;
  detail?: string;
  tone?: "default" | "blue" | "teal" | "amber";
};

const tones = {
  default: "border-slate-200 bg-white",
  blue: "border-blue-200 bg-blue-50",
  teal: "border-teal-200 bg-teal-50",
  amber: "border-amber-200 bg-amber-50"
};

export function MetricCard({ label, value, detail, tone = "default" }: MetricCardProps) {
  return (
    <div className={`rounded-lg border p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${tones[tone]}`}>
      <p className="text-sm font-medium text-slate-600">{label}</p>
      <p className="mt-3 text-3xl font-bold text-slate-950">{value}</p>
      {detail ? <p className="mt-2 text-sm text-slate-500">{detail}</p> : null}
    </div>
  );
}
