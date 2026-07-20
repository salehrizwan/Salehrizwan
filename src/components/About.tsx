import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Code, Zap, Search, TrendingUp, CheckCircle2 } from 'lucide-react';

function Counter({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-4">About Me</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 tracking-tight">
              Crafting Digital Experiences That Convert
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I am a specialized Web Designer and Developer focused on building premium, high-performance websites for businesses that want to scale. My approach is simple: create beautiful, fast, and SEO-optimized platforms that turn visitors into loyal customers.
              </p>
              <p>
                Unlike typical freelancers, I bring a premium Digital Studio standard to every project. I prioritize clean code architecture, mobile-first design, and conversion rate optimization (CRO) to ensure your website isn't just an online brochure, but a powerful growth engine.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Code, text: "Clean, Scalable Code" },
                { icon: Zap, text: "Lightning Fast Performance" },
                { icon: Search, text: "SEO & Google Indexing" },
                { icon: TrendingUp, text: "Conversion Focused Design" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-orange shadow-sm">
                    <item.icon size={18} />
                  </div>
                  <span className="font-semibold text-brand-black">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50"
          >
            <div className="grid grid-cols-2 gap-8 md:grid-cols-2">
              <div>
                <div className="text-xl md:text-2xl font-black text-brand-orange mb-2">
                  Modern Technologies
                </div>
                <div className="text-gray-500 font-medium">React, Tailwind, Next.js</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-black text-brand-orange mb-2">
                  Worldwide Availability
                </div>
                <div className="text-gray-500 font-medium">Serving International Clients</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-black text-brand-orange mb-2">
                  Fast Response Time
                </div>
                <div className="text-gray-500 font-medium">Clear Client Communication</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-black text-brand-orange mb-2">
                  Premium Quality
                </div>
                <div className="text-gray-500 font-medium">Long-term Support & Care</div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <h4 className="font-bold text-brand-black mb-4">Why Businesses Choose Me:</h4>
              <ul className="space-y-3">
                {[
                  "Premium Quality Design",
                  "Guaranteed Fast Loading Speeds",
                  "Direct Communication & Fast Responses"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
