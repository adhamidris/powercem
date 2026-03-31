import React from 'react';
import Link from 'next/link';
import { Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  dict?: {
    company: { title: string; links: string[] };
    products: { title: string; links: string[] };
    contact: { title: string; address: string; email: string; phone: string };
    follow: string;
    copyright: string;
  };
}

const Footer = ({ dict }: FooterProps) => {
  const t = dict || {
    company: { title: "Company", links: ["About us", "Projects", "News and Blogs", "Contact"] },
    products: { title: "Our products", links: ["RoadCem", "ImmoCem", "ConcreCem"] },
    contact: { title: "Contact", address: "456 Placeholder Avenue, Demo District, Sample City", email: "hello@cemx.example", phone: "+1 (555) 010-2468" },
    follow: "Follow us",
    copyright: "© 2025 CemX Technologies"
  };

  return (
    <footer className="bg-[#11141F] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Column */}
          <div>
            <h3 className="text-xl font-medium mb-6 relative inline-block">
              {t.company.title}
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-cemx-blue/50"></span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              {t.company.links.map((link, i) => (
                <li key={i}><Link href="#" className="hover:text-cemx-blue transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Our Products Column */}
          <div>
            <h3 className="text-xl font-medium mb-6 relative inline-block">
              {t.products.title}
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-cemx-blue/50"></span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              {t.products.links.map((link, i) => (
                 <li key={i}><Link href="#" className="hover:text-cemx-blue transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-medium mb-6 relative inline-block">
              {t.contact.title}
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-cemx-blue/50"></span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>{t.contact.address}</li>
              <li>
                 <a href={`mailto:${t.contact.email}`} className="hover:text-cemx-blue transition-colors">
                   {t.contact.email}
                 </a>
              </li>
              <li>
                 <a href={`tel:${t.contact.phone}`} className="hover:text-cemx-blue transition-colors">
                   {t.contact.phone}
                 </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Section: Follow Us & Logo */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          {/* Follow Us */}
          <div className="flex flex-col items-center md:items-start gap-4">
             <h3 className="text-xl font-medium relative inline-block">
              {t.follow}
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-cemx-blue/50"></span>
            </h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-cemx-blue transition-colors bg-white/10 p-2 rounded hover:bg-white/20">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-cemx-blue transition-colors bg-white/10 p-2 rounded hover:bg-white/20">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
              {/* Globe Icon Construction */}
              <div className="relative w-10 h-10 border-2 border-white rounded-full flex items-center justify-center overflow-hidden">
                 <div className="absolute w-12 h-[1px] bg-white rotate-45 top-4"></div>
                 <div className="absolute w-12 h-[1px] bg-white -rotate-45 top-4"></div>
                 <div className="absolute w-12 h-[1px] bg-white rotate-0 top-[18px]"></div>
                 <div className="absolute w-12 h-[1px] bg-white rotate-90 left-[18px]"></div>
              </div>
              <div className="flex flex-col">
                  <span className="font-bold text-xl leading-none">CemX</span>
                  <span className="text-sm font-light leading-none">Technologies</span>
              </div>
          </div>
          
           <div className="hidden md:block w-[100px]"></div> 
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
