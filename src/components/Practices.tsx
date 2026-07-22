import React from 'react';
import { Landmark, Globe, ShieldCheck, Activity, Users, HeartHandshake, ArrowRight } from 'lucide-react';
import { ActiveTab } from '../types';
import { motion } from 'motion/react';

interface PracticesProps {
  onNavigateToTab: (tab: ActiveTab) => void;
}

export default function Practices({ onNavigateToTab }: PracticesProps) {
  const practices = [
    {
      id: "infraestructura",
      title: "I. Infraestructura y Activos Críticos",
      desc: "Soporte legal especializado para salvaguardar la viabilidad y protección de activos estratégicos.",
      icon: <Landmark className="w-8 h-8 text-accent-gold" />,
      color: "from-[#a46125]/20 to-transparent",
      borderColor: "group-hover:border-[#a46125]/40"
    },
    {
      id: "energia",
      title: "II. Energía y Mercados Globales",
      desc: "Asesoría de alta dirección en contratos de energía, transacciones y regulación internacional.",
      icon: <Globe className="w-8 h-8 text-[#9cb18c]" />,
      color: "from-[#47543a]/20 to-transparent",
      borderColor: "group-hover:border-[#47543a]/40"
    },
    {
      id: "integridad",
      title: "III. Arquitectura de Integridad",
      desc: "Sistemas avanzados de cumplimiento (Compliance) y gobierno corporativo de alta confiabilidad.",
      icon: <ShieldCheck className="w-8 h-8 text-accent-gold" />,
      color: "from-[#a46125]/20 to-transparent",
      borderColor: "group-hover:border-[#a46125]/40"
    },
    {
      id: "defensa",
      title: "IV. Defensa Técnica y de Activos",
      desc: "Defensa estratégica de alta complejidad, resolución de disputas y blindaje comercial.",
      icon: <Activity className="w-8 h-8 text-[#9cb18c]" />,
      color: "from-[#47543a]/20 to-transparent",
      borderColor: "group-hover:border-[#47543a]/40"
    },
    {
      id: "deportivo",
      title: "V. Derecho Deportivo",
      desc: "Gobernanza institucional y consultoría para atletas de élite, marcas y gremios corporativos.",
      icon: <Users className="w-8 h-8 text-accent-gold" />,
      color: "from-[#a46125]/20 to-transparent",
      borderColor: "group-hover:border-[#a46125]/40"
    },
    {
      id: "apoyo",
      title: "VI. Apoyo Estratégico",
      desc: "Acompañamiento legal directo e in-situ para la mitigación ágil de riesgos corporativos.",
      icon: <HeartHandshake className="w-8 h-8 text-[#9cb18c]" />,
      color: "from-[#47543a]/20 to-transparent",
      borderColor: "group-hover:border-[#47543a]/40"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Editorial Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-6 text-left">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-gold font-sans block">
            Áreas de Práctica Estratégica
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
            Campos de Dominio Absoluto
          </h2>
          <p className="text-sm text-zinc-400 font-light font-sans leading-relaxed">
            Especialistas senior para el blindaje integral y estratégico de su corporación.
          </p>
        </div>
        <button
          onClick={() => onNavigateToTab('dominios')}
          className="text-xs font-bold text-accent-gold hover:text-white uppercase tracking-widest transition-colors flex items-center gap-1.5 shrink-0 self-start md:self-end cursor-pointer font-sans"
        >
          Ver Todas las Áreas
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Grid of Practices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {practices.map((practice, index) => (
          <motion.div
            key={practice.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            onClick={() => onNavigateToTab('dominios')}
            className="group rounded-2xl glass-card p-6 md:p-8 border border-white/5 hover:border-accent-gold/40 cursor-pointer relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent-gold/5 flex flex-col justify-between min-h-[300px]"
          >
            {/* Ambient inner glow */}
            <div className={`absolute -right-12 -top-12 w-32 h-32 rounded-full bg-gradient-to-br ${practice.color} blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none`} />

            <div className="space-y-4">
              {/* Icon Container with 3D-like reflection */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 w-fit shrink-0 relative group-hover:bg-white/10 group-hover:border-accent-gold/30 transition-colors">
                {practice.icon}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Title & Desc */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans group-hover:text-accent-gold transition-colors">
                  {practice.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed font-light font-sans">
                  {practice.desc}
                </p>
              </div>
            </div>

            {/* Action text */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-widest group-hover:text-white transition-colors font-sans">
              <span>Explorar Disciplinas</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
