import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, Layout, Clock, Target, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: "OAKLNY Restaurant",
    category: "Food & Beverage",
    description: "A fast food restaurant website showcasing menus and driving online orders.",
    color: "bg-orange-50",
    link: "https://oaklyn-s-1.vercel.app/",
    tech: ["React", "Tailwind", "Vite"],
    duration: "3 Weeks",
    projectType: "Restaurant / Ordering",
    servicesProvided: "Web Design, Frontend Development"
  },
  {
    title: "Pret Studio London",
    category: "Fashion & Apparel",
    description: "High-end clothing brand storefront with a premium visual identity.",
    color: "bg-gray-100",
    link: "https://www.pretstudiolondon.com/",
    tech: ["React", "Tailwind", "Figma"],
    duration: "4 Weeks",
    projectType: "E-Commerce",
    servicesProvided: "UI/UX Design, Performance Optimization"
  },
  {
    title: "Polor Website",
    category: "Creative Portfolio",
    description: "A visually striking, highly interactive creative portfolio featuring smooth scrolling and dynamic animations.",
    color: "bg-stone-100",
    link: "https://salehrizwan.github.io/polor-website/",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    duration: "2 Weeks",
    projectType: "Portfolio",
    servicesProvided: "Frontend Development, Animations"
  },
  {
    title: "Javeria's Aesthetics",
    category: "Cosmetic Surgery & Clinic",
    description: "A premium, sophisticated web presence for a medical aesthetics and doctor's clinic.",
    color: "bg-rose-50",
    link: "https://javeria-s-aesthetics-2-0.vercel.app/",
    tech: ["React", "Tailwind CSS", "SEO"],
    duration: "4 Weeks",
    projectType: "Corporate / Medical",
    servicesProvided: "Web Design, Local SEO"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <h3 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-4">Case Studies</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 tracking-tight">Featured Work</h2>
        <p className="text-xl text-gray-500 max-w-2xl font-inter">
          A selection of premium websites built to drive engagement, conversions, and brand authority.
        </p>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
          >
            {/* Project Image/Iframe */}
            <div className="w-full lg:w-1/2">
              <div className={`aspect-[4/3] ${project.color} rounded-3xl relative overflow-hidden flex items-center justify-center p-4 lg:p-8 shadow-sm group`}>
                <iframe 
                  src={project.link} 
                  title={project.title}
                  className="w-full h-full rounded-2xl border border-white/40 shadow-xl pointer-events-none opacity-90 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105"
                  style={{ transformOrigin: 'top center' }}
                />
                
                {/* Overlay for aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold tracking-wide text-brand-orange uppercase">
                {project.category}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-brand-black tracking-tight">{project.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    <Target size={14} /> Project Type
                  </div>
                  <p className="text-sm text-brand-black font-medium">{project.projectType}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    <CheckCircle2 size={14} /> Services Provided
                  </div>
                  <p className="text-sm text-brand-black font-medium">{project.servicesProvided}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-md text-xs font-semibold text-gray-600 flex items-center gap-1">
                    <Layout size={12} /> {t}
                  </span>
                ))}
                <span className="px-3 py-1 bg-orange-50 border border-orange-100 rounded-md text-xs font-semibold text-brand-orange flex items-center gap-1">
                  <Clock size={12} /> {project.duration}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-brand-black text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors shadow-lg"
                >
                  View Live Website <ExternalLink size={16} />
                </a>
                <button className="flex items-center gap-2 bg-white border border-gray-200 text-brand-black px-6 py-3 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors group">
                  Read Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
