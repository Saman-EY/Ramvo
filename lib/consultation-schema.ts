import { z } from "zod";

/** Convert Persian/Arabic-Indic digits to ASCII so phone numbers validate regardless of keyboard. */
export function normalizeDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
}

export const consultationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "نام و نام خانوادگی را وارد کنید.")
    .max(100, "نام نباید بیشتر از ۱۰۰ کاراکتر باشد."),
  phone: z
    .string()
    .transform((value) => normalizeDigits(value.trim()))
    .pipe(z.string().regex(/^09\d{9}$/, "شماره تماس معتبر وارد کنید (مثال: ۰۹۱۲۳۴۵۶۷۸۹).")),
  project_type: z.enum(["web", "backend", "design", "optimization", "other"]),
  description: z
    .string()
    .trim()
    .min(10, "کمی بیشتر درباره پروژه‌تان بنویسید (حداقل ۱۰ کاراکتر).")
    .max(2000, "توضیحات نباید بیشتر از ۲۰۰۰ کاراکتر باشد."),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;
