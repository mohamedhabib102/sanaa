'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export const VideoShowcase = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 font-serif leading-tight text-right">
              نحول رؤيتكم إلى <span className="text-[#c5a059]">واقع ملموس</span> بدقة متناهية
            </h2>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed text-right">
              في لمسة ديكور، نؤمن بأن التفاصيل هي ما تصنع الفارق. نحن لا نقوم فقط بتركيب الجبس أو الواجهات، بل نصنع تحفاً فنية تعكس ذوقكم الرفيع وتضفي لمسة من الفخامة على مساحاتكم الخاصة.
            </p>
            <div className="space-y-4">
              <div className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#c5a059]/10 flex items-center justify-center text-[#c5a059] shrink-0">
                  <span className="font-bold">01</span>
                </div>
                <div className="">
                  <h4 className="font-bold text-zinc-900">إتقان هندسي</h4>
                  <p className="text-sm text-zinc-500">نلتزم بأعلى معايير الجودة والدقة في كل مشروع.</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#c5a059]/10 flex items-center justify-center text-[#c5a059] shrink-0">
                  <span className="font-bold">02</span>
                </div>
                <div className="">
                  <h4 className="font-bold text-zinc-900">تصاميم حصرية</h4>
                  <p className="text-sm text-zinc-500">نبتكر حلولاً ديكورية تناسب تطلعاتكم وتواكب العصر.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-1 relative"
          >
            <div className="relative aspect-3/4 md:aspect-4/5 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-200">
              <video 
                src="/imgs/hero.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#c5a059]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#c5a059]/20 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
