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
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="availability">
              <span />
              <span>آماده ساختن ایده بعدی شما</span>
              <ArrowUpLeft size={14} />
            </div>
            <div className="hero-kicker" dir="ltr">
              RAMVO · DIGITAL ENGINEERING
            </div>
            <h1>
              رموو؛ فراتر از <span className="headline-outline">کدنویسی.</span>
              <br />
              مهندسیِ{" "}
              <span className="gold-word">
                ایده‌های شما
                <span className="word-underline" />
              </span>
            </h1>
            <p>
              ما فقط وب‌سایت نمی‌سازیم؛ ایده‌تان را به یک محصول دیجیتال
              <br className="desktop-break" /> قدرتمند، سریع و ماندگار تبدیل می‌کنیم. از اولین خط کد تا رشد کسب‌وکار شما.
            </p>
            <div className="hero-buttons">
              <Button size="lg" asChild>
                <Link href="/contact">
                  بیایید پروژه‌تان را بسازیم <ArrowUpLeft />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">
                  دیدن پروژه‌ها <ArrowLeft />
                </Link>
              </Button>
            </div>
            <div className="hero-reassurance">
              <span>
                <ShieldCheck size={16} />
                کیفیت، بدون مصالحه
              </span>
              <i />
              <span>
                <Sparkles size={16} />
                توسعه کاملاً اختصاصی
              </span>
            </div>
          </div>
          <Editor />
        </div>
        <div className="container hero-bottom">
          <span dir="ltr">YOUR VISION. OUR CODE.</span>
          <Link href="/#services">
            <MoveDown size={15} />
            کمی بیشتر با ما آشنا شوید
          </Link>
          <span className="live-note">
            <i />
            ساختن، هر روز بهتر از دیروز
          </span>
        </div>
      </section>
      <Marquee />
      <section className="services-section section" id="services">
        <div className="container">
          <div className="section-top">
            <SectionTitle
              eyebrow="تخصص ما، مزیت شما"
              title="برای هر ایده، یک راهکار اختصاصی."
              description="از طراحی تجربه تا معماری پیچیده؛ همه‌چیز برای ساختن محصولی که تفاوت ایجاد کند."
            />
            <span className="section-number" dir="ltr">
              01 / WHAT WE DO
            </span>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <article className="service-card" key={s.title}>
                <div className="service-top">
                  <span className="service-icon">
                    <s.icon size={25} />
                  </span>
                  <span dir="ltr">0{i + 1}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="service-bottom">
                  <span dir="ltr">{s.tag}</span>
                  <Link href="/contact" aria-label={`درخواست ${s.title}`}>
                    <ArrowUpLeft size={20} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="about-band" id="about">
        <div className="container about-inner">
          <div>
            <span className="eyebrow">
              <i />
              کد تمیز. فکر روشن.
            </span>
            <h2>
              تکنولوژی در خدمت ایده.
              <br />
              <span className="text-muted-foreground">نه برعکس.</span>
            </h2>
            <p>در رموو، هر پروژه یک همکاری است. با دقت گوش می‌دهیم، هوشمندانه طراحی می‌کنیم و با وسواس می‌سازیم.</p>
          </div>
          <div className="stats">
            <Counter value={100} suffix="٪" label="تمرکز بر کیفیت" />
            <Counter value={6} suffix="+" label="فناوری کلیدی" />
            <Counter value={4} suffix="" label="حوزه تخصصی" />
            <Counter value={1} suffix="" label="تیم، همراه ایده شما" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-top">
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
      <section className="consultation-section section" id="consultation">
        <div className="container consultation-layout">
          <div>
            <SectionTitle
              eyebrow="اینجا، نقطه شروع است"
              title="ایده‌تان را به ما بسپارید."
              description="یک گفت‌وگوی خوب، اولین قدم ساختن یک محصول خوب است. از پروژه‌تان بگویید؛ با هم مسیرش را پیدا می‌کنیم."
            />
            <div className="consultation-points">
              <span>
                <Check />
                بررسی نیازها و مسیر پروژه
              </span>
              <span>
                <Check />
                پیشنهاد راهکار فنی متناسب
              </span>
              <span>
                <Check />
                گفت‌وگوی مستقیم با تیم توسعه
              </span>
            </div>
            <span className="consultation-sign" dir="ltr">
              Let&apos;s build something that matters. ↗
            </span>
          </div>
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
