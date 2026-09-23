import { CURATED_EVENTS } from '../data/restaurantData';
import { Music, Sparkles, Calendar } from 'lucide-react';

interface EventsAgendaSectionProps {
  onReserveForEvent: (eventTitle: string) => void;
}

export const EventsAgendaSection = ({ onReserveForEvent }: EventsAgendaSectionProps) => {
  return (
    <section id="experiencias" className="py-20 bg-[#0d090d] border-t border-[#1f131c] text-[#f7f2ee]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-[11px] uppercase tracking-widest text-[#c49758] font-semibold mb-2">
            Música & Vida Nocturna
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#faf3ef] font-normal tracking-tight">
            Noches que florecen en La Candelaria
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#b5a2b0] font-light">
            Música en vivo, cócteles especiales y una atmósfera íntima bajo las luces de la noche colonial.
          </p>
        </div>

        {/* 3 Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CURATED_EVENTS.map((event) => (
            <div
              key={event.id}
              className="p-5 bg-[#140c14] border border-[#291825] rounded-2xl flex flex-col justify-between hover:border-[#c49758]/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#261623] text-[#e5a060] border border-[#44263c]">
                    {event.tag}
                  </span>
                  <span className="text-xs font-mono text-[#a3919e]">
                    {event.dateOrDay}
                  </span>
                </div>

                <h3 className="font-serif text-lg text-white font-medium mb-2 group-hover:text-[#e58a9e] transition-colors">
                  {event.title}
                </h3>
                <p className="text-xs text-[#a794a2] leading-relaxed font-light">
                  {event.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#221320] flex items-center justify-between">
                <span className="text-[11px] text-[#7d6877]">Entrada libre con reserva</span>
                <button
                  onClick={() => onReserveForEvent(event.title)}
                  className="text-xs text-[#c49758] hover:text-[#e5a060] font-medium flex items-center gap-1 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reservar fecha</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
