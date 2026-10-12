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
  return (
    <Controller<TFieldValues, TName, TTransformedValues>
      control={control}
      name={name}
      rules={required ? { required: "این فیلد الزامی است." } : undefined}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className={`consultation-date-field ${containerClass ?? ""}`}>
          {label && (
            <span className="text-xs font-medium block mb-2">
              {label}
              {required && <span className="required-marker"> *</span>}
            </span>
          )}
          <DatePicker
            value={typeof value === "string" ? value.replaceAll("-", "/") : ""}
            onChange={(date) => onChange(date?.isValid ? normalizeDigits(date.format("YYYY-MM-DD")) : "")}
            style={{ minHeight: "40px", width: "100%" }}
            containerStyle={{ width: "100%" }}
            format="YYYY/MM/DD"
            calendar={persian}
            locale={persian_fa}
            minDate={new DateObject({ calendar: persian }).setHour(0).setMinute(0).setSecond(0)}
            editable={false}
            // locale={persian_fa}
            calendarPosition="bottom-right"
            className="consultation-date-calendar"
          />
          {error && (
            <span className="form-error" role="alert">
              {error.message || "تاریخ معتبر وارد کنید."}
            </span>
          )}
        </div>
      )}
    />
  );
}

export default DatePickerInput;
