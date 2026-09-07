import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/favicon.svg" alt="ورقة القيقب الكندية" className="h-10 w-auto" />
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#D80621]">دليل الهجرة إلى كندا للمصريين 2026</h1>
            <p className="text-base text-gray-500 hidden sm:block">مرجعك الشامل والمحدث للتقديم والانتقال</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-base font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-600 hover:text-[#D80621] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#assessment" className="bg-[#D80621] text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-700 transition-colors">
            ابدأ تقييمك الآن
          </a>
        </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="flex items-center gap-3 py-3 text-slate-700 hover:text-red-600 hover:bg-slate-50 px-4 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon size={18} className="text-slate-400" />
                  <span className="font-medium">{link.name}</span>
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
