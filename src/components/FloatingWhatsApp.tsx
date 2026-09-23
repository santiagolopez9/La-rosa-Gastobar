import { MessageCircle } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const FloatingWhatsApp = () => {
  return (
    <aside aria-label="WhatsApp oficial" className="fixed bottom-6 right-6 z-40">
      <a
        href={RESTAURANT_DATA.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3.5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-[#061f0f] font-semibold text-xs rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95"
        title="Escribir por WhatsApp a La Rosa Bar"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span className="hidden sm:inline font-bold">WhatsApp 320 3934249</span>
      </a>
    </aside>
  );
};
