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
    'hero.title.1': 'EDIÇÃO DE VÍDEO DE ALTO IMPACTO',
    'hero.title.2': 'PARA CRIADORES, MARCAS E INFOPRODUTOS',
    'hero.title.main': 'Edição de Vídeo de Alto Impacto para Criadores, Marcas e Infoprodutos',
    'hero.desc': 'Transformando conteúdos brutos em vídeos dinâmicos, com narrativa envolvente e foco total em retenção de audiência.',
    'hero.desc.main': 'Transformando conteúdos brutos em vídeos dinâmicos, com narrativa envolvente e foco total em retenção de audiência.',
    'hero.cta.primary': 'Solicitar Orçamento no WhatsApp',
    'hero.cta.secondary': 'Explorar Portfólio',
    'hero.cta.whatsapp': 'Solicitar Orçamento no WhatsApp',
    'hero.cta.portfolio': 'Explorar Portfólio',
    'hero.metrics.views': 'Views Geradas',
    'hero.metrics.retention': 'Retenção Média',
    'hero.metrics.delivery': 'No Prazo',
    
    'projects.subtitle': 'Trabalhos Selecionados',
    'projects.title.1': 'Uma seleção de',
    'projects.title.highlight': 'edição, ritmo e narrativa',
    'projects.title.2': 'fazem a diferença.',
    'projects.watch': 'Assistir',
    'projects.section_tag': 'Portfólio Selecionado',
    'projects.section_title': 'Produções Reais & Alta Retenção',
    'projects.section_subtitle': 'Navegue pelas produções com motion preview em tempo real. Clique para assistir com áudio completo.',
    
    'projects.cat.vlogs': 'Vlogs & Conteúdo Vertical',
    'projects.cat.vlogs.desc': 'Narrativas dinâmicas de dia a dia, viagens e estilo de vida com ritmo acelerado e alta retenção.',
    'projects.cat.youtube': 'Canais do YouTube',
    'projects.cat.youtube.desc': 'Grande produção cinematográfica em 16:9 widescreen, com sincronia musical milimétrica e color grading.',
    'projects.cat.shorts': 'Vlogs & Conteúdo Vertical',
    'projects.cat.shorts.desc': 'Narrativas dinâmicas de dia a dia, viagens e estilo de vida com ritmo acelerado e alta retenção.',
    'projects.cat.vsl': 'VSLs & Anúncios',
    'projects.cat.vsl.desc': 'Vídeos de alta conversão para infoprodutos, tráfego pago e negócios.',
    
    'projects.filter.all': 'Todos os Vídeos',
    'projects.filter.reels': 'Reels & Retenção',
    'projects.filter.vlog': 'Vlogs',
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
    'projects.vsl.desc': 'Estrutura persuasiva e cortes estratégicos desenhados para alta conversão.',
    'projects.vsl.tags': 'RITMO · CORTES · RETENÇÃO',
    'projects.vsl.client': 'Projeto VSL',
    'projects.vsl.format': '16:9 · Longa Duração',
    
    'projects.reels.title': 'Treino Rápido de Pernas Motivacional',
    'projects.reels.desc': 'Cortes no beat e sound design visceral para prender a atenção no primeiro segundo.',
    'projects.reels.client': 'Fitness & Performance',
    'projects.reels.format': '9:16 · Reels Vertical',
    
    'projects.comercial.title': 'MC Tom da VG - Cadê você',
    'projects.comercial.desc': 'Sincronia rítmica precisa, speed ramps cirúrgicos e acabamento cinematográfico.',
    'projects.comercial.client': 'Mc Tom da Vg & DJ IAM',
    'projects.comercial.format': '16:9 · Videoclipe Oficial',
    
    'projects.youtube.title': 'Produtos - Comercial & E-commerce',
    'projects.youtube.desc': 'Apresentação comercial dinâmica desenvolvida para autoridade e conversão direta.',
    'projects.youtube.client': 'Comercial & E-commerce',
    'projects.youtube.format': '9:16 · Reels Comercial',

    'projects.vlog.title': 'Treino e Rotina Insana',
    'projects.vlog.desc': 'Edição dinâmica com cortes no beat e narrativa construída para máxima retenção de audiência.',
    'projects.vlog.client': 'Vlog · Dia a dia',
    'projects.vlog.tags': 'NARRATIVA · RITMO · SOUND DESIGN',
    'projects.vlog.format': '9:16 · Reels Vlog',

    'projects.vlog2.title': 'Minha Jornada & Viagem',
    'projects.vlog2.desc': 'Storytelling cinematográfico de viagem e bastidores com sound design imersivo e color grading.',
    'projects.vlog2.client': 'Vlog · Estilo de Vida',
    'projects.vlog2.tags': 'STORYTELLING · COLOR GRADING · BEAT-SYNC',
    'projects.vlog2.format': '9:16 · Reels Vlog',

    'projects.caneta.title': 'Caneta Emagrecedora - Análise Médica',
    'projects.caneta.desc': 'Didática visual e motion explicativo para simplificação médica e retenção.',
    'projects.caneta.client': 'Conteúdo Educacional / Saúde',
    'projects.caneta.format': '16:9 · Educacional Longo',

    'projects.fitlife.title': 'Rotina & Treino FitLife',
    'projects.fitlife.desc': 'Cortes no beat, legendas dinâmicas e sound design visceral em 60 FPS.',
    'projects.fitlife.client': 'Fitness & Performance',
    'projects.fitlife.format': '9:16 · Reels Vertical',

    'projects.depois40.title': 'Treino de Força: Depois dos 40',
    'projects.depois40.desc': 'Ganchos rápidos e narrativa envolvente para retenção e captação de alunos.',
    'projects.depois40.client': 'Consultoria Esportiva',
    'projects.depois40.format': '9:16 · Reels Vertical',

    'projects.nutricao.title': 'Mitos e Verdades da Nutrição',
    'projects.nutricao.desc': 'Estrutura didática dinâmica com retenção contínua e motion graphics.',
    'projects.nutricao.client': 'Curso Online / Educacional',
    'projects.nutricao.format': '16:9 · Curso / Aula',

    'projects.vlogviagem.title': 'Diário de Bordo: Viagem & Destinos',
    'projects.vlogviagem.desc': 'Edição de viagem com sound design e color grading imersivos.',
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
    
    'workflow.tag': 'COMO FUNCIONA',
    'workflow.title': 'Processo de Trabalho Transparente',
    'workflow.subtitle': 'Quatro passos simples para passar total segurança e previsibilidade na entrega do seu projeto.',
    'workflow.step1.title': 'Alinhamento & Briefing',
    'workflow.step1.desc': 'Entendimento profundo do objetivo do vídeo, público-alvo, referências e tom desejado.',
    'workflow.step2.title': 'Edição & Efeitos',
    'workflow.step2.desc': 'Cortes no beat, color grading cinematográfico, motion design e sound design imersivo.',
    'workflow.step3.title': 'Revisão & Ajustes',
    'workflow.step3.desc': 'Feedback transparente e refinamento minucioso até você ter 100% de satisfação.',
    'workflow.step4.title': 'Entrega Final em Alta Qualidade',
    'workflow.step4.desc': 'Exportação em 4K/60FPS com formatos prontos para postagem direta e máxima retenção.',

    'contact.title': 'Pronto para elevar o nível do seu conteúdo?',
    'contact.desc': 'Vamos conversar sobre o seu próximo vídeo e criar uma edição com narrativa envolvente e foco total em retenção de audiência.',
    'contact.cta.primary': 'Solicitar Orçamento no WhatsApp',
    'contact.cta.secondary': 'Explorar Portfólio',
    'contact.email': 'contato@guironas.shop',
    'contact.social.insta': 'Instagram',
    'contact.social.yt': 'YouTube',
    
    'about.pipeline.title': 'Softwares & Pipeline Profissional',
    'about.pipeline.desc': 'Adobe Premiere Pro · After Effects · DaVinci Resolve · CapCut Pro · Color Grading · Sound Design',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.payments': 'Pagamentos Internacionais Aceitos via Wise / Transferência Bancária',
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
    'nav.cta': 'GET A QUOTE',
    
    'hero.badge': 'Available for new projects',
    'hero.title.1': 'HIGH-IMPACT VIDEO EDITING',
    'hero.title.2': 'FOR CREATORS, BRANDS & PRODUCTS',
    'hero.title.main': 'High-Impact Video Editing for Creators, Brands & Digital Products',
    'hero.desc': 'Transforming raw footage into dynamic videos, with captivating narrative and total focus on audience retention.',
    'hero.desc.main': 'Transforming raw footage into dynamic videos, with captivating narrative and total focus on audience retention.',
    'hero.cta.primary': 'GET A QUOTE',
    'hero.cta.secondary': 'EXPLORE WORK',
    'hero.cta.whatsapp': 'GET A QUOTE',
    'hero.cta.portfolio': 'EXPLORE WORK',
    'hero.metrics.views': 'Total Views Generated',
    'hero.metrics.retention': 'Average Retention',
    'hero.metrics.delivery': 'On-Time Delivery',
    
    'projects.subtitle': 'Selected Works',
    'projects.title.1': 'A selection of',
    'projects.title.highlight': 'editing, pacing, and storytelling',
    'projects.title.2': 'make the difference.',
    'projects.watch': 'Watch',
    'projects.section_tag': 'Selected Portfolio',
    'projects.section_title': 'Real Productions & High Retention',
    'projects.section_subtitle': 'Explore video productions with live silent motion preview. Click any card to watch with full audio.',
    
    'projects.cat.vlogs': 'Vlogs & Vertical Content',
    'projects.cat.vlogs.desc': 'Fast-paced dynamic storytelling, daily vlogs, and high-retention vertical edits.',
    'projects.cat.youtube': 'YouTube Channels',
    'projects.cat.youtube.desc': 'Grand 16:9 widescreen cinematic production, millimeter-precise beat sync, and color grading.',
    'projects.cat.shorts': 'Vlogs & Vertical Content',
    'projects.cat.shorts.desc': 'Fast-paced dynamic storytelling, daily vlogs, and high-retention vertical edits.',
    'projects.cat.vsl': 'VSLs & Ads',
    'projects.cat.vsl.desc': 'High-converting videos for digital infoproducts, paid ads, and commercial growth.',
    
    'projects.filter.all': 'All Videos',
    'projects.filter.reels': 'Reels & Retention',
    'projects.filter.vlog': 'Vlogs',
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
    'projects.vsl.desc': 'Persuasive narrative structure and strategic pacing designed for high sales conversion.',
    'projects.vsl.tags': 'RHYTHM · CUTS · RETENTION',
    'projects.vsl.client': 'VSL Project',
    'projects.vsl.format': '16:9 · Long-Form Video',
    
    'projects.reels.title': 'Fast Motivational Leg Workout',
    'projects.reels.desc': 'Beat-synced cuts and visceral sound design built to capture attention in the first second.',
    'projects.reels.client': 'Fitness & Performance',
    'projects.reels.format': '9:16 · Vertical Reels',
    
    'projects.comercial.title': 'MC Tom da VG - Where Are You',
    'projects.comercial.desc': 'Millimeter-precise musical sync with surgical speed ramps and cinematic finishing.',
    'projects.comercial.client': 'Mc Tom da Vg & DJ IAM',
    'projects.comercial.format': '16:9 · Official Music Video',
    
    'projects.youtube.title': 'Products - Commercial & E-commerce',
    'projects.youtube.desc': 'Dynamic commercial showcase engineered for instant brand authority and direct sales.',
    'projects.youtube.client': 'Commercial & E-commerce',
    'projects.youtube.format': '9:16 · Commercial Reels',

    'projects.vlog.title': 'Intense Routine & Workout',
    'projects.vlog.desc': 'Fast-paced dynamic editing with beat-synced cuts crafted to hook attention in the first seconds.',
    'projects.vlog.client': 'Vlog · Daily Life',
    'projects.vlog.tags': 'NARRATIVE · RHYTHM · SOUND DESIGN',
    'projects.vlog.format': '9:16 · Vertical Vlog',

    'projects.vlog2.title': 'My Journey & Travel',
    'projects.vlog2.desc': 'Cinematic travel and behind-the-scenes storytelling with immersive sound design and color grading.',
    'projects.vlog2.client': 'Vlog · Lifestyle',
    'projects.vlog2.tags': 'STORYTELLING · COLOR GRADING · BEAT-SYNC',
    'projects.vlog2.format': '9:16 · Vertical Vlog',

    'projects.caneta.title': 'Weight-Loss Injections - Medical Breakdown',
    'projects.caneta.desc': 'Visual pedagogy and explanatory motion graphics for medical simplification and retention.',
    'projects.caneta.client': 'Educational & Health Content',
    'projects.caneta.format': '16:9 · Long Educational',

    'projects.fitlife.title': 'FitLife Routine & Workout',
    'projects.fitlife.desc': 'Rhythmic 60 FPS edit featuring dynamic animated subtitles and seamless flow.',
    'projects.fitlife.client': 'Fitness & Performance',
    'projects.fitlife.format': '9:16 · Vertical Reels',

    'projects.depois40.title': 'Strength Training: After 40',
    'projects.depois40.desc': 'Fast visual hooks and engaging narrative built for retention and client acquisition.',
    'projects.depois40.client': 'Sports Consulting',
    'projects.depois40.format': '9:16 · Vertical Reels',

    'projects.nutricao.title': 'Nutrition: Myths & Realities',
    'projects.nutricao.desc': 'Dynamic educational pacing with continuous retention and motion graphics.',
    'projects.nutricao.client': 'Online Course / Educational',
    'projects.nutricao.format': '16:9 · Course / Lesson',

    'projects.vlogviagem.title': 'Travel Diary: Destinations & Lifestyle',
    'projects.vlogviagem.desc': 'Travel editing with immersive sound design and color grading.',
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
    
    'workflow.tag': 'HOW IT WORKS',
    'workflow.title': 'Transparent Creative Process',
    'workflow.subtitle': 'Four clear steps to ensure predictability, communication, and high-impact project delivery.',
    'workflow.step1.title': 'Alignment & Briefing',
    'workflow.step1.desc': 'Deep understanding of video goals, target audience, visual references, and retention metrics.',
    'workflow.step2.title': 'Editing & Visual Effects',
    'workflow.step2.desc': 'Beat-synced cuts, cinematic grading, dynamic motion design, and punchy audio sound design.',
    'workflow.step3.title': 'Review & Refinements',
    'workflow.step3.desc': 'Fast, collaborative feedback loops with full satisfaction guarantee before completion.',
    'workflow.step4.title': 'High-Quality Final Delivery',
    'workflow.step4.desc': 'Optimized 4K/60FPS exports tailored for immediate posting and maximum algorithmic reach.',

    'contact.title': 'Ready to elevate your content to the next level?',
    'contact.desc': 'Let\'s discuss your next project and build an edit with engaging storytelling and peak audience retention.',
    'contact.cta.primary': 'Request Quote on WhatsApp',
    'contact.cta.secondary': 'Explore Portfolio',
    'contact.email': 'contato@guironas.shop',
    'contact.social.insta': 'Instagram',
    'contact.social.yt': 'YouTube',
    
    'about.pipeline.title': 'Professional Software & Pipeline',
    'about.pipeline.desc': 'Adobe Premiere Pro · After Effects · DaVinci Resolve · CapCut Pro · Color Grading · Sound Design',
    'footer.rights': 'All rights reserved.',
    'footer.payments': 'Worldwide Payments Accepted via Wise / International Wire',
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
