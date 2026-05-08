import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1605581810011-c6d684e7ca22?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg"
          alt="Turkish Cuisine Ambiance"
          className="w-full h-full object-cover scale-105 animate-slow-zoom opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-start text-left gap-6 max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-cream leading-[1.1] font-light">
            {t.hero.title.split(/({turquía}|{turkey}|{vallecas})/).map((part, i) => {
              if (part === '{turquía}' || part === '{turkey}') {
                return <span key={i} className="italic text-gold">{t.hero.turkey}</span>;
              }
              if (part === '{vallecas}') {
                return <span key={i} className="italic text-gold">{t.hero.vallecas}</span>;
              }
              return part;
            })}
          </h1>

          <p className="text-base md:text-lg text-text-muted font-light max-w-md leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <a href="#reservar" className="btn-primary px-10 py-4">
              {t.hero.ctaReserve}
            </a>
            <a href="#menu" className="btn-outline px-10 py-4">
              {t.hero.ctaMenu}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">{t.hero.explore}</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
