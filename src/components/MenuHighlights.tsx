import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function MenuHighlights() {
  const categories = [
    {
      title: "Pizzas",
      items: [
        { name: "Pizza Hidar", desc: "Salsa de tomate especial, mozzarella, champiñones, cebolla, maiz, aceitunas, salami y jamón york.", price: "11,9€", img: "https://lh3.googleusercontent.com/p/AF1QipOhU4FiFdSbypgqtUjR3YHQUYa27YsH9Soyjpgf=w750-h1235-p-k-no" },
        { name: "Calzzone", desc: "Salsa de tomate especial, mozzarella, salami, champiñones, cebolla, tomate, pimientos y jamón york.", price: "11,9€", img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=400" }
      ]
    },
    {
      title: "Entrantes",
      items: [
        { name: "Alitas a la brasa", desc: "Carne picada de cordero especiada a la parrilla de carbón.", price: "10€", img: "https://lh3.googleusercontent.com/p/AF1QipPosyE2pQStJcsdYcnGbUSxAERW5wdYwmNhC0oY=w750-h606-p-k-no" },
        { name: "Ensalada", desc: "Guiso de cordero sobre una cama de puré de berenjena ahumada.", price: "8,5€", img: "https://lh3.googleusercontent.com/p/AF1QipMFACZtB4bHN0h0wWk_9_44dwqIxibsTjzwBTDQ=w750-h606-p-k-no" }
      ]
    },
    {
      title: "Postres y bebidas",
      items: [
        { name: "Baklava de Pistacho", desc: "Hojaldre artesanal con miel y pistachos de Antep.", price: "9€", img: "https://images.unsplash.com/photo-1617806501441-2a4a45c5316c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFrbGF2YXxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Bebidas", desc: "Postre de queso caliente con fideos de masa y almíbar.", price: "11€", img: "https://lh3.googleusercontent.com/p/AF1QipOeZ0wgk2TkjA7MiuS_Xu8MenUj5IDIUcucydAx=w750-h1235-p-k-no" }
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
          <a 
            href="/menu_casa_hidar.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline group inline-flex"
          >
            Ver Menú Completo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
