import React, { useState } from 'react';
import { Clock, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InsightArticle {
  id: string;
  category: 'Regulatorio' | 'Infraestructura' | 'Deportivo' | 'Digital';
  title: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
}

const ARTICLES: InsightArticle[] = [
  {
    id: "insight-1",
    category: "Regulatorio",
    title: "Análisis Crítico de la Adecuación Tributaria Municipal y Expropiaciones",
    date: "Julio 18, 2026",
    readTime: "6 min",
    summary: "Impacto de regulaciones locales en planificación tributaria y salvaguardas frente a litigios.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "insight-2",
    category: "Infraestructura",
    title: "Gobernanza de Activos Críticos bajo Estándares Globales de Sostenibilidad",
    date: "Julio 10, 2026",
    readTime: "8 min",
    summary: "Ciclo de vida de infraestructura pesada, derecho aeronáutico y viabilidad ante fiscalizaciones.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "insight-3",
    category: "Deportivo",
    title: "Nuevas Directrices en el Cumplimiento de Contratos Deportivos de Elite",
    date: "Junio 28, 2026",
    readTime: "5 min",
    summary: "Estructuración de entidades deportivas, resguardo de derechos de imagen y obligaciones de atletas.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "insight-4",
    category: "Digital",
    title: "Fintech, Protección de Datos y Procesal Digital en Venezuela",
    date: "Junio 15, 2026",
    readTime: "7 min",
    summary: "Modelos fintech y adaptabilidad en cumplimiento estricto de privacidad y firmas electrónicas.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
  }
];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Regulatorio', 'Infraestructura', 'Deportivo', 'Digital'];

  const filteredArticles = selectedCategory === 'Todos' 
    ? ARTICLES 
    : ARTICLES.filter(art => art.category === selectedCategory);

  // Animation Variants for sequential slide-down "falling" effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.98 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 14
      } 
    }
  };

  return (
    <section className="pt-16 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Title Header with custom thin design */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8 text-left">
        <div>
          <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-white uppercase font-sans">
            Publicaciones
          </h2>
        </div>

        {/* Categories Tab selector */}
        <div className="flex flex-wrap items-center gap-1.5 self-start md:self-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-none text-[10px] font-light uppercase tracking-[0.2em] transition-all cursor-pointer border ${
                selectedCategory === cat 
                  ? 'bg-accent-gold/20 text-white border-accent-gold/50' 
                  : 'bg-white/5 text-zinc-400 border-transparent hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Cascading List with glass-card design */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((article) => {
            return (
              <motion.div
                key={article.id}
                variants={itemVariants}
                layout
                exit={{ opacity: 0, y: 30 }}
                className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 md:py-6 md:px-10 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl hover:border-accent-gold/30 hover:bg-white/[0.06] transition-all duration-500 gap-6 cursor-pointer"
              >
                {/* Decorative Left Border Glow on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-l-2xl" />

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 flex-1">
                  
                  {/* Elegant Aspect-Ratio Cover Image with reveal shadow */}
                  <div className="relative w-20 h-20 md:w-28 md:h-20 overflow-hidden shrink-0 rounded-xl border border-white/10 group-hover:border-accent-gold/30 transition-colors duration-500">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                    />
                  </div>

                  {/* Metadata & Title Container */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-4 text-[10px] font-light uppercase tracking-[0.2em] text-[#9cb18c] font-sans">
                      <span className="flex items-center gap-1.5 text-accent-gold">
                        <Tag className="w-3 h-3" />
                        {article.category}
                      </span>
                      <span className="text-zinc-500">•</span>
                      <span className="flex items-center gap-1.5 text-zinc-400 font-sans">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-base md:text-lg font-light tracking-[0.06em] text-white leading-snug group-hover:text-accent-gold transition-colors font-sans max-w-3xl">
                      {article.title}
                    </h3>
                  </div>
                </div>

                {/* Right Area: Date and Interactive Call to Action */}
                <div className="flex items-center justify-between md:flex-col md:items-end gap-2 pt-4 md:pt-0 border-t md:border-t-0 border-white/5 shrink-0">
                  <span className="text-[10px] text-zinc-500 font-light tracking-[0.15em] uppercase font-sans md:mb-1">{article.date}</span>
                  <span className="text-[10px] font-light text-accent-gold flex items-center gap-2 uppercase tracking-[0.25em] font-sans group-hover:translate-x-1 transition-transform duration-300">
                    Leer Alerta
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
