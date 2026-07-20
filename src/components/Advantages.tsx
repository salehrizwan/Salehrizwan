import { motion } from 'motion/react';
import { Search, MonitorSmartphone, Zap, Paintbrush, Database, Headset } from 'lucide-react';

const advantages = [
  {
    icon: <Search size={24} className="text-brand-orange" />,
    title: "Free SEO & Google Console",
    description: "Every website includes full on-page SEO setup and Google Search Console integration so you rank from day one."
  },
  {
    icon: <MonitorSmartphone size={24} className="text-brand-orange" />,
    title: "Fully Responsive Design",
    description: "Flawless experiences across mobile, tablet, and desktop devices. Mobile-first approach guaranteed."
  },
  {
    icon: <Zap size={24} className="text-brand-orange" />,
    title: "Blazing Fast Performance",
    description: "Optimized assets, clean code, and modern frameworks ensure your site loads in milliseconds."
  },
  {
    icon: <Paintbrush size={24} className="text-brand-orange" />,
    title: "Premium Custom UI/UX",
    description: "No generic templates. I design luxurious, bespoke interfaces tailored specifically to your brand identity."
  },
  {
    icon: <Database size={24} className="text-brand-orange" />,
    title: "Easy Content Management",
    description: "Integrated CMS options so you can easily update text, images, and products without writing code."
  },
  {
    icon: <Headset size={24} className="text-brand-orange" />,
    title: "1 Month Free Support",
    description: "Post-launch peace of mind. I provide 30 days of free technical support and minor updates."
  }
];

export function Advantages() {
  return (
    <section id="advantages" className="py-32 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">Why Choose Me?</h2>
          <p className="text-xl text-gray-500 font-inter">
            I don't just build websites; I build digital assets that give you a competitive edge. Here is what is included in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {advantages.map((adv, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">{adv.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
