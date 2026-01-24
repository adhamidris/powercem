'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MessageCircle, ChevronDown, Globe } from 'lucide-react';

interface NavbarProps {
  dict?: {
    whatWeDo: string;
    products: string;
    projects: string;
    news: string;
    careers: string;
    contact: string;
  };
}

export default function Navbar({ dict }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = dict || {
    whatWeDo: "What We Do",
    products: "Our Products",
    projects: "Projects",
    news: "News",
    careers: "Careers",
    contact: "CONTACT US"
  };

  const currentLocale = pathname.startsWith('/ar') ? 'ar' : pathname.startsWith('/fr') ? 'fr' : 'en';
  const isWhite = isScrolled || isHovered;

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-10 h-20 rounded-full border left-1/2 -translate-x-1/2 ${
        isScrolled
          ? 'top-2 w-[98%] max-w-[1920px]'
          : 'top-6 w-[98%] max-w-[1920px]'
      } ${
        isWhite 
          ? 'bg-white shadow-lg border-gray-100' 
          : 'bg-black/20 backdrop-blur-md border-white/10'
      }`}
    >
      <div className="w-full flex items-center justify-between h-full">
        {/* Logo */}
        <Link href={currentLocale === 'en' ? '/' : `/${currentLocale}`} className="flex items-center gap-2">
           <div className={`text-2xl font-bold tracking-tighter transition-colors ${isWhite ? 'text-power-blue' : 'text-white'}`}>
             POWER<span className={isWhite ? 'text-power-dark' : 'text-white'}>CEM</span>
           </div>
        </Link>

        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center gap-8 font-medium text-[15px] transition-colors ${isWhite ? 'text-power-dark' : 'text-white'}`}>
          <Link href="#" className="hover:opacity-80 transition-opacity">{t.whatWeDo}</Link>
          <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity group relative">
             {t.products} <ChevronDown className="w-4 h-4" />
          </div>
          <Link href="#" className="hover:opacity-80 transition-opacity">{t.projects}</Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">{t.news}</Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">{t.careers}</Link>
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Switcher */}
          <div className={`flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-1.5 rounded-full border transition-all ${
            isWhite ? 'border-gray-200 bg-gray-50 shadow-none' : 'border-white/20 bg-white shadow-sm'
          }`}>
            <Globe className="w-3.5 h-3.5 text-power-blue" />
            <div className="flex items-center gap-3 text-base">
              <Link 
                href="/" 
                className={`transition-all hover:scale-110 ${
                  currentLocale === 'en' ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-100'
                }`}
                title="English"
              >
                🇺🇸
              </Link>
              <Link 
                href="/fr" 
                className={`transition-all hover:scale-110 ${
                  currentLocale === 'fr' ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-100'
                }`}
                title="Français"
              >
                🇫🇷
              </Link>
              <Link 
                href="/ar" 
                className={`transition-all hover:scale-110 ${
                  currentLocale === 'ar' ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-100'
                }`}
                title="العربية"
              >
                🇸🇦
              </Link>
            </div>
          </div>

          <Link 
            href="#" 
            className={`hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
              isWhite 
                ? 'bg-power-blue text-white hover:bg-opacity-90' 
                : 'bg-white text-power-black hover:bg-gray-100'
            }`}
          >
            {t.contact}
            <MessageCircle className="w-4 h-4 fill-current" />
          </Link>
          
          <button className={`lg:hidden p-2 ${isWhite ? 'text-power-dark' : 'text-white'}`}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}