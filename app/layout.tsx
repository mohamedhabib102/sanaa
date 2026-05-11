import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { FloatingContact } from "@/components/ui/FloatingContact";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
});

export const metadata: Metadata = {
  title: "الصنعة | خبراء الجبس وواجهات GRB و GRC",
  description: "الصنعة متخصصون في توريد وتركيب أعمال الجبس، الجبس بورد، وواجهات GRB و GRC بخبرة تزيد عن ٢٥ عاماً. تنفيذ أرقى الديكورات المعمارية والواجهات بجودة هندسية فائقة.",
  keywords: ["الصنعة", "خبراء الجبس", "واجهات GRC", "واجهات GRB", "جبس بورد", "ديكورات معمارية", "صنايعي جبس محترف", "تشطيبات واجهات"],
  openGraph: {
    title: "الصنعة | خبراء الجبس وواجهات GRB و GRC",
    description: "أفضل حلول الديكور الداخلي والواجهات الخارجية بنظام GRC و GRB.",
    images: [
      {
        url: "/imgs/logo.PNG",
        width: 1200,
        height: 630,
        alt: "الصنعة لأعمال الجبس والواجهات",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "الصنعة | خبراء الجبس وواجهات GRB و GRC",
    images: ["/imgs/logo.PNG"],
  },
  icons: {
    icon: "/imgs/logo.PNG",
  },
};

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
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
