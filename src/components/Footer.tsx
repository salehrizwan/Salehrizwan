export function Footer() {
  return (
    <footer className="bg-gray-50 text-brand-black py-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
        <div className="text-xl font-bold">
          Saleh <span className="text-brand-orange font-normal">Rizwan</span>
        </div>
        
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-brand-orange transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Twitter</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Dribbble</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Instagram</a>
        </div>

        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Saleh Rizwan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
