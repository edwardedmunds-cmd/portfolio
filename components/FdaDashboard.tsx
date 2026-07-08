"use client";

import { useEffect, useMemo, useState } from "react";
import { BarChart } from "@/components/BarChart";
import { DashboardShell } from "@/components/DashboardShell";
import { DataTable } from "@/components/DataTable";
import { FilterBar } from "@/components/FilterBar";
import { InsightCallout } from "@/components/InsightCallout";
import { LineageDiagram } from "@/components/LineageDiagram";
import { MetricCard } from "@/components/MetricCard";
import { StatusBadge } from "@/components/StatusBadge";
import { gudidSnapshot, type GudidDashboardSnapshot, type GudidListing } from "@/data/projects";

type Filters = {
  query: string;
  category: string;
  manufacturer: string;
  status: string;
  impact: string;
  dateRange: string;
};

const apiBase = process.env.NEXT_PUBLIC_GUDID_API_URL || "http://127.0.0.1:8787";

const pipelineSteps = [
  { title: "FDA AccessGUDID", detail: "Public delimited release archive from FDA/NLM." },
  { title: "Weekly ZIP", detail: "Full and weekly releases preserved in raw storage." },
  { title: "Python import", detail: "Pipe-delimited files loaded and normalized." },
  { title: "SQLite analytics", detail: "Devices, counts, product baselines, impact scores." },
  { title: "Express API", detail: "Dashboard endpoints for filters and analytics." },
  { title: "Next dashboard", detail: "Portfolio surface with API-first live demo." }
];

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value);
}

function mapApiPayload(payload: any): GudidDashboardSnapshot {
  const highImpact: GudidListing[] = (payload.highImpact ?? []).slice(0, 20).map((item: any) => ({
    primary_di: item.primary_di ?? "Unknown",
    brand_name: item.brand_name ?? item.gmdn_term ?? "Unnamed device",
    company_name: item.company_name ?? "Unknown company",
    catalog_number: item.version_model_number ?? "Not supplied",
    product_code: item.product_code ?? "Unknown",
    device_class: item.device_class ?? "Unknown",
    gmdn_term: item.gmdn_term ?? "Unknown GMDN term",
    listing_date: item.listing_date ?? "Unknown",
    commercial_distribution_status: item.commercial_distribution_status ?? "Unknown",
    impact_score: Number(item.impact_score ?? 0),
    category: item.gmdn_term ?? item.product_code ?? "Uncategorized"
  }));

  const timeline = (payload.timeline ?? []).slice(-8).map((item: any) => ({
    label: String(item.month ?? "").slice(0, 7),
    listings: Number(item.listings ?? 0),
    average_impact: Number(item.average_impact ?? 0)
  }));

  return {
    ...gudidSnapshot,
    source: "api",
    summary: {
      ...gudidSnapshot.summary,
      total_devices: Number(payload.summary?.total_devices ?? gudidSnapshot.summary.total_devices),
      companies: Number(payload.summary?.companies ?? gudidSnapshot.summary.companies),
      product_codes: Number(payload.summary?.product_codes ?? gudidSnapshot.summary.product_codes),
      earliest_listing: payload.summary?.earliest_listing ?? gudidSnapshot.summary.earliest_listing,
      latest_listing: payload.summary?.latest_listing ?? gudidSnapshot.summary.latest_listing,
      average_impact: Number(payload.summary?.average_impact ?? gudidSnapshot.summary.average_impact),
      high_impact: highImpact.length,
      last_refresh: "Live Express API response"
    },
    timeline: timeline.length ? timeline : gudidSnapshot.timeline,
    productMix: (payload.productMix ?? gudidSnapshot.productMix).slice(0, 8).map((item: any) => ({
      product_code: item.product_code ?? "Unknown",
      category: item.category ?? item.product_code ?? "Product code",
      listings: Number(item.listings ?? 0),
      average_impact: Number(item.average_impact ?? 0)
    })),
    highImpact: highImpact.length ? highImpact : gudidSnapshot.highImpact
  };
}

export function FdaDashboard() {
  const [data, setData] = useState<GudidDashboardSnapshot>(gudidSnapshot);
  const [apiStatus, setApiStatus] = useState<"checking" | "live" | "static" | "snapshot">("checking");
  const [filters, setFilters] = useState<Filters>({
    query: "",
    category: "All",
    manufacturer: "All",
    status: "All",
    impact: "All",
    dateRange: "All"
  });
  const [sortKey, setSortKey] = useState<"impact_score" | "listing_date" | "company_name">("impact_score");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 1800);
    fetch(`${apiBase}/api/dashboard`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("GUDID API unavailable");
        return response.json();
      })
      .then((payload) => {
        setData(mapApiPayload(payload));
        setApiStatus("live");
      })
      .catch(() => {
        fetch("/api/gudid-dashboard", { cache: "no-store" })
          .then((response) => {
            if (!response.ok) throw new Error("Static snapshot unavailable");
            return response.json();
          })
          .then((payload: GudidDashboardSnapshot) => {
            setData({ ...payload, source: "static-export" });
            setApiStatus("static");
          })
          .catch(() => {
            setData(gudidSnapshot);
            setApiStatus("snapshot");
          });
      })
      .finally(() => window.clearTimeout(timeout));
    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);

  const categories = useMemo(() => ["All", ...Array.from(new Set(data.highImpact.map((item) => item.category)))], [data.highImpact]);
  const manufacturers = useMemo(() => ["All", ...Array.from(new Set(data.highImpact.map((item) => item.company_name)))], [data.highImpact]);

  const filteredListings = useMemo(() => {
    const now = new Date("2026-07-08");
    return data.highImpact
      .filter((item) => {
        const text = `${item.brand_name} ${item.company_name} ${item.catalog_number} ${item.primary_di} ${item.product_code}`.toLowerCase();
        const date = new Date(item.listing_date);
        const inRange =
          filters.dateRange === "All" ||
          (filters.dateRange === "Last 7 days" && now.getTime() - date.getTime() <= 7 * 86400000) ||
          (filters.dateRange === "Last 30 days" && now.getTime() - date.getTime() <= 30 * 86400000);
        return (
          text.includes(filters.query.toLowerCase()) &&
          (filters.category === "All" || item.category === filters.category) &&
          (filters.manufacturer === "All" || item.company_name === filters.manufacturer) &&
          (filters.status === "All" || item.commercial_distribution_status === filters.status) &&
          (filters.impact === "All" || (filters.impact === "High impact" ? item.impact_score >= 85 : item.impact_score < 85)) &&
          inRange
        );
      })
      .sort((a, b) => {
        if (sortKey === "impact_score") return b.impact_score - a.impact_score;
        return String(b[sortKey]).localeCompare(String(a[sortKey]));
      });
  }, [data.highImpact, filters, sortKey]);

  const pageSize = 4;
  const pageCount = Math.max(1, Math.ceil(filteredListings.length / pageSize));
  const visibleListings = filteredListings.slice((page - 1) * pageSize, page * pageSize);

  const statusTone = apiStatus === "live" ? "green" : apiStatus === "checking" ? "amber" : "blue";
  const statusText =
    apiStatus === "live"
      ? "Live Express API"
      : apiStatus === "checking"
        ? "Checking local API"
        : apiStatus === "static"
          ? "Static JSON export"
          : "Bundled fallback snapshot";

  return (
    <DashboardShell
      eyebrow="FDA AccessGUDID intelligence"
      title="Medical device market intelligence platform"
      description="API-first dashboard for public FDA AccessGUDID data. In local mode it consumes the Express API backed by SQLite; on Vercel it falls back to a portfolio-safe snapshot that mirrors the same product model."
      status={statusText}
      statusTone={statusTone}
    >
      <div className="metric-grid">
        <MetricCard label="Total device listings" value={formatNumber(data.summary.total_devices)} detail="SQLite analytics table" tone="blue" />
        <MetricCard label="Manufacturers" value={formatNumber(data.summary.companies)} detail="Distinct company names" />
        <MetricCard label="New listings this week" value={formatNumber(data.summary.new_this_week)} detail={data.summary.listing_velocity} tone="teal" />
        <MetricCard label="High-impact listings" value={formatNumber(data.summary.high_impact)} detail="Directional product impact score" tone="amber" />
        <MetricCard label="Risk/watchlist items" value={formatNumber(data.summary.watchlist)} detail="Recent listings needing review" />
      </div>

      <FilterBar
        searches={[
          {
            label: "Search listings",
            value: filters.query,
            placeholder: "Device, manufacturer, catalog, DI",
            onChange: (value) => {
              setFilters({ ...filters, query: value });
              setPage(1);
            }
          }
        ]}
        selects={[
          { label: "Device category", value: filters.category, options: categories, onChange: (value) => setFilters({ ...filters, category: value }) },
          { label: "Manufacturer", value: filters.manufacturer, options: manufacturers, onChange: (value) => setFilters({ ...filters, manufacturer: value }) },
          {
            label: "Listing status",
            value: filters.status,
            options: ["All", "In Commercial Distribution", "Unknown"],
            onChange: (value) => setFilters({ ...filters, status: value })
          },
          { label: "Impact level", value: filters.impact, options: ["All", "High impact", "Standard"], onChange: (value) => setFilters({ ...filters, impact: value }) },
          { label: "Date range", value: filters.dateRange, options: ["All", "Last 7 days", "Last 30 days"], onChange: (value) => setFilters({ ...filters, dateRange: value }) }
        ]}
      />

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <BarChart data={data.timeline.map((item) => ({ label: item.label, value: item.listings, secondary: Math.round(item.average_impact) }))} secondaryLabel="Teal = avg impact" />
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-bold text-slate-950">Manufacturer activity ranking</h3>
          <div className="mt-4 space-y-3">
            {data.manufacturers.map((maker) => (
              <div key={maker.company} className="rounded-md border border-slate-200 p-3 transition hover:bg-slate-50">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-bold text-slate-950">{maker.company}</p>
                  <StatusBadge tone="green">{maker.growth}</StatusBadge>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-blue-600 transition-all duration-700" style={{ width: `${Math.min(100, maker.recent / 2.5)}%` }} />
                </div>
                <p className="mt-2 text-xs text-slate-500">{formatNumber(maker.listings)} total listings / {maker.recent} recent</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <InsightCallout title="Portfolio review queue" body="Supply chain and market intelligence teams can use the impact score to triage high-velocity categories before reviewing individual listings." />
        <InsightCallout title="Manufacturer momentum" body="Recently active manufacturers help leaders understand where portfolio, contracting, or competitive monitoring should focus." tone="teal" />
        <InsightCallout title="Governed public data product" body="Raw FDA archives remain traceable while analytics tables and API endpoints support repeatable dashboard consumption." tone="amber" />
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950">Listings explorer</h3>
            <p className="mt-1 text-sm text-slate-500">Search by device name, manufacturer, catalog number, or DI. Sort and page through API-compatible records.</p>
          </div>
          <select
            value={sortKey}
            onChange={(event) => setSortKey(event.target.value as typeof sortKey)}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm"
          >
            <option value="impact_score">Sort by impact</option>
            <option value="listing_date">Sort by listing date</option>
            <option value="company_name">Sort by manufacturer</option>
          </select>
        </div>
        <DataTable<GudidListing>
          minWidth="1120px"
          rows={visibleListings}
          columns={[
            { key: "device", label: "Device", render: (row) => <div><p className="font-bold text-slate-950">{row.brand_name}</p><p className="text-xs text-slate-500">{row.gmdn_term}</p></div> },
            { key: "company", label: "Manufacturer", render: (row) => row.company_name },
            { key: "catalog", label: "Catalog / DI", render: (row) => <div><p>{row.catalog_number}</p><p className="text-xs text-slate-500">{row.primary_di}</p></div> },
            { key: "code", label: "Code / Class", render: (row) => <div><StatusBadge tone="blue">{row.product_code}</StatusBadge><p className="mt-1 text-xs">Class {row.device_class}</p></div> },
            { key: "date", label: "Publish date", render: (row) => row.listing_date },
            { key: "status", label: "Status", render: (row) => <StatusBadge tone="green">{row.commercial_distribution_status}</StatusBadge> },
            { key: "score", label: "Impact", render: (row) => <strong className="text-slate-950">{row.impact_score}</strong> }
          ]}
        />
        <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
          <button className="rounded-md border border-slate-300 px-3 py-2 font-semibold disabled:opacity-40" disabled={page <= 1} onClick={() => setPage(page - 1)}>
            Previous
          </button>
          <span>Page {page} of {pageCount}</span>
          <button className="rounded-md border border-slate-300 px-3 py-2 font-semibold disabled:opacity-40" disabled={page >= pageCount} onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-bold text-slate-950">Recently flagged listings</h3>
          <div className="mt-4 space-y-3">
            {data.flagged.map((item) => (
              <div key={item.device} className="rounded-md border border-amber-200 bg-amber-50 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-bold text-slate-950">{item.device}</p>
                  <StatusBadge tone="amber">{item.score}</StatusBadge>
                </div>
                <p className="mt-1 text-sm text-slate-600">{item.company}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-bold text-slate-950">Pipeline status</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              ["Last refresh", data.summary.last_refresh],
              ["Database size", data.summary.database_size],
              ["Latest release", data.summary.latest_release],
              ["Pipeline health", data.summary.pipeline_health]
            ].map(([label, value]) => (
              <div key={label} className="rounded-md bg-slate-50 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <DataTable
              minWidth="680px"
              rows={data.pipelineRuns}
              columns={[
                { key: "date", label: "Run date", render: (row) => row.runDate },
                { key: "files", label: "Files", render: (row) => row.filesProcessed },
                { key: "records", label: "Records", render: (row) => formatNumber(row.recordsImported) },
                { key: "scores", label: "Scored", render: (row) => formatNumber(row.recentProductsScored) },
                { key: "status", label: "Status", render: (row) => <StatusBadge tone="green">{row.status}</StatusBadge> }
              ]}
            />
          </div>
        </div>
      </div>

      <LineageDiagram steps={pipelineSteps} />
    </DashboardShell>
  );
}
