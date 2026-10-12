import type { Metadata } from "next";
import Link from "next/link";
import { Check, Plus, ArrowUpLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ramvo/site";

export const metadata: Metadata = {
  title: "پکیج‌ها و تعرفه‌ها | رموو",
  description:
    "پکیج‌های طراحی سایت رموو و توسعه محصول اختصاصی، از سایت شخصی و فروشگاهی تا CRM و پنل مدیریتی.",
  openGraph: {
    title: "پکیج‌ها و تعرفه‌ها | رموو",
    description: "سایت شخصی، فروشگاهی یا محصول اختصاصی مثل CRM و پنل مدیریتی؛ مسیر مناسب کسب‌وکارتان را انتخاب کنید.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

type Group = { title?: string; items: string[] };
type Pkg = {
  name: string;
  tag: string;
  price: string;
  priceNote: string;
  summary?: string;
  spanTwoColumns?: boolean;
  featured?: boolean;
  groups: Group[];
  extras: string[];
};

const packages: Pkg[] = [
  {
    name: "پایه (اختصاصی شخصی)",
    tag: "Personal",
    price: "۴۰ تا ۵۰",
    priceNote: "میلیون تومان",
    groups: [
      {
        items: [
          "طراحی صفحه لندینگ",
          "صفحه مقالات",
          "صفحه درباره ما",
          "صفحه تماس با ما / فرم مشاوره",
          "پنل ادمین برای مدیریت محتوا و مقالات",
          "اتصال دامنه و SSL",
          "دیپلوی روی سرور یا هاست",
          "ریسپانسیو برای تمامی صفحات",
          "رعایت استانداردهای سئو",
        ],
      },
    ],
    extras: ["لندینگ پیج اضافه: ۷ میلیون تومان", "فیچرهای اختصاصی اضافه: از ۷ میلیون تومان، توافقی"],
  },
  {
    name: "سایت فروشگاهی",
    tag: "E‑Commerce",
    price: "از ۵۰",
    priceNote: "میلیون تومان",
    featured: true,
    groups: [
      {
        items: [
          "طراحی صفحه لندینگ",
          "صفحه مقالات، درباره ما و قوانین",
          "صفحه محصولات و جزئیات محصول (فیلتر و صفحه‌بندی)",
          "طراحی ریسپانسیو",
          "سبد خرید و اتصال به درگاه پرداخت",
          "داشبورد کاربر (پروفایل، پیگیری سفارش، لیست پرداخت‌ها)",
          "رعایت استانداردهای سئو",
          "چت آنلاین با سرویس‌هایی مانند گفتینو",
          "اتصال بات تلگرام / بله برای اطلاع‌رسانی و پیگیری سفارش",
          "اتصال دامنه و SSL",
          "دیپلوی روی سرور یا هاست",
        ],
      },
      {
        title: "پنل ادمین",
        items: [
          "مدیریت کاربران",
          "مدیریت سفارشات",
          "مدیریت روش ارسال",
          "مدیریت محصولات",
          "مدیریت مقالات",
          "مدیریت تخفیف",
          "مدیریت دسته‌بندی‌ها",
          "مدیریت تیکت‌ها",
          "آمار و گزارش کلی سایت",
        ],
      },
    ],
    extras: ["سیستم تیکتینگ: ۵+ میلیون تومان", "سیستم نظرات کاربران", "علاقه‌مندی‌ها", "سایر امکانات اختصاصی متناسب با پروژه"],
  },
  {
    name: "محصول اختصاصی",
    tag: "Custom Product",
    price: "پس از تحلیل نیاز",
    priceNote: "قیمت‌گذاری متناسب با محدوده پروژه",
    summary:
      "در جلسه مشاوره، نیازها و فرایندهای کسب‌وکارتان را بررسی می‌کنیم و محدوده محصول مناسب را با هم مشخص می‌کنیم.",
    spanTwoColumns: true,
    groups: [
      {
        title: "مناسب برای ساخت",
        items: [
          "پنل‌های مدیریتی و داشبوردهای اختصاصی",
          "سیستم مدیریت ارتباط با مشتری (CRM)",
          "اتوماسیون فرایندها و گردش‌کارهای سازمانی",
          "سامانه‌های رزرو، سفارش یا مدیریت خدمات",
          "اتصال به سرویس‌ها و سامانه‌های فعلی کسب‌وکار",
        ],
      },
      {
        title: "مسیر همکاری",
        items: [
          "جلسه برای شناخت نیازها و کاربران محصول",
          "تعیین محدوده، اولویت‌ها و برآورد هزینه",
          "طراحی و توسعه مرحله‌ای بر اساس توافق",
        ],
      },
    ],
    extras: ["قابلیت‌ها و اتصال‌های دیگر بر اساس نیاز پروژه تعریف می‌شوند."],
  },
];

export default function Packages() {
  return (
    <section className="section packages-page">
      <div className="container">
        <SectionTitle
          eyebrow="پکیج‌ها و تعرفه‌ها"
          title="مسیر مناسب پروژه‌تان را انتخاب کنید."
          description="از وب‌سایت آماده شروع کنید یا برای ساخت محصولی متناسب با فرایند کسب‌وکارتان مشاوره بگیرید."
        />
        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              className={`relative flex h-full flex-col gap-5 rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-8 ${
                p.featured ? "border-primary/60 shadow-[0_0_60px_-20px_var(--primary)]" : "border-border"
              } ${p.spanTwoColumns ? "md:col-span-2 xl:col-span-1" : ""}`}
            >
              {p.featured && (
                <span className="absolute -top-3 right-7 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  کامل‌ترین
                </span>
              )}
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground" dir="ltr">
                {p.tag}
              </span>
              <h2 className="text-xl font-bold leading-relaxed">{p.name}</h2>
              {p.summary && <p className="text-sm leading-8 text-muted-foreground">{p.summary}</p>}
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 border-b border-border pb-5">
                <b className={`font-bold text-primary ${p.summary ? "text-xl" : "text-2xl md:text-3xl"}`}>{p.price}</b>
                <span className="text-sm text-muted-foreground">{p.priceNote}</span>
              </div>
              <div className="grid gap-5">
                {p.groups.map((g, i) => (
                  <div key={i}>
                    {g.title && <h3 className="mb-3 text-sm font-bold">{g.title}</h3>}
                    <ul className="grid gap-2.5">
                      {g.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm leading-7 text-muted-foreground">
                          <Check size={16} className="mt-1 shrink-0 text-primary" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-auto rounded-2xl bg-muted/50 p-4">
                <h3 className="mb-3 text-sm font-bold">امکانات اضافه در صورت نیاز</h3>
                <ul className="grid gap-2.5">
                  {p.extras.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm leading-7 text-muted-foreground">
                      <Plus size={16} className="mt-1 shrink-0 text-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                size="lg"
                variant={p.featured ? "default" : "outline"}
                asChild
                className="mt-1 w-full"
              >
                <Link href="/contact">
                  {p.summary ? "شروع با جلسه مشاوره" : "درخواست مشاوره این پکیج"} <ArrowUpLeft />
                </Link>
              </Button>
            </article>
          ))}
        </div>
        <p className="mt-8 flex items-center gap-2 text-sm leading-7 text-muted-foreground">
          <Info size={16} />
          عکاسی، تولید محتوا و ادیت تصاویر در صورت نیاز، با هزینه جداگانه انجام می‌شود.
        </p>
      </div>
    </section>
  );
}
