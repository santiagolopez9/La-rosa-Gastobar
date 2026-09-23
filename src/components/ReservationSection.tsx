import { useState, useEffect } from 'react';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { Calendar, Clock, Users, PawPrint, CheckCircle2, Send, Phone } from 'lucide-react';

interface ReservationSectionProps {
  prefilledEvent?: string;
  prefilledOrder?: string;
}

export const ReservationSection = ({ prefilledEvent, prefilledOrder }: ReservationSectionProps) => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: todayStr,
    time: '7:30 PM',
    guests: 2,
    zone: 'Terraza al aire libre',
    withPet: false,
    specialNote: prefilledEvent ? `Evento: ${prefilledEvent}` : '',
  });

  const [confirmed, setConfirmed] = useState<{ id: string; data: typeof formData } | null>(null);

  useEffect(() => {
    if (prefilledEvent) {
      setFormData((prev) => ({
        ...prev,
        specialNote: `Evento: ${prefilledEvent}`,
      }));
    }
  }, [prefilledEvent]);

  useEffect(() => {
    if (prefilledOrder) {
      setFormData((prev) => ({
        ...prev,
        specialNote: prev.specialNote ? `${prev.specialNote} | Selección: ${prefilledOrder}` : `Selección previa: ${prefilledOrder}`,
      }));
    }
  }, [prefilledOrder]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const resId = 'ROSA-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmed({
      id: resId,
      data: { ...formData },
    });
  };

  const getWhatsAppUrl = () => {
    if (!confirmed) return '#';
    const d = confirmed.data;
    const msg = encodeURIComponent(
      `¡Hola La Rosa Bar 🌹! Deseo confirmar mi reserva en La Candelaria:\n` +
      `📌 Código: #${confirmed.id}\n` +
      `👤 Nombre: ${d.name}\n` +
      `📅 Fecha: ${d.date} a las ${d.time}\n` +
      `👥 Personas: ${d.guests}\n` +
      `🌿 Ambiente: ${d.zone}\n` +
      `🐾 Con Mascota: ${d.withPet ? 'Sí (Pet Friendly)' : 'No'}\n` +
      (d.specialNote ? `📝 Notas: ${d.specialNote}\n` : '') +
      `Quedo atento(a) a su confirmación. ¡Muchas gracias!`
    );
    return `https://wa.me/${RESTAURANT_DATA.phoneClean}?text=${msg}`;
  };

  return (
    <section id="reservas" className="py-20 bg-[#0d090d] border-t border-[#1f121d] text-[#f7f2ee]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-[11px] uppercase tracking-widest text-[#c49758] font-semibold mb-2">
            Reserva Directa
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#faf3ef] font-normal tracking-tight">
            Asegura tu mesa en La Rosa 🌹
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#baa7b4] font-light">
            Atención personalizada y confirmación inmediata vía WhatsApp oficial ({RESTAURANT_DATA.phone}).
          </p>
        </div>

        <div className="bg-[#130b13] border border-[#2d1a29] rounded-2xl p-6 sm:p-8 shadow-xl">
          {confirmed ? (
            <div className="space-y-6 text-center animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-950/70 border border-emerald-500/50 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-serif text-2xl text-white font-medium">
                  ¡Reserva Generada!
                </h3>
                <p className="text-xs text-[#a996a4] mt-1">
                  Código de mesa: <span className="font-mono text-[#c49758] font-bold">#{confirmed.id}</span>
                </p>
              </div>

              {/* Digital Pass Summary */}
              <div className="bg-[#1a0f19] border border-[#3b2234] rounded-xl p-5 text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between text-[#8f7c8d]">
                  <span>Comensal:</span>
                  <span className="text-white font-medium">{confirmed.data.name}</span>
                </div>
                <div className="flex justify-between text-[#8f7c8d]">
                  <span>Fecha & Hora:</span>
                  <span className="text-white font-medium">{confirmed.data.date} · {confirmed.data.time}</span>
                </div>
                <div className="flex justify-between text-[#8f7c8d]">
                  <span>Personas:</span>
                  <span className="text-white font-medium">{confirmed.data.guests} personas</span>
                </div>
                <div className="flex justify-between text-[#8f7c8d]">
                  <span>Zona:</span>
                  <span className="text-[#e58a9e] font-medium">{confirmed.data.zone}</span>
                </div>
                {confirmed.data.withPet && (
                  <div className="pt-2 border-t border-[#2e1a29] flex items-center gap-1.5 text-emerald-300">
                    <PawPrint className="w-3.5 h-3.5" />
                    <span>Mesa adaptada para mascota 🐾</span>
                  </div>
                )}
                {confirmed.data.specialNote && (
                  <div className="text-[11px] text-[#bda8b7] italic pt-1">
                    Nota: {confirmed.data.specialNote}
                  </div>
                )}
              </div>

              {/* Direct WhatsApp Confirmation */}
              <div className="max-w-md mx-auto pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase rounded-lg flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirmar por WhatsApp (+57 {RESTAURANT_DATA.phone})</span>
                </a>
                <button
                  onClick={() => setConfirmed(null)}
                  className="mt-3 text-xs text-[#8f7c8d] hover:text-white underline cursor-pointer"
                >
                  Editar o agendar otra mesa
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#b8a6b3] mb-1 font-medium">
                    Fecha
                  </label>
                  <input
                    type="date"
                    required
                    min={todayStr}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0c070c] border border-[#2c1a29] rounded-lg text-xs text-white focus:outline-none focus:border-[#c49758]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#b8a6b3] mb-1 font-medium">
                    Hora
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0c070c] border border-[#2c1a29] rounded-lg text-xs text-white focus:outline-none focus:border-[#c49758]"
                  >
                    <option value="4:30 PM">4:30 PM (Apertura)</option>
                    <option value="6:00 PM">6:00 PM (Atardecer en Terraza)</option>
                    <option value="7:30 PM">7:30 PM (Cena & Velas)</option>
                    <option value="9:00 PM">9:00 PM (Coctelería Nocturna)</option>
                    <option value="10:00 PM">10:00 PM (Late Drinks)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#b8a6b3] mb-1 font-medium">
                    Comensales
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-[#0c070c] border border-[#2c1a29] rounded-lg text-xs text-white focus:outline-none focus:border-[#c49758]"
                  >
                    <option value={1}>1 Persona</option>
                    <option value={2}>2 Personas (Pareja)</option>
                    <option value={3}>3 Personas</option>
                    <option value={4}>4 Personas</option>
                    <option value={6}>6 Personas</option>
                    <option value={8}>8+ Personas (Grupo)</option>
                  </select>
                </div>
              </div>

              {/* Zone buttons */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#b8a6b3] mb-1.5 font-medium">
                  Zona Preferida
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Terraza al aire libre',
                    'Salón colonial & biblioteca',
                    'Barra de cócteles',
                  ].map((z) => (
                    <button
                      type="button"
                      key={z}
                      onClick={() => setFormData({ ...formData, zone: z })}
                      className={`p-2.5 rounded-lg border text-xs text-left transition-all cursor-pointer ${
                        formData.zone === z
                          ? 'bg-[#231221] border-[#c49758] text-white font-medium'
                          : 'bg-[#0c070c] border-[#291826] text-[#8e7a89] hover:text-white'
                      }`}
                    >
                      {z}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#b8a6b3] mb-1 font-medium">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Santiago López"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0c070c] border border-[#2c1a29] rounded-lg text-xs text-white focus:outline-none focus:border-[#c49758]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#b8a6b3] mb-1 font-medium">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 320 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0c070c] border border-[#2c1a29] rounded-lg text-xs text-white focus:outline-none focus:border-[#c49758]"
                  />
                </div>
              </div>

              {/* Pet-friendly & note */}
              <div className="p-3 bg-[#170e17] border border-[#2c1a29] rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <PawPrint className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-[#cfbcc9]">¿Vienes con tu perro? (100% Pet-Friendly)</span>
                </div>
                <input
                  type="checkbox"
                  checked={formData.withPet}
                  onChange={(e) => setFormData({ ...formData, withPet: e.target.checked })}
                  className="w-4 h-4 accent-[#c49758] cursor-pointer"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#d99757] via-[#e5a060] to-[#c4874b] hover:brightness-110 text-[#090709] font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Generar Reserva Inmediata</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
