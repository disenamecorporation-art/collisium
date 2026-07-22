import React, { useState } from 'react';
import { ADVISORS, TEAM_IMAGES } from '../data';
import { Award, GraduationCap, Briefcase, Sparkles, BookOpen, ChevronDown, ChevronUp, Users, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Team() {
  const [expandedAdvisor, setExpandedAdvisor] = useState<string | null>(null);

  const toggleAdvisor = (id: string) => {
    if (expandedAdvisor === id) {
      setExpandedAdvisor(null);
    } else {
      setExpandedAdvisor(id);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#47543a]/25 border border-[#47543a]/40 rounded-full">
          <GraduationCap className="w-4 h-4 text-[#9cb18c]" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#9cb18c] font-sans">
            Capital Intelectual de Élite
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
          Los Consejeros
        </h2>
        <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
          Un cuerpo multidisciplinario con sólida formación de vanguardia, experiencia multifocal en alta gerencia y liderazgo académico.
        </p>
      </div>

      {/* 1. Prestigious Gallery (No Names - Just Photos beautifully arranged) */}
      <div className="space-y-6">
        <div className="text-left border-b border-white/5 pb-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-accent-gold flex items-center gap-2">
            <Users className="w-4 h-4" />
            Integrantes del Consejo de Élite
          </h3>
          <p className="text-[11px] text-zinc-500 font-sans mt-1">Garantía de rigor y especialización senior directa.</p>
        </div>

        {/* Bento/Masonry Grid of Portraits with glass borders and subtle hovers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TEAM_IMAGES.map((imgUrl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[3/4] rounded-xl overflow-hidden glass-card group cursor-default border border-white/10"
            >
              {/* Overlay shadow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Member Image */}
              <img
                src={imgUrl}
                alt={`Integrante del consejo Consillium`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Light gleam effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-gold/0 via-accent-gold/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="text-[9px] font-bold uppercase tracking-widest text-accent-gold block mb-1">
                  Consejero Principal
                </span>
                <span className="text-[10px] text-zinc-400 block font-light">
                  Consilium de Servicios Coordinados
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. Global Competences Overview */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl glass-card p-6 md:p-8 border border-white/5 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-2xl" />
        <h3 className="text-sm font-bold text-accent-gold uppercase tracking-widest mb-6 flex items-center gap-2">
          <Award className="w-4 h-4 animate-pulse" />
          Resumen Global de Competencias
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="text-white font-bold text-xs uppercase tracking-wider font-sans border-b border-white/10 pb-1.5 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-accent-gold" />
              Formación de Vanguardia
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
              Miembros con Doctorados en Ciencias Jurídicas, Magíster en Ciencias Políticas, estudios en Economía, y postgrados en instituciones de prestigio internacional como Columbia University y Southern Methodist University (SMU). Egresados de las universidades líderes del país (UCV, UCAB, USB, ULA, USM y UC).
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-white font-bold text-xs uppercase tracking-wider font-sans border-b border-white/10 pb-1.5 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-accent-gold" />
              Trayectoria Multifocal
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
              Expertise consolidada en el Foro Judicial (Ex Magistrada de la Máxima Instancia Judicial y Ex Juez Contencioso Administrativo) y en la Alta Gerencia (Ex Consultores Jurídicos y Asesores de Ministerios, corporaciones transnacionales, cámaras de comercio y gremios profesionales o industriales).
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-white font-bold text-xs uppercase tracking-wider font-sans border-b border-white/10 pb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-accent-gold" />
              Competencias Gerenciales
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
              Experiencia y formación de alto nivel en gerencia, desarrollo sostenible, auditoría de procesos, organización empresarial y buen gobierno corporativo para transformar el derecho en rentabilidad.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-white font-bold text-xs uppercase tracking-wider font-sans border-b border-white/10 pb-1.5 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-accent-gold" />
              Liderazgo Académico
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
              Catedráticos universitarios de postgrado, pregrado, conferencistas, autores de publicaciones jurídicas de relevancia nacional y Miembros de Número en instituciones de prestigio doctrinal como el Instituto de Derecho Social.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 3. Detailed Advisor List (Names & Careers) */}
      <div className="space-y-6">
        <div className="text-left border-b border-white/5 pb-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#9cb18c] flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Perfil de los Consejeros Principales
          </h3>
          <p className="text-[11px] text-zinc-500 font-sans mt-1">Conozca la trayectoria de nuestros consultores de élite.</p>
        </div>

        <div className="space-y-4">
          {ADVISORS.map((advisor) => {
            const isExpanded = expandedAdvisor === advisor.id;
            return (
              <motion.div
                key={advisor.id}
                className={`rounded-xl border transition-all duration-300 ${isExpanded ? 'bg-white/5 border-accent-gold/40 shadow-lg shadow-accent-gold/5' : 'bg-[#0f110f]/70 border-white/5 hover:border-white/15'}`}
              >
                <button
                  onClick={() => toggleAdvisor(advisor.id)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <h4 className="text-sm md:text-base font-bold text-white font-sans tracking-wide">
                      {advisor.nombre}
                    </h4>
                    <p className="text-[10px] md:text-xs text-accent-gold uppercase tracking-widest font-semibold">
                      {advisor.cargo}
                    </p>
                  </div>
                  <div className="text-zinc-400 hover:text-white shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-accent-gold" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 pt-1 border-t border-white/5 text-xs md:text-sm text-zinc-300 font-light leading-relaxed font-sans space-y-4">
                        <p>{advisor.perfil}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Back-up advisors note */}
        <div className="p-4 rounded-xl bg-accent-gold/5 border border-accent-gold/10 flex items-start gap-3 mt-4">
          <ShieldAlert className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
          <p className="text-[11px] text-zinc-400 leading-normal">
            <strong>Consejeros de Respaldo:</strong> Los perfiles referidos son los consejeros principales, ya que existen aliados y asesores territoriales de apoyo para la correcta y cabal ejecución de las actividades; además, se cuenta con tres asesores especiales en materia de derecho marítimo, bancario y penal empresarial.
          </p>
        </div>
      </div>
    </div>
  );
}
