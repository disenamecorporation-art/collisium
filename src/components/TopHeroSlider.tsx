import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Anchor, Compass, Shield } from 'lucide-react';

interface Slide {
  image: string;
  category: string;
  icon: React.ReactNode;
  subtitle: string;
}

const SLIDES: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop',
    category: 'PETROLERA',
    icon: <Compass className="w-5 h-5 text-[#a46125]" />,
    subtitle: 'Energía & Recursos Estratégicos'
  },
  {
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1920&auto=format&fit=crop',
    category: 'MARÍTIMA',
    icon: <Anchor className="w-5 h-5 text-[#a46125]" />,
    subtitle: 'Logística & Puertos Globales'
  },
  {
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1920&auto=format&fit=crop',
    category: 'AERONÁUTICA',
    icon: <Shield className="w-5 h-5 text-[#a46125]" />,
    subtitle: 'Soberanía, Conectividad & Regulación'
  }
];

export default function TopHeroSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollDown = () => {
    const target = document.getElementById('welcome-content');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Slideshow with Zoom/Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.55, scale: 1.01 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={SLIDES[currentIdx].image}
              alt={SLIDES[currentIdx].category}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Elegant Overlays */}
        {/* Subtle radial gradient to emphasize center and edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070907] via-transparent to-black/80 pointer-events-none" />
        {/* Top bar shadow for header contrast */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-12">
        {/* Active category dynamic tag */}
        <div className="flex justify-center items-center gap-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              {SLIDES[currentIdx].icon}
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent-gold">
                ACTIVIDAD {SLIDES[currentIdx].category}
              </span>
              <span className="text-zinc-500">•</span>
              <span className="text-[11px] text-zinc-300 font-light tracking-wider">
                {SLIDES[currentIdx].subtitle}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Majestic Montserrat Thin Centerpiece Typography */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] tracking-[0.16em] uppercase text-white font-extralight leading-[1.4] max-w-5xl mx-auto select-none"
            style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 200 }}
          >
            Somos partner del{' '}
            <span className="font-light text-white text-shadow-glow">visionario</span>{' '}
            y del talento de{' '}
            <span className="text-[#a46125] font-light">élite</span> que transforma
            al país.
          </motion.h1>
        </div>

        {/* Elegant Animated Scroll / Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6 }}
          className="pt-6"
        >
          <button
            onClick={handleScrollDown}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:text-accent-gold transition-all duration-500 hover:border-accent-gold/40 hover:shadow-[0_0_35px_rgba(164,97,37,0.25)] cursor-pointer overflow-hidden"
          >
            {/* Slide glow background effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            <span className="relative z-10">Explorar Alianza de Alto Nivel</span>
            <ChevronDown className="w-4 h-4 text-accent-gold relative z-10 transition-transform duration-500 group-hover:translate-y-1" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Slide Indicator Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`w-12 h-1 rounded-full transition-all duration-500 cursor-pointer ${
              idx === currentIdx ? 'bg-accent-gold w-16' : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
