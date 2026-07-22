import React, { useState } from 'react';
import { DOMAIN_SUBSECTIONS } from '../data';
import { Shield, ChevronRight, Activity, Globe, Scale, Users, FileCheck, Landmark, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SUBSECTION_ICONS: Record<string, React.ReactNode> = {
  infraestructura: <Landmark className="w-5 h-5" />,
  energia: <Globe className="w-5 h-5" />,
  integridad: <Shield className="w-5 h-5" />,
  defensa: <Activity className="w-5 h-5" />,
  deportivo: <Users className="w-5 h-5" />,
  apoyo: <HeartHandshake className="w-5 h-5" />,
};

export default function DominioView() {
  const [activeSub, setActiveSub] = useState<string>(DOMAIN_SUBSECTIONS[0].id);

  const currentSection = DOMAIN_SUBSECTIONS.find(sub => sub.id === activeSub) || DOMAIN_SUBSECTIONS[0];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Tab Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-gold/10 border border-accent-gold/20 rounded-full">
          <Shield className="w-4 h-4 text-accent-gold" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent-gold font-sans">
            Campos de Expertise Estratégica
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
          Áreas de Dominio
        </h2>
        <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
          Diseño e implementación de soluciones legales y técnicas para mitigar el riesgo, blindar la rentabilidad y consolidar su gobernanza corporativa.
        </p>
      </div>

      {/* Sub-Navigation (6 Subsections Tab System) */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/5 pb-6">
        {DOMAIN_SUBSECTIONS.map((sub) => {
          const isActive = sub.id === activeSub;
          return (
            <button
              key={sub.id}
              onClick={() => setActiveSub(sub.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                isActive
                  ? 'bg-accent-gold text-white border-accent-gold shadow-lg shadow-accent-gold/20'
                  : 'bg-white/5 text-zinc-400 border-white/5 hover:text-white hover:bg-white/10'
              }`}
            >
              {SUBSECTION_ICONS[sub.id]}
              <span className="whitespace-nowrap">{sub.title.split('. ')[1]}</span>
            </button>
          );
        })}
      </div>

      {/* Subsection Content Layout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Image and Intro (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              {/* Overlay with subtle gold hue */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
              <img
                src={currentSection.image}
                alt={currentSection.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Interactive badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20 space-y-2">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-accent-gold/20 text-accent-gold border border-accent-gold/30 text-xs font-bold uppercase tracking-widest font-sans">
                  Sostenibilidad & Globalización
                </div>
                <h3 className="text-xl font-bold text-white leading-tight font-sans">
                  {currentSection.title}
                </h3>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-gold font-sans">Enfoque Operativo</h4>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                {currentSection.tagline}
              </p>
            </div>
          </div>

          {/* Right Column: Specializations Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-left border-b border-white/5 pb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans">Disciplinas Incluidas</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentSection.items.map((item, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-accent-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/5 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider font-sans border-b border-white/5 pb-2 flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-accent-gold" />
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-zinc-400 leading-relaxed font-light font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
