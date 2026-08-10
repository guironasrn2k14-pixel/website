import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play, ArrowRight } from "lucide-react";

// The user has specific videos but wants to showcase them by category (VSL, REELS, COMERCIAL, YOUTUBE).
// Since we only have a specific list of videos, I'll map the closest ones to these categories,
// or use placeholders if a specific category doesn't have an exact match from the current list.
// The structure itself is more important.

const featuredProjects = [
  {
    category: "VSL",
    title: "Video Sales Letter",
    description: "Edição focada em retenção, clareza e conversão.",
    visualText: "RITMO · CORTES · MOTION · SOUND DESIGN · RETENÇÃO",
    client: "Projeto VSL",
    image: "/sameday-thumbnail.png.png", // fallback image
    videoUrl: "https://www.youtube.com/embed/_OZvXU3fwIA", // fallback video
    aspect: "video",
  },
  {
    category: "REELS",
    title: "Alerta: Maca Peruana",
    description: "Conteúdo rápido precisa ganhar atenção rápido. Cortes, ritmo, legendas, sound design e motion para manter o vídeo dinâmico sem perder clareza.",
    client: "Especialista em Nutrição",
    image: "/maca reels.png",
    videoUrl: "https://www.youtube.com/embed/kNUZty3KDak",
    aspect: "vertical",
  },
  {
    category: "COMERCIAL",
    title: "Mc Tom da Vg - Cadê você",
    description: "Edição visual para comunicar produto, marca e mensagem com impacto.",
    client: "Mc Tom da Vg & DJ IAM",
    image: "/vioclipe.png.png",
    videoUrl: "https://www.youtube.com/embed/-aamBPYCowM",
    aspect: "video",
  },
  {
    category: "YOUTUBE",
    title: "Vlog de Viagem Europa",
    description: "Narrativa, ritmo e retenção para conteúdos longos.",
    client: "Projeto Autoral",
    image: "/thai reels.png",
    videoUrl: "https://www.youtube.com/embed/65GHLbR3PhE",
    aspect: "vertical",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof featuredProjects)[0] | null
  >(null);

  return (
    <section id="portfolio" className="py-24 bg-main-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-20">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">
            Trabalhos Selecionados
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold max-w-3xl text-gray-400">
            Uma seleção de projetos em que <span className="text-white">edição, ritmo e narrativa</span> fazem a diferença.
          </h3>
        </div>

        <div className="flex flex-col gap-32">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 lg:gap-20 items-center`}
            >
              {/* Info Side */}
              <div className="w-full lg:w-1/3 flex flex-col items-start">
                <h4 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  {project.category}
                </h4>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light mb-8">
                  {project.description}
                </p>
                {project.visualText && (
                  <div className="mb-8">
                    <p className="text-xs font-mono text-accent tracking-widest leading-loose">
                      {project.visualText}
                    </p>
                  </div>
                )}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="group flex items-center gap-3 text-white font-bold tracking-widest uppercase text-sm hover:text-accent transition-colors"
                >
                  Assistir
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors">
                    <Play size={14} className="ml-1" />
                  </span>
                </button>
              </div>

              {/* Visual Side */}
              <div className={`w-full ${project.aspect === 'vertical' ? 'lg:w-1/3' : 'lg:w-2/3'} relative group cursor-pointer`} onClick={() => setSelectedProject(project)}>
                <div className={`relative overflow-hidden rounded-2xl ${project.aspect === 'vertical' ? 'aspect-[9/16] mx-auto max-w-sm' : 'aspect-video w-full'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-20 h-20 bg-accent/90 rounded-full flex items-center justify-center text-white backdrop-blur-sm scale-75 group-hover:scale-100 transition-transform duration-500">
                      <Play size={32} className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`relative w-full ${selectedProject.aspect === "vertical" ? "max-w-md" : "max-w-6xl"} max-h-[92vh] flex items-center justify-center z-10`}
            >
              <div
                className={`relative w-full max-h-[92vh] overflow-hidden shadow-2xl flex justify-center ${
                  selectedProject.aspect === "vertical"
                    ? "aspect-[9/16] rounded-2xl mx-auto"
                    : "aspect-video rounded-xl md:rounded-2xl mx-auto"
                }`}
                style={{ maxHeight: "92vh", maxWidth: selectedProject.aspect === "vertical" ? "calc(92vh * 9 / 16)" : "calc(92vh * 16 / 9)" }}
              >
                {selectedProject.videoUrl ? (
                  <iframe
                    src={`${selectedProject.videoUrl}?vq=hd1080&hd=1&rel=0&showinfo=0&modestbranding=1&autoplay=1`}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; gyroscope; accelerometer; mute"
                    allowFullScreen
                    title={selectedProject.title}
                    loading="lazy"
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
