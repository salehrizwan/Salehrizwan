import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-brand-black text-white relative overflow-hidden">
      {/* Decorative abstract elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-orange/20 blur-[120px]"></div>
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-brand-orange/10 blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-gray-200 uppercase">Accepting New Projects</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            Ready to Build Your <br/><span className="text-brand-orange">Digital Empire?</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Stop losing customers to your competitors. Let's create a premium web experience that builds trust and drives revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact"
              className="group flex items-center gap-2 bg-brand-orange text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-orange-600 transition-all shadow-xl shadow-brand-orange/20 hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              Start your project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href={`https://wa.me/923706156584?text=${encodeURIComponent("I want to book a free consultancy. I need a website.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
            >
              <Calendar size={20} />
              Book free consultancy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
