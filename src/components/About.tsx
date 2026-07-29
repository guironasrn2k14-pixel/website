import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Video,
  Film,
  Scissors,
  Camera,
  X,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const beliefs = [
  {
    title: "Propósito antes do play",
    desc: "Acredito que cada projeto deve ter um propósito. Antes de pensar em técnica, procuro entender a mensagem e a emoção que ela deve provocar.",
  },
  {
    title: "Estratégia invisível",
    desc: "Um bom audiovisual não parece propaganda. Ele informa, entretém ou emociona enquanto atinge os objetivos do projeto de forma natural.",
  },
  {
    title: "Atenção cirúrgica",
    desc: "O som, a cor, o ritmo da narrativa. Cada elemento técnico existe exclusivamente para prender a atenção e fortalecer a comunicação.",
  },
];

export default function About() {
  const [isBioOpen, setIsBioOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-card-bg/5 relative overflow-hidden">
      {/* Background Section SVGs */}
      <svg
        className="absolute top-20 right-[-5%] w-96 h-96 opacity-[0.03] text-gray-300 pointer-events-none rotate-[20deg]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="22" y1="12" x2="20" y2="12" />
        <line x1="4" y1="12" x2="2" y2="12" />
        <line x1="19.07" y1="4.93" x2="17.66" y2="6.34" />
        <line x1="6.34" y1="17.66" x2="4.93" y2="19.07" />
        <line x1="19.07" y1="19.07" x2="17.66" y2="17.66" />
        <line x1="6.34" y1="6.34" x2="4.93" y2="4.93" />
      </svg>
      <svg
        className="absolute bottom-20 left-10 w-48 h-48 opacity-[0.03] text-gray-300 pointer-events-none rotate-[-10deg]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          d="M2 12h4l3-9 5 18 3-9h5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
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
                src="/museu.pgn.jpg"
                alt="Guilherme Rodrigues trabalhando"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
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
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
              Minha História
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              O audiovisual vai além da estética; ele comunica,{" "}
              <span className="text-accent">convence e permanece.</span>
            </h3>

            <div className="space-y-6 mb-10 text-gray-300 leading-relaxed text-lg">
              <p>
                Acredito que cada projeto nasce de uma estratégia antes de chegar à tela.
                Minha prioridade não é apenas entregar projetos esteticamente atraentes, mas construir soluções audiovisuais que 
                representem marcas e pessoas, resolvendo problemas reais de comunicação.
              </p>
              <p>
                Trabalho unindo roteiro, ritmo e design visual para garantir que a sua mensagem
                não apenas seja vista, mas compreendida e lembrada pelo seu público.
              </p>
            </div>

            <button
              onClick={() => setIsBioOpen(true)}
              className="group flex items-center gap-3 text-white font-bold hover:text-accent transition-colors mb-12"
            >
              LER HISTÓRIA COMPLETA
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>

            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm">Minha filosofia criativa</h4>
            <div className="space-y-4">
              {beliefs.map((belief, index) => (
                <motion.div
                  key={belief.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <CheckCircle2
                    className="text-accent shrink-0 mt-1"
                    size={20}
                  />
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    <span className="text-white font-bold block mb-1">{belief.title}</span>
                    {belief.desc}
                  </p>
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
                  <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
                    Como começou
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Transformando a visão em resultado
                  </h3>
                </div>

                <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                  <p>
                    Minha jornada começou entendendo que a estética, por si só, é vazia sem uma boa história.
                    Aprendi rapidamente que o papel do audiovisual não é apenas "enfeitar", mas traduzir a
                    essência de uma marca em imagens que movem as pessoas à ação.
                  </p>
                  <p>
                    Ao longo dos anos, entendi que a chave para um projeto de sucesso está na 
                    <span className="text-white font-bold"> imersão</span>. Eu não trabalho como um simples executor.
                    Eu me aprofundo no universo do cliente para entender o problema que estamos tentando resolver,
                    seja vender um produto, aumentar a retenção ou posicionar um artista no mercado.
                  </p>
                  <p>
                    Minha forma de trabalhar se baseia na parceria e na comunicação clara. Acredito que as
                    melhores soluções nascem quando a técnica cinematográfica se encontra com um profundo
                    entendimento de branding e comportamento humano.
                  </p>
                  <p>
                    É por isso que as empresas confiam no meu trabalho: porque sabem que cada frame renderizado
                    foi estrategicamente pensado para gerar impacto qualitativo e quantitativo.
                  </p>
                  <p className="text-accent font-medium italic mt-4 text-xl border-l-4 border-accent pl-4">
                    "Utilizo o audiovisual como ferramenta para comunicar ideias de forma clara, memorável e estratégica."
                  </p>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-main-bg rounded-xl border border-gray-800 text-sm font-medium">
                    Solução de Problemas
                  </div>
                  <div className="px-4 py-2 bg-main-bg rounded-xl border border-gray-800 text-sm font-medium">
                    Visão Estratégica
                  </div>
                  <div className="px-4 py-2 bg-main-bg rounded-xl border border-gray-800 text-sm font-medium">
                    Narrativas Impactantes
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
