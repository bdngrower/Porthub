import { motion } from 'motion/react';
import { Layout, Globe2, Code, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8 text-brand-accent" />,
    title: 'Landing Pages',
    description: 'Páginas modernas, responsivas e orientadas a conversão para produtos, serviços, imóveis e geração de leads. Foco total em UI/UX e performance.'
  },
  {
    icon: <Globe2 className="w-8 h-8 text-brand-accent" />,
    title: 'Sites & Portais',
    description: 'Desenvolvimento de sites corporativos, catálogos e experiências digitais escaláveis que comunicam perfeitamente o valor da sua marca.'
  },
  {
    icon: <Code className="w-8 h-8 text-brand-accent" />,
    title: 'Sistemas Personalizados',
    description: 'Quando uma ferramenta pronta não resolve, construímos a solução. Dashboards, sistemas administrativos, portais internos e ferramentas sob medida.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-accent" />,
    title: 'Microsoft 365 & Automação',
    description: 'Configuração, licenciamento, Entra ID e automação de processos em ambientes Microsoft. Infraestrutura sólida por trás das interfaces.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full py-24 bg-black z-40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold mb-4">Nossos Serviços</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Soluções digitais completas que unem experiência visual refinada com bases técnicas robustas.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-capsule p-8 rounded-2xl flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-syne font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
