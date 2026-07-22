import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface LayeredBannerProps {
  onOpenModal: (type: 'desafio' | 'induccion') => void;
}

export default function LayeredBanner({ onOpenModal }: LayeredBannerProps) {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#020402] border-y border-white/5 my-12">
      {/* Background Image Layer with Zoom/Ken Burns Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1.02, 1.12, 1.02] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full bg-cover bg-center opacity-25 filter grayscale"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
      </div>

      {/* Multiple Layered Black Gradients for deep, majestic contrast */}
      {/* Layer 1: Radial black mask */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020402_90%)] z-10 pointer-events-none" />
      
      {/* Layer 2: Vertical black linear gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none" />
      
      {/* Layer 3: Side linear gradients for a panoramic framed look */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Decorative Golden Ambient Ray */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-gold/10 blur-[150px] rounded-full pointer-events-none z-10" />

      {/* Content Layer */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center space-y-8">
        
        {/* Tiny Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2"
        >
          <span className="w-8 h-[1px] bg-accent-gold/50" />
          <span className="text-[10px] font-light uppercase tracking-[0.4em] text-accent-gold font-sans">
            Garantía de Absoluta Reserva
          </span>
          <span className="w-8 h-[1px] bg-accent-gold/50" />
        </motion.div>

        {/* Big Thin Title in Montserrat */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.18em] text-white uppercase leading-[1.25] font-sans"
        >
          Soberanía Legal <br className="hidden md:inline" />
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-accent-gold/90">
            en Escenarios Críticos
          </span>
        </motion.h2>

        {/* Thin Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-zinc-400 text-xs md:text-sm font-light tracking-[0.15em] leading-relaxed max-w-2xl font-sans"
        >
          Protegemos la integridad corporativa y los activos estratégicos de corporaciones y figuras de élite bajo una estricta arquitectura de confidencialidad encriptada.
        </motion.p>

        {/* CTA Button in Thin Montserrat Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4"
        >
          <button
            onClick={() => onOpenModal('desafio')}
            className="group relative px-10 py-5 overflow-hidden border border-white/20 hover:border-accent-gold rounded-none bg-black/40 backdrop-blur-md text-white text-[11px] font-light tracking-[0.3em] uppercase transition-all duration-500 hover:scale-105 cursor-pointer"
          >
            {/* Hover Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/20 to-accent-olive/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <span className="relative z-10 flex items-center gap-3">
              Activar Consulta Directa
              <ArrowUpRight className="w-4 h-4 text-accent-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Framing Bottom Line */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
    </section>
  );
}
