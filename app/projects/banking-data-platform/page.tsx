import { BankingDashboard } from "@/components/BankingDashboard";
import { ProjectDetail } from "@/components/ProjectDetail";

export default function BankingDataPlatformPage() {
  return (
    <ProjectDetail
      title="Banking Data Platform Demo"
      subtitle="A secure enterprise data platform concept for Customer 360, quality controls, lineage confidence, risk signals, and AI readiness."
      repo="https://github.com/tededmunds/banking-data-platform-demo"
      dashboard={<BankingDashboard />}
      problem="Banking teams are asked to personalize service, manage risk, satisfy compliance, and prepare for AI at the same time. The limiting factor is often not a missing dashboard; it is the absence of trusted customer entities, visible lineage, consent-aware controls, and a shared view of data quality."
      outcome="This case study presents Customer 360 as a governed product capability. It makes trust, lineage, risk flags, and AI readiness visible beside business segments so executives can fund the right platform improvements and product teams can build on reliable foundations."
      stakeholders={["Retail banking", "Risk and compliance", "Data governance", "AI product teams"]}
      architecture={["Core banking systems", "Identity resolution", "Consent and quality rules", "Governed customer mart", "Analytics and AI products"]}
      pipeline="The conceptual model combines customer, account, transaction, consent, and risk attributes into governed entities. Quality, lineage, exception, and AI-readiness scores are treated as product metrics that executives and delivery teams can manage, not as hidden engineering diagnostics."
      stack={["Next.js", "TypeScript", "Tailwind CSS", "Domain model", "Governance scoring", "Multi-tenant access concepts"]}
      decisions={[
        "Surface trust metrics beside business segment metrics so platform health is visible in business terms.",
        "Represent Customer 360 as a reusable product capability rather than a one-off reporting project.",
        "Connect AI readiness to consent, lineage, quality, and policy controls so AI adoption has an accountable path."
      ]}
      hiringSignal="This demonstrates enterprise data product thinking for financial services: data trust as a business outcome, compliance and lineage as product features, and AI readiness as a measurable operating capability across customer, risk, and technology stakeholders."
    />
  );
}
