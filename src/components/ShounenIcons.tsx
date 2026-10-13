import React from "react";

interface ShounenIconProps {
  category: string;
  className?: string;
  isActive?: boolean;
  size?: number;
}

/**
 * Shounen & Samurai Minimalist Video / Katana Icons
 * Combina símbolos de Player de Vídeo (Play minimalista afiado, moldura cinemática, olho)
 * com traços de lâmina/katana samurai de alta precisão.
 */
export const ShounenCategoryIcon: React.FC<ShounenIconProps> = ({
  category,
  className = "",
  isActive = false,
  size = 16,
}) => {
  const strokeColor = isActive ? "#ef4444" : "currentColor";
  const glowFilter = isActive ? "drop-shadow(0 0 8px rgba(239, 68, 68, 0.5))" : undefined;

  switch (category) {
    /**
     * ⚡ Todos os Vídeos
     * Ícone de raio/foco de alta tensão + play central afiado
     */
    case "all":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          style={{ filter: glowFilter }}
        >
          {/* Raio afiado de corte de energia samurai */}
          <path
            d="M13 2L4 13H11.5L10 22L20 10.5H12.5L13 2Z"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={isActive ? "rgba(239, 68, 68, 0.2)" : "none"}
          />
          {/* Triângulo Play minimalista embutido no centro do raio */}
          <polygon
            points="11,10 11,14 14.5,12"
            fill={strokeColor}
          />
        </svg>
      );

    /**
     * ⚔️ Reels & Retenção
     * Moldura vertical 9:16 cortada por lâmina de katana afiada em diagonal + play integrado
     */
    case "reels":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          style={{ filter: glowFilter }}
        >
          {/* Moldura vertical 9:16 de Reel com cantos chanfrados afiados */}
          <rect
            x="6"
            y="3"
            width="12"
            height="18"
            rx="2.5"
            stroke={strokeColor}
            strokeWidth="1.6"
            strokeDasharray="8 2"
            fill={isActive ? "rgba(239, 68, 68, 0.1)" : "none"}
          />
          {/* Lâmina Katana em corte diagonal atravessando o frame */}
          <path
            d="M3 21L8 16M8 16L21 3"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Triângulo Play afiado central */}
          <polygon
            points="11,10 11,14 14.5,12"
            fill={strokeColor}
          />
        </svg>
      );

    /**
     * 📹 Vlog & Conteúdo Dinâmico
     * Moldura de câmera estilo documentário/vlog com visor e play de alta retenção
     */
    case "vlog":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          style={{ filter: glowFilter }}
        >
          {/* Corpo angular de câmera de gravação */}
          <rect
            x="3"
            y="5"
            width="13"
            height="14"
            rx="2.5"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={isActive ? "rgba(239, 68, 68, 0.15)" : "none"}
          />
          {/* Lente angular de gravação / projeção */}
          <path
            d="M16 10L21 7V17L16 14"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Micro play afiado no centro do visor */}
          <polygon
            points="8.5,9.5 8.5,14.5 12.5,12"
            fill={strokeColor}
          />
        </svg>
      );

    /**
     * 🌊 Viagem & Lifestyle
     * Onda geométrica Seigaiha / corte fluído com botão play cinemático integrado
     */
    case "viagem":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          style={{ filter: glowFilter }}
        >
          {/* Onda curva afiada estilo oriental */}
          <path
            d="M2 17C4.5 17 6.5 14.5 8 13C9.5 11.5 11 9 13.5 9C15.5 9 16.5 10.5 16 12C15.5 13.5 14 14 13.5 14"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M2 21C5.5 21 8 18 10 16C12.5 13.5 15 11 18.5 11C20.5 11 22 12.5 21.5 14.5C21 16 19 16.5 18 16.5"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Símbolo de Play / Lâmina de direção cinematográfica */}
          <polygon
            points="14,4 14,8 17.5,6"
            fill={strokeColor}
          />
          <circle cx="9" cy="6" r="1.2" fill={strokeColor} />
        </svg>
      );

    /**
     * 🔥 Dança & Performance
     * Chama / Faísca de combate Shounen fundida ao símbolo de Play de ação
     */
    case "performance":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          style={{ filter: glowFilter }}
        >
          {/* Chama Shounen externa com pontas afiadas */}
          <path
            d="M12 2C12 2 15 6 15 9.5C15 10.5 14.6 11.4 14 12C15.5 12 18 13.5 18 16.5C18 19.5 15.3 22 12 22C8.7 22 6 19.5 6 16.5C6 13 9 10 9 8C9 8 10 6 12 2Z"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={isActive ? "rgba(239, 68, 68, 0.15)" : "none"}
          />
          {/* Play afiado incandescente no centro da chama */}
          <polygon
            points="11,13.5 11,17.5 14.5,15.5"
            fill={strokeColor}
          />
        </svg>
      );

    /**
     * 🍃 Fitness, Receitas & Treinos
     * Folha Zen afiada com nervura de katana e símbolo play cinemático
     */
    case "fitness":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          style={{ filter: glowFilter }}
        >
          {/* Folha Zen afiada */}
          <path
            d="M20.5 3.5C20.5 3.5 13 4 8 9C3 14 3.5 20.5 3.5 20.5C3.5 20.5 10 21 15 16C20 11 20.5 3.5 20.5 3.5Z"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={isActive ? "rgba(239, 68, 68, 0.15)" : "none"}
          />
          {/* Corte de precisão / Nervura */}
          <path
            d="M3.5 20.5C7.5 16.5 11 13 14.5 9.5"
            stroke={strokeColor}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Micro play zen integrado */}
          <polygon
            points="12,12 12,16 15.5,14"
            fill={strokeColor}
          />
        </svg>
      );

    /**
     * 🎵 Videoclipes Musicais
     * Frequência sonora geométrica afiada + botão de reprodução / play
     */
    case "videoclipes":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          style={{ filter: glowFilter }}
        >
          {/* Barras de áudio / batida musical afiadas */}
          <line
            x1="3"
            y1="10"
            x2="3"
            y2="14"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="7"
            y1="6"
            x2="7"
            y2="18"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="21"
            y1="10"
            x2="21"
            y2="14"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Play central geométrico com moldura de onda */}
          <polygon
            points="11.5,8 11.5,16 18,12"
            fill={strokeColor}
          />
        </svg>
      );

    /**
     * 📜 Projetos Longos & Educacionais
     * Pergaminho Makimono geométrico com janela de proporção 16:9 de vídeo
     */
    case "longos":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          style={{ filter: glowFilter }}
        >
          {/* Pergaminho Makimono desdobrado */}
          <path
            d="M8 4H18C19.6569 4 21 5.34315 21 7C21 8.65685 19.6569 10 18 10H6C4.34315 10 3 8.65685 3 7C3 5.34315 4.34315 4 6 4H8Z"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={isActive ? "rgba(239, 68, 68, 0.2)" : "none"}
          />
          <path
            d="M3 7V17C3 18.6569 4.34315 20 6 20H18C19.6569 20 21 18.6569 21 17V10"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Símbolo de Play longo 16:9 cinemático */}
          <polygon
            points="10,12 10,16 14,14"
            fill={strokeColor}
          />
        </svg>
      );

    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke={strokeColor}
            strokeWidth="1.8"
          />
          <polygon points="10,9 10,15 15,12" fill={strokeColor} />
        </svg>
      );
  }
};
