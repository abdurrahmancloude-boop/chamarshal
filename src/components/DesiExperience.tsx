import React from 'react';
import { Flame, Utensils, Heart, Clock } from 'lucide-react';

export const DesiExperience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-[#F7F2E8] border-b border-[#E7DECE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Card */}
        <div className="bg-[#FFFDF9] rounded-3xl border border-[#E3D9CB] p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-wider text-[#2B613B] uppercase">
              The Tradition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1F1E1B] mt-2">
              Desi Food, Served Fresh
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5C564E] leading-relaxed">
              Enjoy traditional Pakistani flavors with karahi, BBQ, naan, rice and other desi favorites.
            </p>
          </div>

          {/* Simple, Authentic Pillars (Without any fake statistics or invented awards) */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D5] flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] text-[#2B613B] flex items-center justify-center mb-3">
                <Flame className="w-5 h-5 text-[#C2410C]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1F1E1B]">
                Cooked on High Flame
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#5C564E] leading-relaxed">
                Traditional cast iron wok cooking that seals in moisture and creates the signature thick masala.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D5] flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] text-[#2B613B] flex items-center justify-center mb-3">
                <Utensils className="w-5 h-5 text-[#2B613B]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1F1E1B]">
                Live Preparation
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#5C564E] leading-relaxed">
                Every karahi and handi is cooked fresh right after you order, tailored to your spice preference.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D5] flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] text-[#2B613B] flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-[#D97706]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1F1E1B]">
                Hot Clay Tandoor
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#5C564E] leading-relaxed">
                Sada, Roghni, and Garlic naans slapped fresh onto earthen clay walls and served steaming hot.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D5] flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] text-[#2B613B] flex items-center justify-center mb-3">
                <Heart className="w-5 h-5 text-[#8E2812]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1F1E1B]">
                Desi Dining
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#5C564E] leading-relaxed">
                Located right on Main Commercial Market Road with seating for families, friends, and late-night food lovers.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
