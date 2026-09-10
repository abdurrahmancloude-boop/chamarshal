import React, { useState } from 'react';
import { Camera, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/menuData';

export const GallerySection: React.FC = () => {
  const [activePreview, setActivePreview] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-[#F6F1E7] border-b border-[#E7DECE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#DDD3C3] text-[#2B613B] text-xs font-semibold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5" />
            Photo Gallery
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1F1E1B]">
            Food Moments
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C564E]">
            A closer look at fresh food, tandoori breads, and karahi dishes served at Commercial Market.
          </p>
        </div>

        {/* Clean 6-Item Grid (Smaller than menu as requested) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePreview(item.image)}
              className="group relative rounded-2xl overflow-hidden bg-[#EAE1D3] border border-[#E0D5C5] shadow-xs cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-4/3 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Light Caption Banner (No dark overlay!) */}
              <div className="p-3 bg-[#FFFDF9] border-t border-[#EAE3D5] flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-[#423E37] truncate">
                  {item.caption}
                </span>
                <span className="p-1 rounded-md text-[#2B613B] group-hover:bg-[#EBF3ED] transition-colors shrink-0">
                  <Eye className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Zoom Preview Modal */}
      {activePreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setActivePreview(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-[#FFFDF9] rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-[#EAE1D3]">
              <img
                src={activePreview}
                alt="Enlarged Food Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 flex justify-end">
              <button
                onClick={() => setActivePreview(null)}
                className="px-4 py-1.5 rounded-lg bg-[#2B613B] text-white text-xs font-semibold hover:bg-[#224E2F] transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
