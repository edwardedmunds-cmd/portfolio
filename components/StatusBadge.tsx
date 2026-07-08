import { cx } from "@/lib/utils";

type StatusBadgeProps = {
  children: React.ReactNode;
  tone?: "default" | "green" | "blue" | "amber" | "red" | "slate";
};

const tones = {
  default: "border-slate-200 bg-slate-50 text-slate-700",
  green: "border-emerald-200 bg-emerald-50 text-emerald-800",
  blue: "border-blue-200 bg-blue-50 text-blue-800",
  amber: "border-amber-200 bg-amber-50 text-amber-800",
  red: "border-rose-200 bg-rose-50 text-rose-800",
  slate: "border-slate-300 bg-white text-slate-700"
};

export function StatusBadge({ children, tone = "default" }: StatusBadgeProps) {
  return <span className={cx("inline-flex rounded-full border px-2.5 py-1 text-xs font-bold", tones[tone])}>{children}</span>;
}
