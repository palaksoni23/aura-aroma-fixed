import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { REVIEWS_DATA } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="acclaim" className="py-28 bg-[#241B18] text-[#F8F3EB] relative overflow-hidden bg-grain-dark border-t border-[#D5B78B]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5B78B] font-semibold mb-3">
            <span>Critical Acclaim & Accolades</span>
            <span className="text-[#A58B78]">/</span>
            <span>Guest Chronicles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F8F3EB] leading-[1.1] text-balance">
            Celebrated by <span className="italic font-normal text-[#D5B78B]">Epicures</span> & Travelers.
          </h2>
          <p className="mt-4 text-base text-[#F8F3EB]/70 leading-relaxed font-light">
            Reflections from food journalists, sommeliers, and patrons who have experienced the sensory atmosphere of Aura & Aroma.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#241B18]/80 border border-[#D5B78B]/25 p-8 flex flex-col justify-between shadow-xl relative group hover:border-[#D5B78B]/60 transition-all duration-300"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#D5B78B] mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D5B78B] text-[#D5B78B]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#D5B78B]/20 mb-4" />

                <blockquote className="font-serif text-lg sm:text-xl text-[#F8F3EB]/95 leading-relaxed font-light italic">
                  "{rev.quote}"
                </blockquote>
              </div>

              <div className="mt-8 pt-6 border-t border-[#D5B78B]/20">
                <div className="font-serif text-lg text-[#D5B78B]">{rev.author}</div>
                <div className="text-xs text-[#F8F3EB]/60 uppercase tracking-wider mt-0.5">
                  {rev.source}
                </div>
                <div className="mt-3 text-[11px] text-[#A58B78] flex items-center justify-between">
                  <span>Favorite: <strong className="text-[#F8F3EB]/90 font-medium">{rev.dishLoved}</strong></span>
                  <span>{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press Badges */}
        <div className="mt-16 pt-10 border-t border-[#D5B78B]/20 flex flex-wrap items-center justify-around gap-8 text-[#D5B78B]/60 uppercase text-xs tracking-[0.2em]">
          <span>★ The Epicurean Standard 2025</span>
          <span>★ Rajasthan Gourmet Guide</span>
          <span>★ Artisanal Roasters Guild</span>
          <span>★ Architectural Digest India Feature</span>
        </div>
      </div>
    </section>
  );
};
