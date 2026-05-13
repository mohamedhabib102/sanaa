import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { FloatingContact } from "@/components/ui/FloatingContact";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elsanaa.com'), // استبدل بالنطاق الحقيقي عند الحجز
  title: {
    default: "لمسة ديكور | خبراء الجبس والديكور المعماري وواجهات GRC و GRB",
    template: "%s | لمسة ديكور"
  },
  description: "لمسة ديكور هي وجهتكم الأولى لتنفيذ أفخم الديكورات الجبسية والواجهات المعمارية الخارجية. متخصصون في GRC، GRB، الجبسوم بورد، والأسقف المعلقة بأحدث التصاميم العالمية للفيلات والقصور.",
  keywords: [
    "لمسة ديكور", "أعمال الجبس", "جبس بورد", "واجهات GRC", "واجهات GRB", 
    "ديكورات جبس فخمة", "أسقف معلقة", "مقاول جبس", "تركيب GRC", 
    "تصاميم واجهات كلاسيك", "تشطيب فيلات", "ديكورات داخلية", "بيت نور", 
    "كرانيش جبس يدوية", "جي آر سي", "جي آر بي", "توريد وتركيب ديكورات",
    "تشطيب قصور", "ديكورات جبس مودرن", "معلم جبس", "معلم جبس بورد", "فني جبس محترف"
  ],
  authors: [{ name: "لمسة ديكور" }],
  creator: "لمسة ديكور",
  publisher: "لمسة ديكور",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "لمسة ديكور | إتقان في أعمال الجبس وواجهات GRC و GRB",
    description: "نقدم أفضل حلول الديكور الداخلي والواجهات الخارجية بنظام GRC و GRB بأعلى معايير الجودة والدقة الهندسية.",
    url: '/',
    siteName: 'لمسة ديكور',
    images: [
      {
        url: "/imgs/logo-new.png",
        width: 1200,
        height: 630,
        alt: "لمسة ديكور لأعمال الجبس والواجهات",
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "لمسة ديكور | خبراء الجبس وواجهات GRB و GRC",
    description: "متخصصون في أرقى التشطيبات المعمارية والديكورات الجبسية والواجهات الخارجية.",
    images: ["/imgs/logo-new.png"],
  },
  icons: {
    icon: "/imgs/logo-new.png",
    shortcut: "/imgs/logo-new.png",
    apple: "/imgs/logo-new.png",
  },
};

import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Toaster position="top-right" reverseOrder={false} />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}

