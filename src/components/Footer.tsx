import React, { useState } from 'react';
import { Sparkles, ArrowUp, Code2, Heart, Check, Mail, Phone, MapPin, ExternalLink, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showDeveloperModal, setShowDeveloperModal] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#1A1311] text-[#F8F3EB] pt-20 pb-12 border-t border-[#D5B78B]/20 relative overflow-hidden bg-grain-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Top Newsletter & Brand Statement Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#D5B78B]/20">
            {/* Brand Intro (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-serif text-3xl sm:text-4xl font-normal tracking-[0.18em] text-[#F8F3EB] block">
                AURA & AROMA
              </span>
              <p className="font-serif italic text-base text-[#D5B78B]">
                {RESTAURANT_INFO.tagline}
              </p>
              <p className="text-xs text-[#F8F3EB]/70 leading-relaxed max-w-md font-light">
                A luxury destination for artisanal single-origin coffee roasting, delicate French-Indian patisserie, and starlit rooftop fine dining overlooking the historic Aravali ridges in Alwar, Rajasthan.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs text-[#D5B78B]">
                <button
                  onClick={onOpenReservation}
                  className="hover:underline underline-offset-4 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reserve a Table</span>
                </button>
                <span>·</span>
                <a href="#menu" className="hover:underline underline-offset-4">
                  Browse Menu
                </a>
              </div>
            </div>

            {/* Newsletter Subscription (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D5B78B] font-semibold block">
                The Epicurean Gazette
              </span>
              <p className="text-xs text-[#F8F3EB]/70 max-w-sm">
                Receive private invitations to seasonal tasting menus, harvest coffee cuppings, and rooftop acoustic evenings.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 px-4 py-3 bg-[#241B18] border border-[#D5B78B]/30 text-xs text-[#F8F3EB] placeholder:text-[#F8F3EB]/40 focus:outline-none focus:border-[#D5B78B]"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#D5B78B] text-[#241B18] text-xs font-semibold uppercase tracking-wider hover:bg-[#ebd5b8] transition-colors shrink-0"
                >
                  {subscribed ? 'Joined' : 'Join'}
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-[#D5B78B] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Welcome to the Aura & Aroma circle.</span>
                </p>
              )}
            </div>
          </div>

          {/* Middle Nav & Contacts Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-14 text-xs border-b border-[#D5B78B]/20">
            <div>
              <span className="text-[#D5B78B] uppercase tracking-[0.2em] font-semibold block mb-4">
                The Sanctum
              </span>
              <ul className="space-y-2.5 text-[#F8F3EB]/70">
                <li><a href="#story" className="hover:text-white transition-colors">Our Philosophy</a></li>
                <li><a href="#spaces" className="hover:text-white transition-colors">Atmospheric Spaces</a></li>
                <li><a href="#philosophy" className="hover:text-white transition-colors">Roasting Heritage</a></li>
                <li><a href="#acclaim" className="hover:text-white transition-colors">Critical Acclaim</a></li>
              </ul>
            </div>

            <div>
              <span className="text-[#D5B78B] uppercase tracking-[0.2em] font-semibold block mb-4">
                Gastronomy
              </span>
              <ul className="space-y-2.5 text-[#F8F3EB]/70">
                <li><a href="#menu" className="hover:text-white transition-colors">Single-Origin Roasts</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">French-Indian Pastry</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Woodfired Bistro Mains</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Zero-Proof Elixirs</a></li>
              </ul>
            </div>

            <div>
              <span className="text-[#D5B78B] uppercase tracking-[0.2em] font-semibold block mb-4">
                Atmospheres
              </span>
              <ul className="space-y-2.5 text-[#F8F3EB]/70">
                <li><a href="#spaces" className="hover:text-white transition-colors">Aravali Starlit Rooftop</a></li>
                <li><a href="#spaces" className="hover:text-white transition-colors">Botanical Glasshouse</a></li>
                <li><a href="#spaces" className="hover:text-white transition-colors">Espresso Roastery Bar</a></li>
                <li><a href="#spaces" className="hover:text-white transition-colors">Haveli Wine Cellar</a></li>
              </ul>
            </div>

            <div>
              <span className="text-[#D5B78B] uppercase tracking-[0.2em] font-semibold block mb-4">
                Concierge
              </span>
              <ul className="space-y-2.5 text-[#F8F3EB]/70">
                <li><span>{RESTAURANT_INFO.phone}</span></li>
                <li><span>{RESTAURANT_INFO.email}</span></li>
                <li><span>Civil Lines, Alwar, RJ</span></li>
                <li><span>Valet Parking Available</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar & Palak Soni Portfolio Developer Credits */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#F8F3EB]/60">
            <div>
              <span>© {new Date().getFullYear()} AURA & AROMA. All rights reserved. Fine Dining & Artisanal Roastery.</span>
            </div>

            {/* Developer Tribute Trigger */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowDeveloperModal(true)}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-none border border-[#D5B78B]/40 bg-[#241B18] text-[#D5B78B] hover:bg-[#D5B78B]/10 hover:border-[#D5B78B] transition-colors text-xs group"
                title="View Developer Portfolio Dossier"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Designed & Engineered by <strong className="font-semibold text-white group-hover:text-[#D5B78B]">{RESTAURANT_INFO.developer}</strong></span>
              </button>

              <button
                onClick={scrollToTop}
                className="p-2 border border-white/20 hover:border-[#D5B78B] hover:text-[#D5B78B] transition-colors"
                title="Return to top"
                aria-label="Return to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Developer Portfolio Showcase Modal for Palak Soni */}
      {showDeveloperModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-xl bg-[#241B18] text-[#F8F3EB] border border-[#D5B78B]/40 shadow-2xl p-8 sm:p-10 space-y-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDeveloperModal(false)}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full bg-white/10"
              aria-label="Close developer dossier"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#D5B78B] font-semibold mb-2">
                <span>Web Development Portfolio Piece</span>
                <span className="text-[#A58B78]">/</span>
                <span>Palak Soni</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F3EB] font-normal">
                Crafted by Palak Soni
              </h3>
              <p className="text-xs text-[#D5B78B] font-serif italic mt-1">
                Freelance Senior Creative Developer & UI/UX Designer
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#F8F3EB]/80 leading-relaxed font-light">
              This digital showcase for <strong>AURA & AROMA</strong> was conceived and engineered as an agency-grade web experience for luxury hospitality clients—including rooftop restaurants, fine dining bistros, specialty roasteries, and modern boutique bakeries.
            </p>

            <div className="p-4 bg-white/5 border border-[#D5B78B]/20 space-y-3 text-xs">
              <span className="text-[#D5B78B] uppercase tracking-wider block text-[10px] font-semibold">
                Core Architectural Features
              </span>
              <ul className="space-y-1.5 text-[#F8F3EB]/80">
                <li>• <strong>Cinematic Hero</strong> with floating coffee & botanical SVGs and rotating typographic seal</li>
                <li>• <strong>Web Audio API Soundscape</strong> generating warm ambient cafe vinyl tones client-side</li>
                <li>• <strong>Interactive Culinary Portfolio</strong> with dietary filtering, search & detail modals</li>
                <li>• <strong>Table Concierge Suite</strong> with seating zone selector & instant digital booking passes</li>
                <li>• <strong>Gastronomy Flight Cart</strong> with live order calculations & service mode selection</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#D5B78B]/20 text-xs">
              <span className="text-[#F8F3EB]/60">
                Ready to elevate your hospitality brand?
              </span>
              <a
                href="mailto:palaksoni232006@gmail.com?subject=Inquiry%20regarding%20Website%20Development%20for%20Hospitality%20Business"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#D5B78B] text-[#241B18] font-semibold uppercase tracking-wider hover:bg-[#ebd5b8] transition-colors flex items-center justify-center gap-2"
              >
                <span>Hire Palak Soni</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
