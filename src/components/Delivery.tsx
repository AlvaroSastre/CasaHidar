import { motion } from 'motion/react';
import { ExternalLink, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Delivery() {
  const { t } = useLanguage();

  const platforms = [
    {
      name: 'Uber Eats',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Uber_Eats_2020_logo.svg',
      url: 'https://www.ubereats.com/es/store/casa-hidar/T8bJYCMsUJasHwWBSK-7yw?utm_source=AdWords_NonBrand&utm_campaign=CM2337599-search-google-nonbrand_162_-99_ES-National_e_all_acq_cpc_en_SMB_DSA_Exact__dsa-2185460347582_763997481756_154368788842__c&campaign_id=20485414482&adg_id=154368788842&fi_id=344886133196&match=&net=g&dev=c&dev_m=&ad_id=763997481756&cre=763997481756&kwid=dsa-2185460347582&kw=&placement=&tar=&&&&&gclsrc=aw.ds&gad_source=1&gad_campaignid=20485414482&gclid=CjwKCAjwnZfPBhAGEiwAzg-VzMrS3Yu04Qn-4DyHz1woPZt7denfPd_jyp45zqbgwcjuvsZd0xApDhoCDvQQAvD_BwE',
      cta: t.delivery.ubereats,
      color: 'bg-[#06C167]'
    },
    {
      name: 'Just Eat',
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Just-Eat-Logo.png',
      url: 'https://www.just-eat.es/restaurants-casa-hidar-restaurante-madrid/menu',
      cta: t.delivery.justeat,
      color: 'bg-[#F36D00]'
    },
    {
      name: 'Glovo',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Glovo_teal_logo.svg/960px-Glovo_teal_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      url: 'https://glovoapp.com/es/es/madrid/stores/casa-hidar-madrid',
      cta: t.delivery.glovo,
      color: 'bg-[#FFC244]'
    }
  ];

  return (
    <section id="delivery" className="section-padding bg-charcoal border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="inline-flex items-center gap-3 bg-gold/10 text-gold px-4 py-2 border border-gold/20">
              <Truck className="w-5 h-5" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Delivery</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-cream font-light leading-tight">
              {t.delivery.title.split(/({casa}|{home}|{ev})/).map((part, i) => {
                if (part === '{casa}' || part === '{home}' || part === '{ev}') {
                  return <span key={i} className="italic text-gold">{t.delivery.casa || t.delivery.home || t.delivery.ev}</span>;
                }
                return part;
              })}
            </h2>
            
            <p className="text-text-muted text-lg font-light leading-relaxed max-w-xl">
              {t.delivery.subtitle}
            </p>
          </motion.div>

          {/* Action Side */}
          <div className="lg:w-2/3 w-full grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {platforms.map((platform, idx) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 p-8 flex flex-col items-center text-center space-y-8 group transition-all hover:bg-white/10"
              >
                <div className="h-16 w-full flex items-center justify-center filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity px-4">
                  <img src={platform.logo} alt={platform.name} className="max-h-full max-w-full object-contain" referrerPolicy="no-referrer" />
                </div>
                
                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-center gap-2 text-gold group-hover:text-cream transition-colors text-xs font-bold uppercase tracking-widest">
                    <span>{platform.cta}</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                  <div className={`h-1 w-0 group-hover:w-full transition-all duration-500 mx-auto ${platform.color}`} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
