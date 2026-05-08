import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="ubicacion" className="section-padding bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group lg:h-[600px] w-full order-2 lg:order-1"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/30 z-0 hidden lg:block" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/30 z-0 hidden lg:block" />
            
            <div className="relative z-10 w-full h-[350px] sm:h-[450px] lg:h-full overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                title="Casa Hidar Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.66!2d-3.614389!3d40.354222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42250000000000%3A0x0!2sAv.%20de%20la%20Gran%20V%C3%ADa%20del%20Sureste%2C%2018%2C%2028051%20Madrid!5e0!3m2!1ses!2ses!4v1713600000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) brightness(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700 w-full h-full"
              />
            </div>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-12 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-serif text-cream font-light leading-tight">
                {t.location.title.split(/({ubicacion}|{location})/).map((part, i) => {
                  if (part === '{ubicacion}' || part === '{location}') {
                    return <span key={i} className="italic text-gold">{t.location.location}</span>;
                  }
                  return part;
                })}
              </h2>
              <p className="text-text-muted text-lg font-light leading-relaxed">
                {t.location.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              {/* Address */}
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-cream font-serif text-xl mb-1">{t.location.addressTitle}</h4>
                  <div className="text-text-muted text-sm space-y-0.5 font-light">
                    <p>{t.location.addressLine}</p>
                    <p>{t.location.addressCity}</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-cream font-serif text-xl mb-1">{t.location.phoneTitle}</h4>
                  <p className="text-text-muted text-sm font-light">{t.location.phoneValue}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-cream font-serif text-xl mb-1">{t.location.emailTitle}</h4>
                  <p className="text-text-muted text-sm font-light">{t.location.emailValue}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-cream font-serif text-xl mb-1">{t.reservation.hoursTitle}</h4>
                  <div className="text-text-muted text-sm space-y-0.5 font-light">
                    <p>{t.reservation.hoursWeek}</p>
                    <p>{t.reservation.hoursFriday}</p>
                    <p>{t.reservation.hoursSunday}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Av.+de+la+Gran+Vía+del+Sureste,+18,+Villa+de+Vallecas,+28051+Madrid" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-3 px-8 group"
              >
                <Navigation className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                {t.location.getDirections}
              </a>
              <a 
                href={`tel:${t.location.phoneValue.replace(/\s/g, '')}`}
                className="btn-primary flex items-center gap-3 px-8"
              >
                <Phone className="w-4 h-4" />
                {t.location.whatsapp}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
