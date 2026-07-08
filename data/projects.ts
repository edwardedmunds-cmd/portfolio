export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  sector: string;
  value: string;
  repo: string;
  metrics: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "fda-device-intelligence",
    title: "FDA Device Intelligence Dashboard",
    eyebrow: "Regulated data product",
    summary:
      "A portfolio-safe intelligence product for tracking device listing movement, manufacturer concentration, and regulatory market signals.",
    sector: "Healthcare and life sciences",
    value: "Shows how regulated source data can become an executive monitoring product for market, safety, and portfolio decisions.",
    repo: "https://github.com/tededmunds/fda-device-intelligence",
    metrics: ["1,248 monitored listings", "318 manufacturers", "42 priority signals", "+8.4% WoW movement"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Mock GUDID-style data", "SVG charts"]
  },
  {
    slug: "banking-data-platform",
    title: "Banking Data Platform Demo",
    eyebrow: "Enterprise data platform",
    summary:
      "A governed banking data product concept for Customer 360, consent-aware analytics, compliance visibility, and AI readiness.",
    sector: "Banking and financial services",
    value: "Frames data quality, lineage, policy exceptions, and AI readiness as operating metrics for banking leadership.",
    repo: "https://github.com/tededmunds/banking-data-platform-demo",
    metrics: ["92 trust score", "17 critical entities", "5 policy exceptions", "86 AI readiness"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Domain data model", "Policy controls"]
  },
  {
    slug: "ai-data-catalog",
    title: "AI Data Catalog / Governance Demo",
    eyebrow: "AI governance product",
    summary:
      "A governance product surface for dataset discovery, ownership, quality scoring, lineage confidence, and approved AI use cases.",
    sector: "Enterprise AI and governance",
    value: "Connects metadata management to practical AI enablement for enterprise analytics, insurance, healthcare, and risk teams.",
    repo: "https://github.com/tededmunds/ai-data-catalog-demo",
    metrics: ["9 governed domains", "64 certified datasets", "97 lineage links", "12 approved AI uses"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Catalog metadata", "Governance workflow"]
  }
];

export const fdaListings = [
  { device: "CardioPulse Remote Monitor", manufacturer: "Northstar Medical", class: "II", impact: "High", status: "New listing", week: "2026-W27", segment: "Cardiology" },
  { device: "OrthoAlign Implant Planning Kit", manufacturer: "Apex Ortho", class: "II", impact: "Medium", status: "Modified listing", week: "2026-W27", segment: "Orthopedics" },
  { device: "InfuSafe Ambulatory Pump", manufacturer: "Helix Care", class: "III", impact: "High", status: "New listing", week: "2026-W26", segment: "Infusion" },
  { device: "DermalScan Imaging Sensor", manufacturer: "Beacon Diagnostics", class: "I", impact: "Low", status: "Modified listing", week: "2026-W26", segment: "Diagnostics" },
  { device: "NeuroTrack Stimulation Lead", manufacturer: "Summit BioSystems", class: "III", impact: "High", status: "New listing", week: "2026-W25", segment: "Neurology" },
  { device: "SterilePort Accessory Tray", manufacturer: "Cobalt Devices", class: "I", impact: "Medium", status: "New listing", week: "2026-W25", segment: "Surgical support" },
  { device: "ClearFlow Respiratory Module", manufacturer: "Meridian HealthTech", class: "II", impact: "Medium", status: "Modified listing", week: "2026-W27", segment: "Respiratory" },
  { device: "VascuSeal Closure System", manufacturer: "Pioneer Vascular", class: "III", impact: "High", status: "New listing", week: "2026-W27", segment: "Vascular" }
];

export const fdaTrend = [
  { label: "W22", listings: 184, highImpact: 21 },
  { label: "W23", listings: 197, highImpact: 28 },
  { label: "W24", listings: 221, highImpact: 34 },
  { label: "W25", listings: 236, highImpact: 36 },
  { label: "W26", listings: 259, highImpact: 41 },
  { label: "W27", listings: 281, highImpact: 42 }
];

export const bankingSegments = [
  { segment: "Retail households", customers: "1.8M", quality: 94, aiReady: 89, flags: 1, lineage: "Certified", decision: "Next best action" },
  { segment: "Small business", customers: "248K", quality: 91, aiReady: 83, flags: 2, lineage: "Certified", decision: "Credit renewal" },
  { segment: "Commercial banking", customers: "31K", quality: 88, aiReady: 78, flags: 2, lineage: "Review", decision: "Exposure monitoring" },
  { segment: "Wealth clients", customers: "76K", quality: 96, aiReady: 92, flags: 0, lineage: "Certified", decision: "Advisor insights" }
];

export const catalogDatasets = [
  { name: "Customer Golden Record", domain: "Customer", owner: "Enterprise Data Products", quality: 96, lineage: "Certified", aiUse: "Personalization and service routing", sensitivity: "Confidential" },
  { name: "Claims Event Timeline", domain: "Insurance Operations", owner: "Claims Analytics", quality: 91, lineage: "Certified", aiUse: "Claims triage assistance", sensitivity: "Restricted" },
  { name: "Provider Network Access", domain: "Healthcare", owner: "Network Strategy", quality: 88, lineage: "Mapped", aiUse: "Access and adequacy analysis", sensitivity: "Confidential" },
  { name: "Treasury Transaction Signals", domain: "Finance and Risk", owner: "Risk Data Office", quality: 93, lineage: "Certified", aiUse: "Anomaly review and investigation", sensitivity: "Restricted" },
  { name: "Policy Knowledge Base", domain: "Legal and Compliance", owner: "Governance Office", quality: 84, lineage: "Mapped", aiUse: "Approved retrieval workflow", sensitivity: "Internal" },
  { name: "Member Engagement Journey", domain: "Customer Experience", owner: "Digital Analytics", quality: 89, lineage: "Mapped", aiUse: "Retention opportunity scoring", sensitivity: "Confidential" }
];
