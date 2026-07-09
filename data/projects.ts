export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem?: string;
  sector: string;
  value: string;
  repo: string;
  readme?: string;
  metrics: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "fda-device-intelligence",
    title: "FDA Device Intelligence Platform",
    eyebrow: "Regulated data product",
    summary:
      "A public-data intelligence product built around FDA AccessGUDID releases, Python ingestion, SQLite analytics, an Express API, and a dashboard experience.",
    sector: "Healthcare and life sciences",
    value: "Shows how public FDA data can become a decision-support product for supply chain, manufacturers, regulatory, and analytics teams.",
    repo: "https://github.com/edwardedmunds-cmd/GUDID_Project",
    metrics: ["5.1M imported records", "699K scored products", "Express API", "Weekly refresh"],
    stack: ["AccessGUDID", "Python ETL", "SQLite", "Express API", "React / Next.js", "GitHub Actions"]
  },
  {
    slug: "banking-data-platform",
    title: "Modern Bank Data Platform",
    eyebrow: "Banking data product",
    summary:
      "A flagship banking data product demo for executive KPIs, complaint analytics, credit risk visibility, governance, and AI-ready data foundations.",
    sector: "Banking and financial services",
    value: "Shows how data product management, medallion architecture, semantic metrics, and governance turn banking data into board-ready decision support.",
    repo: "https://github.com/edwardedmunds-cmd/portfolio/tree/main/app/projects/banking-data-platform",
    readme: "https://github.com/edwardedmunds-cmd/portfolio/blob/main/docs/modern-bank-data-platform/README.md",
    metrics: ["$42.8B deposits", "$31.4B loans", "8.7 complaints / 10K", "87 AI readiness"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Synthetic banking data", "CFPB/FRED-ready", "Governance artifacts"]
  },
  {
    slug: "ai-data-catalog",
    title: "AI Data Catalog / Governance Demo",
    eyebrow: "AI governance product",
    summary:
      "A governance product surface for dataset discovery, ownership, quality scoring, lineage confidence, and approved AI use cases.",
    sector: "Enterprise AI and governance",
    value: "Connects metadata management to practical AI enablement for enterprise analytics, insurance, healthcare, and risk teams.",
    repo: "https://github.com/edwardedmunds-cmd/portfolio/tree/main/app/projects/ai-data-catalog",
    metrics: ["9 governed domains", "64 certified datasets", "97 lineage links", "12 approved AI uses"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Catalog metadata", "Governance workflow"]
  }
];

export type GudidListing = {
  primary_di: string;
  brand_name: string;
  company_name: string;
  catalog_number: string;
  product_code: string;
  device_class: string;
  gmdn_term: string;
  listing_date: string;
  commercial_distribution_status: string;
  impact_score: number;
  category: string;
};

export type GudidDashboardSnapshot = {
  source: "api" | "snapshot" | "static-export";
  summary: {
    total_devices: number;
    companies: number;
    product_codes: number;
    earliest_listing: string;
    latest_listing: string;
    average_impact: number;
    new_this_week: number;
    high_impact: number;
    watchlist: number;
    listing_velocity: string;
    last_refresh: string;
    latest_release: string;
    database_size: string;
    pipeline_health: string;
  };
  timeline: Array<{ label: string; listings: number; average_impact: number }>;
  productMix: Array<{ product_code: string; category: string; listings: number; average_impact: number }>;
  highImpact: GudidListing[];
  manufacturers: Array<{ company: string; listings: number; growth: string; recent: number }>;
  pipelineRuns: Array<{ runDate: string; filesProcessed: number; recordsImported: number; recentProductsScored: number; status: string }>;
  flagged: Array<{ device: string; company: string; reason: string; score: number }>;
};

export const gudidSnapshot: GudidDashboardSnapshot = {
  source: "snapshot",
  summary: {
    total_devices: 5152799,
    companies: 184276,
    product_codes: 6894,
    earliest_listing: "2013-09-24",
    latest_listing: "2026-07-06",
    average_impact: 72.4,
    new_this_week: 11761,
    high_impact: 438,
    watchlist: 27,
    listing_velocity: "+2.3% WoW",
    last_refresh: "2026-07-06 07:50 ET",
    latest_release: "AccessGUDID weekly release 2026-07-06",
    database_size: "824 MB local SQLite artifact",
    pipeline_health: "Healthy"
  },
  timeline: [
    { label: "Jun 02", listings: 8921, average_impact: 66.1 },
    { label: "Jun 09", listings: 9408, average_impact: 67.4 },
    { label: "Jun 16", listings: 10136, average_impact: 69.2 },
    { label: "Jun 23", listings: 9874, average_impact: 70.3 },
    { label: "Jun 30", listings: 10883, average_impact: 71.8 },
    { label: "Jul 06", listings: 11761, average_impact: 72.4 }
  ],
  productMix: [
    { product_code: "DPS", category: "Cardiac monitoring", listings: 18421, average_impact: 84.2 },
    { product_code: "QBJ", category: "Glucose monitoring", listings: 14782, average_impact: 81.7 },
    { product_code: "HWT", category: "Surgical navigation", listings: 9388, average_impact: 78.1 },
    { product_code: "DQY", category: "Vascular catheters", listings: 8015, average_impact: 76.4 },
    { product_code: "NMA", category: "Neural electrodes", listings: 4766, average_impact: 82.5 }
  ],
  highImpact: [
    {
      primary_di: "00819876543210",
      brand_name: "CardioSense Patch XT",
      company_name: "Apex BioSystems",
      catalog_number: "CS-XT-400",
      product_code: "DPS",
      device_class: "II",
      gmdn_term: "Ambulatory ECG monitor",
      listing_date: "2026-07-06",
      commercial_distribution_status: "In Commercial Distribution",
      impact_score: 94.2,
      category: "Cardiology"
    },
    {
      primary_di: "00345678901234",
      brand_name: "OrthoNav Precision Guide",
      company_name: "Northstar Surgical",
      catalog_number: "ON-PG-210",
      product_code: "HWT",
      device_class: "II",
      gmdn_term: "Surgical navigation system",
      listing_date: "2026-07-05",
      commercial_distribution_status: "In Commercial Distribution",
      impact_score: 91.5,
      category: "Orthopedics"
    },
    {
      primary_di: "00678901234567",
      brand_name: "GlucoWave Mini Sensor",
      company_name: "Apex BioSystems",
      catalog_number: "GW-M-108",
      product_code: "QBJ",
      device_class: "II",
      gmdn_term: "Glucose monitoring system",
      listing_date: "2026-07-04",
      commercial_distribution_status: "In Commercial Distribution",
      impact_score: 88.9,
      category: "Diagnostics"
    },
    {
      primary_di: "00112233445566",
      brand_name: "SonoFlow Vascular Catheter",
      company_name: "Pulse River Medical",
      catalog_number: "SF-V-88",
      product_code: "DQY",
      device_class: "III",
      gmdn_term: "Cardiovascular catheter",
      listing_date: "2026-07-03",
      commercial_distribution_status: "In Commercial Distribution",
      impact_score: 86.7,
      category: "Vascular"
    },
    {
      primary_di: "00556677889900",
      brand_name: "NeuroMap Micro Array",
      company_name: "Northstar Surgical",
      catalog_number: "NM-A-42",
      product_code: "NMA",
      device_class: "III",
      gmdn_term: "Neural electrode array",
      listing_date: "2026-07-02",
      commercial_distribution_status: "In Commercial Distribution",
      impact_score: 84.1,
      category: "Neurology"
    },
    {
      primary_di: "00990011223344",
      brand_name: "SterileSeal Procedure Kit",
      company_name: "Harbor Health Devices",
      catalog_number: "SSK-700",
      product_code: "SSK",
      device_class: "I",
      gmdn_term: "Procedure kit",
      listing_date: "2026-07-01",
      commercial_distribution_status: "In Commercial Distribution",
      impact_score: 69.8,
      category: "Surgical support"
    }
  ],
  manufacturers: [
    { company: "Apex BioSystems", listings: 1842, growth: "+18.4%", recent: 241 },
    { company: "Northstar Surgical", listings: 1326, growth: "+11.7%", recent: 169 },
    { company: "Pulse River Medical", listings: 1108, growth: "+9.2%", recent: 97 },
    { company: "Harbor Health Devices", listings: 884, growth: "+6.4%", recent: 74 },
    { company: "Meridian HealthTech", listings: 742, growth: "+5.8%", recent: 62 }
  ],
  pipelineRuns: [
    { runDate: "2026-07-06", filesProcessed: 31, recordsImported: 5152799, recentProductsScored: 699830, status: "Completed" },
    { runDate: "2026-06-29", filesProcessed: 29, recordsImported: 5141038, recentProductsScored: 688412, status: "Completed" },
    { runDate: "2026-06-22", filesProcessed: 33, recordsImported: 5132904, recentProductsScored: 676905, status: "Completed" }
  ],
  flagged: [
    { device: "CardioSense Patch XT", company: "Apex BioSystems", reason: "High listing velocity in cardiac monitoring", score: 94.2 },
    { device: "NeuroMap Micro Array", company: "Northstar Surgical", reason: "Class III product with sparse category history", score: 84.1 },
    { device: "SonoFlow Vascular Catheter", company: "Pulse River Medical", reason: "Recent Class III vascular listing", score: 86.7 }
  ]
};

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
