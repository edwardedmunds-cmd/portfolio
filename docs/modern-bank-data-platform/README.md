# Modern Bank Data Platform

A portfolio-ready banking data product demo focused on enterprise data platforms, data product management, governance, AI readiness, and executive analytics.

This project is implemented inside the Next.js portfolio at `app/projects/banking-data-platform`. It is designed for GitHub and Vercel deployment without private or sensitive data.

## Why It Matters to Banks

Banks need trusted data products to manage growth, credit risk, liquidity, customer experience, complaints, regulatory expectations, and AI adoption. The hard part is rarely a single dashboard. The harder product problem is aligning definitions, ownership, data quality, lineage, governance controls, and executive decision workflows.

This demo positions the data platform as a product capability:

- Executive KPIs with certified definitions
- Complaint and customer analytics using public or synthetic data
- Medallion architecture from source systems to gold data products
- Semantic and governance layers for consistent reporting
- AI-ready data foundations with consent, lineage, quality, and policy controls

## Dataset Sources

The deployed portfolio uses synthetic seed data so the demo is public-safe and fast on Vercel. Real integrations could plug into the same architecture:

- CFPB Consumer Complaint Database: complaint themes, products, company responses, timeliness, and issue severity.
- FRED economic indicators: rate environment, unemployment, inflation, and macro context.
- FFIEC Call Report data: peer benchmark ratios, deposit and loan categories, and regulatory context.
- Synthetic banking data: customers, accounts, loans, balances, transactions, risk grades, and data quality signals.

No private customer, account, transaction, institution, or credential data is included.

## Architecture

The demo uses a medallion-style reference architecture:

1. Source systems: core banking, loan servicing, CRM, digital events, CFPB, FRED, FFIEC, and synthetic seed data.
2. Bronze: raw immutable extracts, schema capture, ingestion metadata, and freshness checks.
3. Silver: standardized customer, account, loan, complaint, balance, risk, and consent entities.
4. Gold: certified KPI marts, Customer 360, complaint analytics, risk indicators, and semantic metrics.
5. Analytics and AI: executive dashboard, risk views, governed retrieval, and AI-generated executive summaries.

Governance capabilities include a data catalog, business glossary, data quality rules, lineage examples, policy controls, semantic metrics, role-based access, and audit evidence.

## Technical Implementation

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static synthetic data module
- Reusable dashboard, table, chart, metric, and architecture components
- No backend service required for the portfolio demo

Primary files:

- `app/projects/banking-data-platform/page.tsx`
- `components/BankingDashboard.tsx`
- `components/BankArchitectureDiagram.tsx`
- `data/modernBankData.ts`
- `public/modern-bank-data-platform/sample-data.json`

## How to Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/projects/banking-data-platform`.

## How to Build

```bash
npm run build
```

## How to Deploy

The project is static and works with the standard Vercel Next.js deployment flow:

1. Push the portfolio repository to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Use `npm install` and `npm run build`.
5. Deploy.

No secrets are required for the static demo. Future live integrations should store API keys, database credentials, and ingestion secrets in Vercel or cloud-managed secret stores, never in the repository.

## Product Decisions and Tradeoffs

- Static seed data was chosen over live ingestion to keep the portfolio reliable, fast, and safe for public deployment.
- The dashboard emphasizes executive decision support, not operational transaction drill-down.
- AI readiness is represented as a product metric because AI pilots in banking depend on quality, lineage, policy coverage, and approved usage patterns.
- CFPB, FRED, FFIEC, and banking feeds are documented as integration points rather than required runtime dependencies.
- Architecture diagrams are built in React and Tailwind so they deploy cleanly with the portfolio.

## Data Product Artifacts Included

- Product brief and executive overview
- User personas
- Business glossary
- KPI definitions
- Sample roadmap
- Backlog and user stories
- Data quality rules
- Lineage examples
- Governance assumptions
- Risks and mitigation considerations

## Future Enhancements

- Add a CFPB complaint CSV ingestion script and scheduled static snapshot export.
- Add FRED macro overlays for rate and unemployment context.
- Add FFIEC peer benchmark extracts if feasible for public deployment.
- Add richer synthetic transaction generation with anomaly scenarios.
- Add downloadable product brief and data dictionary artifacts.
- Add model evaluation logs for AI-generated executive summaries.
