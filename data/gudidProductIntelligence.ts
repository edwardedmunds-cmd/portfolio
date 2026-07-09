import type { GudidListing } from "@/data/projects";

export type RecallIntelligence = {
  count: number;
  highestClass?: "Class I" | "Class II" | "Class III";
  latestDate?: string;
  latestReason?: string;
};

export type ManufacturerIntelligence = {
  status?: "Public" | "Private" | "Unknown";
  website?: string;
  secEdgar?: "Available" | "Unavailable" | "Not applicable";
};

export type AiInterpretation = {
  marketImpact: "Low" | "Medium" | "High";
  whyItMatters: string;
  factors: string[];
  confidence: "Low" | "Medium" | "High";
};

export type ProductIntelligence = {
  description?: string;
  gmdnTerms?: string;
  implantable?: boolean;
  singleUse?: boolean;
  sterile?: boolean;
  lifeSupporting?: boolean;
  recall?: RecallIntelligence;
  manufacturer?: ManufacturerIntelligence;
  ai?: AiInterpretation;
};

export const gudidProductIntelligence: Record<string, ProductIntelligence> = {
  "00819876543210": {
    description: "Ambulatory ECG monitoring device represented in AccessGUDID-style fields as a cardiac monitoring product.",
    gmdnTerms: "Ambulatory ECG monitor",
    implantable: false,
    singleUse: true,
    sterile: false,
    lifeSupporting: false,
    recall: {
      count: 1,
      highestClass: "Class II",
      latestDate: "2025-11-14",
      latestReason: "Demo recall context: labeling and software-version review for a monitoring accessory."
    },
    manufacturer: {
      status: "Private",
      website: "https://example.com/apex-biosystems",
      secEdgar: "Not applicable"
    },
    ai: {
      marketImpact: "High",
      whyItMatters:
        "The product appears in a high-activity cardiac monitoring category and has a high directional impact score, making it useful for analyst triage.",
      factors: ["High impact score", "Recent listing date", "Cardiac monitoring category", "Recall context available"],
      confidence: "Medium"
    }
  },
  "00345678901234": {
    description: "Reusable surgical guide used with orthopedic navigation workflows.",
    gmdnTerms: "Surgical navigation system accessory; orthopedic instrument guide",
    implantable: false,
    singleUse: false,
    sterile: true,
    lifeSupporting: false,
    recall: {
      count: 0
    },
    manufacturer: {
      status: "Private",
      website: "https://example.com/northstar-surgical",
      secEdgar: "Not applicable"
    },
    ai: {
      marketImpact: "High",
      whyItMatters:
        "The listing sits in a surgical navigation category with a high impact score, so it may be relevant for market monitoring and regulatory review queues.",
      factors: ["High impact score", "Surgical navigation category", "Sterile reusable workflow", "No demo recall records found"],
      confidence: "Medium"
    }
  },
  "00678901234567": {
    description: "Glucose monitoring sensor represented in the demo as a diagnostics-oriented monitoring product.",
    gmdnTerms: "Glucose monitoring system",
    implantable: false,
    singleUse: true,
    sterile: false,
    lifeSupporting: false,
    recall: {
      count: 2,
      highestClass: "Class II",
      latestDate: "2025-08-02",
      latestReason: "Demo recall context: packaging lot review and customer notification workflow."
    },
    manufacturer: {
      status: "Private",
      website: "https://example.com/apex-biosystems",
      secEdgar: "Not applicable"
    },
    ai: {
      marketImpact: "Medium",
      whyItMatters:
        "The product combines strong recent-listing activity with diagnostic monitoring relevance, but the demo recall context reduces confidence.",
      factors: ["Diagnostics category", "Recent listing date", "Recall context available", "High but not top impact score"],
      confidence: "Medium"
    }
  },
  "00112233445566": {
    description: "Cardiovascular catheter represented in the demo as a higher-risk vascular product category.",
    gmdnTerms: "Cardiovascular catheter",
    implantable: false,
    singleUse: true,
    sterile: true,
    lifeSupporting: true,
    recall: {
      count: 1,
      highestClass: "Class I",
      latestDate: "2025-05-19",
      latestReason: "Demo recall context: potential packaging integrity issue requiring field action review."
    },
    manufacturer: {
      status: "Unknown",
      website: "https://example.com/pulse-river-medical",
      secEdgar: "Unavailable"
    },
    ai: {
      marketImpact: "High",
      whyItMatters:
        "The device class, vascular category, and life-supporting flag make this a strong candidate for prioritized human review in a public-data workflow.",
      factors: ["Class III device", "Vascular catheter category", "Life-supporting flag", "Class I demo recall context"],
      confidence: "High"
    }
  }
};

export function getDefaultProductIntelligence(device: GudidListing): ProductIntelligence {
  return {
    description: `${device.brand_name} is represented in this portfolio snapshot using AccessGUDID listing fields for product-code, class, manufacturer, GMDN term, and publication date.`,
    gmdnTerms: device.gmdn_term,
    recall: { count: 0 },
    manufacturer: {
      status: "Unknown",
      secEdgar: "Unavailable"
    },
    ai: {
      marketImpact: device.impact_score >= 85 ? "Medium" : "Low",
      whyItMatters:
        "This FDA-only summary is limited to available AccessGUDID-style listing fields. It should be used for portfolio triage, not clinical, purchasing, or regulatory conclusions.",
      factors: ["AccessGUDID listing fields", "Directional impact score", "Manufacturer and product-code metadata"],
      confidence: "Low"
    }
  };
}
