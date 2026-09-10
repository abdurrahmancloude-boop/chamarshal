import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Karahi', href: '#karahi-favorites' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled 
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#EAE3D5]' 
          : 'bg-[#FAF8F5] border-b border-[#F0EAE0]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#home" className="focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2B613B] rounded-lg">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#4A453E] hover:text-[#1F1E1B] hover:bg-[#F3ECE2] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2B613B]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={RESTAURANT_INFO.phoneTel}
              id="navbar-call-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2B613B] text-white font-medium text-sm hover:bg-[#224E2F] active:scale-98 transition-all shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2B613B]"
            >
              <Phone className="w-4 h-4 text-[#FBBF24]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Actions: Phone Quick Tap & Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={RESTAURANT_INFO.phoneTel}
              aria-label="Call Butt Karahi"
              className="p-2.5 rounded-xl bg-[#2B613B] text-white hover:bg-[#224E2F] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FBBF24]" />
            </a>
            
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#3D3A34] hover:bg-[#EFE8DD] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2B613B]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#EAE3D5] px-4 pt-3 pb-6 shadow-md animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-[#3D3A34] hover:bg-[#F3ECE2] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#EAE3D5] flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-[#6B645A] px-1">
              <MapPin className="w-3.5 h-3.5 text-[#2B613B] shrink-0" />
              <span>Commercial Market, Satellite Town, Rawalpindi</span>
            </div>
            <a
              href={RESTAURANT_INFO.phoneTel}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#2B613B] text-white font-medium text-base text-center shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#FBBF24]" />
              <span>Call Now (0336 5038880)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
