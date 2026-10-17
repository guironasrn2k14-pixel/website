import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Play,
  Smartphone,
  Youtube,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export type CategoryKey = "vlogs" | "youtube";

export interface ProjectItem {
  id: string;
  category: string;
  formatType: CategoryKey;
  title: string;
  description: string;
  tags?: string[];
  client: string;
  image: string;
  videoUrl: string;
  videoMp4?: string;
  aspect: "video" | "vertical";
}

interface CategoryTab {
  id: CategoryKey;
  label: string;
  subtitle: string;
  badge: string;
  icon: React.ElementType;
}

function getYouTubeId(url: string): string {
  if (!url) return "";
  const match = url.match(/(?:embed\/|v=|vi\/|youtu\.be\/|\/shorts\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : "";
}

function isVimeo(url: string): boolean {
  return /vimeo\.com/i.test(url);
}

/**
 * Retorna URL de Motion Preview em Loop Silencioso (Background Muted).
 * Funciona nativamente em iOS, Android e Desktop sem bloqueios de autoplay.
 */
function getMotionPreviewUrl(url: string): string {
  if (!url) return "";
  if (isVimeo(url)) {
    const match = url.match(/video\/(\d+)|vimeo\.com\/(\d+)/);
    const videoId = match ? match[1] || match[2] : "1234976193";
    return `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&muted=1&autopause=0&playsinline=1&dnt=1`;
  }
  const ytid = getYouTubeId(url);
  return `https://www.youtube-nocookie.com/embed/${ytid}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytid}&playsinline=1&modestbranding=1&rel=0`;
}

/**
 * Retorna URL de Modal com Som Ativo e Controles Completos
 */
function getEmbedModalUrl(url: string): string {
  if (!url) return "";
  if (isVimeo(url)) {
    const match = url.match(/video\/(\d+)|vimeo\.com\/(\d+)/);
    const videoId = match ? match[1] || match[2] : "1234976193";
    return `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=0&loop=1&dnt=1&playsinline=1`;
  }
  const ytid = getYouTubeId(url);
  const base = url.split("?")[0];
  return `${base}?autoplay=1&playsinline=1&enablejsapi=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080&playlist=${ytid}&loop=1`;
}

export default function Projects() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<CategoryKey>("vlogs");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const isModalOpen = selectedProject !== null;

  // Carrossel Ref & Controles
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const categoryTabs: CategoryTab[] = useMemo(
    () => [
      {
        id: "vlogs",
        label: t("projects.cat.vlogs"),
        subtitle: t("projects.cat.vlogs.desc"),
        badge: "9:16 VERTICAL",
        icon: Smartphone,
      },
      {
        id: "youtube",
        label: t("projects.cat.youtube"),
        subtitle: t("projects.cat.youtube.desc"),
        badge: "16:9 WIDESCREEN",
        icon: Youtube,
      },
    ],
    [t]
  );

  // Catálogo completo de trabalhos categorizados por formato
  const allProjects: ProjectItem[] = useMemo(
    () => [
      // ==========================================
      // 1. VLOGS & CONTEÚDO VERTICAL (9:16 Vertical)
      // Cada vídeo é 100% único, sem duplicatas
      // ==========================================
      {
        id: "vlog-treino",
        category: "VLOG · DIA A DIA",
        formatType: "vlogs",
        title: t("projects.vlog.title"),
        description: t("projects.vlog.desc"),
        tags: ["NARRATIVA", "RITMO", "SOUND DESIGN"],
        client: t("projects.vlog.client"),
        image: "/thai reels.png",
        videoUrl: "https://player.vimeo.com/video/1234976192",
        aspect: "vertical",
      },
      {
        id: "vlog-viagem",
        category: "VLOG · ESTILO DE VIDA",
        formatType: "vlogs",
        title: t("projects.vlog2.title"),
        description: t("projects.vlog2.desc"),
        tags: ["STORYTELLING", "COLOR GRADING", "BEAT-SYNC"],
        client: t("projects.vlog2.client"),
        image:
          "https://i.vimeocdn.com/video/2211108141-4538a20a397410e4c9cd4754ddcc30bd70d2ad53172a50ef07b2b4497d481623-d_640.jpg",
        videoUrl: "https://player.vimeo.com/video/1234975992",
        aspect: "vertical",
      },
      {
        id: "reels-perna",
        category: "FITNESS · MOTIVACIONAL",
        formatType: "vlogs",
        title: t("projects.reels.title"),
        description: t("projects.reels.desc"),
        tags: ["CORTE NO BEAT", "SOUND DESIGN", "RETENÇÃO"],
        client: t("projects.reels.client"),
        image:
          "https://i.vimeocdn.com/video/2211108366-84d0802f5686fa4ad5144cdf5e8dfadbec9311807fad72e85bcd2d0d4dac8b6d-d_640.jpg",
        videoUrl: "https://player.vimeo.com/video/1234976193",
        aspect: "vertical",
      },
      {
        id: "produtos-ecommerce",
        category: "ANÚNCIO · E-COMMERCE",
        formatType: "vlogs",
        title: t("projects.youtube.title"),
        description: t("projects.youtube.desc"),
        tags: ["PRODUTO", "CONVERSÃO", "MOTION"],
        client: t("projects.youtube.client"),
        image: "/produtos-vimeo.jpg",
        videoUrl: "https://player.vimeo.com/video/1234959083",
        aspect: "vertical",
      },

      // ==========================================
      // 2. CANAIS DE YOUTUBE (16:9 Widescreen)
      // Produções de alto impacto para canais e conteúdos no YouTube
      // ==========================================
      {
        id: "mc-tom-videoclipe",
        category: "VIDEOCLIPE OFICIAL · 16:9",
        formatType: "youtube",
        title: t("projects.comercial.title"),
        description: t("projects.comercial.desc"),
        tags: ["SPEED RAMPS", "SINCRONIA RÍTMICA", "COLOR GRADING"],
        client: t("projects.comercial.client"),
        image: "/mctom.png.png",
        videoUrl: "https://player.vimeo.com/video/1234976971",
        aspect: "video",
      },
      {
        id: "lembra-daquele-gordinho",
        category: "STORYTELLING · 16:9",
        formatType: "youtube",
        title: t("projects.gordinho.title"),
        description: t("projects.gordinho.desc"),
        tags: ["STORYTELLING", "NARRATIVA", "COLOR GRADING"],
        client: t("projects.gordinho.client"),
        image: "/lembra-daquele-gordinho.jpg",
        videoUrl: "https://player.vimeo.com/video/1236741441",
        aspect: "video",
      },
    ],
    [t]
  );

  // Filtra os projetos da aba ativa
  const currentCategoryProjects = useMemo(() => {
    return allProjects.filter((p) => p.formatType === activeTab);
  }, [allProjects, activeTab]);

  const activeCategoryTab = useMemo(() => {
    return categoryTabs.find((tab) => tab.id === activeTab) || categoryTabs[0];
  }, [categoryTabs, activeTab]);

  // Atualiza estados dos botões de scroll
  const checkScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    // Reseta scroll para o início ao trocar de aba
    el.scrollTo({ left: 0, behavior: "smooth" });
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [activeTab, checkScroll]);

  const handleScroll = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 450;
    const target = direction === "right" ? el.scrollLeft + cardWidth : el.scrollLeft - cardWidth;

    el.scrollTo({
      left: target,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 350);
  };

  // Fecha modal com Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 bg-transparent relative selection:bg-accent selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho da Seção de Portfólio com Setas de Navegação Ancoradas no Topo Direito */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 w-fit">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-semibold">
                {t("projects.section_tag")}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#F8FAFC] leading-[1.05] uppercase">
              {t("projects.section_title")}
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] font-sans font-normal mt-3 max-w-2xl">
              {activeCategoryTab.subtitle}
            </p>
          </div>

          {/* Setas de Navegação EXCLUSIVAMENTE ancoradas no canto superior direito do cabeçalho */}
          <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
            <span className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#8A919E] font-medium tracking-wider mr-1">
              {currentCategoryProjects.length} {currentCategoryProjects.length === 1 ? (language === "pt" ? "PROJETO" : "PROJECT") : (language === "pt" ? "VÍDEOS" : "VIDEOS")}
            </span>

            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label={language === "pt" ? "Vídeo anterior" : "Previous video"}
              className={`w-11 h-11 rounded-full border border-white/10 flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? "bg-[#1A1C23] hover:bg-accent hover:border-accent text-[#F8FAFC] shadow-md hover:scale-105 active:scale-95"
                  : "bg-white/[0.02] text-white/20 border-white/5 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label={language === "pt" ? "Próximo vídeo" : "Next video"}
              className={`w-11 h-11 rounded-full border border-white/10 flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight
                  ? "bg-[#1A1C23] hover:bg-accent hover:border-accent text-[#F8FAFC] shadow-md hover:scale-105 active:scale-95"
                  : "bg-white/[0.02] text-white/20 border-white/5 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* =========================================================================
            SISTEMA DE 2 ABAS / CATEGORIAS
            1. Vlogs & Conteúdo Vertical  |  2. Canais do YouTube
           ========================================================================= */}
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 rounded-2xl bg-[#1A1C23]/80 border border-white/5 backdrop-blur-md max-w-4xl mx-auto">
            {categoryTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center justify-center sm:justify-start gap-3.5 px-5 py-4 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#121316] text-[#F8FAFC] shadow-lg border border-accent/40 shadow-accent/10"
                      : "text-[#8A919E] hover:text-[#F8FAFC] hover:bg-white/[0.03] border border-transparent"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? "bg-accent text-white shadow-md shadow-accent/40"
                        : "bg-white/[0.04] text-[#8A919E]"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="font-display font-bold text-sm tracking-wide truncate">
                      {tab.label}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent/80 font-semibold mt-0.5">
                      {tab.badge}
                    </span>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 rounded-xl border border-accent/50 pointer-events-none"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            CARROSSEL RESPONSIVO DA CATEGORIA ATIVA (SEM SETAS FLUTUANTES SOBRE OS CARDS)
           ========================================================================= */}
        <div className="relative">
          <div
            ref={carouselRef}
            className={`flex gap-5 lg:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-1 px-1 -mx-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x ${
              currentCategoryProjects.length === 1 ? "justify-center" : ""
            }`}
          >
            {currentCategoryProjects.map((project, idx) => {
              const isVertical = project.aspect === "vertical";
              const isCenterpiece = currentCategoryProjects.length === 1;

              return (
                <motion.div
                  key={`${project.id}-${idx}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative shrink-0 snap-start rounded-3xl bg-[#1A1C23] border border-white/5 hover:border-white/15 transition-all duration-300 group/card shadow-2xl flex ${
                    isCenterpiece
                      ? "flex-col w-full max-w-[880px] p-5 sm:p-7 md:p-8 gap-5 sm:gap-6 mx-auto"
                      : isVertical
                      ? "flex-row w-[90vw] max-w-[480px] sm:w-[580px] md:w-[630px] lg:w-[660px] gap-4 sm:gap-6 p-3.5 sm:p-5 md:p-6 items-stretch"
                      : "flex-col w-[88vw] max-w-[460px] sm:w-[520px] md:w-[560px] p-4 sm:p-6 gap-4"
                  }`}
                >
                  {/* Visual / Media Thumbnail com Motion Preview em Loop Silencioso */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    style={{ aspectRatio: isVertical ? "9/16" : "16/9" }}
                    className={`relative rounded-2xl overflow-hidden bg-[#121316] border border-white/10 group cursor-pointer shadow-2xl shrink-0 ${
                      isCenterpiece
                        ? "w-full aspect-video"
                        : isVertical
                        ? "w-[150px] xs:w-[170px] sm:w-[225px] md:w-[245px] lg:w-[260px] aspect-[9/16] self-stretch"
                        : "w-full aspect-video"
                    }`}
                  >
                    {/* Badge de Formato & Qualidade (Design Limpo, Fluido e sem Bugs Visuais) */}
                    <div className="absolute top-2.5 left-2.5 z-20 flex items-center pointer-events-none">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono shadow-md leading-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
                        <span className="text-[#F8FAFC] font-bold tracking-wider">{isVertical ? "9:16" : "16:9"}</span>
                        <span className="text-emerald-500/40 text-[9px]">•</span>
                        <span className="text-emerald-400 font-semibold tracking-wide">60 FPS</span>
                      </div>
                    </div>

                    {/* Motion Preview (Autoplay em Loop Silencioso / Thumbnail Viva) */}
                    <iframe
                      src={getMotionPreviewUrl(project.videoUrl)}
                      className="absolute inset-0 w-full h-full object-cover border-0 pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                      allow="autoplay; fullscreen; picture-in-picture"
                      loading="lazy"
                      tabIndex={-1}
                      aria-hidden="true"
                      title={`Preview ${project.title}`}
                    />

                    {/* Imagem de Capa em Alta Resolução (Poster Fallback) */}
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover -z-10"
                    />

                    {/* Overlay Escuro com Play Button no Hover */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/90 group-hover:bg-accent rounded-full flex items-center justify-center text-white backdrop-blur-sm shadow-xl group-hover:scale-110 transition-transform">
                        <Play size={18} className="ml-0.5 fill-current" />
                      </div>
                    </div>
                  </div>

                  {/* Lado de Informações e Texto */}
                  <div className="flex flex-col justify-between flex-1 min-w-0 py-0.5 sm:py-1">
                    <div>
                      {/* Categoria & Subtítulo em linha única */}
                      <div className="flex items-center gap-2 mb-2 sm:mb-2.5 whitespace-nowrap overflow-hidden">
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.08em] text-accent font-bold shrink-0">
                          {project.category}
                        </span>
                        <span className="text-neutral-600 font-mono text-[10px] shrink-0">•</span>
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.08em] text-[#8A919E] truncate font-medium">
                          {project.client}
                        </span>
                      </div>

                      {/* Título do Vídeo em Caixa Alta com Espaçamento Estilo Cinema */}
                      <h4 className="text-base sm:text-xl md:text-2xl font-bold text-[#F8FAFC] mb-2 sm:mb-3 leading-snug tracking-[0.06em] uppercase font-display line-clamp-2">
                        {project.title}
                      </h4>

                      {/* Descrição em Frase Curta e Direta (Máximo 2 Linhas) */}
                      <p className="text-xs sm:text-sm text-[#94A3B8] font-normal leading-relaxed mb-4 font-sans line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tags Técnicas Monospace com Respiro Horizontal Amplo */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-[9px] sm:text-[10px] font-mono text-[#8A919E] uppercase tracking-[0.1em] whitespace-nowrap font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Botão Assistir Alinhado na Base */}
                    <div className="pt-3 sm:pt-4 mt-auto border-t border-white/5 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F8FAFC] hover:text-accent transition-colors cursor-pointer group py-1"
                      >
                        <Play size={13} className="fill-current text-accent group-hover:scale-110 transition-transform" />
                        <span>{t("projects.watch")}</span>
                      </button>

                      {isCenterpiece && (
                        <span className="text-[10px] sm:text-xs font-mono text-accent font-semibold uppercase tracking-wider">
                          {language === "pt" ? "PRODUÇÃO PRINCIPAL" : "MAIN PRODUCTION"}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Indicador de Swipe no Mobile */}
          {currentCategoryProjects.length > 1 && (
            <div className="flex sm:hidden items-center justify-center gap-2 mt-2 text-[10px] font-mono text-[#8A919E]">
              <span className="opacity-60 animate-pulse">←</span>
              <span className="tracking-[0.08em] uppercase">
                {language === "pt" ? "Deslize para ver mais vídeos" : "Swipe to explore more"}
              </span>
              <span className="opacity-60 animate-pulse">→</span>
            </div>
          )}
        </div>
      </div>

      {/* =========================================================================
          MODAL / LIGHTBOX DE VÍDEO (COM ÁUDIO EM ALTA QUALIDADE A PARTIR DO INÍCIO)
         ========================================================================= */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
          >
            {/* Backdrop com Blur */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Botão de Fechar no Canto Superior Direito */}
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-[60] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={language === "pt" ? "Fechar vídeo" : "Close video"}
            >
              <X size={24} />
            </button>

            {/* Container do Player */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`relative w-full ${
                selectedProject.aspect === "vertical" ? "max-w-sm sm:max-w-md" : "max-w-5xl"
              } max-h-[92vh] flex flex-col items-center justify-center z-10 px-2 sm:px-0`}
            >
              <div
                className={`relative overflow-hidden shadow-2xl flex justify-center bg-black ${
                  selectedProject.aspect === "vertical"
                    ? "w-auto h-[62vh] sm:h-[72vh] max-h-[640px] aspect-[9/16] rounded-2xl mx-auto max-w-full"
                    : "w-full aspect-video max-h-[72vh] rounded-xl md:rounded-2xl mx-auto"
                }`}
              >
                <iframe
                  src={getEmbedModalUrl(selectedProject.videoUrl)}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title={selectedProject.title}
                />
              </div>

              {/* Barra inferior de Ação Imediata no Modal */}
              <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-3 px-2 text-white">
                <div className="text-center sm:text-left">
                  <h3 className="text-sm sm:text-base font-bold font-display uppercase tracking-wide">
                    {selectedProject.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#8A919E]">
                    {selectedProject.category} • {selectedProject.client}
                  </p>
                </div>

                <a
                  href={`https://wa.me/5511954629657?text=${encodeURIComponent(
                    language === "pt"
                      ? `Olá Guironas! Gostei do projeto "${selectedProject.title}" e gostaria de um orçamento nesse formato.`
                      : `Hello Guironas! I loved the project "${selectedProject.title}" and would like a quote for a similar edit.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-rose-600 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-accent/30"
                >
                  <MessageCircle size={15} />
                  <span>{language === "pt" ? "Orçar este Formato" : "Get a Quote for this Format"}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
