import { motion } from "motion/react";
import { FileText, Scissors, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Workflow() {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/5511954629657?text=Olá%20Guironas!%20Gostaria%20de%20iniciar%20um%20projeto.";

  const steps = [
    {
      num: "01",
      title: t("workflow.step1.title"),
      desc: t("workflow.step1.desc"),
      icon: FileText,
      badge: "Briefing Ágil",
    },
    {
      num: "02",
      title: t("workflow.step2.title"),
      desc: t("workflow.step2.desc"),
      icon: Scissors,
      badge: "Cortes & Sound",
    },
    {
      num: "03",
      title: t("workflow.step3.title"),
      desc: t("workflow.step3.desc"),
      icon: CheckCircle2,
      badge: "Garantia 100%",
    },
    {
      num: "04",
      title: t("workflow.step4.title"),
      desc: t("workflow.step4.desc"),
      icon: Sparkles,
      badge: "4K 60FPS",
    },
  ];

  return (
    <section id="workflow" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header do Processo */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-accent/20 bg-accent/5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-accent uppercase font-bold">
              {t("workflow.tag")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F8FAFC] tracking-tight mb-4">
            {t("workflow.title")}
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl font-sans font-light">
            {t("workflow.subtitle")}
          </p>
        </div>

        {/* Grade de 4 Passos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col justify-between p-6 rounded-2xl bg-[#1A1C23] border border-white/5 hover:border-accent/40 transition-all duration-300 group shadow-xl"
              >
                {/* Topo do Card com Número e Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Icon size={22} />
                    </div>
                    <span className="text-2xl font-mono font-bold text-white/20 group-hover:text-accent/60 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-2 block">
                    {step.badge}
                  </span>

                  <h3 className="text-lg font-bold font-display text-[#F8FAFC] mb-2.5 uppercase tracking-wide">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#8A919E]">
                  <span>Passo {step.num} de 04</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Rápido do Processo */}
        <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-xs sm:text-sm text-[#94A3B8] font-mono">
            Tem um prazo curto ou projeto especial?
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent hover:text-rose-400 transition-colors underline underline-offset-4"
          >
            <span>Fale direto comigo no WhatsApp</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
