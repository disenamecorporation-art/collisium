import React from 'react';
import { Shield, Sparkles, Award, Scale, HelpCircle, Eye, CheckCircle, Handshake, Users, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function GobernanzaView() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-gold/10 border border-accent-gold/20 rounded-full">
          <Shield className="w-4 h-4 text-accent-gold" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent-gold font-sans">
            Estructura Corporativa & Ética
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
          Gobernanza y Protocolo
        </h2>
        <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
          Nuestra arquitectura institucional garantiza la máxima coherencia táctica, control absoluto y excelencia operativa en cada asunto encomendado.
        </p>
      </div>

      {/* Grid of I, II, III, IV, V with gorgeous glass cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* I. Nuestra Identidad: Consilium */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl glass-card p-6 md:p-8 border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-accent-gold" />
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent-gold-light border border-accent-gold/20 text-accent-gold shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-sans">I. Nuestra Identidad: Consilium</h3>
              <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-light">
                Somos la evolución del ejercicio legal con visión corporativa y profesional. Consilium trasciende el modelo del bufete convencional y persigue los más altos valores ética y eficiencia y excelencia profesional; operamos como un centro de soluciones integradas para la alta gerencia y sectores estratégicos. Hemos eliminado la burocracia y las estructuras rígidas que ralentizan la toma de decisiones y causan cargas innecesarias para el cliente, sustituyéndolas por una arquitectura de ejecución ágil, diseñada exclusivamente para la precisión que exige el entorno corporativo global.
              </p>
            </div>
          </div>
        </motion.div>

        {/* II. Diferencial Estratégico */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl glass-card p-6 md:p-8 border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-accent-olive" />
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent-olive-light border border-accent-olive/20 text-[#9cb18c] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-sans">II. Diferencial Estratégico</h3>
              <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-light">
                Nuestra identidad es multidimensional e interdisciplinaria, por ello, no limitamos nuestra perspectiva al marco legal; fusionamos rigor técnico, experiencia de campo y visión estratégica. En Consilium, nuestros profesionales actúan como gerentes y estrategas de alto impacto, transformando el derecho en una herramienta de gestión y rentabilidad operativa.
              </p>
            </div>
          </div>
        </motion.div>

        {/* III. Nuestra Excelencia: Precisión y Continuidad */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl glass-card p-6 md:p-8 border border-white/5 relative overflow-hidden md:col-span-2"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold to-accent-olive" />
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="p-3 rounded-xl bg-accent-gold-light border border-accent-gold/20 text-accent-gold shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-sans">III. Nuestra Excelencia: Precisión y Continuidad</h3>
              <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-light">
                Entregamos estructuras diseñadas para la sostenibilidad y el blindaje de sus activos y metas profesionales. Centralizamos la complejidad técnica en nuestro Consejo, garantizando que cada solución esté alineada con su visión y desafío de negocio, incluso en entornos regulatorios de alta volatilidad. Más de tres décadas de trayectoria en los sectores público, privado y académico respaldan nuestra capacidad: máxima diligencia, especialización absoluta y cero improvisación.
              </p>
            </div>
          </div>
        </motion.div>

        {/* IV. Modelo Operativo: Eficiencia y Control */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl glass-card p-6 md:p-8 border border-white/5 relative overflow-hidden md:col-span-2 space-y-6"
        >
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider font-sans border-b border-white/10 pb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-gold" />
              IV. Modelo Operativo: Eficiencia y Control
            </h3>
            <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-light">
              Evolucionamos para ofrecer soluciones quirúrgicas, rápidas y de alto nivel. Entendemos que la alta gerencia requiere optimización de recursos, por lo que hemos suprimido los costos fijos de infraestructuras burocráticas. Usted invierte exclusivamente en el capital intelectual aplicado directamente a su necesidad. En Consilium, la excelencia no se delega: el especialista asignado asume el control integral del asunto desde su inicio hasta su resolución.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-accent-gold uppercase tracking-wider font-sans">Especialización Estructural</h4>
              <p className="text-[11px] text-zinc-400 leading-normal">
                Operamos bajo una arquitectura de capacidad y dominio demostrados. Cada desafío es atendido estrictamente por el especialista que domina la materia; la improvisación es incompatible con nuestro estándar.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-accent-gold uppercase tracking-wider font-sans">Criterio Senior Asegurado</h4>
              <p className="text-[11px] text-zinc-400 leading-normal">
                Su interlocutor y responsable único es siempre un especialista de élite. Eliminamos la intermediación y el aprendizaje de perfiles junior; garantizamos el acceso directo al talento de mayor trayectoria.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-accent-gold uppercase tracking-wider font-sans">Dirección Unificada</h4>
              <p className="text-[11px] text-zinc-400 leading-normal">
                Nuestra presencia nacional opera como un organismo integrado bajo protocolos centralizados. Usted mantiene un canal único de comunicación, garantizando coherencia táctica y control total, independientemente de la ubicación geográfica del proyecto.
              </p>
            </div>
          </div>
        </motion.div>

        {/* V. Protocolo de Actuación */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl glass-card p-6 md:p-8 border border-white/5 relative overflow-hidden md:col-span-2"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="p-3 rounded-xl bg-accent-olive-light border border-accent-olive/20 text-[#9cb18c] shrink-0">
              <Eye className="w-6 h-6" />
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-sans">V. Protocolo de Actuación</h3>
              <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-light">
                La intervención de Consilium se fundamenta en la excelencia técnica, asesoría plena y la mitigación de riesgos. Nuestros informes y estrategias son el resultado de un análisis legal y técnico profundo, que considera variables jurisprudenciales, regulatorias y de mercado y sumado a la experiencia profesional y el entendimiento de su negocio. Nuestra responsabilidad se centra en maximizar la capacidad, viabilidad y la seguridad jurídica de cada desafío corporativo o proyecto profesional, bajo el estándar de máxima diligencia que nos define.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* VII. Blindaje del Perfil Profesional, Calidad y Legalidad del Servicio */}
      <div className="space-y-8">
        <div className="border-t border-white/10 pt-12 text-center max-w-2xl mx-auto space-y-3">
          <h3 className="text-2xl font-bold text-white font-sans uppercase tracking-wide">
            VII. Blindaje de Calidad y Legalidad del Servicio
          </h3>
          <p className="text-xs text-zinc-400 font-sans">
            Salvaguarda estatutaria para garantizar el cumplimiento de los más altos estándares profesionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Código de Conducta */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
                Código de Conducta y Principio de Cero Tolerancia
              </h4>
            </div>
            <p className="text-[11px] md:text-xs text-zinc-300 leading-relaxed font-light">
              Todos nuestros consejeros, aliados y proveedores se rigen plenamente, y sin exclusión, tanto por la normativa legal aplicable como por nuestro Código de Conducta. Este instrumento es de obligatoria e ineludible observancia y suscripción, garantizando el cumplimiento de los más altos valores profesionales, legales y éticos, incluyendo el respeto irrestricto a los derechos humanos, la prevención de la legitimación de capitales y cualquier forma de corrupción. El Código prevé las acciones y responsabilidades legales por su incumplimiento, estableciendo nuestro "principio de cero tolerancias a conductas ilícitas", y contempla el medio para la interposición de quejas o denuncias por parte del cliente. Este instrumento se revisa semestralmente.
            </p>
          </motion.div>

          {/* Competencia del Aliado */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-accent-gold-light text-accent-gold border border-accent-gold/20">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
                Principio de Perfil, Competencia y Control del Aliado
              </h4>
            </div>
            <p className="text-[11px] md:text-xs text-zinc-300 leading-relaxed font-light">
              Consilium exige y garantiza el estándar máximo de formación profesional, experience y ética para todos los aliados. El objetivo es asegurar al cliente la máxima diligencia y plena responsabilidad en el ejercicio profesional. Para ello, mantenemos y garantizamos un control, participación y supervisión constante, y proactiva de todos los asuntos encargados.
            </p>
          </motion.div>

          {/* Integración Territorial */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-[#47543a]/20 text-[#9cb18c] border border-[#47543a]/30">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
                Principio de Integración Profesional y Territorial
              </h4>
            </div>
            <p className="text-[11px] md:text-xs text-zinc-300 leading-relaxed font-light">
              Nuestra composición por expertos de distintas áreas y con sobresaliente competencia, permite abarcar y agrupar las necesidades legales y territoriales de nuestros clientes en una sola gestión. Esto garantiza la integridad y uniformidad de su asesoría y simplifica los procesos de respuesta y resolución, logrando una disminución significativa de costos y riesgos, y permitiendo una crucial asesoría preventiva gracias a una visión 360.
            </p>
          </motion.div>

          {/* Apoyo Institucional */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-accent-gold-light text-accent-gold border border-accent-gold/20">
                <Handshake className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
                Principio de Coordinación y Apoyo Institucional
              </h4>
            </div>
            <p className="text-[11px] md:text-xs text-zinc-300 leading-relaxed font-light">
              Nuestra labor está plenamente orientada a la colaboración activa y al apoyo de la estructura del cliente. Nuestra actuación es ética y profesional, y no busca competir con su personal, terceros o colaboradores del cliente. Por el contrario, confiamos en que nuestro servicio representa un insumo estratégico que puede optimizar los resultados y procesos internos de la institución. En el caso de los profesionales, confiamos en que nuestros servicios cubran sus necesidades de asesoría legal y repercutan en su esfera de derecho.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
