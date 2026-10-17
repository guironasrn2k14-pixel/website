import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const whatsappUrl =
    "https://wa.me/5511954629657?text=Olá%20Guironas!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20edição%20de%20vídeo.";

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-[#1A1C23] border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center text-center"
        >
          {/* Subtle Cyberpunk/Anime Glow at the top */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="text-[11px] font-mono tracking-widest text-accent uppercase font-bold">
              CTA FINAL · ALTA CONVERSÃO
            </span>
          </div>

          {/* Chamada Final Marcante */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[#F8FAFC] max-w-3xl leading-[1.1] mb-6">
            {t("contact.title")}
          </h2>

          <p className="text-sm sm:text-lg text-[#94A3B8] max-w-2xl font-light leading-relaxed mb-10 font-sans">
            {t("contact.desc")}
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mb-12">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 sm:py-4.5 bg-accent hover:bg-rose-600 text-white font-display font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-3 group text-sm sm:text-base uppercase tracking-wider shadow-[0_0_35px_rgba(225,29,72,0.55)] hover:shadow-[0_0_50px_rgba(225,29,72,0.8)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              <span>{t("contact.cta.primary")}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 sm:py-4.5 bg-[#121316] hover:bg-[#20222a] border border-white/10 text-[#F8FAFC] font-display font-medium rounded-full transition-all duration-300 flex items-center justify-center text-sm sm:text-base uppercase tracking-wider"
            >
              <span>{t("contact.cta.secondary")}</span>
            </a>
          </div>

          {/* Links Rápidos: E-mail e Redes Sociais */}
          <div className="pt-8 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8A919E]">
            <a
              href="mailto:guironas@hotmail.com"
              className="flex items-center gap-2 hover:text-[#F8FAFC] transition-colors"
            >
              <Mail size={15} className="text-accent" />
              <span>guironas@hotmail.com</span>
            </a>

            <div className="flex items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#F8FAFC] transition-colors"
              >
                <MessageCircle size={15} className="text-emerald-400" />
                <span>(11) 95462-9657</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
