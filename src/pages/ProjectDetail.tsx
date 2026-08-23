import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { portfolioProjects } from '../data/portfolio';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = portfolioProjects.find(p => p.slug === slug);
  const nextProject = project?.nextProject ? portfolioProjects.find(p => p.slug === project.nextProject) : null;
  const videoRef = useRef<HTMLVideoElement>(null);

  // Scroll to top on mount and when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Pause video when out of viewport
  useEffect(() => {
    if (!videoRef.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(videoRef.current);
    
    return () => observer.disconnect();
  }, [project?.previewVideo]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black">
        <h1 className="text-4xl font-syne font-bold mb-4 text-white">Projeto não encontrado</h1>
        <p className="text-slate-400 mb-8">O case que você procura não existe ou foi removido.</p>
        <Link to="/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full px-6 py-3 transition-colors">
          Voltar para Home
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white selection:bg-brand-accent selection:text-black font-jakarta">
      <div className="px-6 md:px-12 lg:px-16 py-6 absolute top-0 w-full z-50 flex items-center justify-between pointer-events-auto">
        <Navigation />
      </div>

      {/* Intro Header */}
      <section className="relative pt-48 pb-16 px-6 md:px-12 lg:px-16 max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <Link to="/#portfolio" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 font-medium">
            <ArrowLeft size={18} /> Todos os projetos
          </Link>
          <div className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 font-syne">
            Case Study / 01
          </div>
          <h1 className="font-syne text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Meta Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10">
          <div>
            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Tipo</div>
            <div className="font-medium">{project.projectType}</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Status</div>
            <div className="font-medium text-emerald-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              {project.status}
            </div>
          </div>
          <div>
            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Atuação</div>
            <div className="font-medium">{project.role}</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Categorias</div>
            <div className="font-medium">{project.category.join(' • ')}</div>
          </div>
        </div>
      </section>

      {/* Main Preview (Video or Image) */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full mb-32">
        <div className="w-full aspect-video bg-[#04080c] rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/5 relative group">
          {/* Subtle glow behind preview */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] -z-10 rounded-[2rem] opacity-50" />
          
          {project.previewVideo ? (
            <video 
              ref={videoRef}
              src={project.previewVideo} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover"
              poster={project.image}
            />
          ) : (
            <img 
              src={project.image} 
              alt={`${project.title} Preview`} 
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </section>

      {/* Editorial Content */}
      <section className="px-6 md:px-12 lg:px-16 max-w-4xl mx-auto w-full space-y-32 mb-32">
        
        {/* O Projeto */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-slate-500 font-syne mb-2">01 / The Challenge</h2>
            <h3 className="text-3xl font-syne font-bold">O desafio</h3>
          </div>
          <div>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              {project.problem}
            </p>
          </div>
        </div>

        {/* A Solução */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-slate-500 font-syne mb-2">02 / The Solution</h2>
            <h3 className="text-3xl font-syne font-bold">A solução</h3>
          </div>
          <div>
            <p className="text-2xl md:text-4xl font-syne font-medium leading-tight mb-12 text-white">
              {project.solution}
            </p>
            {project.gallery && project.gallery.length > 0 && (
              <div className="rounded-2xl overflow-hidden border border-white/5">
                <img src={project.gallery[0]} alt="Screenshot 1" className="w-full h-auto" />
              </div>
            )}
          </div>
        </div>

        {/* Principais Recursos */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <div>
            <h3 className="text-3xl font-syne font-bold">Principais recursos</h3>
          </div>
          <div className="space-y-8">
            {project.features.map((feature, idx) => (
              <div key={idx} className="border-b border-white/10 pb-8">
                <div className="text-brand-accent font-syne font-bold text-lg mb-2">0{idx + 1}</div>
                <h4 className="text-xl font-bold mb-2 text-white">{feature}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Gallery Images */}
        {project.gallery && project.gallery.length > 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.gallery.slice(1).map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden border border-white/5 aspect-square">
                <img src={img} alt={`Screenshot ${idx + 2}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        {/* Resultado */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-slate-500 font-syne mb-2">03 / The Result</h2>
            <h3 className="text-3xl font-syne font-bold">Resultado</h3>
          </div>
          <div>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              {project.result}
            </p>
          </div>
        </div>
      </section>

      {/* Next Project */}
      {nextProject && (
        <Link to={`/portfolio/${nextProject.slug}`} className="block relative border-t border-white/10 group cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-black z-0" />
          <img 
            src={nextProject.image} 
            alt={nextProject.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 grayscale group-hover:grayscale-0 z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-20" />
          
          <div className="relative z-30 py-32 px-6 md:px-12 lg:px-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="text-sm font-bold tracking-widest uppercase text-slate-400 font-syne mb-6">
              Next Case
            </div>
            <h2 className="font-syne text-5xl md:text-7xl font-extrabold text-white group-hover:text-brand-accent transition-colors duration-500 flex items-center justify-center gap-4 flex-wrap">
              {nextProject.title} <ArrowRight className="w-12 h-12 md:w-16 md:h-16 transform group-hover:translate-x-4 transition-transform duration-500" />
            </h2>
          </div>
        </Link>
      )}

      <div className="px-6 md:px-12 lg:px-16 py-6 border-t border-white/5 bg-[#020408]">
        <Footer />
      </div>
    </div>
  );
}
