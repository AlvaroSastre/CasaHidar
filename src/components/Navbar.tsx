import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Menú', href: '#menu' },
    { name: 'Nosotros', href: '#nosotros' },
    //{ name: 'Experiencia', href: '#experiencia' },
    //{ name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled ? 'bg-charcoal/95 backdrop-blur-md py-4 border-gold/20 shadow-lg' : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#inicio" className="flex items-center group">
          <img 
            src="https://www.lomejordelbarrio.com/files/uploads/file/06ef55ed-ed64-4b99-9665-a781d9a66263/casa-hidar-restaurante-ensanche-de-vallecas-logo-1.png" 
            alt="Casa Hidar Logo" 
            className="h-12 md:h-16 w-auto object-contain brightness-110 contrast-110"
            referrerPolicy="no-referrer"
          />
          <span className="hidden sm:block text-gold text-[11px] font-medium uppercase tracking-[0.2em] border-l border-gold/30 pl-4">
            Restaurante Turco 100% Halal
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-cream hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reservar"
            className="px-8 py-2 bg-gold text-charcoal text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-gold/90 active:scale-95"
          >
            Reservar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-charcoal border-b border-gold/20 shadow-xl md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif text-cream hover:text-gold transition-colors border-b border-gold/10 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservar"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full mt-2"
            >
              Reservar Mesa
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
