import { RESTAURANT_DATA } from '../data/restaurantData';
import { Instagram, MessageCircle, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#060406] border-t border-[#1a1017] text-[#9c8997] text-xs py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/images/la_rosa_emblem_gold_1790122014403.jpg"
            alt="La Rosa Bar Emblema"
            className="w-10 h-10 rounded-full object-cover border border-[#c49758]/60"
          />
          <div>
            <span className="font-serif text-lg text-white font-medium">LA ROSA BAR 🌹</span>
            <p className="text-[11px] text-[#c49758] italic">"{RESTAURANT_DATA.slogan}"</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a
            href={RESTAURANT_DATA.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#e58a9e]" />
            <span>@larosagastrobar_</span>
          </a>
          <span>·</span>
          <a
            href={RESTAURANT_DATA.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>320 3934249</span>
          </a>
          <span>·</span>
          <span>Cra. 3 Este #8-61, Bogotá</span>
        </div>

        <p className="text-[11px] text-[#6d5b68]">
          © {new Date().getFullYear()} La Rosa Bar · La Candelaria
        </p>
      </div>
    </footer>
  );
};
