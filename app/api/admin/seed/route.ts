import { json } from "@/backend/api/json";
import { resetDbWithSeeds } from "@/backend/db/store";

export async function POST() {
  const db = await resetDbWithSeeds();
  return json({ ok: true, sources: db.sources.length });
}
