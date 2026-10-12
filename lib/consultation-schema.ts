import { z } from "zod";

/** Convert Persian/Arabic-Indic digits to ASCII so phone numbers validate regardless of keyboard. */
export function normalizeDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
}

function isValidJalaliDate(value: string): boolean {
  const match = /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/.exec(normalizeDigits(value.trim()));
  if (!match) return false;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (year < 1300 || year > 1500 || month < 1 || month > 12 || day < 1) return false;

  const epbase = year - (year >= 0 ? 474 : 473);
  const epyear = 474 + (((epbase % 2820) + 2820) % 2820);
  const isLeapYear = ((epyear + 38) * 682) % 2816 < 682;
  const lastDay = month <= 6 ? 31 : month <= 11 ? 30 : isLeapYear ? 30 : 29;
  return day <= lastDay;
}

export const consultationSchema = z.object({
  first_name: z.string().trim().min(2, "نام را وارد کنید.").max(100, "نام نباید بیشتر از ۱۰۰ کاراکتر باشد."),
  last_name: z.string().trim().min(2, "نام خانوادگی را وارد کنید.").max(100, "نام خانوادگی نباید بیشتر از ۱۰۰ کاراکتر باشد."),
  phone: z
    .string()
    .transform((value) => normalizeDigits(value.trim()))
    .pipe(z.string().regex(/^09\d{9}$/, "شماره تماس معتبر وارد کنید (مثال: ۰۹۱۲۳۴۵۶۷۸۹).")),
  date: z
    .string({ error: "تاریخ شمسی را به درستی وارد کنید" })
    .trim()
    .refine(isValidJalaliDate, "تاریخ شمسی را به‌شکل ۱۴۰۵/۰۱/۱۵ وارد کنید."),
  slot: z.enum(["09:00-12:00", "12:00-15:00", "15:00-18:00"]),
  
  subject: z.enum(["web", "web-shop", "web-app", "optimization", "other"]),
  description: z
    .string()
    .trim()
    .min(10, "کمی بیشتر درباره پروژه‌تان بنویسید (حداقل ۱۰ کاراکتر).")
    .max(2000, "توضیحات نباید بیشتر از ۲۰۰۰ کاراکتر باشد."),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;

