import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pt-14">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Projects</p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
          Case studies for enterprise data product leadership
        </h1>
      </section>
      <Section
        title="Live product surfaces with case-study framing"
        description="These projects are designed for healthcare-first hiring conversations while showing portable data product leadership across banking, insurance, AI governance, and enterprise analytics. Confidential data is excluded; demos use public or fictional portfolio-safe data."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </main>
  );
}
