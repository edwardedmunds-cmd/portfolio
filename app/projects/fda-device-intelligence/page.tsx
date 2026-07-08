import { FdaDashboard } from "@/components/FdaDashboard";
import { ProjectDetail } from "@/components/ProjectDetail";

export default function FdaDeviceIntelligencePage() {
  return (
    <ProjectDetail
      title="FDA Device Intelligence Platform"
      subtitle="A production-quality public-data product built around FDA AccessGUDID releases, Python ingestion, SQLite analytics, an Express API, and a dashboard experience."
      repo="https://github.com/edwardedmunds-cmd/GUDID_Project"
      dashboard={<FdaDashboard />}
      problem="FDA AccessGUDID is a rich public dataset, but the raw release archives are not packaged as a decision-support product. Supply chain, manufacturers, regulatory teams, and analysts need faster ways to understand listing velocity, manufacturer activity, product-code momentum, and recently published devices without manually parsing delimited files."
      outcome="The product vision is a repeatable intelligence platform: download public FDA release ZIPs, preserve raw files for traceability, import delimited tables with Python, build SQLite analytics tables, expose Express API endpoints, and present executives and analysts with a dashboard for search, filtering, trend analysis, and impact-score review."
      stakeholders={["Supply Chain", "Manufacturers", "Regulatory", "Analysts", "Executive leadership"]}
      architecture={[
        "FDA AccessGUDID delimited release archive",
        "Python download and raw ZIP storage",
        "SQLite raw and staging tables",
        "Analytics tables, quality checks, impact scores",
        "Express REST API for dashboard queries",
        "React / Next.js portfolio dashboard"
      ]}
      pipeline="AccessGUDID release archives are downloaded into local raw ZIP storage, imported by a Python pipeline into SQLite, normalized into device and analytics tables, scored for directional market impact, and served through an Express API. The portfolio dashboard is API-first and uses a safe static snapshot when the local API is unavailable on Vercel."
      stack={["FDA AccessGUDID", "Python ETL", "SQLite analytics database", "Express REST API", "React / Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions"]}
      decisions={[
        "Treat public FDA files as a governed data product by preserving raw ZIPs and rebuilding analytics tables repeatably.",
        "Separate ingestion, analytics modeling, API access, and dashboard UX so each layer has a clear product responsibility.",
        "Use directional impact scoring to create an analyst review queue while avoiding regulatory or commercial claims.",
        "Design for both local API-backed exploration and Vercel-safe portfolio presentation."
      ]}
      challenges={[
        "Parsing large public release archives while keeping raw data traceable and replayable.",
        "Normalizing inconsistent delimited source tables into dashboard-ready SQLite analytics views.",
        "Designing an API and dashboard that expose useful product signals without overclaiming what public data can prove."
      ]}
      lessons={[
        "Public datasets still need product management: users need questions, workflows, trust signals, and refresh expectations.",
        "SQLite can be a strong analytics layer for local product demos when paired with clean API boundaries.",
        "Dashboard UX should make the pipeline understandable, not hide data freshness and lineage from users."
      ]}
      future={[
        "Add recall, 510(k), PMA, De Novo, MAUDE, and adverse-event joins for stronger signal context.",
        "Publish scheduled GitHub Actions artifacts and API snapshots for repeatable portfolio demos.",
        "Add saved views, manufacturer profiles, and product-code alerting for analyst workflows."
      ]}
      hiringSignal="This project demonstrates data product management, ETL pipeline design, analytics engineering, API design, dashboard UX, data modeling, GitHub Actions automation, and enterprise architecture using a real public FDA data source."
    />
  );
}
