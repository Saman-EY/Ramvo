import type { Metadata } from "next";
import { Vazirmatn, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/ramvo/header";
import { Footer } from "@/components/ramvo/site";

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
    <html
      lang="fa"
      dir="rtl"
      className={cn("dark", "antialiased", vazirmatn.variable, jetbrainsMono.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

