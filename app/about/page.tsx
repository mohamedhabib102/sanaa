import { Metadata } from 'next';
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { AboutContent } from "@/components/layouts/AboutContent";

export const metadata: Metadata = {
  title: "من نحن | لمسة ديكور.. ريادة في الديكور المعماري والواجهات",
  description: "تعرف على رحلة لمسة ديكور في عالم المعمار. نجمع بين الخبرة الطويلة والابتكار الفني لتقديم حلول تشطيب وديكور تتجاوز تطلعات عملائنا. اكتشف لماذا يختارنا أصحاب الفلل والقصور.",
  keywords: ["شركة لمسة ديكور", "من نحن", "خبرة أعمال الجبس", "أفضل شركة ديكور", "تاريخ لمسة ديكور", "جودة التنفيذ المعماري"],
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-24">
      <Header />
      <main className="flex-1">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}

