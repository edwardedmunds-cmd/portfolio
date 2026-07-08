import { BarChart } from "@/components/BarChart";
import { DataTable } from "@/components/DataTable";
import { InsightCallout } from "@/components/InsightCallout";
import { MetricCard } from "@/components/MetricCard";
import {
  bankExecutiveKpis,
  complaintTrend,
  customerSegments,
  dataQualityRules,
  depositTrend,
  riskIndicators
} from "@/data/modernBankData";

export function BankingDashboard() {
  return (
    <div className="space-y-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Modern Bank Data Platform</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-950">Executive banking intelligence console</h3>
            <p className="mt-2 max-w-4xl leading-7 text-slate-600">
              A portfolio-safe dashboard showing how governed banking data products can support growth, risk visibility, complaint analytics,
              and AI-ready executive narratives.
            </p>
          </div>
          <div className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800">
            Demo data refreshed: Jun 2026
          </div>
        </div>
      </div>

      <div className="metric-grid">
        {bankExecutiveKpis.map((kpi) => (
          <MetricCard key={kpi.label} {...kpi} />
        ))}
      </div>

      <div className="dashboard-grid">
        <BarChart data={depositTrend} max={45} secondaryLabel="Deposits and loans, $B" />
        <div className="grid gap-4">
          <InsightCallout
            title="AI-generated executive summary"
            body="Deposits increased for the sixth consecutive month while loan growth remained controlled. Complaint volume improved 8.3% quarter over quarter, but commercial real estate exposure and loan risk grade completeness should stay on the executive watch list."
            tone="blue"
          />
          <InsightCallout
            title="Decision support signal"
            body="The platform recommends prioritizing risk-grade remediation, complaint theme monitoring, and semantic KPI certification before expanding AI pilots across commercial banking."
            tone="teal"
          />
          <InsightCallout
            title="Governance note"
            body="Synthetic demo data is used in this portfolio. Production deployment would require role-based access, audit trails, catalog certification, and model output review."
            tone="amber"
          />
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <BarChart data={complaintTrend} max={1400} secondaryLabel="Total complaints and high severity" />
        <DataTable
          minWidth="640px"
          columns={[
            { key: "metric", label: "Credit / risk indicator", render: (row: (typeof riskIndicators)[number]) => <strong className="text-slate-800">{row.metric}</strong> },
            { key: "value", label: "Value", render: (row: (typeof riskIndicators)[number]) => row.value },
            { key: "trend", label: "Trend", render: (row: (typeof riskIndicators)[number]) => row.trend },
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
            <h3 className="text-base font-bold text-slate-950">Customer segment performance and AI readiness</h3>
            <p className="mt-1 text-sm text-slate-500">Synthetic segments connect customer value, credit exposure, data quality, and approved AI use.</p>
          </div>
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Gold customer 360 mart</span>
        </div>
        <div className="grid gap-4">
          {customerSegments.map((segment) => (
            <div key={segment.segment} className="grid gap-4 rounded-lg border border-slate-200 p-4 md:grid-cols-[1.1fr_0.8fr_1fr] md:items-center">
              <div>
                <p className="font-bold text-slate-950">{segment.segment}</p>
                <p className="mt-1 text-sm text-slate-500">{segment.customers} customers</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{segment.priority}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-md bg-slate-50 p-3">
                  <p className="text-slate-500">Deposits</p>
                  <p className="mt-1 font-bold text-slate-950">{segment.deposits}</p>
                </div>
                <div className="rounded-md bg-slate-50 p-3">
                  <p className="text-slate-500">Loans</p>
                  <p className="mt-1 font-bold text-slate-950">{segment.loans}</p>
                </div>
              </div>
              <div className="space-y-2">
                <ScoreBar label="Quality" value={segment.quality} className="bg-blue-600" />
                <ScoreBar label="AI readiness" value={segment.aiReady} className="bg-teal-600" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <DataTable
        columns={[
          { key: "rule", label: "Data quality rule", render: (row: (typeof dataQualityRules)[number]) => <strong className="text-slate-800">{row.rule}</strong> },
          { key: "domain", label: "Domain", render: (row: (typeof dataQualityRules)[number]) => row.domain },
          { key: "threshold", label: "Target", render: (row: (typeof dataQualityRules)[number]) => row.threshold },
          { key: "current", label: "Current", render: (row: (typeof dataQualityRules)[number]) => row.current },
          { key: "owner", label: "Owner", render: (row: (typeof dataQualityRules)[number]) => row.owner }
        ]}
        rows={dataQualityRules}
      />
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
