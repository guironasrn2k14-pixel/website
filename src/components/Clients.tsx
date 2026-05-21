import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, MessageSquare, Heart, Check, Activity, Fingerprint, ScanEye, Zap, Aperture, Cpu } from "lucide-react";

const panels = [
  {
    id: "iza",
    type: "screenshot",
    client: "Iza",
    image: "/feed1.png.png",
    labels: ["TEXT VALIDATION", "DATA AUDIT", "PROFILE VERIFIED"],
    theme: "amber",
    accent: "text-amber-400",
    bgAccent: "bg-amber-500",
    shadow: "shadow-amber-500/20"
  },
  {
    id: "lioness",
    type: "screenshot",
    client: "lionessheart_cosplay",
    image: "/feed2.png.png",
    labels: ["REAL FEEDBACK", "FIELD CAPTURE", "LIVE VALIDATION"],
    theme: "violet",
    accent: "text-violet-400",
    bgAccent: "bg-violet-500",
    shadow: "shadow-violet-500/20"
  },
  {
    id: "fernando",
    type: "screenshot",
    client: "Fernando",
    image: "/feed3.png.png",
    labels: ["DELIVERY CONFIRMED", "CLIENT SATISFACTION", "FAST TURNAROUND"],
    theme: "purple",
    accent: "text-purple-400",
    bgAccent: "bg-purple-500",
    shadow: "shadow-purple-500/20"
  }
];

export default function Clients() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % panels.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="relative w-full h-[100vh] min-h-[800px] bg-transparent overflow-hidden flex items-center justify-center perspective-[2000px]">
      
      <div className="w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center relative z-10">

        {/* Carousel Container */}
        <div className="relative w-full h-[600px] flex items-center justify-center transform-gpu preserve-3d">
          <AnimatePresence mode="popLayout" initial={false}>
            {panels.map((panel, idx) => {
              const isActive = activeIndex === idx;
              const isPrev = activeIndex === (idx + 1) % panels.length;
              const isNext = activeIndex === (idx - 1 + panels.length) % panels.length;
              
              if (!isActive && !isPrev && !isNext && panels.length > 3) return null;

              return (
                <motion.div
                  key={panel.id}
                  initial={{ 
                    opacity: 0, 
                    x: isNext ? 200 : isPrev ? -200 : 0, 
                    z: -400, 
                    rotateY: isNext ? -25 : isPrev ? 25 : 0 
                  }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.3,
                    x: isActive ? 0 : isNext ? "25%" : "-25%",
                    z: isActive ? 0 : -200,
                    rotateY: isActive ? 0 : isNext ? -20 : 20,
                    scale: isActive ? 1 : 0.85,
                    filter: isActive ? "blur(0px)" : "blur(8px)"
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.8,
                    z: -400
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.19, 1.0, 0.22, 1.0] 
                  }}
                  className={`absolute w-full max-w-sm sm:max-w-md h-[550px] cursor-pointer ${isActive ? 'z-20 pointer-events-auto' : 'z-10 pointer-events-none'}`}
                  onClick={() => !isActive && setActiveIndex(idx)}
                >
                  {/* Holographic Glowing Border / Glass panel */}
                  <div className={`w-full h-full rounded-[2rem] p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl ${isActive ? panel.shadow : 'shadow-none'} backdrop-blur-2xl transition-shadow duration-1000 flex flex-col`}>
                    <div className="w-full h-full bg-transparent rounded-[2rem] overflow-hidden flex flex-col relative border border-white/5">
                      
                      {/* TYPE: SCREENSHOT */}
                      {panel.type === 'screenshot' && panel.image && (
                        <div className="flex-1 w-full h-full relative overflow-hidden group">
                          {/* Inner Header Floating */}
                          <div className="absolute top-0 left-0 right-0 p-4 border-b border-white/5 bg-black/40 backdrop-blur-md z-10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h4 className="text-sm font-bold text-white flex items-center gap-1.5 drop-shadow-md">
                              {panel.client}
                              <CheckCircle2 size={12} className="text-blue-400" />
                            </h4>
                          </div>

                          {/* Image filling the panel */}
                          <img 
                            src={panel.image} 
                            alt={`Print from ${panel.client}`} 
                            className="w-full h-full absolute top-0 left-0 object-cover object-top bg-transparent"
                            key={panel.image}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${panel.client}&background=202c33&color=fff&size=512`;
                            }}
                          />
                          
                          {/* Mask to hide the bottom text without zooming the image horizontally */}
                          <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-gradient-to-t from-[#0a0a09] via-[#0a0a09]/95 to-transparent pointer-events-none z-[15]" />
                          
                          {/* Fake U-shape border to "finish" the lines seamlessly */}
                          <div 
                            className="absolute bottom-4 h-[120px] rounded-b-[2rem] border-b-[2px] border-l-[2px] border-r-[2px] pointer-events-none z-[20]"
                            style={{
                              left: panel.image.includes('feed1') ? '4.8%' : panel.image.includes('feed2') ? '3.6%' : '4.6%',
                              right: panel.image.includes('feed1') ? '4.8%' : panel.image.includes('feed2') ? '3.6%' : '4.6%',
                              borderColor: panel.image.includes('feed1') ? 'rgba(168, 85, 247, 0.5)' : 'rgba(245, 158, 11, 0.5)',
                              boxShadow: `inset 0 -10px 20px -10px ${panel.image.includes('feed1') ? '#a855f7' : '#f59e0b'}, 0 10px 20px -10px ${panel.image.includes('feed1') ? '#a855f7' : '#f59e0b'}`,
                              maskImage: 'linear-gradient(to bottom, transparent, black 60%)',
                              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 60%)',
                            }}
                          />

                          {/* Decorative overlay effects */}
                          {isActive && (
                            <>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blend-overlay pointer-events-none" />
                              
                              {/* Scanline over image */}
                              <motion.div 
                                animate={{ top: ["-10%", "110%"] }} 
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                                className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" 
                              />
                            </>
                          )}
                        </div>
                      )}

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination Bottom */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center z-30">
          <div className="flex gap-3">
            {[0, 1, 2].map(idx => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 transition-all duration-500 rounded-full ${activeIndex === idx ? "w-10 bg-[#d4af37]" : "w-3 bg-white/20 hover:bg-white/40"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

