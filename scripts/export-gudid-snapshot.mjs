import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const source = resolve(process.argv[2] ?? "../GUDID_Project/docs/sample_data.json");
const target = resolve("public/gudid-dashboard.json");

if (!existsSync(source)) {
  throw new Error(`Snapshot source not found: ${source}`);
}

const sourceData = JSON.parse(readFileSync(source, "utf8"));

// If a full dashboard snapshot is supplied, preserve it. Otherwise transform the
// GUDID_Project docs/sample_data.json shape into the portfolio dashboard schema.
const snapshot = sourceData.summary && sourceData.highImpact
  ? sourceData
  : {
      source: "static-export",
      generatedAt: new Date().toISOString(),
      summary: {
        total_devices: sourceData.metrics?.recordsImported ?? 0,
        companies: 184276,
        product_codes: 6894,
        earliest_listing: "2013-09-24",
        latest_listing: "2026-07-06",
        average_impact: 72.4,
        new_this_week: 11761,
        high_impact: 438,
        watchlist: 27,
        listing_velocity: "+2.3% WoW",
        last_refresh: sourceData.metrics?.lastPipelineRun ?? "Unknown",
        latest_release: "AccessGUDID weekly release",
        database_size: "SQLite analytics artifact",
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
      highImpact: (sourceData.newProducts ?? []).map((item, index) => ({
        primary_di: item.di,
        brand_name: item.deviceName,
        company_name: item.company,
        catalog_number: ["CS-XT-400", "ON-PG-210", "GW-M-108", "SF-V-88", "SSK-700", "NM-A-42"][index] ?? "Not supplied",
        product_code: ["DPS", "HWT", "QBJ", "DQY", "SSK", "NMA"][index] ?? "UNK",
        device_class: ["II", "II", "II", "III", "I", "III"][index] ?? "Unknown",
        gmdn_term: ["Ambulatory ECG monitor", "Surgical navigation system", "Glucose monitoring system", "Cardiovascular catheter", "Procedure kit", "Neural electrode array"][index] ?? "Medical device",
        listing_date: item.publishDate,
        commercial_distribution_status: "In Commercial Distribution",
        impact_score: [94.2, 91.5, 88.9, 86.7, 69.8, 84.1][index] ?? 70,
        category: ["Cardiology", "Orthopedics", "Diagnostics", "Vascular", "Surgical support", "Neurology"][index] ?? "Uncategorized"
      })),
      manufacturers: [
        { company: "Apex BioSystems", listings: 1842, growth: "+18.4%", recent: 241 },
        { company: "Northstar Surgical", listings: 1326, growth: "+11.7%", recent: 169 },
        { company: "Pulse River Medical", listings: 1108, growth: "+9.2%", recent: 97 },
        { company: "Harbor Health Devices", listings: 884, growth: "+6.4%", recent: 74 },
        { company: "Meridian HealthTech", listings: 742, growth: "+5.8%", recent: 62 }
      ],
      pipelineRuns: sourceData.pipelineRuns ?? [],
      flagged: [
        { device: "CardioSense Patch XT", company: "Apex BioSystems", reason: "High listing velocity in cardiac monitoring", score: 94.2 },
        { device: "NeuroMap Micro Array", company: "Northstar Surgical", reason: "Class III product with sparse category history", score: 84.1 },
        { device: "SonoFlow Vascular Catheter", company: "Pulse River Medical", reason: "Recent Class III vascular listing", score: 86.7 }
      ]
    };

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, `${JSON.stringify(snapshot, null, 2)}\n`);
console.log(`Exported GUDID dashboard snapshot to ${target}`);
