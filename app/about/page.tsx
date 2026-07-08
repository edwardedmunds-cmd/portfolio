import { Section } from "@/components/Section";

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pt-14">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">About</p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
          Data product leadership at the intersection of analytics, governance, and execution
        </h1>
      </section>
      <Section
        title="Leadership focus"
        description="Ted Edmunds builds practical data products for environments where trust, risk, speed, and stakeholder alignment matter. This portfolio is shaped for roles that need analytics leadership across business, technology, governance, and AI adoption."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Product mindset", "Translate ambiguous business priorities into KPI definitions, dashboard workflows, adoption plans, and measurable operating outcomes."],
            ["Platform thinking", "Design reusable data models, governance patterns, and secure analytics foundations that can support multiple teams and use cases."],
            ["Executive communication", "Frame complex data work around decision quality, risk reduction, business value, and delivery momentum."]
          ].map(([title, body]) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-950">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Industry fit" title="Built for regulated data environments">
        <div className="grid gap-4 md:grid-cols-4">
          {["Banking risk and Customer 360", "Insurance claims and member journeys", "Healthcare analytics and regulatory signals", "Enterprise AI governance and data platforms"].map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 font-semibold leading-7 text-slate-800 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
