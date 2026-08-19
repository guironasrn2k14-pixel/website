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
      <footer className="bg-transparent py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-tighter hover:text-accent transition-colors"
            >
              GUI<span className="text-accent">RONAS</span>
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Guironas. {t('footer.rights')}
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <button
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-white transition-colors"
            >
              {t('footer.terms')}
            </button>
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-white transition-colors"
            >
              {t('footer.privacy')}
            </button>
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
