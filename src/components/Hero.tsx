import React from 'react';
import { Phone, UtensilsCrossed, MapPin, Flame, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-[#FAF8F5] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#EAE3D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Asymmetrical Editorial Details */}
          <div className="lg:col-span-6 flex flex-col text-left">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#EBF3ED] border border-[#D2E4D5] text-[#2B613B] text-xs sm:text-sm font-semibold mb-5">
              <MapPin className="w-3.5 h-3.5 text-[#2B613B] shrink-0" />
              <span>Commercial Market • Rawalpindi</span>
            </div>

            {/* Large Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1F1E1B] leading-[1.12]">
              Butt Karahi
            </h1>

            {/* Subheading */}
            <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-[#8E2812] tracking-normal">
              Traditional Karahi & Desi Flavors
            </h2>

            {/* Short Simple Text */}
            <p className="mt-4 text-base sm:text-lg text-[#5A554D] leading-relaxed max-w-xl">
              Freshly prepared desi food, sizzling karahi and classic Pakistani favorites.
            </p>

            {/* Quick Feature Chips */}
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#4A453E]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F2ECE1] border border-[#E5DDD0]">
                <Flame className="w-3.5 h-3.5 text-[#C2410C]" />
                Live Iron Wok Cooking
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F2ECE1] border border-[#E5DDD0]">
                <Sparkles className="w-3.5 h-3.5 text-[#2B613B]" />
                Fresh Bone-in & Boneless
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F2ECE1] border border-[#E5DDD0]">
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#6B645A]" />
                Dine-in & Takeaway
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#menu"
                id="hero-view-menu-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#2B613B] text-white font-semibold text-base hover:bg-[#224E2F] active:scale-98 transition-all shadow-xs"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#FBBF24]" />
                <span>View Menu</span>
              </a>

              <a
                href={RESTAURANT_INFO.phoneTel}
                id="hero-call-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FFFDF9] border-2 border-[#D9CEBD] text-[#1F1E1B] font-semibold text-base hover:bg-[#F5EFEB] hover:border-[#B5A893] active:scale-98 transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#2B613B]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Direct Quick Address Callout */}
            <div className="mt-8 pt-6 border-t border-[#EAE3D5] flex items-center gap-3 text-xs sm:text-sm text-[#6E675C]">
              <span className="font-semibold text-[#1F1E1B]">Location:</span>
              <span className="truncate">{RESTAURANT_INFO.shortAddress}</span>
            </div>
          </div>

          {/* Right Column: Realistic High-Quality Sizzling Karahi Food Presentation */}
          <div className="lg:col-span-6 mt-6 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-[#FFFDF9] border border-[#E8DFD1] shadow-xs">
              
              {/* Authentic Food Photo Container - NO dark overlay! */}
              <div className="relative aspect-4/3 sm:aspect-16/11 w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#EFE8DD]">
                <img
                  src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=85"
                  alt="Sizzling Pakistani Chicken Karahi cooked in traditional iron wok with ginger and green chilies at Butt Karahi Commercial Market"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500 ease-out"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Light Appetizing Tag (Bright, no dark overlays) */}
              <div className="mt-3.5 px-2 pb-1 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2B613B] inline-block animate-pulse"></span>
                  <span className="font-semibold text-[#1F1E1B]">Authentic Sizzling Karahi</span>
                </div>
                <span className="text-[#6E675C] bg-[#F4EDE2] px-2.5 py-1 rounded-md text-xs font-medium">
                  Prepared Fresh to Order
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
