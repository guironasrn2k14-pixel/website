import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <footer className="bg-transparent py-14 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <a
              href="#home"
              className="text-xl font-bold tracking-tighter hover:text-accent transition-colors font-display"
            >
              GUI<span className="text-accent">RONAS</span>
            </a>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <span className="text-xs text-[#8A919E] font-mono">
              Edição de Vídeo de Alto Impacto
            </span>
          </div>

          {/* Contato Rápido */}
          <div className="flex items-center gap-6 text-xs font-mono text-[#8A919E]">
            <a
              href="https://wa.me/5511954629657?text=Olá%20Guironas!"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors text-emerald-400"
            >
              WhatsApp
            </a>
            <a
              href="mailto:guironas@hotmail.com"
              className="hover:text-white transition-colors"
            >
              guironas@hotmail.com
            </a>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#8A919E]">
            <p>&copy; {currentYear} Guironas.</p>
            <button
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t('footer.terms')}
            </button>
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t('footer.privacy')}
            </button>
          </div>
        </div>

        {/* Linha de Softwares & Pagamentos Globais */}
        <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-[11px] font-mono text-[#8A919E]">
            <span className="text-white font-medium uppercase tracking-wider mr-1">Pipeline:</span>
            {['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut Pro', 'Color Grading', 'Sound Design'].map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[10px] text-[#CBD5E1]">
                {tech}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t('footer.payments')}</span>
          </div>
        </div>
      </footer>

      {/* Terms Modal */}
      <AnimatePresence>
        {isTermsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsTermsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-card-bg border border-gray-800 rounded-3xl shadow-2xl z-10 p-8 md:p-12"
            >
              <button
                onClick={() => setIsTermsOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-main-bg/50 hover:bg-main-bg rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="text-2xl font-bold mb-6">{t('footer.terms.title')}</h3>
              <div className="text-gray-400 space-y-4 leading-relaxed">
                <p>{t('footer.terms.p1')}</p>
                <p>{t('footer.terms.p2')}</p>
                <p>{t('footer.terms.p3')}</p>
                <p>{t('footer.terms.p4')}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Privacy Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsPrivacyOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-card-bg border border-gray-800 rounded-3xl shadow-2xl z-10 p-8 md:p-12"
            >
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-main-bg/50 hover:bg-main-bg rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="text-2xl font-bold mb-6">
                {t('footer.privacy.title')}
              </h3>
              <div className="text-gray-400 space-y-4 leading-relaxed">
                <p>{t('footer.privacy.p1')}</p>
                <p>{t('footer.privacy.p2')}</p>
                <p>{t('footer.privacy.p3')}</p>
                <p>{t('footer.privacy.p4')}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
