"use client";

import { useState } from "react";
import { useForm, type FieldErrors, type Resolver } from "react-hook-form";
import { ArrowUpLeft, CircleCheckBig, LoaderCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { consultationSchema } from "@/lib/consultation-schema";
import type { ConsultationInput } from "@/lib/consultation-schema";
import { submitConsultation } from "@/lib/consultation.functions";

type ConsultationFormValues = {
  name: string;
  phone: string;
  project_type: ConsultationInput["project_type"];
  description: string;
};

const consultationResolver: Resolver<ConsultationFormValues, unknown, ConsultationInput> = async (values) => {
  const parsed = consultationSchema.safeParse(values);

  if (parsed.success) {
    return { values: parsed.data, errors: {} };
  }

  const errors: FieldErrors<ConsultationFormValues> = {};
  for (const issue of parsed.error.issues) {
    const field = issue.path[0];
    if (typeof field === "string" && !errors[field]) {
      errors[field as keyof ConsultationFormValues] = { type: issue.code, message: issue.message };
    }
  }

  return { values: {}, errors };
};

export function ConsultationForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormValues, unknown, ConsultationInput>({
    resolver: consultationResolver,
    defaultValues: { project_type: "web" },
  });

  async function onSubmit(values: ConsultationInput) {
    try {
      const result = await submitConsultation(values);
      if (!result.ok) {
        setError("root.server", { type: "server", message: result.error });
        return;
      }
      setSuccess(true);
      reset();
    } catch {
      setError("root.server", {
        type: "server",
        message: "ثبت درخواست انجام نشد. دوباره تلاش کنید.",
      });
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
    <form className="consultation-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-row">
        <label>
          نام و نام خانوادگی
          <input {...register("name")} placeholder="چطور صدایتان کنیم؟" maxLength={100} autoComplete="name" required />
          {errors.name && <span className="form-error" role="alert">{errors.name.message}</span>}
        </label>
        <label>
          شماره تماس
          <input
            {...register("phone")}
            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
            dir="ltr"
            maxLength={11}
            inputMode="tel"
            autoComplete="tel"
            required
          />
          {errors.phone && <span className="form-error" role="alert">{errors.phone.message}</span>}
        </label>
      </div>
      <label>
        چه چیزی می‌خواهید بسازیم؟
        <select {...register("project_type")}>
          <option value="web">وب‌سایت شخصی</option>
          <option value="web-shop">وب‌سایت فروشگاهی</option>
          <option value="web-app">وب‌اپلیکیشن</option>
          <option value="optimization">بهینه‌سازی و بازنویسی</option>
          <option value="other">سایر پروژه‌ها</option>
        </select>
      </label>
      <label>
        کمی از ایده‌تان بگویید
        <textarea
          {...register("description")}
          rows={4}
          maxLength={2000}
          placeholder="درباره پروژه، نیازها و هدف‌هایتان بنویسید..."
          required
        />
        {errors.description && <span className="form-error" role="alert">{errors.description.message}</span>}
      </label>
      {errors.root?.server && (
        <p className="form-error" role="alert">
          {errors.root.server.message}
        </p>
      )}
      <div className="form-submit">
        <Button disabled={isSubmitting} type="submit" size="lg">
          {isSubmitting ? <LoaderCircle className="animate-spin" /> : <ArrowUpLeft />}
          {isSubmitting ? "در حال ثبت..." : "ارسال درخواست مشاوره"}
        </Button>
        <span>
          <ShieldCheck size={15} />
          اطلاعات شما نزد ما محفوظ است.
        </span>
      </div>
    </form>
  );
}
