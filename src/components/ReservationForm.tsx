import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, 'El nombre es obligatorio'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Teléfono inválido'),
  date: z.string().min(1, 'Selecciona una fecha'),
  time: z.string().min(1, 'Selecciona una hora'),
  guests: z.string().min(1, 'Indica el número de personas'),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ReservationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log('Reserva recibida:', data);
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="reservar" className="section-padding bg-warm-white">
        <div className="max-w-xl mx-auto text-center space-y-6 py-20">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-burgundy text-white rounded-full flex items-center justify-center mx-auto"
          >
            <CheckCircle2 className="w-10 h-10" />
          </motion.div>
          <h2 className="text-4xl font-serif text-charcoal">¡Reserva Confirmada!</h2>
          <p className="text-charcoal/60">
            Hemos recibido tu solicitud. Te enviaremos un correo de confirmación y un recordatorio 
            por WhatsApp en breve. ¡Te esperamos en Casa Hidar!
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="btn-outline mx-auto"
          >
            Hacer otra reserva
          </button>
        </div>
      </section>
    );
  }

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
                Reserva tu <span className="italic text-gold">Mesa</span>
              </h2>
              <p className="text-text-muted leading-relaxed">
                Asegura tu lugar en una de las experiencias gastronómicas más exclusivas de Madrid. 
                Recomendamos reservar con al menos 48 horas de antelación para fines de semana.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-gold/5 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-cream uppercase tracking-widest text-xs">Horario de Cocina</h4>
                  <p className="text-sm text-text-muted">Mar - Jue: 13:30 - 23:00</p>
                  <p className="text-sm text-text-muted">Vie - Dom: 13:30 - 00:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-gold/5 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-cream uppercase tracking-widest text-xs">Grupos Grandes</h4>
                  <p className="text-sm text-text-muted">Para más de 8 personas, contáctanos directamente por teléfono.</p>
                </div>
              </div>
            </div>

            <div className="bg-burgundy/20 p-6 rounded-none border border-burgundy/40">
              <p className="text-gold font-medium text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                Disponibilidad limitada para hoy
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-3">
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white/5 p-8 md:p-10 rounded-none shadow-2xl space-y-6 border border-white/10 backdrop-blur-sm"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">Nombre Completo</label>
                  <input 
                    {...register('name')}
                    className={`w-full bg-black/20 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all text-cream`}
                    placeholder="Ej. Álvaro López"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">Email</label>
                  <input 
                    {...register('email')}
                    className={`w-full bg-black/20 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all text-cream`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">Teléfono</label>
                  <input 
                    {...register('phone')}
                    className={`w-full bg-black/20 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all text-cream`}
                    placeholder="+34 600 000 000"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">Comensales</label>
                  <select 
                    {...register('guests')}
                    className={`w-full bg-black/20 border ${errors.guests ? 'border-red-500' : 'border-white/10'} rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all appearance-none text-cream`}
                  >
                    <option value="" className="bg-charcoal">Seleccionar...</option>
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n} className="bg-charcoal">{n} {n === 1 ? 'Persona' : 'Personas'}</option>
                    ))}
                  </select>
                  {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">Fecha</label>
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
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">Hora</label>
                  <div className="relative">
                    <select 
                      {...register('time')}
                      className={`w-full bg-black/20 border ${errors.time ? 'border-red-500' : 'border-white/10'} rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all appearance-none text-cream`}
                    >
                      <option value="" className="bg-charcoal">Seleccionar...</option>
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
                <label className="text-[10px] uppercase tracking-widest font-bold text-gold/60 ml-1">Notas Especiales (Opcional)</label>
                <textarea 
                  {...register('notes')}
                  rows={3}
                  className="w-full bg-black/20 border border-white/10 rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-all text-cream"
                  placeholder="Alergias, celebraciones, etc."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full py-4 text-sm"
              >
                {isSubmitting ? 'Procesando...' : (
                  <>
                    Confirmar Reserva
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[10px] text-center text-cream/30 uppercase tracking-[0.2em]">
                Al reservar, aceptas nuestra política de cancelación y privacidad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
