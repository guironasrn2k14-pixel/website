import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Índia em Cores e Ritmo 🎬✨',
    category: 'Viagem & Cultura',
    mainTag: 'VIAGEM',
    image: 'https://drive.google.com/thumbnail?id=13C6OrRIu96cEPu6EnTiYFtedpXrSJB9q&sz=w800',
    videoUrl: 'https://drive.google.com/file/d/13C6OrRIu96cEPu6EnTiYFtedpXrSJB9q/preview',
    description: 'Explore a Índia através de uma edição vibrante, onde cortes precisos se sincronizam com a trilha sonora para criar uma experiência imersiva. Este vídeo foi meticulosamente montado a partir de registros da minha viagem e cenas de banco de imagens, capturando a essência dinâmica e diversa deste país incrível.\n\nCada frame foi pensado para fluir com a música, transformando paisagens, cultura e momentos espontâneos em uma jornada visual envolvente.',
    tags: ['Edição', 'Sound Design', 'Color Grading'],
  },
  {
    id: 2,
    title: 'Japão no Ritmo do Cotidiano 🎌🌸',
    category: 'Viagem & Cultura',
    mainTag: 'VIAGEM',
    image: 'https://drive.google.com/thumbnail?id=1I6StjJdjTnh-m96bCMeslv29ebEd2jTR&sz=w800',
    videoUrl: 'https://drive.google.com/file/d/1I6StjJdjTnh-m96bCMeslv29ebEd2jTR/preview',
    description: 'Um passeio tranquilo pela vida diária do Japão, onde cores vibrantes, paisagens serenas e momentos simples ganham vida. Com uma trilha calma e cortes suaves, este vídeo é uma colagem de cenas reais e imagens de banco, capturando a essência pacífica e poética do país.\n\nDa agitação delicada das ruas à quietude dos templos, cada frame foi pensado para fluir como um suspiro visual. 🎵⛩️',
    tags: ['Montagem', 'Storytelling', 'Color Grading'],
  },
  {
    id: 3,
    title: 'SameDay - Produtos 📦✨',
    category: 'SameDay - Publicação Mídia Social',
    mainTag: 'SAME-DAY',
    image: 'https://drive.google.com/thumbnail?id=1w5jPZBXSMoCaPtNyLtbEBGZ8JNIoPCs8&sz=w800',
    videoUrl: 'https://drive.google.com/file/d/1w5jPZBXSMoCaPtNyLtbEBGZ8JNIoPCs8/preview',
    description: 'Conteúdo dinâmico para marcas e influenciadores. Edição focada em alta retenção, utilizando técnicas de Motion Graphics, legendas estratégicas e ritmos acelerados para maximizar o engajamento',
    tags: ['Captação', 'Edição Rápida', 'Social Media'],
  },
  {
    id: 4,
    title: 'SameDay - Saúde Mental 🧘‍♂️🧠',
    category: 'SameDay - Publicação Mídia Social',
    mainTag: 'SAME-DAY',
    image: 'https://drive.google.com/thumbnail?id=1cxIVOajFUha_HSKbCY4ZfCMyk901sRto&sz=w800',
    videoUrl: 'https://drive.google.com/file/d/1cxIVOajFUha_HSKbCY4ZfCMyk901sRto/preview',
    description: 'Especialista em vídeos de bem-estar e autoconhecimento. Unimos storytelling emocional com técnicas de edição de alta retenção para transformar mensagens complexas em conteúdos inspiradores que conectam marcas a pessoas de forma profunda.',
    tags: ['Cobertura', 'Highlights', 'Social Media'],
  },
  {
    id: 5,
    title: 'SameDay - Depoimento de Psicanalista 🗣️💡',
    category: 'SameDay - Publicação Mídia Social',
    mainTag: 'SAME-DAY',
    image: 'https://drive.google.com/thumbnail?id=1DWseOErPgCxVj-iRrgk9UKnp5CdpLuZI&sz=w800',
    videoUrl: 'https://drive.google.com/file/d/1DWseOErPgCxVj-iRrgk9UKnp5CdpLuZI/preview',
    description: 'O vídeo aborda a jornada de evolução individual, lembrando ao espectador que ele já caminhou muito mais do que imagina. A mensagem central é que o autoconhecimento não serve para "apontar defeitos", mas para **reconhecer potenciais** e aprender a usar as próprias forças e emoções a seu favor.',
    tags: ['Making Of', 'Dinâmico', 'Social Media'],
  },
  {
    id: 6,
    title: 'Mc Tom da Vg- Cade você ( DJ IAM )',
    category: 'Videoclipes Musicais',
    mainTag: 'MÚSICA',
    image: 'https://img.youtube.com/vi/w2jjaAcscXE/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/w2jjaAcscXE',
    description: 'Edição de videoclipe focada em dinâmica e estética visual. Através de cortes rítmicos e tratamento de cor personalizado, transformamos a performance do artista em uma narrativa visual impactante e profissional.',
    tags: ['Direção', 'Edição', 'Color Grading'],
  },
  {
    id: 7,
    title: 'O FIM É TRISTE',
    category: 'Videoclipes Musicais',
    mainTag: 'MÚSICA',
    image: 'https://img.youtube.com/vi/khlQpta5fbk/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/khlQpta5fbk',
    description: 'Direção de edição para projetos colaborativos. Especialista em coordenar produções com múltiplos artistas, garantindo que a dinâmica de grupo e o ritmo da batida estejam em perfeita harmonia visual.',
    tags: ['Captação', 'Estética', 'Montagem'],
  },
];

const tagColors: Record<string, string> = {
  'SAME-DAY': 'bg-[#bef264] text-black', // Lime Green
  'VIAGEM': 'bg-[#38bdf8] text-white', // Sky Blue
  'MÍDIA SOCIAL': 'bg-[#a855f7] text-white', // Purple
  'MÚSICA': 'bg-[#facc15] text-black', // Yellow
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-main-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Portfólio</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Um pouco sobre meus trabalhos</h3>
          </div>
          <p className="text-gray-400 max-w-md">
            Uma seleção das minhas produções audiovisuais, desde videoclipes até coberturas SameDay para mídias sociais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 bg-card-bg border border-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Colored Tag Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg ${tagColors[project.mainTag] || 'bg-gray-700 text-white'}`}>
                    {project.mainTag}
                  </span>
                </div>

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/90 text-white flex items-center justify-center scale-90 opacity-80 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                    <Play size={28} className="ml-1" />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-accent mb-2">{project.category}</p>
                <h4 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h4>
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
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              data-lenis-prevent
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card-bg border border-gray-800 rounded-3xl shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-main-bg/50 hover:bg-main-bg rounded-full flex items-center justify-center text-white transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="aspect-video w-full relative bg-gray-900 flex items-center justify-center group cursor-pointer">
                {selectedProject.videoUrl ? (
                  <iframe
                    src={selectedProject.videoUrl}
                    className="w-full h-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-accent text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/30">
                        <Play size={36} className="ml-2" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="p-6 md:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs sm:text-sm font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs sm:text-sm font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold mb-6">{selectedProject.title}</h3>
                
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold mb-3 text-white">Sobre a Produção</h4>
                  <div className="text-gray-400 leading-relaxed space-y-4 whitespace-pre-line">
                    {selectedProject.description}
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
