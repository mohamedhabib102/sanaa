import { Metadata } from 'next';
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { ReviewsContent } from "@/components/layouts/ReviewsContent";

export const metadata: Metadata = {
  title: "آراء عملائنا | لماذا يثق الجميع في لمسة ديكور؟",
  description: "اطلع على تجارب عملائنا الحقيقية مع لمسة ديكور. قصص نجاح وتوصيات تعكس التزامنا بالجودة العالية والمواعيد الدقيقة في تنفيذ أعمال الجبس والديكور.",
  keywords: ["آراء العملاء", "تقييمات شركة ديكور", "تجارب لمسة ديكور", "ثقة العملاء", "توصيات مقاول جبس", "أفضل مقاول واجهات"],
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

