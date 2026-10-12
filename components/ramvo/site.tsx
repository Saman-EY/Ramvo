import Link from "next/link";
import Image from "next/image";
import { ArrowUpLeft, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

function BrandIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function Brand() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="رموو، صفحه اصلی">
      <span className="relative block h-[57px] w-[43px] shrink-0 overflow-hidden">
        <Image
          src="/images/ramvo-logo.jpg"
          alt="لوگوی رموو"
          width={110}
          height={110}
          className="absolute -top-6 -left-8 h-[110px] max-w-none"
        />
      </span>
      <span className="flex flex-col">
        <b className="font-[Arial,sans-serif] text-[32px] leading-none font-bold max-[500px]:text-[28px]" dir="ltr">
          Ramvo
          {/* <span className="text-primary">.</span> */}
        </b>
        <small className="mt-2 text-xs text-muted-foreground max-[500px]:text-[11px]">مهندسی ایده‌های شما</small>
      </span>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border pt-12">
      <div className="mx-auto w-[calc(100%-36px)] max-w-[1320px] min-[501px]:w-[calc(100%-64px)] min-[1101px]:w-[calc(100%-112px)]">
        <div className="grid grid-cols-[1.4fr_1fr_1.2fr] gap-20 pb-9 max-[1100px]:gap-10 max-[800px]:grid-cols-2 max-[800px]:gap-9 max-[800px]:[&>div:first-child]:col-span-full max-[500px]:gap-x-5 max-[500px]:gap-y-8">
          <div>
            <Brand />
            <p className="mt-[18px] text-sm leading-8 text-muted-foreground">
              از اولین خط کد تا یک تجربه ماندگار.
              <br />
              همراه شما برای ساختن چیزی متفاوت.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 text-sm text-muted-foreground">
            <h3 className="mb-1 text-base font-semibold text-foreground">مسیرهای رموو</h3>

            <Link href="/">صفحه اصلی</Link>
            <Link href="/projects">پروژه‌ها</Link>
            <Link href="/packages">پکیج‌ها</Link>
            <Link href="/contact">
              تماس و همکاری <ArrowLeft size={14} />
            </Link>
          </div>
          <div>
            <h3 className="mb-5 text-base font-semibold">یک ایده خوب، یک شروع تازه</h3>
            <Button variant="outline" asChild>
              <Link href="/contact">
                درباره ایده‌تان صحبت کنیم <ArrowUpLeft />
              </Link>
            </Button>
            <div className="mt-[15px] flex gap-2">
              {[
                {
                  name: "گیت‌هاب",
                  path: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4 M9 18c-4.51 2-5-2-7-2",
                },
                {
                  name: "لینکدین",
                  path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
                },
                {
                  name: "اینستاگرام",
                  path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M2 2h20v20H2z",
                },
              ].map(({ name, path }) => (
                <Button
                  key={name}
                  variant="ghost"
                  size="icon"
                  title={`${name} — نشانی به‌زودی`}
                  aria-label={`${name}، نشانی هنوز ثبت نشده`}
                  disabled
                >
                  <BrandIcon>
                    <path d={path} />
                  </BrandIcon>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-4 border-t border-border py-5 text-xs text-muted-foreground max-[800px]:flex-col">
          <span>© {new Intl.NumberFormat("fa").format(2026)} رموو. تمامی حقوق محفوظ است.</span>
          <span className="font-mono text-[11px]" dir="ltr">Built with care. Engineered by Ramvo.</span>
        </div>
      </div>
    </footer>
  );
}

export function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div>
      <span className="flex items-center gap-2 text-xs text-primary">
        <i className="size-[5px] rounded-full bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-[9px] text-[29px] leading-[1.8] font-extrabold max-[800px]:text-[26px] max-[500px]:text-[23px]">{title}</h2>
      {description && <p className="mt-2 text-sm leading-[2.1] text-muted-foreground">{description}</p>}
    </div>
  );
}
