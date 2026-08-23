import { motion } from 'motion/react';
import { Target, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full py-32 bg-[#04080c] z-40 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-6 font-syne">
              01 / Quem somos
            </div>
            
            <h2 className="font-syne text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Tecnologia não começa pelo código. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Começa pelo problema.
              </span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-slate-300 font-jakarta text-lg leading-relaxed mb-6"
            >
              Não desenvolvemos tecnologia apenas para existir. Desenvolvemos para resolver problemas reais. A ZIM HUB nasce da combinação entre profunda experiência corporativa e frameworks tecnológicos modernos.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-slate-400 font-jakarta text-lg leading-relaxed mb-12 font-light"
            >
              Nossa vivência em infraestrutura, processos corporativos, segurança e ecossistema Microsoft nos permite compreender o núcleo do seu negócio antes de escrever a primeira linha de código, garantindo que cada solução entregue resultados reais.
            </motion.p>
            
            {/* Stats / Pillars */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex gap-12 border-t border-white/10 pt-8"
            >
              <div className="group cursor-default">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu className="text-blue-500 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <h4 className="text-2xl font-syne font-bold text-white">Engenharia</h4>
                </div>
                <p className="text-slate-500 text-sm font-medium tracking-wide">DESIGN & BUILD</p>
              </div>
              
              <div className="w-px bg-white/10" />

              <div className="group cursor-default">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-brand-accent w-5 h-5 group-hover:scale-110 transition-transform" />
                  <h4 className="text-2xl font-syne font-bold text-white">Estratégia</h4>
                </div>
                <p className="text-slate-500 text-sm font-medium tracking-wide">DEPLOY & SCALE</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Visual/Motion Composition */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] flex items-center justify-center">
            
            {/* Decorative Orbit/Wireframe */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 md:inset-12 border border-white/5 rounded-full border-dashed z-0 opacity-50"
            />
            
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 md:inset-24 border border-blue-500/10 rounded-full z-0 opacity-30"
            />

            {/* Main Floating Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              animate={{ y: [-15, 15, -15] }}
              style={{
                animation: "float 6s ease-in-out infinite"
              }}
              className="relative z-10 w-4/5 md:w-3/4 aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.15)] group"
            >
              <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700 z-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
              
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                alt="ZIM HUB Philosophy" 
                className="w-full h-full object-cover grayscale-[70%] group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
              />
            </motion.div>

            {/* Floating Glass Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              animate={{ y: [0, -10, 0] }}
              style={{
                animation: "float-delayed 7s ease-in-out infinite"
              }}
              className="absolute bottom-12 -right-4 md:bottom-20 md:-right-8 z-20 glass-capsule px-6 py-4 flex items-center gap-4 border border-white/10 shadow-2xl backdrop-blur-xl"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center shrink-0 relative">
                <div className="absolute inset-0 rounded-full border border-blue-400 animate-ping opacity-20" />
                <span className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_10px_#60a5fa]" />
              </div>
              <div>
                <p className="text-white font-syne font-bold text-lg leading-tight">Inovação</p>
                <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mt-0.5">Orientada a Dados</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(-15px); }
          50% { transform: translateY(15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
}
