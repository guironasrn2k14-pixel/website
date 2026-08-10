import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-main-bg relative flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            TEM UM PROJETO?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
            Me conte o que você precisa e vamos transformar a ideia em vídeo.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full">
            <a
              href="https://wa.me/5548991207196"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-white text-black hover:bg-gray-200 font-display font-bold rounded-full transition-all flex items-center justify-center gap-3 uppercase tracking-wider text-sm md:text-base"
            >
              Fale comigo
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-10 py-5 bg-card-bg/50 backdrop-blur-md hover:bg-card-bg border border-white/10 text-white font-display font-medium rounded-full transition-all flex items-center justify-center gap-3 text-sm md:text-base uppercase tracking-wider"
            >
              Ver trabalhos
              <ArrowRight size={18} />
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-2 text-gray-500 text-sm">
            <Mail size={16} />
            <a href="mailto:guironasrn2k14@gmail.com" className="hover:text-white transition-colors">
              guironasrn2k14@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
