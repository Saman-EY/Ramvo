import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpLeft, ArrowLeft, CodeXml, Layers, Palette, Gauge, ShieldCheck, Sparkles, Check, MoveDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Editor, Marquee } from "@/components/ramvo/editor";
import { SectionTitle } from "@/components/ramvo/site";
import { ProjectGrid } from "@/components/ramvo/projects";
import { ConsultationForm } from "@/components/ramvo/consultation";
import { Counter } from "@/components/ramvo/counter";

export const metadata: Metadata = {
  title: "رموو | مهندسی وب، فراتر از کدنویسی",
  description:
    "طراحی و توسعه وب‌سایت و وب‌اپلیکیشن اختصاصی با رموو. از ایده تا یک محصول دیجیتال سریع، ماندگار و مقیاس‌پذیر.",
  openGraph: {
    title: "رموو | مهندسی وب، فراتر از کدنویسی",
    description: "ایده شما، تخصص ما. توسعه اختصاصی محصولات دیجیتال با رموو.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const services = [
  {
    icon: CodeXml,
    title: "توسعه وب‌اپلیکیشن اختصاصی",
    text: "محصولی دقیقاً متناسب با کسب‌وکار شما؛ سریع، امن و آماده رشد.",
    tag: "Web Development",
  },
  {
    icon: Layers,
    title: "معماری سیستم و بک‌اند",
    text: "زیرساختی پایدار و مقیاس‌پذیر که با بزرگ شدن ایده شما، همراه می‌شود.",
    tag: "System Architecture",
  },
  {
    icon: Palette,
    title: "طراحی رابط کاربری مدرن",
    text: "تجربه‌ای که زیبا دیده می‌شود و ساده استفاده می‌شود؛ با توجه به هر جزئیات.",
    tag: "UI / UX Design",
  },
  {
    icon: Gauge,
    title: "بهینه‌سازی و بازنویسی",
    text: "جان تازه‌ای به محصولتان بدهید؛ کد بهتر، سرعت بیشتر و عملکرد مطمئن‌تر.",
    tag: "Performance & Refactoring",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[image:var(--hero-light)]">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border)_0.8px,transparent_0.8px)] bg-[size:27px_27px] opacity-25 [mask-image:linear-gradient(transparent,var(--foreground)_40%,transparent)]" />
        <div className="relative mx-auto grid min-h-[585px] w-[calc(100%-36px)] max-w-[1320px] grid-cols-[1.07fr_1fr] items-center gap-[46px] pt-[34px] pb-10 min-[501px]:w-[calc(100%-64px)] min-[1101px]:w-[calc(100%-112px)] max-[1100px]:gap-7 max-[800px]:grid-cols-1 max-[800px]:gap-[35px] max-[800px]:pt-[45px] max-[800px]:pb-[55px]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-leaf/20 bg-leaf/5 px-3 py-2 text-xs text-leaf">
              <span className="size-[5px] rounded-full bg-leaf" />
              <span>آماده ساختن ایده بعدی شما</span>
              <ArrowUpLeft size={14} />
            </div>
            <div className="mt-[27px] text-right font-mono text-xs text-muted-foreground max-[500px]:mt-[22px]" dir="ltr">
              RAMVO · DIGITAL ENGINEERING
            </div>
            <h1 className="mt-[13px] mb-[18px] text-[43px] leading-[1.65] font-black max-[1100px]:text-4xl max-[800px]:text-[43px] max-[500px]:text-[31px] max-[500px]:leading-[1.8]">
              رَمْوو، فراتر از <span className="text-foreground">کدنویسی.</span>
              <br />
              مهندسیِ{" "}
              <span className="relative whitespace-nowrap text-primary">
                ایده‌های شما
                <span className="absolute right-0 bottom-[-2px] left-0 h-2 rotate-[-2deg] rounded-[50%] border-t-2 border-primary/65" />
              </span>
            </h1>
            <p className="max-w-[490px] text-[15px] leading-[2.15] text-muted-foreground max-[500px]:text-sm">
              ما فقط وب‌سایت نمی‌سازیم؛ ایده‌تان را به یک محصول دیجیتال
              <br className="max-[500px]:hidden" /> قدرتمند، سریع و ماندگار تبدیل می‌کنیم. از اولین خط کد تا رشد کسب‌وکار شما.
            </p>
            <div className="mt-7 flex gap-3 max-[500px]:gap-2">
              <Button className="h-12 px-[21px] text-sm max-[500px]:h-11 max-[500px]:px-[13px] max-[500px]:text-xs" size="lg" asChild>
                <Link href="/contact">
                  بیایید پروژه‌تان را بسازیم <ArrowUpLeft />
                </Link>
              </Button>
              <Button className="h-12 px-[21px] text-sm max-[500px]:h-11 max-[500px]:px-[13px] max-[500px]:text-xs" size="lg" variant="outline" asChild>
                <Link href="/projects">
                  دیدن پروژه‌ها <ArrowLeft />
                </Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-[17px] text-xs text-muted-foreground max-[500px]:gap-3 max-[500px]:text-[11px]">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} />
                کیفیت، بدون مصالحه
              </span>
              <i className="h-3 w-px bg-border" />
              <span className="flex items-center gap-2">
                <Sparkles size={16} />
                توسعه کاملاً اختصاصی
              </span>
            </div>
          </div>
          <Editor />
        </div>
        <div className="relative mx-auto flex w-[calc(100%-36px)] max-w-[1320px] items-center justify-between pb-[26px] text-xs text-muted-foreground min-[501px]:w-[calc(100%-64px)] min-[1101px]:w-[calc(100%-112px)] max-[800px]:text-[11px] max-[500px]:pb-5">
          <span className="font-mono text-[11px] max-[500px]:text-[9px]" dir="ltr">YOUR VISION. OUR CODE.</span>
          <Link className="flex items-center gap-2" href="/#services">
            <MoveDown size={15} />
            کمی بیشتر با ما آشنا شوید
          </Link>
          <span className="flex items-center gap-2 max-[800px]:hidden">
            <i className="size-[5px] rounded-full bg-leaf" />
            ساختن، هر روز بهتر از دیروز
          </span>
        </div>
      </section>
      <Marquee />
      <section className="py-[77px] max-[800px]:py-12" id="services">
        <div className="mx-auto w-[calc(100%-36px)] max-w-[1320px] min-[501px]:w-[calc(100%-64px)] min-[1101px]:w-[calc(100%-112px)]">
          <div className="mb-8 flex items-end justify-between gap-6 max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-[18px] max-[800px]:mb-[25px]">
            <SectionTitle
              eyebrow="تخصص ما، مزیت شما"
              title="برای هر ایده، یک راهکار اختصاصی."
              description="از طراحی تجربه تا معماری پیچیده؛ همه‌چیز برای ساختن محصولی که تفاوت ایجاد کند."
            />
            <span className="mb-2 self-end font-mono text-xs text-muted-foreground max-[800px]:hidden" dir="ltr">
              01 / WHAT WE DO
            </span>
          </div>
          <div className="grid grid-cols-4 gap-[17px] max-[1100px]:gap-3 max-[800px]:grid-cols-2 max-[500px]:gap-3">
            {services.map((s, i) => (
              <article key={s.title} className="rounded-lg border border-border bg-gradient-to-br from-card to-background p-[23px_20px] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 max-[1100px]:p-[18px_15px] max-[500px]:p-[17px_13px]">
                <div className="flex items-center justify-between">
                  <span className={`grid size-[46px] shrink-0 place-items-center rounded-lg border ${i % 2 === 0 ? "border-leaf/20 bg-leaf/5 text-leaf" : "border-primary/20 bg-primary/5 text-primary"}`}>
                    <s.icon size={25} />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground" dir="ltr">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-base font-bold max-[1100px]:text-sm max-[500px]:mt-4 max-[500px]:min-h-11 max-[500px]:text-[13px] max-[500px]:leading-6">{s.title}</h3>
                <p className="mt-3 min-h-[65px] text-sm leading-7 text-muted-foreground max-[500px]:min-h-20 max-[500px]:text-xs">{s.text}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-mono text-[11px] text-muted-foreground max-[500px]:text-[9px]" dir="ltr">{s.tag}</span>
                  <Link href="/contact" aria-label={`درخواست ${s.title}`}>
                    <ArrowUpLeft size={20} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-leaf/[0.02] py-[52px]" id="about">
        <div className="mx-auto grid w-[calc(100%-36px)] max-w-[1320px] grid-cols-2 items-center gap-[100px] min-[501px]:w-[calc(100%-64px)] min-[1101px]:w-[calc(100%-112px)] max-[800px]:gap-[35px] max-[800px]:grid-cols-1 max-[500px]:gap-[30px]">
          <div>
            <span className="flex items-center gap-2 text-xs text-primary">
              <i className="size-[5px] rounded-full bg-primary" />
              کد تمیز. فکر روشن.
            </span>
            <h2 className="mt-[13px] text-[27px] leading-[1.7] font-extrabold max-[800px]:text-2xl max-[500px]:text-[25px]">
              تکنولوژی در خدمت ایده.
              <br />
              <span className="text-muted-foreground">نه برعکس.</span>
            </h2>
            <p className="mt-[13px] max-w-[430px] text-sm leading-[2.2] text-muted-foreground">در رموو، هر پروژه یک همکاری است. با دقت گوش می‌دهیم، هوشمندانه طراحی می‌کنیم و با وسواس می‌سازیم.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-7 max-[800px]:gap-6">
            <Counter value={100} suffix="٪" label="تمرکز بر کیفیت" />
            <Counter value={6} suffix="+" label="فناوری کلیدی" />
            <Counter value={4} suffix="" label="حوزه تخصصی" />
            <Counter value={1} suffix="" label="تیم، همراه ایده شما" />
          </div>
        </div>
      </section>
      <section className="py-[77px] max-[800px]:py-12">
        <div className="mx-auto w-[calc(100%-36px)] max-w-[1320px] min-[501px]:w-[calc(100%-64px)] min-[1101px]:w-[calc(100%-112px)]">
          <div className="mb-8 flex items-end justify-between gap-6 max-[800px]:mb-[25px] max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-[18px]">
            <SectionTitle
              eyebrow="وقتی ایده، واقعی می‌شود"
              title="نگاهی به آنچه می‌سازیم."
              description="چند نمونه نمایشی از تجربه‌هایی که می‌توانیم برای شما خلق کنیم."
            />
            <Button variant="outline" asChild>
              <Link href="/projects">
                همه پروژه‌ها <ArrowLeft />
              </Link>
            </Button>
          </div>
          <ProjectGrid />
        </div>
      </section>
      <section className="border-t border-border bg-[image:var(--hero-light)] py-[77px] max-[800px]:py-12" id="consultation">
        <div className="mx-auto grid w-[calc(100%-36px)] max-w-[1320px] grid-cols-[0.85fr_1fr] gap-[110px] min-[501px]:w-[calc(100%-64px)] min-[1101px]:w-[calc(100%-112px)] max-[1100px]:gap-[60px] max-[800px]:grid-cols-1 max-[800px]:gap-10">
          <div>
            <SectionTitle
              eyebrow="اینجا، نقطه شروع است"
              title="ایده‌تان را به ما بسپارید."
              description="یک گفت‌وگوی خوب، اولین قدم ساختن یک محصول خوب است. از پروژه‌تان بگویید؛ با هم مسیرش را پیدا می‌کنیم."
            />
            <div className="mt-[29px] grid gap-[15px] text-sm text-muted-foreground max-[800px]:flex max-[800px]:flex-wrap max-[800px]:gap-[17px] max-[500px]:flex-col">
              <span className="flex items-center gap-2">
                <Check />
                بررسی نیازها و مسیر پروژه
              </span>
              <span className="flex items-center gap-2">
                <Check />
                پیشنهاد راهکار فنی متناسب
              </span>
              <span className="flex items-center gap-2">
                <Check />
                گفت‌وگوی مستقیم با تیم توسعه
              </span>
            </div>
            <span className="mt-9 block text-right font-mono text-xs text-primary max-[800px]:hidden" dir="ltr">
              Let&apos;s build something that matters. ↗
            </span>
          </div>
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
