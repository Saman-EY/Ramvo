"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const projects = [
  {
    id: 1,
    title: "وردان؛ پلتفرم مدیریت سرمایه",
    category: "وب‌اپلیکیشن",
    image: "/images/project-finance.svg",
    tags: ["React", "TypeScript", "Node.js"],
    description: "یک تجربه یکپارچه برای تحلیل داده‌های مالی، مدیریت دارایی و تصمیم‌گیری هوشمند.",
  },
  {
    id: 2,
    title: "هاوسن؛ تجربه‌ای متفاوت از خرید",
    category: "فروشگاه آنلاین",
    image: "/images/project-store.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    description: "فروشگاه مدرن محصولات خانه با تمرکز بر تجربه خرید، سرعت و طراحی مینیمال.",
  },
  {
    id: 3,
    title: "وردان؛ زیرساخت تحلیل داده",
    category: "بک‌اند و زیرساخت",
    image: "/images/project-finance.svg",
    tags: ["Python", "Docker", "PostgreSQL"],
    description: "معماری مقیاس‌پذیر برای پردازش داده‌ها، گزارش‌گیری و یکپارچه‌سازی سرویس‌ها.",
  },
  {
    id: 4,
    title: "هاوسن؛ طراحی تجربه دیجیتال",
    category: "طراحی رابط کاربری",
    image: "/images/project-store.svg",
    tags: ["Figma", "React"],
    description: "طراحی سیستم بصری و تجربه کاربری منسجم برای یک برند فروشگاهی.",
  },
];

export function ProjectGrid({ items = projects.slice(0, 2) }: { items?: typeof projects }) {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 gap-6 max-[800px]:grid-cols-1">
        {items.map((p) => (
          <article className="overflow-hidden rounded-lg border border-border bg-card shadow-[0_14px_45px_oklch(0.055_0.02_255_/_20%)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_22px_55px_oklch(0.055_0.02_255_/_34%)]" key={p.id}>
            <div className={`relative aspect-[1.65] overflow-hidden p-[25px_25px_0] max-[800px]:p-[20px_20px_0] ${p.id % 2 === 0 ? "bg-[color-mix(in_oklch,var(--primary)_10%,var(--card))]" : "bg-[color-mix(in_oklch,var(--leaf)_10%,var(--card))]"}`}>
              <Image src={p.image} alt={p.title} loading="lazy" width={1536} height={1024} unoptimized className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-top transition-transform duration-500 hover:scale-[1.035]" />
              <span className="absolute top-[13px] right-[15px] rounded border border-border bg-background px-2.5 py-1.5 text-xs text-foreground">{p.category}</span>
              <Button
                variant="secondary"
                size="icon"
                className="absolute bottom-[15px] left-[15px] size-[35px] border border-border bg-background text-primary"
                aria-label={`جزئیات ${p.title}`}
                onClick={() => setSelected(p)}
              >
                <ArrowUpLeft />
              </Button>
            </div>
            <div className="p-5 px-[23px]">
              <div>
                <h3 className="text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{p.description}</p>
              </div>
              <div className="mt-4 flex flex-wrap justify-end gap-2" dir="ltr">
                {p.tags.map((t) => (
                  <span key={t} className="rounded border border-border px-2 py-1 font-mono text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <Dialog
        open={Boolean(selected)}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="max-h-[90vh] max-w-[650px] overflow-auto" dir="rtl">
          {selected && (
            <>
              <Image src={selected.image} alt={selected.title} width={1536} height={1024} unoptimized className="rounded" />
              <DialogTitle>{selected.title}</DialogTitle>
              <DialogDescription>
                {selected.description} این پروژه، نمونه نمایشی برای معرفی توانمندی‌هاست.
              </DialogDescription>
              <div className="flex flex-wrap justify-end gap-2" dir="ltr">
                {selected.tags.map((t) => (
                  <span key={t} className="rounded border border-border px-2 py-1 font-mono text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
              <Button asChild>
                <Link href="/contact">
                  درخواست پروژه مشابه <ArrowUpLeft />
                </Link>
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
