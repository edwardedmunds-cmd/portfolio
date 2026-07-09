import { getDefaultProductIntelligence, gudidProductIntelligence } from "@/data/gudidProductIntelligence";
import type { GudidListing } from "@/data/projects";
import type { ReactNode } from "react";

type ProductIntelligencePanelProps = {
  device: GudidListing | null;
};

export function ProductIntelligencePanel({ device }: ProductIntelligencePanelProps) {
  if (!device) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Product Intelligence Panel</p>
        <h3 className="mt-2 text-xl font-bold text-slate-950">Select a listing to review product intelligence</h3>
        <p className="mt-3 leading-7 text-slate-600">
          Click a row in the Listing Explorer to combine AccessGUDID fields with demo recall, company, and AI interpretation layers.
        </p>
      </div>
    );
  }

  const enrichment = gudidProductIntelligence[device.primary_di] ?? getDefaultProductIntelligence(device);
  const recall = enrichment.recall;
  const manufacturer = enrichment.manufacturer;
  const ai = enrichment.ai;

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50 p-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Product Intelligence Panel</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">{device.brand_name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {device.company_name} · DI {device.primary_di} · Published {device.listing_date}
          </p>
        </div>
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-white shadow-sm">
          {Math.round(device.impact_score)}
        </div>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-2">
        <PanelSection title="FDA / AccessGUDID Summary" badge="Trusted FDA Data" tone="green">
          <p className="border-l-4 border-blue-600 bg-blue-50 p-4 text-sm leading-7 text-slate-700">
            {enrichment.description}
          </p>
          <FactGrid
            facts={[
              ["Manufacturer", device.company_name],
              ["Description", enrichment.description ?? "FDA listing description unavailable in this demo snapshot."],
              ["Device class", device.device_class],
              ["Product code", device.product_code],
              ["GMDN terms", enrichment.gmdnTerms ?? device.gmdn_term],
              ["Implantable", formatBoolean(enrichment.implantable)],
              ["Single use", formatBoolean(enrichment.singleUse)],
              ["Sterile", formatBoolean(enrichment.sterile)],
              ["Life supporting", formatBoolean(enrichment.lifeSupporting)],
              ["Publish date", device.listing_date]
            ]}
          />
        </PanelSection>

        <PanelSection title="FDA Recall Intelligence" badge="FDA Recall Data" tone="amber">
          {recall?.count ? (
            <FactGrid
              facts={[
                ["Recall count", String(recall.count)],
                ["Highest recall class", recall.highestClass ?? "Unavailable"],
                ["Latest recall date", recall.latestDate ?? "Unavailable"],
                ["Latest recall reason", recall.latestReason ?? "Unavailable"]
              ]}
            />
          ) : (
            <p className="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-600">
              No FDA recalls found for this demo product.
            </p>
          )}
        </PanelSection>

        <PanelSection title="Manufacturer Intelligence" badge="Public Company Information" tone="blue">
          {manufacturer?.website || manufacturer?.status !== "Unknown" || manufacturer?.secEdgar === "Available" ? (
            <FactGrid
              facts={[
                ["Public/private status", manufacturer?.status ?? "Unknown"],
                ["Website", manufacturer?.website ?? "Additional company information unavailable."],
                ["SEC/EDGAR availability", manufacturer?.secEdgar ?? "Unavailable"]
              ]}
            />
          ) : (
            <p className="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-600">
              Additional company information unavailable.
            </p>
          )}
        </PanelSection>

        <PanelSection title="AI Interpretation" badge="AI Generated" tone="purple">
          <FactGrid
            facts={[
              ["Market impact rating", ai?.marketImpact ?? "Low"],
              ["Why this matters", ai?.whyItMatters ?? "AI interpretation unavailable for this listing."],
              ["Key contributing factors", ai?.factors.join(", ") ?? "Unavailable"],
              ["Confidence level", ai?.confidence ?? "Low"]
            ]}
          />
          <p className="mt-3 text-xs leading-5 text-slate-500">
            AI interpretation is generated from demo data and source-labeled metadata only. It is not a clinical, regulatory, purchasing, or market-share recommendation.
          </p>
        </PanelSection>
      </div>
    </div>
  );
}

function PanelSection({
  title,
  badge,
  tone,
  children
}: {
  title: string;
  badge: string;
  tone: "green" | "amber" | "blue" | "purple";
  children: ReactNode;
}) {
  const tones = {
    green: "bg-emerald-50 text-emerald-800 border-emerald-100",
    amber: "bg-amber-50 text-amber-800 border-amber-100",
    blue: "bg-blue-50 text-blue-800 border-blue-100",
    purple: "bg-violet-50 text-violet-800 border-violet-100"
  };

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h4 className="text-base font-bold text-slate-950">{title}</h4>
        <span className={`w-fit rounded-full border px-3 py-1 text-xs font-bold ${tones[tone]}`}>{badge}</span>
      </div>
      {children}
    </section>
  );
}

function FactGrid({ facts }: { facts: Array<[string, string]> }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {facts.map(([label, value]) => (
        <div key={label} className="rounded-md border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
          <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">{value}</p>
        </div>
      ))}
    </div>
  );
}

function formatBoolean(value: boolean | undefined) {
  if (value === true) return "Yes";
  if (value === false) return "No";
  return "Not available in demo snapshot";
}
