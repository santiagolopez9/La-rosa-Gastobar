import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { Sparkles, BookOpen, Wine, PawPrint, Landmark, ChevronRight } from 'lucide-react';

export const TheHouseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax offsets for depth
  const yParallaxLeft = useTransform(scrollYProgress, [0, 1], [-25, 35]);
  const yParallaxRight = useTransform(scrollYProgress, [0, 1], [35, -25]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.9]);

  return (
    <section
      id="la-casona"
      ref={containerRef}
      className="relative py-28 bg-[#0b080b] border-t border-b border-[#21141e] text-[#f7f2ee] overflow-hidden"
    >
      {/* Parallax background ambient gradient */}
      <motion.div
        style={{ y: yParallaxLeft, opacity: opacityFade }}
        className="absolute top-10 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#c49758]/8 via-[#942940]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Compact section header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#180f17] border border-[#392033] text-[#c49758] text-[11px] uppercase tracking-widest font-semibold mb-3">
            <Landmark className="w-3.5 h-3.5 text-[#e5a060]" />
            <span>Patrimonio Vivo · Cra. 3 Este #8-61</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#faf3ef] font-normal tracking-tight">
            Un rincón bohemio en el corazón de <span className="italic text-[#e5a060]">La Candelaria</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#bcaab6] leading-relaxed font-light">
            Detrás de la emblemática fachada colonial azul y su portada barroca en Cra. 3 Este #8-61, La Rosa Bar reúne arquitectura de época, techos con vigas de madera maciza, arcos de hierro forjado, rincón de biblioteca y una terraza perfecta para ver caer la tarde sobre Bogotá.
          </p>
        </div>

        {/* Visual split grid with Smooth Parallax Depth */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Photo gallery column with Parallax */}
          <motion.div
            style={{ y: yParallaxLeft }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Card 1: Colonial Blue Facade */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#2e1d2b] group shadow-xl">
                <img
                  src="/src/assets/images/candelaria_blue_facade_1790122002690.jpg"
                  alt="Fachada azul colonial y portal barroco de La Rosa Bar en La Candelaria"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-4">
                  <div>
                    <span className="text-xs text-[#f5d5dd] font-medium block">
                      Fachada Colonial Azul
                    </span>
                    <span className="text-[10px] text-[#c49758] font-mono">
                      Cra. 3 Este #8-61 · La Candelaria
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#140c14] border border-[#271724] hover:border-[#c49758]/50 rounded-2xl transition-all duration-300">
                <div className="flex items-center gap-2 text-[#c49758] text-xs font-semibold uppercase tracking-wider mb-1.5">
                  <Landmark className="w-3.5 h-3.5" />
                  <span>Historia & Arquitectura</span>
                </div>
                <p className="text-xs text-[#a997a4] font-light leading-relaxed">
                  Casona colonial preservada con arcos de ladrillo, hierro forjado y suelo de época que transmiten calidez inmediata.
                </p>
              </div>
            </div>

            {/* Card 2: Salon, Beams & Books */}
            <div className="space-y-4 sm:pt-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#2e1d2b] group shadow-xl">
                <img
                  src="/src/assets/images/colonial_interior_salon_1790122038605.jpg"
                  alt="Interior de La Rosa Bar con vigas de madera, biblioteca de libros y mesas íntimas"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-4">
                  <div>
                    <span className="text-xs text-[#f5d5dd] font-medium block">
                      Salón Colonial & Biblioteca
                    </span>
                    <span className="text-[10px] text-[#e5a060]">
                      Vigas de madera & luz de velas
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#140c14] border border-[#271724] hover:border-emerald-500/50 rounded-2xl transition-all duration-300">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  <PawPrint className="w-3.5 h-3.5" />
                  <span>100% Pet-Friendly 🐾</span>
                </div>
                <p className="text-xs text-[#a997a4] font-light leading-relaxed">
                  Tu perro es siempre bienvenido en la casona: disponemos de espacio cómodo y agua fresca tanto en salón como en terraza.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights & Experience Column with Counter-Parallax */}
          <motion.div
            style={{ y: yParallaxRight }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="group p-5 bg-[#140c14] border border-[#2b1a27] rounded-2xl hover:border-[#c49758]/60 hover:bg-[#1a0e19] transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#251522] group-hover:bg-[#341b30] text-[#e58a9e] flex items-center justify-center transition-colors">
                  <Wine className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-white font-medium group-hover:text-[#e5a060] transition-colors">
                  Cócteles de Autor & La Rosa en Copa
                </h4>
              </div>
              <p className="text-xs text-[#b09ea9] leading-relaxed font-light">
                Coctelería botánica y de autor servida en cristalería fina labrada con infusión de rosas naturales, humo aromático y esencias cítricas.
              </p>
            </div>

            <div className="group p-5 bg-[#140c14] border border-[#2b1a27] rounded-2xl hover:border-[#c49758]/60 hover:bg-[#1a0e19] transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#251522] group-hover:bg-[#341b30] text-[#c49758] flex items-center justify-center transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-white font-medium group-hover:text-[#e5a060] transition-colors">
                  Terraza con Vista & Calentadores
                </h4>
              </div>
              <p className="text-xs text-[#b09ea9] leading-relaxed font-light">
                Asientos al aire libre bajo el cielo de los cerros orientales. Calentadores a gas que aseguran un ambiente cálido durante toda la noche.
              </p>
            </div>

            <div className="group p-5 bg-[#140c14] border border-[#2b1a27] rounded-2xl hover:border-[#c49758]/60 hover:bg-[#1a0e19] transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#251522] group-hover:bg-[#341b30] text-[#e58a9e] flex items-center justify-center transition-colors">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-white font-medium group-hover:text-[#e5a060] transition-colors">
                  Escena Cultural, Libros & Acústicos
                </h4>
              </div>
              <p className="text-xs text-[#b09ea9] leading-relaxed font-light">
                Biblioteca comunitaria con libros para acompañar un café de origen o una copa de vino, complementada con sesiones acústicas en vivo.
              </p>
            </div>

            {/* Quick action linking to map */}
            <div className="pt-2">
              <a
                href={RESTAURANT_DATA.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#c49758] hover:text-[#e5a060] transition-colors group"
              >
                <span>Explorar ubicación en La Candelaria</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
