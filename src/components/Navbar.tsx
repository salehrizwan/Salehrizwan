import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar({ onPlayIntro }: { onPlayIntro?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={onPlayIntro} className="text-2xl font-bold tracking-tight text-brand-black hover:opacity-80 transition-opacity">
          Saleh <span className="text-brand-orange font-normal text-xl ml-1">Rizwan</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#projects" className="hover:text-brand-black transition-colors">Projects</a>
          <a href="#advantages" className="hover:text-brand-black transition-colors">Advantages</a>
          <a href="#process" className="hover:text-brand-black transition-colors">Process</a>
          <a href="#pricing" className="hover:text-brand-black transition-colors">Pricing</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="bg-brand-orange text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors">
            Start Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4"
        >
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">Projects</a>
          <a href="#advantages" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">Advantages</a>
          <a href="#process" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">Process</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">Pricing</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-brand-orange text-white px-5 py-3 rounded-lg text-sm font-semibold text-center mt-2">
            Start Project
          </a>
        </motion.div>
      )}
    </nav>
  );
}
