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
    <main className="container archive-page">
      <SectionTitle
        eyebrow="RAMVO / SELECTED WORK"
        title="ایده‌هایی که به تجربه تبدیل شدند."
        description="نمونه‌های نمایشی از طراحی، توسعه و مهندسی محصولات دیجیتال."
      />
      <div className="project-filters">
        <div className="filter-tabs">
          {["همه پروژه‌ها", "وب‌اپلیکیشن", "فروشگاه آنلاین", "بک‌اند و زیرساخت", "طراحی رابط کاربری"].map((c) => (
            <Button variant={category === c ? "default" : "ghost"} key={c} onClick={() => setCategory(c)}>
              {c}
            </Button>
          ))}
        </div>
        <label className="stack-select">
          <SlidersHorizontal size={17} />
          <select aria-label="فیلتر فناوری" value={stack} onChange={(e) => setStack(e.target.value)}>
            {["همه فناوری‌ها", "React", "Next.js", "TypeScript", "Node.js", "Python", "Docker", "PostgreSQL", "Figma"].map(
              (s) => (
                <option key={s}>{s}</option>
              ),
            )}
          </select>
        </label>
      </div>
      <div className="result-count">{new Intl.NumberFormat("fa").format(items.length)} پروژه</div>
      {items.length ? (
        <ProjectGrid items={items} />
      ) : (
        <div className="empty-results">
          <h3>پروژه‌ای با این ترکیب پیدا نشد.</h3>
          <Button
            variant="outline"
            onClick={() => {
              setCategory("همه پروژه‌ها");
              setStack("همه فناوری‌ها");
            }}
          >
            پاک کردن فیلترها
          </Button>
        </div>
      )}
    </main>
  );
}
