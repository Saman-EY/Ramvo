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
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav">
          <Link href="/" className={homeActive ? "active" : undefined}>
            صفحه اصلی
          </Link>
          <Link href="/projects" className={sectionActive("/projects") ? "active" : undefined}>
            پروژه‌ها
          </Link>
          <Link href="/packages" className={sectionActive("/packages") ? "active" : undefined}>
            پکیج‌ها
          </Link>
          <Link href="/#services">خدمات ما</Link>
          <Link href="/#about">درباره رموو</Link>
          <Link href="/contact" className={sectionActive("/contact") ? "active" : undefined}>
            تماس با ما
          </Link>
        </nav>
        <div className="header-actions">
          <Button asChild className="header-cta">
            <Link href="/contact">
              شروع همکاری <ArrowUpLeft />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" onClick={() => setOpen(false)}>
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
