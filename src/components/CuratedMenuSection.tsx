import { useState } from 'react';
import { CURATED_MENU, MenuItem } from '../data/restaurantData';
import { Wine, UtensilsCrossed, Sparkles, Check, Send } from 'lucide-react';

interface CuratedMenuSectionProps {
  onReserveWithOrder: (orderSummary: string) => void;
}

export const CuratedMenuSection = ({ onReserveWithOrder }: CuratedMenuSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cocktails' | 'tapas' | 'platos' | 'postres'>('all');
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});

  const filteredItems = activeCategory === 'all'
    ? CURATED_MENU
    : CURATED_MENU.filter((item) => item.category === activeCategory);

  const toggleItemSelection = (item: MenuItem) => {
    setSelectedItems((prev) => {
      const current = prev[item.id] || 0;
      if (current > 0) {
        const copy = { ...prev };
        delete copy[item.id];
        return copy;
      }
      return { ...prev, [item.id]: 1 };
    });
  };

  const selectedList = Object.entries(selectedItems)
    .map(([id, qty]) => {
      const item = CURATED_MENU.find((i) => i.id === id);
      return item ? { ...item, qty } : null;
    })
    .filter(Boolean) as (MenuItem & { qty: number })[];

  const estimatedTotal = selectedList.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  const handleSendToReservation = () => {
    if (selectedList.length === 0) return;
    const summary = selectedList.map((i) => `${i.name} (${i.qty})`).join(', ');
    onReserveWithOrder(summary);
  };

  return (
    <section id="carta" className="py-20 bg-[#090709] text-[#f7f2ee]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-[#c49758] font-semibold mb-2">
              Carta & Coctelería
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf3ef] font-normal tracking-tight">
              Sabores & Brindis en La Rosa 🌹
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#baa8b4] font-light max-w-lg">
              Una propuesta gastronómica y de coctelería botánica diseñada para disfrutar despacio entre la calidez colonial de La Candelaria.
            </p>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Todo' },
              { id: 'cocktails', label: 'Cócteles de Autor' },
              { id: 'tapas', label: 'Tapas de Bar' },
              { id: 'platos', label: 'Platos' },
              { id: 'postres', label: 'Postre' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#c49758] text-[#090709] font-semibold shadow-md'
                    : 'bg-[#180f17] text-[#a997a3] border border-[#2f1c2b] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item) => {
            const isSelected = !!selectedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleItemSelection(item)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-start gap-4 ${
                  isSelected
                    ? 'bg-[#221320] border-[#c49758] shadow-lg shadow-[#c49758]/10'
                    : 'bg-[#120a12] border-[#261623] hover:border-[#3e2439]'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-serif text-base sm:text-lg text-white font-medium">
                      {item.name}
                    </h3>
                    {item.isSignature && (
                      <span className="px-2 py-0.5 rounded text-[10px] bg-[#3a1a27] text-[#f29ebb] border border-[#5d2a3e] uppercase tracking-wider font-semibold">
                        Insignia
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#a3919e] font-light leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <span className="text-[11px] text-[#c49758] font-mono font-medium">
                    ${item.price.toLocaleString('es-CO')} COP
                  </span>
                </div>

                <button
                  type="button"
                  aria-label={`Seleccionar ${item.name}`}
                  className={`w-7 h-7 shrink-0 rounded-full border flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-[#c49758] border-[#c49758] text-[#090709]'
                      : 'border-[#3f2538] text-[#7d6575] hover:border-[#c49758] hover:text-white'
                  }`}
                >
                  {isSelected ? <Check className="w-4 h-4 stroke-[3]" /> : <span className="text-xs">+</span>}
                </button>
              </div>
            );
          })}
        </div>

        {/* Floating Mini Bar Selector Strip (if user picked anything) */}
        {selectedList.length > 0 && (
          <div className="mt-8 p-4 bg-[#1a0f18] border border-[#c49758]/60 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#c49758] text-[#090709] flex items-center justify-center font-bold text-xs">
                {selectedList.length}
              </div>
              <div>
                <p className="text-xs font-semibold text-white">
                  Tu Selección para la Mesa: {selectedList.map((i) => i.name).join(', ')}
                </p>
                <p className="text-[11px] text-[#c49758] font-mono">
                  Consumo estimado: ${estimatedTotal.toLocaleString('es-CO')} COP (dentro del promedio habitual)
                </p>
              </div>
            </div>

            <button
              onClick={handleSendToReservation}
              className="w-full sm:w-auto px-4 py-2 bg-[#c49758] hover:bg-[#d6a869] text-[#090709] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Incluir en mi Reserva</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
