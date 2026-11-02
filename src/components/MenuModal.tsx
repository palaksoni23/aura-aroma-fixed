import React from 'react';
import { X, Sparkles, Plus, Check, Heart, Wine } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
  isInCart: boolean;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  item,
  onClose,
  onAddToCart,
  isInCart
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#F8F3EB] text-[#241B18] shadow-2xl overflow-hidden border border-[#D5B78B]/40 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#241B18]/60 text-white hover:bg-[#241B18] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0 bg-[#241B18]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241B18] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-white">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D5B78B] font-semibold block mb-1">
                {item.category.toUpperCase()} SELECTION
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F3EB] font-normal">
                {item.name}
              </h3>
            </div>
            <span className="font-serif text-2xl text-[#D5B78B] tabular-nums font-medium">
              ₹{item.price}
            </span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <span className="text-xs font-serif italic text-[#C77955] text-base block">
              {item.tagline}
            </span>
            <p className="mt-2 text-sm sm:text-base text-[#241B18]/80 leading-relaxed font-light">
              {item.description}
            </p>
          </div>

          {/* Tasting Notes */}
          <div className="pt-4 border-t border-[#A58B78]/20">
            <span className="text-xs uppercase tracking-[0.2em] text-[#241B18]/60 block mb-2 font-medium">
              Palate Tasting Notes
            </span>
            <div className="flex flex-wrap gap-2">
              {item.tastingNotes.map((note, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#241B18]/5 border border-[#A58B78]/30 text-xs text-[#241B18] font-medium"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Ingredients Breakdown */}
          <div className="pt-4 border-t border-[#A58B78]/20">
            <span className="text-xs uppercase tracking-[0.2em] text-[#241B18]/60 block mb-2 font-medium">
              Artisanal Ingredients
            </span>
            <div className="text-xs text-[#241B18]/80 leading-relaxed space-y-1">
              {item.ingredients.join(' · ')}
            </div>
          </div>

          {/* Sommelier Pairing Recommendation */}
          {item.pairingRecommendation && (
            <div className="p-4 bg-[#241B18] text-[#F8F3EB] border border-[#D5B78B]/30 flex items-start gap-3">
              <Wine className="w-5 h-5 text-[#D5B78B] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D5B78B] font-semibold block">
                  Chef & Sommelier Pairing
                </span>
                <p className="text-xs text-[#F8F3EB]/90 mt-1 italic font-serif text-sm">
                  "{item.pairingRecommendation}"
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[#A58B78]/20 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#241B18]/70">
              {item.dietary.map((tag) => (
                <span key={tag} className="border border-[#788267]/40 px-2 py-0.5 text-[#788267]">
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                onAddToCart(item);
              }}
              className={`px-6 py-3 text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-2 transition-all ${
                isInCart
                  ? 'bg-[#788267] text-white'
                  : 'bg-[#241B18] text-[#F8F3EB] hover:bg-[#C77955]'
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Tasting</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Tasting (₹{item.price})</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
