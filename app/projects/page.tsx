'use client';
import { motion } from 'framer-motion';
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import Link from 'next/link';

const allProjects = [
  "/imgs/profile_1.jpeg",
  "/imgs/profile_2.jpeg",
  "/imgs/profile_3.jpeg",
  "/imgs/profile_4.jpeg",
  "/imgs/profile_5.jpeg",
  "/imgs/profile_6.jpeg",
  "/imgs/profile_7.jpeg",
  "/imgs/profile_8.jpeg",
  "/imgs/profile_9.jpeg",
  "/imgs/profile_10.jpeg",
  "/imgs/profile_11.jpeg",
  "/imgs/profile_12.jpeg",
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-24">
      <Header />
      
      <main className="flex-1 pb-24">
        {/* Breadcrumbs */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 border-b border-zinc-50 mb-12">
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
                <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
                <span>/</span>
                <span className="text-zinc-900">معرض المشاريع</span>
            </div>
        </div>

        <section className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-right mb-16">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6"
                >
                    كل أعمالنا
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-zinc-500 text-lg max-w-2xl ml-auto"
                >
                    استكشف مجموعة كاملة من مشاريعنا في تنفيذ ديكورات الجبس، الأسقف المعلقة، وواجهات GRC والـ GRB بأعلى مستويات الإتقان.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {allProjects.map((img, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="aspect-square overflow-hidden rounded-xl shadow-md group"
                    >
                        <img 
                            src={img} 
                            alt={`مشروع جبس و GRC ${index + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
