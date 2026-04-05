import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Video, Film, Scissors, Camera, X, ArrowRight, CheckCircle2 } from 'lucide-react';

const skills = [
  { name: 'Gravação', icon: Camera, desc: 'Captação de imagens com qualidade cinematográfica.' },
  { name: 'Edição de Vídeo', icon: Scissors, desc: 'Cortes precisos e ritmo envolvente.' },
  { name: 'Videoclipes', icon: Film, desc: 'Produção completa para artistas e bandas.' },
  { name: 'Eventos & Social', icon: Video, desc: 'Cobertura ágil e conteúdo para redes sociais.' },
];

const briefPoints = [
  { title: 'Edição High-End', desc: 'Domínio completo do pacote Adobe (Premiere, After Effects, Photoshop).' },
  { title: 'Narrativa Estratégica', desc: 'Especialista em Storytelling e Roteiro personalizado para marcas.' },
  { title: 'Same-Day Edit / Eventos', desc: 'Agilidade comprovada em coberturas em tempo real e plantões de edição.' },
  { title: 'Produção Mobile', desc: 'Expertise em produções ágeis utilizando dispositivos móveis.' },
];

export default function About() {
  const [isBioOpen, setIsBioOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-card-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-gray-800 relative z-10">
              <img
                src="https://drive.google.com/thumbnail?id=1YsUMgpVaj1h6HMw7l74FMOhRKQa3rz5C&sz=w1280"
                alt="Guilherme Rodrigues trabalhando"
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Sobre ( brevemente )</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              As vezes me chamam de <span className="text-accent">Guironas</span>
            </h3>
            
            <div className="space-y-6 mb-10">
              {briefPoints.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-white font-bold">{point.title}:</span> {point.desc}
                  </p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setIsBioOpen(true)}
              className="group flex items-center gap-3 text-white font-bold hover:text-accent transition-colors mb-12"
            >
              LER BIOGRAFIA COMPLETA
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>

            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-main-bg border border-gray-800 hover:border-gray-700 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-card-bg flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                    <skill.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{skill.name}</h4>
                  <p className="text-sm text-gray-400">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Biography Modal */}
      <AnimatePresence>
        {isBioOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setIsBioOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              data-lenis-prevent
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-card-bg border border-gray-800 rounded-3xl shadow-2xl z-10 p-6 md:p-12"
            >
              <button
                onClick={() => setIsBioOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-main-bg/50 hover:bg-main-bg rounded-full flex items-center justify-center text-white transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Biografia Completa</h2>
                  <h3 className="text-3xl md:text-4xl font-bold">Guilherme Rodrigues</h3>
                </div>

                <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                  <p>
                    Com anos de experiência no mercado audiovisual, minha jornada começou com a curiosidade de como as imagens poderiam evocar emoções profundas. Hoje, essa curiosidade se transformou em uma expertise técnica e criativa que aplico em cada projeto.
                  </p>
                  <p>
                    Especializado em produções de alto impacto, domino ferramentas como Premiere Pro, After Effects e Photoshop para entregar uma estética refinada e moderna. Minha abordagem não é apenas sobre "fazer vídeos bonitos", mas sim sobre construir narrativas estratégicas que conectam marcas ao seu público-alvo de forma autêntica.
                  </p>
                  <p>
                    No mundo dinâmico das redes sociais, desenvolvi a habilidade de entrega ultra-rápida através do <span className="text-white font-bold">Same-Day Edit</span>. Seja em grandes eventos corporativos, festivais de música ou lançamentos de produtos, garanto que o conteúdo chegue ao público enquanto a energia do momento ainda está vibrante.
                  </p>
                  <p>
                    Além das câmeras tradicionais, sou um entusiasta da produção mobile, utilizando a tecnologia de ponta dos smartphones para criar conteúdos ágeis, criativos e com qualidade profissional para o dia a dia digital.
                  </p>
                  <p className="text-accent font-medium italic">
                    "Minha missão é transformar sua visão em uma realidade visual inesquecível."
                  </p>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-main-bg rounded-xl border border-gray-800 text-sm font-medium">
                    +2 Anos de Experiência
                  </div>
                  <div className="px-4 py-2 bg-main-bg rounded-xl border border-gray-800 text-sm font-medium">
                    +50 Projetos Entregues
                  </div>
                  <div className="px-4 py-2 bg-main-bg rounded-xl border border-gray-800 text-sm font-medium">
                    Foco em Alta Retenção
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
