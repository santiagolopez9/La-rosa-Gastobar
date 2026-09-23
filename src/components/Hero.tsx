import { useState, useRef, useEffect } from 'react';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { Calendar, Utensils, Star, MapPin, Sparkles, Instagram, Clock, Play, Pause, Video, Image as ImageIcon } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero = ({ onOpenReservation }: HeroProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // Strict muted settings to guarantee browser autoplay compliance
    vid.muted = true;
    vid.defaultMuted = true;

    const handleVideoActive = () => {
      setVideoLoaded(true);
    };

    vid.addEventListener('loadeddata', handleVideoActive);
    vid.addEventListener('canplay', handleVideoActive);
    vid.addEventListener('play', handleVideoActive);

    if (vid.readyState >= 2) {
      setVideoLoaded(true);
    }

    vid.play().catch(() => {
      // Autoplay fallback if browser requires user gesture
    });

    return () => {
      vid.removeEventListener('loadeddata', handleVideoActive);
      vid.removeEventListener('canplay', handleVideoActive);
      vid.removeEventListener('play', handleVideoActive);
    };
  }, [showVideo]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#070507]">
      {/* 1. Video & Image Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Fallback & Complementary Image: Historic Blue Facade */}
        <img
          src="/src/assets/images/candelaria_blue_facade_1790122002690.jpg"
          alt="Casona colonial de La Rosa Bar en La Candelaria, Bogotá"
          className={`w-full h-full object-cover object-center scale-105 transition-opacity duration-1000 ${
            showVideo && videoLoaded ? 'opacity-30' : 'opacity-100'
          }`}
        />

        {/* Local Fast-Streaming Atmospheric Gastrobar Loop Video */}
        {showVideo && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/src/assets/images/candelaria_blue_facade_1790122002690.jpg"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 scale-105 ${
              videoLoaded ? 'opacity-75' : 'opacity-40'
            }`}
          >
            <source src="/videos/la_rosa_hero_video.mp4" type="video/mp4" />
          </video>
        )}

        {/* Dark Cinematic Mask (Overlay) for high contrast and luxury mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070507] via-[#070507]/80 to-[#070507]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial at-center from-transparent via-[#070507]/50 to-[#070507]/95 pointer-events-none" />

        {/* Warm Golden/Wine Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#c49758]/12 via-[#942940]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        {/* Authentic Gold Emblem Badge */}
        <div className="mb-6 flex justify-center">
          <div className="relative group cursor-pointer">
            <img
              src="/src/assets/images/la_rosa_emblem_gold_1790122014403.jpg"
              alt="Logo oficial La Rosa Bar con corona y rosa en copa"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#c49758]/80 shadow-[0_0_30px_rgba(196,151,88,0.3)] group-hover:scale-105 group-hover:shadow-[0_0_45px_rgba(196,151,88,0.55)] transition-all duration-500"
            />
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#170e16] border border-[#c49758]/70 rounded-full text-[10px] text-[#e5b376] uppercase tracking-widest font-semibold whitespace-nowrap shadow-md">
              La Candelaria
            </div>
          </div>
        </div>

        {/* Verified Google Maps Rating Badge */}
        <div className="inline-flex items-center gap-2 text-xs text-[#ded1da] mb-5 bg-[#1b111a]/85 backdrop-blur-md border border-[#44253a] px-4 py-1.5 rounded-full shadow-lg hover:border-[#c49758]/60 transition-colors">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="font-bold text-white">5.0</span>
          <span className="text-[#6e5967]">·</span>
          <span>{RESTAURANT_DATA.reviewsCount} opiniones en Google Maps</span>
          <span className="text-[#6e5967]">·</span>
          <span className="text-[#e5a060] font-medium">{RESTAURANT_DATA.priceRange}</span>
        </div>

        {/* Official Headline & Slogan */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#fdf8f4] tracking-tight leading-[1.08] mb-3">
          LA ROSA <span className="italic text-[#e5a060]">BAR</span> 🌹
        </h1>

        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#c49758] font-medium mb-6">
          "{RESTAURANT_DATA.slogan}"
        </p>

        <p className="font-sans text-sm sm:text-base text-[#d2c0ce] max-w-xl mx-auto mb-8 font-light leading-relaxed">
          {RESTAURANT_DATA.description} Coctelería de autor, casona colonial, terraza al aire libre, libros y música en vivo en Cra. 3 Este #8-61.
        </p>

        {/* Highlights Bar */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs text-[#baa7b4] mb-9">
          <span className="flex items-center gap-1.5">
            <span className="text-[#e5a060]">🏛️</span> Casona Colonial
          </span>
          <span className="text-[#4d3646]">/</span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#e5a060]">✨</span> Terraza con Calentadores
          </span>
          <span className="text-[#4d3646]">/</span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#e58a9e]">🍸</span> Cóctel La Rosa Insignia
          </span>
          <span className="text-[#4d3646]">/</span>
          <span className="flex items-center gap-1.5 text-emerald-300">
            <span>🐾</span> 100% Pet-Friendly
          </span>
        </div>

        {/* Action Buttons with Shimmer & Micro-interactions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenReservation}
            className="btn-shimmer w-full sm:w-auto px-8 py-3.5 text-xs tracking-wider uppercase font-semibold text-[#070507] bg-gradient-to-r from-[#d99757] via-[#e5a060] to-[#c4874b] hover:brightness-110 rounded-xl shadow-xl shadow-[#c49758]/25 transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Reservar Mesa</span>
          </button>

          <a
            href="#carta"
            className="btn-shimmer w-full sm:w-auto px-8 py-3.5 text-xs tracking-wider uppercase font-semibold text-[#f5dbe3] bg-[#1a1018]/90 hover:bg-[#281725] border border-[#4a2e42] hover:border-[#c49758]/70 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(229,160,96,0.15)]"
          >
            <Utensils className="w-4 h-4 text-[#e5a060]" />
            <span>Ver Carta Interactiva</span>
          </a>

          <a
            href={RESTAURANT_DATA.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3.5 text-xs tracking-wider uppercase font-medium text-[#cbb6c4] hover:text-white bg-[#120a12]/80 hover:bg-[#1f101d] border border-[#301b2a] hover:border-[#4d2843] rounded-xl transition-all flex items-center justify-center gap-1.5"
          >
            <Instagram className="w-4 h-4 text-[#e58a9e]" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Address and schedule live badge */}
        <div className="mt-12 pt-6 border-t border-[#251421]/90 flex flex-wrap justify-center items-center gap-4 text-[11px] text-[#9a8594]">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#c49758]" />
            <span>{RESTAURANT_DATA.address}</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-300 font-medium">Abierto hoy hasta las 11:30 p.m.</span>
          </div>
        </div>
      </div>

      {/* Floating Video Control Pill with Status Dot */}
      <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 p-1.5 px-3 rounded-full bg-black/75 backdrop-blur-md border border-[#c49758]/40 text-xs text-[#baa7b4] shadow-2xl">
        <div className="flex items-center gap-1.5 pr-2 border-r border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] text-[#f7f2ee] font-medium hidden sm:inline">
            {showVideo ? 'Video Ambiente' : 'Foto Casona'}
          </span>
        </div>

        <button
          onClick={() => setShowVideo(!showVideo)}
          className="p-1 hover:bg-white/10 rounded-full text-[11px] flex items-center gap-1 transition-colors cursor-pointer text-[#e5a060]"
          title={showVideo ? 'Ver foto de la casona' : 'Activar video de coctelería'}
        >
          {showVideo ? <ImageIcon className="w-3.5 h-3.5" /> : <Video className="w-3.5 h-3.5" />}
        </button>

        {showVideo && (
          <button
            onClick={togglePlay}
            className="p-1 hover:bg-white/10 rounded-full text-[#c49758] transition-colors cursor-pointer"
            title={isPlaying ? 'Pausar video' : 'Reproducir video'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          </button>
        )}
      </div>
    </section>
  );
};
