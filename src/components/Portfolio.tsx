import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioProjects, PortfolioCategory } from '../data/portfolio';

const categories: PortfolioCategory[] = ['Todos', 'Web', 'Landing Pages', 'Sistemas', 'E-commerce', 'Microsoft', 'Experimentos'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('Todos');

  const filteredProjects = portfolioProjects.filter(
    (project) => activeFilter === 'Todos' || project.category.includes(activeFilter)
  );

  return (
    <section id="portfolio" className="relative w-full py-24 bg-[#020408] z-40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <h2 className="font-syne text-4xl md:text-5xl font-extrabold mb-4">Case Studies</h2>
              <p className="text-slate-400 max-w-2xl">Mais do que ferramentas, nós construímos soluções. Explore nossos cases mais recentes.</p>
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category 
                      ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.slug}
              >
                <Link to={`/portfolio/${project.slug}`} className="group relative rounded-2xl overflow-hidden border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.05)] cursor-pointer h-[400px] flex flex-col hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500 block">
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-transform duration-700 transform group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-20" />
                  
                  <div className="relative z-30 mt-auto p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex gap-2 mb-3">
                      {project.category.slice(0, 2).map((cat) => (
                        <span key={cat} className="text-brand-accent text-xs font-bold uppercase tracking-wider bg-blue-900/40 px-2 py-0.5 rounded border border-blue-500/30 backdrop-blur-sm">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-syne font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 text-sm line-clamp-2 mb-6">{project.shortDescription}</p>
                    
                    <div className="inline-flex items-center gap-2 text-white font-medium group-hover:text-brand-accent transition-colors">
                      Ler Case Study <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
