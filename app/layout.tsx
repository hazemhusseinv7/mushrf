import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "منصة مشرف",
  description:
    "منصة مشرف هي الحل الرقمي المتكامل لإدارة المشاريع والأنشطة المتعلقة بالمقاولات والإشراف الفني والمالي للمباني، حيث توفر تجربة ذكية ومتطورة تساهم في تحسين الأداء وتسريع تنفيذ المشاريع بجودة وكفاءة عالية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        className={`${ibmPlexSansArabic.variable} font-ibm-plex-sans-arabic antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
