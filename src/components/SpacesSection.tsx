import React, { useState } from 'react';
import { Sparkles, Users, Moon, Sun, Music, Compass, ArrowRight } from 'lucide-react';
import { SPACES_DATA } from '../data/restaurantData';

interface SpacesSectionProps {
  onSelectSpaceForReservation: (spaceName: string) => void;
}

export const SpacesSection: React.FC<SpacesSectionProps> = ({
  onSelectSpaceForReservation
}) => {
  const [activeSpaceId, setActiveSpaceId] = useState(SPACES_DATA[0].id);

  const activeSpace = SPACES_DATA.find((s) => s.id === activeSpaceId) || SPACES_DATA[0];

  return (
    <section id="spaces" className="py-28 bg-[#241B18] text-[#F8F3EB] relative overflow-hidden bg-grain-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5B78B] font-semibold mb-3">
            <span>Spatial Architecture</span>
            <span className="text-[#A58B78]">/</span>
            <span>4 Distinct Havens</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F8F3EB] leading-[1.1] text-balance">
            Atmospheric <span className="italic font-normal text-[#D5B78B]">Sanctuaries</span> Designed for Immersion.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F3EB]/70 leading-relaxed font-light">
            Whether you desire the whispering twilight winds of our Aravali rooftop or the botanical tranquility of our glasshouse conservatory, each space offers a distinct sensory mood.
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {SPACES_DATA.map((space) => {
            const isSelected = space.id === activeSpaceId;
            return (
              <button
                key={space.id}
                onClick={() => setActiveSpaceId(space.id)}
                className={`p-5 text-left border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#D5B78B] text-[#241B18] border-[#D5B78B] shadow-xl scale-[1.02]'
                    : 'bg-[#241B18]/60 text-[#F8F3EB] border-[#D5B78B]/20 hover:border-[#D5B78B]/50 hover:bg-[#241B18]'
                }`}
              >
                <div>
                  <span className={`text-[10px] uppercase tracking-[0.2em] block mb-1 font-semibold ${
                    isSelected ? 'text-[#241B18]/70' : 'text-[#D5B78B]'
                  }`}>
                    Space 0{SPACES_DATA.indexOf(space) + 1}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug">
                    {space.name}
                  </h3>
                </div>
                <span className={`text-xs mt-3 block font-serif italic ${
                  isSelected ? 'text-[#241B18]/80' : 'text-[#A58B78]'
                }`}>
                  {space.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Space Spotlight Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-[#D5B78B]/30 bg-[#241B18]/90 shadow-2xl p-6 sm:p-10">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] overflow-hidden bg-black/40">
            <img
              src={activeSpace.image}
              alt={activeSpace.name}
              className="w-full h-full object-cover object-center transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241B18] via-transparent to-transparent opacity-75" />

            {/* Floating Live Vibe Badge */}
            <div className="absolute top-4 left-4 bg-[#241B18]/80 backdrop-blur-md border border-[#D5B78B]/40 px-3 py-1.5 text-xs text-[#D5B78B] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider text-[10px] font-semibold">Active Experience</span>
            </div>

            {/* Feature Highlights on Image Bottom */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
              {activeSpace.features.map((feat, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-black/60 backdrop-blur-xs border border-white/20 text-xs text-white"
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>

          {/* Details & Specs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-4 lg:pt-0 lg:pl-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D5B78B] font-semibold block mb-2">
                Curated Environment
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#F8F3EB]">
                {activeSpace.name}
              </h3>
              <p className="text-xs font-serif italic text-[#D5B78B] mt-1">
                {activeSpace.subtitle}
              </p>

              <p className="mt-5 text-sm text-[#F8F3EB]/80 leading-relaxed font-light">
                {activeSpace.description}
              </p>

              {/* Environmental Attributes */}
              <div className="mt-8 space-y-4 border-t border-[#D5B78B]/20 pt-6 text-xs">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[#D5B78B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A58B78] uppercase tracking-wider block text-[10px]">Illumination & Mood</span>
                    <span className="text-[#F8F3EB]">{activeSpace.lighting}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Music className="w-4 h-4 text-[#D5B78B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A58B78] uppercase tracking-wider block text-[10px]">Acoustic & Vibe</span>
                    <span className="text-[#F8F3EB]">{activeSpace.ambience}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-[#D5B78B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A58B78] uppercase tracking-wider block text-[10px]">Capacity & Seating</span>
                    <span className="text-[#F8F3EB]">{activeSpace.capacity}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-4 h-4 text-[#D5B78B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A58B78] uppercase tracking-wider block text-[10px]">Recommended For</span>
                    <span className="text-[#D5B78B]">{activeSpace.bestFor}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Space Reservation Button */}
            <div className="mt-8 pt-6 border-t border-[#D5B78B]/20">
              <button
                onClick={() => onSelectSpaceForReservation(activeSpace.name)}
                className="w-full py-3.5 px-6 bg-[#D5B78B] text-[#241B18] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#ebd5b8] active:bg-[#c4a477] transition-all flex items-center justify-center gap-2 shadow-lg group"
              >
                <span>Reserve a Table at {activeSpace.name}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
