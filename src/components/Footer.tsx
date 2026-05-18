import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-transparent py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-tighter hover:text-accent transition-colors"
            >
              GUI<span className="text-accent">RONAS</span>
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Guironas. Todos os direitos reservados.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <button
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-white transition-colors"
            >
              Termos
            </button>
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-white transition-colors"
            >
              Privacidade
            </button>
          </div>
        </div>
      </footer>

      {/* Terms Modal */}
      <AnimatePresence>
        {isTermsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsTermsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-card-bg border border-gray-800 rounded-3xl shadow-2xl z-10 p-8 md:p-12"
            >
              <button
                onClick={() => setIsTermsOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-main-bg/50 hover:bg-main-bg rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="text-2xl font-bold mb-6">Termos de Uso</h3>
              <div className="text-gray-400 space-y-4 leading-relaxed">
                <p>
                  Estes termos de uso regulam o acesso e utilização deste site
                  de portfólio profissional.
                </p>
                <p>
                  Todo o conteúdo audiovisual, imagens, textos e design
                  apresentados neste site são de propriedade exclusiva de
                  Guilherme Rodrigues (Guironas) ou de seus respectivos
                  clientes, sendo protegidos por leis de direitos autorais.
                </p>
                <p>
                  É expressamente proibida a reprodução, distribuição,
                  modificação ou uso comercial de qualquer material aqui contido
                  sem autorização prévia por escrito.
                </p>
                <p>
                  Ao utilizar este site para entrar em contato, você concorda em
                  fornecer informações verdadeiras e utilizar os canais de
                  comunicação de forma ética e profissional.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Privacy Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsPrivacyOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-card-bg border border-gray-800 rounded-3xl shadow-2xl z-10 p-8 md:p-12"
            >
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-main-bg/50 hover:bg-main-bg rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="text-2xl font-bold mb-6">
                Política de Privacidade
              </h3>
              <div className="text-gray-400 space-y-4 leading-relaxed">
                <p>
                  A sua privacidade é importante para nós. Esta política explica
                  como lidamos com suas informações.
                </p>
                <p>
                  As informações coletadas através do formulário de contato
                  (Nome, Email, Mensagem) são utilizadas exclusivamente para
                  fins de comunicação profissional e resposta a orçamentos ou
                  dúvidas.
                </p>
                <p>
                  Não compartilhamos, vendemos ou alugamos seus dados pessoais
                  para terceiros sob nenhuma circunstância.
                </p>
                <p>
                  O site pode utilizar cookies básicos para melhorar a
                  experiência de navegação e performance, mas nenhuma informação
                  pessoal sensível é rastreada sem o seu consentimento.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
