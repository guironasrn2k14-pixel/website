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
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1A1C23]/20 skew-x-12 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 leading-none text-[#F8FAFC]">
              {t('about.title.1')}
            </h2>
            <p className="text-2xl md:text-3xl text-[#8A919E] font-light mb-12 font-sans">
              {t('about.subtitle.1')}
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {getTags().map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-white/5 bg-[#1A1C23] text-xs font-mono tracking-[0.08em] uppercase text-[#8A919E]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="p-8 border border-white/5 rounded-2xl bg-[#1A1C23] backdrop-blur-sm relative overflow-hidden group shadow-xl">
              <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-[#F8FAFC] font-display">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {t('about.title.2')}
              </h3>
              <div className="flex items-center gap-6 text-[#8A919E] font-mono text-sm">
                <span>{t('about.raw')}</span>
                <MoveRight className="text-accent" />
                <span className="text-[#F8FAFC] font-bold">{t('about.final')}</span>
              </div>
              <p className="mt-6 text-sm text-[#8A919E] leading-relaxed font-sans">
                {t('about.steps')}
              </p>

              {/* Softwares & Pipeline Profissional */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {t('about.pipeline.title')}
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut Pro', 'Color Grading', 'Sound Design'].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-lg border border-white/10 bg-white/[0.03] text-xs font-mono text-[#F8FAFC]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
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
            <div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden relative border border-white/5">
              <img
                src="/museu.pgn.jpg"
                alt="Guilherme - Editor Audiovisual"
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 p-8 bg-[#1A1C23] border border-white/5 rounded-2xl shadow-2xl max-w-sm">
              <h3 className="text-2xl font-bold mb-3 text-[#F8FAFC] font-display">{t('about.title.3')}</h3>
              <p className="text-[#8A919E] leading-relaxed text-sm font-sans">
                {t('about.desc')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
