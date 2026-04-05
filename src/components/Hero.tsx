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

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card-bg border border-gray-800 w-fit">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-gray-300">Disponível para novos projetos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Contando histórias através da <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">
              narrativa visual
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
            Olá, sou <span className="text-white font-medium">Guilherme Rodrigues</span> (Guironas). Produtor audiovisual apaixonado por transformar ideias em experiências imersivas.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-accent hover:bg-red-600 text-white font-medium rounded-full transition-all flex items-center gap-2 group"
            >
              Ver trabalhos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-card-bg hover:bg-gray-800 border border-gray-800 text-white font-medium rounded-full transition-all flex items-center gap-2"
            >
              Entrar em contato
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative hidden md:block"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border border-gray-800 bg-card-bg relative group">
            <img
              src="https://drive.google.com/thumbnail?id=1YsUMgpVaj1h6HMw7l74FMOhRKQa3rz5C&sz=w1280"
              alt="Guironas - Produtor Audiovisual"
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-main-bg/80 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <PlayCircle size={80} className="text-white/80" />
            </div>
          </div>
          
          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-6 bg-card-bg border border-gray-800 p-4 rounded-2xl shadow-xl flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl">
              🎥
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">Especialista em</p>
              <p className="text-white font-bold">Produção Visual</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
