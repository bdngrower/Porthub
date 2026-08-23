import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Início', href: '/#home' },
  { name: 'Sobre', href: '/#about' },
  { name: 'Serviços', href: '/#services' },
  { name: 'Portfólio', href: '/#portfolio' },
  { name: 'Contato', href: '/#contact' }
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="pointer-events-auto flex items-center justify-between w-full relative z-50">
      {/* Logo */}
      <div className="flex items-center cursor-pointer group h-12 md:h-16">
        <img 
          src="/ZIMHUBPNG.png" 
          alt="ZIM HUB" 
          className="h-full w-auto object-contain drop-shadow-2xl scale-[1.8] md:scale-[2.5] origin-left hover:scale-[1.85] md:hover:scale-[2.55] transition-transform duration-300" 
        />
      </div>

      {/* Desktop Nav Capsule */}
      <nav className="hidden md:flex glass-capsule rounded-full px-6 py-2 gap-8 items-center">
        {navItems.map((item, idx) => (
          <a
            key={item.name}
            href={item.href}
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
              href={item.href}
              className="text-xl font-syne font-bold text-white hover:text-brand-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
