import { motion } from 'motion/react';

const steps = [
  { num: '01', title: 'Understand', desc: 'Entender o negócio e o problema de ponta a ponta.' },
  { num: '02', title: 'Design', desc: 'Planejar experiência, arquitetura de dados e interface.' },
  { num: '03', title: 'Build', desc: 'Desenvolver utilizando tecnologias modernas e IA como acelerador.' },
  { num: '04', title: 'Validate', desc: 'Testar usabilidade, segurança, responsividade e funcionamento.' },
  { num: '05', title: 'Launch', desc: 'Publicar e acompanhar o desempenho da solução em produção.' }
];

export default function Process() {
  return (
    <section className="relative w-full py-24 bg-black z-40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold mb-4">O Processo</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Nossos projetos não são montados. Eles são construídos sob um processo lógico focado no resultado.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 justify-between relative">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-900/0 via-blue-500/20 to-blue-900/0 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-1 relative z-10 flex flex-row md:flex-col items-center md:items-start md:text-center gap-6 md:gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#04080c] border border-blue-500/30 flex items-center justify-center text-xl font-syne font-bold text-brand-accent shadow-[0_0_20px_rgba(37,99,235,0.1)] shrink-0 mx-auto">
                {step.num}
              </div>
              <div>
                <h3 className="text-xl font-syne font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
