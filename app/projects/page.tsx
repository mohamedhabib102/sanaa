import { Metadata } from 'next';
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { ProjectsContent } from "@/components/layouts/ProjectsContent";

export const metadata: Metadata = {
  title: "معرض المشاريع | إبداعات لمسة ديكور في الواجهات والديكور",
  description: "استعرض معرض أعمالنا الذي يضم نخبة من المشاريع المنفذة. شاهد صوراً حية لأعمال GRC، ديكورات الجبس الفاخرة، والأسقف المعلقة التي نفذناها في أرقى القصور والفيلات.",
  keywords: ["معرض أعمال", "صور مشاريع", "مشاريع GRC منفذة", "ديكورات جبس صور", "أعمال لمسة ديكور", "تشطيبات قصور مودرن"],
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-24 text-right">
      <Header />
      <main className="flex-1">
        <ProjectsContent />
      </main>
      <Footer />
    </div>
  );
}

