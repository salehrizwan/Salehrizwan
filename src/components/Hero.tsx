import { motion } from 'motion/react';
import { ArrowRight, Globe, Clock } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center justify-center text-center min-h-[85vh] overflow-hidden">
      
      {/* Subtle Background Animations */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px]"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full"
      >
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-brand-orange text-sm font-semibold shadow-sm">
            <Globe size={14} />
            <span>Available Worldwide</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-sm font-medium shadow-sm">
            <Clock size={14} />
            <span>Typically replies within 24 hours</span>
          </div>
        </div>

        <div className="mb-6">
           <h2 className="text-sm md:text-base text-gray-500 font-inter font-bold uppercase tracking-[0.2em] inline-flex items-center gap-4">
             <span className="w-8 h-[2px] bg-brand-orange rounded-full"></span>
             Saleh Rizwan Digital
             <span className="w-8 h-[2px] bg-brand-orange rounded-full"></span>
           </h2>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[1.1] text-brand-black">
          High-End Websites That <br className="hidden md:block"/>
          <span className="text-brand-orange relative inline-block">
             Drive Revenue
             <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="4" />
             </svg>
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
          I partner with ambitious businesses to design and develop premium, ultra-fast websites that increase trust, generate more leads, and scale online.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <a 
            href={`https://wa.me/923706156584?text=${encodeURIComponent("I want to book a call with you when you are available. I need to create a website and other things. Please tell me how to book the call.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 hover:-translate-y-1 w-full sm:w-auto"
          >
            Text Me to Book a Call
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#projects" 
            className="group flex items-center justify-center gap-2 bg-white text-brand-black border-2 border-gray-100 px-8 py-5 rounded-2xl text-lg font-bold hover:border-gray-200 hover:bg-gray-50 transition-all w-full sm:w-auto"
          >
            View Featured Work
          </a>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-gray-400">
          <span className="flex items-center gap-2">✓ SEO Optimized</span>
          <span className="flex items-center gap-2">✓ Lightning Fast</span>
          <span className="flex items-center gap-2">✓ Conversion Focused</span>
          <span className="flex items-center gap-2">✓ Premium Design</span>
        </div>
      </motion.div>
    </section>
  );
}
