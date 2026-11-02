import React, { useState, useEffect } from 'react';
import { Sparkles, Utensils, Volume2, VolumeX, Menu, X, ShoppingBag } from 'lucide-react';
import { ambientAudio } from '../utils/audioEngine';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  onOpenCart,
  cartCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = ambientAudio.toggle();
    setIsAudioPlaying(active);
  };

  const navLinks = [
    { label: 'The Story', href: '#story' },
    { label: 'Menu & Brews', href: '#menu' },
    { label: 'Atmosphere & Spaces', href: '#spaces' },
    { label: 'Our Craft', href: '#philosophy' },
    { label: 'Acclaim', href: '#acclaim' },
    { label: 'Visit', href: '#visit' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#241B18]/95 text-[#F8F3EB] backdrop-blur-md border-b border-[#D5B78B]/20 py-3.5 shadow-xl'
            : 'bg-gradient-to-b from-[#241B18]/80 via-[#241B18]/40 to-transparent text-[#F8F3EB] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand title, one line wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-decoration-none"
          >
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-[0.2em] text-[#F8F3EB] group-hover:text-[#D5B78B] transition-colors">
              AURA & AROMA
            </span>
          </a>

          {/* Zone 2: Nav links, 1-2 word labels, single-line */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.18em] font-medium text-[#F8F3EB]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#D5B78B] transition-colors whitespace-nowrap shrink-0 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D5B78B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + luxury utilities */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Ambient Soundscape Toggle */}
            <button
              onClick={toggleSound}
              title={isAudioPlaying ? 'Mute ambient soundscape' : 'Play ambient cafe soundscape'}
              className="p-2 rounded-full border border-[#D5B78B]/30 text-[#D5B78B] hover:bg-[#D5B78B]/10 hover:border-[#D5B78B] transition-all flex items-center justify-center text-xs"
              aria-label="Toggle ambient soundscape"
            >
              {isAudioPlaying ? (
                <Volume2 className="w-4 h-4 animate-pulse text-[#D5B78B]" />
              ) : (
                <VolumeX className="w-4 h-4 text-[#F8F3EB]/60 hover:text-[#D5B78B]" />
              )}
            </button>

            {/* Tasting Order Bag */}
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full border border-[#D5B78B]/30 text-[#F8F3EB] hover:text-[#D5B78B] hover:border-[#D5B78B] hover:bg-[#D5B78B]/10 transition-all flex items-center justify-center"
              aria-label="View Tasting Order Bag"
              title="View Tasting Order"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C77955] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center shadow-md animate-scale">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenReservation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#241B18] bg-[#D5B78B] hover:bg-[#f1d7b3] active:bg-[#c4a477] rounded-none transition-all duration-300 shadow-lg whitespace-nowrap shrink-0 group"
            >
              <Utensils className="w-3.5 h-3.5 text-[#241B18] group-hover:rotate-12 transition-transform" />
              <span>Reserve a Table</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F8F3EB] hover:text-[#D5B78B] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#241B18] text-[#F8F3EB] flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D5B78B]">
              Aura & Aroma · Alwar
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-serif text-2xl text-[#F8F3EB] hover:text-[#D5B78B] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-[#D5B78B]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3.5 bg-[#D5B78B] text-[#241B18] text-xs font-semibold uppercase tracking-[0.2em] shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Reserve a Table
            </button>
            <p className="text-center text-xs text-[#F8F3EB]/50">
              Civil Lines, Alwar, Rajasthan · +91 98290 84721
            </p>
          </div>
        </div>
      )}
    </>
  );
};
