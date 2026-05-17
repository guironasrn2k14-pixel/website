import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Japão no Ritmo do Cotidiano 🎌🌸',
    category: 'Viagem & Cultura',
    image: 'https://drive.google.com/thumbnail?id=1I6StjJdjTnh-m96bCMeslv29ebEd2jTR&sz=w800',
    videoUrl: 'https://drive.google.com/file/d/1I6StjJdjTnh-m96bCMeslv29ebEd2jTR/preview',
    description: 'Um passeio tranquilo pela vida diária do Japão, onde cores vibrantes, paisagens serenas e momentos simples ganham vida. Com uma trilha calma e cortes suaves, este vídeo é uma colagem de cenas reais e imagens de banco, capturando a essência pacífica e poética do país.\n\nDa agitação delicada das ruas à quietude dos templos, cada frame foi pensado para fluir como um suspiro visual. 🎵⛩️',
    tags: ['Montagem', 'Storytelling', 'Color Grading'],
    aspect: 'video',
  },
  {
    id: 2,
    title: 'Vlog Tailândia - Ao Nang Night Market 🍜🇹🇭',
    category: 'Viagem & Cultura',
    image: 'https://drive.google.com/thumbnail?id=1v2zAJp6gYr3EG3aeNAbzL5wOHMslWm1k&sz=w800',
    videoUrl: 'https://drive.google.com/file/d/1v2zAJp6gYr3EG3aeNAbzL5wOHMslWm1k/preview',
    description: 'Explore as cores, sabores e curiosidades do Ao Nang Night Market neste vlog dinâmico, que mostra desde pratos exóticos como carne de crocodilo até opções deliciosas e acessíveis da culinária tailandesa. Uma verdadeira imersão cultural gastronômica feita para inspirar e despertar o desejo de arrumar as malas agora mesmo!',
    tags: ['Vlog', 'Culinária', 'Cultura'],
    aspect: 'video',
  },
  {
    id: 3,
    title: 'SameDay - Produtos 📦✨',
    category: 'SameDay - Publicação Mídia Social',
    image: 'https://drive.google.com/thumbnail?id=1w5jPZBXSMoCaPtNyLtbEBGZ8JNIoPCs8&sz=w800',
    videoUrl: 'https://drive.google.com/file/d/1w5jPZBXSMoCaPtNyLtbEBGZ8JNIoPCs8/preview',
    description: 'Conteúdo dinâmico para marcas e influenciadores. Edição focada em alta retenção, utilizando técnicas de Motion Graphics, legendas estratégicas e ritmos acelerados para maximizar o engajamento',
    tags: ['Captação', 'Edição Rápida', 'Social Media'],
    aspect: 'vertical',
  },
  {
    id: 4,
    title: 'SameDay - Dicas de Saúde (Hipertensão) 🩺❤️',
    category: 'SameDay - Publicação Mídia Social',
    image: 'https://drive.google.com/thumbnail?id=1pNNVOblpeaMZiIhjLXHiJHqiqkBpoAI7&sz=w800',
    videoUrl: 'https://drive.google.com/file/d/1pNNVOblpeaMZiIhjLXHiJHqiqkBpoAI7/preview',
    description: 'Vídeo dinâmico focado em dicas de saúde, especificamente sobre hipertensão. Desenvolvimento de conteúdo estratégico para mídias sociais com foco em alta retenção, transformando informações médicas em uma narrativa visual clara e envolvente para o público.',
    tags: ['Saúde', 'Retenção', 'Social Media'],
    aspect: 'vertical',
  },
  {
    id: 5,
    title: 'SameDay - Depoimento de Psicanalista 🗣️💡',
    category: 'SameDay - Publicação Mídia Social',
    image: 'https://drive.google.com/thumbnail?id=1DWseOErPgCxVj-iRrgk9UKnp5CdpLuZI&sz=w800',
    videoUrl: 'https://drive.google.com/file/d/1DWseOErPgCxVj-iRrgk9UKnp5CdpLuZI/preview',
    description: 'O vídeo aborda a jornada de evolução individual, lembrando ao espectador que ele já caminhou muito mais do que imagina. A mensagem central é que o autoconhecimento não serve para "apontar defeitos", mas para **reconhecer potenciais** e aprender a usar as próprias forças e emoções a seu favor.',
    tags: ['Making Of', 'Dinâmico', 'Social Media'],
    aspect: 'vertical',
  },
  {
    id: 6,
    title: 'Mc Tom da Vg- Cade você ( DJ IAM )',
    category: 'Videoclipes de Música',
    image: 'https://img.youtube.com/vi/w2jjaAcscXE/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/w2jjaAcscXE',
    description: 'Edição de videoclipe focada em dinâmica e estética visual. Através de cortes rítmicos e tratamento de col personalizado, transformamos a performance do artista em uma narrativa visual impactante e profissional.',
    tags: ['Direção', 'Edição', 'Color Grading'],
    aspect: 'video',
  },
  {
    id: 7,
    title: 'O FIM É TRISTE',
    category: 'Videoclipes de Música',
    image: 'https://img.youtube.com/vi/khlQpta5fbk/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/khlQpta5fbk',
    description: 'Direção de edição para projetos colaborativos. Especialista em coordenar produções com múltiplos artistas, garantindo que a dinâmica de grupo e o ritmo da batida estejam em perfeita harmonia visual.',
    tags: ['Captação', 'Estética', 'Montagem'],
    aspect: 'video',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState('Todos');

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="portfolio" className="py-24 bg-main-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Portfólio</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Trabalhos Selecionados</h3>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {['Todos', 'Música', 'Viagem', 'SameDay'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-accent text-white'
                    : 'bg-card-bg text-gray-400 hover:text-white border border-gray-800'
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
                  <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">{project.category}</p>
                  <h4 className="text-xl font-bold text-white mb-4 line-clamp-1">{project.title}</h4>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] text-gray-400 border border-gray-800 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight size={18} className="text-gray-500 group-hover:text-accent group-hover:translate-x-1 transition-all" />
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full ${selectedProject.aspect === 'vertical' ? 'max-w-lg' : 'max-w-5xl'} max-h-[92vh] bg-card-bg border border-gray-800 rounded-2xl md:rounded-[2rem] shadow-2xl z-10 overflow-hidden flex flex-col`}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-30"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>

              <div className="overflow-y-auto w-full flex-1 scrollbar-hide">
                <div className={`bg-black flex items-center justify-center relative z-10 w-full ${
                  selectedProject.aspect === 'vertical' 
                    ? 'aspect-[9/16] max-h-[65vh] md:max-h-[75vh] mx-auto' 
                    : 'aspect-video'
                }`}>
                  {selectedProject.videoUrl ? (
                    selectedProject.videoUrl.endsWith('.mp4') ? (
                      <video
                        src={selectedProject.videoUrl}
                        className="w-full h-full object-contain"
                        controls
                        autoPlay
                        muted={false}
                        playsInline
                        loop
                        preload="auto"
                      />
                    ) : (
                      <iframe
                        src={selectedProject.videoUrl}
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        allowFullScreen
                        title={selectedProject.title}
                      />
                    )
                  ) : (
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  )}
                </div>

                <div className="p-6 md:p-12 relative z-20">
                  <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex-1">
                      <p className="text-sm font-bold text-accent uppercase tracking-widest mb-2">{selectedProject.category}</p>
                      <h3 className="text-3xl md:text-4xl font-bold mb-6">{selectedProject.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="w-full md:w-64 shrink-0">
                      <div className="bg-main-bg rounded-2xl p-6 border border-gray-800">
                        <h5 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Serviços</h5>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span key={tag} className="text-xs bg-card-bg text-gray-300 border border-gray-800 px-3 py-1 rounded-full">
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
