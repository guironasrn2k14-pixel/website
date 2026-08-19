import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
            <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">
              {t('hero.badge')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] font-display font-bold tracking-tighter leading-[1] mt-4 break-words hyphens-auto w-full px-2">
            {t('hero.title.1')}
            <br />
            {t('hero.title.2')}
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl leading-relaxed px-6 md:px-0 font-light mt-4">
            {t('hero.desc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-8 w-full px-6 md:px-0">
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-10 py-4 md:py-5 bg-white text-black hover:bg-gray-200 font-display font-bold rounded-full transition-all flex items-center justify-center gap-3 group text-sm md:text-base uppercase tracking-wider"
            >
              {t('hero.cta.primary')}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 md:py-5 bg-transparent hover:bg-white/5 border border-white/20 text-white font-display font-medium rounded-full transition-all flex items-center justify-center gap-3 text-sm md:text-base uppercase tracking-wider"
            >
              {t('hero.cta.secondary')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
