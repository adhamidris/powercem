import React from 'react';
import Link from 'next/link';
import { Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#11141F] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Column */}
          <div>
            <h3 className="text-xl font-medium mb-6 relative inline-block">
              Company
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-power-blue/50"></span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li><Link href="#" className="hover:text-power-blue transition-colors">About us</Link></li>
              <li><Link href="#" className="hover:text-power-blue transition-colors">Projects</Link></li>
              <li><Link href="#" className="hover:text-power-blue transition-colors">News and Blogs</Link></li>
              <li><Link href="#" className="hover:text-power-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Products Column */}
          <div>
            <h3 className="text-xl font-medium mb-6 relative inline-block">
              Our products
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-power-blue/50"></span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li><Link href="#" className="hover:text-power-blue transition-colors">RoadCem</Link></li>
              <li><Link href="#" className="hover:text-power-blue transition-colors">ImmoCem</Link></li>
              <li><Link href="#" className="hover:text-power-blue transition-colors">ConcreCem</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-medium mb-6 relative inline-block">
              Contact
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-power-blue/50"></span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>10w Sama towers., Ring road, Cairo, Egypt.</li>
              <li>
                 <a href="mailto:info@powercem.me" className="hover:text-power-blue transition-colors">
                   info@powercem.me
                 </a>
              </li>
              <li>
                 <a href="tel:01034819666" className="hover:text-power-blue transition-colors">
                   01034819666
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
              Follow us
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-power-blue/50"></span>
            </h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-power-blue transition-colors bg-white/10 p-2 rounded hover:bg-white/20">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-power-blue transition-colors bg-white/10 p-2 rounded hover:bg-white/20">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

           {/* Logo - Centered relative to the page or flexed to the right/center? 
               Screenshot shows it somewhat centered. 
               We'll center it in the flex container on mobile, and maybe center or align right on desktop?
               Actually, in the screenshot, "Follow us" is on the left, and the logo is roughly in the middle. 
               Let's try to center the logo.
           */}
          <div className="flex items-center gap-3">
              {/* Globe Icon Construction */}
              <div className="relative w-10 h-10 border-2 border-white rounded-full flex items-center justify-center overflow-hidden">
                 <div className="absolute w-12 h-[1px] bg-white rotate-45 top-4"></div>
                 <div className="absolute w-12 h-[1px] bg-white -rotate-45 top-4"></div>
                 <div className="absolute w-12 h-[1px] bg-white rotate-0 top-[18px]"></div>
                 <div className="absolute w-12 h-[1px] bg-white rotate-90 left-[18px]"></div>
              </div>
              <div className="flex flex-col">
                  <span className="font-bold text-xl leading-none">PowerCem</span>
                  <span className="text-sm font-light leading-none">Technologies</span>
              </div>
          </div>
          
          {/* Empty div for flex spacing if needed to push logo to center, but standard justify-between is fine for now. 
              The screenshot shows Follow Us on left, Logo in center-ish, nothing on right. 
              We can use grid or absolute positioning for perfect center, but flex is safer.
          */}
           <div className="hidden md:block w-[100px]"></div> 
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          © 2025 PowerCem Technologies
        </div>
      </div>
    </footer>
  );
};

export default Footer;
