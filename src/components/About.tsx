import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="section-padding bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-none overflow-hidden shadow-2xl border border-white/10 relative z-10">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipOK1lpjp7mYmiAje1MnDAKG3yKgcUZGzm8kAHtE=w750-h606-p-k-no" 
                alt="Casa Hidar" 
                className="w-full h-auto object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold/30 -z-0 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold/30 -z-0 hidden md:block" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold uppercase tracking-[0.4em] text-[11px] font-bold">{t.about.badge}</span>
              <h2 className="text-5xl md:text-6xl font-serif leading-tight text-cream font-light">
                {t.about.title.split(/({alma}|{soul})/).map((part, i) => {
                  if (part === '{alma}' || part === '{soul}') {
                    return <span key={i} className="italic text-gold">{t.about.alma || t.about.soul}</span>;
                  }
                  return part;
                })}
              </h2>
            </div>
            
            <div className="space-y-6 text-text-muted text-lg leading-relaxed font-light">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-serif text-gold">4+</p>
                <p className="text-[10px] uppercase tracking-widest text-cream/40 font-bold">{t.about.stats.tradition}</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-serif text-gold">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-cream/40 font-bold">{t.about.stats.artisan}</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-serif text-gold">24/7</p>
                <p className="text-[10px] uppercase tracking-widest text-cream/40 font-bold">{t.about.stats.passion}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
