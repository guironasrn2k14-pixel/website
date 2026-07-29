import { motion } from "motion/react";
import { Target, MonitorPlay, Zap, LayoutGrid, MessagesSquare, BarChart } from "lucide-react";

const differentials = [
  {
    title: "Visão Cinematográfica",
    desc: "Cada frame é pensado para transmitir emoção e profissionalismo, elevando o valor percebido da sua marca.",
    icon: MonitorPlay
  },
  {
    title: "Pensamento Estratégico",
    desc: "O design visual e a edição são guiados pelo objetivo de negócio: vender, reter ou emocionar.",
    icon: Target
  },
  {
    title: "Agilidade & Escala",
    desc: "Fluxos de trabalho otimizados garantem entregas rápidas (como o Same-Day Edit) sem sacrificar a qualidade.",
    icon: Zap
  },
  {
    title: "Produção Completa",
    desc: "Do roteiro inicial à colorização final, ofereço uma solução integrada de ponta a ponta.",
    icon: LayoutGrid
  },
  {
    title: "Comunicação Constante",
    desc: "Parceria real durante todo o projeto. Sem surpresas na entrega, apenas resultados alinhados.",
    icon: MessagesSquare
  },
  {
    title: "Foco no Resultado",
    desc: "A estética serve à conversão. Crio vídeos que as pessoas assistem até o fim e compartilham.",
    icon: BarChart
  }
];

export default function Differential() {
  return (
    <section className="py-24 relative overflow-hidden bg-card-bg/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
            Diferenciais
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold max-w-2xl">
            Por que trabalhar <span className="text-accent">comigo?</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-main-bg border border-gray-800 hover:border-accent/50 transition-colors group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-card-bg flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform relative z-10">
                <item.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 relative z-10">
                {item.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base relative z-10">
                {item.desc}
              </p>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-[30px] group-hover:bg-accent/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
