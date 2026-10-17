import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/5511954629657?text=Olá%20Guironas!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20edição%20de%20vídeo.";

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Badge de Disponibilidade */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            <span className="text-xs font-mono text-[#8A919E] tracking-widest uppercase font-medium">
              {t("hero.badge")}
            </span>
          </div>

          {/* Título Principal Bem Visível e Direto ao Ponto */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.08] text-[#F8FAFC] max-w-5xl">
            {t("hero.title.main")}
          </h1>

          {/* Subtítulo Focado em Valor e Retenção */}
          <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed font-sans font-light mt-6">
            {t("hero.desc.main")}
          </p>

          {/* Botão de Chamada para Ação com Neon Glow no WhatsApp */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-10 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 sm:py-4.5 bg-accent hover:bg-rose-600 text-white font-display font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-3 group text-sm sm:text-base uppercase tracking-wider shadow-[0_0_30px_rgba(225,29,72,0.45)] hover:shadow-[0_0_45px_rgba(225,29,72,0.75)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle size={19} className="group-hover:scale-110 transition-transform" />
              <span>{t("hero.cta.whatsapp")}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 sm:py-4.5 bg-[#1A1C23] hover:bg-[#232630] border border-white/10 hover:border-white/20 text-[#F8FAFC] font-display font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base uppercase tracking-wider"
            >
              <span>{t("hero.cta.portfolio")}</span>
            </a>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
