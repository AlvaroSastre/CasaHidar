import { UtensilsCrossed, Instagram, Facebook, Twitter, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-20 pb-10 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-8 h-8 text-gold" />
              <span className="text-2xl font-serif font-light tracking-[0.2em] text-cream">
                CASA HIDAR
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed font-light">
              Llevando la riqueza de la cultura turca al corazón de Madrid. 
              Una experiencia gastronómica donde la tradición se encuentra con la elegancia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-gold font-light">Explorar</h4>
            <ul className="space-y-4 text-sm text-text-muted font-light">
              <li><a href="#inicio" className="hover:text-gold transition-colors">Inicio</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Nuestra Carta</a></li>
              <li><a href="#reservar" className="hover:text-gold transition-colors">Reservar Mesa</a></li>
              <li><a href="#reservar" className="hover:text-gold transition-colors">Eventos Privados</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-gold font-light">Contacto</h4>
            <ul className="space-y-4 text-sm text-text-muted font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>Calle de la Luna, 15, 28004 Madrid, España</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>hola@casahidar.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-gold font-light">Únete a nosotros</h4>
            <p className="text-sm text-text-muted font-light">
              Suscríbete para recibir invitaciones a eventos exclusivos y nuevas incorporaciones a nuestra carta.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-black/20 border border-white/10 rounded-none px-4 py-2 text-sm w-full focus:outline-none focus:border-gold text-cream"
              />
              <button className="bg-gold text-charcoal px-4 py-2 rounded-none text-sm font-bold hover:bg-white transition-colors">
                OK
              </button>
            </div>
            <a 
              href="https://wa.me/34600000000" 
              className="flex items-center gap-2 text-gold/80 hover:text-gold transition-colors text-sm font-bold uppercase tracking-widest"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Directo
            </a>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-cream/30">
          <p>© 2024 Casa Hidar Madrid. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacidad</a>
            <a href="#" className="hover:text-gold transition-colors">Cookies</a>
            <a href="#" className="hover:text-gold transition-colors">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
