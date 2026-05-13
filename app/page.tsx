import { Metadata } from 'next';
import { Header } from "@/components/layouts/Header";
import { Hero } from "@/components/layouts/Hero";
import { VideoShowcase } from "@/components/layouts/VideoShowcase";
import { Services } from "@/components/layouts/Services";
import { FeaturesCTA } from "@/components/layouts/FeaturesCTA";
import { Footer } from "@/components/layouts/Footer";
import { ReviewsSlider } from "@/components/layouts/ReviewsSlider";
import { PortfolioPreview } from "@/components/layouts/PortfolioPreview";

export const metadata: Metadata = {
  title: "لمسة ديكور | إبداع معماري في الديكور والجبس والـ GRC",
  description: "اكتشف عالم الفخامة مع لمسة ديكور. نحن متخصصون في تنفيذ أرقى الديكورات المعمارية، الجبسوم بورد، والواجهات الخارجية بنظام GRC و GRB. خبرة هندسية تضمن لك جودة التنفيذ وسرعة التسليم.",
  keywords: ["لمسة ديكور", "ديكورات داخلية", "واجهات خارجية", "GRC", "جبسوم بورد", "أسقف معلقة", "تشطيبات فيلات", "تصميم معماري"],
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        <VideoShowcase />
        <Services />
        <PortfolioPreview />
        <FeaturesCTA />
        <ReviewsSlider />
      </main>

      <Footer />
    </div>
  );
}

