import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
    >
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">{project.eyebrow}</p>
      <h3 className="mt-3 text-xl font-bold text-slate-950">{project.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate-600">{project.summary}</p>
      <p className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm font-semibold leading-6 text-slate-700">{project.value}</p>
      <div className="mt-5 grid grid-cols-2 gap-2 text-sm text-slate-600">
        {project.metrics.slice(0, 4).map((metric) => (
          <span key={metric} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
            {metric}
          </span>
        ))}
      </div>
      <span className="mt-5 text-sm font-bold text-blue-700 group-hover:text-blue-900">Read case study and dashboard</span>
    </Link>
  );
}
