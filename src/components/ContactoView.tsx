import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ShieldCheck, Clock, Instagram, Facebook } from 'lucide-react';
import { ADVISORS } from '../data';
import { motion } from 'motion/react';

export default function ContactoView() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate real transmission and saving
    const existing = JSON.parse(localStorage.getItem('consillium_contacto_mensajes') || '[]');
    const newRecord = {
      ...formData,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    localStorage.setItem('consillium_contacto_mensajes', JSON.stringify([...existing, newRecord]));

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    }, 4500);
  };

  // Dynamically map customized email addresses for each senior advisor
  const advisorEmails = ADVISORS.map(advisor => {
    const formattedName = advisor.nombre
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // remove accents
      .replace(/[^a-z ]/g, "")
      .split(" ");
    
    // Create standard professional email pattern
    const alias = formattedName.length >= 3 
      ? `${formattedName[0]}.${formattedName[formattedName.length - 2]}`
      : `${formattedName[0]}.${formattedName[1] || 'consultor'}`;

    return {
      nombre: advisor.nombre,
      cargo: advisor.cargo.split("|")[0],
      email: `${alias}@consillium.com`
    };
  });

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-gold/10 border border-accent-gold/20 rounded-full">
          <Phone className="w-4 h-4 text-accent-gold" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent-gold font-sans">
            Canales de Comunicación Directa
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
          Contacto Directo
        </h2>
        <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
          Establezca comunicación inmediata con nuestro Consejo Principal o coordine de forma directa con el especialista idóneo para su caso.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Coordinates & Advisor Directory (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Offices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent-gold" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans">Sede Caracas</h3>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                Urbanización Bello Monte, Torre América, piso 4, Caracas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent-gold" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans">Sede Maracay</h3>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                Centro Comercial y Profesional Paseo Las Delicias I, Calle - Paseo Las Delicias 1, Maracay, Mezzanina.
              </p>
            </div>
          </div>

          {/* Quick Stats Contact Details */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-accent-gold/10 text-accent-gold border border-accent-gold/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-bold uppercase tracking-widest font-sans block">Canal Telefónico</span>
                  <a href="tel:04226065922" className="text-sm font-bold text-white tracking-wider font-sans hover:text-accent-gold transition-colors">
                    0422-606-59-22
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#47543a]/25 text-[#9cb18c] border border-[#47543a]/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-bold uppercase tracking-widest font-sans block">Correo General</span>
                  <a href="mailto:contacto@consillium.com" className="text-sm font-bold text-white tracking-wider font-sans hover:text-accent-gold transition-colors">
                    contacto@consillium.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Status */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <Instagram className="w-4 h-4 text-accent-gold" />
                  <span className="font-semibold">Instagram</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <Facebook className="w-4 h-4 text-accent-gold" />
                  <span className="font-semibold">Facebook</span>
                </div>
              </div>
              <span className="text-xs font-bold text-accent-gold bg-accent-gold/10 px-2.5 py-1 rounded border border-accent-gold/20 font-sans">
                Canales oficiales en apertura (Mañana)
              </span>
            </div>
          </div>

          {/* Directory of Advisor Emails */}
          <div className="space-y-4">
            <div className="text-left border-b border-white/5 pb-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#9cb18c] flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                Directorio Digital del Consejo
              </h4>
              <p className="text-[11px] text-zinc-500 mt-0.5">Comuníquese de forma directa con el consultor idóneo.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2">
              {advisorEmails.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-accent-gold/20 transition-all flex flex-col justify-between">
                  <div>
                    <h5 className="text-[11px] font-bold text-white font-sans">{item.nombre}</h5>
                    <p className="text-[9px] text-accent-gold uppercase tracking-wider font-medium mb-1.5">{item.cargo}</p>
                  </div>
                  <a 
                    href={`mailto:${item.email}`}
                    className="text-[11px] font-sans text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 pt-1.5 border-t border-white/5"
                  >
                    <Mail className="w-3 h-3 text-[#9cb18c]" />
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Secure Transmission Message Form (5 cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl glass-card p-6 md:p-8 border border-white/10 shadow-2xl relative">
            <div className="absolute inset-x-0 top-0 h-1 bg-accent-gold" />
            
            {success ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent-gold-light border border-accent-gold/30 text-accent-gold flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-sans">Mensaje Transmitido</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Su comunicación ha sido procesada de manera segura bajo protocolos de confidencialidad legal de élite. Nuestro Consejo le responderá a la brevedad posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans">Transmisión Segura</h3>
                  <p className="text-[11px] text-zinc-400">Canal directo encriptado para asuntos estratégicos.</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-accent-gold uppercase tracking-wider mb-1 font-sans">Nombre / Corporación</label>
                    <input 
                      type="text" 
                      required
                      value={formData.nombre}
                      onChange={e => setFormData({...formData, nombre: e.target.value})}
                      placeholder="Ej: Consorcio de Ingeniería"
                      className="w-full bg-[#0d100d]/60 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-accent-gold outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-accent-gold uppercase tracking-wider mb-1 font-sans">Correo Electrónico</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="Ej: direccion@consorcio.com"
                      className="w-full bg-[#0d100d]/60 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-accent-gold outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-accent-gold uppercase tracking-wider mb-1 font-sans">Asunto Crítico</label>
                    <input 
                      type="text" 
                      required
                      value={formData.asunto}
                      onChange={e => setFormData({...formData, asunto: e.target.value})}
                      placeholder="Ej: Blindaje Regulatorio / Estructuración"
                      className="w-full bg-[#0d100d]/60 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-accent-gold outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-accent-gold uppercase tracking-wider mb-1 font-sans">Describa sus expectativas</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={e => setFormData({...formData, mensaje: e.target.value})}
                      placeholder="Escriba los puntos clave de su consulta..."
                      className="w-full bg-[#0d100d]/60 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-accent-gold outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-accent-gold hover:bg-[#b56e2f] shadow-lg shadow-accent-gold/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Divine Quote Section */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-12 text-center max-w-lg mx-auto"
      >
        <p className="text-sm md:text-base font-light italic text-zinc-300 font-sans tracking-wide">
          “Con Dios siempre y la confianza en la justicia”.
        </p>
        <div className="w-16 h-px bg-accent-gold/40 mx-auto mt-4" />
      </motion.div>
    </div>
  );
}
