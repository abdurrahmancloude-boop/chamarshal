import React from 'react';
import { Utensils, Sparkles, ArrowRight } from 'lucide-react';
import { SIGNATURE_KARAHI_ITEMS } from '../data/menuData';

export const SignatureKarahi: React.FC = () => {
  return (
    <section 
      id="karahi-favorites" 
      className="bg-[#F6F0E6] py-16 sm:py-20 border-b border-[#E7DDCE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD3C2] text-[#8E2812] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
              Specialty of Butt Karahi
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1F1E1B]">
              Karahi Favorites
            </h2>
            <p className="mt-2.5 text-base text-[#5C564E]">
              Freshly cut meat seared in traditional round iron woks with vine-ripened tomatoes, julienned ginger, and whole green chilies.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 self-start md:self-end px-5 py-2.5 rounded-xl bg-[#FFFDF9] border border-[#D5CABB] text-[#2B613B] font-semibold text-sm hover:bg-[#FAF8F5] hover:border-[#2B613B] transition-colors shadow-2xs"
          >
            <span>Explore Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Featured Signature Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNATURE_KARAHI_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="group flex flex-col bg-[#FFFDF9] rounded-2xl border border-[#E3D9CB] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
            >
              {/* Controlled Food Photo */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#ECE3D5]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#FAF8F5]/95 text-[#8E2812] text-xs font-semibold shadow-xs">
                  {item.tag}
                </span>
              </div>

              {/* Item Info */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-xl font-bold text-[#1F1E1B]">
                    {item.name}
                  </h3>
                </div>

                <p className="mt-2 text-sm text-[#5C564E] leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-[#F0E8DC] flex items-center justify-between text-xs text-[#7A7367]">
                  <span className="font-medium bg-[#F3ECE2] px-2.5 py-1 rounded-md text-[#3E3A33]">
                    {item.portion}
                  </span>
                  <span className="font-medium text-[#2B613B]">
                    Live Preparation
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout & CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#6A6357] mb-4">
            Order by weight (Half KG / Full KG) cooked fresh to your preferred spice level.
          </p>
          <a
            href="#menu"
            id="explore-menu-cta-btn"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#2B613B] text-white font-semibold text-base hover:bg-[#224E2F] active:scale-98 transition-all shadow-xs"
          >
            <Utensils className="w-4 h-4 text-[#FBBF24]" />
            <span>Explore Full Menu</span>
          </a>
        </div>

      </div>
    </section>
  );
};
