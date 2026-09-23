import { RESTAURANT_DATA } from '../data/restaurantData';
import { Calendar, Instagram, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar = ({ onOpenReservation }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-40 bg-[#090709]/92 backdrop-blur-md border-b border-[#241720]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/src/assets/images/la_rosa_emblem_gold_1790122014403.jpg"
            alt="Emblema oficial La Rosa Bar"
            className="w-9 h-9 rounded-full object-cover border border-[#c49758]/50 shadow-sm"
          />
          <div className="leading-tight">
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-[#fdf8f4] group-hover:text-[#e58a9e] transition-colors">
              LA ROSA BAR
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-[#c49758] font-medium">
              La Candelaria · Bogotá
            </span>
          </div>
        </a>

        {/* Concise links */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-wider text-[#b8a6b1] font-medium">
          <a href="#la-casona" className="hover:text-white transition-colors">
            La Casona
          </a>
          <a href="#carta" className="hover:text-white transition-colors">
            Carta & Cócteles
          </a>
          <a href="#experiencias" className="hover:text-white transition-colors">
            Noches & Música
          </a>
          <a href="#opiniones" className="hover:text-white transition-colors">
            Opiniones Maps (5.0 ⭐)
          </a>
          <a href="#visitanos" className="hover:text-white transition-colors">
            Ubicación
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={RESTAURANT_DATA.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#cfbcc8] hover:text-white bg-[#1a1118] border border-[#33202e] rounded-lg transition-colors"
            title="Instagram oficial de La Rosa Gastro Bar"
          >
            <Instagram className="w-3.5 h-3.5 text-[#e58a9e]" />
            <span className="font-mono text-[11px]">@larosagastrobar_</span>
          </a>

          <button
            onClick={onOpenReservation}
            className="btn-shimmer px-4 py-2 text-xs tracking-wider uppercase font-semibold text-[#090709] bg-gradient-to-r from-[#d99757] via-[#e5a060] to-[#c4874b] hover:brightness-110 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reservar</span>
          </button>
        </div>
      </div>
    </header>
  );
};
