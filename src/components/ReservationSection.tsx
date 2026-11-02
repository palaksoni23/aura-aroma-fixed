import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Sparkles, CheckCircle2, QrCode, Phone, Mail, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ReservationDetails } from '../types';

interface ReservationSectionProps {
  initialSpaceName?: string;
  onBookingSuccess?: (details: ReservationDetails) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  initialSpaceName,
  onBookingSuccess
}) => {
  const [date, setDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('07:30 PM');
  const [guests, setGuests] = useState<number>(2);
  const [seatingZone, setSeatingZone] = useState<string>(
    initialSpaceName || 'The Starlit Aravali Rooftop'
  );
  const [occasion, setOccasion] = useState<string>('Dinner & Conversation');
  const [guestName, setGuestName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const [confirmedBooking, setConfirmedBooking] = useState<ReservationDetails | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const seatingOptions = [
    'The Starlit Aravali Rooftop',
    'The Conservatory Botanical Glasshouse',
    'The Espresso Bar & Velvet Lounge',
    'The Heritage Haveli Cellar',
  ];

  const timeSlots = [
    { label: 'Morning Brew & Brunch', times: ['09:00 AM', '10:30 AM', '11:45 AM'] },
    { label: 'Golden Hour High Tea', times: ['04:00 PM', '05:15 PM', '06:00 PM'] },
    { label: 'Twilight Fine Dining', times: ['07:30 PM', '08:30 PM', '09:15 PM', '10:15 PM'] },
  ];

  const occasions = [
    'Dinner & Conversation',
    'Romantic Date & Anniversary',
    'Birthday Celebration',
    'Business Dinner',
    'Artisanal Coffee Tasting',
    'Private Gathering'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !phone.trim()) {
      alert('Please provide your name and phone number for the table concierge.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const referenceId = `AA-${Math.floor(1000 + Math.random() * 9000)}`;
      const details: ReservationDetails = {
        referenceId,
        guestName,
        phone,
        email: email || 'concierge@auraandaroma.in',
        date,
        timeSlot,
        guestCount: guests,
        seatingZone,
        occasion,
        specialRequests,
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setConfirmedBooking(details);
      setIsSubmitting(false);

      if (onBookingSuccess) {
        onBookingSuccess(details);
      }

      // Celebratory Golden Confetti
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D5B78B', '#C77955', '#241B18', '#F8F3EB']
        });
      } catch {
        // fallback
      }
    }, 700);
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setGuestName('');
    setPhone('');
    setEmail('');
    setSpecialRequests('');
  };

  return (
    <section id="reservation" className="py-28 bg-[#F8F3EB] text-[#241B18] relative bg-grain border-t border-[#A58B78]/20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C77955] font-semibold mb-3">
            <span>Table Concierge</span>
            <span className="text-[#A58B78]">/</span>
            <span>Instant Confirmation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#241B18] leading-[1.1] text-balance">
            Reserve Your <span className="italic font-normal text-[#C77955]">Sensory Journey</span>.
          </h2>
          <p className="mt-4 text-base text-[#241B18]/70 leading-relaxed font-light text-balance">
            Allow our maître d'hôtel to prepare your table under the Aravali stars or within the botanical glasshouse.
          </p>
        </div>

        {confirmedBooking ? (
          /* Confirmed Reservation Pass */
          <div className="bg-[#241B18] text-[#F8F3EB] border border-[#D5B78B]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B78B]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 text-[#D5B78B] mb-6">
              <CheckCircle2 className="w-6 h-6 text-[#D5B78B]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                Table Reserved & Confirmed
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-[#D5B78B]/20 gap-6">
              <div>
                <span className="text-xs text-[#A58B78] uppercase tracking-wider block">Reservation For</span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F8F3EB] font-normal mt-1">
                  {confirmedBooking.guestName}
                </h3>
                <span className="text-xs text-[#D5B78B] block mt-1">
                  Party of {confirmedBooking.guestCount} Guests · {confirmedBooking.occasion}
                </span>
              </div>

              {/* Booking Reference Pill */}
              <div className="text-right">
                <span className="text-xs text-[#A58B78] uppercase tracking-wider block">Booking Reference</span>
                <span className="font-mono text-2xl text-[#D5B78B] font-semibold tracking-wider">
                  {confirmedBooking.referenceId}
                </span>
                <span className="text-[10px] text-[#F8F3EB]/60 block mt-1">
                  Instant SMS & Concierge Logged
                </span>
              </div>
            </div>

            {/* Itinerary Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-b border-[#D5B78B]/20 text-xs">
              <div>
                <span className="text-[#A58B78] uppercase tracking-wider block text-[10px]">Date</span>
                <span className="font-serif text-lg text-[#F8F3EB] mt-1 block">
                  {new Date(confirmedBooking.date + 'T00:00:00').toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <div>
                <span className="text-[#A58B78] uppercase tracking-wider block text-[10px]">Time Slot</span>
                <span className="font-serif text-lg text-[#F8F3EB] mt-1 block">{confirmedBooking.timeSlot}</span>
              </div>
              <div>
                <span className="text-[#A58B78] uppercase tracking-wider block text-[10px]">Sanctuary</span>
                <span className="font-serif text-lg text-[#D5B78B] mt-1 block">{confirmedBooking.seatingZone}</span>
              </div>
              <div>
                <span className="text-[#A58B78] uppercase tracking-wider block text-[10px]">Dress Code</span>
                <span className="font-serif text-lg text-[#F8F3EB] mt-1 block">Smart Casual</span>
              </div>
            </div>

            {/* Special Instructions & QR preview */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8">
              <div className="flex items-center gap-4 text-xs text-[#F8F3EB]/70">
                <div className="p-3 bg-white/5 border border-[#D5B78B]/30 flex items-center justify-center">
                  <QrCode className="w-10 h-10 text-[#D5B78B]" />
                </div>
                <div>
                  <span className="text-white font-medium block">Digital Boarding Pass</span>
                  <span>Present this reference upon arrival at Civil Lines, Alwar.</span>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 border border-[#D5B78B]/40 text-[#D5B78B] text-xs uppercase tracking-wider hover:bg-[#D5B78B]/10 transition-colors"
                >
                  Make Another Reservation
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Interactive Reservation Form */
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#A58B78]/25 p-8 sm:p-12 shadow-xl space-y-8"
          >
            {/* Step 1: Zone & Occasion */}
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-[#C77955] font-semibold block mb-3">
                01. Choose Preferred Sanctuary
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {seatingOptions.map((zone) => (
                  <button
                    type="button"
                    key={zone}
                    onClick={() => setSeatingZone(zone)}
                    className={`p-3.5 text-left border text-xs font-medium transition-all ${
                      seatingZone === zone
                        ? 'border-[#C77955] bg-[#C77955]/10 text-[#241B18] font-semibold'
                        : 'border-[#A58B78]/25 text-[#241B18]/70 hover:border-[#A58B78]'
                    }`}
                  >
                    {zone}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date, Time & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#A58B78]/20">
              {/* Date */}
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-[#241B18] font-medium block mb-2">
                  Reservation Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-[#A58B78]/30 text-xs text-[#241B18] focus:outline-none focus:border-[#C77955]"
                    required
                  />
                </div>
              </div>

              {/* Time Slot */}
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-[#241B18] font-medium block mb-2">
                  Seating Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#A58B78]/30 text-xs text-[#241B18] focus:outline-none focus:border-[#C77955]"
                >
                  {timeSlots.map((grp) => (
                    <optgroup key={grp.label} label={grp.label}>
                      {grp.times.map((t) => (
                        <option key={t} value={t}>
                          {t} ({grp.label.split(' ')[0]})
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              {/* Guest Count */}
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-[#241B18] font-medium block mb-2">
                  Number of Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-3 py-2.5 bg-white border border-[#A58B78]/30 text-xs text-[#241B18] focus:outline-none focus:border-[#C77955]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Occasion */}
            <div className="pt-6 border-t border-[#A58B78]/20">
              <label className="text-xs uppercase tracking-[0.15em] text-[#241B18] font-medium block mb-2">
                Dining Occasion
              </label>
              <div className="flex flex-wrap gap-2">
                {occasions.map((occ) => (
                  <button
                    type="button"
                    key={occ}
                    onClick={() => setOccasion(occ)}
                    className={`px-3 py-1.5 text-xs transition-all ${
                      occasion === occ
                        ? 'bg-[#241B18] text-[#F8F3EB]'
                        : 'bg-[#F8F3EB] border border-[#A58B78]/30 text-[#241B18]/70 hover:text-[#241B18]'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#A58B78]/20">
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-[#241B18] font-medium block mb-2">
                  Guest Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Radhika Sharma"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#A58B78]/30 text-xs text-[#241B18] focus:outline-none focus:border-[#C77955]"
                  required
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-[#241B18] font-medium block mb-2">
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  placeholder="+91 98290 XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#A58B78]/30 text-xs text-[#241B18] focus:outline-none focus:border-[#C77955]"
                  required
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-[#241B18] font-medium block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@luxurymail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#A58B78]/30 text-xs text-[#241B18] focus:outline-none focus:border-[#C77955]"
                />
              </div>
            </div>

            {/* Special Request */}
            <div>
              <label className="text-xs uppercase tracking-[0.15em] text-[#241B18] font-medium block mb-2">
                Special Requests or Dietary Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Allergies, preferred table near the view, quiet anniversary setup, etc."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#A58B78]/30 text-xs text-[#241B18] focus:outline-none focus:border-[#C77955]"
              />
            </div>

            {/* Submission CTA */}
            <div className="pt-6 border-t border-[#A58B78]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#241B18]/60">
                Complimentary Valet Parking & Aravali Rooftop Access Included.
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-[#241B18] text-[#F8F3EB] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#C77955] active:bg-[#a65d3d] transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Securing Table...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#D5B78B]" />
                    <span>Confirm Table Reservation</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
