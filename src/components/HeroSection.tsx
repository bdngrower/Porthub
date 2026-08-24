import { useEffect, useRef, MouseEvent, TouchEvent } from 'react';
import ParticleCanvas from './ParticleCanvas';
import Navigation from './Navigation';
import HeroContent from './HeroContent';
import Footer from './Footer';

export default function HeroSection() {
  const maskRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const coords = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovered: false });

  useEffect(() => {
    // Initialize starting position
    coords.current.x = window.innerWidth * 0.65;
    coords.current.y = window.innerHeight * 0.5;
    coords.current.targetX = coords.current.x;
    coords.current.targetY = coords.current.y;

    let animationFrameId: number;

    const animate = () => {
      const c = coords.current;
      const ease = c.isHovered ? 0.15 : 0.04;

      // Idle organic orbit motion
      if (!c.isHovered) {
        const time = Date.now() * 0.0012;
        c.targetX = (window.innerWidth * 0.65) + Math.cos(time) * 50;
        c.targetY = (window.innerHeight * 0.50) + Math.sin(time * 1.3) * 35;
      }

      // Linear interpolation (lerp)
      c.x += (c.targetX - c.x) * ease;
      c.y += (c.targetY - c.y) * ease;

      const radius = 140;

      if (maskRef.current) {
        const maskStyle = `radial-gradient(circle ${radius}px at ${c.x}px ${c.y}px, black 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.3) 70%, transparent 100%)`;
        maskRef.current.style.maskImage = maskStyle;
        maskRef.current.style.webkitMaskImage = maskStyle;
      }

      if (haloRef.current) {
        haloRef.current.style.left = `${c.x}px`;
        haloRef.current.style.top = `${c.y}px`;
        haloRef.current.style.width = `${radius * 2}px`;
        haloRef.current.style.height = `${radius * 2}px`;
        haloRef.current.style.transform = `translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    // We use clientX/clientY which are viewport-relative. 
    // This works perfectly if the hero is full screen and at the top.
    coords.current.targetX = e.clientX;
    coords.current.targetY = e.clientY;
    coords.current.isHovered = true;
  };

  const handleMouseLeave = () => {
    coords.current.isHovered = false;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      coords.current.targetX = e.touches[0].clientX;
      coords.current.targetY = e.touches[0].clientY;
      coords.current.isHovered = true;
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
    >
      {/* Base Statue Layer */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src="/marmore.png"
          alt="Base Statue"
          className="w-full h-full object-contain object-center md:object-contain md:object-[right_center] -translate-y-4 md:-translate-y-8 opacity-40 md:opacity-50 select-none pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, transparent 30%, black 60%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 30%, black 60%, black 100%)'
          }}
        />
      </div>

      {/* Cyber Grid Pattern - Blue */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Cyber Glow Statue (Masked Reveal Layer) */}
      <div
        ref={maskRef}
        className="absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none"
        style={{ maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat' }}
      >
        <img
          src="/marmore.png"
          alt="Cyber Statue Glow"
          className="w-full h-full object-contain object-center md:object-contain md:object-[right_center] -translate-y-4 md:-translate-y-8 select-none"
          style={{
            // Hue-rotate 210deg shifts into a deeper blue spectrum.
            filter: 'sepia(1) hue-rotate(210deg) saturate(200%) brightness(0.9) contrast(1.5)',
            mixBlendMode: 'plus-lighter',
            maskImage: 'linear-gradient(to right, transparent 0%, transparent 30%, black 60%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 30%, black 60%, black 100%)'
          }}
        />
      </div>

      {/* Floating Canvas Particles */}
      <ParticleCanvas />

      {/* Cyber Spotlight Follower Halo */}
      <div
        ref={haloRef}
        className="absolute z-20 border border-brand-accent/20 rounded-full pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 25px rgba(37,99,235,0.25), 0 0 25px rgba(37,99,235,0.25)'
        }}
      />

      {/* Foreground UI Layer */}
      <div className="absolute inset-0 z-30 flex flex-col justify-between pointer-events-none py-6 px-6 md:px-12 lg:px-16">
        <Navigation />
        <HeroContent />
        <Footer />
      </div>
    </section>
  );
}
