import { Section } from "@/components/Section";
import { SITE_LINKS } from "@/lib/site";

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pt-14">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Contact</p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
          Talk about data product leadership roles
        </h1>
      </section>
      <Section
        title="Contact points"
        description="Best fit: leadership roles involving banking, insurance, healthcare, enterprise analytics, AI-ready data platforms, governance, and executive dashboard product work."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Email", SITE_LINKS.email, `mailto:${SITE_LINKS.email}`],
            ["LinkedIn", "Connect and discuss fit", SITE_LINKS.linkedin],
            ["GitHub", "Review portfolio code", SITE_LINKS.github]
          ].map(([label, value, href]) => (
            <a key={label} href={href} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-400">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">{label}</p>
              <p className="mt-3 text-lg font-bold text-slate-950">{value}</p>
            </a>
          ))}
        </div>
      </Section>
    </main>
  );
}
