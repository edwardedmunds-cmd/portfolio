type BrowserFrameProps = {
  title: string;
  children: React.ReactNode;
};

export function BrowserFrame({ title, children }: BrowserFrameProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 truncate rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500">{title}</span>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}
