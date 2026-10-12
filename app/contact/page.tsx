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
    <main className="mx-auto min-h-[70vh] w-[calc(100%-36px)] max-w-[1320px] py-[65px] pb-[85px] min-[501px]:w-[calc(100%-64px)] min-[1101px]:w-[calc(100%-112px)] max-[800px]:py-[45px]">
      <SectionTitle
        eyebrow="یک گفت‌وگو، هزار امکان"
        title="بیایید چیز متفاوتی بسازیم."
        description="از ایده، چالش و هدف‌هایتان بگویید. ما آماده شنیدن هستیم."
      />
      <div className="mt-[55px] grid grid-cols-[0.8fr_1fr] gap-[90px] max-[1100px]:mt-[35px] max-[800px]:grid-cols-1 max-[800px]:gap-[30px]">
        <div>
          <div className="mb-[34px] flex gap-[17px] max-[1100px]:mb-[25px]">
            <span className="grid size-[46px] shrink-0 place-items-center rounded-[7px] border border-leaf/20 bg-leaf/5 text-leaf">
              <MessageCircle />
            </span>
            <div>
              <h3 className="mt-0.5 text-base font-semibold">گفت‌وگو درباره پروژه</h3>
              <p className="mt-2.5 text-sm leading-7 text-muted-foreground">فرم روبه‌رو، مسیر مستقیم ارتباط با تیم رموو است.</p>
            </div>
          </div>
          <div className="mb-[34px] flex gap-[17px] max-[1100px]:mb-[25px]">
            <span className="grid size-[46px] shrink-0 place-items-center rounded-[7px] border border-primary/20 bg-primary/5 text-primary">
              <CodeXml />
            </span>
            <div>
              <h3 className="mt-0.5 text-base font-semibold">مشاوره با تیم توسعه</h3>
              <p className="mt-2.5 text-sm leading-7 text-muted-foreground">از انتخاب فناوری تا بررسی نیازها و مسیر اجرای پروژه، کنار شما هستیم.</p>
            </div>
          </div>
          <div className="mt-[55px] text-primary max-[800px]:hidden">
            <ArrowUpLeft size={30} />
            <h3 className="mt-4 text-[27px] leading-[1.8] font-bold">
              هر محصول بزرگ،
              <br />
              از یک ایده شروع می‌شود.
            </h3>
            <p className="mt-3.5 text-sm text-muted-foreground">ایده بعدی می‌تواند ایده شما باشد.</p>
          </div>
        </div>
        <ConsultationForm />
      </div>
    </main>
  );
}
