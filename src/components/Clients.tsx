import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Camila Sheran',
    role: 'Cliente Recomendada',
    content: 'O trabalho é excelente e o profissional é de extrema confiança. Fui recomendada e não me arrependi, o resultado final arrasou demais! Muito obrigada.',
    rating: 5,
    initial: 'C',
    color: 'bg-pink-500'
  },
  {
    id: 2,
    name: 'Iza',
    role: 'Aniversário do Miguelito',
    content: 'O vídeo ficou sensacional! Ficou top demais, amei cada detalhe do resultado final.',
    rating: 5,
    initial: 'I',
    color: 'bg-blue-500'
  },
  {
    id: 3,
    name: 'Lioness',
    role: '@lionessheart_cosplay • Cosplayer',
    content: 'Ao ver o seu trabalho filmando outros cosplayers no evento, fiz questão de pedir para que registrasse o meu cosplay também. O resultado final ficou incrível e superou minhas expectativas! Parabéns pelo talento e profissionalismo.',
    rating: 5,
    initial: 'L',
    color: 'bg-purple-500'
  }
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-main-bg relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-accent/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-bold">O que dizem os clientes</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            O resultado do meu trabalho reflete diretamente na satisfação de quem confia na minha visão. Confira alguns depoimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative rounded-3xl p-8 border border-gray-800 bg-card-bg shadow-2xl group flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-8 text-gray-800 w-12 h-12 -z-0 opacity-50" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                
                <p className="text-gray-200 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 relative z-10">
                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
