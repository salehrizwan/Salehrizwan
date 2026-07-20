import { motion } from 'motion/react';
import { Upload, Calendar, Mail, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';

export function ContactForm() {
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    businessName: "",
    country: "",
    websiteUrl: "",
    type: "Select an option...",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
    details: "",
    preferredContact: "WhatsApp"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Saleh! I am interested in a new website project.%0A%0A*Business:* ${formData.businessName}%0A*Country:* ${formData.country}%0A*Website:* ${formData.websiteUrl}%0A*Type:* ${formData.type}%0A*Budget:* ${formData.budget}%0A*Timeline:* ${formData.timeline}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Preferred Contact:* ${formData.preferredContact}%0A*Details:* ${formData.details}`;
    
    if (formData.preferredContact === 'Email') {
      const url = `mailto:salehrizwan.dev@gmail.com?subject=New Website Project Inquiry&body=${text}`;
      window.open(url, '_blank');
    } else {
      const url = `https://wa.me/923706156584?text=${text}`;
      window.open(url, '_blank');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-4">Start Your Project</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 tracking-tight">Let's Build Something Amazing</h2>
        <p className="text-xl text-gray-500 font-inter max-w-2xl mx-auto">
          Fill out the form below to send your requirements, or book a free consultation call.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40"
      >
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Business / Company Name</label>
            <input 
              type="text" 
              required
              value={formData.businessName}
              onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              placeholder="Your Business Name" 
              className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" 
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
            <input 
              type="text" 
              required
              value={formData.country}
              onChange={(e) => setFormData({...formData, country: e.target.value})}
              placeholder="e.g. USA, UK, UAE" 
              className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" 
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Current Website URL (Optional)</label>
            <input 
              type="url" 
              value={formData.websiteUrl}
              onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
              placeholder="https://" 
              className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" 
            />
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type</label>
            <select 
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all appearance-none"
            >
              <option>Select an option...</option>
              <option>E-commerce / Store</option>
              <option>Service Business / Digital Studio</option>
              <option>SaaS / Web App</option>
              <option>Clinic / Healthcare</option>
              <option>Restaurant / Food</option>
              <option>Portfolio / Personal Brand</option>
              <option>Website Redesign</option>
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp / Phone Number</label>
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
              placeholder="e.g. $1,000 - $3,000" 
              className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" 
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Desired Timeline</label>
            <input 
              type="text" 
              required
              value={formData.timeline}
              onChange={(e) => setFormData({...formData, timeline: e.target.value})}
              placeholder="e.g. 3 Weeks" 
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Contact Method</label>
            <select 
              value={formData.preferredContact}
              onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
              className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all appearance-none"
            >
              <option>WhatsApp</option>
              <option>Email</option>
            </select>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Assets (Optional)</label>
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

          <div className="col-span-1 md:col-span-2 pt-4 flex flex-col sm:flex-row gap-4">
            <button type="submit" className="flex-1 bg-brand-orange text-white font-bold text-lg py-5 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Submit Request
            </button>
          </div>
        </form>

        <div className="mt-12 pt-12 border-t border-gray-100 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-brand-black mb-2 text-lg">Prefer to discuss directly?</h4>
            <p className="text-gray-500 text-sm">Text me to book a free 30-minute discovery call to discuss your project.</p>
          </div>
          <a 
            href={`https://wa.me/923706156584?text=${encodeURIComponent("I want to book a call with you when you are available. I need to create a website and other things. Please tell me how to book the call.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors w-full md:w-auto justify-center whitespace-nowrap shadow-lg"
          >
            <MessageCircle size={18} />
            Text Me to Book a Call
          </a>
        </div>
      </motion.div>
    </section>
  );
}
