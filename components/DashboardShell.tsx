import { BrowserFrame } from "@/components/BrowserFrame";
import { StatusBadge } from "@/components/StatusBadge";

type DashboardShellProps = {
  title: string;
  eyebrow: string;
  description: string;
  status: string;
  statusTone?: "green" | "blue" | "amber" | "red" | "slate";
  children: React.ReactNode;
};

export function DashboardShell({ title, eyebrow, description, status, statusTone = "green", children }: DashboardShellProps) {
  return (
    <BrowserFrame title="portfolio product demo / dashboard">
      <div className="border-b border-slate-200 bg-slate-950 p-5 text-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">{eyebrow}</p>
            <h3 className="mt-2 text-2xl font-bold">{title}</h3>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-300">{description}</p>
          </div>
          <StatusBadge tone={statusTone}>{status}</StatusBadge>
        </div>
      </div>
      <div className="space-y-5 bg-slate-50 p-4 md:p-5">{children}</div>
    </BrowserFrame>
  );
}
