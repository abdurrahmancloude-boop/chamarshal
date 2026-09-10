import React from 'react';
import { Phone, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EAE3D5] pt-14 pb-12 text-[#4A453E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#EAE3D5]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col">
            <Logo size="md" />
            <p className="mt-4 text-sm text-[#6A6357] max-w-sm leading-relaxed">
              Serving traditional karahi, charcoal BBQ, clay pot handi, and freshly baked tandoor breads on Main Commercial Market Road, Satellite Town, Rawalpindi.
            </p>
            
            <div className="mt-6 flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2B613B] text-white text-xs font-semibold hover:bg-[#224E2F] transition-colors shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span>0336 5038880</span>
              </a>
              <span className="text-xs text-[#8C8477]">12 PM – 2 AM Daily</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif font-bold text-base text-[#1F1E1B] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-[#2B613B] transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#2B613B] transition-colors">Complete Menu</a>
              </li>
              <li>
                <a href="#karahi-favorites" className="hover:text-[#2B613B] transition-colors">Karahi Favorites</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#2B613B] transition-colors">Desi Food Experience</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#2B613B] transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#2B613B] transition-colors">Contact & Directions</a>
              </li>
            </ul>
          </div>

          {/* Location & Social */}
          <div className="md:col-span-4">
            <h4 className="font-serif font-bold text-base text-[#1F1E1B] mb-4">
              Location & Social
            </h4>
            <div className="space-y-3 text-sm text-[#6A6357]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2B613B] shrink-0 mt-0.5" />
                <span>B-576, Main Commercial Market Road, Satellite Town, Rawalpindi</span>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F1E1B] hover:text-[#E1306C] transition-colors"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-[#8C8477]" />
                </a>
                <span className="text-[#DDD3C3]">•</span>
                <a
                  href={RESTAURANT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F1E1B] hover:text-[#1877F2] transition-colors"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3 text-[#8C8477]" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Sub-Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7D766A]">
          <p>
            © {new Date().getFullYear()} Butt Karahi – Commercial Market, Rawalpindi. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F2ECE1] text-[#3E3A33] hover:bg-[#EAE1D3] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
