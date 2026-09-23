import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheHouseSection } from './components/TheHouseSection';
import { CocktailSpotlightReveal } from './components/CocktailSpotlightReveal';
import { DynamicMenuSlider } from './components/DynamicMenuSlider';
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
    <div className="min-h-screen bg-[#070507] text-[#f7f2ee] flex flex-col selection:bg-[#c49758]/30 selection:text-[#f8d4dc]">
      {/* Top Navbar */}
      <Navbar onOpenReservation={() => scrollToReservations()} />

      <main className="flex-1">
        {/* 1. Héroe Visual con Video en Fondo, Máscara Oscura y Shimmer */}
        <Hero onOpenReservation={() => scrollToReservations()} />

        {/* 2. La Casona con Desplazamiento Parallax Suave y Profundidad */}
        <TheHouseSection />

        {/* 4. Transición de Revelado & Profundidad (Scroll Reveal Copa Aislada La Rosa) */}
        <CocktailSpotlightReveal onOpenReservation={(cocktail) => scrollToReservations(cocktail)} />

        {/* 3. Slider de Menú Dinámico con SwiperJS, centerSlides y Autoplay */}
        <DynamicMenuSlider onReserveWithOrder={handleOrderForReservation} />

        {/* Agenda de Música en Vivo & Noches de La Candelaria */}
        <EventsAgendaSection onReserveForEvent={(title) => scrollToReservations(title)} />

        {/* Reseñas Reales Google Maps (5.0 Estrellas con 10 Comentarios) */}
        <RealReviewsSection />

        {/* Reserva Directa con Generación de Código y Despacho a WhatsApp */}
        <ReservationSection
          prefilledEvent={prefilledEvent}
          prefilledOrder={prefilledOrder}
        />

        {/* Ubicación, Tip de Parqueadero y Horarios */}
        <LocationAndHours />
      </main>

      {/* Footer Boutique */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}
