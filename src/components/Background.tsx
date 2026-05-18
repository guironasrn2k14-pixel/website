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
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-main-bg"></div>

      {/* Abstract radial gradients inspired by the reference */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-500/10 blur-[120px]"></div>
      <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-orange-500/10 blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[40vw] rounded-full bg-red-500/10 blur-[120px]"></div>
      <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-blue-500/10 blur-[120px]"></div>

      {/* SVG overlay for subtle tech/timeline paths */}
      <svg
        className="absolute inset-0 w-full h-[150%] md:h-full opacity-[0.6] mix-blend-screen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="glowLine" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glowNode" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <pattern
            id="fade-dots"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1.5"
              fill="currentColor"
              className="text-gray-600/30"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fade-dots)" />

        {/* Connection lines */}
        <g filter="url(#glowLine)">
          <path
            d="M -100,200 C 300,300 400,100 800,400 S 1200,300 1600,500"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-teal-400 opacity-80"
          />
          <path
            d="M -100,500 C 200,500 300,700 800,600 S 1100,800 1600,700"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-orange-400 opacity-80"
          />
          <path
            d="M 200,-100 Q 200,300 400,400 T 800,900"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-red-400 opacity-80"
          />
          <path
            d="M 1200,-100 Q 1100,400 1400,600 T 1300,1200"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-blue-400 opacity-80"
          />
        </g>

        {/* Abstract nodes - glowing dots */}
        <g filter="url(#glowNode)">
          <circle
            cx="300"
            cy="250"
            r="10"
            fill="currentColor"
            className="text-teal-400"
          />
          <circle
            cx="300"
            cy="250"
            r="4"
            fill="currentColor"
            className="text-teal-100"
          />

          <circle
            cx="800"
            cy="400"
            r="14"
            fill="currentColor"
            className="text-orange-400"
          />
          <circle
            cx="800"
            cy="400"
            r="6"
            fill="currentColor"
            className="text-orange-100"
          />

          <circle
            cx="200"
            cy="500"
            r="8"
            fill="currentColor"
            className="text-red-400"
          />
          <circle
            cx="200"
            cy="500"
            r="3"
            fill="currentColor"
            className="text-red-100"
          />

          <circle
            cx="1200"
            cy="400"
            r="16"
            fill="currentColor"
            className="text-blue-400"
          />
          <circle
            cx="1200"
            cy="400"
            r="7"
            fill="currentColor"
            className="text-blue-100"
          />

          <circle
            cx="1400"
            cy="600"
            r="12"
            fill="currentColor"
            className="text-orange-400"
          />
          <circle
            cx="1400"
            cy="600"
            r="5"
            fill="currentColor"
            className="text-orange-100"
          />
        </g>
      </svg>

      {/* Floating Equipment Icons - less blurred for depth */}
      <div className="absolute inset-0 overflow-hidden mix-blend-screen opacity-[0.18]">
        {/* Top left cluster */}
        <Clapperboard className="absolute top-[15%] left-[10%] w-16 h-16 text-white rotate-[-12deg] blur-[1px]" />
        <Aperture className="absolute top-[25%] left-[25%] w-10 h-10 text-orange-400 rotate-[45deg]" />
        <HardDrive className="absolute top-[10%] left-[30%] w-12 h-12 text-teal-400 rotate-[5deg] blur-[2px]" />

        {/* Center/Mid cluster */}
        <Film className="absolute top-[40%] left-[45%] w-24 h-24 text-gray-300 rotate-[15deg] blur-[1px]" />
        <Camera className="absolute top-[35%] right-[30%] w-14 h-14 text-white rotate-[-5deg]" />

        {/* Right cluster */}
        <Video className="absolute top-[15%] right-[15%] w-32 h-32 text-gray-400 rotate-[8deg] blur-[2px]" />
        <MonitorPlay className="absolute top-[45%] right-[8%] w-20 h-20 text-blue-400 rotate-[-10deg]" />

        {/* Bottom cluster */}
        <SlidersHorizontal className="absolute bottom-[25%] left-[20%] w-16 h-16 text-red-400 rotate-[-5deg]" />
        <Mic2 className="absolute bottom-[15%] left-[35%] w-12 h-12 text-gray-300 rotate-[20deg] blur-[1px]" />
        <Tv className="absolute bottom-[20%] right-[25%] w-16 h-16 text-teal-300 rotate-[12deg] blur-[1px]" />
        <Clapperboard className="absolute bottom-[10%] right-[10%] w-20 h-20 text-orange-300 rotate-[-20deg] blur-[3px]" />
      </div>
    </div>
  );
}
