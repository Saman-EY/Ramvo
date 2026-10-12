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
    defaultValues: { date: "", subject: "web", slot: "9 تا 12" },
  });

  const { mutate, isPending } = useSubmitConsulting();

  async function onSubmit(values: ConsultationInput) {
    const { first_name, last_name, phone, date, slot, subject, description } = values;

    return console.log("**", date)

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

  console.log(watch());

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
          <span>
            نام<span className="required-marker"> *</span>
          </span>
          <input {...register("first_name")} placeholder="نام خود را وارد کنید" maxLength={100} autoComplete="name" required />
          {errors.first_name && (
            <span className="form-error" role="alert">
              {errors.first_name.message}
            </span>
          )}
        </label>
        <label>
          <span>
            نام خانوادگی<span className="required-marker"> *</span>
          </span>
          <input
            {...register("last_name")}
            placeholder="نام خانوادگی خود را وارد کنید"
            maxLength={100}
            autoComplete="name"
            required
          />
          {errors.last_name && (
            <span className="form-error" role="alert">
              {errors.last_name.message}
            </span>
          )}
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>
            چه چیزی می‌خواهید بسازیم؟<span className="required-marker"> *</span>
          </span>
          <select {...register("subject")}>
            <option value="web">وب‌سایت شخصی</option>
            <option value="web-shop">وب‌سایت فروشگاهی</option>
            <option value="web-app">وب‌اپلیکیشن</option>
            <option value="optimization">بهینه‌سازی و بازنویسی</option>
            <option value="other">سایر پروژه‌ها</option>
          </select>
        </label>

        <label>
          <span>
            شماره تماس<span className="required-marker"> *</span>
          </span>
          <input
            {...register("phone")}
            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
            dir="ltr"
            maxLength={11}
            inputMode="tel"
            autoComplete="tel"
            required
          />
          {errors.phone && (
            <span className="form-error" role="alert">
              {errors.phone.message}
            </span>
          )}
        </label>
      </div>

      <div className="form-row">
        <DatePickerInput
          key={"date"}
          required={true}
          // containerClass={field.colSpan ? "col-span-2" : ""}
          label={"تاریخ مورد نظر"}
          control={control}
          name={"date"}
        />
        <label>
          <span>
            بازه زمانی مناسب<span className="required-marker"> *</span>
          </span>
          <select {...register("slot")}>
            <option value="9 تا 12">۹ تا ۱۲</option>
            <option value="12 تا 15">۱۲ تا ۱۵</option>
            <option value="15 تا 18">۱۵ تا ۱۸</option>
          </select>
          {errors.slot && (
            <span className="form-error" role="alert">
              {errors.slot.message}
            </span>
          )}
        </label>
      </div>
      <label>
        <span>
          کمی از ایده‌تان بگویید<span className="required-marker"> *</span>
        </span>
        <textarea
          {...register("description")}
          rows={4}
          maxLength={2000}
          placeholder="درباره پروژه، نیازها و هدف‌هایتان بنویسید..."
          required
        />
        {errors.description && (
          <span className="form-error" role="alert">
            {errors.description.message}
          </span>
        )}
      </label>
      {errors.root?.server && (
        <p className="form-error" role="alert">
          {errors.root.server.message}
        </p>
      )}
      <div className="form-submit">
        <Button disabled={isPending} type="submit" size="lg">
          {isPending ? <LoaderCircle className="animate-spin" /> : <ArrowUpLeft />}
          {isPending ? "در حال ثبت..." : "ارسال درخواست مشاوره"}
        </Button>
        <span>
          <ShieldCheck size={15} />
          اطلاعات شما نزد ما محفوظ است.
        </span>
      </div>
    </form>
  );
}
