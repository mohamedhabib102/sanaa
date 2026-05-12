import { Metadata } from 'next';
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { ReviewsContent } from "@/components/layouts/ReviewsContent";

export const metadata: Metadata = {
  title: "آراء العملاء | ديكور برو للمعمار",
  description: "اطلع على تقييمات عملاء ديكور برو للمعمار. قصص نجاح وثقة متبادلة في تنفيذ أرقى الديكورات الجبسية والمعمارية.",
  keywords: ["تقييمات", "آراء العملاء", "ثقة", "مشروعات ناجحة", "ديكور برو"],
};

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-24">
      <Header />
      <main className="flex-1">
        <ReviewsContent />
      </main>
      <Footer />
    </div>
  );
}

