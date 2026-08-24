import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Início', href: 'home' },
  { name: 'Sobre', href: 'about' },
  { name: 'Serviços', href: 'services' },
  { name: 'Portfólio', href: 'portfolio' },
  { name: 'Contato', href: 'contact' }
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // Update URL hash without reloading via router
      navigate(`/#${href}`, { replace: true });
    } else {
      // If we are on another page, navigate to Home first
      navigate(`/#${href}`);
    }
  };

  return (
    <header className="pointer-events-auto flex items-center justify-between w-full relative z-50">
      {/* Logo */}
      <Link to="/#home" className="flex items-center cursor-pointer group h-12 md:h-16">
        <img 
          src="/ZIMHUBPNG.png" 
          alt="ZIM HUB" 
          className="h-full w-auto object-contain drop-shadow-2xl scale-[1.8] md:scale-[2.5] origin-left hover:scale-[1.85] md:hover:scale-[2.55] transition-transform duration-300" 
        />
      </Link>

      {/* Desktop Nav Capsule */}
      <nav className="hidden md:flex glass-capsule rounded-full px-6 py-2 gap-8 items-center">
        {navItems.map((item, idx) => (
          <a
            key={item.name}
            href={`/#${item.href}`}
            onClick={(e) => handleNavClick(e, item.href)}
            className={`text-sm font-medium transition-colors hover:text-brand-accent relative py-1 ${
              idx === 0 ? 'text-white' : 'text-slate-300'
            }`}
          >
            {item.name}
            {idx === 0 && (
              <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-4 h-[2px] bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />
            )}
          </a>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 rounded-full glass-btn flex items-center justify-center"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div className="absolute top-24 left-0 w-full glass-capsule rounded-2xl p-6 flex flex-col gap-6 md:hidden shadow-2xl shadow-blue-500/10 z-50">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`/#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xl font-syne font-bold text-white hover:text-brand-accent"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
