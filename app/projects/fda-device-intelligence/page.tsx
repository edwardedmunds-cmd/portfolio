import { FdaDashboard } from "@/components/FdaDashboard";
import { ProjectDetail } from "@/components/ProjectDetail";

export default function FdaDeviceIntelligencePage() {
  return (
    <ProjectDetail
      title="FDA Device Intelligence Dashboard"
      subtitle="A healthcare analytics case study for device listing intelligence, manufacturer monitoring, and high-impact market signals."
      repo="https://github.com/tededmunds/fda-device-intelligence"
      dashboard={<FdaDashboard />}
      problem="Healthcare and life sciences leaders often need to understand device market movement, competitive concentration, and potential regulatory signals faster than manual review cycles allow. Raw files are useful, but they do not naturally answer executive questions about momentum, exposure, or where teams should focus review effort."
      outcome="This case study reframes fictional device listings as a monitoring product: a weekly executive view, priority-signal filters, manufacturer and segment context, and a searchable operating table for analysts who need to move from KPI to record-level detail."
      stakeholders={["Regulatory affairs", "Market intelligence", "Portfolio strategy", "Executive leadership"]}
      architecture={["Fictional source files", "Validation checks", "Device entity model", "Signal scoring mart", "Executive dashboard"]}
      pipeline="The mock pipeline stages fictional device listing records into a normalized device model, enriches each record with segment and impact attributes, computes weekly movement and priority-signal aggregates, and publishes dashboard-ready tables for KPI review, filtering, and analyst follow-up."
      stack={["Next.js", "TypeScript", "Tailwind CSS", "Local mock data", "Client-side filters", "SVG/CSS charts"]}
      decisions={[
        "Use fictional device, manufacturer, and segment names so the portfolio remains safe for public review.",
        "Lead with executive KPIs before exposing detailed rows, because leaders need direction before inspection.",
        "Keep filters lightweight and transparent so the product demonstrates workflow without hiding logic behind a black box."
      ]}
      hiringSignal="This project shows how Ted can turn regulated-domain data into a usable product: safe data handling, KPI hierarchy, stakeholder framing, analyst drill-down, and a clear bridge from source records to decisions about market movement, portfolio exposure, and review prioritization."
    />
  );
}
