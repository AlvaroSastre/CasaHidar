import { motion } from 'motion/react';
import { Users, Clock, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

/*
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const createSchema = (t: any) => z.object({
  name: z.string().min(2, t.reservation.form.name),
  email: z.string().email(t.reservation.form.email),
  phone: z.string().min(9, t.reservation.form.phone),
  date: z.string().min(1, t.reservation.form.date),
  time: z.string().min(1, t.reservation.form.time),
  guests: z.string().min(1, t.reservation.form.guests),
  notes: z.string().optional(),
});

type FormData = z.infer<ReturnType<typeof createSchema>>;
*/

export default function ReservationForm() {
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();
  /*
  const schema = createSchema(t);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log('Reserva recibida:', data);
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };
  */

  /*
  if (isSubmitted) {
    return (
      <section id="reservar" className="section-padding bg-warm-white bg-charcoal">
        <div className="max-w-xl mx-auto text-center space-y-6 py-20 px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-gold text-charcoal rounded-full flex items-center justify-center mx-auto"
          >
            <CheckCircle2 className="w-10 h-10" />
          </motion.div>
          <h2 className="text-4xl font-serif text-cream">{t.reservation.success.title}</h2>
          <p className="text-text-muted">
            {t.reservation.success.message}
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="btn-outline mx-auto"
          >
            {t.reservation.success.another}
          </button>
        </div>
      </section>
    );
  }
  */

  return (
    <section id="reservar" className="section-padding bg-charcoal relative overflow-hidden border-b border-gold/10">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-gold h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-cream leading-tight font-light">
                {t.reservation.title.split(/({mesa}|{table})/).map((part, i) => {
                  if (part === '{mesa}' || part === '{table}') {
                    return <span key={i} className="italic text-gold">{t.reservation.mesa || t.reservation.table}</span>;
                  }
                  return part;
                })}
              </h2>
              <p className="text-text-muted leading-relaxed">
                {t.reservation.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-gold/5 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-cream uppercase tracking-widest text-xs">{t.reservation.hoursTitle}</h4>
                  <p className="text-sm text-text-muted">{t.reservation.hoursWeek}</p>
                  <p className="text-sm text-text-muted">{t.reservation.hoursFriday}</p>
                  <p className="text-sm text-text-muted">{t.reservation.hoursSunday}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-gold/5 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-cream uppercase tracking-widest text-xs">{t.reservation.groupsTitle}</h4>
                  <p className="text-sm text-text-muted">{t.reservation.groupsText}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Methods Column */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 p-8 md:p-10 rounded-none shadow-2xl space-y-8 border border-white/10 backdrop-blur-sm h-full flex flex-col justify-center">
              <div className="space-y-4 text-center lg:text-left">
                <h3 className="text-2xl font-serif text-gold">{t.footer.contact.title}</h3>
                <p className="text-cream/70 font-light">
                  {t.reservation.groupsText}
                </p>
              </div>

              <div className="max-w-md mx-auto w-full">
                <a 
                  href={`tel:${t.location.phoneValue.replace(/\s/g, '')}`}
                  className="bg-gold/10 border border-gold/20 p-10 flex flex-col items-center text-center space-y-4 group transition-all hover:bg-gold/20"
                >
                  <div className="w-16 h-16 rounded-full bg-gold text-charcoal flex items-center justify-center transition-transform group-hover:scale-110">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cream uppercase tracking-widest text-xs mb-1">{t.location.phoneTitle}</h4>
                    <p className="text-2xl text-gold font-serif">{t.location.phoneValue}</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/*
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white/5 p-8 md:p-10 rounded-none shadow-2xl space-y-6 border border-white/10 backdrop-blur-sm"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">{t.reservation.form.name}</label>
                  <input 
                    {...register('name')}
                    className={`w-full bg-black/20 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all text-cream`}
                    placeholder={t.reservation.form.namePlaceholder}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">{t.reservation.form.email}</label>
                  <input 
                    {...register('email')}
                    className={`w-full bg-black/20 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all text-cream`}
                    placeholder={t.reservation.form.emailPlaceholder}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">{t.reservation.form.phone}</label>
                  <input 
                    {...register('phone')}
                    className={`w-full bg-black/20 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all text-cream`}
                    placeholder={t.reservation.form.phonePlaceholder}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">{t.reservation.form.guests}</label>
                  <select 
                    {...register('guests')}
                    className={`w-full bg-black/20 border ${errors.guests ? 'border-red-500' : 'border-white/10'} rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all appearance-none text-cream`}
                  >
                    <option value="" className="bg-charcoal">{t.reservation.form.guestsSelect}</option>
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n} className="bg-charcoal">{n} {n === 1 ? t.reservation.form.guestsPerson : t.reservation.form.guestsPeople}</option>
                    ))}
                  </select>
                  {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">{t.reservation.form.date}</label>
                  <div className="relative">
                    <input 
                      type="date"
                      {...register('date')}
                      className={`w-full bg-black/20 border ${errors.date ? 'border-red-500' : 'border-white/10'} rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all text-cream`}
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/20 pointer-events-none" />
                  </div>
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">{t.reservation.form.time}</label>
                  <div className="relative">
                    <select 
                      {...register('time')}
                      className={`w-full bg-black/20 border ${errors.time ? 'border-red-500' : 'border-white/10'} rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all appearance-none text-cream`}
                    >
                      <option value="" className="bg-charcoal">{t.reservation.form.timeSelect}</option>
                      {['13:30', '14:00', '14:30', '15:00', '20:30', '21:00', '21:30', '22:00', '22:30'].map(t => (
                        <option key={t} value={t} className="bg-charcoal">{t}</option>
                      ))}
                    </select>
                    <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/20 pointer-events-none" />
                  </div>
                  {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">{t.reservation.form.notes}</label>
                <textarea 
                  {...register('notes')}
                  rows={3}
                  className="w-full bg-black/20 border border-white/10 rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all text-cream"
                  placeholder={t.reservation.form.notesPlaceholder}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full py-4 text-sm"
              >
                {isSubmitting ? t.reservation.form.processing : (
                  <>
                    {t.reservation.form.submit}
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[10px] text-center text-cream/30 uppercase tracking-[0.2em]">
                {t.reservation.form.privacyPolicy}
              </p>
            </form>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
