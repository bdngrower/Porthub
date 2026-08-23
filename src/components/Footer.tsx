import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pointer-events-auto flex items-end justify-between w-full pb-4 z-30">
      {/* Socials */}
      <div className="flex items-center gap-5">
        {[Facebook, Instagram, Twitter].map((Icon, idx) => (
          <a
            key={idx}
            href="#"
            className="text-slate-400 hover:text-brand-accent transition-colors"
            aria-label="Social Link"
          >
            <Icon size={20} strokeWidth={1.5} />
          </a>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex flex-col items-center gap-3 absolute left-1/2 bottom-10 -translate-x-1/2 pointer-events-none">
        <div className="w-[22px] h-[36px] rounded-full border-[1.5px] border-slate-400/50 flex justify-center pt-2 backdrop-blur-sm">
          <div className="w-[4px] h-[6px] rounded-full bg-brand-accent scroll-wheel shadow-[0_0_8px_#3b82f6]" />
        </div>
      </div>
    </footer>
  );
}
