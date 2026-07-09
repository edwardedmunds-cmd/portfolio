import { CatalogDashboard } from "@/components/CatalogDashboard";
import { ProjectDetail } from "@/components/ProjectDetail";

export default function AiDataCatalogPage() {
  return (
    <ProjectDetail
      title="AI Data Catalog / Governance Demo"
      subtitle="A data catalog product surface for discoverability, ownership, quality, lineage, and approved AI use cases."
      repo="https://github.com/edwardedmunds-cmd/portfolio/tree/main/app/projects/ai-data-catalog"
      dashboard={<CatalogDashboard />}
      problem="Enterprise AI programs stall when teams cannot quickly tell which datasets are trusted, who owns them, what restrictions apply, and whether a proposed model, copilot, or retrieval workflow is approved. A catalog that only stores metadata does not solve the adoption problem."
      outcome="This case study turns catalog metadata into a governed product experience: searchable datasets, ownership, sensitivity, quality, lineage, and approved AI-use context in one interface for analytics, compliance, security, and product teams."
      stakeholders={["Data owners", "AI governance", "Analytics teams", "Security and privacy", "Business product teams"]}
      architecture={["Metadata capture", "Ownership registry", "Quality and sensitivity scoring", "Lineage graph", "AI-use approval workflow"]}
      pipeline="The model treats datasets as governed products with domain, owner, sensitivity, quality, lineage, and approved AI-use attributes. Search and scoring make the catalog useful for daily discovery while retaining the controls required for regulated enterprise AI."
      stack={["Next.js", "TypeScript", "Tailwind CSS", "Catalog metadata", "Governance workflow", "AI use case registry"]}
      decisions={[
        "Make ownership, sensitivity, and approved use visible in the same place as dataset search.",
        "Use simple quality and lineage labels that business users can understand quickly and governance teams can defend.",
        "Position catalog metadata as an adoption experience, not just a compliance inventory."
      ]}
      hiringSignal="This project shows how Ted connects governance, metadata, and AI enablement into a practical product interface for healthcare, insurance, banking, and enterprise data teams that need to move faster without losing control of risk."
    />
  );
}
