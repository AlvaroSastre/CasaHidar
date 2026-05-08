import { motion } from 'motion/react';
import { Star, User, MoreVertical } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="resenas" className="section-padding bg-charcoal border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-cream font-light">
            {t.reviews.title.split(/({todos}|{everyone}|{herkes})/).map((part: string, i: number) => {
              if (part === '{todos}' || part === '{everyone}' || part === '{herkes}') {
                return <span key={i} className="italic text-gold">{t.reviews.todos || t.reviews.everyone}</span>;
              }
              return part;
            })}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto font-light leading-relaxed">
            {t.reviews.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Global Rating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-white/5 border border-gold/30 p-8 flex flex-col items-center justify-center text-center space-y-4 h-full shadow-[0_0_15px_rgba(212,175,55,0.05)]"
          >
            <div className="text-7xl font-light text-text-muted leading-none">
              {t.reviews.rating}
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-5 h-5 fill-gold text-gold filter drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
              ))}
              <Star className="w-5 h-5 text-gray-500 fill-gray-500" />
            </div>
            <div className="text-text-muted text-xl font-light">
              {t.reviews.reviewsCount}
            </div>
          </motion.div>

          {/* Individual Reviews Grid */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-8">
            {t.reviews.items.map((review: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-gold/20 p-6 flex flex-col space-y-4 hover:border-gold/40 transition-colors group"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold border border-gold/10">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-cream font-bold text-sm leading-tight flex items-center gap-1 group-hover:text-gold transition-colors">
                        {review.name}
                        {review.role === 'Local Guide' && (
                          <span className="w-3 h-3 bg-orange-500 rounded-full flex items-center justify-center text-[6px] text-white">★</span>
                        )}
                      </h4>
                      <p className="text-[10px] text-text-muted">{review.role} {review.stats && `· ${review.stats}`}</p>
                    </div>
                  </div>
                  <button className="text-text-muted hover:text-gold transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex gap-0.5 items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 fill-gold text-gold filter drop-shadow-[0_0_5px_rgba(212,175,55,0.4)]" />
                  ))}
                  <span className="ml-2 text-[10px] text-text-muted">{review.date}</span>
                </div>

                {review.category && (
                  <div className="text-[11px] text-text-muted font-medium">
                    {review.category}
                  </div>
                )}

                <p className="text-xs text-cream/90 leading-normal font-light">
                  {review.comment}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
