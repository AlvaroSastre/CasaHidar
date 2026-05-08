import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#inicio' },
    { name: t.nav.social, href: '#redes' },
    { name: t.nav.about, href: '#nosotros' },
    { name: t.nav.menu, href: '#menu' },
    { name: t.nav.delivery, href: '#delivery' },
    { name: t.nav.location, href: '#ubicacion' },
    { name: t.nav.reviews, href: '#resenas' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled ? 'bg-charcoal/95 backdrop-blur-md py-4 border-gold/20 shadow-lg' : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#inicio" className="flex items-center gap-4 group">
            <img 
              src="https://www.lomejordelbarrio.com/files/uploads/file/06ef55ed-ed64-4b99-9665-a781d9a66263/casa-hidar-restaurante-ensanche-de-vallecas-logo-1.png" 
              alt="Casa Hidar Logo" 
              className="h-12 md:h-16 w-12 md:w-16 rounded-full object-cover brightness-110 contrast-110 border border-gold/20"
              referrerPolicy="no-referrer"
            />
            <span className="block text-gold text-[9px] sm:text-[10px] lg:text-[11px] font-medium uppercase tracking-[0.2em] border-l border-gold/30 pl-4">
              {t.nav.halal}
            </span>
          </a>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-1 sm:gap-6">
          {/* Menu Dropdown Toggle */}
          <div className="relative">
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setIsLangMenuOpen(false);
              }}
              className="group flex items-center gap-2 px-4 py-2 text-cream hover:text-gold transition-colors text-[11px] uppercase tracking-[0.2em] font-bold border border-white/10 hover:border-gold/50"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span className="hidden sm:inline">Menu</span>
            </button>
            
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute top-full mt-4 right-0 sm:right-auto sm:left-0 bg-charcoal border border-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-4 w-64 backdrop-blur-xl z-[60]"
                >
                  <div className="flex flex-col">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-medium text-cream hover:text-gold hover:bg-gold/5 transition-all border-b border-white/5 last:border-0"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => {
                setIsLangMenuOpen(!isLangMenuOpen);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-cream hover:text-gold transition-colors text-[11px] uppercase tracking-[0.2em] font-medium px-2 py-2"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{languages.find(l => l.code === language)?.label}</span>
              <span className="sm:hidden">{languages.find(l => l.code === language)?.code}</span>
            </button>
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-4 right-0 bg-charcoal border border-gold/20 shadow-2xl py-2 w-32 backdrop-blur-md z-[60]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-[10px] uppercase tracking-widest hover:bg-gold/10 transition-colors flex items-center gap-3 ${
                        language === lang.code ? 'text-gold font-bold' : 'text-cream'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#reservar"
            className="hidden sm:block px-8 py-2 bg-gold text-charcoal text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-gold/90 active:scale-95"
          >
            {t.nav.reserve}
          </a>
        </div>
      </div>
    </nav>
  );
}
