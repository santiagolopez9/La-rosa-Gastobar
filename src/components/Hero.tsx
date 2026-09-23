import { RESTAURANT_DATA } from '../data/restaurantData';
import { Calendar, Utensils, Star, MapPin, Sparkles, Instagram, Clock } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero = ({ onOpenReservation }: HeroProps) => {
  return (
    <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden">
      {/* Background Image: Authentic Colonial House in La Candelaria */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/candelaria_blue_facade_1790122002690.jpg"
          alt="Casona colonial azul de La Rosa Gastro Bar en La Candelaria, Bogotá"
          className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Editorial dark scrim with warm gold/rose tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090709] via-[#090709]/80 to-[#090709]/60" />
        <div className="absolute inset-0 bg-radial at-center from-transparent via-[#090709]/50 to-[#090709]/95" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        {/* Authentic Gold Emblem Badge */}
        <div className="mb-6 flex justify-center">
          <div className="relative group cursor-pointer">
            <img
              src="/src/assets/images/la_rosa_emblem_gold_1790122014403.jpg"
              alt="Logo oficial La Rosa Bar con filigrana dorada y rosa en copa"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#c49758]/70 shadow-2xl shadow-[#c49758]/20 group-hover:scale-105 transition-transform"
            />
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-[#170e16] border border-[#c49758]/60 rounded-full text-[10px] text-[#e5b376] uppercase tracking-widest font-semibold whitespace-nowrap">
              La Candelaria
            </div>
          </div>
        </div>

        {/* Real Google Maps Rating (5.0 rating with 10 reviews) */}
        <div className="inline-flex items-center gap-2 text-xs text-[#ded1da] mb-4 bg-[#1b111a]/80 backdrop-blur-sm border border-[#3d2435] px-3.5 py-1.5 rounded-full">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="font-bold text-white">5.0</span>
          <span className="text-[#6e5967]">·</span>
          <span>{RESTAURANT_DATA.reviewsCount} opiniones en Google Maps</span>
          <span className="text-[#6e5967]">·</span>
          <span className="text-[#e58a9e] font-medium">{RESTAURANT_DATA.priceRange}</span>
        </div>

        {/* Official Headline & Slogan */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#fdf8f4] tracking-tight leading-[1.1] mb-3">
          LA ROSA <span className="italic text-[#e5a060]">BAR</span> 🌹
        </h1>
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#c49758] font-medium mb-5">
          "{RESTAURANT_DATA.slogan}"
        </p>

        <p className="font-sans text-sm sm:text-base text-[#cfbecb] max-w-xl mx-auto mb-8 font-light leading-relaxed">
          {RESTAURANT_DATA.description} Terraza con vista, coctelería de autor, libros, velas y cocina gastrobar en Cra. 3 Este #8-61.
        </p>

        {/* Key Venue Highlights in one clean line */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5 text-xs text-[#baa7b4] mb-8">
          <span>🏛️ Casona Colonial</span>
          <span className="text-[#513c4a]">/</span>
          <span>✨ Terraza al aire libre</span>
          <span className="text-[#513c4a]">/</span>
          <span>🍸 Cóctel La Rosa en copa</span>
          <span className="text-[#513c4a]">/</span>
          <span className="text-emerald-300">🐾 Pet-Friendly</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-7 py-3 text-xs tracking-wider uppercase font-semibold text-[#090709] bg-gradient-to-r from-[#d99757] via-[#e5a060] to-[#c4874b] hover:brightness-110 rounded-lg shadow-lg shadow-[#c49758]/20 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Reservar Mesa</span>
          </button>

          <a
            href="#carta"
            className="w-full sm:w-auto px-7 py-3 text-xs tracking-wider uppercase font-semibold text-[#f5dbe3] bg-[#1a1018]/90 hover:bg-[#281725] border border-[#4a2e42] rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Utensils className="w-4 h-4 text-[#e58a9e]" />
            <span>Ver Carta</span>
          </a>

          <a
            href={RESTAURANT_DATA.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 text-xs tracking-wider uppercase font-medium text-[#cbb6c4] hover:text-white bg-[#120a12]/80 border border-[#301b2a] rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <Instagram className="w-4 h-4 text-[#e58a9e]" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Quick status line */}
        <div className="mt-10 pt-5 border-t border-[#291724]/80 flex flex-wrap justify-center items-center gap-4 text-[11px] text-[#9a8594]">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#c49758]" />
            <span>Cra. 3 Este #8-61, Bogotá</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-300 font-medium">Abierto hoy hasta las 11:30 p.m.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
