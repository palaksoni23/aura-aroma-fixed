import React, { useState } from 'react';
import { MapPin, Clock, Car, Sparkles, Check, Phone, Mail, ChevronRight, HelpCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationHoursSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.location);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const faqs = [
    {
      q: 'Is advance table reservation required for the Starlit Rooftop?',
      a: 'We strongly recommend reservations at least 24 hours in advance for sunset and twilight dining, as our Aravali terrace seating is limited to 65 guests to preserve spacious intimacy.'
    },
    {
      q: 'What is the dress code at Aura & Aroma?',
      a: 'Our dress code is Smart Casual & Elegant. We kindly request guests refrain from athletic sportswear and beachwear during evening dining.'
    },
    {
      q: 'Do you offer valet parking and chauffeur lounge?',
      a: 'Yes, complimentary premium valet parking is provided at our private courtyard entrance on Civil Lines, complete with a dedicated chauffeur waiting lounge.'
    },
    {
      q: 'Can dietary preferences (Vegan, Jain, Gluten-Free) be accommodated?',
      a: 'Absolutely. Our executive culinary team can curate personalized tasting flights accommodating all dietary requirements with prior notice.'
    }
  ];

  return (
    <section id="visit" className="py-28 bg-[#F8F3EB] text-[#241B18] bg-grain border-t border-[#A58B78]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C77955] font-semibold mb-3">
            <span>The Visiting Experience</span>
            <span className="text-[#A58B78]">/</span>
            <span>Civil Lines, Alwar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#241B18] leading-[1.1] text-balance">
            Hours, Location & <span className="italic font-normal text-[#C77955]">Arrival</span> Concierge.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#241B18]/70 leading-relaxed font-light">
            Conveniently situated in the heritage district of Alwar, Rajasthan, within minutes of the ancient palaces and Aravali lookout pavilions.
          </p>
        </div>

        {/* 2-Column Split: Hours & Details + Interactive Directions/FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Hours & Protocol Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Hours Card */}
            <div className="bg-white border border-[#A58B78]/25 p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C77955] font-semibold mb-4">
                <Clock className="w-4 h-4 text-[#C77955]" />
                <span>Operating Timings</span>
              </div>
              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#A58B78]/15">
                  <span className="text-[#241B18]/70">Espresso Roastery & Morning Brews</span>
                  <span className="font-semibold text-[#241B18]">{RESTAURANT_INFO.hours.weekdays.split('–')[0]} onwards</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#A58B78]/15">
                  <span className="text-[#241B18]/70">Botanical Glasshouse Brunch</span>
                  <span className="font-semibold text-[#241B18]">9:00 AM – 3:30 PM</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#A58B78]/15">
                  <span className="text-[#241B18]/70">Golden Hour High Tea & Viennoiserie</span>
                  <span className="font-semibold text-[#241B18]">{RESTAURANT_INFO.hours.highTea}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#241B18]/70">Starlit Aravali Rooftop Dinner</span>
                  <span className="font-semibold text-[#C77955]">{RESTAURANT_INFO.hours.dinnerRooftop}</span>
                </div>
              </div>
            </div>

            {/* Address & Concierge Card */}
            <div className="bg-white border border-[#A58B78]/25 p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C77955] font-semibold">
                <MapPin className="w-4 h-4 text-[#C77955]" />
                <span>Sanctuary Address</span>
              </div>
              <p className="text-sm text-[#241B18] font-serif leading-relaxed">
                {RESTAURANT_INFO.location}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={handleCopyAddress}
                  className="px-4 py-2 border border-[#A58B78]/30 hover:border-[#241B18] text-xs font-medium flex items-center gap-2 transition-colors bg-[#F8F3EB]"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#788267]" />
                      <span className="text-[#788267]">Address Copied</span>
                    </>
                  ) : (
                    <span>Copy Full Address</span>
                  )}
                </button>
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="px-4 py-2 bg-[#241B18] text-[#F8F3EB] hover:bg-[#C77955] text-xs font-medium flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Concierge</span>
                </a>
              </div>
            </div>

            {/* Valet & Accessibility Amenities */}
            <div className="p-6 bg-[#241B18] text-[#F8F3EB] border border-[#D5B78B]/30 flex items-start gap-4 shadow-md">
              <Car className="w-6 h-6 text-[#D5B78B] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg text-[#F8F3EB]">Valet & Chauffeur Protocol</h4>
                <p className="mt-1 text-xs text-[#F8F3EB]/75 leading-relaxed font-light">
                  Complimentary valet parking at our private portico. EV charging stations and chauffeur amenities available on-premises.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Preview + Curated FAQ (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Aesthetic Visual Map Card */}
            <div className="bg-[#241B18] text-[#F8F3EB] p-8 border border-[#D5B78B]/30 relative overflow-hidden shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#D5B78B] font-semibold">
                  Alwar Heritage Enclave
                </span>
                <span className="text-xs text-[#F8F3EB]/60">27.5530° N, 76.6346° E</span>
              </div>

              {/* Stylized Minimal Vector Map Graphic */}
              <div className="h-44 w-full bg-[#1A1311] border border-[#D5B78B]/20 relative overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-grain-dark opacity-40" />
                {/* Stylized road lines */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-[#D5B78B]/20" />
                <div className="absolute top-0 bottom-0 left-1/3 w-px bg-[#D5B78B]/20" />
                <div className="absolute top-0 bottom-0 right-1/4 w-px bg-[#D5B78B]/20" />
                <div className="absolute top-1/4 left-0 right-0 h-px bg-[#D5B78B]/10 rotate-12" />

                {/* Pulsing Pin */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#C77955]/20 border border-[#D5B78B] flex items-center justify-center shadow-lg">
                    <MapPin className="w-5 h-5 text-[#D5B78B]" />
                  </div>
                  <span className="text-[11px] font-serif text-[#D5B78B] uppercase tracking-widest bg-[#241B18]/90 px-2 py-0.5 border border-[#D5B78B]/30">
                    Aura & Aroma
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-[#F8F3EB]/70">
                <span>Civil Lines Heritage Enclave</span>
                <span className="text-[#D5B78B]">4.2 km from Alwar Junction</span>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-white border border-[#A58B78]/25 p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C77955] font-semibold mb-6">
                <HelpCircle className="w-4 h-4 text-[#C77955]" />
                <span>Patron Questions & Guidance</span>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className="border-b border-[#A58B78]/15 pb-4 last:border-b-0 last:pb-0">
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full text-left flex items-start justify-between gap-4 group"
                      >
                        <span className="font-serif text-base text-[#241B18] group-hover:text-[#C77955] transition-colors">
                          {faq.q}
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 text-[#A58B78] shrink-0 mt-1 transition-transform duration-200 ${
                            isOpen ? 'rotate-90 text-[#C77955]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <p className="mt-3 text-xs text-[#241B18]/75 leading-relaxed font-light pl-1 animate-in fade-in duration-150">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
