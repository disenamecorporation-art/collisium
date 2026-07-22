import React, { useState, useEffect } from 'react';
import { ActiveTab } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Practices from './components/Practices';
import Insights from './components/Insights';
import ModalForm from './components/ModalForm';
import GobernanzaView from './components/GobernanzaView';
import Team from './components/Team';
import DominioView from './components/DominioView';
import TrayectoriaView from './components/TrayectoriaView';
import ContactoView from './components/ContactoView';
import FaqView from './components/FaqView';
import TopHeroSlider from './components/TopHeroSlider';
import AestheticCtas from './components/AestheticCtas';
import LayeredBanner from './components/LayeredBanner';

import { 
  ShieldCheck, 
  ArrowRight, 
  Scale, 
  MapPin, 
  Phone, 
  Mail, 
  Users, 
  Award, 
  Clock, 
  CheckCircle,
  HelpCircle,
  HeartHandshake
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('inicio');
  const [modalState, setModalState] = useState<{ isOpen: boolean; type: 'desafio' | 'induccion' }>({
    isOpen: false,
    type: 'desafio'
  });

  // Scroll to top when active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleOpenModal = (type: 'desafio' | 'induccion') => {
    setModalState({ isOpen: true, type });
  };

  const handleCloseModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  const handleNavigateToTab = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#070907] text-white flex flex-col selection:bg-accent-gold/35 select-none font-sans overflow-x-hidden antialiased">
      {/* Absolute Ambient Shadows */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-accent-gold/5 via-[#0c100c]/5 to-transparent pointer-events-none" />

      {/* Navigation Header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenModal={handleOpenModal} 
      />

      {/* Main Views Container */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeTab === 'inicio' && (
            <motion.div
              key="inicio-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* New Full Screen Slideshow Hero Banner */}
              <TopHeroSlider />

              {/* Smooth scroll anchor */}
              <div id="welcome-content" />

              {/* Hero Section */}
              <Hero 
                onOpenModal={handleOpenModal} 
                onNavigateToTab={handleNavigateToTab} 
              />

              {/* 2. Governance Quick Home Preview Section */}
              <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="rounded-2xl glass-card border border-white/5 p-6 md:p-12 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="lg:col-span-7 space-y-4 text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent-gold font-sans block">
                      Diferencial Estratégico & Identidad
                    </span>
                    <h3 className="text-2xl md:text-3.5xl font-extrabold text-white font-sans leading-tight">
                      La evolución del ejercicio legal con visión corporativa
                    </h3>
                    <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed font-sans max-w-xl">
                      Reemplazamos las estructuras tradicionales de los bufetes rígidos por un modelo directo, donde interactúa exclusivamente con consejeros senior de trayectoria verificada.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <button
                        onClick={() => setActiveTab('gobernanza')}
                        className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest text-white border border-accent-gold/40 hover:bg-accent-gold-light transition-all cursor-pointer flex items-center gap-2 group"
                      >
                        Conozca la Gobernanza
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center space-y-2 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => setActiveTab('gobernanza')}>
                      <div className="p-2 rounded-lg bg-accent-gold-light text-accent-gold border border-accent-gold/20 w-fit mx-auto">
                        <Scale className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Sostenibilidad</h4>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center space-y-2 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => setActiveTab('consejeros')}>
                      <div className="p-2 rounded-lg bg-[#47543a]/20 text-[#9cb18c] border border-[#47543a]/30 w-fit mx-auto">
                        <Users className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Criterio Senior</h4>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center space-y-2 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => setActiveTab('dominios')}>
                      <div className="p-2 rounded-lg bg-accent-gold-light text-accent-gold border border-accent-gold/20 w-fit mx-auto">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Blindaje Penal</h4>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center space-y-2 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => setActiveTab('contacto')}>
                      <div className="p-2 rounded-lg bg-[#47543a]/20 text-[#9cb18c] border border-[#47543a]/30 w-fit mx-auto">
                        <HeartHandshake className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Canal Directo</h4>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. Practices Grid Section */}
              <Practices onNavigateToTab={handleNavigateToTab} />

              {/* Majestic Aesthetic CTAs in Montserrat Thin */}
              <AestheticCtas 
                onOpenModal={handleOpenModal}
                onNavigateToTab={handleNavigateToTab}
              />

              {/* Layered Full Screen Thin Montserrat Banner with layered black gradients */}
              <LayeredBanner onOpenModal={handleOpenModal} />

              {/* 4. Asymmetrical Photo "Riego" Collage Section */}
              <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-6 text-left">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent-gold font-sans block">Nuestro Consejo de Élite</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white font-sans">El Rostro de la Excellence</h3>
                  </div>
                  <button
                    onClick={() => setActiveTab('consejeros')}
                    className="text-xs font-bold text-[#9cb18c] hover:text-white uppercase tracking-widest transition-colors flex items-center gap-1.5 shrink-0 self-start md:self-end cursor-pointer font-sans"
                  >
                    Ver Consejeros & Biografías
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    "https://i.postimg.cc/QN218wv7/1000567058.png",
                    "https://i.postimg.cc/027mbZq7/1000567069.png",
                    "https://i.postimg.cc/BZrHSkRg/1000567075.jpg",
                    "https://i.postimg.cc/c1pwx2PD/1000567143.png",
                    "https://i.postimg.cc/Pr1ZPKkW/1000568113.png",
                    "https://i.postimg.cc/pXK8pktk/1000568793.png"
                  ].map((imgUrl, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setActiveTab('consejeros')}
                      className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 glass-card cursor-pointer transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-gold/10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-45 transition-opacity" />
                      <img 
                        src={imgUrl} 
                        alt="Consejero Principal" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute bottom-3 left-3 right-3 z-20">
                        <span className="text-xs font-bold uppercase tracking-widest text-accent-gold block">CONSEJERO</span>
                        <span className="text-xs text-zinc-300 block font-light leading-none">Consultoría de Élite</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 5. Insights Section */}
              <Insights />

              {/* 6. Quick Diagnostic CTA Banner */}
              <section className="pt-2 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="rounded-2xl bg-gradient-to-r from-accent-gold-light/20 via-[#47543a]/10 to-[#070907] border border-white/10 p-8 md:p-12 text-center relative overflow-hidden space-y-6">
                  <div className="max-w-2xl mx-auto space-y-3">
                    <span className="text-xs font-bold text-[#9cb18c] uppercase tracking-widest font-sans">Diagnóstico Exprés de Seguridad</span>
                    <h3 className="text-2xl md:text-4xl font-extrabold text-white font-sans">¿Su corporación está blindada?</h3>
                    <p className="text-xs md:text-sm text-zinc-400 font-light font-sans leading-relaxed">
                      Evalúe de forma anónima los puntos críticos de su estructura y reciba un diagnóstico estratégico directo.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      onClick={() => handleOpenModal('desafio')}
                      className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest bg-accent-gold text-white hover:bg-[#b56e2f] shadow-lg shadow-accent-gold/20 cursor-pointer"
                    >
                      Evaluar Desafío Corporativo
                    </button>
                    <button
                      onClick={() => setActiveTab('contacto')}
                      className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest border border-white/10 hover:bg-white/5 cursor-pointer"
                    >
                      Coordinar Reunión
                    </button>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'gobernanza' && (
            <motion.div
              key="gobernanza-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <GobernanzaView />
            </motion.div>
          )}

          {activeTab === 'consejeros' && (
            <motion.div
              key="consejeros-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Team />
            </motion.div>
          )}

          {activeTab === 'dominios' && (
            <motion.div
              key="dominios-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <DominioView />
            </motion.div>
          )}

          {activeTab === 'trayectoria' && (
            <motion.div
              key="trayectoria-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <TrayectoriaView />
            </motion.div>
          )}

          {activeTab === 'contacto' && (
            <motion.div
              key="contacto-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ContactoView />
            </motion.div>
          )}

          {activeTab === 'faq' && (
            <motion.div
              key="faq-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <FaqView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Footer Layout */}
      <footer className="border-t border-white/5 bg-[#050605] py-16 px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Box (4 cols): Brand identity & Divine Quote */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center">
                <img 
                  src="https://i.postimg.cc/Gm7p2s9g/logoconsilliumweb.png" 
                  alt="Consillium Jurídico Logo" 
                  referrerPolicy="no-referrer"
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </div>

              <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
                La alternativa vanguardista de alta gama que suprime la pesadez burocrática del bufete tradicional y aplica capital intelectual senior directo.
              </p>

              {/* Divine quote at the end as requested */}
              <div className="border-l-2 border-accent-gold/40 pl-3">
                <p className="text-[11px] font-medium text-zinc-300 font-sans italic">
                  “Con Dios siempre y la confianza en la justicia”.
                </p>
              </div>
            </div>

            {/* Middle Box (5 cols): Quick Navigation links */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-accent-gold font-sans mb-4">
                  Secciones Corporativas
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <button onClick={() => setActiveTab('inicio')} className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer">
                      Inicio
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActiveTab('gobernanza')} className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer">
                      Gobernanza & Protocolo
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActiveTab('consejeros')} className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer">
                      Nuestro Consejo Principal
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActiveTab('dominios')} className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer">
                      Áreas de Dominio (6 Especialidades)
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-accent-gold font-sans mb-4">
                  Soporte & Cobertura
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <button onClick={() => setActiveTab('trayectoria')} className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer">
                      Trayectoria y Capilaridad
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActiveTab('contacto')} className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer">
                      Canales de Contacto Directo
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActiveTab('faq')} className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer">
                      Inquietudes (FAQ)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleOpenModal('desafio')} className="text-xs text-accent-gold hover:text-white font-semibold transition-colors cursor-pointer">
                      Evaluación de Riesgo Exprés
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Box (3 cols): Coordinates & Phone */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-accent-gold font-sans">
                Canales de Atención
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-zinc-400">
                  <Phone className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                  <span className="font-sans">0422-606-59-22</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-400">
                  <Mail className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                  <span>contacto@consillium.com</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-400">
                  <MapPin className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                  <span className="leading-snug">Torre América, Piso 4, Bello Monte, Caracas.</span>
                </div>
              </div>
            </div>
          </div>

          {/* VI. Cláusula de Transparencia Legal (Full Copy, no suppression) */}
          <div className="border-t border-white/5 pt-8">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-[10px] text-zinc-500 leading-relaxed font-sans max-w-7xl">
              <strong className="text-zinc-400 block mb-1 uppercase tracking-wider font-semibold">VI. Cláusula de Transparencia Legal</strong>
              Consilium funciona como un Consejo de servicios profesionales coordinados. Los servicios jurídicos son prestados de forma independiente por los miembros del Consejo y sus aliados regionales, quienes mantienen su autonomía profesional y legal, pero actuando de manera mancomunada bajo protocolos unificados de dirección técnica y coordinación estratégica para proyectos de alta complejidad. Esta estructura optimizada e independiente constituye la alternativa vanguardista más robusta frente al modelo tradicional de bufetes, garantizando que el cliente acceda directamente al conocimiento de élite sin cargas o dilaciones burocráticas, o costos innecesarios.
            </div>
          </div>

          {/* Bottom Copyright bar */}
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-zinc-500">
            <p>Hecho por Legaint Corporation</p>
            <div className="flex items-center gap-4">
              <span>Confidencialidad Encriptada SSL</span>
              <span>•</span>
              <span>Normativa y Código de Conducta Activos</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Interactive Modal Form */}
      <ModalForm 
        isOpen={modalState.isOpen} 
        onClose={handleCloseModal} 
        type={modalState.type} 
      />
    </div>
  );
}
