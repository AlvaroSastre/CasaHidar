import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="nosotros" className="section-padding bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-none overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipOK1lpjp7mYmiAje1MnDAKG3yKgcUZGzm8kAHtE=w750-h606-p-k-no" 
                alt="Logo Casa Hidar" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-none overflow-hidden border-[12px] border-charcoal shadow-2xl hidden md:block border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=400" 
                alt="Fresh Ingredients" 
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold uppercase tracking-[0.4em] text-[11px] font-bold">Nuestra Historia</span>
              <h2 className="text-5xl md:text-6xl font-serif leading-tight text-cream font-light">
                Raíces Otomanas, <span className="italic text-gold">Alma Madrileña</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-text-muted text-lg leading-relaxed font-light">
              <p>
                Casa Hidar nació de un sueño: traer la hospitalidad legendaria de Turquía 
                a las vibrantes calles de Madrid. No somos solo un restaurante, somos un 
                puente cultural construido sobre recetas familiares que han pasado de 
                generación en generación.
              </p>
              <p>
                Nuestros chefs, formados en las cocinas más prestigiosas de Estambul y 
                Gaziantep, utilizan especias importadas directamente de los bazares turcos 
                para asegurar que cada bocado sea una explosión de autenticidad.
              </p>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-serif text-gold">15+</p>
                <p className="text-[10px] uppercase tracking-widest text-cream/40 font-bold">Años de Tradición</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-serif text-gold">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-cream/40 font-bold">Artesanal</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-serif text-gold">24/7</p>
                <p className="text-[10px] uppercase tracking-widest text-cream/40 font-bold">Pasión</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
