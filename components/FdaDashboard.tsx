"use client";

import { useMemo, useState } from "react";
import { fdaListings, fdaTrend } from "@/data/projects";
import { BarChart } from "@/components/BarChart";
import { MetricCard } from "@/components/MetricCard";

export function FdaDashboard() {
  const [impact, setImpact] = useState("All");
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    return fdaListings.filter((row) => {
      const matchesImpact = impact === "All" || row.impact === impact;
      const matchesQuery = `${row.device} ${row.manufacturer} ${row.segment}`.toLowerCase().includes(query.toLowerCase());
      return matchesImpact && matchesQuery;
    });
  }, [impact, query]);

  return (
    <div className="space-y-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Fictional regulatory intelligence workspace</p>
        <p className="mt-2 max-w-4xl leading-7 text-slate-600">
          Portfolio-safe sample data showing how a healthcare analytics team could monitor weekly device listing movement, priority signals, manufacturer concentration, and segment-level review queues.
        </p>
      </div>
      <div className="metric-grid">
        <MetricCard label="Weekly listing movement" value="281" detail="New or modified fictional listings" tone="blue" />
        <MetricCard label="Manufacturers monitored" value="318" detail="Across portfolio segments" />
        <MetricCard label="Priority review signals" value="42" detail="Class II/III or strategic movement" tone="teal" />
        <MetricCard label="Week-over-week movement" value="+8.4%" detail="Change from prior reporting cycle" tone="amber" />
      </div>
      <div className="dashboard-grid">
        <BarChart
          data={fdaTrend.map((item) => ({ label: item.label, value: item.listings, secondary: item.highImpact }))}
          max={300}
          secondaryLabel="Teal = high impact"
        />
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-bold text-slate-950">Review controls</h3>
          <div className="mt-5 space-y-4">
            <label className="block text-sm font-semibold text-slate-700">
              Priority signal
              <select
                value={impact}
                onChange={(event) => setImpact(event.target.value)}
                className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900"
              >
                {["All", "High", "Medium", "Low"].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Search product or manufacturer
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Device or manufacturer"
                className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900"
              />
            </label>
            <div className="rounded-md bg-slate-950 p-4 text-white">
              <p className="text-sm text-slate-300">Records in review queue</p>
              <p className="mt-1 text-3xl font-bold">{rows.length}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="table-scroll rounded-lg border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[880px] border-collapse text-left text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              {["Product", "Manufacturer", "Segment", "Class", "Signal", "Listing status", "Week"].map((head) => (
                <th key={head} className="px-4 py-3 font-bold">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.device}-${row.week}`} className="border-t border-slate-200">
                <td className="px-4 py-3 font-semibold text-slate-950">{row.device}</td>
                <td className="px-4 py-3 text-slate-600">{row.manufacturer}</td>
                <td className="px-4 py-3 text-slate-600">{row.segment}</td>
                <td className="px-4 py-3 text-slate-600">{row.class}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">{row.impact}</span>
                </td>
                <td className="px-4 py-3 text-slate-600">{row.status}</td>
                <td className="px-4 py-3 text-slate-600">{row.week}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
