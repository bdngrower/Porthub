export type PortfolioCategory = 'Todos' | 'Web' | 'Landing Pages' | 'Sistemas' | 'E-commerce' | 'Microsoft' | 'Experimentos';

export interface PortfolioProject {
  slug: string;
  title: string;
  category: PortfolioCategory[];
  shortDescription: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  image: string;
  previewVideo?: string;
  projectType: string;
  role: string;
  gallery: string[];
  result: string;
  status: 'Live Project' | 'Concept' | 'In Development' | 'Internal';
  liveUrl?: string;
  nextProject?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'apple-shop-tv',
    title: 'APPLE SHOP TV',
    category: ['E-commerce', 'Web', 'Sistemas'],
    shortDescription: 'Plataforma comercial desenvolvida para criar uma experiência moderna de apresentação e venda de dispositivos Apple.',
    problem: 'Apresentar um catálogo de dispositivos Apple de forma mais moderna, organizada e comercial, proporcionando uma experiência melhor para descoberta dos produtos.',
    solution: 'Experiência digital desenvolvida para transformar produtos em uma jornada de descoberta.',
    features: [
      'Experiência Responsiva',
      'Catálogo Digital',
      'Interface Moderna',
      'Filtros Dinâmicos',
      'Checkout Simplificado'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=1000',
    previewVideo: '',
    projectType: 'E-commerce',
    role: 'Design & Development',
    gallery: [
      'https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555529902-5261145633bf?auto=format&fit=crop&q=80&w=800'
    ],
    result: 'Plataforma operando ativamente com alta taxa de conversão e elogios constantes dos usuários em relação à experiência premium.',
    status: 'Live Project',
    liveUrl: 'https://appleshoptv.com',
    nextProject: 'real-estate'
  },
  {
    slug: 'real-estate',
    title: 'REAL ESTATE DIGITAL EXPERIENCE',
    category: ['Landing Pages', 'Web', 'Experimentos'],
    shortDescription: 'Experiência imersiva para apresentação de empreendimento imobiliário premium.',
    problem: 'Como apresentar um empreendimento de alto padrão através de uma tela, transmitindo exclusividade e convertendo visitantes em leads qualificados sem parecer apenas mais um site imobiliário.',
    solution: 'Criação de uma landing page altamente interativa focada em storytelling, animações fluidas e elementos visuais de alto impacto para apresentar terrenos e imóveis de luxo.',
    features: [
      'Design premium e imersivo',
      'Storytelling através de scroll (Scroll-telling)',
      'Galeria de imagens interativa e expansível',
      'Captação de leads otimizada',
      'Animações cinemáticas'
    ],
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
    previewVideo: '',
    projectType: 'Landing Page',
    role: 'Design & Development',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800'
    ],
    result: 'Demonstração clara da capacidade de alinhar estética refinada com objetivos comerciais imobiliários.',
    status: 'Concept',
    nextProject: 'microsoft-management'
  },
  {
    slug: 'microsoft-management',
    title: 'MICROSOFT MANAGEMENT PLATFORM',
    category: ['Sistemas', 'Microsoft', 'Web'],
    shortDescription: 'Plataforma SaaS corporativa para facilitar a administração e visualização de ambientes Microsoft 365.',
    problem: 'Administradores de TI gastam horas navegando por diferentes portais da Microsoft para tarefas cotidianas como gestão de licenças, usuários e permissões.',
    solution: 'Um dashboard unificado e automatizado que consome APIs do Microsoft Graph para centralizar a gestão do tenant, simplificando tarefas e reduzindo o tempo de administração.',
    features: [
      'Dashboard unificado com métricas do tenant',
      'Gestão de usuários, grupos e permissões',
      'Monitoramento de licenciamento M365',
      'Automação de tarefas repetitivas (Onboarding/Offboarding)',
      'Relatórios e logs de auditoria integrados'
    ],
    technologies: ['React', 'Node.js', 'Microsoft Graph API', 'Entra ID', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    previewVideo: '',
    projectType: 'SaaS Dashboard',
    role: 'Full Stack Development',
    gallery: [
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    ],
    result: 'Redução drástica no tempo de administração diária e aumento da visibilidade de segurança para as equipes de TI.',
    status: 'Internal',
    nextProject: 'apple-shop-tv'
  }
];
