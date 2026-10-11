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
    'projects.section_tag': 'Trabalhos Selecionados',
    'projects.section_title': 'Do conteúdo que prende a atenção às produções que contam histórias.',
    'projects.section_subtitle': 'Cada projeto pede uma linguagem própria. Explore por formato ou categoria abaixo.',
    
    'projects.filter.all': 'Todos os Vídeos',
    'projects.filter.reels': 'Reels & Retenção',
    'projects.filter.viagem': 'Viagem & Lifestyle',
    'projects.filter.performance': 'Dança & Performance',
    'projects.filter.fitness': 'Fitness, Receitas & Treinos',
    'projects.filter.videoclipes': 'Videoclipes Musicais',
    'projects.filter.longos': 'Projetos Longos & Educacionais',
    
    'projects.library.badge': 'Biblioteca de Vídeos',
    'projects.library.title': 'Todos os Vídeos',
    'projects.library.toggle_open': 'Abrir Pastas',
    'projects.library.toggle_close': 'Recolher Menu',
    'projects.library.fab_label': 'ABRIR PASTAS',
    'projects.library.active': 'Pasta ativa',
    'projects.library.total': 'vídeos cadastrados',
    'projects.library.expand_hint': 'Modo Imersivo Ativo',
    'projects.library.fast_stream': 'Reprodução direta em alta performance',
    
    'projects.cta_box.title': 'Tem um projeto em mente?',
    'projects.cta_box.text': 'Vamos encontrar a melhor linguagem audiovisual para sua ideia.',
    'projects.cta_box.button': 'Vamos conversar',
    
    'projects.vsl.title': 'Video Sales Letter (VSL)',
    'projects.vsl.desc': 'Edição focada em retenção, clareza e conversão.',
    'projects.vsl.tags': 'RITMO · CORTES · MOTION · SOUND DESIGN · RETENÇÃO',
    'projects.vsl.client': 'Projeto VSL',
    'projects.vsl.format': '16:9 · Longa Duração',
    
    'projects.reels.title': 'Treino Rápido de Perna Motivacional',
    'projects.reels.desc': 'Edição de alta intensidade para treino de pernas. Cortes rápidos sincronizados com o beat, sound design imersivo e máxima retenção visual.',
    'projects.reels.client': 'Fitness & Performance',
    'projects.reels.format': '9:16 · Reels Vertical',
    
    'projects.comercial.title': 'Mc Tom da Vg - Cadê você',
    'projects.comercial.desc': 'Edição visual para comunicar produto, marca e mensagem com impacto.',
    'projects.comercial.client': 'Mc Tom da Vg & DJ IAM',
    'projects.comercial.format': '16:9 · Videoclipe Oficial',
    
    'projects.youtube.title': 'Vlog de Viagem Europa & Muay Thai',
    'projects.youtube.desc': 'Narrativa, ritmo e retenção para conteúdos longos e dinâmicos.',
    'projects.youtube.client': 'Projeto Autoral',
    'projects.youtube.format': '9:16 · Reels / Viagem',

    'projects.caneta.title': 'Caneta Emagrecedora - Análise Médica',
    'projects.caneta.desc': 'Edição e ritmo para conteúdo educacional médico, tornando dados complexos acessíveis e mantendo a retenção.',
    'projects.caneta.client': 'Conteúdo Educacional / Saúde',
    'projects.caneta.format': '16:9 · Educacional Longo',

    'projects.fitlife.title': 'Rotina & Treino FitLife',
    'projects.fitlife.desc': 'Cortes sincronizados, legendas de alto impacto e sound design dinâmico para maximizar engajamento fitness.',
    'projects.fitlife.client': 'Fitness & Performance',
    'projects.fitlife.format': '9:16 · Reels Vertical',

    'projects.depois40.title': 'Treino de Força: Depois dos 40',
    'projects.depois40.desc': 'Edição dinâmica orientada a ganchos visuais e retenção para público adulto em busca de saúde e longevidade.',
    'projects.depois40.client': 'Consultoria Esportiva',
    'projects.depois40.format': '9:16 · Reels Vertical',

    'projects.nutricao.title': 'Mitos e Verdades da Nutrição',
    'projects.nutricao.desc': 'Estrutura narrativa para cursos e videoaulas, combinando motion graphics explicativos e acabamento sonoro.',
    'projects.nutricao.client': 'Curso Online / Educacional',
    'projects.nutricao.format': '16:9 · Curso / Aula',

    'projects.vlogviagem.title': 'Diário de Bordo: Viagem & Destinos',
    'projects.vlogviagem.desc': 'Edição cinematográfica de viagens com sound design imersivo, transições orgânicas e color grading estilizado.',
    'projects.vlogviagem.client': 'Lifestyle / YouTube',
    'projects.vlogviagem.format': '16:9 · Vlog Longo',

    'projects.modal.watch': 'Assistir ao vídeo',
    'projects.modal.preview': 'Capa / Peça Editorial',
    'projects.modal.request_link': 'Solicitar vídeo no WhatsApp',
    'projects.empty': 'Nenhum trabalho atribuído a esta categoria no momento.',
    'projects.empty_desc': 'Novos trabalhos serão adicionados em breve.',
    'projects.carousel.prev': 'Projeto anterior',
    'projects.carousel.next': 'Próximo projeto',
    
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
    'projects.section_tag': 'Selected Works',
    'projects.section_title': 'From attention-grabbing short content to story-driven productions.',
    'projects.section_subtitle': 'Every project demands its own visual language. Explore by format or category below.',
    
    'projects.filter.all': 'All Videos',
    'projects.filter.reels': 'Reels & Retention',
    'projects.filter.viagem': 'Travel & Lifestyle',
    'projects.filter.performance': 'Dance & Performance',
    'projects.filter.fitness': 'Fitness, Recipes & Workouts',
    'projects.filter.videoclipes': 'Music Videos',
    'projects.filter.longos': 'Long-Form & Educational',
    
    'projects.library.badge': 'Video Library',
    'projects.library.title': 'All Videos',
    'projects.library.toggle_open': 'Open Folders',
    'projects.library.toggle_close': 'Collapse Menu',
    'projects.library.fab_label': 'OPEN FOLDERS',
    'projects.library.active': 'Active folder',
    'projects.library.total': 'cataloged videos',
    'projects.library.expand_hint': 'Immersive Mode Active',
    'projects.library.fast_stream': 'Direct high-performance playback',
    
    'projects.cta_box.title': 'Have a project in mind?',
    'projects.cta_box.text': 'Let’s find the right audiovisual language for your vision.',
    'projects.cta_box.button': 'Let\'s Talk',
    
    'projects.vsl.title': 'Video Sales Letter (VSL)',
    'projects.vsl.desc': 'Editing focused on retention, clarity, and conversion.',
    'projects.vsl.tags': 'RHYTHM · CUTS · MOTION · SOUND DESIGN · RETENTION',
    'projects.vsl.client': 'VSL Project',
    'projects.vsl.format': '16:9 · Long-Form Video',
    
    'projects.reels.title': 'Fast Motivational Leg Workout',
    'projects.reels.desc': 'High-intensity fitness editing for leg day. Fast cuts synced to the beat, immersive sound design, and peak retention for reels and shorts.',
    'projects.reels.client': 'Fitness & Performance',
    'projects.reels.format': '9:16 · Vertical Reels',
    
    'projects.comercial.title': 'Mc Tom da Vg - Where are you',
    'projects.comercial.desc': 'Visual editing to communicate product, brand, and message with impact.',
    'projects.comercial.client': 'Mc Tom da Vg & DJ IAM',
    'projects.comercial.format': '16:9 · Official Music Video',
    
    'projects.youtube.title': 'Europe Travel Vlog & Muay Thai',
    'projects.youtube.desc': 'Narrative, rhythm, and retention for dynamic visual content.',
    'projects.youtube.client': 'Personal Project',
    'projects.youtube.format': '9:16 · Reels / Travel',

    'projects.caneta.title': 'Weight-Loss Injections - Medical Breakdown',
    'projects.caneta.desc': 'Clear narrative pacing for medical and health education, breaking down complex topics while keeping engagement high.',
    'projects.caneta.client': 'Educational & Health Content',
    'projects.caneta.format': '16:9 · Long Educational',

    'projects.fitlife.title': 'FitLife Routine & Workout',
    'projects.fitlife.desc': 'Beat-synced cuts, high-impact captions, and punchy sound design built for maximum fitness community engagement.',
    'projects.fitlife.client': 'Fitness & Performance',
    'projects.fitlife.format': '9:16 · Vertical Reels',

    'projects.depois40.title': 'Strength Training: After 40',
    'projects.depois40.desc': 'Dynamic pacing with strong visual hooks targeted at health, longevity, and fitness after 40.',
    'projects.depois40.client': 'Sports Consulting',
    'projects.depois40.format': '9:16 · Vertical Reels',

    'projects.nutricao.title': 'Nutrition: Myths & Realities',
    'projects.nutricao.desc': 'Narrative structure for online courses and masterclasses, maintaining educational clarity and continuous retention.',
    'projects.nutricao.client': 'Online Course / Educational',
    'projects.nutricao.format': '16:9 · Course / Lesson',

    'projects.vlogviagem.title': 'Travel Diary: Destinations & Lifestyle',
    'projects.vlogviagem.desc': 'Cinematic travel editing with immersive sound design, seamless organic transitions, and custom color grading.',
    'projects.vlogviagem.client': 'Lifestyle / YouTube',
    'projects.vlogviagem.format': '16:9 · Long Vlog',

    'projects.modal.watch': 'Watch Video',
    'projects.modal.preview': 'Cover / Editorial Piece',
    'projects.modal.request_link': 'Request Video on WhatsApp',
    'projects.empty': 'No projects assigned to this category at the moment.',
    'projects.empty_desc': 'New projects will be added soon.',
    'projects.carousel.prev': 'Previous project',
    'projects.carousel.next': 'Next project',
    
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
