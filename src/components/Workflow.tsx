import { motion } from "motion/react";
import { Search, PenTool, Video, Scissors, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Imersão",
    desc: "Entendimento profundo do projeto, do problema e do público-alvo.",
    icon: Search
  },
  {
    num: "02",
    title: "Planejamento",
    desc: "Desenvolvimento do roteiro, storyboard e estratégia de comunicação.",
    icon: PenTool
  },
  {
    num: "03",
    title: "Produção",
    desc: "Captação das imagens com estética cinematográfica e direção de arte.",
    icon: Video
  },
  {
    num: "04",
    title: "Pós-produção",
    desc: "Edição, color grading, sound design e motion graphics alinhados à narrativa.",
    icon: Scissors
  },
  {
    num: "05",
    title: "Entrega",
    desc: "Versões finais otimizadas para cada plataforma e análise de impacto.",
    icon: Rocket
  }
];

export default function Workflow() {
  return (
    <section className="py-24 relative overflow-hidden bg-main-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
            Processo Criativo
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Da ideia ao <span className="text-accent">resultado</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-card-bg border border-gray-800 flex items-center justify-center text-accent mb-6 relative z-10 group-hover:scale-110 group-hover:border-accent transition-all duration-300">
                <step.icon size={28} />
              </div>
              <div className="text-5xl font-black text-gray-800/50 absolute top-0 -z-10 select-none">
                {step.num}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              
              {/* Connector line - hide on last element */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-gray-800 to-transparent -z-20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
