import React from 'react';
import { ShieldCheck, ArrowRight, Award, Globe, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenModal: (type: 'desafio' | 'induccion') => void;
  onNavigateToTab: (tab: 'gobernanza' | 'consejeros' | 'dominios') => void;
}

export default function Hero({ onOpenModal, onNavigateToTab }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-[#020402]">
      {/* Dynamic Ambient Background Shapes (Extreme Blurred Orbs) */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-accent-gold/15 blur-[120px] mix-blend-screen pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-accent-olive/20 blur-[130px] mix-blend-screen pointer-events-none animate-pulse" style={{ animationDuration: '11s' }} />
      <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-[#1c2c10]/30 blur-[100px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial Layout */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-accent-gold" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 font-sans">
              Consejo Legal & Estrategia Corporativa de Élite
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans"
          >
            Excelencia Jurídica sin <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-yellow-600 to-accent-olive">Límites Burocráticos</span>
          </motion.h1>

          {/* Paragraph Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed font-light font-sans"
          >
            Trascendemos el modelo de bufete convencional. Sin burocracia rígida ni perfiles junior, aportamos asesoría directa con consejeros senior de élite.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <button
              onClick={() => onOpenModal('desafio')}
              className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-white bg-accent-gold hover:bg-[#b56e2f] shadow-lg shadow-accent-gold/20 flex items-center justify-center gap-2 transition-all cursor-pointer group"
            >
              Evaluar Desafío
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onOpenModal('induccion')}
              className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-white bg-accent-olive/40 hover:bg-accent-olive/60 border border-accent-olive/60 flex items-center justify-center gap-2 transition-all cursor-pointer group"
            >
              Conozca el Modelo
              <CheckCircle2 className="w-4 h-4 text-[#9cb18c]" />
            </button>
          </motion.div>

          {/* Secondary Quick Navigation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-500 font-semibold uppercase tracking-wider"
          >
            <span>Explorar:</span>
            <button 
              onClick={() => onNavigateToTab('gobernanza')} 
              className="text-zinc-400 hover:text-accent-gold transition-colors underline decoration-accent-gold/30 underline-offset-4 cursor-pointer"
            >
              Gobernanza
            </button>
            <span className="text-zinc-700">•</span>
            <button 
              onClick={() => onNavigateToTab('consejeros')} 
              className="text-zinc-400 hover:text-accent-gold transition-colors underline decoration-accent-gold/30 underline-offset-4 cursor-pointer"
            >
              Nuestros Consejeros
            </button>
            <span className="text-zinc-700">•</span>
            <button 
              onClick={() => onNavigateToTab('dominios')} 
              className="text-zinc-400 hover:text-accent-gold transition-colors underline decoration-accent-gold/30 underline-offset-4 cursor-pointer"
            >
              Áreas de Dominio
            </button>
          </motion.div>
        </div>

        {/* Right Side Glass-Box Showcase */}
        <div className="lg:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full rounded-2xl glass-card p-6 md:p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[380px]"
          >
            {/* Gloss Highlight Overlay */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-sans">
                  Consejo de Actuación Directa
                </span>
              </div>

              <blockquote className="text-zinc-200 text-sm md:text-base font-light font-sans italic leading-relaxed mb-6">
                "Soluciones quirúrgicas para blindar sus activos más críticos."
              </blockquote>
            </div>
 
            <div className="border-t border-white/5 pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center text-accent-gold text-[10px] font-bold shrink-0 mt-0.5">✓</div>
                <p className="text-xs text-zinc-300 font-sans leading-normal">
                  <strong>Capital Senior:</strong> Relación directa y exclusiva con el especialista asignado.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#47543a]/20 border border-[#47543a]/40 flex items-center justify-center text-[#9cb18c] text-[10px] font-bold shrink-0 mt-0.5">✓</div>
                <p className="text-xs text-zinc-300 font-sans leading-normal">
                  <strong>Mitigación Activa:</strong> Diagnóstico preventivo in-situ de alta dirección.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Floating Badges */}

          <div className="absolute -top-8 -right-4 p-4 rounded-xl glass-card border border-white/10 shadow-xl hidden md:flex items-center gap-3 max-w-[210px] animate-bounce" style={{ animationDuration: '5s' }}>
            <div className="p-2.5 rounded-lg bg-[#47543a]/20 text-[#9cb18c] border border-[#47543a]/40">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Capilaridad</p>
              <p className="text-[10px] text-zinc-400 font-medium">25 Ciudades Activas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Statistics Cards (Bottom Row) */}
      <div className="absolute bottom-4 left-0 right-0 hidden md:block">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="p-4 rounded-xl glass-container border border-white/5 flex items-center gap-4">
              <div className="p-2 px-3 rounded-lg bg-accent-gold/10 text-accent-gold border border-accent-gold/20 font-sans text-xl font-extrabold">
                30+
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-widest">Años de Trayectoria</p>
                <p className="text-xs text-zinc-400 font-light">Sectores público, privado y académico</p>
              </div>
            </div>
            <div className="p-4 rounded-xl glass-container border border-white/5 flex items-center gap-4">
              <div className="p-2 px-3 rounded-lg bg-accent-gold/10 text-[#9cb18c] border border-accent-gold/20 font-sans text-xl font-extrabold">
                100%
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-widest">Criterio Senior</p>
                <p className="text-xs text-zinc-400 font-light">Cero intermediación o perfiles junior</p>
              </div>
            </div>
            <div className="p-4 rounded-xl glass-container border border-white/5 flex items-center gap-4">
              <div className="p-2 px-3 rounded-lg bg-accent-gold/10 text-accent-gold border border-accent-gold/20 font-sans text-xl font-extrabold">
                25
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-widest">Nodos Nacionales</p>
                <p className="text-xs text-zinc-400 font-light">Presencia unificada bajo un solo mando</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
