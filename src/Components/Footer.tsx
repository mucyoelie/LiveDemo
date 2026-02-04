import React from 'react';
import { Instagram, Youtube, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1f1f] text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto l:mx-[140px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo and Copyright Section */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-[#0a1f1f] font-bold text-lg">G</span>
                </div>
                <span className="text-white font-semibold text-xl ml-1">live</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <p>© 2025 Go Live Today.</p>
              <p>All rights reserved.</p>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-semibold mb-1">Services</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy / Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-semibold mb-1">Quick links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Free Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;