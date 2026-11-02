import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Plus, Check, Eye, Coffee, Cake, Utensils, GlassWater } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem, MenuCategory, DietaryTag } from '../types';
import { MenuModal } from './MenuModal';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: Set<string>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  cartItemIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectingItem, setInspectingItem] = useState<MenuItem | null>(null);

  const categories: { id: MenuCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Curations', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'coffee', label: 'Artisanal Brews', icon: <Coffee className="w-3.5 h-3.5" /> },
    { id: 'patisserie', label: 'French-Indian Patisserie', icon: <Cake className="w-3.5 h-3.5" /> },
    { id: 'mains', label: 'Bistro Mains', icon: <Utensils className="w-3.5 h-3.5" /> },
    { id: 'elixirs', label: 'Sunset Elixirs', icon: <GlassWater className="w-3.5 h-3.5" /> },
  ];

  const dietaryFilters = [
    { id: 'all', label: 'All Dietary' },
    { id: 'Chef Signature', label: 'Chef Signature' },
    { id: 'Vegetarian', label: 'Vegetarian' },
    { id: 'Vegan', label: 'Vegan' },
    { id: 'Gluten-Free', label: 'Gluten-Free' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Dietary match
      if (selectedDietary !== 'all') {
        if (!item.dietary.includes(selectedDietary as DietaryTag)) {
          return false;
        }
      }
      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inName = item.name.toLowerCase().includes(query);
        const inDesc = item.description.toLowerCase().includes(query);
        const inNotes = item.tastingNotes.some((n) => n.toLowerCase().includes(query));
        const inIngredients = item.ingredients.some((ing) => ing.toLowerCase().includes(query));
        if (!inName && !inDesc && !inNotes && !inIngredients) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedDietary, searchQuery]);

  return (
    <section id="menu" className="py-28 bg-[#F8F3EB] text-[#241B18] border-t border-[#A58B78]/20 bg-grain">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C77955] font-semibold mb-3">
              <span>Gastronomic Portfolio</span>
              <span className="text-[#A58B78]">/</span>
              <span>Crafted in Alwar</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#241B18] leading-[1.1] text-balance">
              Curated <span className="italic font-normal text-[#C77955]">Culinary</span> & Coffee Collection.
            </h2>
            <p className="mt-4 text-base text-[#241B18]/70 leading-relaxed font-light">
              Each recipe is an ode to terroir—combining native botanical spices with precision French gastronomy and single-origin coffee varietals.
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A58B78]" />
            <input
              type="text"
              placeholder="Search flavours, truffles, saffron..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#A58B78]/30 text-xs text-[#241B18] placeholder:text-[#A58B78] focus:outline-none focus:border-[#C77955] transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#241B18] text-[#F8F3EB] shadow-md'
                  : 'bg-white border border-[#A58B78]/20 text-[#241B18]/80 hover:bg-[#241B18]/5 hover:text-[#241B18]'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Secondary Dietary Filter Bar */}
        <div className="flex items-center gap-4 text-xs text-[#241B18]/70 mb-12 flex-wrap">
          <span className="font-medium text-[#241B18]">Filter by:</span>
          {dietaryFilters.map((df) => (
            <button
              key={df.id}
              onClick={() => setSelectedDietary(df.id)}
              className={`hover:text-[#C77955] transition-colors relative py-0.5 ${
                selectedDietary === df.id
                  ? 'text-[#C77955] font-semibold underline underline-offset-4'
                  : 'text-[#241B18]/60'
              }`}
            >
              {df.label}
            </button>
          ))}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#C77955] hover:underline text-xs ml-auto"
            >
              Clear search "{searchQuery}"
            </button>
          )}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white/50 border border-[#A58B78]/20 p-8">
            <p className="font-serif text-2xl text-[#241B18]/60 italic">
              No creations found matching your selection.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDietary('all');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2.5 bg-[#241B18] text-[#F8F3EB] text-xs uppercase tracking-wider"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              const inCart = cartItemIds.has(item.id);
              return (
                <div
                  key={item.id}
                  className="group bg-white border border-[#A58B78]/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Card Image Slot */}
                  <div className="relative h-60 w-full overflow-hidden bg-[#241B18]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    {/* Category Label */}
                    <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] bg-[#241B18]/80 text-[#D5B78B] px-2.5 py-1 backdrop-blur-xs">
                      {item.category}
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-3 right-3 font-serif text-xl text-white font-medium bg-[#241B18]/70 px-3 py-1 backdrop-blur-xs tabular-nums">
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Dietary text separators */}
                      <div className="flex items-center gap-2 text-[11px] text-[#788267] mb-2 font-medium">
                        {item.dietary.map((d, dIdx) => (
                          <React.Fragment key={d}>
                            {dIdx > 0 && <span>·</span>}
                            <span>{d}</span>
                          </React.Fragment>
                        ))}
                      </div>

                      <h3 className="font-serif text-2xl font-normal text-[#241B18] group-hover:text-[#C77955] transition-colors">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-xs font-serif italic text-[#A58B78]">
                        {item.tagline}
                      </p>

                      <p className="mt-3 text-xs text-[#241B18]/75 leading-relaxed line-clamp-2 font-light">
                        {item.description}
                      </p>

                      {/* Tasting Highlights */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.tastingNotes.slice(0, 3).map((note, nIdx) => (
                          <span
                            key={nIdx}
                            className="text-[10px] text-[#241B18]/80 bg-[#F8F3EB] border border-[#A58B78]/25 px-2 py-0.5"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions Strip */}
                    <div className="mt-6 pt-4 border-t border-[#A58B78]/20 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setInspectingItem(item)}
                        className="text-xs uppercase tracking-wider text-[#241B18]/80 hover:text-[#C77955] font-medium flex items-center gap-1.5 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Tasting Notes</span>
                      </button>

                      <button
                        onClick={() => onAddToCart(item)}
                        className={`p-2.5 rounded-none flex items-center justify-center transition-all ${
                          inCart
                            ? 'bg-[#788267] text-white shadow-xs'
                            : 'bg-[#241B18] text-[#F8F3EB] hover:bg-[#C77955]'
                        }`}
                        title={inCart ? 'Item in tasting order' : 'Add to tasting order'}
                        aria-label={`Add ${item.name} to order`}
                      >
                        {inCart ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Inspect Item Detail Modal */}
      {inspectingItem && (
        <MenuModal
          item={inspectingItem}
          onClose={() => setInspectingItem(null)}
          onAddToCart={(item) => onAddToCart(item)}
          isInCart={cartItemIds.has(inspectingItem.id)}
        />
      )}
    </section>
  );
};
