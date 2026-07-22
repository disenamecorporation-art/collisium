import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Zap, EyeOff, Sparkles } from 'lucide-react';

interface AestheticCtasProps {
  onOpenModal: (type: 'desafio' | 'induccion') => void;
  onNavigateToTab: (tab: 'gobernanza' | 'consejeros' | 'dominios' | 'contacto') => void;
}

export default function AestheticCtas({ onOpenModal, onNavigateToTab }: AestheticCtasProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Editorial Title */}
      <div className="text-left border-b border-white/5 pb-4 max-w-2xl">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#a46125] block">
          ACCESO DIRECTO A SERVICIOS DE ÉLITE
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white font-sans mt-1">
          Puertas de Enlace de Seguridad Corporativa
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* First CTA Block: Alianza y Protección Regional */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative rounded-2xl overflow-hidden p-8 md:p-12 border border-white/5 bg-gradient-to-r from-black via-[#040504] to-[#0c0f0c] hover:border-accent-gold/40 transition-all duration-500 shadow-2xl flex flex-col justify-between min-h-[380px]"
        >
          {/* Subtle moving light glow background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-gold/5 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-1000" />
          
          {/* Subtle side glowing lines */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-gold via-transparent to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="space-y-6 relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20">
              <Sparkles className="w-4 h-4 text-accent-gold animate-spin" style={{ animationDuration: '4s' }} />
              <span className="text-[9px] font-bold uppercase tracking-widest text-accent-gold">
                DIAGNÓSTICO IN SITU DE ALTO RANGO
              </span>
            </div>

            <h3 className="text-2xl md:text-3.5xl tracking-wide uppercase text-white font-extralight leading-tight" style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 200 }}>
              ALIANZA ESTRATÉGICA <span className="font-light text-accent-gold">PRESENCIAL</span> PARA CONGLOMERADOS.
            </h3>

            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed max-w-lg">
              Despliegue inmediato de consejeros senior en su sede para evaluar y diagnosticar el blindaje estratégico de su organización.
            </p>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-3 self-start">
              <Zap className="w-5 h-5 text-accent-gold" />
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-sans font-bold">
                Respuesta en menos de 24 Horas
              </span>
            </div>
            
            <button
              onClick={() => onOpenModal('desafio')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest bg-accent-gold text-white hover:bg-[#b56e2f] hover:shadow-[0_0_20px_rgba(164,97,37,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:scale-[1.02]"
            >
              Evaluar Desafío Activo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Second CTA Block: Protocolos de Confidencialidad Extendida */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative rounded-2xl overflow-hidden p-8 md:p-12 border border-white/5 bg-gradient-to-l from-black via-[#040504] to-[#0a0c0a] hover:border-[#47543a]/60 transition-all duration-500 shadow-2xl flex flex-col justify-between min-h-[380px]"
        >
          {/* Subtle moving light glow background */}
          <div className="absolute inset-0 bg-gradient-to-tl from-[#47543a]/10 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-1000" />
          
          {/* Subtle side glowing lines */}
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#9cb18c] via-transparent to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="space-y-6 relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#47543a]/30 border border-[#47543a]/50">
              <EyeOff className="w-4 h-4 text-[#9cb18c]" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#9cb18c]">
                BLINDAJE DE ALTA CONFIANZA
              </span>
            </div>

            <h3 className="text-2xl md:text-3.5xl tracking-wide uppercase text-white font-extralight leading-tight" style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 200 }}>
              PROTOCOLOS DE <span className="font-light text-[#9cb18c]">PRIVACIDAD</span> Y CONTROL TOTAL.
            </h3>

            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed max-w-lg">
              Canales encriptados y asesoramiento anónimo para transacciones, reestructuraciones corporativas y protección de activos de alto nivel.
            </p>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-3 self-start">
              <ShieldCheck className="w-5 h-5 text-[#9cb18c]" />
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-sans font-bold">
                Confidencialidad Absoluta de Datos
              </span>
            </div>
            
            <button
              onClick={() => onNavigateToTab('contacto')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest border border-white/10 text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:scale-[1.02]"
            >
              Contactar Directamente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
