import type { Metadata } from "next";
import { MessageCircle, CodeXml, ArrowUpLeft } from "lucide-react";
import { SectionTitle } from "@/components/ramvo/site";
import { ConsultationForm } from "@/components/ramvo/consultation";

export const metadata: Metadata = {
  title: "تماس و درخواست مشاوره | رموو",
  description: "درباره پروژه خود با تیم رموو صحبت کنید. ثبت درخواست مشاوره برای طراحی و توسعه اختصاصی.",
  openGraph: {
    title: "شروع همکاری با رموو",
    description: "ایده‌تان را با ما در میان بگذارید و مسیر ساخت محصول را پیدا کنید.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Contact() {
  return (
    <main className="container contact-page">
      <SectionTitle
        eyebrow="یک گفت‌وگو، هزار امکان"
        title="بیایید چیز متفاوتی بسازیم."
        description="از ایده، چالش و هدف‌هایتان بگویید. ما آماده شنیدن هستیم."
      />
      <div className="contact-layout">
        <div className="contact-info">
          <div className="contact-info-row">
            <span className="service-icon">
              <MessageCircle />
            </span>
            <div>
              <h3>گفت‌وگو درباره پروژه</h3>
              <p>فرم روبه‌رو، مسیر مستقیم ارتباط با تیم رموو است.</p>
            </div>
          </div>
          <div className="contact-info-row">
            <span className="service-icon">
              <CodeXml />
            </span>
            <div>
              <h3>مشاوره با تیم توسعه</h3>
              <p>از انتخاب فناوری تا بررسی نیازها و مسیر اجرای پروژه، کنار شما هستیم.</p>
            </div>
          </div>
          <div className="contact-note">
            <ArrowUpLeft size={30} />
            <h3>
              هر محصول بزرگ،
              <br />
              از یک ایده شروع می‌شود.
            </h3>
            <p>ایده بعدی می‌تواند ایده شما باشد.</p>
          </div>
        </div>
        <ConsultationForm />
      </div>
    </main>
  );
}
