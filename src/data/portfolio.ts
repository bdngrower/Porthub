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
    shortDescription: 'E-commerce completo e premium focado em iPhones, com sistema de checkout integrado e uma sessão exclusiva de autoavaliação de aparelhos desenvolvida sob medida para o projeto.',
    problem: 'Apresentar um catálogo de dispositivos Apple de forma mais moderna, organizada e comercial, proporcionando uma experiência melhor para descoberta dos produtos.',
    solution: 'Desenvolvimento de um e-commerce altamente imersivo e focado na conversão. O projeto conta com checkout integrado e traz como principal inovação uma sessão de autoavaliação guiada de iPhones seminovos, criada exclusivamente para engajar o usuário e gerar orçamentos imediatos.',
    features: [
      'Experiência Responsiva',
      'Catálogo Digital',
      'Interface Moderna',
      'Sessão de Autoavaliação de iPhones',
      'Checkout Simplificado'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/videos/appleshoptv/apple-shop-tv-poster.jpg',
    previewVideo: '/videos/appleshoptv/apple-shop-tv-preview.mp4',
    projectType: 'E-commerce',
    role: 'Design & Development',
    gallery: [],
    result: 'Plataforma operando ativamente com alta taxa de conversão e elogios constantes dos usuários em relação à experiência premium.',
    status: 'Live Project',
    liveUrl: 'https://appleshoptv.com',
    nextProject: 'real-estate-experience'
  },
  {
    slug: 'real-estate-experience',
    title: 'REAL ESTATE DIGITAL EXPERIENCE',
    category: ['Landing Pages', 'Web', 'Experimentos'],
    shortDescription: 'Experiência digital imersiva criada para demonstrar uma nova forma de apresentar e comercializar ativos imobiliários industriais, combinando narrativa visual, informações técnicas e localização estratégica.',
    problem: 'Apresentações imobiliárias tradicionais costumam concentrar muitas informações técnicas em páginas pouco envolventes. O desafio foi encontrar uma forma de comunicar escala, localização e potencial de um ativo industrial sem transformar a experiência em apenas mais um anúncio imobiliário.',
    solution: 'Foi desenvolvida uma landing page imersiva orientada por storytelling, iniciada por uma apresentação audiovisual e seguida por uma navegação fluida pelo empreendimento. A experiência organiza dados técnicos e comerciais em uma linguagem visual premium, utilizando mapa interativo, indicadores, imagens conceituais, galeria, informações de acesso e chamadas para contato.',
    features: [
      'Apresentação cinematográfica de abertura',
      'Storytelling conduzido pelo scroll',
      'Mapa com cartografia do OpenStreetMap',
      'Visualização de acessos e destinos estratégicos',
      'Apresentação das dimensões e características do terreno',
      'Galeria visual interativa',
      'Área preparada para filme institucional ou tour de drone',
      'Cenário comercial demonstrativo',
      'Chamadas para contato e apresentação comercial',
      'Experiência responsiva para desktop e dispositivos móveis'
    ],
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    image: '/videos/real state/real-estate-experience-poster.png',
    previewVideo: '/videos/real state/real-estate-experience-preview.mp4',
    projectType: 'Landing Page',
    role: 'Design & Development',
    gallery: [],
    result: 'O resultado é um protótipo funcional que demonstra como ativos imobiliários industriais podem ser apresentados de forma mais estratégica, visual e comercial. A experiência transforma informações técnicas em uma narrativa clara e envolvente, criando uma base que pode ser adaptada para terrenos, galpões, condomínios empresariais e outros empreendimentos imobiliários.',
    status: 'Concept',
    nextProject: 'microsoft-management-platform'
  },
  {
    slug: 'microsoft-management-platform',
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
