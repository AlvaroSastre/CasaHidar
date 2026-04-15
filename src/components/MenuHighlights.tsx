import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function MenuHighlights() {
  const categories = [
    {
      title: "Entrantes",
      items: [
        { name: "Hummus Tradicional", desc: "Garbanzos, tahini, limón y aceite de oliva virgen.", price: "8€", img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=400" },
        { name: "Mezze Platter", desc: "Selección de 5 aperitivos turcos con pan pita recién horneado.", price: "16€", img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=400" }
      ]
    },
    {
      title: "Platos Principales",
      items: [
        { name: "Adana Kebab", desc: "Carne picada de cordero especiada a la parrilla de carbón.", price: "22€", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400" },
        { name: "Hünkar Beğendi", desc: "Guiso de cordero sobre una cama de puré de berenjena ahumada.", price: "24€", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=400" }
      ]
    },
    {
      title: "Postres",
      items: [
        { name: "Baklava de Pistacho", desc: "Hojaldre artesanal con miel y pistachos de Antep.", price: "9€", img: "https://images.unsplash.com/photo-1562601579-599dec554e8d?auto=format&fit=crop&q=80&w=400" },
        { name: "Künefe", desc: "Postre de queso caliente con fideos de masa y almíbar.", price: "11€", img: "https://images.unsplash.com/photo-1517244681291-4d9d5dd6868d?auto=format&fit=crop&q=80&w=400" }
      ]
    }
  ];

  return (
    <section id="menu" className="section-padding bg-charcoal border-b border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-serif text-cream font-light">
            Nuestra <span className="italic text-gold">Carta</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Una selección curada de los platos más emblemáticos de la cocina otomana, 
            preparados con ingredientes frescos y técnicas ancestrales.
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
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif text-cream group-hover:text-gold transition-colors font-light">{item.name}</h4>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-outline group">
            Ver Menú Completo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
