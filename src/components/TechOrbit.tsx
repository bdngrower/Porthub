import { motion } from 'motion/react';
import { Shield, Cpu, Activity, Database, Network } from 'lucide-react';

export default function TechOrbit() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden" style={{ perspective: '1200px' }}>
      
      {/* Deep Space Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />
      
      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

      {/* 3D Gyroscope System */}
      <motion.div 
        animate={{ rotateX: [60, 65, 60], rotateY: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
        className="absolute w-full h-full flex items-center justify-center pointer-events-none"
      >
         {/* Outer Ring - Solid/Glowing */}
         <motion.div
           animate={{ rotateZ: 360 }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border-t-[3px] border-b-[1px] border-transparent border-t-cyan-500/50 border-b-blue-600/30 shadow-[inset_0_0_40px_rgba(6,182,212,0.1)]"
         />
         
         {/* Middle Ring - Dashed high tech */}
         <motion.div
           animate={{ rotateZ: -360 }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           style={{ transform: 'translateZ(30px) rotateX(20deg)', transformStyle: 'preserve-3d' }}
           className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border-[2px] border-dashed border-blue-400/40"
         />

         {/* Inner Ring - Accelerated */}
         <motion.div
           animate={{ rotateZ: 360 }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           style={{ transform: 'translateZ(-30px) rotateY(30deg)', transformStyle: 'preserve-3d' }}
           className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full border-l-[2px] border-r-[2px] border-blue-300/60"
         >
            {/* Orbiting Energy Node */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee] animate-pulse" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]" />
         </motion.div>
      </motion.div>

      {/* The Data Core (Faces Camera, not affected by 3D tilt) */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.95, 1.05, 0.95], opacity: 1 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#04080c]/60 border border-cyan-500/40 flex items-center justify-center shadow-[0_0_80px_rgba(6,182,212,0.3)] backdrop-blur-md"
      >
        {/* Inner Core Pulse */}
        <div className="absolute inset-1 rounded-full border border-blue-400/30 animate-ping opacity-30" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-600/40 to-cyan-400/40 mix-blend-screen animate-pulse" />
        
        <span className="font-syne font-extrabold text-white text-3xl md:text-4xl tracking-widest z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
          ZIM
        </span>
      </motion.div>

      {/* Floating High-Tech Nodes (Floating around the core) */}
      <motion.div 
         animate={{ y: [-15, 15, -15], rotate: [0, 5, -5, 0] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-[10%] left-[10%] md:left-[20%] glass-capsule p-3 rounded-xl border border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)] flex items-center gap-2 z-30"
      >
         <Activity size={18} />
         <span className="text-[10px] font-mono font-bold tracking-wider hidden sm:block">SYSTEM.OK</span>
      </motion.div>

      <motion.div 
         animate={{ y: [15, -15, 15], rotate: [0, -5, 5, 0] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         className="absolute bottom-[15%] right-[5%] md:right-[15%] glass-capsule p-3 rounded-xl border border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.15)] flex items-center gap-2 z-30"
      >
         <Network size={18} />
         <span className="text-[10px] font-mono font-bold tracking-wider hidden sm:block">SECURE_NET</span>
      </motion.div>
      
       <motion.div 
         animate={{ y: [-10, 10, -10], x: [-10, 10, -10] }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
         className="absolute top-[25%] right-[10%] md:right-[20%] glass-capsule p-3 rounded-full border border-slate-400/30 text-slate-300 z-20"
      >
         <Cpu size={20} />
      </motion.div>

      <motion.div 
         animate={{ y: [10, -10, 10], x: [10, -10, 10] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
         className="absolute bottom-[25%] left-[15%] md:left-[25%] glass-capsule p-3 rounded-full border border-blue-500/20 text-blue-300 z-20"
      >
         <Database size={20} />
      </motion.div>

      <motion.div 
         animate={{ y: [-15, 15, -15], x: [5, -5, 5] }}
         transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
         className="absolute top-[70%] left-[10%] md:left-[15%] glass-capsule p-3 rounded-full border border-blue-400/20 text-cyan-200 z-20"
      >
         <Shield size={20} />
      </motion.div>

    </div>
  );
}
