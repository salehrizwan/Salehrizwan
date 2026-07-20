import { motion } from 'motion/react';

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Next.js", icon: "▲" },
  { name: "Vite", icon: "⚡" },
  { name: "Node.js", icon: "🟢" },
  { name: "Firebase", icon: "🔥" },
  { name: "MongoDB", icon: "🍃" },
  { name: "GitHub", icon: "🐙" },
  { name: "Vercel", icon: "🚀" },
  { name: "Figma", icon: "🎨" },
  { name: "Google Analytics", icon: "📊" },
  { name: "Search Console", icon: "🔍" }
];

export function Technologies() {
  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h3 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-4">The Tech Stack</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6 tracking-tight">
          Modern Technologies for Modern Brands
        </h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap group-hover:pause">
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div 
              key={index} 
              className="mx-4 flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 hover:border-brand-orange/30 hover:shadow-lg hover:bg-white transition-all cursor-default"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="font-semibold text-brand-black">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Required CSS for the marquee animation is added globally or inline */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .group:hover .pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
