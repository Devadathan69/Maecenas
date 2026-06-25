import { json, notFound } from "@/backend/api/json";
import { findAnswer } from "@/backend/db/store";

type Params = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const answer = await findAnswer(id);
  if (!answer) return notFound("Answer not found");
  return json({ answer });
}
