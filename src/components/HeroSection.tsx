import React from 'react';
import { Sparkles, Utensils, ChevronDown, Compass, Coffee, Award, Star } from 'lucide-react';

interface HeroSectionProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReservation,
  onExploreMenu,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#241B18] text-[#F8F3EB] pt-20 pb-16">
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_cafe_luxury.jpg"
          alt="Aura and Aroma Luxury Cafe Roastery Interior"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-105"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#241B18] via-[#241B18]/60 to-[#241B18]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(213,183,139,0.15)_0%,rgba(36,27,24,0.75)_70%)]" />
        <div className="absolute inset-0 bg-grain-dark opacity-30 pointer-events-none" />
      </div>

      {/* Floating Coffee Beans, Botanical Sage Leaves & Star Anise SVGs */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Floating Coffee Bean 1 (Top Left) */}
        <div className="absolute top-[18%] left-[8%] animate-float-gentle opacity-80 filter drop-shadow-2xl">
          <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="21" cy="16" rx="20" ry="14" fill="#3D291F" stroke="#D5B78B" strokeWidth="1" />
            <path d="M12 7C17 14 25 18 30 25" stroke="#C77955" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Floating Coffee Bean 2 (Bottom Right) */}
        <div className="absolute bottom-[22%] right-[10%] animate-float-delayed opacity-75 filter drop-shadow-2xl">
          <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45">
            <ellipse cx="17" cy="13" rx="16" ry="11" fill="#4B3326" stroke="#D5B78B" strokeWidth="0.8" />
            <path d="M10 5C14 11 20 15 24 21" stroke="#A58B78" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Floating Botanical Sage Leaf (Top Right) */}
        <div className="absolute top-[22%] right-[14%] animate-float-delayed opacity-70 filter drop-shadow-lg">
          <svg width="50" height="70" viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-12">
            <path d="M25 5C38 20 45 42 25 65C5 42 12 20 25 5Z" fill="#788267" fillOpacity="0.85" stroke="#D5B78B" strokeWidth="1" />
            <path d="M25 10V60" stroke="#F8F3EB" strokeWidth="1.2" strokeOpacity="0.5" />
            <path d="M25 25L35 20M25 35L37 32M25 45L34 44" stroke="#F8F3EB" strokeWidth="0.8" strokeOpacity="0.4" />
            <path d="M25 25L15 20M25 35L13 32M25 45L16 44" stroke="#F8F3EB" strokeWidth="0.8" strokeOpacity="0.4" />
          </svg>
        </div>

        {/* Floating Olive Branch (Bottom Left) */}
        <div className="absolute bottom-[28%] left-[12%] animate-float-gentle opacity-65 filter drop-shadow-lg">
          <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-20">
            <path d="M5 45Q30 35 55 10" stroke="#788267" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="20" cy="30" rx="9" ry="4" transform="rotate(-30 20 30)" fill="#788267" stroke="#D5B78B" strokeWidth="0.8" />
            <ellipse cx="38" cy="20" rx="9" ry="4" transform="rotate(-45 38 20)" fill="#8A9674" stroke="#D5B78B" strokeWidth="0.8" />
            <ellipse cx="50" cy="12" rx="8" ry="3.5" transform="rotate(-15 50 12)" fill="#788267" stroke="#D5B78B" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Floating Star Anise / Spice Motif */}
        <div className="absolute top-[35%] left-[5%] animate-float-delayed opacity-50 hidden md:block">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="#A58B78">
              <path d="M20 5L22 17L33 13L25 22L34 30L22 26L18 36L16 25L5 27L13 19L5 12L17 15Z" />
            </g>
          </svg>
        </div>

        {/* Golden Sparkle 1 */}
        <div className="absolute top-[28%] left-[28%] animate-pulse-subtle">
          <Sparkles className="w-5 h-5 text-[#D5B78B] opacity-80" />
        </div>

        {/* Golden Sparkle 2 */}
        <div className="absolute bottom-[35%] right-[22%] animate-pulse-subtle delay-1000">
          <Sparkles className="w-4 h-4 text-[#D5B78B] opacity-70" />
        </div>
      </div>

      {/* Rotating Circular Typography Badge (Desktop Floating Top-Right) */}
      <div className="absolute top-28 right-8 sm:right-16 z-20 hidden md:flex items-center justify-center pointer-events-auto group">
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Rotating Text Ring */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 160 160" className="w-full h-full">
              <path
                id="textPath"
                d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                fill="none"
              />
              <text className="text-[10.5px] uppercase font-sans tracking-[0.24em] fill-[#D5B78B]">
                <textPath href="#textPath" startOffset="0%">
                  AURA & AROMA · EST. 2024 · ALWAR RAJASTHAN ·
                </textPath>
              </text>
            </svg>
          </div>
          {/* Inner Golden Seal Center */}
          <div className="w-14 h-14 rounded-full bg-[#241B18]/90 border border-[#D5B78B]/60 flex items-center justify-center text-[#D5B78B] shadow-lg group-hover:scale-105 transition-transform">
            <Coffee className="w-6 h-6 text-[#D5B78B]" />
          </div>
        </div>
      </div>

      {/* Hero Central Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Refined Brand Kicker */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.3em] text-[#D5B78B] font-medium border-y border-[#D5B78B]/30 py-1.5 px-4">
          <span>Heritage Haveli & Roastery</span>
          <span className="text-[#D5B78B]/50">·</span>
          <span>Alwar, Rajasthan</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.03em] font-normal leading-[1.08] text-[#F8F3EB] max-w-4xl text-balance">
          TASTE THE <span className="italic font-normal text-[#D5B78B]">ART</span> OF LIVING.
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg md:text-xl font-light text-[#F8F3EB]/85 max-w-2xl leading-relaxed tracking-wide text-balance">
          A little coffee. A little magic. A whole lot of flavour.
        </p>

        <p className="mt-2 text-xs sm:text-sm font-light text-[#A58B78] tracking-widest uppercase">
          Artisanal Roastery · French-Indian Patisserie · Starlit Rooftop
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Reserve CTA */}
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 bg-[#D5B78B] text-[#241B18] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#ebd5b8] active:bg-[#c4a477] transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group"
          >
            <Utensils className="w-4 h-4 text-[#241B18] group-hover:rotate-12 transition-transform" />
            <span>Reserve a Table</span>
          </button>

          {/* Explore Menu CTA */}
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#F8F3EB]/40 text-[#F8F3EB] text-xs font-semibold uppercase tracking-[0.2em] hover:border-[#D5B78B] hover:text-[#D5B78B] hover:bg-[#D5B78B]/10 active:bg-[#D5B78B]/20 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <Compass className="w-4 h-4 text-[#D5B78B] group-hover:rotate-45 transition-transform" />
            <span>Explore Menu</span>
          </button>
        </div>

        {/* Trust & Accolades Strip */}
        <div className="mt-14 pt-8 border-t border-[#D5B78B]/20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-center w-full max-w-3xl">
          <div>
            <div className="font-serif text-2xl text-[#D5B78B]">100%</div>
            <div className="text-[11px] uppercase tracking-wider text-[#F8F3EB]/70 mt-1">Single-Origin Arabica</div>
          </div>
          <div>
            <div className="font-serif text-2xl text-[#D5B78B]">72-Hr</div>
            <div className="text-[11px] uppercase tracking-wider text-[#F8F3EB]/70 mt-1">Viennoiserie Lamination</div>
          </div>
          <div>
            <div className="font-serif text-2xl text-[#D5B78B]">Aravali</div>
            <div className="text-[11px] uppercase tracking-wider text-[#F8F3EB]/70 mt-1">Starlit Rooftop Vista</div>
          </div>
          <div>
            <div className="font-serif text-2xl text-[#D5B78B]">4.9 / 5.0</div>
            <div className="text-[11px] uppercase tracking-wider text-[#F8F3EB]/70 mt-1">Epicurean Acclaim</div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll-Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-80">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#D5B78B]">Scroll To Discover</span>
        <ChevronDown className="w-4 h-4 text-[#D5B78B] animate-bounce" />
      </div>
    </section>
  );
};
