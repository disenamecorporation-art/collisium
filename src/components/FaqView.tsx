import React, { useState } from 'react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FaqView() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-gold/10 border border-accent-gold/20 rounded-full">
          <HelpCircle className="w-4 h-4 text-accent-gold" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-gold font-sans">
            Resolución de Inquietudes
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
          Preguntas Frecuentes
        </h2>
        <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
          Comprenda cómo nuestra arquitectura ágil y el capital intelectual de élite mitigan riesgos y potencian la toma de decisiones.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div 
              key={idx}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'bg-white/5 border-accent-gold/40 shadow-lg shadow-accent-gold/5' 
                  : 'bg-[#0f110f]/70 border-white/5 hover:border-white/12'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <span className="text-sm font-sans font-extrabold text-accent-gold pt-0.5 shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h4 className="text-xs md:text-sm font-bold text-white tracking-wide font-sans">
                    {faq.q}
                  </h4>
                </div>
                <div className="text-zinc-400 hover:text-white shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4 text-accent-gold" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 md:px-6 pb-6 pt-1 border-t border-white/5 ml-6">
                      <p className="text-xs text-zinc-300 leading-relaxed font-light font-sans">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Trust Badge footer */}
      <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center max-w-xl mx-auto space-y-3">
        <ShieldCheck className="w-8 h-8 text-accent-gold mx-auto animate-pulse" />
        <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Compromiso Inquebrantable</h4>
        <p className="text-xs text-zinc-400 leading-relaxed font-light font-sans">
          En CONSILIUM, cada asunto corporativo se rige plenamente por nuestro estándar de máxima diligencia, confidencialidad absoluta y ética profesional estricta.
        </p>
      </div>
    </div>
  );
}
