import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 2,
    title: "Vlog Tailândia - Ao Nang Night Market 🍜🇹🇭",
    category: "Viagem & Cultura",
    client: "Projeto Autoral",
    image: "/vlogviagem-thumbnail.png.png",
    videoUrl: "https://www.youtube.com/embed/65GHLbR3PhE",
    challenge: "Transmitir a atmosfera vibrante e caótica de um mercado noturno tailandês sem perder a fluidez narrativa.",
    strategy: "Foquei em cortes guiados pelo ritmo do som ambiente e inserções dinâmicas para manter o espectador engajado durante a descoberta gastronômica.",
    result: "Um vlog imersivo que não apenas mostra, mas faz o espectador sentir a energia do local, gerando alto engajamento em retenção e comentários.",
    tags: ["Vlog", "Culinária", "Cultura"],
    aspect: "video",
  },
  {
    id: 3,
    title: "Produtos e boa alimentação",
    category: "SameDay - Publicação Mídia Social",
    client: "Marca de Nutrição",
    image: "/Nutrição-thumbnail.png.png",
    videoUrl: "https://www.youtube.com/embed/wxSwJ2exT0g",
    challenge: "Criar um conteúdo sobre nutrição que fosse rápido, educativo e prendesse a atenção desde o primeiro segundo no TikTok/Reels.",
    strategy: "Utilizei Motion Graphics precisos, legendas dinâmicas e um ritmo de cortes acelerado, removendo qualquer respiro desnecessário.",
    result: "Aumento na retenção do público alvo e um formato replicável que fortaleceu a identidade digital da marca.",
    tags: ["Captação", "Edição Rápida", "Social Media"],
    aspect: "vertical",
  },
  {
    id: 4,
    title: "Dicas medicas com um especialista",
    category: "SameDay - Publicação Mídia Social",
    client: "Especialista em Saúde",
    image: "/sameday-thumbnail.png.png",
    videoUrl: "https://www.youtube.com/embed/_OZvXU3fwIA",
    challenge: "Traduzir informações médicas complexas sobre hipertensão para uma linguagem visual simples e atrativa nas redes sociais.",
    strategy: "Transformei a fala técnica em uma narrativa visual guiada por elementos gráficos e cortes que mantêm o dinamismo sem perder a seriedade do tema.",
    result: "Conteúdo altamente compartilhável, posicionando o especialista com autoridade e acessibilidade.",
    tags: ["Saúde", "Retenção", "Social Media"],
    aspect: "vertical",
  },
  {
    id: 6,
    title: "Mc Tom da Vg- Cade você ( DJ IAM )",
    category: "Videoclipes de Música",
    client: "Mc Tom da Vg & DJ IAM",
    image: "/vioclipe.png.png",
    videoUrl: "https://www.youtube.com/embed/-aamBPYCowM",
    challenge: "Garantir que a energia da música fosse traduzida em um videoclipe de alto impacto, combinando a performance do artista com a batida.",
    strategy: "Edição pautada pela sinestesia musical. Cortes rítmicos agressivos e color grading personalizado para criar a atmosfera noturna e urbana da faixa.",
    result: "Entrega de um videoclipe profissional que elevou o posicionamento visual do artista no YouTube.",
    tags: ["Direção", "Edição", "Color Grading"],
    aspect: "video",
  },
  {
    id: 7,
    title: "Depois dos 40",
    category: "SameDay - Publicação Mídia Social",
    client: "Projeto Fitness",
    image: "/depois dos 40.png",
    videoUrl: "https://www.youtube.com/embed/i9Lkx84oSxs",
    challenge: "Produzir um vídeo de alta intensidade para mídias sociais no nicho de fitness, capturando a essência instantaneamente.",
    strategy: "Foco total na retenção: cortes ultra-rápidos, transições de impacto e edição dinâmica para consumo rápido em mobile.",
    result: "Material de alto impacto, gerando grande retenção e impulsionando a campanha de imediato.",
    tags: ["Dinâmico", "Retenção", "Social Media"],
    aspect: "vertical",
  },
  {
    id: 8,
    title: "Caneta Emagrecedora",
    category: "SameDay - Publicação Mídia Social",
    client: "Profissional da Saúde",
    image: "/caneta-emagrecedora.png",
    videoUrl: "https://www.youtube.com/embed/-rWrYbs2lD4",
    challenge: "Abordar um tema em alta (caneta emagrecedora) de forma ética, clara e com alta retenção para gerar conversão e dúvidas nos comentários.",
    strategy: "Criação de um gancho forte (hook) nos primeiros 3 segundos, seguido por um desenvolvimento dinâmico apoiado por ilustrações.",
    result: "Pico de engajamento no perfil, transformando um assunto técnico em conteúdo viral educativo.",
    tags: ["Saúde", "Retenção", "Social Media"],
    aspect: "vertical",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [filter, setFilter] = useState("Todos");

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  return (
    <section id="portfolio" className="py-24 bg-transparent relative">
      {/* Background Section SVGs */}
      <svg
        className="absolute top-10 left-10 w-48 h-48 opacity-[0.03] text-white rotate-[-15deg] pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          d="M22 6l-3-3l-3 3M16 3l-3 3l-3-3M10 3l-3 3l-3-3M4 3L1 6v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="1"
          y1="10"
          x2="23"
          y2="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="absolute bottom-20 right-10 w-64 h-64 opacity-[0.02] text-accent rotate-[10deg] pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
              Portfólio
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold">
              Trabalhos Selecionados
            </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {["Todos", "Música", "Viagem", "SameDay"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-accent text-white"
                    : "bg-card-bg text-gray-400 hover:text-white border border-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-3xl overflow-hidden bg-card-bg border border-gray-800 hover:border-accent/40 transition-all cursor-pointer shadow-xl"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play size={24} fill="white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h4 className="text-xl font-bold text-white mb-4 line-clamp-1">
                    {project.title}
                  </h4>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-gray-400 border border-gray-800 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-gray-500 group-hover:text-accent group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-[60]"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full ${selectedProject.aspect === "vertical" ? "max-w-lg" : "max-w-5xl"} max-h-[92vh] bg-card-bg border border-gray-800 rounded-2xl md:rounded-[2rem] shadow-2xl z-10 overflow-hidden flex flex-col`}
            >
              <div className="overflow-y-auto w-full flex-1 scrollbar-hide">
                <div
                  className={`bg-black relative z-20 mx-auto w-full overflow-hidden ${
                    selectedProject.aspect === "vertical"
                      ? "max-w-[calc(70vh*9/16)] md:max-w-[calc(80vh*9/16)] aspect-[9/16] shadow-2xl rounded-xl md:rounded-2xl"
                      : "aspect-video"
                  }`}
                >
                  {selectedProject.videoUrl ? (
                    selectedProject.videoUrl.includes("drive.google.com") ||
                    selectedProject.videoUrl.includes("youtube.com") ||
                    selectedProject.videoUrl.includes("vimeo.com") ? (
                      <iframe
                        src={`${selectedProject.videoUrl}?vq=hd720&hd=1&rel=0&showinfo=0&modestbranding=1&autoplay=1`}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; gyroscope; accelerometer; mute"
                        allowFullScreen
                        title={selectedProject.title}
                        loading="lazy"
                      />
                    ) : (
                      <video
                        src={selectedProject.videoUrl}
                        className="absolute inset-0 w-full h-full object-contain bg-black"
                        controls
                        playsInline
                        autoPlay
                        loop
                      />
                    )
                  ) : (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className={`absolute inset-0 w-full h-full ${selectedProject.aspect === "vertical" ? "object-contain" : "object-cover"}`}
                    />
                  )}
                </div>

                <div className="p-6 md:p-12 relative z-10">
                  <div className="flex flex-col gap-8">
                    <div className="flex-1">
                      <p className="text-sm font-bold text-accent uppercase tracking-widest mb-2">
                        {selectedProject.category}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-bold mb-6">
                        {selectedProject.title}
                      </h3>
                      
                      {selectedProject.client && (
                        <div className="mb-6">
                          <h6 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Cliente</h6>
                          <p className="text-white font-medium">{selectedProject.client}</p>
                        </div>
                      )}
                      
                      <div className="space-y-6">
                        {selectedProject.challenge && (
                          <div>
                            <h6 className="text-xs font-bold text-accent uppercase tracking-widest mb-2">O Desafio</h6>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{selectedProject.challenge}</p>
                          </div>
                        )}
                        {selectedProject.strategy && (
                          <div>
                            <h6 className="text-xs font-bold text-accent uppercase tracking-widest mb-2">A Estratégia</h6>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{selectedProject.strategy}</p>
                          </div>
                        )}
                        {selectedProject.result && (
                          <div>
                            <h6 className="text-xs font-bold text-accent uppercase tracking-widest mb-2">O Resultado</h6>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{selectedProject.result}</p>
                          </div>
                        )}
                        {(selectedProject as any).description && (
                          <p className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-line">
                            {(selectedProject as any).description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="w-full shrink-0">
                      <div className="bg-main-bg rounded-2xl p-6 border border-gray-800">
                        <h5 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                          Serviços
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-card-bg text-gray-300 border border-gray-800 px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <a
                          href="#contact"
                          onClick={() => setSelectedProject(null)}
                          className="mt-8 w-full py-3 bg-accent hover:bg-red-600 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                        >
                          SOLICITAR ORÇAMENTO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
