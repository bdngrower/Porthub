import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const timelineData = [
  { year: '2020', role: 'Instrutor de Tecnologia', desc: 'Início da jornada de capacitação em tecnologia.' },
  { year: '2022', role: 'Suporte Técnico', desc: 'Atendimento direto, resolvendo problemas reais de infraestrutura.' },
  { year: '2024', role: 'Implantação Sênior', desc: 'Estruturação de ambientes corporativos complexos.' },
  { year: '2025', role: 'Liderança de Suporte', desc: 'Gestão de processos e equipes técnicas.' },
  { year: 'ZIM HUB', role: 'Criação de soluções digitais', desc: 'Unindo a visão de infraestrutura com engenharia de software.', highlight: true }
];

export default function Timeline() {
  return (
    <section className="relative w-full py-24 bg-[#020408] z-40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold mb-6">
            A Trajetória
          </h2>
          <p className="text-slate-300 font-jakarta text-lg leading-relaxed mb-6">
            Minha experiência profissional não começou em um editor de código, mas no campo de batalha da TI corporativa: suporte técnico, servidores, redes e implantações.
          </p>
          <p className="text-slate-300 font-jakarta text-lg leading-relaxed mb-8">
            Compreender ecossistemas complexos de gestão e infraestrutura me deu uma base sólida para criar soluções digitais orientadas à realidade operacional das empresas, e não apenas ao visual.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative"
        >
          <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-blue-500/20" />
          
          <div className="space-y-8 relative">
            {timelineData.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-start gap-8"
              >
                <div className={`w-8 h-8 rounded-full border-4 border-[#020408] flex items-center justify-center shrink-0 z-10 ${
                  item.highlight ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]' : 'bg-slate-700'
                }`}>
                  {item.highlight && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
                </div>
                
                <div className="pt-1">
                  <span className={`text-sm font-bold tracking-wider uppercase mb-1 block ${
                    item.highlight ? 'text-brand-accent' : 'text-slate-500'
                  }`}>{item.year}</span>
                  <h4 className="text-xl font-syne font-bold text-white mb-2">{item.role}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
