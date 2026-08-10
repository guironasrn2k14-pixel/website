import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 bg-main-bg relative flex flex-col gap-32">
      {/* NÃO É SÓ EDITAR */}
      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            NÃO É SÓ EDITAR.
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 font-light max-w-2xl leading-relaxed">
            É entender o que o vídeo precisa fazer.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {["RITMO", "RETENÇÃO", "STORYTELLING", "MOTION", "SOUND DESIGN"].map((item, i) => (
              <span key={i} className="text-xs md:text-sm font-bold tracking-widest text-accent uppercase px-4 py-2 border border-accent/20 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* DO BRUTO AO FINAL */}
      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter uppercase">
            Do bruto ao final
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl mx-auto">
            <div className="flex flex-col w-full md:w-1/2 gap-4">
              <div className="aspect-video bg-card-bg border border-gray-800 rounded-xl overflow-hidden relative flex items-center justify-center">
                <span className="text-gray-500 font-bold tracking-widest uppercase">Material Bruto</span>
              </div>
            </div>
            
            <div className="hidden md:flex">
              <ArrowRight className="text-accent w-8 h-8" />
            </div>

            <div className="flex flex-col w-full md:w-1/2 gap-4">
              <div className="aspect-video bg-card-bg border border-accent/30 rounded-xl overflow-hidden relative flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase">Edição Final</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mt-4">
            Cortes · Ritmo · Motion · Sound Design · Legendas · Tratamento Visual
          </p>
        </motion.div>
      </div>

      {/* PRAZER, SOU O GUI */}
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl relative">
              <img
                src="/museu.pgn.jpg"
                alt="Guilherme Rodrigues"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-6">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
              PRAZER, SOU O GUI.
            </h2>
            <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
              Sou editor audiovisual e trabalho transformando materiais brutos em vídeos com ritmo, narrativa e impacto visual.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
