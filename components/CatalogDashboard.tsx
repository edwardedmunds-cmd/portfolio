"use client";

import { useMemo, useState } from "react";
import { catalogDatasets } from "@/data/projects";
import { MetricCard } from "@/components/MetricCard";

export function CatalogDashboard() {
  const [query, setQuery] = useState("");

  const rows = useMemo(
    () =>
      catalogDatasets.filter((row) =>
        `${row.name} ${row.domain} ${row.owner} ${row.sensitivity} ${row.aiUse}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div className="space-y-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Fictional AI governance catalog</p>
        <p className="mt-2 max-w-4xl leading-7 text-slate-600">
          A product surface for finding trusted datasets, understanding ownership and sensitivity, and confirming which AI uses have been reviewed before a team builds models or retrieval workflows.
        </p>
      </div>
      <div className="metric-grid">
        <MetricCard label="Governed domains" value="9" detail="Business-owned data product areas" tone="blue" />
        <MetricCard label="Certified datasets" value="64" detail="Approved for production analytics" tone="teal" />
        <MetricCard label="Mapped lineage links" value="97" detail="Source-to-use traceability" />
        <MetricCard label="Approved AI uses" value="12" detail="Reviewed model and retrieval patterns" tone="amber" />
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h3 className="text-base font-bold text-slate-950">Dataset discovery and AI-use review</h3>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search datasets, domains, owners, approved uses"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm md:max-w-md"
          />
        </div>
        <div className="table-scroll mt-5">
          <table className="w-full min-w-[920px] border-collapse text-left text-sm">
            <thead className="bg-slate-100 text-slate-600">
              <tr>
                {["Dataset", "Domain", "Owner", "Sensitivity", "Quality", "Lineage", "Approved AI use case"].map((head) => (
                  <th key={head} className="px-4 py-3 font-bold">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.name} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-semibold text-slate-950">{row.name}</td>
                  <td className="px-4 py-3 text-slate-600">{row.domain}</td>
                  <td className="px-4 py-3 text-slate-600">{row.owner}</td>
                  <td className="px-4 py-3 text-slate-600">{row.sensitivity}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-bold text-teal-800">{row.quality}</span>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{row.lineage}</td>
                  <td className="px-4 py-3 text-slate-600">{row.aiUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
