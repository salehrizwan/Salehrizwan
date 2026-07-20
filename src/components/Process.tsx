import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    description: "We discuss your goals, target audience, and functional requirements to map out the perfect digital strategy."
  },
  {
    num: "02",
    title: "Wireframing & UI Design",
    description: "I craft clean, modern visual concepts and wireframes, refining them until they align perfectly with your brand."
  },
  {
    num: "03",
    title: "Development & Coding",
    description: "Bringing the design to life with clean, responsive, and performance-optimized code."
  },
  {
    num: "04",
    title: "Testing & SEO Setup",
    description: "Rigorous testing across devices, speed optimization, and full Google Search Console / SEO configuration."
  },
  {
    num: "05",
    title: "Launch & Support",
    description: "Deploying your beautiful new website to the world, followed by 30 days of free technical support."
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">A Simple, Transparent Process</h2>
        <p className="text-xl text-gray-500 font-inter">
          From concept to launch, I handle the technical complexities so you can focus on your business.
        </p>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-white text-brand-orange font-bold  shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              {step.num}
            </div>
            
            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className=" font-bold text-xl text-brand-black mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
