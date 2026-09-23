import { RESTAURANT_DATA } from '../data/restaurantData';
import { MapPin, Clock, Phone, Navigation, Car, ShieldCheck } from 'lucide-react';

export const LocationAndHours = () => {
  return (
    <section id="visitanos" className="py-20 bg-[#090709] border-t border-[#1f121d] text-[#f7f2ee]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Location details */}
          <div className="space-y-4">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#c49758] font-semibold mb-2">
                Ubicación en La Candelaria
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf3ef] font-normal tracking-tight">
                {RESTAURANT_DATA.address}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#baa7b4] font-light">
                En las históricas calles adoquinadas del centro de Bogotá.
              </p>
            </div>

            {/* Parking notice (from real reviews) */}
            <div className="p-4 bg-[#140c14] border border-[#2b1928] rounded-xl flex items-start gap-3">
              <Car className="w-4 h-4 text-[#c49758] shrink-0 mt-0.5" />
              <div className="text-xs text-[#b8a6b4]">
                <strong className="text-white font-medium block">Información de Parqueadero:</strong>
                No hay parqueadero dentro de la casona, pero <span className="text-[#f5d5dd] font-medium">a solo una cuadra hay un parqueadero vigilado 24 horas</span> muy cómodo.
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={RESTAURANT_DATA.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#1b1019] hover:bg-[#291726] border border-[#3b2135] text-xs text-[#eed5e0] rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-[#e58a9e]" />
                <span>Abrir en Google Maps</span>
              </a>

              <a
                href={`tel:${RESTAURANT_DATA.phone}`}
                className="px-4 py-2 bg-[#1b1019] hover:bg-[#291726] border border-[#3b2135] text-xs text-[#eed5e0] rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Llamar al {RESTAURANT_DATA.phone}</span>
              </a>
            </div>
          </div>

          {/* Schedule & Atmosphere card */}
          <div className="p-6 bg-[#130b13] border border-[#2c1928] rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Horarios de Atención</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-2 border-b border-[#20121e]">
                <span className="text-[#baa7b4]">Jueves a Sábado</span>
                <span className="font-mono text-[#e5a060]">4:00 p.m. – 11:30 p.m.</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#20121e]">
                <span className="text-[#baa7b4]">Domingos & Festivos</span>
                <span className="font-mono text-[#e5a060]">2:00 p.m. – 10:00 p.m.</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[#baa7b4]">Martes y Miércoles</span>
                <span className="font-mono text-[#e5a060]">5:00 p.m. – 11:00 p.m.</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#8e7a88] space-y-1">
              <p>• Asientos al aire libre en terraza con calentadores de gas.</p>
              <p>• Se permiten mascotas (Pet-Friendly).</p>
              <p>• Rango promedio: {RESTAURANT_DATA.priceRange}.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
