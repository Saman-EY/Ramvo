"use server";
import { consultationSchema } from "./consultation-schema";

export type ConsultationResult =
  | { ok: true }
  | { ok: false; error: string };

/**
 * Server Action that receives consultation form submissions.
 *
 * Validation happens here as well (server-side) because actions can be
 * invoked directly via POST — never trust the client alone.
 *
 * NOTE: There is no backend/database in this project yet. Submissions are
 * currently logged to the server console. Wire this up to your email
 * provider, database, or CRM before going live.
 */
export async function submitConsultation(data: unknown): Promise<ConsultationResult> {
  const parsed = consultationSchema.safeParse(data);
  if (!parsed.success) {
    return {
      ok: false,
      error: parsed.error.issues[0]?.message || "اطلاعات را بررسی کنید.",
    };
  }

  console.log("[consultation] new submission:", parsed.data);
  return { ok: true };
}
