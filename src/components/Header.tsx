import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const navLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.portfolio", href: "#portfolio" },
  { key: "nav.about", href: "#about" },
  { key: "nav.contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("light");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-main-bg/95 backdrop-blur-lg py-3 shadow-lg border-b border-white/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors whitespace-nowrap"
        >
          GUI<span className="text-accent">RONAS</span>
        </a>

        {/* Desktop Nav (Breaks at lg / 1024px to prevent merging/squeezing) */}
        <nav className="hidden lg:flex items-center ml-auto">
          <div className="flex items-center gap-6 xl:gap-8 mr-6">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            {/* Elegant Segmented Language Toggle */}
            <div className="flex items-center p-1 bg-card-bg border border-white/10 rounded-full">
              <button
                onClick={() => setLanguage('pt')}
                className={`px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase rounded-full transition-all duration-300 ${
                  language === 'pt' ? 'bg-white text-black shadow-md' : 'text-gray-500 hover:text-white'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase rounded-full transition-all duration-300 ${
                  language === 'en' ? 'bg-white text-black shadow-md' : 'text-gray-500 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="#contact"
              className="px-6 py-2.5 bg-accent hover:bg-red-600 text-white text-sm font-bold rounded-full transition-all uppercase tracking-wider whitespace-nowrap"
            >
              {t('nav.cta')}
            </a>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Mobile Language Toggle */}
          <div className="flex items-center p-0.5 bg-card-bg border border-white/10 rounded-full mr-1">
            <button
              onClick={() => setLanguage('pt')}
              className={`px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full transition-all ${
                language === 'pt' ? 'bg-white text-black shadow-md' : 'text-gray-500'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full transition-all ${
                language === 'en' ? 'bg-white text-black shadow-md' : 'text-gray-500'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-400"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="p-2 text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card-bg border-b border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-lg font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(link.key)}
                </a>
              ))}
              <a
                href="#contact"
                className="w-fit px-8 py-3 bg-accent text-white font-bold rounded-full mt-4 uppercase tracking-wider text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.cta')}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
