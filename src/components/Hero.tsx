import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto flex flex-col items-center justify-center text-center min-h-[80vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-brand-orange text-sm font-medium mb-6">
          Available for new opportunities
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
          <span className="text-brand-orange">Saleh</span> <span className="text-brand-black">Rizwan</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-500 font-inter font-light mb-8">
          Web Designer & Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
          I build premium, ultra-fast, and SEO-optimized websites that help businesses 
          scale worldwide. Clean code, luxurious design, and unmatched performance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="group flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#projects" 
            className="flex items-center justify-center bg-white border-2 border-gray-100 text-brand-black px-8 py-4 rounded-xl text-base font-bold hover:bg-gray-50 transition-colors"
          >
            View My Work
          </a>
        </div>
      </motion.div>
    </section>
  );
}
