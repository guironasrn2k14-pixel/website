import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    'nav.home': 'Início',
    'nav.portfolio': 'Trabalhos',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.cta': 'Orçar Projeto',
    
    'hero.badge': 'Disponível para novos projetos',
    'hero.title.1': 'EDITOR',
    'hero.title.2': 'AUDIOVISUAL',
    'hero.desc': 'Reels, VSLs, YouTube e conteúdo comercial com edição pensada para prender atenção.',
    'hero.cta.primary': 'Ver trabalhos',
    'hero.cta.secondary': 'Fale comigo',
    
    'projects.subtitle': 'Trabalhos Selecionados',
    'projects.title.1': 'Uma seleção de projetos em que',
    'projects.title.highlight': 'edição, ritmo e narrativa',
    'projects.title.2': 'fazem a diferença.',
    'projects.watch': 'Assistir',
    
    'projects.vsl.title': 'Video Sales Letter',
    'projects.vsl.desc': 'Edição focada em retenção, clareza e conversão.',
    'projects.vsl.tags': 'RITMO · CORTES · MOTION · SOUND DESIGN · RETENÇÃO',
    
    'projects.reels.title': 'Alerta: Maca Peruana',
    'projects.reels.desc': 'Conteúdo rápido precisa ganhar atenção rápido. Cortes, ritmo, legendas, sound design e motion para manter o vídeo dinâmico sem perder clareza.',
    'projects.reels.client': 'Especialista em Nutrição',
    
    'projects.comercial.title': 'Mc Tom da Vg - Cadê você',
    'projects.comercial.desc': 'Edição visual para comunicar produto, marca e mensagem com impacto.',
    'projects.comercial.client': 'Mc Tom da Vg & DJ IAM',
    
    'projects.youtube.title': 'Vlog de Viagem Europa',
    'projects.youtube.desc': 'Narrativa, ritmo e retenção para conteúdos longos.',
    'projects.youtube.client': 'Projeto Autoral',
    
    'about.title.1': 'NÃO É SÓ EDITAR.',
    'about.subtitle.1': 'É entender o que o vídeo precisa fazer.',
    'about.tags.1': 'RITMO',
    'about.tags.2': 'RETENÇÃO',
    'about.tags.3': 'STORYTELLING',
    'about.tags.4': 'MOTION',
    'about.tags.5': 'SOUND DESIGN',
    'about.title.2': 'Do bruto ao final',
    'about.raw': 'Material Bruto',
    'about.final': 'Edição Final',
    'about.steps': 'Cortes · Ritmo · Motion · Sound Design · Legendas · Tratamento Visual',
    'about.title.3': 'PRAZER, SOU O GUI.',
    'about.desc': 'Sou editor audiovisual e trabalho transformando materiais brutos em vídeos com ritmo, narrativa e impacto visual.',
    
    'clients.title': 'QUEM JÁ TRABALHOU COMIGO',
    'clients.role.1': 'Criadora de Conteúdo',
    'clients.quote.1': 'O Guironas não apenas edita, ele entende exatamente o ritmo que o meu público gosta. Meus vídeos nunca tiveram tanta interação e retenção como agora. Trabalho impecável e entrega sempre no prazo.',
    'clients.role.2': 'Cosplayer & Influenciadora',
    'clients.quote.2': 'Incrível como ele consegue captar a essência do personagem e transformar em uma edição cinematográfica para o Reels. A agilidade no Same-Day Edit fez toda a diferença no engajamento do evento.',
    'clients.role.3': 'Diretor de Marketing',
    'clients.quote.3': 'A comunicação é excelente. O processo flui de forma muito profissional desde o roteiro até a entrega final. A capacidade de alinhar a estética com os objetivos de negócio da nossa marca foi fundamental.',
    
    'contact.title': 'TEM UM PROJETO?',
    'contact.desc': 'Me conte o que você precisa e vamos transformar a ideia em vídeo.',
    'contact.cta.primary': 'Fale comigo',
    'contact.cta.secondary': 'Ver trabalhos',
    
    'footer.rights': 'Todos os direitos reservados.',
    'footer.terms': 'Termos',
    'footer.privacy': 'Privacidade',
    'footer.terms.title': 'Termos de Uso',
    'footer.terms.p1': 'Estes termos de uso regulam o acesso e utilização deste site de portfólio profissional.',
    'footer.terms.p2': 'Todo o conteúdo audiovisual, imagens, textos e design apresentados neste site são de propriedade exclusiva de Guilherme Rodrigues (Guironas) ou de seus respectivos clientes, sendo protegidos por leis de direitos autorais.',
    'footer.terms.p3': 'É expressamente proibida a reprodução, distribuição, modificação ou uso comercial de qualquer material aqui contido sem autorização prévia por escrito.',
    'footer.terms.p4': 'Ao utilizar este site para entrar em contato, você concorda em fornecer informações verdadeiras e utilizar os canais de comunicação de forma ética e profissional.',
    'footer.privacy.title': 'Política de Privacidade',
    'footer.privacy.p1': 'A sua privacidade é importante para nós. Esta política explica como lidamos com suas informações.',
    'footer.privacy.p2': 'As informações coletadas através do formulário de contato (Nome, Email, Mensagem) são utilizadas exclusivamente para fins de comunicação profissional e resposta a orçamentos ou dúvidas.',
    'footer.privacy.p3': 'Não compartilhamos, vendemos ou alugamos seus dados pessoais para terceiros sob nenhuma circunstância.',
    'footer.privacy.p4': 'O site pode utilizar cookies básicos para melhorar a experiência de navegação e performance, mas nenhuma informação pessoal sensível é rastreada sem o seu consentimento.',
  },
  en: {
    'nav.home': 'Home',
    'nav.portfolio': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Get a Quote',
    
    'hero.badge': 'Available for new projects',
    'hero.title.1': 'AUDIOVISUAL',
    'hero.title.2': 'EDITOR',
    'hero.desc': 'Reels, VSLs, YouTube, and commercial content with editing focused on audience retention.',
    'hero.cta.primary': 'View Work',
    'hero.cta.secondary': 'Let\'s Talk',
    
    'projects.subtitle': 'Selected Works',
    'projects.title.1': 'A selection of projects where',
    'projects.title.highlight': 'editing, pacing, and storytelling',
    'projects.title.2': 'make the difference.',
    'projects.watch': 'Watch',
    
    'projects.vsl.title': 'Video Sales Letter',
    'projects.vsl.desc': 'Editing focused on retention, clarity, and conversion.',
    'projects.vsl.tags': 'RHYTHM · CUTS · MOTION · SOUND DESIGN · RETENTION',
    
    'projects.reels.title': 'Alert: Peruvian Maca',
    'projects.reels.desc': 'Fast content needs to grab attention fast. Cuts, rhythm, captions, sound design, and motion to keep the video dynamic without losing clarity.',
    'projects.reels.client': 'Nutrition Specialist',
    
    'projects.comercial.title': 'Mc Tom da Vg - Where are you',
    'projects.comercial.desc': 'Visual editing to communicate product, brand, and message with impact.',
    'projects.comercial.client': 'Mc Tom da Vg & DJ IAM',
    
    'projects.youtube.title': 'Europe Travel Vlog',
    'projects.youtube.desc': 'Narrative, rhythm, and retention for long-form content.',
    'projects.youtube.client': 'Personal Project',
    
    'about.title.1': "IT'S NOT JUST EDITING.",
    'about.subtitle.1': 'It’s understanding what the video needs to do.',
    'about.tags.1': 'RHYTHM',
    'about.tags.2': 'RETENTION',
    'about.tags.3': 'STORYTELLING',
    'about.tags.4': 'MOTION',
    'about.tags.5': 'SOUND DESIGN',
    'about.title.2': 'From raw to final',
    'about.raw': 'Raw Footage',
    'about.final': 'Final Edit',
    'about.steps': 'Cuts · Rhythm · Motion · Sound Design · Subtitles · Color Grading',
    'about.title.3': "NICE TO MEET YOU, I'M GUI.",
    'about.desc': 'I’m an audiovisual editor, transforming raw footage into videos driven by rhythm, narrative, and visual impact.',
    
    'clients.title': "WHO I'VE WORKED WITH",
    'clients.role.1': 'Content Creator',
    'clients.quote.1': 'Guironas doesn\'t just edit, he understands exactly the rhythm my audience likes. My videos have never had so much interaction and retention. Flawless work and always delivered on time.',
    'clients.role.2': 'Cosplayer & Influencer',
    'clients.quote.2': 'It\'s incredible how he manages to capture the essence of the character and turn it into a cinematic edit for Reels. The agility in the Same-Day Edit made all the difference in the event\'s engagement.',
    'clients.role.3': 'Marketing Director',
    'clients.quote.3': 'Excellent communication. The process flows very professionally from the script to the final delivery. The ability to align the aesthetics with our brand\'s business goals was crucial.',
    
    'contact.title': 'HAVE A PROJECT?',
    'contact.desc': 'Tell me what you need and let\'s turn your idea into a video.',
    'contact.cta.primary': 'Let\'s Talk',
    'contact.cta.secondary': 'View Work',
    
    'footer.rights': 'All rights reserved.',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy',
    'footer.terms.title': 'Terms of Use',
    'footer.terms.p1': 'These terms of use govern the access and use of this professional portfolio website.',
    'footer.terms.p2': 'All audiovisual content, images, texts, and design presented on this site are the exclusive property of Guilherme Rodrigues (Guironas) or his respective clients, and are protected by copyright laws.',
    'footer.terms.p3': 'Reproduction, distribution, modification, or commercial use of any material contained herein is strictly prohibited without prior written authorization.',
    'footer.terms.p4': 'By using this site to contact us, you agree to provide truthful information and use the communication channels in an ethical and professional manner.',
    'footer.privacy.title': 'Privacy Policy',
    'footer.privacy.p1': 'Your privacy is important to us. This policy explains how we handle your information.',
    'footer.privacy.p2': 'Information collected through the contact form (Name, Email, Message) is used exclusively for professional communication and to respond to quotes or inquiries.',
    'footer.privacy.p3': 'We do not share, sell, or rent your personal data to third parties under any circumstances.',
    'footer.privacy.p4': 'The site may use basic cookies to improve the browsing experience and performance, but no sensitive personal information is tracked without your consent.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
