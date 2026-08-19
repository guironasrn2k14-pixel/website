import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const getTags = () => [
    t('about.tags.1'),
    t('about.tags.2'),
    t('about.tags.3'),
    t('about.tags.4'),
    t('about.tags.5'),
  ];

  return (
    <section id="about" className="py-24 bg-card-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-main-bg/30 skew-x-12 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 leading-none">
              {t('about.title.1')}
            </h2>
            <p className="text-2xl md:text-3xl text-gray-400 font-light mb-12">
              {t('about.subtitle.1')}
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {getTags().map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-white/10 text-sm font-mono tracking-widest text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-main-bg/50 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {t('about.title.2')}
              </h3>
              <div className="flex items-center gap-6 text-gray-400 font-mono text-sm">
                <span>{t('about.raw')}</span>
                <MoveRight className="text-accent" />
                <span className="text-white font-bold">{t('about.final')}</span>
              </div>
              <p className="mt-6 text-sm text-gray-500 leading-relaxed">
                {t('about.steps')}
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden relative">
              <img
                src="/guilherme_staircase.png"
                alt="Guilherme - Editor Audiovisual"
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-main-bg via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 p-8 bg-main-bg border border-white/10 rounded-3xl shadow-2xl max-w-sm">
              <h3 className="text-2xl font-bold mb-3">{t('about.title.3')}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {t('about.desc')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
