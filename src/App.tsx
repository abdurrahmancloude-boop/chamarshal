import React from 'react';
import { Phone, Utensils } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureKarahi } from './components/SignatureKarahi';
import { MenuSection } from './components/MenuSection';
import { DesiExperience } from './components/DesiExperience';
import { VisualStory } from './components/VisualStory';
import { GallerySection } from './components/GallerySection';
import { SocialSection } from './components/SocialSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RESTAURANT_INFO } from './data/restaurantInfo';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2A26] flex flex-col antialiased selection:bg-[#2B613B]/15 selection:text-[#2B613B]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Unique Asymmetrical Hero Section */}
        <Hero />

        {/* 2. Signature Dishes: Karahi Favorites */}
        <SignatureKarahi />

        {/* 3. Comprehensive Menu with Individual Photos & Category Filter */}
        <MenuSection />

        {/* 4. Desi Food Experience (Factual, no fake stats) */}
        <DesiExperience />

        {/* 5. Visual Storytelling Section */}
        <VisualStory />

        {/* 6. Compact Photo Gallery */}
        <GallerySection />

        {/* 7. Clickable Social Media Links */}
        <SocialSection />

        {/* 8. Contact, Directions & Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Bar for Mobile Viewports (Fixed Bottom) */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#E0D6C6] rounded-2xl p-2 shadow-lg flex items-center gap-2">
        <a
          href="#menu"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#F2ECE1] text-[#1F1E1B] text-xs font-semibold hover:bg-[#EAE0D2] transition-colors"
        >
          <Utensils className="w-3.5 h-3.5 text-[#2B613B]" />
          <span>View Menu</span>
        </a>
        <a
          href={RESTAURANT_INFO.phoneTel}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#2B613B] text-white text-xs font-semibold hover:bg-[#224E2F] transition-colors shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#FBBF24]" />
          <span>Call 0336 5038880</span>
        </a>
      </div>
    </div>
  );
}
