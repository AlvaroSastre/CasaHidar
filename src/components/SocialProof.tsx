import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="bg-charcoal section-padding overflow-hidden border-y border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-cream font-light">
            Síguenos en <span className="italic text-gold">Instagram</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Descubre el día a día de Casa Hidar, nuestras últimas creaciones y la atmósfera única de nuestro restaurante.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Instagram Grid Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipMDeZkDY7gxEaAxjA_m_DLVcWaMzJYygnHMH-k7=w750-h606-p-k-no" 
                alt="Interior" 
                className="rounded-none w-full h-64 object-cover opacity-70 hover:opacity-100 transition-all duration-500 border border-white/10"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipNU0pBSKClE16Kvd_IRvv14VBfvB548lznbAUnW=w750-h1235-p-k-no" 
                alt="Food" 
                className="rounded-none w-full h-64 object-cover opacity-70 hover:opacity-100 transition-all duration-500 border border-white/10"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipO-bZknjMWUE52d3JcKZoIJG3oVR971N2dEWOTf=w750-h606-p-k-no" 
                alt="Platter" 
                className="rounded-none w-full h-64 object-cover opacity-70 hover:opacity-100 transition-all duration-500 border border-white/10"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipP-4idy82giyu_K_ufh8gn9BrJAULkFhsWLtzxj=w750-h1235-p-k-no" 
                alt="Dessert" 
                className="rounded-none w-full h-64 object-cover opacity-70 hover:opacity-100 transition-all duration-500 border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="mt-12 flex justify-center">
              <a 
                href="https://www.instagram.com/casahidarmadrid/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gold p-6 rounded-none shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform group"
              >
                <div className="bg-charcoal p-2 rounded-none text-gold">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="pr-4 text-left">
                  <p className="text-[10px] uppercase tracking-widest text-charcoal/60 font-bold">Síguenos</p>
                  <p className="font-bold text-charcoal">@casahidarmadrid</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
