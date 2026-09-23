import { useState } from 'react';
import { REAL_GOOGLE_REVIEWS, RESTAURANT_DATA, GoogleReview } from '../data/restaurantData';
import { Star, MessageSquare, ExternalLink, ThumbsUp, Plus, Check } from 'lucide-react';

export const RealReviewsSection = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>(() => {
    const saved = localStorage.getItem('larosa_user_reviews');
    if (saved) {
      try {
        return [...JSON.parse(saved), ...REAL_GOOGLE_REVIEWS];
      } catch {
        return REAL_GOOGLE_REVIEWS;
      }
    }
    return REAL_GOOGLE_REVIEWS;
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newSpend, setNewSpend] = useState('$40,000-60,000');
  const [newRating, setNewRating] = useState(5);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newRev: GoogleReview = {
      id: 'local-' + Date.now(),
      author: newAuthor.trim(),
      badge: 'Opinión reciente',
      rating: newRating,
      timeAgo: 'Hace un momento',
      spend: newSpend,
      comment: newComment.trim(),
      likes: 1,
    };

    const updated = [newRev, ...reviews];
    setReviews(updated);
    const customOnly = updated.filter((r) => r.id.startsWith('local-'));
    localStorage.setItem('larosa_user_reviews', JSON.stringify(customOnly));

    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowAddModal(false);
      setNewAuthor('');
      setNewComment('');
    }, 1500);
  };

  return (
    <section id="opiniones" className="py-20 bg-[#090709] border-t border-[#21141e] text-[#f7f2ee]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header with Google Maps 5.0 score badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-[#c49758] font-semibold mb-2">
              Google Maps · Opiniones Verificadas
            </p>
            <div className="flex items-center gap-3">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf3ef] font-normal tracking-tight">
                Calificación 5.0 ⭐
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#1d121c] border border-[#3c2235] text-[#e5a060]">
                {RESTAURANT_DATA.reviewsCount} opiniones
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[#bcaab6] font-light max-w-lg">
              Reseñas reales de quienes han vivido la magia de La Rosa Bar en La Candelaria.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="px-3.5 py-2 bg-[#1b1019] hover:bg-[#281625] border border-[#3a2233] text-xs text-[#eed5e0] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-[#e58a9e]" />
              <span>Dejar mi opinión</span>
            </button>

            <a
              href={RESTAURANT_DATA.socials.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-[#1b1019] hover:bg-[#281625] border border-[#3a2233] text-xs text-[#eed5e0] rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Ver en Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#c49758]" />
            </a>
          </div>
        </div>

        {/* Real Reviews Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-4 bg-[#120a12] border border-[#251522] rounded-xl flex flex-col justify-between hover:border-[#381f33] transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-xs font-semibold text-white">
                      {rev.author}
                    </h3>
                    <p className="text-[10px] text-[#8e7a88]">{rev.badge || 'Comensal'}</p>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#d0bfcc] leading-relaxed font-light mb-3">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-2.5 border-t border-[#1e101b] flex items-center justify-between text-[11px] text-[#7d6877]">
                <span className="font-mono text-[#c49758]">{rev.spend}</span>
                <span>{rev.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Add Review Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#140c14] border border-[#382133] rounded-2xl max-w-md w-full p-6 shadow-2xl animate-fadeIn">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-serif text-xl text-white font-medium">
                  Calificar La Rosa Bar 🌹
                </h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-[#9e8b98] hover:text-white text-xs cursor-pointer"
                >
                  ✕ Cerrar
                </button>
              </div>

              {submittedMessage ? (
                <div className="py-8 text-center text-emerald-400 flex flex-col items-center gap-2">
                  <Check className="w-8 h-8" />
                  <p className="text-xs font-semibold">¡Gracias por tu opinión!</p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#baa7b4] mb-1 font-medium">
                      Tu Nombre
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Camila Vargas"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full px-3 py-2 bg-[#0d070d] border border-[#301b2a] rounded-lg text-xs text-white focus:outline-none focus:border-[#c49758]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#baa7b4] mb-1 font-medium">
                        Calificación
                      </label>
                      <select
                        value={newRating}
                        onChange={(e) => setNewRating(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-[#0d070d] border border-[#301b2a] rounded-lg text-xs text-white focus:outline-none focus:border-[#c49758]"
                      >
                        <option value={5}>5 Estrellas (Excelente)</option>
                        <option value={4}>4 Estrellas</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#baa7b4] mb-1 font-medium">
                        Gasto aproximado
                      </label>
                      <select
                        value={newSpend}
                        onChange={(e) => setNewSpend(e.target.value)}
                        className="w-full px-3 py-2 bg-[#0d070d] border border-[#301b2a] rounded-lg text-xs text-white focus:outline-none focus:border-[#c49758]"
                      >
                        <option value="$40,000-60,000">$40,000 - $60,000</option>
                        <option value="$60,000-80,000">$60,000 - $80,000</option>
                        <option value="$80,000+">$80,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#baa7b4] mb-1 font-medium">
                      Tu experiencia o comentario
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="¿Qué cóctel probaste? ¿Qué tal la vista o el ambiente colonial?"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full px-3 py-2 bg-[#0d070d] border border-[#301b2a] rounded-lg text-xs text-white focus:outline-none focus:border-[#c49758] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#c49758] hover:bg-[#d4a465] text-[#090709] font-semibold text-xs tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
                  >
                    Publicar Opinión
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
