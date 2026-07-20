import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

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

export function Stats() {
  return (
    <section className="py-20 bg-gray-50 text-brand-black border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-4">
            Trusted by Growing Businesses
          </h3>
          <p className="text-2xl md:text-3xl font-bold text-gray-800">
            Delivering measurable results across the globe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center border-t border-gray-200 pt-12">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">
              <Counter end={135} suffix="+" />
            </div>
            <div className="text-gray-500 font-inter text-sm">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">
              <Counter end={99} suffix="%" />
            </div>
            <div className="text-gray-500 font-inter text-sm">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">
              <Counter end={24} suffix="/7" />
            </div>
            <div className="text-gray-500 font-inter text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
