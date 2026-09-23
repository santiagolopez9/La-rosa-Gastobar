import { RESTAURANT_DATA } from '../data/restaurantData';
import { Sparkles, BookOpen, Wine, PawPrint, Landmark } from 'lucide-react';

export const TheHouseSection = () => {
  return (
    <section id="la-casona" className="py-20 bg-[#0d090d] border-t border-b border-[#21141e] text-[#f7f2ee]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Compact section header */}
        <div className="max-w-2xl mb-12">
          <p className="text-[11px] uppercase tracking-widest text-[#c49758] font-semibold mb-2">
            La Casona Colonial & Escena Cultural
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#faf3ef] font-normal tracking-tight">
            Un rincón bohemio en el corazón de La Candelaria
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#bcaab6] leading-relaxed font-light">
            Detrás de la emblemática fachada colonial azul y su portada barroca en <span className="text-[#f5d5dd] font-medium">Cra. 3 Este #8-61</span>, La Rosa Bar reúne arquitectura de época, techos con vigas de madera maciza, arcos de hierro forjado, rincón de biblioteca y una terraza perfecta para ver caer la tarde sobre Bogotá.
          </p>
        </div>

        {/* Visual split grid: 2 authentic photos + 4 boutique highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Photo gallery column */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#2e1d2b] group">
                <img
                  src="/src/assets/images/candelaria_blue_facade_1790122002690.jpg"
                  alt="Fachada azul colonial y portal barroco de La Rosa Bar en La Candelaria"
                  className="w-full h-52 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3.5">
                  <span className="text-[11px] text-[#f5d5dd] font-medium">Fachada Colonial Azul · Cra. 3 Este #8-61</span>
                </div>
              </div>

              <div className="p-4 bg-[#140c14] border border-[#271724] rounded-2xl">
                <div className="flex items-center gap-2 text-[#c49758] text-xs font-semibold uppercase tracking-wider mb-1">
                  <Landmark className="w-3.5 h-3.5" />
                  <span>Historia & Arquitectura</span>
                </div>
                <p className="text-xs text-[#a997a4] leading-relaxed">
                  Casona colonial preservada con arcos de ladrillo, hierro forjado y suelo de época.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#2e1d2b] group">
                <img
                  src="/src/assets/images/colonial_interior_salon_1790122038605.jpg"
                  alt="Interior de La Rosa Bar con vigas de madera, biblioteca de libros y mesas íntimas"
                  className="w-full h-52 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3.5">
                  <span className="text-[11px] text-[#f5d5dd] font-medium">Salón Colonial, Vigas & Biblioteca</span>
                </div>
              </div>

              <div className="p-4 bg-[#140c14] border border-[#271724] rounded-2xl">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <PawPrint className="w-3.5 h-3.5" />
                  <span>100% Pet-Friendly 🐾</span>
                </div>
                <p className="text-xs text-[#a997a4] leading-relaxed">
                  Tu perro es siempre bienvenido tanto en el salón como en la terraza.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights & Experience Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 bg-[#140c14] border border-[#2b1a27] rounded-2xl hover:border-[#c49758]/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#251522] text-[#e58a9e] flex items-center justify-center">
                  <Wine className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-white font-medium">Cócteles Especiales & La Rosa en Copa</h4>
              </div>
              <p className="text-xs text-[#b09ea9] leading-relaxed">
                Coctelería clásica y de autor servida en cristalería de época, inspirada en notas florales y botánicas.
              </p>
            </div>

            <div className="p-5 bg-[#140c14] border border-[#2b1a27] rounded-2xl hover:border-[#c49758]/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#251522] text-[#c49758] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-white font-medium">Terraza con Vista & Calentadores</h4>
              </div>
              <p className="text-xs text-[#b09ea9] leading-relaxed">
                El lugar predilecto para disfrutar la noche bogotana al aire libre con música suave y buena conversación.
              </p>
            </div>

            <div className="p-5 bg-[#140c14] border border-[#2b1a27] rounded-2xl hover:border-[#c49758]/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#251522] text-[#e58a9e] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-white font-medium">Escena Cultural & Café</h4>
              </div>
              <p className="text-xs text-[#b09ea9] leading-relaxed">
                Biblioteca con libros para ojear, charlas culturales, acústicos en vivo y tertulias bohemias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
