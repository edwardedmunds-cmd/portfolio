import { BarChart } from "@/components/BarChart";
import { DataTable } from "@/components/DataTable";
import { MetricCard } from "@/components/MetricCard";
import {
  bankExecutiveKpis,
  complaintTrend,
  customerSegments,
  dataQualityRules,
  depositTrend,
  executiveInsights,
  riskIndicators,
  successMetrics
} from "@/data/modernBankData";

export function BankingDashboard() {
  return (
    <div data-testid="bank-dashboard" className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
      <div className="border-b border-slate-200 bg-slate-950 p-5 text-white">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-300">Executive operating review</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">Modern Bank Data Platform</h3>
            <p className="mt-2 max-w-4xl leading-7 text-slate-300">
              Growth, risk, customer experience, governance, and AI-readiness in one certified banking data product surface.
            </p>
          </div>
          <div className="grid gap-2 text-sm sm:grid-cols-3 lg:min-w-[420px]">
            <HeaderStat label="Reporting period" value="Jun 2026" />
            <HeaderStat label="KPI certification" value="76%" />
            <HeaderStat label="Data products" value="12" />
          </div>
        </div>
      </div>

      <div className="space-y-5 p-4 md:p-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bankExecutiveKpis.map((kpi) => (
            <MetricCard key={kpi.label} {...kpi} />
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
          <BarChart data={depositTrend} max={45} title="Balance sheet momentum" primaryLabel="Deposits, $B" secondaryLabel="Loans, $B" />
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-950">AI-generated executive insights</h3>
                <p className="mt-1 text-sm text-slate-500">Each insight is grounded in certified or review-ready data products.</p>
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">Evidence required</span>
            </div>
            <div className="grid gap-3">
              {executiveInsights.map((insight) => (
                <div key={insight.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-bold text-slate-950">{insight.title}</p>
                    <span className="w-fit rounded-full bg-white px-2.5 py-1 text-xs font-bold text-slate-600 shadow-sm">{insight.confidence}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{insight.body}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">{insight.evidence}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
          <BarChart data={complaintTrend} max={1400} title="Complaint trend and severity" primaryLabel="Complaints" secondaryLabel="High severity" />
          <DataTable
            minWidth="760px"
            columns={[
              { key: "metric", label: "Credit / risk indicator", render: (row: (typeof riskIndicators)[number]) => <strong className="text-slate-800">{row.metric}</strong> },
              { key: "value", label: "Value", render: (row: (typeof riskIndicators)[number]) => row.value },
              { key: "trend", label: "Trend", render: (row: (typeof riskIndicators)[number]) => row.trend },
              { key: "owner", label: "Owner", render: (row: (typeof riskIndicators)[number]) => row.owner },
              {
                key: "status",
                label: "Status",
                render: (row: (typeof riskIndicators)[number]) => (
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-700">{row.status}</span>
                )
              }
            ]}
            rows={riskIndicators}
          />
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-950">Customer segments and governed AI readiness</h3>
              <p className="mt-1 text-sm text-slate-500">Segment economics are shown beside quality controls so leaders can see where data is ready for action.</p>
            </div>
            <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Gold customer 360 mart</span>
          </div>
          <div className="grid gap-4">
            {customerSegments.map((segment) => (
              <div key={segment.segment} className="grid gap-4 rounded-lg border border-slate-200 p-4 md:grid-cols-[1fr_1.1fr_1fr] md:items-center">
                <div>
                  <p className="font-bold text-slate-950">{segment.segment}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {segment.customers} customers · {segment.growth} growth
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{segment.priority}</p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <MiniStat label="Deposits" value={segment.deposits} />
                  <MiniStat label="Loans" value={segment.loans} />
                  <MiniStat label="Digital" value={segment.digital} />
                </div>
                <div className="space-y-2">
                  <ScoreBar label="Quality" value={segment.quality} className="bg-blue-600" />
                  <ScoreBar label="AI readiness" value={segment.aiReady} className="bg-teal-600" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <DataTable
            minWidth="980px"
            columns={[
              { key: "rule", label: "Critical data rule", render: (row: (typeof dataQualityRules)[number]) => <strong className="text-slate-800">{row.rule}</strong> },
              { key: "cde", label: "CDE", render: (row: (typeof dataQualityRules)[number]) => row.cde },
              { key: "current", label: "Current", render: (row: (typeof dataQualityRules)[number]) => row.current },
              { key: "owner", label: "Owner", render: (row: (typeof dataQualityRules)[number]) => row.owner },
              { key: "steward", label: "Steward", render: (row: (typeof dataQualityRules)[number]) => row.steward }
            ]}
            rows={dataQualityRules}
          />
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-bold text-slate-950">Product success metrics</h3>
            <div className="mt-4 grid gap-3">
              {successMetrics.map((metric) => (
                <div key={metric.metric} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-950">{metric.metric}</p>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                    <span className="rounded-full bg-white px-2.5 py-1 shadow-sm">Current {metric.current}</span>
                    <span className="rounded-full bg-white px-2.5 py-1 shadow-sm">Target {metric.target}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{metric.signal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-1 font-bold text-white">{value}</p>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-slate-50 p-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 font-bold text-slate-950">{value}</p>
    </div>
  );
}

function ScoreBar({ label, value, className }: { label: string; value: number; className: string }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs font-semibold text-slate-500">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100">
        <div className={`h-2 rounded-full ${className}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
