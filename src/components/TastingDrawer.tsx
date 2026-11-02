import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { CartItem } from '../types';
import confetti from 'canvas-confetti';

interface TastingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  onOpenReservation: () => void;
}

export const TastingDrawer: React.FC<TastingDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenReservation
}) => {
  const [diningMode, setDiningMode] = useState<'table' | 'takeaway'>('table');
  const [guestName, setGuestName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, ci) => acc + ci.item.price * ci.quantity, 0);
  const gst = Math.round(subtotal * 0.05); // 5% GST in India
  const serviceCharge = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gst + serviceCharge;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `AA-ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(id);
    setOrderConfirmed(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D5B78B', '#C77955']
      });
    } catch {
      // ignore
    }
  };

  const handleDone = () => {
    onClearCart();
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-[#F8F3EB] text-[#241B18] h-full shadow-2xl flex flex-col justify-between border-l border-[#D5B78B]/40 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 bg-[#241B18] text-[#F8F3EB] flex items-center justify-between border-b border-[#D5B78B]/30 shrink-0">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#D5B78B]" />
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D5B78B] font-semibold block">
                Gastronomy Flight
              </span>
              <h3 className="font-serif text-xl font-normal text-[#F8F3EB]">
                Curated Tasting Order
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {orderConfirmed ? (
            /* Order Confirmation View */
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-[#788267]/20 border border-[#788267] flex items-center justify-center mx-auto text-[#788267]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#241B18] font-normal">
                Tasting Flight Ordered
              </h3>
              <p className="text-xs text-[#241B18]/70 max-w-xs mx-auto leading-relaxed">
                Your culinary selections have been transmitted to the executive kitchen & roastery bar.
              </p>
              <div className="p-4 bg-white border border-[#A58B78]/25 text-left text-xs space-y-2 mt-4">
                <div className="flex justify-between">
                  <span className="text-[#A58B78]">Order Ticket:</span>
                  <span className="font-mono font-semibold text-[#241B18]">{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A58B78]">Service Mode:</span>
                  <span className="capitalize font-medium">{diningMode === 'table' ? 'Table Service' : 'Express Takeaway'}</span>
                </div>
                {tableNumber && (
                  <div className="flex justify-between">
                    <span className="text-[#A58B78]">Table:</span>
                    <span className="font-medium">{tableNumber}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-[#A58B78]/20 font-semibold text-sm">
                  <span>Total Amount:</span>
                  <span className="font-serif text-base text-[#C77955]">₹{grandTotal}</span>
                </div>
              </div>
              <button
                onClick={handleDone}
                className="w-full mt-6 py-3.5 bg-[#241B18] text-[#F8F3EB] text-xs uppercase tracking-wider font-semibold"
              >
                Complete & Return to Menu
              </button>
            </div>
          ) : items.length === 0 ? (
            /* Empty Cart View */
            <div className="text-center py-16 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#241B18]/5 border border-[#A58B78]/20 flex items-center justify-center mx-auto text-[#A58B78]">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-[#241B18] font-normal">
                Your Tasting Flight Is Empty
              </h3>
              <p className="text-xs text-[#241B18]/60 max-w-xs mx-auto leading-relaxed">
                Explore our single-origin pour-overs, French-Indian viennoiserie, and truffle risotto to curate your table.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 bg-[#241B18] text-[#F8F3EB] text-xs uppercase tracking-wider font-medium"
              >
                Explore Culinary Menu
              </button>
            </div>
          ) : (
            /* Cart Items List */
            <div className="space-y-4">
              {items.map((ci) => (
                <div
                  key={ci.item.id}
                  className="p-3.5 bg-white border border-[#A58B78]/20 shadow-xs flex items-center gap-3.5"
                >
                  <img
                    src={ci.item.image}
                    alt={ci.item.name}
                    className="w-14 h-14 object-cover shrink-0 bg-[#241B18]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-base font-normal text-[#241B18] truncate">
                      {ci.item.name}
                    </h4>
                    <span className="text-[11px] text-[#C77955] font-serif italic block">
                      ₹{ci.item.price} each
                    </span>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[#A58B78]/30 bg-[#F8F3EB]">
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, -1)}
                          className="px-2 py-0.5 text-xs text-[#241B18] hover:bg-[#241B18]/10"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold tabular-nums text-[#241B18]">
                          {ci.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, 1)}
                          className="px-2 py-0.5 text-xs text-[#241B18] hover:bg-[#241B18]/10"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(ci.item.id)}
                        className="text-[#A58B78] hover:text-[#C77955] text-xs p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-serif text-base text-[#241B18] font-medium tabular-nums">
                      ₹{ci.item.price * ci.quantity}
                    </span>
                  </div>
                </div>
              ))}

              {/* Service Mode Selector */}
              <div className="pt-4 border-t border-[#A58B78]/20">
                <label className="text-[11px] uppercase tracking-wider text-[#241B18] font-semibold block mb-2">
                  Service Destination
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setDiningMode('table')}
                    className={`py-2 px-3 border transition-colors ${
                      diningMode === 'table'
                        ? 'border-[#241B18] bg-[#241B18] text-[#F8F3EB] font-medium'
                        : 'border-[#A58B78]/30 bg-white text-[#241B18]'
                    }`}
                  >
                    Dine-In Table
                  </button>
                  <button
                    type="button"
                    onClick={() => setDiningMode('takeaway')}
                    className={`py-2 px-3 border transition-colors ${
                      diningMode === 'takeaway'
                        ? 'border-[#241B18] bg-[#241B18] text-[#F8F3EB] font-medium'
                        : 'border-[#A58B78]/30 bg-white text-[#241B18]'
                    }`}
                  >
                    Express Pick-up
                  </button>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-3 pt-2">
                <input
                  type="text"
                  placeholder="Guest Name (e.g. Aanya Singhal)"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#A58B78]/30 text-xs focus:outline-none focus:border-[#C77955]"
                />
                {diningMode === 'table' && (
                  <input
                    type="text"
                    placeholder="Table / Sanctuary Number (optional if pre-ordering)"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#A58B78]/30 text-xs focus:outline-none focus:border-[#C77955]"
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer with Calculations */}
        {!orderConfirmed && items.length > 0 && (
          <div className="p-6 bg-white border-t border-[#A58B78]/20 shrink-0 space-y-3">
            <div className="space-y-1.5 text-xs text-[#241B18]/70">
              <div className="flex justify-between">
                <span>Items Subtotal:</span>
                <span className="tabular-nums">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & GST (5%):</span>
                <span className="tabular-nums">₹{gst}</span>
              </div>
              <div className="flex justify-between">
                <span>Culinary Service (5%):</span>
                <span className="tabular-nums">₹{serviceCharge}</span>
              </div>
              <div className="flex justify-between text-base font-semibold text-[#241B18] pt-2 border-t border-[#A58B78]/20">
                <span>Total Amount:</span>
                <span className="font-serif text-lg text-[#C77955] tabular-nums">
                  ₹{grandTotal}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full py-3.5 bg-[#241B18] text-[#F8F3EB] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#C77955] active:bg-[#a65d3d] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Transmit Tasting Order (₹{grandTotal})</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="w-full text-center text-xs text-[#A58B78] hover:text-[#C77955] transition-colors underline py-1"
            >
              Or Pair with a Table Reservation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
