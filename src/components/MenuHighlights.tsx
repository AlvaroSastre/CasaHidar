import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function MenuHighlights() {
  const { t } = useLanguage();

  const categories = [
    {
      title: t.menu.categories.pizzas,
      items: [
        { name: t.menu.items.pizzaHidar.name, desc: t.menu.items.pizzaHidar.desc, price: "12,80€", img: "https://lh3.googleusercontent.com/p/AF1QipOhU4FiFdSbypgqtUjR3YHQUYa27YsH9Soyjpgf=w750-h1235-p-k-no" },
        { name: t.menu.items.calzzone.name, desc: t.menu.items.calzzone.desc, price: "12,80€", img: "https://lh3.googleusercontent.com/p/AF1QipPpo6PYVwmg9CqF39MCZMdXG7akO_TQH-_uZbmr=w750-h1235-p-k-no" }
      ]
    },
    {
      title: t.menu.categories.starters,
      items: [
        { name: t.menu.items.wings.name, desc: t.menu.items.wings.desc, price: "13,70€", img: "https://lh3.googleusercontent.com/p/AF1QipPosyE2pQStJcsdYcnGbUSxAERW5wdYwmNhC0oY=w750-h606-p-k-no" },
        { name: t.menu.items.salad.name, desc: t.menu.items.salad.desc, price: "8,80€", img: "https://lh3.googleusercontent.com/p/AF1QipMFACZtB4bHN0h0wWk_9_44dwqIxibsTjzwBTDQ=w750-h606-p-k-no" }
      ]
    },
    {
      title: t.menu.categories.kebab,
      items: [
        { name: t.menu.items.donerTernera.name, desc: t.menu.items.donerTernera.desc, price: "6,50€", img: "/kebab1.png" },
        { name: t.menu.items.donerPollo.name, desc: t.menu.items.donerPollo.desc, price: "6,50€", img: "/kebabP.png" }
      ]
    }
  ];

  return (
    <section id="menu" className="section-padding bg-charcoal border-b border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-serif text-cream font-light">
            {t.menu.title.split(/({carta}|{menu})/).map((part, i) => {
              if (part === '{carta}' || part === '{menu}') {
                return <span key={i} className="italic text-gold">{t.menu.carta || t.menu.menu}</span>;
              }
              return part;
            })}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            {t.menu.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-serif text-gold whitespace-nowrap font-light">{cat.title}</h3>
                <div className="h-px bg-gold/20 w-full" />
              </div>

              <div className="space-y-10">
                {cat.items.map((item) => (
                  <div key={item.name} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-none mb-4 aspect-[4/3] border border-white/10">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                      <div className="absolute bottom-4 right-4 bg-gold px-3 py-1 rounded-none text-sm font-bold text-charcoal">
                        {item.price}
                      </div>
                    </div>
                    <div className="flex flex-col h-24">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-serif text-cream group-hover:text-gold transition-colors font-light">{item.name}</h4>
                      </div>
                      <p className="text-sm text-text-muted leading-relaxed line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="/Carta_CasaHidar.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline group inline-flex"
          >
            {t.menu.ctaFullMenu}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
