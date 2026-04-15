import { motion } from 'motion/react';
import { Instagram, Quote, MapPin, Clock, Phone } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      name: "Elena Rodríguez",
      text: "El mejor hummus que he probado en Madrid. El ambiente te transporta directamente a Estambul.",
      rating: 5
    },
    {
      name: "Marco Silva",
      text: "Una joya escondida. El cordero deshuesado es espectacular y el servicio es impecable.",
      rating: 5
    },
    {
      name: "Sofía Chen",
      text: "Perfecto para una cena romántica. La decoración es preciosa y cada plato cuenta una historia.",
      rating: 5
    }
  ];

  return (
    <section className="bg-charcoal section-padding overflow-hidden border-y border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-cream">
                Lo que dicen nuestros <span className="italic text-gold">comensales</span>
              </h2>
              <p className="text-text-muted max-w-md">
                La satisfacción de nuestros clientes es el corazón de Casa Hidar. 
                Cada visita es una oportunidad para crear un recuerdo inolvidable.
              </p>
            </div>

            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-none border border-gold/20 relative group hover:bg-white/10 transition-all">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/10 group-hover:text-gold/20 transition-colors" />
                  <p className="text-cream/80 italic mb-4 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gold uppercase tracking-widest text-xs">{t.name}</span>
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <span key={i} className="text-gold text-xs">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Instagram Grid Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600" 
                  alt="Interior" 
                  className="rounded-none w-full h-64 object-cover opacity-70 hover:opacity-100 transition-all duration-500 border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=600" 
                  alt="Food" 
                  className="rounded-none w-full h-80 object-cover opacity-70 hover:opacity-100 transition-all duration-500 border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600" 
                  alt="Platter" 
                  className="rounded-none w-full h-80 object-cover opacity-70 hover:opacity-100 transition-all duration-500 border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1562601579-599dec554e8d?auto=format&fit=crop&q=80&w=600" 
                  alt="Dessert" 
                  className="rounded-none w-full h-64 object-cover opacity-70 hover:opacity-100 transition-all duration-500 border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <a 
              href="https://www.instagram.com/casahidarmadrid/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-none shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform group"
            >
              <div className="bg-charcoal p-2 rounded-none text-gold">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="pr-4">
                <p className="text-[10px] uppercase tracking-widest text-charcoal/60 font-bold">Síguenos</p>
                <p className="font-bold text-charcoal">@casahidarmadrid</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
