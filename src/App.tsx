import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheHouseSection } from './components/TheHouseSection';
import { CuratedMenuSection } from './components/CuratedMenuSection';
import { EventsAgendaSection } from './components/EventsAgendaSection';
import { RealReviewsSection } from './components/RealReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [prefilledEvent, setPrefilledEvent] = useState<string>('');
  const [prefilledOrder, setPrefilledOrder] = useState<string>('');

  const scrollToReservations = (eventTitle?: string) => {
    if (eventTitle) {
      setPrefilledEvent(eventTitle);
    }
    const el = document.getElementById('reservas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderForReservation = (orderSummary: string) => {
    setPrefilledOrder(orderSummary);
    const el = document.getElementById('reservas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090709] text-[#f7f2ee] flex flex-col selection:bg-[#c49758]/30 selection:text-[#f8d4dc]">
      {/* Top Navbar */}
      <Navbar onOpenReservation={() => scrollToReservations()} />

      <main className="flex-1">
        {/* Boutique Hero with Official Emblem & Real Candelaria Blue House */}
        <Hero onOpenReservation={() => scrollToReservations()} />

        {/* The House: Authentic Colonial Casona & Cultural Vibe */}
        <TheHouseSection />

        {/* Curated Menu & Cocktails */}
        <CuratedMenuSection onReserveWithOrder={handleOrderForReservation} />

        {/* Night & Music Agenda */}
        <EventsAgendaSection onReserveForEvent={(title) => scrollToReservations(title)} />

        {/* Real 10 Google Maps Reviews with 5.0 Star Rating */}
        <RealReviewsSection />

        {/* Compact, Friction-free Direct Reservation */}
        <ReservationSection
          prefilledEvent={prefilledEvent}
          prefilledOrder={prefilledOrder}
        />

        {/* Location, Parking tip & Hours */}
        <LocationAndHours />
      </main>

      {/* Boutique Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
