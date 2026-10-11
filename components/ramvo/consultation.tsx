"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpLeft, CircleCheckBig, LoaderCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { consultationSchema } from "@/lib/consultation-schema";
import { submitConsultation } from "@/lib/consultation.functions";

export function ConsultationForm() {
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const parsed = consultationSchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message || "اطلاعات را بررسی کنید.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      const result = await submitConsultation(parsed.data);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setSuccess(true);
      form.reset();
    } catch {
      setError("ثبت درخواست انجام نشد. دوباره تلاش کنید.");
    } finally {
      setBusy(false);
    }
  }

  return success ? (
    <div className="form-success" role="status">
      <CircleCheckBig size={48} />
      <h3>درخواست شما ثبت شد.</h3>
      <p>اطلاعات پروژه با موفقیت ذخیره شد. از اعتماد شما به رموو ممنونیم.</p>
      <Button variant="outline" onClick={() => setSuccess(false)}>
        ثبت درخواست دیگر
      </Button>
    </div>
  ) : (
    <form className="consultation-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label>
          نام و نام خانوادگی
          <input name="name" placeholder="چطور صدایتان کنیم؟" maxLength={100} autoComplete="name" required />
        </label>
        <label>
          شماره تماس
          <input
            name="phone"
            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
            dir="ltr"
            maxLength={11}
            inputMode="tel"
            autoComplete="tel"
            required
          />
        </label>
      </div>
      <label>
        چه چیزی می‌خواهید بسازیم؟
        <select name="project_type" defaultValue="web">
          <option value="web">وب‌سایت / وب‌اپلیکیشن اختصاصی</option>
          <option value="backend">معماری سیستم و بک‌اند</option>
          <option value="design">طراحی رابط کاربری</option>
          <option value="optimization">بهینه‌سازی و بازنویسی</option>
          <option value="other">سایر پروژه‌ها</option>
        </select>
      </label>
      <label>
        کمی از ایده‌تان بگویید
        <textarea
          name="description"
          rows={4}
          maxLength={2000}
          placeholder="درباره پروژه، نیازها و هدف‌هایتان بنویسید..."
          required
        />
      </label>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <div className="form-submit">
        <Button disabled={busy} type="submit" size="lg">
          {busy ? <LoaderCircle className="animate-spin" /> : <ArrowUpLeft />}
          {busy ? "در حال ثبت..." : "ارسال درخواست مشاوره"}
        </Button>
        <span>
          <ShieldCheck size={15} />
          اطلاعات شما نزد ما محفوظ است.
        </span>
      </div>
    </form>
  );
}
