import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 bg-accent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8 text-white">
          {t('contact.title')}
        </h2>
        <p className="text-xl md:text-3xl text-white/90 max-w-2xl font-light leading-relaxed mb-12">
          {t('contact.desc')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full">
          <a
            href="https://wa.me/558499298317"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-white text-accent hover:bg-gray-100 font-display font-bold rounded-full transition-all flex items-center justify-center gap-3 group text-base uppercase tracking-wider shadow-xl"
          >
            {t('contact.cta.primary')}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-10 py-5 bg-transparent hover:bg-black/10 border-2 border-white/30 text-white font-display font-bold rounded-full transition-all flex items-center justify-center text-base uppercase tracking-wider"
          >
            {t('contact.cta.secondary')}
          </a>
        </div>
      </div>
    </section>
  );
}
