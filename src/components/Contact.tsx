import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Mail as MailIcon,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Guilherme! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\n\nMensagem: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5511954629657?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-card-bg/5 relative overflow-hidden"
    >
      {/* Background Section SVGs */}
      <svg
        className="absolute top-[20%] right-[5%] w-80 h-80 opacity-[0.03] text-gray-300 pointer-events-none rotate-[15deg]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <path
          d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 10v2a7 7 0 0 1-14 0v-2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="12"
          y1="19"
          x2="12"
          y2="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="8"
          y1="22"
          x2="16"
          y2="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="absolute bottom-[10%] left-[5%] w-56 h-56 opacity-[0.03] text-gray-300 pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <path
          d="M22 12h-4l-3 9L9 3l-3 9H2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
              Contato
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos criar algo incrível juntos.
            </h3>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Tem um projeto em mente ou apenas quer dizer olá? Fique à vontade
              para me enviar uma mensagem.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-main-bg border border-gray-800 flex items-center justify-center text-accent shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">
                    Telefone / WhatsApp
                  </h4>
                  <a
                    href="tel:+5511954629657"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    +55 (11) 95462-9657
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-main-bg border border-gray-800 flex items-center justify-center text-accent shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <a
                    href="mailto:guironas@hotmail.com"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    guironas@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-main-bg border border-gray-800 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Localização</h4>
                  <p className="text-gray-400">
                    São Paulo, SP - Brasil (Remoto)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/guilherme-rodrigues-do-nascimento-029724a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-main-bg border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent transition-all group"
                >
                  <Linkedin
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="mailto:guironas@hotmail.com"
                  className="w-12 h-12 rounded-full bg-main-bg border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent transition-all group"
                >
                  <MailIcon
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-main-bg border border-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-card-bg border border-gray-800 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-card-bg border border-gray-800 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-card-bg border border-gray-800 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  placeholder="Como posso ajudar?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent hover:bg-red-600 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group"
              >
                Enviar Mensagem
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
