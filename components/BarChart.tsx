type ChartPoint = {
  label: string;
  value: number;
  secondary?: number;
};

type BarChartProps = {
  data: ChartPoint[];
  max?: number;
  secondaryLabel?: string;
};

export function BarChart({ data, max, secondaryLabel }: BarChartProps) {
  const ceiling = max ?? Math.max(...data.map((item) => item.value));

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-base font-bold text-slate-950">Weekly trend</h3>
        {secondaryLabel ? <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{secondaryLabel}</span> : null}
      </div>
      <div className="flex h-64 items-end gap-3">
        {data.map((item) => (
          <div key={item.label} className="flex h-full flex-1 flex-col justify-end gap-2">
            <div className="flex flex-1 items-end gap-1">
              <div
                className="w-full rounded-t bg-blue-600 transition-all duration-700"
                style={{ height: `${Math.max(8, (item.value / ceiling) * 100)}%` }}
                title={`${item.label}: ${item.value}`}
              />
              {item.secondary ? (
                <div
                  className="w-2 rounded-t bg-teal-500 transition-all duration-700"
                  style={{ height: `${Math.max(8, (item.secondary / ceiling) * 100)}%` }}
                  title={`${item.label}: ${item.secondary}`}
                />
              ) : null}
            </div>
            <span className="text-center text-xs font-medium text-slate-500">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
