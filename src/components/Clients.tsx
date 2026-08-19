import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const getTestimonials = (t: (key: string) => string) => [
  {
    id: "iza",
    client: "Iza",
    role: t('clients.role.1'),
    image: "/feed1.png.png",
    quote: t('clients.quote.1'),
  },
  {
    id: "lioness",
    client: "lionessheart_cosplay",
    role: t('clients.role.2'),
    image: "/feed2.png.png",
    quote: t('clients.quote.2'),
  },
  {
    id: "fernando",
    client: "Fernando",
    role: t('clients.role.3'),
    image: "/feed3.png.png",
    quote: t('clients.quote.3'),
  },
];

export default function Clients() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();
  const testimonials = getTestimonials(t);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="clients" className="py-24 bg-main-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
            {t('clients.title')}
          </h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto min-h-0 md:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row gap-12 items-center justify-center p-6 sm:p-8 md:p-12"
            >
              <div className="w-full lg:w-1/3 flex justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-[260px] aspect-[1023/1537] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={`Feedback de ${testimonials[activeIndex].client}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${testimonials[activeIndex].client}&background=202c33&color=fff&size=512`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
                </div>
              </div>

              <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-1 lg:order-2">
                <Quote className="text-accent/40 w-12 h-12 mb-2" />
                <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </p>
                <div className="mt-4">
                  <h4 className="text-white font-bold text-lg">
                    {testimonials[activeIndex].client}
                  </h4>
                  <p className="text-gray-400 text-sm tracking-widest uppercase">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1 transition-all duration-500 rounded-full ${activeIndex === idx ? "w-12 bg-accent" : "w-6 bg-white/20 hover:bg-white/40"}`}
                aria-label={`Ver depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
