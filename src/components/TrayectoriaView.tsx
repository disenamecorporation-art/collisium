import React from 'react';
import { Award, ShieldAlert, MapPin, Globe, Compass, Landmark, Briefcase, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrayectoriaView() {
  const coverageCities = [
    {
      region: "Eje Capital y Central",
      cities: ["Caracas", "La Guaira", "Guarenas", "Guatire", "Los Teques", "Maracay", "Valencia"]
    },
    {
      region: "Región Occidental",
      cities: ["Maracaibo", "Coro", "Barquisimeto", "Barinas", "San Cristóbal"]
    },
    {
      region: "Región Oriental",
      cities: ["Barcelona / Puerto La Cruz", "Cumaná", "Porlamar", "Maturín", "Anaco", "El Tigre", "Ciudad Bolívar", "Puerto Ordaz"]
    },
    {
      region: "Eje Llanos y Sur",
      cities: ["Valle de la Pascua", "Calabozo", "Barinas", "Guanare"]
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-gold/10 border border-accent-gold/20 rounded-full">
          <Globe className="w-4 h-4 text-accent-gold" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent-gold font-sans">
            Capacidad & Despliegue Estratégico
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
          Trayectoria y Cobertura
        </h2>
        <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
          Sólido historial de resultados de alta gama y capilaridad operativa unificada en todo el territorio nacional e internacional.
        </p>
      </div>

      {/* 1. Counter Counters Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Counter 1 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl glass-card border border-white/5 relative overflow-hidden text-center space-y-2 group"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-accent-gold" />
          <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-500 font-sans tracking-tight">
            + 2,000
          </div>
          <div className="text-xs font-extrabold text-white uppercase tracking-wider font-sans">
            Casos Exitosos
          </div>
          <p className="text-[11px] text-zinc-400 leading-normal font-light">
            Solución y blindaje táctico aplicado directamente a problemas de alta gerencia corporativa.
          </p>
        </motion.div>

        {/* Counter 2 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl glass-card border border-white/5 relative overflow-hidden text-center space-y-2 group"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-accent-olive" />
          <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9cb18c] to-emerald-500 font-sans tracking-tight">
            + 15
          </div>
          <div className="text-xs font-extrabold text-white uppercase tracking-wider font-sans">
            Especialistas de Élite
          </div>
          <p className="text-[11px] text-zinc-400 leading-normal font-light">
            Consejeros senior y aliados estratégicos con sólida trayectoria en el foro judicial y la academia.
          </p>
        </motion.div>

        {/* Counter 3 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl glass-card border border-white/5 relative overflow-hidden text-center space-y-2 group"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-accent-gold" />
          <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-600 font-sans tracking-tight">
            94%
          </div>
          <div className="text-xs font-extrabold text-white uppercase tracking-wider font-sans">
            Índice de Aprobación
          </div>
          <p className="text-[11px] text-zinc-400 leading-normal font-light">
            Nuestros clientes avalan la agilidad operativa, cero burocracia y la precisión legal.
          </p>
        </motion.div>
      </div>

      {/* 2. Trayectoria y Respaldo: Sectores que confían */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Editorial Section (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-left border-b border-white/5 pb-2">
            <h3 className="text-lg font-bold uppercase tracking-wider text-white font-sans flex items-center gap-2">
              <Compass className="w-5 h-5 text-accent-gold" />
              I. Trayectoria y Respaldo: Experiencia y Legalidad
            </h3>
          </div>
          <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light">
            Por protocolos de confidencialidad corporativa, en lugar de marcas comunes, se presenta una lista ejecutiva y anónima de los sectores de alto impacto que confían sus activos al Consejo:
          </p>

          {/* Sectores Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider font-sans block">Infraestructura y Transporte</span>
              <p className="text-[11px] text-zinc-400 leading-normal">Asesoría a operadoras aéreas, marítimas y consorcios de ingeniería pesada.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider font-sans block">Alimentos y Farmacia</span>
              <p className="text-[11px] text-zinc-400 leading-normal">Soporte estratégico en el cumplimiento regulatorio y protección de activos para transnacionales del sector.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider font-sans block">Sector Financiero y Banca</span>
              <p className="text-[11px] text-zinc-400 leading-normal">Asesoría a entidades bancarias en operaciones de alta complejidad transfronteriza.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider font-sans block">Sector Deportivo</span>
              <p className="text-[11px] text-zinc-400 leading-normal">Gestión especializada para clubes deportivos, atletas de alto rendimiento y entrenadores.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider font-sans block">Gestión Pública y Regulatoria</span>
              <p className="text-[11px] text-zinc-400 leading-normal">Defensa técnica y resolución estratégica de controversias de alto nivel administrativo.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider font-sans block">Ecosistema Profesional</span>
              <p className="text-[11px] text-zinc-400 leading-normal">Firma de referencia para otros escritorios jurídicos de alta especialización técnica.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#47543a]/25 border border-[#47543a]/45">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-sans flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#9cb18c]" />
              La Trayectoria
            </h4>
            <p className="text-[11px] text-zinc-300 leading-relaxed font-light">
              Más de cuatro décadas de experiencia acumulada, y la integración de varias generaciones, avalan nuestra capacidad. La integración de trayectorias destacadas en el ámbito público, privado y académico garantiza el acceso directo a profesionales de élite. Nuestra mayor garantía es la integración táctica: transformamos el conocimiento jurídico en una herramienta de gestión para la rentabilidad y el blindaje operativo de sus activos.
            </p>
          </div>
        </div>

        {/* Right Map/Coverage Section (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="text-left border-b border-white/5 pb-2">
            <h3 className="text-lg font-bold uppercase tracking-wider text-white font-sans flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent-gold" />
              II. Capilaridad Operativa
            </h3>
          </div>
          
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-4">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-accent-gold font-sans mb-1">
                Un Solo Mando, Alcance Nacional
              </h4>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                A diferencia de los esquemas convencionales de corresponsalía o redes de referidos, la presencia de Consilium en 25 ciudades de Venezuela funciona como un organismo integrado de alta dirección. Cada estrategia se diseña, supervisa y audita desde nuestro mando central. El cliente mantiene un canal único de comunicación, eliminando la dispersión.
              </p>
            </div>

            {/* Region List Accordion style */}
            <div className="space-y-3">
              {coverageCities.map((item, index) => (
                <div key={index} className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-[10px] font-bold text-[#9cb18c] uppercase tracking-wider font-sans block mb-1">
                    {item.region}
                  </span>
                  <p className="text-[11px] text-zinc-300 font-sans leading-normal">
                    {item.cities.join(", ")}
                  </p>
                </div>
              ))}
            </div>

            {/* International Reach */}
            <div className="pt-3 border-t border-white/5 flex items-center gap-3">
              <div className="p-2 rounded bg-accent-gold/10 text-accent-gold border border-accent-gold/20 shrink-0">
                <Globe className="w-4 h-4 animate-spin-slow" />
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                Contamos con <strong>aliados estratégicos</strong> en varios países de <strong>América Latina, España y Panamá</strong> para la atención quirúrgica de casos de alcance internacional.
              </p>
            </div>
          </div>

          {/* Justification Box */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-[11px] text-zinc-400 leading-relaxed font-sans italic">
            <strong>Justificación:</strong> Precisamente es la necesidad del cliente de contar con respuestas inmediatas, bajo un solo criterio rector y sin la fragmentación de la corresponsalía tradicional, lo que ha hecho necesario la adopción de esta modalidad de mando centralizado.
          </div>
        </div>
      </div>
    </div>
  );
}
