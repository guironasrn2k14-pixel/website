import { motion } from "motion/react";
import { MonitorPlay, Smartphone, Clapperboard, Scissors, BookOpen } from "lucide-react";

const services = [
  {
    title: "Publicidade",
    desc: "Campanhas, lançamentos, anúncios e conteúdos desenvolvidos para fortalecer marcas e conectar produtos ao público.",
    icon: MonitorPlay
  },
  {
    title: "Social Media",
    desc: "Vídeos de alta retenção para Instagram, TikTok, YouTube Shorts e outras plataformas digitais.",
    icon: Smartphone
  },
  {
    title: "Produção Audiovisual",
    desc: "Projetos completos, desde a pré-produção até a entrega final, incluindo direção, captação e planejamento.",
    icon: Clapperboard
  },
  {
    title: "Pós-Produção",
    desc: "Edição profissional, color grading, motion graphics, sound design, finalização e acabamento.",
    icon: Scissors
  },
  {
    title: "Storytelling",
    desc: "Narrativas audiovisuais que unem emoção, estratégia e identidade para comunicar mensagens memoráveis.",
    icon: BookOpen
  }
];

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden bg-card-bg/5" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
            Áreas de Atuação
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Soluções <span className="text-accent">Audiovisuais</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {services.map((item, index) => (
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
