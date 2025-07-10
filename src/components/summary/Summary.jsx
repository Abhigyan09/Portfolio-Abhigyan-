import {forwardRef} from "react";
import {motion} from "framer-motion";

import {slideIn} from "lib/constants/motion";

import Code from "src/components/summary/Code";
import ColorCodes from "src/components/summary/ColorCodes";
import Intro from "src/components/summary/Intro";
import SectionWrapper from "src/hoc/SectionWrapper";

const Summary = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="summary"
      className="w-full h-[calc(100svh-4rem)] 
                grid lg:grid-rows-1 grid-rows-2 lg:grid-cols-5 lg:gap-2
                relative overflow-hidden"
    >
      {/* --- MODERN TECHY BACKGROUND LAYERS --- */}
      {/* 1. Abstract Blobs/Shapes (vibrant, techy colors) */}
      <div className="absolute inset-0 -z-30 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[40vw] h-[40vw] bg-gradient-to-br from-cyan-400/60 via-blue-500/40 to-purple-600/40 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-[30vw] h-[30vw] bg-gradient-to-br from-fuchsia-400/40 via-pink-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/3 w-[30vw] h-[20vw] bg-gradient-to-br from-emerald-400/40 via-cyan-400/30 to-blue-400/30 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      {/* 2. Mesh Gradient (more contrast, techy colors) */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.5)_0%,transparent_70%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.5)_0%,transparent_70%),radial-gradient(circle_at_50%_50%,rgba(251,113,133,0.4)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.3)_0%,transparent_70%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.3)_0%,transparent_70%),radial-gradient(circle_at_50%_50%,rgba(251,113,133,0.2)_0%,transparent_70%)] animate-gradient-mesh" />
      </div>

      {/* 3. Subtle Animated Grid/Mesh Overlay (more subtle, thinner, dotted) */}
      <div className="absolute inset-0 -z-15 pointer-events-none">
        <svg width="100%" height="100%" className="w-full h-full" style={{opacity: 0.08}}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="0" cy="0" r="1" fill="#6ee7b7" />
              <circle cx="40" cy="0" r="1" fill="#6ee7b7" />
              <circle cx="0" cy="40" r="1" fill="#6ee7b7" />
              <circle cx="40" cy="40" r="1" fill="#6ee7b7" />
              <line x1="0" y1="0" x2="40" y2="0" stroke="#6ee7b7" strokeWidth="0.5" strokeDasharray="2,6" />
              <line x1="0" y1="0" x2="0" y2="40" stroke="#6ee7b7" strokeWidth="0.5" strokeDasharray="2,6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* 4. Animated SVG Wave (smooth, organic, full width, with glow) */}
      <div className="absolute left-0 bottom-0 w-screen max-w-none h-[28vh] md:h-[32vh] lg:h-[36vh] z-10 pointer-events-none -z-10" style={{bottom: 0}}>
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-screen max-w-none h-full left-0 bottom-0">
            <defs>
              <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#a21caf" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="16" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path id="animatedWave" d="M0,240 Q360,320 720,240 T1440,240 V320 H0 Z" fill="url(#waveGradient)" filter="url(#glow)"/>
          </svg>
          {/* CSS keyframes for wave animation */}
          <style>{`
            @keyframes waveMove {
              0%, 100% { d: path('M0,240 Q360,320 720,240 T1440,240 V320 H0 Z'); }
              25% { d: path('M0,220 Q360,280 720,260 T1440,220 V320 H0 Z'); }
              50% { d: path('M0,260 Q360,200 720,280 T1440,260 V320 H0 Z'); }
              75% { d: path('M0,220 Q360,320 720,200 T1440,220 V320 H0 Z'); }
            }
            #animatedWave {
              animation: waveMove 8s infinite linear;
            }
          `}</style>
        {/* Soft mesh gradient and subtle noise overlay for modern look */}
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 60% 80%, rgba(99,102,241,0.12) 0%, transparent 70%), radial-gradient(circle at 20% 20%, rgba(34,211,238,0.10) 0%, transparent 70%)'}} />
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%\' height=\'100%\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E")'}} />
      </div>

      {/* 5. Subtle Animated Particles (more, brighter) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400/70 dark:bg-cyan-300/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* 6. Glassmorphism Card (more pronounced, more space above wave, soft shadow) */}
      <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-5xl h-[70vh] bg-white/80 dark:bg-white/10 backdrop-blur-3xl rounded-3xl shadow-2xl border-2 border-cyan-300/40 dark:border-purple-400/30 z-0" style={{boxShadow: '0 12px 48px 0 rgba(0, 255, 255, 0.10)'}} />

      {/* --- MAIN CONTENT --- */}
      <motion.div
        variants={slideIn("left", "tween", 0.1, 0.4)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true}}
        className="h-full w-full flex flex-col gap-5 justify-center items-center lg:col-span-3 z-20"
      >
        <div className="h-full w-full bg-transparent relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)] dark:[mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
          <div className="z-[50]">
            <Intro />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.1, 0.8)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true}}
        className="h-full w-full lg:col-span-2 py-10 
                      flex flex-col gap-5 justify-center items-center
                      bg-gradient-to-b from-secondary to-tertiary dark:from-[#232323] dark:to-secondary
                      rounded-bl-[15rem] rounded-tl-[15rem] z-20"
      >
        <Code />
        <ColorCodes />
      </motion.div>
    </section>
  );
});

export default SectionWrapper(Summary);
