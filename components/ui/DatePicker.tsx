import { useEffect, useState } from "react";
import { Control, Controller, type FieldPath, type FieldValues } from "react-hook-form";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import gorgian_en from "react-date-object/locales/gregorian_en";
import persian_fa from "react-date-object/locales/persian_fa"
import DatePicker from "react-multi-date-picker";
import { normalizeDigits } from "@/lib/consultation-schema";

interface DatePickerInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TTransformedValues extends FieldValues = TFieldValues,
> {
  control: Control<TFieldValues, any, TTransformedValues>;
  name: TName;
  label?: string;
  required?: boolean;
  containerClass?: string;
}

function DatePickerInput<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TTransformedValues extends FieldValues = TFieldValues,
>({ control, name, label, required, containerClass }: DatePickerInputProps<TFieldValues, TName, TTransformedValues>) {
  const [minDate, setMinDate] = useState<DateObject | null>(null);

  useEffect(() => {
    setMinDate(new DateObject({ calendar: persian }).setHour(0).setMinute(0).setSecond(0));
  }, []);

  return (
    <Controller<TFieldValues, TName, TTransformedValues>
      control={control}
      name={name}
      rules={required ? { required: "این فیلد الزامی است." } : undefined}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className={`min-w-0 ${containerClass ?? ""}`}>
          {label && (
            <span className="mb-2 block text-sm font-medium">
              {label}
              {required && <span className="font-bold text-red-500"> *</span>}
            </span>
          )}
          <DatePicker
            value={typeof value === "string" ? value.replaceAll("-", "/") : ""}
            onChange={(date) => onChange(date?.isValid ? normalizeDigits(date.format("YYYY-MM-DD")) : "")}
            inputClass="min-h-10 w-full rounded-[5px] border border-border bg-card p-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
            containerClassName="w-full"
            format="YYYY/MM/DD"
            calendar={persian}
            locale={persian_fa}
            minDate={minDate ?? undefined}
            editable={false}
            // locale={persian_fa}
            calendarPosition="bottom-right"
            className="consultation-date-calendar"
          />
          {error && (
            <span className="mt-1 block text-[13px] text-destructive" role="alert">
              {error.message || "تاریخ معتبر وارد کنید."}
            </span>
          )}
        </div>
      )}
    />
  );
}

export default DatePickerInput;
