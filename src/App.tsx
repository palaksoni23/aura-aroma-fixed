/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { MenuSection } from './components/MenuSection';
import { SpacesSection } from './components/SpacesSection';
import { ReservationSection } from './components/ReservationSection';
import { ReservationModal } from './components/ReservationModal';
import { TastingDrawer } from './components/TastingDrawer';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { Footer } from './components/Footer';
import { MenuItem, CartItem, ReservationDetails } from './types';
import { Check } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [targetSpaceForReservation, setTargetSpaceForReservation] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart helper calculations
  const cartItemIds = useMemo(() => new Set(cartItems.map((ci) => ci.item.id)), [cartItems]);
  const cartCount = useMemo(() => cartItems.reduce((acc, ci) => acc + ci.quantity, 0), [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    showToast(`Added "${item.name}" to Tasting Flight`);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenReservation = (spaceName?: string) => {
    if (spaceName) {
      setTargetSpaceForReservation(spaceName);
    }
    setIsReservationOpen(true);
  };

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F3EB] text-[#241B18] flex flex-col font-sans selection:bg-[#D5B78B]/30 selection:text-[#241B18]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#241B18] text-[#F8F3EB] border border-[#D5B78B]/40 px-5 py-3 shadow-2xl flex items-center gap-3 text-xs uppercase tracking-wider animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-5 h-5 rounded-full bg-[#788267] flex items-center justify-center text-white shrink-0">
            <Check className="w-3 h-3" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Animated Top Navigation Bar */}
      <Navbar
        onOpenReservation={() => handleOpenReservation()}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartCount}
      />

      <main className="flex-1">
        {/* 2. Cinematic Hero Section */}
        <HeroSection
          onOpenReservation={() => handleOpenReservation()}
          onExploreMenu={handleExploreMenu}
        />

        {/* 3. The Story & Roasting Philosophy */}
        <StorySection />

        {/* 4. Curated Culinary & Coffee Menu */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        {/* 5. The 4 Distinct Spaces & Ambience */}
        <SpacesSection
          onSelectSpaceForReservation={(space) => handleOpenReservation(space)}
        />

        {/* 6. In-Page Table Concierge & Reservation */}
        <ReservationSection
          initialSpaceName={targetSpaceForReservation}
          onBookingSuccess={(details) => {
            showToast(`Table confirmed for ${details.guestName}!`);
          }}
        />

        {/* 7. Reviews & Critical Acclaim */}
        <ReviewsSection />

        {/* 8. Visiting Experience, Location, Hours & Valet */}
        <LocationHoursSection />
      </main>

      {/* 9. Ultra-Refined Footer with Palak Soni Portfolio Dossier */}
      <Footer onOpenReservation={() => handleOpenReservation()} />

      {/* Pop-up Reservation Modal (triggered from anywhere in navbar/hero) */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        initialSpaceName={targetSpaceForReservation}
        onBookingSuccess={(details) => {
          showToast(`Table confirmed for ${details.guestName}!`);
          setTimeout(() => setIsReservationOpen(false), 2000);
        }}
      />

      {/* Slide-over Tasting Flight Order Drawer */}
      <TastingDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenReservation={() => {
          setIsCartOpen(false);
          handleOpenReservation();
        }}
      />
    </div>
  );
}
