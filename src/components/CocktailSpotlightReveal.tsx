import { motion } from 'motion/react';
import { Sparkles, Wine, Flame, Eye, Droplet, ArrowRight } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface CocktailSpotlightRevealProps {
  onOpenReservation: (cocktailName?: string) => void;
}

export const CocktailSpotlightReveal = ({ onOpenReservation }: CocktailSpotlightRevealProps) => {
  return (
    <section className="relative py-28 bg-[#090709] text-[#f7f2ee] overflow-hidden border-t border-[#1d121c]">
      {/* Background ambient light radial */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#9e2b46]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#c49758]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial & Sensory Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#180f17] border border-[#3b2135] text-[#c49758] text-[11px] uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#e5a060]" />
              <span>Revelación Sensorial · Mixología de Autor</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#faf3ef] font-normal tracking-tight leading-[1.1]">
              La Anatomía del <br />
              <span className="italic text-[#e58a9e]">Cóctel La Rosa</span> 🌹
            </h2>

            <p className="text-xs sm:text-sm text-[#baa7b5] font-light leading-relaxed">
              No es solo una bebida: es el ritual de bienvenida de nuestra casona. Cada copa es servida a temperatura exacta con pétalos orgánicos, destilado botánico y un velo tenue de humo aromático que perfuma la mesa al llegar.
            </p>

            {/* 3 Sensory Micro-Cards */}
            <div className="space-y-3 pt-2">
              <div className="group p-3.5 rounded-xl bg-[#130b13] border border-[#261523] hover:border-[#c49758]/50 hover:bg-[#1b101b] transition-all duration-300 flex items-start gap-3.5 cursor-default">
                <div className="w-8 h-8 rounded-lg bg-[#271524] border border-[#44253e] flex items-center justify-center text-[#e58a9e] shrink-0 group-hover:scale-105 transition-transform">
                  <Droplet className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white group-hover:text-[#e5a060] transition-colors">
                    1. Notas Aromáticas de Salida
                  </h4>
                  <p className="text-[11px] text-[#9c8997] font-light mt-0.5 leading-relaxed">
                    Vapor sutil de infusión de rosas andinas, piel de naranja amarga y rocío de ginebra botánica.
                  </p>
                </div>
              </div>

              <div className="group p-3.5 rounded-xl bg-[#130b13] border border-[#261523] hover:border-[#c49758]/50 hover:bg-[#1b101b] transition-all duration-300 flex items-start gap-3.5 cursor-default">
                <div className="w-8 h-8 rounded-lg bg-[#271524] border border-[#44253e] flex items-center justify-center text-[#c49758] shrink-0 group-hover:scale-105 transition-transform">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white group-hover:text-[#e5a060] transition-colors">
                    2. Equilibrio en Paladar
                  </h4>
                  <p className="text-[11px] text-[#9c8997] font-light mt-0.5 leading-relaxed">
                    Entrada sedosa con balance dulce-amargo, acidez cítrica brillante y final prolongado y aterciopelado.
                  </p>
                </div>
              </div>

              <div className="group p-3.5 rounded-xl bg-[#130b13] border border-[#261523] hover:border-[#c49758]/50 hover:bg-[#1b101b] transition-all duration-300 flex items-start gap-3.5 cursor-default">
                <div className="w-8 h-8 rounded-lg bg-[#271524] border border-[#44253e] flex items-center justify-center text-[#e5a060] shrink-0 group-hover:scale-105 transition-transform">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white group-hover:text-[#e5a060] transition-colors">
                    3. La Rosa en Copa
                  </h4>
                  <p className="text-[11px] text-[#9c8997] font-light mt-0.5 leading-relaxed">
                    Cristal fino labrado donde reposa una rosa carmesí fresca que se abre suavemente durante la velada.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenReservation('Cóctel La Rosa Insignia')}
                className="btn-shimmer px-6 py-3 bg-gradient-to-r from-[#c49758] via-[#e5a060] to-[#c4874b] hover:brightness-110 text-[#070507] text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#c49758]/20 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Degustar Cóctel Insignia</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs font-mono text-[#c49758]">
                $38,000 COP · Servido en Barra o Terraza
              </span>
            </div>
          </motion.div>

          {/* Right Column: Floating Isolated Crystal Glass with Soft Depth Shadows */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 max-w-md mx-auto aspect-square rounded-full bg-gradient-to-br from-[#c49758]/15 via-[#9e2b46]/25 to-transparent blur-2xl animate-glow pointer-events-none" />

            {/* Main Floating Card with Scroll Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-md animate-float"
            >
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-[#2b1728]/60 via-[#160b15]/90 to-[#0c070c] border border-[#44233c]/80 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(196,151,88,0.18)] backdrop-blur-xl group">
                
                {/* Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#070507]">
                  <img
                    src="/src/assets/images/cocktail_rose_isolated_1790123873322.jpg"
                    alt="Cóctel de autor La Rosa en copa de cristal con rosa roja natural y humo aromático"
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  />

                  {/* Dark Radial Mask to blend seamlessly */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c070c] via-transparent to-black/20" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#c49758]/50 text-[10px] font-semibold uppercase tracking-wider text-[#e5a060]">
                      El Ícono de la Casa
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-rose-300">
                      🌹
                    </span>
                  </div>

                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-[#3b2034] flex items-center justify-between text-xs">
                    <div>
                      <p className="font-serif text-white font-medium">Cóctel La Rosa</p>
                      <p className="text-[10px] text-[#baa7b5]">Infusión botánica & rosa viva</p>
                    </div>
                    <span className="text-amber-300 font-mono font-medium">$38.000 COP</span>
                  </div>
                </div>

                {/* Decorative border glow */}
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-[#c49758]/30 via-transparent to-[#e58a9e]/20 -z-10 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
