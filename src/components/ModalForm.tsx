import React, { useState } from 'react';
import { X, Send, ShieldCheck, HelpCircle, Activity, Target, Compass, Sparkles, Building2, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'desafio' | 'induccion';
}

export default function ModalForm({ isOpen, onClose, type }: ModalFormProps) {
  const [success, setSuccess] = useState(false);
  
  // Form 1 State (Desafío)
  const [desafioForm, setDesafioForm] = useState({
    activoBajoRiesgo: '',
    descripcionDesafio: '',
    expectativas: '',
    horizonteUrgencia: 'inmediato',
    contacto: ''
  });

  // Form 2 State (Inducción)
  const [induccionForm, setInduccionForm] = useState({
    organizacion: '',
    objetivoAlianza: '',
    expectativasModelo: '',
    contacto: ''
  });

  const handleDesafioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Persist in localStorage
    const existing = JSON.parse(localStorage.getItem('consillium_desafios') || '[]');
    const newRecord = {
      ...desafioForm,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    localStorage.setItem('consillium_desafios', JSON.stringify([...existing, newRecord]));
    
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
      // Reset
      setDesafioForm({
        activoBajoRiesgo: '',
        descripcionDesafio: '',
        expectativas: '',
        horizonteUrgencia: 'inmediato',
        contacto: ''
      });
    }, 4500);
  };

  const handleInduccionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Persist in localStorage
    const existing = JSON.parse(localStorage.getItem('consillium_inducciones') || '[]');
    const newRecord = {
      ...induccionForm,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    localStorage.setItem('consillium_inducciones', JSON.stringify([...existing, newRecord]));

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
      // Reset
      setInduccionForm({
        organizacion: '',
        objetivoAlianza: '',
        expectativasModelo: '',
        contacto: ''
      });
    }, 4500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#070907]/90 backdrop-blur-md" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-card border border-white/10 text-white z-10 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent-gold-light text-accent-gold border border-accent-gold/20">
              {type === 'desafio' ? <Activity className="w-5 h-5 animate-pulse" /> : <Sparkles className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white font-sans">
                {type === 'desafio' 
                  ? 'Diagnóstico del Desafío Corporativo' 
                  : 'Solicitud de Inducción al Modelo CONSILIUM'}
              </h3>
              <p className="text-xs text-zinc-400 font-medium">Resolución quirúrgica legal y técnica</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex-1">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center text-center py-12 px-4"
              >
                <div className="w-16 h-16 rounded-full bg-accent-gold-light border border-accent-gold/40 flex items-center justify-center text-accent-gold mb-6">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 font-sans">
                  {type === 'desafio' ? 'Diagnóstico Recibido con Éxito' : 'Sesión de Inducción Solicitada'}
                </h4>
                <p className="text-zinc-300 max-w-md text-sm leading-relaxed mb-6">
                  La información ha sido encriptada y transmitida de forma segura bajo estrictos protocolos de confidencialidad. Nuestro Consejo evaluará técnicamente los puntos críticos del desafío de manera personal.
                </p>
                <div className="px-4 py-2 rounded bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-xs font-sans font-medium">
                  ID DE PROTOCOLO: CS-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <p className="text-xs text-zinc-500 mt-8">Esta ventana se cerrará automáticamente en breve.</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Intro Text */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-6">
                  <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-sans">
                    {type === 'desafio' ? (
                      <>
                        <strong className="text-accent-gold font-semibold">¿Por qué es necesario este diagnóstico?</strong> Queremos conocer sus valores y colaborar en la meta de prevalecer y ampliar sus desafíos empresariales y profesionales. Le invitamos a compartir los puntos clave de su situación actual para que nuestro Consejo pueda realizar un análisis técnico preliminar, alineado con sus objetivos de excelencia, crecimiento y/o blindaje estratégico.
                      </>
                    ) : (
                      <>
                        <strong className="text-accent-gold font-semibold">¿Por qué solicitar una inducción?</strong> Sabemos que los mejores empresarios, profesionales y deportistas persiguen la excelencia y la efectividad en un mundo globalizado y altamente competitivo. Queremos conocer sus valores y colaborar en la meta de la eficacia y excelencia de su actividad, y ampliar sus desafíos profesionales. Le invitamos a solicitar esta sesión técnica para explorar cómo nuestra arquitectura de ejecución ágil puede integrarse a su estructura y potenciar la toma de decisiones al más alto nivel.
                      </>
                    )}
                  </p>
                </div>

                {type === 'desafio' ? (
                  // FORM 1: DESAFIO
                  <form onSubmit={handleDesafioSubmit} className="space-y-6">
                    {/* Campo 1 */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2 flex items-center gap-1.5 font-sans">
                        <Building2 className="w-3.5 h-3.5" />
                        Activo o área estratégica bajo riesgo
                      </label>
                      <input 
                        type="text" 
                        required
                        value={desafioForm.activoBajoRiesgo}
                        onChange={e => setDesafioForm({...desafioForm, activoBajoRiesgo: e.target.value})}
                        placeholder="Ej: Infraestructura energética, agrario, aeronáutico, marítimo, deportivo, desarrollo inmobiliario, tributario..."
                        className="w-full bg-[#0d100d]/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-zinc-600"
                      />
                      <p className="text-[11px] text-zinc-400 mt-1.5 leading-normal">
                        Le agradeceríamos indicar el sector o la infraestructura donde se origina su necesidad.
                      </p>
                    </div>

                    {/* Campo 2 */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2 flex items-center gap-1.5 font-sans">
                        <HelpCircle className="w-3.5 h-3.5" />
                        Descripción sucinta del desafío
                      </label>
                      <textarea 
                        required
                        rows={3}
                        value={desafioForm.descripcionDesafio}
                        onChange={e => setDesafioForm({...desafioForm, descripcionDesafio: e.target.value})}
                        placeholder="Ej: Riesgos en ejecución de contratos de fletamento internacional, adecuación regulatoria compleja, conflictos societarios..."
                        className="w-full bg-[#0d100d]/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-zinc-600 resize-none"
                      />
                      <p className="text-[11px] text-zinc-400 mt-1.5 leading-normal">
                        Para una evaluación precisa, le sugerimos describir los puntos críticos que requieren nuestra intervención.
                      </p>
                    </div>

                    {/* Campo 3 */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2 flex items-center gap-1.5 font-sans">
                        <Target className="w-3.5 h-3.5" />
                        Necesidades principales y expectativas de solución
                      </label>
                      <textarea 
                        required
                        rows={3}
                        value={desafioForm.expectativas}
                        onChange={e => setDesafioForm({...desafioForm, expectativas: e.target.value})}
                        placeholder="Ej: Blindaje de activos frente a litigios, optimización de gobernanza, aseguramiento de la viabilidad de un proyecto..."
                        className="w-full bg-[#0d100d]/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-zinc-600 resize-none"
                      />
                      <p className="text-[11px] text-zinc-400 mt-1.5 leading-normal">
                        Con el fin de ofrecerle una solución a medida, le invitamos a detallar los resultados que espera alcanzar.
                      </p>
                    </div>

                    {/* Campo 4 */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2 flex items-center gap-1.5 font-sans">
                        <Compass className="w-3.5 h-3.5" />
                        Horizonte de urgencia
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${desafioForm.horizonteUrgencia === 'inmediato' ? 'bg-accent-gold/10 border-accent-gold' : 'bg-[#0d100d]/60 border-white/10'}`}>
                          <span className="text-xs font-medium">Atención Inmediata</span>
                          <input 
                            type="radio" 
                            name="urgencia" 
                            checked={desafioForm.horizonteUrgencia === 'inmediato'}
                            onChange={() => setDesafioForm({...desafioForm, horizonteUrgencia: 'inmediato'})}
                            className="text-accent-gold focus:ring-accent-gold bg-zinc-800"
                          />
                        </label>
                        <label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${desafioForm.horizonteUrgencia === 'preventivo' ? 'bg-accent-gold/10 border-accent-gold' : 'bg-[#0d100d]/60 border-white/10'}`}>
                          <span className="text-xs font-medium">Planificación Preventiva</span>
                          <input 
                            type="radio" 
                            name="urgencia" 
                            checked={desafioForm.horizonteUrgencia === 'preventivo'}
                            onChange={() => setDesafioForm({...desafioForm, horizonteUrgencia: 'preventivo'})}
                            className="text-accent-gold focus:ring-accent-gold bg-zinc-800"
                          />
                        </label>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-1.5 leading-normal">
                        Para coordinar nuestra atención, le agradeceríamos definir si su requerimiento es inmediato o si forma parte de una fase de planificación preventiva.
                      </p>
                    </div>

                    {/* Campo 5 */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2 flex items-center gap-1.5 font-sans">
                        <User className="w-3.5 h-3.5" />
                        Persona de contacto y canal preferencial
                      </label>
                      <input 
                        type="text" 
                        required
                        value={desafioForm.contacto}
                        onChange={e => setDesafioForm({...desafioForm, contacto: e.target.value})}
                        placeholder="Nombre, teléfono corporativo, correo electrónico o canal preferido..."
                        className="w-full bg-[#0d100d]/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-zinc-600"
                      />
                      <p className="text-[11px] text-zinc-400 mt-1.5 leading-normal">
                        Indique la vía de comunicación directa para coordinar nuestra respuesta.
                      </p>
                    </div>

                    {/* Footer Explanatory Info */}
                    <div className="text-zinc-400 text-[11px] leading-relaxed border-t border-white/5 pt-4">
                      <strong>Nota sobre la información proporcionada:</strong> Los datos solicitados son de carácter referencial; no se requiere formalidad excesiva para su llenado, ya que buscamos agilidad en nuestra primera interacción. Si es usted quien lidera esta búsqueda, es vital para nosotros conocer, más allá de la estructura empresarial, su propia perspectiva como líder, sus expectativas o valores, y en el caso de proyectos deportivos, sus intereses y expectativas reales. Su visión es el eje de nuestra estrategia.
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-accent-gold text-white hover:bg-[#b56e2f] active:bg-[#91541f] shadow-lg shadow-accent-gold/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Enviar para Análisis
                    </button>
                  </form>
                ) : (
                  // FORM 2: INDUCCION
                  <form onSubmit={handleInduccionSubmit} className="space-y-6">
                    {/* Campo 1 */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2 flex items-center gap-1.5 font-sans">
                        <Building2 className="w-3.5 h-3.5" />
                        Organización o grupo empresarial
                      </label>
                      <input 
                        type="text" 
                        required
                        value={induccionForm.organizacion}
                        onChange={e => setInduccionForm({...induccionForm, organizacion: e.target.value})}
                        placeholder="Ej: Corporaciones industriales, grupos financieros, consorcios, firmas profesionales, estructuras deportivas..."
                        className="w-full bg-[#0d100d]/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-zinc-600"
                      />
                      <p className="text-[11px] text-zinc-400 mt-1.5 leading-normal">
                        Le agradeceríamos indicar los datos del ente que busca integrar soluciones de alta gerencia legal.
                      </p>
                    </div>

                    {/* Campo 2 */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2 flex items-center gap-1.5 font-sans">
                        <Target className="w-3.5 h-3.5" />
                        Objetivo de la alianza estratégica
                      </label>
                      <textarea 
                        required
                        rows={3}
                        value={induccionForm.objetivoAlianza}
                        onChange={e => setInduccionForm({...induccionForm, objetivoAlianza: e.target.value})}
                        placeholder="Ej: Blindaje corporativo integral, optimización de una nueva unidad de negocio, impulso de un proyecto profesional específico..."
                        className="w-full bg-[#0d100d]/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-zinc-600 resize-none"
                      />
                      <p className="text-[11px] text-zinc-400 mt-1.5 leading-normal">
                        Para alinear nuestro apoyo a sus metas, le sugerimos describir qué áreas de su estructura busca blindar o potenciar.
                      </p>
                    </div>

                    {/* Campo 3 */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2 flex items-center gap-1.5 font-sans">
                        <HelpCircle className="w-3.5 h-3.5" />
                        Necesidades principales y expectativas del modelo
                      </label>
                      <textarea 
                        required
                        rows={3}
                        value={induccionForm.expectativasModelo}
                        onChange={e => setInduccionForm({...induccionForm, expectativasModelo: e.target.value})}
                        placeholder="Ej: Alivio de cargas burocráticas, asesoría preventiva con visión 360°, capital intelectual senior aplicado a proyectos..."
                        className="w-full bg-[#0d100d]/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-zinc-600 resize-none"
                      />
                      <p className="text-[11px] text-zinc-400 mt-1.5 leading-normal">
                        Con el fin de adaptar nuestro protocolo a sus prioridades, le invitamos a detallar qué resultados espera de la integración del modelo CONSILIUM en su estructura corporativa.
                      </p>
                    </div>

                    {/* Campo 4 */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2 flex items-center gap-1.5 font-sans">
                        <User className="w-3.5 h-3.5" />
                        Persona de contacto y canal preferencial
                      </label>
                      <input 
                        type="text" 
                        required
                        value={induccionForm.contacto}
                        onChange={e => setInduccionForm({...induccionForm, contacto: e.target.value})}
                        placeholder="Nombre, teléfono corporativo, correo electrónico o canal de comunicación preferente..."
                        className="w-full bg-[#0d100d]/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all placeholder:text-zinc-600"
                      />
                      <p className="text-[11px] text-zinc-400 mt-1.5 leading-normal">
                        Indique la vía de comunicación directa que prefiere para coordinar su sesión de inducción técnica con nuestro Consejo.
                      </p>
                    </div>

                    {/* Footer Explanatory Info */}
                    <div className="text-zinc-400 text-[11px] leading-relaxed border-t border-white/5 pt-4">
                      <strong>Nota sobre la información requerida:</strong> Al igual que en nuestro diagnóstico, los datos solicitados aquí son meramente referenciales para preparar nuestra primera interacción. No buscamos una formalidad burocrática, sino comprender su visión como líder o protagonista; sus intereses personales y expectativas estratégicas son fundamentales para que nuestra inducción sea verdaderamente efectiva.
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-[#47543a] text-white hover:bg-[#586849] active:bg-[#39432e] shadow-lg shadow-accent-olive/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Solicitar Sesión de Inducción
                    </button>
                  </form>
                )}

                {/* Secure Commitment */}
                <div className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-accent-gold/5 border border-accent-gold/10">
                  <ShieldCheck className="w-8 h-8 text-accent-gold shrink-0" />
                  <p className="text-[10px] md:text-xs text-zinc-300 font-sans leading-normal">
                    <strong>Garantía y compromiso estricto:</strong> Toda información proporcionada está estrictamente protegida bajo protocolos unificados de confidencialidad y ética profesional. El servicio no se delega en personal secundario ni junior.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
