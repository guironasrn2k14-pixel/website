import React from "react";

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-main-bg">
      {/* Cinematic Tech Grid (Editing/Tech) */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }}
      ></div>

      {/* Grid overlay mask for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-main-bg via-transparent to-main-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-main-bg via-transparent to-main-bg"></div>
      
      {/* Noise texturing (Art/Film) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>
    </div>
  );
}
