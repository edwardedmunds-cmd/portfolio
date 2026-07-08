import { bankingSegments } from "@/data/projects";
import { MetricCard } from "@/components/MetricCard";

export function BankingDashboard() {
  return (
    <div className="space-y-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Fictional banking data platform control room</p>
        <p className="mt-2 max-w-4xl leading-7 text-slate-600">
          A product-style control room for executives who need to see whether customer data is trusted enough for analytics, risk operations, personalization, and governed AI use.
        </p>
      </div>
      <div className="metric-grid">
        <MetricCard label="Customer 360 coverage" value="97%" detail="Matched to golden customer profile" tone="blue" />
        <MetricCard label="Trusted data score" value="92" detail="Quality, lineage, freshness, controls" tone="teal" />
        <MetricCard label="Certified lineage" value="95%" detail="Source-to-product paths validated" />
        <MetricCard label="Open policy exceptions" value="5" detail="Consent, retention, or quality review" tone="amber" />
        <MetricCard label="AI readiness index" value="86" detail="Approved for governed AI patterns" />
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="text-base font-bold text-slate-950">Segment readiness for analytics and AI use</h3>
        <div className="mt-5 grid gap-4">
          {bankingSegments.map((segment) => (
            <div key={segment.segment} className="grid gap-3 rounded-lg border border-slate-200 p-4 md:grid-cols-[1fr_150px_1fr] md:items-center">
              <div>
                <p className="font-bold text-slate-950">{segment.segment}</p>
                <p className="text-sm text-slate-500">{segment.customers} fictional customers</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{segment.decision}</p>
              </div>
              <div className="text-sm font-semibold text-slate-700">
                <p>{segment.flags} policy flags</p>
                <p className="mt-1 text-xs text-slate-500">{segment.lineage} lineage</p>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="mb-1 flex justify-between text-xs font-semibold text-slate-500">
                    <span>Quality</span>
                    <span>{segment.quality}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-blue-600" style={{ width: `${segment.quality}%` }} />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs font-semibold text-slate-500">
                    <span>AI readiness</span>
                    <span>{segment.aiReady}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-teal-600" style={{ width: `${segment.aiReady}%` }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
