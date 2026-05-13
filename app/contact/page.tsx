import { Metadata } from 'next';
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { ContactContent } from "@/components/layouts/ContactContent";

export const metadata: Metadata = {
  title: "اتصل بنا | احصل على استشارة مجانية من لمسة ديكور",
  description: "تواصل مع خبراء لمسة ديكور اليوم لمناقشة مشروعك. نحن متاحون لتقديم استشارات فنية وعروض أسعار منافسة لأعمال الجبس والواجهات الخارجية عبر واتساب أو الهاتف.",
  keywords: ["تواصل معنا", "رقم فني جبس", "شركة ديكور جدة", "واتساب لمسة ديكور", "استشارة ديكور مجانية", "مقاول واجهات GRC"],
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-24">
      <Header />
      <main className="flex-1">
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
}

