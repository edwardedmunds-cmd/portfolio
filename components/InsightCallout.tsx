type InsightCalloutProps = {
  title: string;
  body: string;
  tone?: "blue" | "teal" | "amber";
};

const tones = {
  blue: "border-blue-200 bg-blue-50 text-blue-950",
  teal: "border-teal-200 bg-teal-50 text-teal-950",
  amber: "border-amber-200 bg-amber-50 text-amber-950"
};

export function InsightCallout({ title, body, tone = "blue" }: InsightCalloutProps) {
  return (
    <div className={`rounded-lg border p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-sm ${tones[tone]}`}>
      <p className="text-sm font-bold">{title}</p>
      <p className="mt-2 text-sm leading-6 opacity-80">{body}</p>
    </div>
  );
}
