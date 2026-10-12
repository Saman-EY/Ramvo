"use client";

import { useState } from "react";
import { useForm, type FieldErrors, type Resolver } from "react-hook-form";
import { ArrowUpLeft, CircleCheckBig, LoaderCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { consultationSchema } from "@/lib/consultation-schema";
import type { ConsultationInput } from "@/lib/consultation-schema";
import DatePickerInput from "../ui/DatePicker";
import { useSubmitConsulting } from "@/lib/hooks/mutations/others.mutations";
import toast from "react-hot-toast";
import { handleErrorToastOnMutation } from "@/lib/functions";

type ConsultationFormValues = {
  first_name: string;
  last_name: string;
  phone: string;
  date: string;
  slot: ConsultationInput["slot"];
  subject: ConsultationInput["subject"];
  description: string;
};

const fieldClass =
  "w-full min-w-0 rounded-[5px] border border-border bg-card p-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-primary max-[500px]:px-[9px]";

const consultationResolver: Resolver<ConsultationFormValues, unknown, ConsultationInput> = async (values) => {
  const parsed = consultationSchema.safeParse(values);

  if (parsed.success) {
    return { values: parsed.data, errors: {} };
  }

  const errors: FieldErrors<ConsultationFormValues> = {};
  for (const issue of parsed.error.issues) {
    const field = issue.path[0];
    if (typeof field === "string" && field in values) {
      const fieldName = field as keyof ConsultationFormValues;
      if (!errors[fieldName]) {
        errors[fieldName] = { type: issue.code, message: issue.message };
      }
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
    control,
    watch,
    formState: { errors },
  } = useForm<ConsultationFormValues, unknown, ConsultationInput>({
    resolver: consultationResolver,
    defaultValues: { date: "", subject: "web", slot: "09:00-12:00" },
  });

  const { mutate, isPending } = useSubmitConsulting();

  async function onSubmit(values: ConsultationInput) {
    const { first_name, last_name, phone, date, slot, subject, description } = values;

    mutate(
      { first_name, last_name, phone, date, slot, subject, description },
      {
        onSuccess: (data) => {
          toast.success("با موفقیت ثبت شد");
          setSuccess(true);
        },
        onError: (error: any) => {
          const errors = error?.response?.data;
          console.log(errors);
          handleErrorToastOnMutation(errors);
        },
      },
    );
  }

  return success ? (
    <div className="flex min-h-[360px] flex-col items-center justify-center gap-[19px] text-center" role="status">
      <CircleCheckBig size={48} />
      <h3 className="text-[23px] font-bold">درخواست شما ثبت شد.</h3>
      <p className="text-[15px] leading-8 text-muted-foreground">اطلاعات پروژه با موفقیت ذخیره شد. از اعتماد شما به رموو ممنونیم.</p>
      {/* <Button variant="outline" onClick={() => setSuccess(false)}>
        ثبت درخواست دیگر
      </Button> */}
    </div>
  ) : (
    <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-2 gap-4 max-[500px]:gap-3">
        <label className="flex flex-col gap-[9px] text-sm">
          <span>
            نام<span className="font-bold text-red-500"> *</span>
          </span>
          <input className="w-full min-w-0 rounded-[5px] border border-border bg-card p-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-primary max-[500px]:px-[9px]" {...register("first_name")} placeholder="نام خود را وارد کنید" maxLength={100} autoComplete="name" required />
          {errors.first_name && (
            <span className="text-[13px] text-destructive" role="alert">
              {errors.first_name.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-[9px] text-sm">
          <span>
            نام خانوادگی<span className="font-bold text-red-500"> *</span>
          </span>
          <input
            className={fieldClass}
            {...register("last_name")}
            placeholder="نام خانوادگی خود را وارد کنید"
            maxLength={100}
            autoComplete="name"
            required
          />
          {errors.last_name && (
            <span className="text-[13px] text-destructive" role="alert">
              {errors.last_name.message}
            </span>
          )}
        </label>
      </div>
      <div className="grid grid-cols-2 gap-4 max-[500px]:gap-3">
        <label className="flex flex-col gap-[9px] text-sm">
          <span>
            چه چیزی می‌خواهید بسازیم؟<span className="font-bold text-red-500"> *</span>
          </span>
          <select className={fieldClass} {...register("subject")}>
            <option value="web">وب‌سایت شخصی</option>
            <option value="web-shop">وب‌سایت فروشگاهی</option>
            <option value="web-app">وب‌اپلیکیشن</option>
            <option value="optimization">بهینه‌سازی و بازنویسی</option>
            <option value="other">سایر پروژه‌ها</option>
          </select>
        </label>

        <label className="flex flex-col gap-[9px] text-sm">
          <span>
            شماره تماس<span className="font-bold text-red-500"> *</span>
          </span>
          <input
            className={`${fieldClass} text-right`}
            {...register("phone")}
            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
            dir="ltr"
            maxLength={11}
            inputMode="tel"
            autoComplete="tel"
            required
          />
          {errors.phone && (
            <span className="text-[13px] text-destructive" role="alert">
              {errors.phone.message}
            </span>
          )}
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4 max-[500px]:gap-3">
        <DatePickerInput
          key={"date"}
          required={true}
          // containerClass={field.colSpan ? "col-span-2" : ""}
          label={"تاریخ مورد نظر"}
          control={control}
          name={"date"}
        />
        <label className="flex flex-col gap-[9px] text-sm">
          <span>
            بازه زمانی مناسب<span className="font-bold text-red-500"> *</span>
          </span>
          <select className={fieldClass} {...register("slot")}>
            <option value="09:00-12:00">۹ تا ۱۲</option>
            <option value="12:00-15:00">۱۲ تا ۱۵</option>
            <option value="15:00-18:00">۱۵ تا ۱۸</option>
          </select>
          {errors.slot && (
            <span className="text-[13px] text-destructive" role="alert">
              {errors.slot.message}
            </span>
          )}
        </label>
      </div>
      <label className="flex flex-col gap-[9px] text-sm">
        <span>
          کمی از ایده‌تان بگویید<span className="font-bold text-red-500"> *</span>
        </span>
        <textarea
          className={`${fieldClass} min-h-[104px] resize-y`}
          {...register("description")}
          rows={4}
          maxLength={2000}
          placeholder="درباره پروژه، نیازها و هدف‌هایتان بنویسید..."
          required
        />
        {errors.description && (
          <span className="text-[13px] text-destructive" role="alert">
            {errors.description.message}
          </span>
        )}
      </label>
      {errors.root?.server && (
        <p className="text-[13px] text-destructive" role="alert">
          {errors.root.server.message}
        </p>
      )}
      <div className="flex items-center gap-[18px] max-[500px]:flex-wrap max-[500px]:gap-3">
        <Button disabled={isPending} type="submit" size="lg" className="h-[43px] px-[19px] text-sm">
          {isPending ? <LoaderCircle className="animate-spin" /> : <ArrowUpLeft />}
          {isPending ? "در حال ثبت..." : "ارسال درخواست مشاوره"}
        </Button>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck size={15} />
          اطلاعات شما نزد ما محفوظ است.
        </span>
      </div>
    </form>
  );
}
