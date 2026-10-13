"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ramvo/site";
import { ProjectGrid, projects } from "@/components/ramvo/projects";

export function ProjectsArchive() {
  const [category, setCategory] = useState("همه پروژه‌ها");
  const [stack, setStack] = useState("همه فناوری‌ها");
  const items = projects.filter(
    (p) => (category === "همه پروژه‌ها" || p.category === category) && (stack === "همه فناوری‌ها" || p.tags.includes(stack)),
  );
  return (
    <main className="mx-auto w-[calc(100%-36px)] max-w-[1320px] py-[65px] pb-[85px] min-[501px]:w-[calc(100%-64px)] min-[1101px]:w-[calc(100%-112px)] max-[800px]:py-[45px] max-[800px]:pb-[45px]">
      <SectionTitle
        eyebrow="RAMVO / SELECTED WORK"
        title="ایده‌هایی که به تجربه تبدیل شدند."
        description="نمونه‌های نمایشی از طراحی، توسعه و مهندسی محصولات دیجیتال."
      />
      {/* <div className="mt-9 flex justify-between gap-5 border-y border-border py-5 max-[800px]:flex-col">
        <div className="flex flex-wrap gap-1">
          {["همه پروژه‌ها", "وب‌اپلیکیشن", "فروشگاه آنلاین", "بک‌اند و زیرساخت", "طراحی رابط کاربری"].map((c) => (
            <Button variant={category === c ? "default" : "ghost"} key={c} onClick={() => setCategory(c)}>
              {c}
            </Button>
          ))}
        </div>
        <label className="flex min-w-40 items-center gap-2 text-sm text-muted-foreground">
          <SlidersHorizontal size={17} />
          <select
            className="min-w-0 rounded border border-border bg-card p-2 text-foreground"
            aria-label="فیلتر فناوری"
            value={stack}
            onChange={(e) => setStack(e.target.value)}
          >
            {["همه فناوری‌ها", "React", "Next.js", "TypeScript", "Node.js", "Python", "Docker", "PostgreSQL", "Figma"].map(
              (s) => (
                <option key={s}>{s}</option>
              ),
            )}
          </select>
        </label>
      </div> */}
      {/* <div className="my-[23px] text-sm text-muted-foreground">{new Intl.NumberFormat("fa").format(items.length)} پروژه</div> */}
      {items.length && <ProjectGrid key={`${category}-${stack}`} items={items} />}
    </main>
  );
}
