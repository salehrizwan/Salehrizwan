import { motion } from 'motion/react';
import { Target, PenTool, Code, CheckSquare, Rocket } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    description: "We discuss your goals, target audience, and functional requirements to map out the perfect digital strategy.",
    icon: <Target size={20} />
  },
  {
    num: "02",
    title: "Wireframing & UI Design",
    description: "I craft clean, modern visual concepts and wireframes, refining them until they align perfectly with your brand.",
    icon: <PenTool size={20} />
  },
  {
    num: "03",
    title: "Development & Coding",
    description: "Bringing the design to life with clean, responsive, and performance-optimized code.",
    icon: <Code size={20} />
  },
  {
    num: "04",
    title: "Testing & SEO Setup",
    description: "Rigorous testing across devices, speed optimization, and full Google Search Console / SEO configuration.",
    icon: <CheckSquare size={20} />
  },
  {
    num: "05",
    title: "Launch & Support",
    description: "Deploying your beautiful new website to the world, followed by 30 days of free technical support.",
    icon: <Rocket size={20} />
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-4">How It Works</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 tracking-tight">A Simple, Transparent Process</h2>
          <p className="text-xl text-gray-500 font-inter max-w-2xl mx-auto">
            From concept to launch, I handle the technical complexities so you can focus on your business.
          </p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-brand-orange/20 before:via-brand-orange/40 before:to-brand-orange/20">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Icon / Number */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-brand-orange text-white font-bold shadow-xl shadow-brand-orange/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {step.icon}
              </div>
              
              {/* Content */}
              <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-brand-orange/30 transition-all group-hover:-translate-y-1">
                <div className="text-brand-orange font-mono text-sm font-bold mb-2 tracking-widest uppercase">Step {step.num}</div>
                <h3 className="font-bold text-2xl text-brand-black mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
