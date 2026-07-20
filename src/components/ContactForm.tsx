import { motion } from 'motion/react';
import { Upload } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    type: "Select an option...",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Saleh! I am interested in a new website project.%0A%0A*Type:* ${formData.type}%0A*Budget:* ${formData.budget}%0A*Timeline:* ${formData.timeline}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Details:* ${formData.details}`;
    const url = `https://wa.me/923706156584?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">Let's Build Something Amazing</h2>
        <p className="text-xl text-gray-500 font-inter">
          Fill out the form below to send your requirements directly to my WhatsApp.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40"
      >
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Website Type</label>
            <select 
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all appearance-none"
            >
              <option>Select an option...</option>
              <option>Salon</option>
              <option>Clinic</option>
              <option>Clothing Brand</option>
              <option>Restaurant</option>
              <option>Real Estate</option>
              <option>Portfolio</option>
              <option>Other</option>
            </select>
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="hello@example.com" 
              className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" 
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number</label>
            <input 
              type="tel" 
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="+1 (555) 000-0000" 
              className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" 
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Budget</label>
            <input 
              type="text" 
              required
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              placeholder="e.g., PKR 40k or USD $159" 
              className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" 
            />
            <p className="text-xs text-gray-400 mt-2">
              Packages: Beginner (PKR 25k), Startup (PKR 40k), Business (PKR 60k)
            </p>
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Desired Timeline</label>
            <input 
              type="text" 
              required
              value={formData.timeline}
              onChange={(e) => setFormData({...formData, timeline: e.target.value})}
              placeholder="e.g., Urgent (1 Week) or Standard (1 Month)" 
              className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" 
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
            <textarea 
              rows={4} 
              required
              value={formData.details}
              onChange={(e) => setFormData({...formData, details: e.target.value})}
              placeholder="Tell me about your business and goals..." 
              className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all resize-none"
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Logo or Assets (Optional)</label>
            <div className="w-full border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center cursor-pointer relative">
               <input 
                 type="file" 
                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                 onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
               />
               <Upload size={24} className="text-gray-400 mb-2" />
               <span className="text-sm font-medium text-gray-600">
                 {fileName ? fileName : "Click or drag to upload files"}
               </span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 pt-4">
            <button type="submit" className="w-full bg-brand-orange text-white font-bold text-lg py-5 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
              Submit via WhatsApp
            </button>
          </div>

        </form>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 mb-4">Prefer email?</p>
          <a 
            href="mailto:salehrizwan.dev@gmail.com?subject=New%20Website%20Project%20Inquiry" 
            className="inline-block bg-white border-2 border-gray-200 text-brand-black font-bold text-base px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Email salehrizwan.dev@gmail.com directly
          </a>
        </div>
      </motion.div>
    </section>
  );
}
