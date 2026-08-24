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
              className="flex flex-col sm:flex-row gap-6 sm:gap-12 border-t border-white/10 pt-8"
            >
              <div className="group cursor-default">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu className="text-blue-500 w-5 h-5 shrink-0 group-hover:rotate-12 transition-transform" />
                  <h4 className="text-xl md:text-2xl font-syne font-bold text-white">Engenharia</h4>
                </div>
                <p className="text-slate-500 text-sm font-medium tracking-wide">DESIGN & BUILD</p>
              </div>
              
              <div className="w-full h-px sm:w-px sm:h-auto bg-white/10" />
              
              <div className="group cursor-default">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-brand-accent w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl md:text-2xl font-syne font-bold text-white">Estratégia</h4>
                </div>
                <p className="text-slate-500 text-sm font-medium tracking-wide">DEPLOY & SCALE</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Visual/Motion Composition */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] flex items-center justify-center">
            
            {/* Background ambient glow specifically for the video */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />

            {/* Laser Border Wrapper */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-[90%] md:w-[80%] aspect-[4/5] rounded-3xl overflow-hidden p-[2px] shadow-[0_0_50px_rgba(37,99,235,0.15)] group"
            >
              {/* Spinning Laser Gradient Effect */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50%] z-0"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 70%, #06b6d4 85%, #3b82f6 100%)'
                }}
              />
              
              {/* Inner container to mask video and provide background */}
              <div className="absolute inset-[2px] bg-[#04080c] rounded-[22px] overflow-hidden z-10 flex items-center justify-center">
                 <video 
                   src="/Video.mp4" 
                   autoPlay 
                   loop 
                   muted 
                   playsInline 
                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                 />
                 {/* Subtle overlay to blend it in */}
                 <div className="absolute inset-0 bg-blue-900/10 mix-blend-screen pointer-events-none" />
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
