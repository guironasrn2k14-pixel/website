import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center gap-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-bg border border-gray-800 w-fit">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wide">Disponível para novos projetos</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.1]">
            Contando histórias através da <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-500 to-red-500">
              narrativa visual
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
            Olá, sou <span className="text-white font-medium">Guilherme Rodrigues</span> (Guironas). Produtor audiovisual apaixonado por transformar ideias em experiências imersivas que conectam marcas e pessoas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
            <a
              href="#portfolio"
              className="px-10 py-5 bg-accent hover:bg-red-600 text-white font-bold rounded-full transition-all flex items-center gap-3 group text-lg shadow-lg shadow-accent/20"
            >
              Ver trabalhos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-10 py-5 bg-card-bg hover:bg-gray-800 border border-gray-800 text-white font-bold rounded-full transition-all flex items-center gap-3 text-lg"
            >
              Entrar em contato
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
