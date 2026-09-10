import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Flame, 
  Utensils, 
  Fish, 
  CookingPot, 
  Wheat, 
  Coffee, 
  Salad, 
  Phone, 
  Info,
  Check
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { MenuItem } from '../types';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItemModal, setActiveItemModal] = useState<MenuItem | null>(null);

  // Category Icon Resolver
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'karahi': return <Flame className="w-4 h-4 text-[#C2410C]" />;
      case 'bbq': return <Utensils className="w-4 h-4 text-[#8E2812]" />;
      case 'fish': return <Fish className="w-4 h-4 text-[#1E6091]" />;
      case 'handi': return <CookingPot className="w-4 h-4 text-[#A84A1A]" />;
      case 'rice': return <Utensils className="w-4 h-4 text-[#D97706]" />;
      case 'naan': return <Wheat className="w-4 h-4 text-[#B45309]" />;
      case 'sides': return <Salad className="w-4 h-4 text-[#2B613B]" />;
      case 'beverages': return <Coffee className="w-4 h-4 text-[#047857]" />;
      default: return <Utensils className="w-4 h-4 text-[#5C564E]" />;
    }
  };

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#EAE3D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3ED] text-[#2B613B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5" />
            Butt Karahi Menu
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F1E1B]">
            Explore Our Menu
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5C564E]">
            Authentic Pakistani karahi, charcoal BBQ, clay pot handi, fresh tandoor naans, and traditional desi favorites.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Quick Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C8477]" />
            <input
              type="text"
              id="menu-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Mutton, Tikka)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FFFDF9] border border-[#DDD3C3] text-sm text-[#1F1E1B] placeholder-[#8C8477] focus:outline-hidden focus:ring-2 focus:ring-[#2B613B] focus:border-[#2B613B] shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C8477] hover:text-[#1F1E1B] px-1 py-0.5"
              >
                Clear
              </button>
            )}
          </div>

          {/* Pricing Disclaimer Note */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F3ECE2] border border-[#E2D7C7] text-xs text-[#5C564E]">
            <Info className="w-4 h-4 text-[#2B613B] shrink-0" />
            <span>Prices available on request (Karahi & Fish ordered by fresh weight).</span>
          </div>

        </div>

        {/* Category Selector Tabs (Touch-friendly & Desktop Responsive) */}
        <div className="mb-10 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 min-w-max sm:flex-wrap">
            {/* All Category Pill */}
            <button
              onClick={() => setSelectedCategory('all')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-2xs ${
                selectedCategory === 'all'
                  ? 'bg-[#2B613B] text-white shadow-xs'
                  : 'bg-[#FFFDF9] text-[#4A453E] border border-[#DDD4C6] hover:bg-[#F2ECE1]'
              }`}
            >
              <span>All Dishes</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-md ${selectedCategory === 'all' ? 'bg-white/20 text-white' : 'bg-[#EAE2D5] text-[#5C564E]'}`}>
                {MENU_ITEMS.length}
              </span>
            </button>

            {/* Individual Categories */}
            {MENU_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = MENU_ITEMS.filter((i) => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-2xs ${
                    isSelected
                      ? 'bg-[#2B613B] text-white shadow-xs'
                      : 'bg-[#FFFDF9] text-[#4A453E] border border-[#DDD4C6] hover:bg-[#F2ECE1]'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.label}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-md ${isSelected ? 'bg-white/20 text-white' : 'bg-[#EAE2D5] text-[#5C564E]'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#FFFDF9] rounded-2xl border border-[#E3D9CB] p-8">
            <Utensils className="w-10 h-10 text-[#8C8477] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#1F1E1B]">No dishes found</h3>
            <p className="text-sm text-[#5C564E] mt-1">
              Try searching with another keyword or pick a category above.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#2B613B] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Menu Items Grid: Compact Rows/Cards with High-Quality Food Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FFFDF9] rounded-2xl border border-[#E3D9CB] p-3.5 sm:p-4.5 flex gap-3.5 sm:gap-4.5 items-center hover:border-[#2B613B]/50 hover:shadow-md transition-all duration-200"
            >
              {/* Compact Menu Image (Medium/Compact as mandated, unique per item) */}
              <div 
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-[#ECE4D6] shrink-0 cursor-pointer"
                onClick={() => setActiveItemModal(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {item.badge && (
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-[#FAF8F5]/90 text-[10px] font-bold text-[#8E2812] shadow-2xs">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Dish Content */}
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 
                    onClick={() => setActiveItemModal(item)}
                    className="font-serif text-base sm:text-lg font-bold text-[#1F1E1B] group-hover:text-[#2B613B] transition-colors cursor-pointer truncate"
                  >
                    {item.name}
                  </h3>
                </div>

                <p className="mt-1 text-xs sm:text-sm text-[#5C564E] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Portion & Price Status */}
                <div className="mt-2.5 pt-2 border-t border-[#F2ECE1] flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] sm:text-xs text-[#6B645A] bg-[#F4EDE2] px-2 py-0.5 rounded font-medium truncate max-w-[170px]">
                    {item.portionInfo || 'Fresh Serving'}
                  </span>
                  
                  <span className="text-[11px] sm:text-xs font-semibold text-[#2B613B] bg-[#EBF3ED] px-2 py-0.5 rounded border border-[#D5E6D8]">
                    {item.priceNote || 'Price on request'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Call to Action Banner */}
        <div className="mt-12 rounded-2xl bg-[#F4EDE2] border border-[#E2D8C7] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1E1B]">
              Ready to place an order or reserve a table?
            </h4>
            <p className="mt-1 text-sm text-[#5C564E]">
              Call directly for fresh live preparation timings, takeaway pickup, or large family gatherings.
            </p>
          </div>
          <a
            href={RESTAURANT_INFO.phoneTel}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2B613B] text-white font-semibold text-sm hover:bg-[#224E2F] transition-colors shrink-0 shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#FBBF24]" />
            <span>Call 0336 5038880</span>
          </a>
        </div>

      </div>

      {/* Modal for Dish Inspection */}
      {activeItemModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveItemModal(null)}
        >
          <div 
            className="bg-[#FFFDF9] rounded-2xl border border-[#E3D9CB] max-w-lg w-full overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 w-full bg-[#EAE2D5]">
              <img
                src={activeItemModal.image}
                alt={activeItemModal.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveItemModal(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-[#FAF8F5]/90 text-[#1F1E1B] hover:bg-white shadow-xs"
                aria-label="Close details"
              >
                ✕
              </button>
              {activeItemModal.badge && (
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-[#FAF8F5]/95 text-xs font-bold text-[#8E2812] shadow-xs">
                  {activeItemModal.badge}
                </span>
              )}
            </div>

            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold text-[#1F1E1B]">
                {activeItemModal.name}
              </h3>
              <p className="mt-2 text-sm text-[#5C564E] leading-relaxed">
                {activeItemModal.description}
              </p>

              <div className="mt-4 pt-4 border-t border-[#F0E8DC] space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6B645A]">Serving Portion:</span>
                  <span className="font-semibold text-[#1F1E1B]">{activeItemModal.portionInfo}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6B645A]">Pricing Style:</span>
                  <span className="font-semibold text-[#2B613B]">{activeItemModal.priceNote}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2B613B] text-white font-semibold text-sm hover:bg-[#224E2F] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FBBF24]" />
                  <span>Call to Order (0336 5038880)</span>
                </a>
                <button
                  onClick={() => setActiveItemModal(null)}
                  className="py-3 px-5 rounded-xl border border-[#D5CABB] text-sm font-semibold text-[#4A453E] hover:bg-[#F2ECE1]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
