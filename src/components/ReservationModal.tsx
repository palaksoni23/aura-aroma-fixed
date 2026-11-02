import React from 'react';
import { X } from 'lucide-react';
import { ReservationSection } from './ReservationSection';
import { ReservationDetails } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpaceName?: string;
  onBookingSuccess?: (details: ReservationDetails) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialSpaceName,
  onBookingSuccess
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#F8F3EB] shadow-2xl border border-[#D5B78B]/40 my-8 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#241B18] text-[#F8F3EB] px-6 py-4 flex items-center justify-between border-b border-[#D5B78B]/30 shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D5B78B] font-semibold block">
              Aura & Aroma · Concierge
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#F8F3EB] font-normal">
              Private Table Reservation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F3EB] transition-colors"
            aria-label="Close reservation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Body */}
        <div className="overflow-y-auto p-2 sm:p-6 bg-[#F8F3EB]">
          <ReservationSection
            initialSpaceName={initialSpaceName}
            onBookingSuccess={(details) => {
              if (onBookingSuccess) onBookingSuccess(details);
            }}
          />
        </div>
      </div>
    </div>
  );
};
