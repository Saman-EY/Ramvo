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
      <div className="project-grid">
        {items.map((p) => (
          <article className="project-card" key={p.id}>
            <div className="project-image">
              <Image src={p.image} alt={p.title} loading="lazy" width={1536} height={1024} unoptimized />
              <span className="project-category">{p.category}</span>
              <Button
                variant="secondary"
                size="icon"
                className="project-open"
                aria-label={`جزئیات ${p.title}`}
                onClick={() => setSelected(p)}
              >
                <ArrowUpLeft />
              </Button>
            </div>
            <div className="project-info">
              <div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
              <div className="project-tags" dir="ltr">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
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
        <DialogContent className="project-dialog" dir="rtl">
          {selected && (
            <>
              <Image src={selected.image} alt={selected.title} width={1536} height={1024} unoptimized />
              <DialogTitle>{selected.title}</DialogTitle>
              <DialogDescription>
                {selected.description} این پروژه، نمونه نمایشی برای معرفی توانمندی‌هاست.
              </DialogDescription>
              <div className="project-tags" dir="ltr">
                {selected.tags.map((t) => (
                  <span key={t}>{t}</span>
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
