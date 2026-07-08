export const bankExecutiveKpis = [
  { label: "Total deposits", value: "$42.8B", detail: "+4.6% QoQ", tone: "blue" as const },
  { label: "Loan portfolio", value: "$31.4B", detail: "+2.1% QoQ", tone: "teal" as const },
  { label: "Net interest margin", value: "3.42%", detail: "+18 bps YoY" },
  { label: "Complaint rate", value: "8.7", detail: "Per 10K customers", tone: "amber" as const },
  { label: "AI readiness", value: "87", detail: "Quality, lineage, controls" }
];

export const depositTrend = [
  { label: "Jan", value: 39.2, secondary: 28.4 },
  { label: "Feb", value: 39.8, secondary: 28.7 },
  { label: "Mar", value: 40.6, secondary: 29.3 },
  { label: "Apr", value: 41.5, secondary: 29.8 },
  { label: "May", value: 42.1, secondary: 30.5 },
  { label: "Jun", value: 42.8, secondary: 31.4 }
];

export const complaintTrend = [
  { label: "Jan", value: 1240, secondary: 92 },
  { label: "Feb", value: 1188, secondary: 86 },
  { label: "Mar", value: 1324, secondary: 104 },
  { label: "Apr", value: 1216, secondary: 81 },
  { label: "May", value: 1142, secondary: 73 },
  { label: "Jun", value: 1098, secondary: 69 }
];

export const riskIndicators = [
  { metric: "Commercial real estate exposure", value: "$6.8B", status: "Watch", trend: "+3.2% QoQ" },
  { metric: "Delinquency 30+ DPD", value: "1.42%", status: "Stable", trend: "-8 bps QoQ" },
  { metric: "Liquidity coverage proxy", value: "118%", status: "Healthy", trend: "+4 pts QoQ" },
  { metric: "High-risk complaint themes", value: "69", status: "Improving", trend: "-5.5% MoM" }
];

export const customerSegments = [
  { segment: "Mass market retail", customers: "1.42M", deposits: "$13.4B", loans: "$8.2B", quality: 94, aiReady: 89, priority: "Digital service routing" },
  { segment: "Affluent households", customers: "214K", deposits: "$11.7B", loans: "$5.4B", quality: 96, aiReady: 91, priority: "Relationship growth" },
  { segment: "Small business", customers: "82K", deposits: "$7.8B", loans: "$6.6B", quality: 91, aiReady: 84, priority: "Renewal and fraud signals" },
  { segment: "Commercial clients", customers: "9.6K", deposits: "$9.9B", loans: "$11.2B", quality: 88, aiReady: 79, priority: "Exposure monitoring" }
];

export const dataQualityRules = [
  { rule: "Customer identity match confidence", domain: "Customer", threshold: ">= 95%", current: "96.8%", owner: "Customer Data Product" },
  { rule: "Account balance freshness", domain: "Deposits", threshold: "< 4 hours", current: "2.1 hours", owner: "Core Banking Platform" },
  { rule: "Loan risk grade completeness", domain: "Credit Risk", threshold: ">= 98%", current: "97.4%", owner: "Risk Analytics" },
  { rule: "Complaint product mapping", domain: "Complaints", threshold: ">= 92%", current: "94.1%", owner: "CX Operations" },
  { rule: "Consent policy coverage", domain: "AI Use", threshold: "100%", current: "99.2%", owner: "Data Governance" }
];

export const roadmap = [
  { quarter: "Q1", theme: "Foundation", work: "Define business glossary, seed synthetic marts, publish executive KPI hierarchy." },
  { quarter: "Q2", theme: "Governance", work: "Add catalog ownership, lineage examples, data quality controls, and CFPB/FRED connectors." },
  { quarter: "Q3", theme: "Scale", work: "Extend Customer 360, risk indicators, semantic layer metrics, and role-based access patterns." },
  { quarter: "Q4", theme: "AI readiness", work: "Add governed retrieval patterns, executive narrative generation, evaluation logs, and usage controls." }
];

export const backlog = [
  "As a CFO, I want deposit and loan trends reconciled to certified definitions so I can trust board reporting.",
  "As a Chief Data Officer, I want quality and lineage visible beside KPIs so funding decisions reflect platform health.",
  "As a risk leader, I want complaint themes joined to product and segment data so emerging issues are found earlier.",
  "As an AI product manager, I want approved data products tagged by consent and sensitivity so pilots do not bypass governance."
];

export const glossary = [
  { term: "Certified KPI", definition: "A metric with approved business logic, owner, refresh target, and lineage path." },
  { term: "AI readiness index", definition: "Composite score for quality, freshness, lineage, sensitivity tagging, and policy coverage." },
  { term: "Gold data product", definition: "Curated business-ready dataset or metric layer designed for analytics, reporting, and AI use cases." },
  { term: "Complaint severity", definition: "Portfolio-safe score based on CFPB-style issue category, recurrence, response timeliness, and customer impact." }
];

export const lineageExamples = [
  "CFPB complaint issue -> standardized complaint theme -> product family -> executive complaint rate KPI.",
  "Core deposit account balance -> daily silver account snapshot -> gold deposit trend mart -> CFO dashboard.",
  "Loan servicing status -> credit risk silver table -> delinquency indicator -> risk committee scorecard.",
  "Customer consent flag -> governed customer profile -> AI eligibility policy -> executive summary guardrail."
];

export const dataSources = [
  { name: "CFPB Consumer Complaint Database", use: "Complaint themes, product categories, response timeliness, issue severity.", mode: "Public feed or downloaded CSV." },
  { name: "FRED economic indicators", use: "Rate environment, unemployment, inflation, and macro overlays for executive analytics.", mode: "Public API with key, or static extract." },
  { name: "FFIEC Call Report data", use: "Peer benchmark ratios, deposits, loan categories, and regulatory context.", mode: "Feasible future connector." },
  { name: "Synthetic core banking data", use: "Customer, account, transaction, loan, and segment facts with no private data.", mode: "Bundled portfolio seed data." }
];

export const governanceAssumptions = [
  "No private customer, account, transaction, or complaint data is included.",
  "Synthetic records are shaped to resemble enterprise banking analytics without representing a real institution.",
  "Sensitive attributes would require tokenization, role-based access, retention controls, and approved AI usage policies.",
  "Production connectors would use managed secrets and environment-specific credentials outside the repository."
];
