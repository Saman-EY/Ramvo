import type { Metadata } from "next";
import { Vazirmatn, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/ramvo/header";
import { Footer } from "@/components/ramvo/site";
import { Providers } from "@/lib/Providers";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "رموو | مهندسی محصولات دیجیتال",
  description: "توسعه اختصاصی وب و محصولات دیجیتال با رموو",
  authors: [{ name: "Ramvo" }],
  openGraph: {
    title: "رموو | مهندسی محصولات دیجیتال",
    description: "توسعه اختصاصی وب و محصولات دیجیتال با رموو",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={cn("dark", "antialiased scroll-smooth [scroll-padding-top:100px]", vazirmatn.variable, jetbrainsMono.variable)}>
      <body className="flex min-h-full flex-col bg-[radial-gradient(ellipse_at_50%_-30%,oklch(0.24_0.045_255_/_35%),transparent_55%)] bg-fixed">
        <NextTopLoader color="#ffc23f" height={3} crawl={true} speed={500} showSpinner={false} />

        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      </body>
    </html>
  );
}
