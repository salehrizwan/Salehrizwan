import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "OAKLNY Restaurant",
    category: "Food & Beverage",
    description: "A fast food restaurant website showcasing menus and driving online orders.",
    color: "bg-orange-50",
    link: "https://oaklyn-s-1.vercel.app/"
  },
  {
    title: "Pret Studio London",
    category: "Fashion & Apparel",
    description: "High-end clothing brand storefront with a premium visual identity.",
    color: "bg-gray-100",
    link: "https://www.pretstudiolondon.com/"
  },
  {
    title: "Polor Website",
    category: "Creative Portfolio",
    description: "A visually striking, highly interactive creative portfolio featuring smooth scrolling, dynamic animations, and a bespoke user experience designed to showcase high-end creative work.",
    color: "bg-stone-100",
    link: "https://salehrizwan.github.io/polor-website/"
  },
  {
    title: "Javeria's Aesthetics",
    category: "Cosmetic Surgery & Clinic",
    description: "A premium, sophisticated web presence for a medical aesthetics and doctor's clinic.",
    color: "bg-rose-50",
    link: "https://javeria-s-aesthetics-2-0.vercel.app/"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">Featured Work</h2>
        <p className="text-xl text-gray-500 max-w-2xl font-inter">
          A selection of premium websites built to drive engagement, conversions, and brand authority.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            target={project.link !== '#' ? '_blank' : undefined}
            rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group block cursor-pointer"
          >
            <div className={`aspect-[4/3] ${project.color} rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-[1.02]`}>
              {/* Abstract Representation of project */}
              {project.link !== '#' ? (
                <iframe 
                  src={project.link} 
                  title={project.title}
                  className="w-full h-full rounded-xl border border-white/40 shadow-sm pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ transform: 'scale(1)', transformOrigin: 'top left' }}
                />
              ) : (
                <div className="w-full h-full bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm relative overflow-hidden group-hover:shadow-xl transition-shadow duration-500">
                  <div className="absolute top-4 left-4 right-4 h-12 bg-gray-100/50 rounded-lg flex items-center px-4">
                     <div className="w-20 h-3 bg-gray-200/80 rounded-full"></div>
                  </div>
                  <div className="absolute top-24 left-4 w-3/4 h-8 bg-gray-100/50 rounded"></div>
                  <div className="absolute top-36 left-4 w-1/2 h-4 bg-gray-100/50 rounded"></div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-colors duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-brand-black px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg">
                  View Case Study <ExternalLink size={16} />
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-brand-orange mb-2 tracking-wide uppercase">{project.category}</div>
              <h3 className="text-2xl  font-bold text-brand-black mb-2">{project.title}</h3>
              <p className="text-gray-500">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
