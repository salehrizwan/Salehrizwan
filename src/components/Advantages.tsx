import { motion } from 'motion/react';
import { Search, MonitorSmartphone, Zap, Paintbrush, ShieldCheck, Layers, Code2, TrendingUp, BarChart3, LineChart, PlayCircle, Headset } from 'lucide-react';

const advantages = [
  {
    icon: <Paintbrush size={24} className="text-brand-orange" />,
    title: "Premium Design",
    description: "Bespoke, premium aesthetics tailored to elevate your brand's perception."
  },
  {
    icon: <Search size={24} className="text-brand-orange" />,
    title: "SEO Optimized",
    description: "Semantic HTML and advanced technical SEO to ensure you rank on the first page."
  },
  {
    icon: <Zap size={24} className="text-brand-orange" />,
    title: "Fast Performance",
    description: "Lightning-fast load times through asset optimization and modern frameworks."
  },
  {
    icon: <MonitorSmartphone size={24} className="text-brand-orange" />,
    title: "Mobile First",
    description: "Flawless user experiences across all devices, prioritizing mobile users."
  },
  {
    icon: <ShieldCheck size={24} className="text-brand-orange" />,
    title: "Top-tier Security",
    description: "Robust protection against vulnerabilities, ensuring your data remains safe."
  },
  {
    icon: <Layers size={24} className="text-brand-orange" />,
    title: "Scalable Architecture",
    description: "Future-proof infrastructure designed to grow effortlessly alongside your business."
  },
  {
    icon: <Code2 size={24} className="text-brand-orange" />,
    title: "Clean Code",
    description: "Maintainable, well-documented code following the highest industry standards."
  },
  {
    icon: <TrendingUp size={24} className="text-brand-orange" />,
    title: "Conversion Focus",
    description: "Strategic UI/UX decisions designed specifically to turn visitors into leads."
  },
  {
    icon: <BarChart3 size={24} className="text-brand-orange" />,
    title: "Google Analytics Setup",
    description: "Comprehensive tracking configured to monitor traffic and user behavior."
  },
  {
    icon: <LineChart size={24} className="text-brand-orange" />,
    title: "Search Console",
    description: "Direct integration with Google to monitor index status and search visibility."
  },
  {
    icon: <PlayCircle size={24} className="text-brand-orange" />,
    title: "Free Training",
    description: "Personalized video tutorials showing you exactly how to manage your new site."
  },
  {
    icon: <Headset size={24} className="text-brand-orange" />,
    title: "Free Launch Support",
    description: "Priority technical support after going live to ensure a completely smooth transition."
  }
];

export function Advantages() {
  return (
    <section id="advantages" className="py-32 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h3 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-4">The Standard</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 tracking-tight">Why Choose Me?</h2>
          <p className="text-xl text-gray-500 font-inter">
            I don't just build websites; I build digital assets that give you a competitive edge. Here is what is included in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-brand-orange/30 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <div className="text-brand-orange group-hover:text-white transition-colors">
                  {adv.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">{adv.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
