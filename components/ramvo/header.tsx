"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpLeft, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "./site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const homeActive = pathname === "/";
  const sectionActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-20 h-[88px] border-b border-border bg-background/85 backdrop-blur-[18px] max-[800px]:h-[82px]">
      <div className="mx-auto grid h-full w-[calc(100%-36px)] max-w-[1320px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-11 min-[501px]:w-[calc(100%-64px)] min-[1101px]:w-[calc(100%-112px)] max-[1100px]:gap-6 max-[800px]:grid-cols-[minmax(0,1fr)_auto]">
        <Brand />
        <nav className="flex items-center justify-center gap-[31px] text-sm text-muted-foreground max-[1100px]:gap-5 max-[800px]:hidden">
          <Link href="/" className={homeActive ? "relative text-foreground after:absolute after:bottom-[-12px] after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-primary" : "transition-colors hover:text-foreground"}>
            صفحه اصلی
          </Link>
          <Link href="/projects" className={sectionActive("/projects") ? "relative text-foreground after:absolute after:bottom-[-12px] after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-primary" : "transition-colors hover:text-foreground"}>
            پروژه‌ها
          </Link>
          <Link href="/packages" className={sectionActive("/packages") ? "relative text-foreground after:absolute after:bottom-[-12px] after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-primary" : "transition-colors hover:text-foreground"}>
            پکیج‌ها
          </Link>
          <Link href="/#services">خدمات ما</Link>
          <Link href="/#about">درباره رموو</Link>
          <Link href="/contact" className={sectionActive("/contact") ? "relative text-foreground after:absolute after:bottom-[-12px] after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-primary" : "transition-colors hover:text-foreground"}>
            تماس با ما
          </Link>
        </nav>
        <div className="flex gap-2 max-[500px]:gap-1">
          <Button asChild className="h-[42px] px-5 text-sm max-[500px]:h-[37px] max-[500px]:px-3 max-[500px]:text-xs">
            <Link href="/contact">
              شروع همکاری <ArrowUpLeft />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden max-[800px]:inline-flex"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="absolute top-[82px] right-0 left-0 flex flex-col gap-5 border-b border-border bg-card px-8 py-[22px] text-sm min-[801px]:hidden" onClick={() => setOpen(false)}>
          <Link href="/">صفحه اصلی</Link>
          <Link href="/projects">پروژه‌ها</Link>
          <Link href="/packages">پکیج‌ها</Link>
          <Link href="/#services">خدمات ما</Link>
          <Link href="/contact">تماس با ما</Link>
        </nav>
      )}
    </header>
  );
}
