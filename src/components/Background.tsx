import React from "react";
import {
  Camera,
  Clapperboard,
  Film,
  Video,
  Aperture,
  MonitorPlay,
  SlidersHorizontal,
  HardDrive,
  Mic2,
  Tv,
} from "lucide-react";

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-main-bg transition-colors duration-300">
      {/* Cinematic Tech Grid (Editing/Tech) */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] light:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }}
      ></div>

      {/* Grid overlay mask for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-main-bg via-transparent to-main-bg transition-colors duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-main-bg via-transparent to-main-bg transition-colors duration-300"></div>

      {/* Cinematic Light Leaks (Direction/Art) */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-600/10 blur-[150px] mix-blend-screen animate-pulse duration-10000"></div>
      <div className="absolute top-[30%] right-[-15%] w-[50vw] h-[70vw] rounded-full bg-orange-600/10 blur-[150px] mix-blend-screen animate-pulse duration-7000 delay-1000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[50vw] rounded-full bg-purple-600/10 blur-[150px] mix-blend-screen animate-pulse duration-9000 delay-500"></div>
      
      {/* Film / Timeline tracks (Editing) */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-red-500/50 to-transparent left-[15%] blur-[1px]"></div>
        <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-teal-500/50 to-transparent right-[20%] blur-[2px]"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent top-[35%] blur-[1px]"></div>
      </div>

      {/* Floating Equipment Icons - Tech/Direction/Art - subtle layer */}
      <div className="absolute inset-0 overflow-hidden mix-blend-screen opacity-[0.1]">
        {/* Top left cluster */}
        <Clapperboard className="absolute top-[15%] left-[10%] w-16 h-16 text-white rotate-[-12deg] blur-[1px]" />
        <Aperture className="absolute top-[25%] left-[25%] w-10 h-10 text-orange-400 rotate-[45deg]" />
        <HardDrive className="absolute top-[10%] left-[30%] w-12 h-12 text-teal-400 rotate-[5deg] blur-[2px]" />

        {/* Center/Mid cluster */}
        <Film className="absolute top-[40%] left-[45%] w-24 h-24 text-gray-300 rotate-[15deg] blur-[1px]" />
        <Camera className="absolute top-[35%] right-[30%] w-14 h-14 text-teal-400 rotate-[-5deg]" />

        {/* Right cluster */}
        <Video className="absolute top-[15%] right-[15%] w-32 h-32 text-purple-400 rotate-[8deg] blur-[2px]" />
        <MonitorPlay className="absolute top-[45%] right-[8%] w-20 h-20 text-blue-400 rotate-[-10deg]" />

        {/* Bottom cluster */}
        <SlidersHorizontal className="absolute bottom-[25%] left-[20%] w-16 h-16 text-red-400 rotate-[-5deg]" />
        <Mic2 className="absolute bottom-[15%] left-[35%] w-12 h-12 text-gray-300 rotate-[20deg] blur-[1px]" />
        <Tv className="absolute bottom-[20%] right-[25%] w-16 h-16 text-teal-300 rotate-[12deg] blur-[1px]" />
        <Clapperboard className="absolute bottom-[10%] right-[10%] w-20 h-20 text-orange-300 rotate-[-20deg] blur-[3px]" />
      </div>
      
      {/* Noise texturing (Art/Film) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>
    </div>
  );
}
