import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal text-cream pt-20 pb-10 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="https://www.lomejordelbarrio.com/files/uploads/file/06ef55ed-ed64-4b99-9665-a781d9a66263/casa-hidar-restaurante-ensanche-de-vallecas-logo-1.png" 
                alt="Casa Hidar Logo" 
                className="h-16 w-16 rounded-full object-cover brightness-110 contrast-110 border border-gold/20"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-text-muted text-sm leading-relaxed font-light">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/casahidarmadrid/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/casahidarestaurante/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-gold font-light">{t.footer.explore.title}</h4>
            <ul className="grid grid-cols-2 gap-4 text-sm text-text-muted font-light">
              <li><a href="#inicio" className="hover:text-gold transition-colors">{t.footer.explore.home}</a></li>
              <li><a href="#redes" className="hover:text-gold transition-colors">{t.footer.explore.social}</a></li>
              <li><a href="#nosotros" className="hover:text-gold transition-colors">{t.footer.explore.about}</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">{t.footer.explore.menu}</a></li>
              <li><a href="#delivery" className="hover:text-gold transition-colors">{t.footer.explore.delivery}</a></li>
              <li><a href="#ubicacion" className="hover:text-gold transition-colors">{t.footer.explore.location}</a></li>
              <li><a href="#resenas" className="hover:text-gold transition-colors">{t.nav.reviews}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-gold font-light">{t.footer.contact.title}</h4>
            <ul className="space-y-4 text-sm text-text-muted font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>{t.location.addressLine}, {t.location.addressCity}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>{t.location.phoneValue}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>{t.location.emailValue}</span>
              </li>
              <li>
                <a 
                  href={`tel:${t.location.phoneValue.replace(/\s/g, '')}`} 
                  className="flex items-center gap-2 text-gold/80 hover:text-gold transition-colors text-sm font-bold uppercase tracking-widest mt-4"
                >
                  <Phone className="w-5 h-5" />
                  {t.footer.newsletter.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-cream/30">
          <p>{t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-gold transition-colors">{t.footer.cookies}</a>
            <a href="#" className="hover:text-gold transition-colors">{t.footer.legal}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
