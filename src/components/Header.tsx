import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
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

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-main-bg/80 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4 md:gap-8">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors"
        >
          GUI<span className="text-accent">RONAS</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {t(link.key)}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-800 hover:bg-gray-800 transition-colors text-gray-400 hover:text-white text-xs font-bold tracking-widest uppercase"
          >
            <Globe size={14} />
            {language === 'pt' ? 'EN' : 'PT'}
          </button>

          <a
            href="#contact"
            className="px-6 py-2.5 bg-accent hover:bg-red-600 text-white text-sm font-bold rounded-full transition-all uppercase tracking-wider"
          >
            {t('nav.cta')}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-400 font-bold text-xs flex items-center gap-1"
          >
            <Globe size={14} />
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full hover:bg-gray-800 transition-colors text-gray-400"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button
            className="p-3 text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card-bg border-b border-gray-800 overflow-hidden"
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
                className="w-fit px-8 py-3 bg-accent text-white font-bold rounded-full mt-2 uppercase tracking-wider text-sm"
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
