import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8fafc",
          color: "#0f172a",
          padding: "72px",
          fontFamily: "Arial"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#0f766e",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase"
          }}
        >
          <span>Ted Edmunds</span>
          <span>Data Product Leader</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 76, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}>
            Enterprise analytics, AI-ready data products, and executive dashboards.
          </div>
          <div style={{ maxWidth: 900, color: "#475569", fontSize: 30, lineHeight: 1.35 }}>
            Portfolio for regulated industries: banking, insurance, healthcare, governance, and secure multi-tenant analytics.
          </div>
        </div>
      </div>
    ),
    size
  );
}
