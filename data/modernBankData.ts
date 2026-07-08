export const bankExecutiveKpis = [
  { label: "Total deposits", value: "$42.8B", detail: "Retail and commercial balances", trend: "+4.6% QoQ", tone: "blue" as const },
  { label: "Loan growth", value: "+6.2%", detail: "Driven by middle-market lending", trend: "+120 bps", tone: "teal" as const },
  { label: "Net interest margin", value: "3.42%", detail: "Treasury-certified executive KPI", trend: "+18 bps YoY", tone: "emerald" as const },
  { label: "30+ day delinquency", value: "1.42%", detail: "Consumer and small business loans", trend: "-8 bps QoQ" },
  { label: "Complaint volume", value: "1,098", detail: "CFPB-style monthly volume", trend: "-8.3% QoQ", tone: "amber" as const },
  { label: "Digital adoption", value: "68.4%", detail: "Active digital customers", trend: "+2.7 pts YoY", tone: "blue" as const },
  { label: "Data quality score", value: "94.1", detail: "Critical data elements passing rules", trend: "+3.4 pts", tone: "teal" as const },
  { label: "AI readiness score", value: "87", detail: "Quality, lineage, consent, policy", trend: "+9 pts", tone: "emerald" as const }
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

export const executiveInsights = [
  {
    title: "Growth signal",
    body: "Commercial loan growth increased 6.2% this quarter, driven primarily by middle-market lending in healthcare, logistics, and professional services.",
    confidence: "High confidence",
    evidence: "Gold loan mart, risk-grade completeness 97.4%"
  },
  {
    title: "Customer experience alert",
    body: "Mortgage complaints increased 14% in the Southeast region, with escrow analysis and payment servicing as the fastest-growing themes.",
    confidence: "Medium confidence",
    evidence: "CFPB-style complaint taxonomy, product mapping 94.1%"
  },
  {
    title: "Digital adoption recommendation",
    body: "Investigate declining mobile engagement among customers over age 65; branch-assisted digital enrollment may reduce service calls and complaints.",
    confidence: "Medium confidence",
    evidence: "Customer 360, channel events, consent coverage 99.2%"
  }
];

export const riskIndicators = [
  { metric: "Commercial real estate exposure", value: "$6.8B", status: "Watch", trend: "+3.2% QoQ", owner: "Credit Risk" },
  { metric: "30+ day delinquency", value: "1.42%", status: "Stable", trend: "-8 bps QoQ", owner: "Portfolio Risk" },
  { metric: "Liquidity coverage proxy", value: "118%", status: "Healthy", trend: "+4 pts QoQ", owner: "Treasury" },
  { metric: "High-severity complaint themes", value: "69", status: "Improving", trend: "-5.5% MoM", owner: "Customer Experience" }
];

export const customerSegments = [
  { segment: "Mass market retail", customers: "1.42M", growth: "+2.4%", deposits: "$13.4B", loans: "$8.2B", digital: "71%", quality: 94, aiReady: 89, priority: "Digital service routing" },
  { segment: "Affluent households", customers: "214K", growth: "+3.8%", deposits: "$11.7B", loans: "$5.4B", digital: "82%", quality: 96, aiReady: 91, priority: "Relationship growth" },
  { segment: "Small business", customers: "82K", growth: "+5.1%", deposits: "$7.8B", loans: "$6.6B", digital: "64%", quality: 91, aiReady: 84, priority: "Renewal and fraud signals" },
  { segment: "Commercial clients", customers: "9.6K", growth: "+4.7%", deposits: "$9.9B", loans: "$11.2B", digital: "58%", quality: 88, aiReady: 79, priority: "Exposure monitoring" }
];

export const dataQualityRules = [
  { rule: "Customer identity match confidence", cde: "customer_id", domain: "Customer", threshold: ">= 95%", current: "96.8%", owner: "Customer Data Product", steward: "MDM Steward", why: "Prevents duplicate households, broken journeys, and unreliable AI personalization." },
  { rule: "Account balance freshness", cde: "current_balance", domain: "Deposits", threshold: "< 4 hours", current: "2.1 hours", owner: "Core Banking Platform", steward: "Deposit Ops", why: "Keeps liquidity, margin, and executive deposit reporting aligned to operating reality." },
  { rule: "Loan risk grade completeness", cde: "risk_grade", domain: "Credit Risk", threshold: ">= 98%", current: "97.4%", owner: "Risk Analytics", steward: "Credit Data Steward", why: "Supports portfolio monitoring, stress analysis, and responsible AI-generated risk narratives." },
  { rule: "Complaint product mapping", cde: "product_family", domain: "Complaints", threshold: ">= 92%", current: "94.1%", owner: "CX Operations", steward: "Complaint Taxonomy Owner", why: "Connects complaint themes to accountable product owners and remediation plans." },
  { rule: "Consent policy coverage", cde: "ai_eligible_flag", domain: "AI Use", threshold: "100%", current: "99.2%", owner: "Data Governance", steward: "Privacy Office", why: "Ensures AI use cases respect customer consent, sensitivity, and approved policy boundaries." }
];

export const roadmap = [
  { quarter: "Q1", theme: "Executive KPI foundation", work: "Certify deposit, loan, margin, complaint, and delinquency definitions; publish dashboard prototype.", outcome: "One executive metric language" },
  { quarter: "Q2", theme: "Governed data products", work: "Add catalog ownership, CDE monitoring, lineage, and CFPB/FRED static ingestion snapshots.", outcome: "Trusted source-to-metric traceability" },
  { quarter: "Q3", theme: "Risk and CX expansion", work: "Extend Customer 360, regional complaint themes, risk indicators, and role-based access patterns.", outcome: "Earlier issue detection" },
  { quarter: "Q4", theme: "AI decision support", work: "Add governed executive narrative generation, retrieval guardrails, evaluation logs, and adoption telemetry.", outcome: "AI outputs leaders can trust" }
];

export const backlog = [
  { priority: "P0", story: "As a CFO, I need deposit and loan trends reconciled to certified definitions so board reporting is consistent.", acceptance: "KPI owner, definition, source lineage, refresh SLA, and variance notes are visible." },
  { priority: "P0", story: "As a Chief Data Officer, I need quality and lineage visible beside KPIs so platform risk is discussed in business terms.", acceptance: "Every executive KPI shows CDE coverage, quality score, owner, and lineage status." },
  { priority: "P1", story: "As a risk leader, I need complaint themes joined to product and segment data so emerging conduct issues are found earlier.", acceptance: "Complaint trends can be grouped by region, product family, severity, and customer segment." },
  { priority: "P1", story: "As an AI product manager, I need approved data products tagged by consent and sensitivity so pilots do not bypass governance.", acceptance: "AI summaries only use certified gold datasets with sensitivity and consent metadata." }
];

export const glossary = [
  { term: "Certified KPI", definition: "A metric with approved business logic, owner, refresh target, source lineage, and known limitations." },
  { term: "Critical data element", definition: "A field that materially affects financial reporting, risk decisions, customer treatment, regulatory response, or AI output quality." },
  { term: "AI readiness index", definition: "Composite score for quality, freshness, lineage, sensitivity tagging, consent coverage, policy approval, and monitoring." },
  { term: "Gold data product", definition: "Curated business-ready dataset or metric layer designed for analytics, reporting, risk review, and approved AI use cases." },
  { term: "Complaint severity", definition: "Portfolio-safe score based on CFPB-style issue category, recurrence, response timeliness, customer impact, and operational risk." }
];

export const kpiDefinitions = [
  { name: "Deposit growth", definition: "Period-over-period change in end-of-day deposit balances by product, region, and segment.", owner: "Treasury", certification: "Certified" },
  { name: "Loan growth", definition: "Period-over-period change in outstanding loan balances by product, segment, and risk grade.", owner: "Credit Risk", certification: "Certified" },
  { name: "Complaint rate", definition: "Consumer complaints per 10,000 active customers, grouped by product family, channel, region, and severity.", owner: "Customer Experience", certification: "Certified" },
  { name: "AI readiness index", definition: "Weighted score for data quality, freshness, lineage, sensitivity tagging, consent coverage, and policy approval.", owner: "Data Governance", certification: "In review" }
];

export const successMetrics = [
  { metric: "Certified executive KPI coverage", target: "90%+", current: "76%", signal: "Reduces metric disputes in operating reviews." },
  { metric: "Critical data element pass rate", target: "95%+", current: "94.1%", signal: "Improves trust in reporting and AI summaries." },
  { metric: "Complaint theme time to detect", target: "< 5 days", current: "7 days", signal: "Creates earlier customer and operational risk visibility." },
  { metric: "AI summary evidence coverage", target: "100%", current: "88%", signal: "Ensures generated insights cite governed source data." }
];

export const executiveStakeholders = [
  { group: "Executive committee", decision: "Allocate investment across growth, risk, operations, and AI readiness." },
  { group: "Chief Data Office", decision: "Prioritize data products, ownership, quality remediation, and catalog certification." },
  { group: "Risk and compliance", decision: "Monitor credit, conduct, liquidity, complaints, retention, and audit evidence." },
  { group: "Digital and retail banking", decision: "Improve adoption, complaint drivers, customer journeys, and service outcomes." }
];

export const lineageExamples = [
  "CFPB complaint issue -> complaint taxonomy -> product family -> regional complaint rate -> executive customer experience alert.",
  "Core deposit account balance -> daily silver account snapshot -> gold deposit trend mart -> CFO operating review.",
  "Loan servicing status -> credit risk silver table -> delinquency indicator -> risk committee scorecard.",
  "Customer consent flag -> governed customer profile -> AI eligibility policy -> executive summary guardrail."
];

export const dataSources = [
  { name: "CFPB Consumer Complaint Database", use: "Complaint themes, product categories, response timeliness, issue severity.", mode: "Public CSV/API snapshot." },
  { name: "FRED economic indicators", use: "Rate environment, unemployment, inflation, and macro overlays for executive analytics.", mode: "Public API or static extract." },
  { name: "FFIEC Call Report data", use: "Peer benchmark ratios, deposits, loan categories, and regulatory context.", mode: "Future public-data connector." },
  { name: "Synthetic core banking data", use: "Customer, account, transaction, loan, segment, risk, and governance facts.", mode: "Bundled portfolio seed data." }
];

export const governanceAssumptions = [
  { topic: "PII classification", detail: "Customer identifiers, contact details, balances, transactions, and complaint narratives would be classified, tokenized, and access-controlled." },
  { topic: "Retention", detail: "Complaint, transaction, model-output, and audit records would follow bank retention schedules and legal hold requirements." },
  { topic: "Audit logging", detail: "Dashboard access, AI summary generation, source refreshes, rule failures, and certification changes would be logged." },
  { topic: "AI governance", detail: "Executive narratives would require approved data products, evidence links, confidence labels, model evaluation, and human review for sensitive use." }
];

export const productTradeoffs = [
  "Use static synthetic data for portfolio reliability; document live CFPB, FRED, and FFIEC integration points separately.",
  "Prioritize executive operating decisions over deep transaction-level drill-down.",
  "Expose quality, lineage, and ownership directly in the UI because trust is part of the product experience.",
  "Treat AI as a governed consumption layer, not a replacement for metric certification and data stewardship."
];
