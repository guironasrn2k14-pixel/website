import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Play,
  Film,
  Clapperboard,
  LayoutGrid,
  Check,
  Eye,
  ArrowRight,
  FolderOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ShounenCategoryIcon } from "./ShounenIcons";
import { useLanguage } from "../contexts/LanguageContext";

export interface ProjectItem {
  category: string;
  title: string;
  description: string;
  visualText?: string;
  client: string;
  image: string;
  videoUrl: string;
  videoMp4?: string; // Vídeo direto local/remoto (.mp4 / .webm) com suporte a tags <video> de alta performance
  aspect: "video" | "vertical";
  categories: string[]; // IDs para classificação manual: "reels" | "viagem" | "performance" | "fitness" | "videoclipes" | "longos"
}

export interface CategoryFolder {
  id: string;
  labelKey: string;
  description?: string;
}

const CATEGORIES: CategoryFolder[] = [
  { id: "all", labelKey: "projects.filter.all", description: "Destaques & Acervo Geral" },
  { id: "vlog", labelKey: "projects.filter.vlog", description: "Dia a dia e Estilo de Vida" },
  { id: "reels", labelKey: "projects.filter.reels", description: "Cortes Rápidos & Retenção 9:16" },
  { id: "videoclipes", labelKey: "projects.filter.videoclipes", description: "Produção Musical & 60fps" },
];

function getYouTubeId(url: string): string {
  if (!url) return "";
  const match = url.match(/(?:embed\/|v=|vi\/|youtu\.be\/|\/shorts\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : "";
}

function isVimeo(url: string): boolean {
  return /vimeo\.com/i.test(url);
}

function getEmbedPreviewUrl(url: string): string {
  if (!url) return "";
  if (isVimeo(url)) {
    const match = url.match(/video\/(\d+)|vimeo\.com\/(\d+)/);
    const videoId = match ? (match[1] || match[2]) : "1234718190";
    return `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1&dnt=1&playsinline=1`;
  }
  const ytid = getYouTubeId(url);
  const base = url.split("?")[0];
  return `${base}?autoplay=1&mute=1&loop=1&playlist=${ytid}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&enablejsapi=1`;
}

function getEmbedModalUrl(url: string): string {
  if (!url) return "";
  if (isVimeo(url)) {
    const match = url.match(/video\/(\d+)|vimeo\.com\/(\d+)/);
    const videoId = match ? (match[1] || match[2]) : "1234718190";
    return `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&dnt=1&playsinline=1`;
  }
  const ytid = getYouTubeId(url);
  const base = url.split("?")[0];
  return `${base}?autoplay=1&playsinline=1&enablejsapi=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080&playlist=${ytid}&loop=1`;
}

const getFeaturedProjects = (t: (key: string) => string): ProjectItem[] => [
  {
    category: "VLOG · Dia a dia",
    title: t("projects.vlog.title"),
    description: t("projects.vlog.desc"),
    visualText: "RITMO DINÂMICO · VLOG DIÁRIO · SOUND DESIGN",
    client: t("projects.vlog.client"),
    image: "/thai reels.png",
    videoUrl: "https://player.vimeo.com/video/1234976192?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1",
    aspect: "vertical",
    categories: ["vlog"],
  },
  {
    category: "VLOG · Estilo de Vida",
    title: t("projects.vlog2.title"),
    description: t("projects.vlog2.desc"),
    visualText: "VLOG · VIAGEM · NARRATIVA · STORYTELLING",
    client: t("projects.vlog2.client"),
    image: "https://i.vimeocdn.com/video/2211108141-4538a20a397410e4c9cd4754ddcc30bd70d2ad53172a50ef07b2b4497d481623-d_640.jpg",
    videoUrl: "https://player.vimeo.com/video/1234975992?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1",
    aspect: "vertical",
    categories: ["vlog"],
  },
  {
    category: "REELS",
    title: t("projects.reels.title"),
    description: t("projects.reels.desc"),
    visualText: "RITMO DINÂMICO · CORTE NO BEAT · HIGH RETENTION · SOUND DESIGN",
    client: t("projects.reels.client"),
    image: "https://i.vimeocdn.com/video/2211108366-84d0802f5686fa4ad5144cdf5e8dfadbec9311807fad72e85bcd2d0d4dac8b6d-d_640.jpg",
    videoUrl: "https://player.vimeo.com/video/1234976193?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1",
    aspect: "vertical",
    categories: ["reels"],
  },
  {
    category: "COMERCIAL",
    title: t("projects.youtube.title"),
    description: t("projects.youtube.desc"),
    visualText: "APRESENTAÇÃO DE PRODUTO · CORTE DINÂMICO · MOTION · SOUND DESIGN",
    client: t("projects.youtube.client"),
    image: "/produtos-vimeo.jpg",
    videoUrl: "https://player.vimeo.com/video/1234959083?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1",
    aspect: "vertical",
    categories: ["reels"],
  },
  {
    category: "CLIPE MUSICAL",
    title: t("projects.comercial.title"),
    description: t("projects.comercial.desc"),
    visualText: "SINCRONIA RÍTMICA · SPEED RAMPS · COLOR GRADING · CORTE DINÂMICO",
    client: t("projects.comercial.client"),
    image: "/mctom.png.png",
    videoUrl: "https://player.vimeo.com/video/1234976971?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1",
    aspect: "video",
    categories: ["videoclipes"],
  },
];

export default function Projects() {
  const { t, language } = useLanguage();
  const featuredProjects = useMemo(() => getFeaturedProjects(t), [t]);
  const [activeCategory, setActiveCategory] = useState("all");
  // Hide & Seek: Gaveta oculta por padrão
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const isModalOpen = selectedProject !== null;

  // Microinteração de hover no cabeçalho: "Projetos" <-> "Vídeos"
  const [isWordHovered, setIsWordHovered] = useState(false);

  // Carrossel Horizontal para os cards verticais
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const handleScroll = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 480;
    const target = direction === "right" ? el.scrollLeft + cardWidth : el.scrollLeft - cardWidth;
    
    el.scrollTo({
      left: target,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 400);
  };

  // Close modal or drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedProject) {
          setSelectedProject(null);
        } else if (isDrawerOpen) {
          setIsDrawerOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, isDrawerOpen]);

  // Lista de projetos da categoria selecionada
  const displayedProjects = useMemo(() => {
    if (activeCategory === "all") {
      return featuredProjects;
    }
    return featuredProjects.filter((p) => p.categories.includes(activeCategory));
  }, [featuredProjects, activeCategory]);

  // Destaques selecionados da visão inicial
  const curatedHighlights = useMemo(() => {
    // 1 Clipe Musical de alto impacto (16:9) + cards verticais (9:16)
    const flagship = featuredProjects.find((p) => p.aspect === "video") || featuredProjects[3];
    const verticalCards = featuredProjects.filter((p) => p.aspect === "vertical");
    return {
      flagship,
      verticalCards,
    };
  }, [featuredProjects]);

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return featuredProjects.length;
    return featuredProjects.filter((p) => p.categories.includes(categoryId)).length;
  };

  const activeCategoryObj = useMemo(() => {
    return CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];
  }, [activeCategory]);

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Recolhe automaticamente ao selecionar a pasta
    setIsDrawerOpen(false);
  };

  return (
    <section id="portfolio" className="py-24 bg-main-bg relative selection:bg-accent selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header com Micro-Interações de Reforço de Vídeo */}
        <div className="flex flex-col mb-16">
          {/* Subtitle tag com ícone de Player de Vídeo e indicação cinemática */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
              {t("projects.subtitle")}
            </span>
            <span className="text-neutral-600 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-neutral-400 uppercase inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/5">
              <Film size={11} className="text-accent" />
              <span>Vídeos & Produções 60fps</span>
            </span>
          </div>

          <h3 className="text-3xl md:text-5xl font-bold max-w-3xl text-gray-400 leading-tight">
            {t("projects.title.1")}{" "}
            {/* Palavra interativa com micro-efeito hover: Projetos -> Vídeos */}
            <span
              onMouseEnter={() => setIsWordHovered(true)}
              onMouseLeave={() => setIsWordHovered(false)}
              className="relative inline-block cursor-pointer font-bold transition-all duration-300"
              title="Passe o mouse: todo o conteúdo é vídeo em alta resolução"
            >
              <span
                className={`transition-all duration-300 underline decoration-accent/60 underline-offset-8 ${
                  isWordHovered
                    ? "text-accent drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]"
                    : "text-white"
                }`}
              >
                {isWordHovered
                  ? language === "pt"
                    ? "vídeos"
                    : "videos"
                  : language === "pt"
                  ? "projetos"
                  : "projects"}
              </span>
            </span>{" "}
            {language === "pt" ? "em que" : "where"}{" "}
            <span className="text-white relative group inline-block font-semibold">
              <span className="text-white group-hover:text-accent transition-colors duration-200">
                {t("projects.title.highlight")}
              </span>
            </span>{" "}
            {t("projects.title.2")}
          </h3>

          <p className="mt-4 text-sm md:text-base text-neutral-400 font-light max-w-2xl leading-relaxed flex items-center gap-2">
            <span>
              {language === "pt"
                ? "Todos os trabalhos abaixo são produções audiovisuais completas. Assista com áudio e em alta definição."
                : "All works below are full audiovisual productions. Watch with sound in high definition."}
            </span>
          </p>
        </div>

        {/* Indicador sutil e limpo quando uma categoria filtrada está ativa (sem poluição) */}
        {activeCategory !== "all" && (
          <div className="mb-12 flex items-center justify-between py-3 px-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-accent uppercase font-bold tracking-wider">
                {language === "pt" ? "Pasta Selecionada:" : "Selected Folder:"}
              </span>
              <span className="flex items-center gap-2 text-white font-semibold">
                <ShounenCategoryIcon category={activeCategory} isActive={true} size={14} />
                <span>{t(activeCategoryObj.labelKey)}</span>
              </span>
              <span className="text-neutral-500">
                • {displayedProjects.length} {displayedProjects.length === 1 ? "vídeo" : "vídeos"}
              </span>
            </div>

            <button
              onClick={() => setActiveCategory("all")}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 uppercase text-[11px] tracking-wider hover:underline"
            >
              <span>← {language === "pt" ? "Ver Destaques" : "View Highlights"}</span>
            </button>
          </div>
        )}

        {/* Projects Workspace */}
        {/* Aplica fade-out e blur suave quando a gaveta de navegação está aberta */}
        <div
          className={`transition-all duration-500 ease-out ${
            isDrawerOpen
              ? "opacity-25 blur-sm pointer-events-none scale-[0.99]"
              : "opacity-100 blur-0 scale-100"
          }`}
        >
          {/* =====================================================================
              CASO 1: ABA GERAL "TODOS OS VÍDEOS"
              Exibe os Projetos em Destaque em Grid Otimizado, Limpo e Espaçado
              (Sem despejar todos os vídeos de forma desorganizada na carga inicial)
             ===================================================================== */}
          {activeCategory === "all" ? (
            <div className="space-y-20 md:space-y-24">
              {/* Flagship Hero Project (Widescreen 16:9) */}
              {curatedHighlights.flagship && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between pb-16 border-b border-white/5"
                >
                  <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-accent uppercase py-1 px-2.5 rounded border border-accent/20 bg-accent/5">
                        <Play size={10} className="fill-accent text-accent" />
                        <span>{curatedHighlights.flagship.category}</span>
                      </span>
                      <span className="text-xs font-mono tracking-wider text-neutral-500">
                        {curatedHighlights.flagship.client}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-neutral-400">
                        {language === "pt" ? "Destaque Principal" : "Primary Spotlight"}
                      </span>
                    </div>

                    <h4 className="text-3xl md:text-5xl font-display font-bold mb-5 text-white">
                      {curatedHighlights.flagship.title}
                    </h4>

                    <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light mb-6 max-w-xl">
                      {curatedHighlights.flagship.description}
                    </p>

                    {curatedHighlights.flagship.visualText && (
                      <div className="mb-8 py-2 px-3 rounded-lg bg-white/[0.02] border border-white/5 max-w-xl">
                        <p className="text-xs font-mono text-neutral-400 tracking-wider leading-relaxed">
                          {curatedHighlights.flagship.visualText}
                        </p>
                      </div>
                    )}

                    <button
                      onClick={() => setSelectedProject(curatedHighlights.flagship)}
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-neutral-200 transition-all cursor-pointer group shadow-lg shadow-white/5 active:scale-95"
                    >
                      <Play size={16} className="fill-black group-hover:scale-110 transition-transform" />
                      <span>{t("projects.watch")}</span>
                    </button>
                  </div>

                  <div className="w-full lg:w-1/2 flex justify-center max-w-xl">
                    <div
                      onClick={() => setSelectedProject(curatedHighlights.flagship)}
                      className="group relative overflow-hidden rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-accent/50 transition-all duration-500 cursor-pointer shadow-2xl w-full aspect-video transform-gpu [backface-visibility:hidden]"
                    >
                      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 pointer-events-none">
                        <span className="px-2.5 py-1 rounded-md bg-black/85 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-neutral-300 flex items-center gap-1.5 shadow-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                          <span>16:9 WIDE</span>
                        </span>
                        <span className="px-2 py-1 rounded-md bg-black/85 border border-white/10 text-[10px] font-mono text-emerald-400 shadow-lg">
                          60 FPS
                        </span>
                      </div>

                      {curatedHighlights.flagship.videoMp4 ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          poster={curatedHighlights.flagship.image}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu"
                        >
                          <source src={curatedHighlights.flagship.videoMp4} type="video/mp4" />
                        </video>
                      ) : curatedHighlights.flagship.videoUrl ? (
                        <div className="w-full h-full relative overflow-hidden bg-black [backface-visibility:hidden]">
                          {/* Poster base para transição imediata e suave sem tela preta */}
                          {curatedHighlights.flagship.image && (
                            <img
                              src={curatedHighlights.flagship.image}
                              alt=""
                              aria-hidden="true"
                              className="w-full h-full object-cover absolute inset-0 -z-10 pointer-events-none"
                            />
                          )}
                          {!isModalOpen && (
                            <iframe
                              src={getEmbedPreviewUrl(curatedHighlights.flagship.videoUrl)}
                              className="w-full h-full absolute inset-0 border-0 pointer-events-none"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              title={curatedHighlights.flagship.title}
                              loading="lazy"
                            />
                          )}
                        </div>
                      ) : (
                        <img
                          src={curatedHighlights.flagship.image}
                          alt={curatedHighlights.flagship.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-accent rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_35px_rgba(239,68,68,0.7)]">
                          <Play size={28} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Carrossel Horizontal de Destaques Verticais 9:16 (Vlogs & Reels) */}
              <div className="relative">
                {/* Cabeçalho da seção com controles de navegação por seta */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                        VLOGS · 9:16 REELS / VERTICAIS
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-mono text-accent">
                        {curatedHighlights.verticalCards.length} vídeos
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">
                      • {language === "pt" ? "Otimizado para mobile & retenção" : "Optimized for mobile & retention"}
                    </span>
                  </div>

                  {/* Controles de Navegação por Carousel (Setas < e >) */}
                  <div className="flex items-center gap-2">
                    {/* Seta para a Esquerda (<): Ativa quando há conteúdo anterior */}
                    <button
                      onClick={() => handleScroll("left")}
                      disabled={!canScrollLeft}
                      aria-label="Vídeos anteriores"
                      title="Vídeos anteriores"
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        canScrollLeft
                          ? "bg-[#0f0f13]/95 backdrop-blur-md border-white/20 text-white hover:border-accent hover:text-accent hover:bg-black/90 cursor-pointer shadow-lg active:scale-95 group"
                          : "bg-white/[0.02] border-white/5 text-neutral-600 cursor-not-allowed opacity-40"
                      }`}
                    >
                      <ChevronLeft size={20} className={canScrollLeft ? "group-hover:-translate-x-0.5 transition-transform" : ""} />
                    </button>

                    {/* Seta para a Direita (>): Ativa quando há próximos vídeos */}
                    <button
                      onClick={() => handleScroll("right")}
                      disabled={!canScrollRight}
                      aria-label="Próximos vídeos"
                      title="Próximos vídeos"
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        canScrollRight
                          ? "bg-[#0f0f13]/95 backdrop-blur-md border-white/20 text-white hover:border-accent hover:text-accent hover:bg-black/90 cursor-pointer shadow-lg active:scale-95 group"
                          : "bg-white/[0.02] border-white/5 text-neutral-600 cursor-not-allowed opacity-40"
                      }`}
                    >
                      <ChevronRight size={20} className={canScrollRight ? "group-hover:translate-x-0.5 transition-transform" : ""} />
                    </button>
                  </div>
                </div>

                {/* Container de visualização com scroll suave e touch swipe */}
                <div className="relative">

                  {/* Trilho de Scroll Horizontal com suporte a Swipe touch no mobile */}
                  <div
                    ref={carouselRef}
                    className="flex gap-6 lg:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 px-1 -mx-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
                  >
                    {curatedHighlights.verticalCards.map((project, idx) => (
                      <motion.div
                        key={`highlight-${project.title}-${idx}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="relative w-[88vw] sm:w-[480px] lg:w-[calc(50%-1rem)] max-w-[540px] shrink-0 snap-start flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-300 group/card"
                      >
                        {/* Vertical Video Thumbnail Frame */}
                        <div
                          onClick={() => setSelectedProject(project)}
                          className="w-full sm:w-48 shrink-0 aspect-[9/16] rounded-xl overflow-hidden bg-[#0c0c0e] border border-white/10 group relative cursor-pointer shadow-xl mx-auto"
                        >
                          <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5">
                            <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono uppercase tracking-widest text-neutral-300">
                              9:16
                            </span>
                            <span className="px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono text-emerald-400">
                              60 FPS
                            </span>
                          </div>

                          {project.videoMp4 ? (
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              preload="metadata"
                              poster={project.image}
                              className="portfolio-video-vertical w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            >
                              <source src={project.videoMp4} type="video/mp4" />
                            </video>
                          ) : project.videoUrl ? (
                            <div className="w-full h-full relative overflow-hidden bg-black [backface-visibility:hidden]">
                              {project.image && (
                                <img
                                  src={project.image}
                                  alt=""
                                  aria-hidden="true"
                                  className="w-full h-full object-cover absolute inset-0 -z-10 pointer-events-none"
                                />
                              )}
                              {!isModalOpen && (
                                <iframe
                                  src={getEmbedPreviewUrl(project.videoUrl)}
                                  className="w-full h-full absolute inset-0 border-0 pointer-events-none"
                                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                  referrerPolicy="strict-origin-when-cross-origin"
                                  title={project.title}
                                  loading="lazy"
                                />
                              )}
                            </div>
                          ) : (
                            <img
                              src={project.image}
                              alt={project.title}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          )}

                          <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors pointer-events-none" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <div className="w-12 h-12 bg-accent/90 rounded-full flex items-center justify-center text-white backdrop-blur-sm shadow-xl">
                              <Play size={18} className="ml-0.5" />
                            </div>
                          </div>
                        </div>

                        {/* Info Side */}
                        <div className="flex flex-col justify-between flex-1">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold">
                                {project.category}
                              </span>
                              <span className="text-neutral-600 font-mono text-[10px]">•</span>
                              <span className="text-[10px] font-mono text-neutral-400">
                                {project.client}
                              </span>
                            </div>

                            <h5 className="text-xl font-bold text-white mb-2 leading-snug">
                              {project.title}
                            </h5>

                            <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4 line-clamp-3">
                              {project.description}
                            </p>

                            {project.visualText && (
                              <p className="text-[10px] font-mono text-neutral-500 tracking-wider mb-4 leading-normal">
                                {project.visualText}
                              </p>
                            )}
                          </div>

                          <button
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-accent transition-colors cursor-pointer group mt-2"
                          >
                            <Play size={12} className="fill-current group-hover:scale-110 transition-transform" />
                            <span>{t("projects.watch")}</span>
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Minimalist Editorial Banner de Acesso às Pastas */}
              <div className="pt-8 text-center flex flex-col items-center justify-center">
                <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.02] border border-white/10 text-xs font-mono text-neutral-400 max-w-xl">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>
                    {language === "pt"
                      ? "Acervo organizado em pastas por formato e segmento."
                      : "Catalog organized into folders by format and niche."}
                  </span>
                  <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="inline-flex items-center gap-1.5 text-white hover:text-accent font-semibold transition-colors cursor-pointer ml-1 underline underline-offset-4 decoration-accent/60"
                  >
                    <FolderOpen size={13} className="text-accent" />
                    <span>{language === "pt" ? "Abrir Pastas" : "Open Folders"}</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* =====================================================================
                CASO 2: CATEGORIA ESPECÍFICA SELECIONADA
                A lista se espalha de forma limpa, focada e exclusiva da pasta
               ===================================================================== */
            <div className="space-y-24 md:space-y-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-24 md:space-y-32"
                >
                  {displayedProjects.map((project, index) => {
                    const isReversed = index % 2 === 1;
                    return (
                      <motion.div
                        key={`${activeCategory}-${project.title}-${index}`}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={`flex flex-col ${
                          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                        } gap-12 lg:gap-16 xl:gap-20 items-center justify-between`}
                      >
                        {/* Info Side */}
                        <div className="w-full lg:w-1/2 flex flex-col items-start">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-accent uppercase py-1 px-2.5 rounded border border-accent/20 bg-accent/5">
                              <Play size={10} className="fill-accent text-accent" />
                              <span>{project.category}</span>
                            </span>
                            <span className="text-xs font-mono tracking-wider text-neutral-500">
                              {project.client}
                            </span>
                          </div>

                          <h4 className="text-3xl md:text-5xl font-display font-bold mb-5 text-white">
                            {project.title}
                          </h4>

                          <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light mb-6 max-w-xl">
                            {project.description}
                          </p>

                          {project.visualText && (
                            <div className="mb-8 py-2 px-3 rounded-lg bg-white/[0.02] border border-white/5 max-w-xl">
                              <p className="text-xs font-mono text-neutral-400 tracking-wider leading-relaxed">
                                {project.visualText}
                              </p>
                            </div>
                          )}

                          <button
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-neutral-200 transition-all cursor-pointer group shadow-lg shadow-white/5 active:scale-95"
                          >
                            <Play size={16} className="fill-black group-hover:scale-110 transition-transform" />
                            <span>{t("projects.watch")}</span>
                          </button>
                        </div>

                        {/* Video / Visual Media Frame */}
                        <div
                          className={`w-full lg:w-1/2 flex justify-center ${
                            project.aspect === "vertical"
                              ? "max-w-sm mx-auto"
                              : "max-w-xl"
                          }`}
                        >
                          <div
                            onClick={() => setSelectedProject(project)}
                            className={`group relative overflow-hidden rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-accent/50 transition-all duration-500 cursor-pointer shadow-2xl w-full ${
                              project.aspect === "vertical"
                                ? "aspect-[9/16] max-h-[580px]"
                                : "aspect-video"
                            }`}
                          >
                            {/* Watermark / Badge de Formato de Vídeo */}
                            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                              <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-widest text-neutral-300 flex items-center gap-1.5 shadow-lg">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                                <span>
                                  {project.aspect === "vertical"
                                    ? project.category === "VLOG"
                                      ? "9:16 VLOG"
                                      : "9:16 REELS"
                                    : "16:9 WIDE"}
                                </span>
                              </span>
                              <span className="px-2 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400 shadow-lg">
                                60 FPS
                              </span>
                            </div>

                            {/* Player direto ou Thumbnail com Play overlay */}
                            {project.videoMp4 ? (
                              <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                poster={project.image}
                                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                                  project.aspect === "vertical" ? "portfolio-video-vertical" : ""
                                }`}
                              >
                                <source src={project.videoMp4} type="video/mp4" />
                              </video>
                            ) : project.videoUrl ? (
                              <div className="w-full h-full relative overflow-hidden bg-black [backface-visibility:hidden]">
                                {project.image && (
                                  <img
                                    src={project.image}
                                    alt=""
                                    aria-hidden="true"
                                    className="w-full h-full object-cover absolute inset-0 -z-10 pointer-events-none"
                                  />
                                )}
                                {!isModalOpen && (
                                  <iframe
                                    src={getEmbedPreviewUrl(project.videoUrl)}
                                    className="w-full h-full absolute inset-0 border-0 pointer-events-none"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    title={project.title}
                                    loading="lazy"
                                  />
                                )}
                              </div>
                            ) : (
                              <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                            )}
                            <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                              <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/90 rounded-full flex items-center justify-center text-white backdrop-blur-sm scale-90 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                                <Play size={28} className="ml-1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* =========================================================================
          ÚNICO CONTROLE VISÍVEL NA TELA:
          BOTÃO FLUTUANTE MINIMALISTA NA PARTE INFERIOR ("ABRIR PASTAS")
          Posicionado no canto inferior esquerdo com design glassmorphic premium
         ========================================================================= */}
      <div className="fixed bottom-6 left-6 z-40 sm:bottom-8 sm:left-8">
        <motion.button
          onClick={() => setIsDrawerOpen((prev) => !prev)}
          className="group relative flex items-center gap-3 bg-[#0c0c10]/95 hover:bg-[#141418] text-white border border-white/15 hover:border-accent/70 rounded-full px-4 py-3 sm:px-5 sm:py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-expanded={isDrawerOpen}
          aria-label={isDrawerOpen ? "Fechar pastas" : "Abrir pastas"}
        >
          {/* Ícone de Grid de Vídeos / Pastas com pulso sutil */}
          <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
            <LayoutGrid size={15} />
          </div>

          {/* Micro-legenda padrão "ABRIR PASTAS / Todos os Vídeos (4)" */}
          <div className="flex flex-col text-left">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-accent font-bold leading-none">
              ABRIR PASTAS / {t("projects.library.title")} ({featuredProjects.length})
            </span>
            {/* Revelação suave do nome da pasta ativa e contagem */}
            <span className="text-xs font-medium text-neutral-300 mt-1 max-w-[170px] sm:max-w-[210px] truncate group-hover:text-white transition-colors flex items-center gap-1.5">
              <span className="text-neutral-400">Pasta:</span>
              <span className="text-white font-semibold">{t(activeCategoryObj.labelKey)}</span>
              <span className="text-[10px] font-mono text-accent">
                ({getCategoryCount(activeCategory)})
              </span>
            </span>
          </div>

          {/* Indicador de status lateral */}
          <span className="w-1.5 h-1.5 rounded-full bg-accent ml-1 animate-pulse" />
        </motion.button>
      </div>

      {/* =========================================================================
          GAVETA LATERAL DE PASTAS (SLIDE-OVER OVERLAY)
          Desliza para dentro cobrindo elegantemente a lateral da tela;
          Recolhe automaticamente ao selecionar qualquer pasta.
         ========================================================================= */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true" aria-label="Navegação de Pastas de Vídeos">
            {/* Backdrop com blur escuro e foco na gaveta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Painel lateral deslizante (Slide-over) */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 36 }}
              className="relative w-full max-w-sm sm:max-w-md bg-[#0a0a0d] border-r border-white/10 h-full p-6 sm:p-8 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto"
            >
              <div>
                {/* Header da Gaveta */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                      <Clapperboard size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-mono tracking-widest text-white uppercase font-bold">
                        {t("projects.library.title")}
                      </h4>
                      <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                        Categorias de Edição Audiovisual
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-neutral-400 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Fechar pastas"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Lista de Categorias com Ícones Shounen + Player de Vídeo */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 px-3">
                    Pastas Disponíveis
                  </span>
                </div>

                <nav className="space-y-2" role="tablist">
                  {CATEGORIES.map((cat) => {
                    const isSelected = activeCategory === cat.id;
                    const count = getCategoryCount(cat.id);
                    return (
                      <button
                        key={cat.id}
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => handleSelectCategory(cat.id)}
                        className={`w-full group flex items-center justify-between px-4 py-3.5 rounded-xl text-sm transition-all duration-200 cursor-pointer text-left border ${
                          isSelected
                            ? "bg-white/[0.08] border-accent/60 text-white font-medium shadow-[0_0_20px_rgba(239,68,68,0.15)]"
                            : "border-transparent text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                        }`}
                      >
                        <div className="flex items-center gap-3.5 truncate mr-2">
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? "bg-accent/20 text-accent border border-accent/40"
                                : "bg-white/[0.04] text-neutral-400 group-hover:text-white group-hover:bg-white/[0.08]"
                            }`}
                          >
                            <ShounenCategoryIcon
                              category={cat.id}
                              isActive={isSelected}
                              size={15}
                            />
                          </div>

                          <div className="flex flex-col truncate">
                            <span className="truncate">{t(cat.labelKey)}</span>
                            <span className="text-[10px] font-mono text-neutral-500 group-hover:text-neutral-400">
                              {cat.description ||
                                (cat.id === "all"
                                  ? "Destaques & Acervo Geral"
                                  : `${count} ${count === 1 ? "projeto" : "projetos"}`)}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span
                            className={`text-xs font-mono px-2 py-0.5 rounded-md ${
                              isSelected
                                ? "bg-accent text-white font-bold"
                                : "bg-white/[0.05] text-neutral-400 group-hover:text-neutral-200"
                            }`}
                          >
                            {count}
                          </span>
                          {isSelected && <Check size={14} className="text-accent shrink-0" />}
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Rodapé da Gaveta */}
              <div className="pt-6 border-t border-white/10 mt-6">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Eye size={13} className="text-accent" />
                    <span>{featuredProjects.length} {t("projects.library.total")}</span>
                  </span>
                  <button
                    onClick={() => handleSelectCategory("all")}
                    className="text-accent hover:underline cursor-pointer uppercase text-[11px]"
                  >
                    Ver Destaques
                  </button>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
          >
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-[60] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Fechar vídeo"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`relative w-full ${
                selectedProject.aspect === "vertical" ? "max-w-md" : "max-w-6xl"
              } max-h-[92vh] flex items-center justify-center z-10`}
            >
              <div
                className={`relative w-full max-h-[92vh] overflow-hidden shadow-2xl flex justify-center bg-black ${
                  selectedProject.aspect === "vertical"
                    ? "aspect-[9/16] rounded-2xl mx-auto"
                    : "aspect-video rounded-xl md:rounded-2xl mx-auto"
                }`}
                style={{
                  maxHeight: "92vh",
                  maxWidth:
                    selectedProject.aspect === "vertical"
                      ? "min(100%, calc(92vh * 9 / 16))"
                      : "min(100%, calc(92vh * 16 / 9))",
                }}
              >
                {selectedProject.videoMp4 ? (
                  <video
                    autoPlay
                    controls
                    playsInline
                    preload="auto"
                    className={
                      selectedProject.aspect === "vertical"
                        ? "portfolio-video-vertical w-full h-full object-contain bg-black"
                        : "w-full h-full object-contain bg-black"
                    }
                    poster={selectedProject.image}
                  >
                    <source src={selectedProject.videoMp4} type="video/mp4" />
                    Seu navegador não suporta tags de vídeo.
                  </video>
                ) : selectedProject.videoUrl ? (
                  <iframe
                    src={getEmbedModalUrl(selectedProject.videoUrl)}
                    className="absolute inset-0 w-full h-full border-0"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    title={selectedProject.title}
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
