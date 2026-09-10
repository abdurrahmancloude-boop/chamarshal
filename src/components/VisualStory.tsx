import React from 'react';
import { Sparkles } from 'lucide-react';
import { VISUAL_STORY_ITEMS } from '../data/menuData';

export const VisualStory: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-[#FAF8F5] border-b border-[#EAE3D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3ED] text-[#2B613B] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Kitchen & Craft
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1F1E1B]">
            From Flame to Table
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C564E]">
            A glimpse into the preparation of karahi, tandoor bread, and charcoal BBQ.
          </p>
        </div>

        {/* Compact 4-Card Story Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VISUAL_STORY_ITEMS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#FFFDF9] rounded-2xl border border-[#E4DBCF] overflow-hidden shadow-xs hover:border-[#2B613B]/40 transition-colors"
            >
              {/* Compact Food Visual */}
              <div className="relative aspect-16/11 w-full overflow-hidden bg-[#ECE4D6]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Story Description */}
              <div className="p-4">
                <h3 className="font-serif text-base font-bold text-[#1F1E1B]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-[#5C564E] leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
