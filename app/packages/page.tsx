import type { Metadata } from "next";
import Link from "next/link";
import { Check, Plus, ArrowUpLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ramvo/site";

export const metadata: Metadata = {
  title: "پکیج‌ها و تعرفه‌ها | رموو",
  description:
    "پکیج‌های طراحی سایت رموو: سایت اختصاصی شخصی از ۴۰ میلیون و سایت فروشگاهی کامل از ۵۰ میلیون تومان.",
  openGraph: {
    title: "پکیج‌ها و تعرفه‌ها | رموو",
    description: "سایت اختصاصی شخصی یا فروشگاه اینترنتی کامل؛ پکیج متناسب با کسب‌وکارتان را انتخاب کنید.",
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
];

export default function Packages() {
  return (
    <section className="section packages-page">
      <div className="container">
        <SectionTitle
          eyebrow="پکیج‌ها و تعرفه‌ها"
          title="مسیر مناسب پروژه‌تان را انتخاب کنید."
          description="دو نقطه شروع شفاف؛ و هر جا لازم بود، امکانات اختصاصی متناسب با نیاز شما."
        />
        <div className="packages-grid">
          {packages.map((p) => (
            <article key={p.name} className={`package-card${p.featured ? " featured" : ""}`}>
              {p.featured && <span className="package-badge">کامل‌ترین</span>}
              <span className="package-tag" dir="ltr">
                {p.tag}
              </span>
              <h2>{p.name}</h2>
              <div className="package-price">
                <b>{p.price}</b>
                <span>{p.priceNote}</span>
              </div>
              {p.groups.map((g, i) => (
                <div key={i} className="package-group">
                  {g.title && <h3>{g.title}</h3>}
                  <ul>
                    {g.items.map((it) => (
                      <li key={it}>
                        <Check size={16} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="package-group extras">
                <h3>امکانات اضافه در صورت نیاز</h3>
                <ul>
                  {p.extras.map((it) => (
                    <li key={it}>
                      <Plus size={16} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <Button size="lg" variant={p.featured ? "default" : "outline"} asChild className="package-cta">
                <Link href="/contact">
                  درخواست مشاوره این پکیج <ArrowUpLeft />
                </Link>
              </Button>
            </article>
          ))}
        </div>
        <p className="package-note">
          <Info size={16} />
          عکاسی، تولید محتوا و ادیت تصاویر در صورت نیاز، با هزینه جداگانه انجام می‌شود.
        </p>
      </div>
    </section>
  );
}
