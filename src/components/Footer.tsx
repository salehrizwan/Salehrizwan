import { Mail, Phone, MapPin, Globe, Clock, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="text-2xl font-black tracking-tight text-brand-black">
              Saleh<span className="text-brand-orange">Rizwan</span>.
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium websites built for businesses that want to grow online.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin size={16} className="text-brand-orange" />
                <span>Gujarat, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Globe size={16} className="text-brand-orange" />
                <span>Available Worldwide</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Clock size={16} className="text-brand-orange" />
                <span>Response within 24 Hours</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-black mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-500 hover:text-brand-orange text-sm transition-colors">Web Design</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-brand-orange text-sm transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-brand-orange text-sm transition-colors">E-Commerce</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-brand-orange text-sm transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-brand-orange text-sm transition-colors">Website Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-black mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-500 hover:text-brand-orange text-sm transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-500 hover:text-brand-orange text-sm transition-colors">Case Studies</a></li>
              <li><a href="#pricing" className="text-gray-500 hover:text-brand-orange text-sm transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-brand-orange text-sm transition-colors">Contact</a></li>
              <li><a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-orange text-sm transition-colors">Book a Call</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-black mb-6 uppercase tracking-wider text-sm">Get in Touch</h4>
            <div className="space-y-4">
              <a href="mailto:salehrizwan.dev@gmail.com" className="group flex items-center gap-3 text-gray-600 hover:text-brand-orange transition-colors">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm">salehrizwan.dev@gmail.com</span>
              </a>
              <a href="https://wa.me/923706156584" className="group flex items-center gap-3 text-gray-600 hover:text-brand-orange transition-colors">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                  <Phone size={16} />
                </div>
                <span className="text-sm">+92 370 6156584</span>
              </a>
            </div>
            
            <div className="mt-8">
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all">
                  <span className="font-bold text-sm">In</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all">
                  <span className="font-bold text-sm">Tw</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all">
                  <span className="font-bold text-sm">Be</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Saleh Rizwan Digital. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
