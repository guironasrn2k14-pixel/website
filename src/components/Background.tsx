import React, { useEffect, useState } from "react";

/**
 * Plano de Fundo Imersivo & Marca D'água Ambiente (Estética Arte Japonesa / Mangá)
 * Suporte completo a Modo Escuro (Charcoal) e Modo Claro (Off-White).
 * 
 * - Dark Mode: Fundo #121316, traços #2A2D35 (opacidade 6%-8%).
 * - Light Mode: Fundo #F8FAFC, traços #CBD5E1 (opacidade 7%-10%).
 * - Sincronização em tempo real via MutationObserver sem atrasos (delays).
 */
export default function Background() {
  const [scrollY, setScrollY] = useState(0);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Detecta e sincroniza a classe .light no html
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax suave
  const skyOffset = scrollY * 0.03;
  const cloudsOffset = scrollY * 0.06;
  const horizonOffset = scrollY * 0.02;

  // Cor dos traços vetoriais
  const strokeColor = isLight ? "#CBD5E1" : "#2A2D35";
  const strokeOpacity = isLight ? 0.085 : 0.07;

  return (
    <div 
      className={`fixed inset-0 z-0 pointer-events-none overflow-hidden select-none transition-colors duration-300 ${
        isLight ? "bg-[#FAFAFA]" : "bg-[#121316]"
      }`}
      aria-hidden="true"
    >
      {/* 1. TEXTURA TÉCNICA LINEAR ULTRA-SUTIL */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${strokeColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${strokeColor} 1px, transparent 1px)
          `,
          backgroundSize: '4.5rem 4.5rem',
        }}
      />

      {/* 2. CAMADA DO CÉU: Lua e Estrelas Minimalistas */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, -${skyOffset}px, 0)` }}
      >
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMin slice"
          className="w-full h-[115vh]"
        >
          {/* LUA CRESCENTE DISCRETA EM NANQUIM (Canto Superior Direito) */}
          <g transform="translate(1200, 80) scale(0.9)" style={{ opacity: strokeOpacity }}>
            <circle
              cx="45"
              cy="45"
              r="54"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.8"
              strokeDasharray="3 7"
            />
            {/* Linha da Lua Crescente */}
            <path
              d="M 52,12 C 24,26 18,58 38,78 C 15,64 18,30 42,14 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="34" cy="46" r="1.2" fill={strokeColor} />
            <circle cx="38" cy="56" r="0.9" fill={strokeColor} />
          </g>

          {/* ESTRELAS DISTANTES EM PONTOS MINIMALISTAS E BRILHOS DISCRETOS */}
          <g style={{ opacity: strokeOpacity }} fill={strokeColor} stroke={strokeColor}>
            <circle cx="160" cy="110" r="1.2" />
            <path d="M 160,105 L 160,115 M 155,110 L 165,110" strokeWidth="0.5" />
            <circle cx="280" cy="70" r="1.4" />
            <circle cx="440" cy="130" r="1" />
            <circle cx="680" cy="85" r="1.3" />
            <path d="M 680,81 L 680,89 M 676,85 L 684,85" strokeWidth="0.5" />
            <circle cx="890" cy="120" r="1.1" />
            <circle cx="1060" cy="65" r="1.4" />
            <path d="M 1060,60 L 1060,70 M 1055,65 L 1065,65" strokeWidth="0.5" />

            {/* Constelação linear discreta */}
            <circle cx="210" cy="190" r="1.1" />
            <circle cx="245" cy="220" r="0.9" />
            <circle cx="290" cy="205" r="1.2" />
            <line x1="210" y1="190" x2="245" y2="220" strokeWidth="0.4" strokeOpacity="0.6" />
            <line x1="245" y1="220" x2="290" y2="205" strokeWidth="0.4" strokeOpacity="0.6" />

            <circle cx="1320" cy="180" r="1" />
            <circle cx="1380" cy="240" r="1.2" />
            <circle cx="120" cy="340" r="1" />
            <circle cx="1350" cy="420" r="1.1" />
          </g>
        </svg>
      </div>

      {/* 3. CAMADA DAS NUVENS KUMO E ONDAS DE VENTO SUAVES */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, -${cloudsOffset}px, 0)` }}
      >
        <svg
          viewBox="0 0 1440 1100"
          preserveAspectRatio="xMidYMin slice"
          className="w-full h-[130vh]"
        >
          {/* NUVEM KUMO SUAVE 1 (Superior Esquerda) */}
          <g transform="translate(60, 130) scale(1.05)" style={{ opacity: strokeOpacity * 0.9 }}>
            <path
              d="M 30,85 
                 C 10,80 2,62 16,46 
                 C 14,30 35,18 55,24 
                 C 70,8 102,10 116,26 
                 C 132,14 164,20 172,40 
                 C 192,38 210,52 206,72 
                 C 220,82 216,100 196,108 
                 C 186,120 162,120 148,114 
                 C 132,124 104,124 90,114 
                 C 70,124 40,116 30,100 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Espirais internas */}
            <path
              d="M 54,58 C 48,46 64,38 74,46 C 80,52 76,62 66,64 C 58,65 56,56 62,52"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.85"
              strokeLinecap="round"
            />
            <path
              d="M 122,54 C 118,42 134,35 146,42 C 154,48 148,60 138,60 C 130,60 128,52 134,48"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.85"
              strokeLinecap="round"
            />
            <path
              d="M 10,75 Q -30,78 -60,76"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.75"
              strokeDasharray="4 6"
            />
          </g>

          {/* NUVEM KUMO SUAVE 2 (Lateral Direita) */}
          <g transform="translate(1080, 240) scale(1)" style={{ opacity: strokeOpacity * 0.85 }}>
            <path
              d="M 20,55 
                 C 6,42 20,24 38,26 
                 C 50,12 78,10 92,24 
                 C 108,12 135,16 145,30 
                 C 165,26 184,38 182,55 
                 C 195,68 188,86 172,92 
                 C 160,102 136,100 125,92 
                 C 110,100 84,100 70,92 
                 C 52,100 28,94 22,82 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 78,46 C 74,36 88,30 98,36 C 104,42 100,52 92,52"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.8"
            />
          </g>

          {/* ONDAS DE VENTO SUTIS */}
          <g style={{ opacity: strokeOpacity * 0.8 }} stroke={strokeColor} fill="none">
            <path
              d="M -30,200 C 180,190 380,225 580,200 C 740,180 890,210 1080,190 C 1240,175 1370,200 1500,185"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="140 35 90 45"
            />
            <path
              d="M -40,540 C 190,520 390,555 590,530 C 790,505 990,545 1190,520 C 1330,505 1430,530 1520,515"
              strokeWidth="0.9"
              strokeLinecap="round"
              strokeDasharray="180 40 80 50"
            />
            <path
              d="M 330,370 C 355,360 380,375 375,395 C 370,408 355,410 345,402 C 338,394 345,386 354,390"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      {/* 4. CAMADA DAS MONTANHAS LINEARES & EXPLORADOR NO RODAPÉ */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, -${horizonOffset}px, 0)` }}
      >
        <svg
          viewBox="0 0 1440 960"
          preserveAspectRatio="xMidYMax slice"
          className="w-full h-full"
        >
          {/* CORDILHEIRA DE MONTANHAS DISTANTES */}
          <g style={{ opacity: strokeOpacity * 0.8 }} stroke={strokeColor} fill="none">
            <path
              d="M -40,780 
                 L 110,725 L 210,755 L 360,685 L 450,720 L 580,645 L 700,715 
                 L 820,665 L 930,710 L 1070,635 L 1190,695 L 1310,625 L 1480,715"
              strokeWidth="0.9"
              strokeLinejoin="round"
            />
            <path
              d="M -30,835 
                 L 80,780 L 180,810 L 280,745 L 360,785 L 470,735 
                 L 610,820 L 750,770 L 890,830 L 1010,765 L 1140,815 L 1290,755 L 1470,845"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
            <path
              d="M 50,865 Q 80,858 110,865 Q 140,872 170,865
                 M 400,880 Q 430,872 460,880 Q 490,888 520,880
                 M 800,870 Q 830,862 860,870 Q 890,878 920,870"
              strokeWidth="0.75"
              strokeOpacity="0.8"
            />
          </g>

          {/* SILHUETA DISCRETA DE EXPLORADOR NO CANTO INFERIOR DIREITO */}
          <g 
            transform="translate(1270, 690) scale(1.05)" 
            style={{ opacity: strokeOpacity * 1.1 }}
          >
            {/* Penhasco rochoso sutil */}
            <path
              d="M -20,210 C 25,198 60,194 105,190 C 135,188 175,185 210,182 L 230,270 L -30,270 Z"
              fill={isLight ? "#F1F5F9" : "#121316"}
              stroke={strokeColor}
              strokeWidth="1"
            />
            {/* Corpo e pernas */}
            <path
              d="M 66,145 L 62,180 L 58,205 L 72,205 L 74,180 L 78,148
                 M 84,148 L 90,178 L 94,202 L 108,202 L 100,176 L 94,145"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Sobretudo */}
            <path
              d="M 56,110 C 52,125 48,140 42,156 C 54,150 68,148 80,150 C 94,148 108,152 118,158 C 112,140 108,125 104,110 Z"
              fill={isLight ? "#F8FAFC" : "#121316"}
              stroke={strokeColor}
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Mochila */}
            <rect
              x="60"
              y="82"
              width="36"
              height="44"
              rx="5"
              fill={isLight ? "#F1F5F9" : "#121316"}
              stroke={strokeColor}
              strokeWidth="1.2"
            />
            {/* Isolante térmico */}
            <rect
              x="56"
              y="68"
              width="44"
              height="10"
              rx="3"
              fill={isLight ? "#F1F5F9" : "#121316"}
              stroke={strokeColor}
              strokeWidth="0.9"
            />
            {/* Braços */}
            <path
              d="M 54,86 C 48,98 46,112 48,125
                 M 104,86 C 110,98 112,112 108,124"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1"
              strokeLinecap="round"
            />
            {/* Cabeça e cabelo */}
            <path
              d="M 74,64 
                 C 70,58 71,50 74,44 
                 C 72,42 69,44 67,48 
                 C 66,40 72,34 77,32 
                 C 77,28 83,28 85,33 
                 C 88,31 92,34 91,38 
                 C 95,38 96,44 93,48 
                 C 96,52 93,60 89,64 Z"
              fill={isLight ? "#F1F5F9" : "#121316"}
              stroke={strokeColor}
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      {/* 5. MÁSCARA RADIAL SUAVE: Garante que os cards em branco puro se destaquem perfeitamente */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(248, 250, 252, 0.4) 0%, rgba(248, 250, 252, 0.85) 85%, #F8FAFC 100%)"
            : "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(18, 19, 22, 0.4) 0%, rgba(18, 19, 22, 0.85) 85%, #121316 100%)",
        }}
      />

      {/* Gradientes de borda para transição sem costuras */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t via-transparent pointer-events-none ${
          isLight ? "from-[#F8FAFC] to-[#F8FAFC]/70" : "from-[#121316] to-[#121316]/70"
        }`} 
      />
      <div 
        className={`absolute inset-0 bg-gradient-to-r via-transparent pointer-events-none ${
          isLight ? "from-[#F8FAFC]/80 to-[#F8FAFC]/80" : "from-[#121316]/80 to-[#121316]/80"
        }`} 
      />
    </div>
  );
}
