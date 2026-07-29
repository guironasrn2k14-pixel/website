import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Quote } from "lucide-react";

const testimonials = [
  {
    id: "iza",
    client: "Iza",
    role: "Criadora de Conteúdo",
    project: "Edição de Vlogs e Reels",
    result: "Aumento de 40% na retenção média dos vídeos.",
    image: "/feed1.png.png",
    quote: "O Guironas não apenas edita, ele entende exatamente o ritmo que o meu público gosta. Meus vídeos nunca tiveram tanta interação e retenção como agora. Trabalho impecável e entrega sempre no prazo.",
    theme: "amber",
  },
  {
    id: "lioness",
    client: "lionessheart_cosplay",
    role: "Cosplayer & Influenciadora",
    project: "Cobertura de Evento & Social Media",
    result: "Conteúdo viralizado com mais de 500k views orgânicas.",
    image: "/feed2.png.png",
    quote: "Incrível como ele consegue captar a essência do personagem e transformar em uma edição cinematográfica para o Reels. A agilidade no Same-Day Edit fez toda a diferença no engajamento do evento.",
    theme: "violet",
  },
  {
    id: "fernando",
    client: "Fernando",
    role: "Diretor de Marketing",
    project: "Campanha Institucional",
    result: "Redução de 30% no tempo de aprovação de material.",
    image: "/feed3.png.png",
    quote: "A comunicação é excelente. O processo flui de forma muito profissional desde o roteiro até a entrega final. A capacidade de alinhar a estética com os objetivos de negócio da nossa marca foi fundamental.",
    theme: "purple",
  }
];

export default function Clients() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
            Prova Social
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            O que dizem os <span className="text-accent">parceiros</span>
          </h3>
        </div>

        <div className="relative w-full max-w-5xl mx-auto min-h-0 md:min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8 items-center bg-card-bg/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-12 shadow-2xl"
            >
              {/* Context & Quote */}
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <Quote className="text-accent/40 w-16 h-16 mb-2" />
                <p className="text-xl md:text-2xl text-gray-300 italic leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </p>
                
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="text-white font-bold text-lg flex items-center gap-2">
                      {testimonials[activeIndex].client}
                      <CheckCircle2 size={16} className="text-blue-400" />
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonials[activeIndex].role}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-800">
                    <div>
                      <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-1">Projeto</span>
                      <span className="text-sm text-gray-300">{testimonials[activeIndex].project}</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-1">Resultado</span>
                      <span className="text-sm text-gray-300">{testimonials[activeIndex].result}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image/Screenshot */}
              <div className="relative w-full max-w-[320px] mx-auto aspect-[1023/1537] rounded-2xl overflow-hidden order-1 lg:order-2 border border-white/10 shadow-2xl group">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={`Feedback de ${testimonials[activeIndex].client}`} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${testimonials[activeIndex].client}&background=202c33&color=fff&size=512`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#0a0a09] to-transparent pointer-events-none z-10" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 transition-all duration-500 rounded-full ${activeIndex === idx ? "w-10 bg-accent" : "w-3 bg-white/20 hover:bg-white/40"}`}
                aria-label={`Ver depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

