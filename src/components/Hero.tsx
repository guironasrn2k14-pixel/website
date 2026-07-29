import { motion } from "motion/react";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-main-bg"
    >
      {/* Background Elements - Immersive VFX Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-main-bg to-main-bg" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px] opacity-50 mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-bg/80 backdrop-blur-md border border-white/5 w-fit shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
            <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">
              Disponível para novos projetos
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-display font-bold tracking-tighter leading-[1.1] md:leading-[1] px-2 md:px-0">
            Transformando ideias em <br className="hidden md:block" /> histórias que geram{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent via-red-500 to-orange-500">
              impacto
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl leading-relaxed px-6 md:px-0 font-light">
            Produção audiovisual completa para marcas, criadores e empresas que desejam comunicar com qualidade, estratégia e identidade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-8 w-full px-6 md:px-0">
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-10 py-4 md:py-5 bg-white text-black hover:bg-gray-200 font-display font-bold rounded-full transition-all flex items-center justify-center gap-3 group text-base md:text-lg shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              Ver trabalhos
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 md:py-5 bg-card-bg/50 backdrop-blur-md hover:bg-card-bg border border-white/10 text-white font-display font-medium rounded-full transition-all flex items-center justify-center gap-3 text-base md:text-lg"
            >
              Entrar em contato
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
