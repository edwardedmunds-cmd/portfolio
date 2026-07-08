import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section className={`mx-auto max-w-7xl px-5 py-14 ${className}`}>
      <div className="mb-8 max-w-3xl">
        {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">{eyebrow}</p> : null}
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
