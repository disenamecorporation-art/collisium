import React, { useState } from 'react';
import { Menu, X, ShieldAlert, Sparkles, PhoneCall } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenModal: (type: 'desafio' | 'induccion') => void;
}

export default function Navbar({ activeTab, setActiveTab, onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: { id: ActiveTab; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'gobernanza', label: 'Gobernanza' },
    { id: 'consejeros', label: 'Consejeros' },
    { id: 'dominios', label: 'Áreas de Dominio' },
    { id: 'trayectoria', label: 'Trayectoria & Cobertura' },
    { id: 'contacto', label: 'Contacto' },
    { id: 'faq', label: 'Preguntas Frecuentes' },
  ];

  const handleTabClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 py-4 bg-[#070907]/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3 rounded-full glass-container shadow-lg border border-white/5 relative">
        {/* Logo and Branding */}
        <div 
          onClick={() => handleTabClick('inicio')} 
          className="flex items-center pl-4 cursor-pointer group"
        >
          <img 
            src="https://i.postimg.cc/Gm7p2s9g/logoconsilliumweb.png" 
            alt="Consillium Jurídico Logo" 
            referrerPolicy="no-referrer"
            className="h-16 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                activeTab === item.id
                  ? 'bg-accent-gold/20 text-white border border-accent-gold/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center gap-3 pr-2">
          <button
            onClick={() => onOpenModal('desafio')}
            className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-white glass-button-gold cursor-pointer"
          >
            Consulta Legal
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-3 pr-2">
          <button
            onClick={() => onOpenModal('desafio')}
            className="sm:inline-block hidden px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white glass-button-gold cursor-pointer"
          >
            Consulta
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 p-5 rounded-2xl bg-[#090b09]/95 backdrop-blur-xl border border-white/10 shadow-2xl z-50">
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className="w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
              >
                {item.label}
              </button>
            ))}
            <div className="h-px bg-white/5 my-2" />
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenModal('desafio');
                }}
                className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-center bg-accent-gold text-white hover:bg-[#b56e2f] transition-all"
              >
                Evaluar Desafío
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenModal('induccion');
                }}
                className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-center border border-[#47543a]/50 text-[#9cb18c] bg-[#47543a]/20 hover:bg-[#47543a]/30 transition-all"
              >
                Inducción
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
