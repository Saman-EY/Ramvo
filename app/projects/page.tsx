import type { Metadata } from "next";
import { ProjectsArchive } from "@/components/ramvo/projects-archive";

export const metadata: Metadata = {
  title: "پروژه‌ها و نمونه‌کارها | رموو",
  description: "آرشیو نمونه‌های نمایشی رموو؛ وب‌اپلیکیشن، فروشگاه آنلاین، طراحی و زیرساخت.",
  openGraph: {
    title: "پروژه‌ها | رموو",
    description: "تجربه‌های دیجیتال با طراحی و توسعه اختصاصی.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ProjectsPage() {
  return <ProjectsArchive />;
}
