import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Money Coder | حلول المحاسبة والبرمجة والأتمتة",
  description: "حلول محاسبية وبرمجية وأتمتة أعمال تساعد الشركات على إدارة أعمالها بكفاءة ووضوح.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Money Coder — Smart Accounting & Automation",
    description: "حلول ذكية للمحاسبة والبرمجة والأتمتة.",
    url: "/",
    siteName: "Money Coder",
    locale: "ar_EG",
    type: "website",
    images: [{ url: "/money-coder-logo-original.jpg", width: 1254, height: 1254 }],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
