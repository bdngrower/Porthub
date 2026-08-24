import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function HeroContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="pointer-events-auto flex flex-col justify-center max-w-4xl pt-16 md:pt-0 pb-20 md:pb-0 z-30"
    >
      {/* Headings */}
      <h1 className="font-syne text-[3.5rem] leading-none sm:text-7xl xl:text-[8.5rem] sm:leading-[0.9] font-extrabold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] mb-4 sm:mb-6 tracking-tight">
        ZIM HUB
      </h1>
      
      <p className="text-lg sm:text-3xl font-light text-slate-200 tracking-wide font-jakarta max-w-2xl mb-6 sm:mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-snug">
        Transformando ideias em experiências digitais.
      </p>

      <div className="flex flex-wrap gap-2 sm:gap-3 items-center text-sm sm:text-base text-brand-accent font-medium mb-8 sm:mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
        <span>Landing Pages</span>
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
        <span>Sistemas</span>
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
        <span>E-commerce</span>
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
        <span>Automação</span>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4">
        <Link to="/#portfolio" className="bg-blue-600 hover:bg-blue-500 text-white rounded-full pl-6 pr-2 py-2 flex items-center group font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
          Ver Projetos
          <div className="w-8 h-8 rounded-full bg-white text-blue-600 ml-4 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
            <ArrowRight size={16} />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
