import snapshot from "../../public/gudid-dashboard.json";

export const dynamic = "force-static";

export function GET() {
  return Response.json(snapshot, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=3600"
    }
  });
}
