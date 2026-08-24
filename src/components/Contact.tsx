import { motion } from 'motion/react';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-32 bg-[#020408] z-40 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-syne text-5xl md:text-7xl font-extrabold mb-6">
            Tem uma ideia?
          </h2>
          <h3 className="font-syne text-3xl md:text-5xl font-extrabold text-brand-accent mb-8">
            Vamos transformá-la em algo real.
          </h3>
          <p className="text-slate-400 font-jakarta text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Estamos prontos para entender o seu desafio e construir a solução ideal para o seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/551996008812?text=Ol%C3%A1%2C%20estava%20vendo%20o%20portf%C3%B3lio%20da%20ZIM%20HUB%20e%20gostaria%20de%20falar%20sobre%20um%20projeto." 
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full px-8 py-4 flex items-center justify-center gap-3 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <Mail size={20} />
              Falar Comigo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
