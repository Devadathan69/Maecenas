import { json, notFound } from "@/backend/api/json";
import { findReceipt } from "@/backend/db/store";

type Params = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const receipt = await findReceipt(id);
  if (!receipt) return notFound("Receipt not found");
  return json({ receipt });
}
