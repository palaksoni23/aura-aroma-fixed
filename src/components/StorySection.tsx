import React, { useState } from 'react';
import { Sparkles, Clock, Leaf, Flame, Compass } from 'lucide-react';
import { SENSORY_PHILOSOPHY } from '../data/restaurantData';

export const StorySection: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState(0);

  const sensoryProfiles = [
    {
      name: 'Terroir & Altitude Roasts',
      sub: 'Chikmagalur & Yirgacheffe Reserves',
      notes: ['Bergamot Blossom', 'White Peach', 'Wild Honeycomb', 'Toasted Hazelnut'],
      temp: '92°C Extraction',
      craft: 'Light-Medium Nordic Style',
      description: 'Grown under native silver oak canopies at 1,400 meters. Hand-sorted cherries undergo 48 hours of natural aerobic fermentation before roasting in our boutique 5kg cast-iron roaster.'
    },
    {
      name: 'Viennoiserie & Lamination',
      sub: 'Pure French Normandy Butter',
      notes: ['Flaky Caramelized Crust', 'Cultured Lactic Butter', 'Native Cardamom Core', 'Kashmiri Saffron'],
      temp: '220°C Stone Hearth',
      craft: '72-Hour Fermented Dough',
      description: 'Laminated with 84% butterfat Normandy cultured butter. Every cruffin and pain au chocolat achieves 72 whisper-thin layers that crackle delightfully at first touch.'
    },
    {
      name: 'Foraged Botanicals & Spices',
      sub: 'Aravali Flora & Heritage Spices',
      notes: ['Smoked Black Cardamom', 'Wild Mountain Thyme', 'Dehydrated Bitter Orange', 'Rose Petal Mist'],
      temp: 'Cold Distilled Infusions',
      craft: 'Zero-Proof Botanical Elixirs',
      description: 'We collaborate with heritage farmers across Rajasthan to forage fragrant green cardamom, wild rosemary, and sweet dried roses to craft culinary alchemy without artificial syrups.'
    }
  ];

  return (
    <section id="story" className="relative py-28 bg-[#F8F3EB] text-[#241B18] overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C77955] font-semibold mb-3">
            <span>Our Heritage & Origin</span>
            <span className="text-[#A58B78]">/</span>
            <span>Est. Alwar, 2024</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#241B18] leading-[1.15] text-balance">
            Where Royal Heritage Meets <span className="italic font-normal text-[#C77955]">Boutique Culinary</span> Alchemy.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#241B18]/75 leading-relaxed font-light">
            Nestled beneath the ancient sandstone silhouettes of Alwar’s historic Aravali hills, Aura & Aroma was born from a singular passion: creating a sanctuary where slow-brewed specialty coffee, delicate Parisian viennoiserie, and starlit fine dining evoke genuine emotion.
          </p>
        </div>

        {/* 2-Column Split: Architectural Narrative + Live Sensory Spectrum */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual & Philosophy Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="relative group overflow-hidden border border-[#A58B78]/20 bg-[#241B18] text-[#F8F3EB] p-8 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D5B78B]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="text-xs uppercase tracking-[0.25em] text-[#D5B78B] font-medium mb-3">
                The Master Roaster's Note
              </div>
              <blockquote className="font-serif text-xl sm:text-2xl text-[#F8F3EB] font-light italic leading-relaxed">
                "Coffee is not merely fuel. It is the morning’s first prayer, the quiet pause between thoughts, and an edible landscape of soil, rain, and fire."
              </blockquote>
              <div className="mt-6 pt-4 border-t border-[#D5B78B]/20 flex items-center justify-between text-xs text-[#F8F3EB]/70">
                <span className="font-medium text-[#D5B78B]">Chef de Roastery</span>
                <span>Alwar Roaster No. 04</span>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SENSORY_PHILOSOPHY.map((pillar, idx) => (
                <div key={idx} className="p-5 border border-[#A58B78]/20 bg-white/70 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-serif text-3xl font-medium text-[#C77955] block tabular-nums">
                      {pillar.metric}
                    </span>
                    <h3 className="font-serif text-base text-[#241B18] mt-2 font-medium">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-xs text-[#241B18]/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Flavour Spectrum Module */}
          <div className="lg:col-span-7 bg-[#241B18] text-[#F8F3EB] p-8 sm:p-10 border border-[#D5B78B]/30 shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-[#D5B78B]/20 mb-8">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#D5B78B] font-semibold block">
                  Interactive Tasting Bar
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F8F3EB] mt-1">
                  The Sensory Tasting Spectrum
                </h3>
              </div>
              <Compass className="w-6 h-6 text-[#D5B78B]/60" />
            </div>

            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
              {sensoryProfiles.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProfile(idx)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-200 ${
                    activeProfile === idx
                      ? 'bg-[#D5B78B] text-[#241B18] font-semibold shadow-md'
                      : 'bg-white/5 text-[#F8F3EB]/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Active Profile Body */}
            <div className="space-y-6">
              <div>
                <span className="text-xs text-[#D5B78B] font-serif italic text-lg block">
                  {sensoryProfiles[activeProfile].sub}
                </span>
                <p className="mt-3 text-sm text-[#F8F3EB]/85 leading-relaxed font-light">
                  {sensoryProfiles[activeProfile].description}
                </p>
              </div>

              {/* Notes Matrix */}
              <div className="pt-6 border-t border-[#D5B78B]/20">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#A58B78] block mb-3">
                  Tasting Keynotes
                </span>
                <div className="flex flex-wrap gap-2">
                  {sensoryProfiles[activeProfile].notes.map((note, nIdx) => (
                    <span
                      key={nIdx}
                      className="px-3 py-1.5 bg-[#F8F3EB]/10 border border-[#D5B78B]/30 text-xs text-[#D5B78B] font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Craft Specifications */}
              <div className="pt-6 border-t border-[#D5B78B]/20 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#A58B78] block uppercase tracking-wider text-[10px]">Preparation Protocol</span>
                  <span className="text-[#F8F3EB] font-serif text-base mt-0.5 block">{sensoryProfiles[activeProfile].craft}</span>
                </div>
                <div>
                  <span className="text-[#A58B78] block uppercase tracking-wider text-[10px]">Optimal Service</span>
                  <span className="text-[#D5B78B] font-serif text-base mt-0.5 block">{sensoryProfiles[activeProfile].temp}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
