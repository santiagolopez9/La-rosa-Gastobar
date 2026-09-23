import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CURATED_MENU, MenuItem } from '../data/restaurantData';
import { Sparkles, Plus, Check, ChevronLeft, ChevronRight, Flame } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface DynamicMenuSliderProps {
  onReserveWithOrder: (orderSummary: string) => void;
}

export const DynamicMenuSlider = ({ onReserveWithOrder }: DynamicMenuSliderProps) => {
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});
  const [activeFilter, setActiveFilter] = useState<'all' | 'cocktails' | 'tapas' | 'platos'>('all');

  const filteredMenu = activeFilter === 'all'
    ? CURATED_MENU
    : CURATED_MENU.filter((item) => item.category === activeFilter);

  const toggleItemSelection = (item: MenuItem) => {
    setSelectedItems((prev) => {
      const next = { ...prev };
      if (next[item.id]) {
        delete next[item.id];
      } else {
        next[item.id] = 1;
      }
      return next;
    });
  };

  const selectedList = Object.entries(selectedItems)
    .map(([id, qty]) => {
      const found = CURATED_MENU.find((i) => i.id === id);
      return found ? { ...found, qty } : null;
    })
    .filter(Boolean) as (MenuItem & { qty: number })[];

  const handleSendToReservation = () => {
    if (selectedList.length === 0) return;
    const summary = selectedList.map((i) => `${i.name} (x${i.qty})`).join(', ');
    onReserveWithOrder(summary);
  };

  return (
    <section id="carta" className="py-24 bg-[#070507] text-[#f7f2ee] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#942940]/10 via-[#c49758]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#180f17] border border-[#3b2135] text-[#c49758] text-[11px] uppercase tracking-widest font-semibold mb-3">
              <Sparkles className="w-3 h-3 text-[#e5a060]" />
              <span>Experiencia Culinaria & Mixología</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#faf3ef] font-normal tracking-tight">
              Platos Estrella & <span className="italic text-[#e5a060]">Coctelería Viva</span> 🌹
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#baa7b5] font-light max-w-xl">
              Desliza por nuestra carta de autor. Cada creación está pensada para ser el centro de la mesa en una noche de velas, música y conversación.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Todo el Menú' },
              { id: 'cocktails', label: '🍸 Coctelería' },
              { id: 'tapas', label: '🥖 Tapas de Bar' },
              { id: 'platos', label: '🥩 Platos Fuertes' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-4 py-2 text-xs rounded-full transition-all duration-300 cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-gradient-to-r from-[#c49758] to-[#e5a060] text-[#070507] font-semibold shadow-md shadow-[#c49758]/20 scale-102'
                    : 'bg-[#140b13] border border-[#2b1727] text-[#a997a3] hover:text-white hover:border-[#4b2742]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Swiper Carousel with centerSlides: true & Autoplay 7.5s */}
        <div className="relative menu-swiper-wrapper">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            centeredSlides={true}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 7500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'custom-swiper-bullet',
              bulletActiveClass: 'custom-swiper-bullet-active',
            }}
            navigation={{
              nextEl: '.menu-swiper-next',
              prevEl: '.menu-swiper-prev',
            }}
            spaceBetween={24}
            breakpoints={{
              320: {
                slidesPerView: 1.15,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1.6,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 3.1,
                spaceBetween: 32,
              },
            }}
            className="pb-16 pt-4"
          >
            {filteredMenu.map((item) => {
              const isSelected = !!selectedItems[item.id];
              return (
                <SwiperSlide key={item.id} className="h-auto">
                  <div
                    className={`h-full group relative flex flex-col justify-between rounded-2xl border transition-all duration-500 overflow-hidden bg-gradient-to-b from-[#130b13] to-[#0c070c] ${
                      isSelected
                        ? 'border-[#c49758] shadow-[0_0_35px_rgba(196,151,88,0.25)]'
                        : 'border-[#261523] hover:border-[#4a2842] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                    }`}
                  >
                    {/* Top Image with subtle hover zoom */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#070507]">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#150c15] text-[#4d3246]">
                          <Flame className="w-10 h-10" />
                        </div>
                      )}
                      
                      {/* Gradient overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#130b13] via-transparent to-black/30" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#e5a060] border border-[#c49758]/40">
                          {item.tag}
                        </span>
                        {item.isSignature && (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#581524]/80 backdrop-blur-md text-[#ff9eb2] border border-[#ff537b]/40 flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" />
                            <span>Insignia</span>
                          </span>
                        )}
                      </div>

                      {/* Price on image bottom right */}
                      <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-[#3d2438] text-xs font-mono font-medium text-[#c49758]">
                        ${item.price.toLocaleString('es-CO')} COP
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-lg text-white font-medium mb-1.5 group-hover:text-[#e5a060] transition-colors">
                          {item.name}
                        </h3>

                        <p className="text-xs text-[#a3919e] font-light leading-relaxed mb-3">
                          {item.description}
                        </p>

                        {/* Tasting note / sensory hint */}
                        {item.tastingNote && (
                          <div className="p-2.5 rounded-lg bg-[#1a0f19] border border-[#2b1626] text-[11px] text-[#baa7b5] flex items-start gap-2 mb-4">
                            <span className="text-[#c49758] font-serif italic text-xs">Nota:</span>
                            <span className="font-light">{item.tastingNote}</span>
                          </div>
                        )}
                      </div>

                      {/* Action Bar */}
                      <div className="pt-3 border-t border-[#20121e] flex items-center justify-between">
                        <span className="text-[11px] text-[#786473]">
                          {isSelected ? 'Agregado a tu selección' : 'Tocar para seleccionar'}
                        </span>

                        <button
                          type="button"
                          onClick={() => toggleItemSelection(item)}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? 'bg-[#c49758] text-[#070507] font-semibold shadow-md'
                              : 'bg-[#1e101b] hover:bg-[#2e1729] text-[#e0cfdb] border border-[#3e2337]'
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                              <span>Elegido</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5 text-[#c49758]" />
                              <span>Elegir</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button
            className="menu-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-20 w-10 h-10 rounded-full bg-[#170e17]/90 hover:bg-[#281525] border border-[#3d2438] text-white flex items-center justify-center shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-[#c49758] cursor-pointer"
            aria-label="Plato anterior"
          >
            <ChevronLeft className="w-5 h-5 text-[#c49758]" />
          </button>
          <button
            className="menu-swiper-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-20 w-10 h-10 rounded-full bg-[#170e17]/90 hover:bg-[#281525] border border-[#3d2438] text-white flex items-center justify-center shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-[#c49758] cursor-pointer"
            aria-label="Siguiente plato"
          >
            <ChevronRight className="w-5 h-5 text-[#c49758]" />
          </button>
        </div>

        {/* Floating Action Strip when items are selected */}
        {selectedList.length > 0 && (
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#1c0f1b] via-[#241322] to-[#1a0e19] border border-[#c49758]/60 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#c49758] to-[#e5a060] text-[#070507] font-bold text-xs flex items-center justify-center shadow-md">
                {selectedList.length}
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  Selección para tu mesa: <span className="font-normal text-[#cfbecb]">{selectedList.map((i) => i.name).join(', ')}</span>
                </p>
                <p className="text-[11px] text-[#c49758] font-mono mt-0.5">
                  Total estimado: ${selectedList.reduce((acc, curr) => acc + curr.price * curr.qty, 0).toLocaleString('es-CO')} COP
                </p>
              </div>
            </div>

            <button
              onClick={handleSendToReservation}
              className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#c49758] via-[#e5a060] to-[#c4874b] hover:brightness-110 text-[#070507] text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Confirmar Selección en Reserva
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
