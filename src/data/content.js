// Todo o texto do site está centralizado aqui para facilitar edições futuras.

export const brand = {
  name: 'Bárbara Fontes',
  tagline: 'Estética, Saúde & Bem Estar',
  whatsapp: '5511999999999', // TODO: substituir pelo número real
  whatsappDisplay: '(11) 99999-9999',
  address: 'Rua Exemplo, 123 — Bairro, Cidade/UF', // TODO: substituir pelo endereço real
  instagram: 'https://instagram.com/barbarafontes.estetica', // TODO: link real
}

export const nav = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Skincare', href: '#skincare' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export const hero = {
  eyebrow: 'Clínica boutique de estética',
  title: 'Beleza, cuidado e autoestima através de uma pele saudável.',
  text: 'Tratamentos personalizados, tecnologia estética e cuidados desenvolvidos para revelar a melhor versão da sua pele.',
  cta: 'Agendar avaliação',
  badges: [
    'Especialista em pele e skincare',
    'Atendimento personalizado',
    'Resultados reais',
  ],
}

export const about = {
  eyebrow: 'Quem cuida de você',
  title: 'Bárbara Fontes',
  role: 'Esteticista Cosmetóloga',
  paragraphs: [
    'Bárbara Fontes é Esteticista Cosmetóloga, especialista em pele e skincare. Há seis anos atua na área de estética e cosmetologia, buscando constantemente aprimorar seus conhecimentos para oferecer tratamentos personalizados.',
    'Sua filosofia acredita que estética vai além da aparência: envolve saúde, autoestima, bem-estar e confiança.',
    'Há dois anos realizou o sonho de abrir sua própria clínica, criando um espaço dedicado ao cuidado individualizado.',
  ],
  stats: [
    { value: '6', label: 'anos de experiência' },
    { value: '2', label: 'anos de clínica própria' },
    { value: '+', label: 'especialista em pele' },
  ],
}

export const treatments = {
  eyebrow: 'Protocolos',
  title: 'Tratamentos',
  text: 'Cada protocolo é desenhado sob medida, combinando técnica, tecnologia e escuta atenta às necessidades da sua pele.',
  items: [
    {
      name: 'Limpeza de pele',
      description: 'Higienização profunda e extração profissional para renovar a pele em profundidade.',
      image: '/images/tratamento-limpeza-de-pele.webp',
    },
    {
      name: 'Tratamentos faciais',
      description: 'Protocolos combinados para hidratação, luminosidade e equilíbrio da pele do rosto.',
      image: '/images/tratamento-facial.webp',
    },
    {
      name: 'Rejuvenescimento',
      description: 'Técnicas que estimulam a renovação celular e a firmeza natural da pele.',
      image: '/images/tratamento-rejuvenescimento.webp',
    },
    {
      name: 'Protocolos personalizados',
      description: 'Planos de cuidado desenhados a partir da avaliação individual de cada cliente.',
      image: '/images/tratamento-protocolo.webp',
    },
    {
      name: 'Skincare profissional',
      description: 'Aplicação de ativos de alta performance para resultados visíveis e duradouros.',
      image: '/images/tratamento-skincare.webp',
    },
  ],
}

export const results = {
  eyebrow: 'Transformações reais',
  title: 'Resultados',
  text: 'Uma seleção de resultados reais de clientes atendidos na clínica.',
  disclaimer: 'Resultados podem variar de acordo com cada pessoa.',
  // TODO: substituir pelos pares reais de antes/depois
  items: [
    { before: '/images/antes-depois-01-antes.webp', after: '/images/antes-depois-01-depois.webp', label: 'Protocolo facial · 8 semanas' },
    { before: '/images/antes-depois-02-antes.webp', after: '/images/antes-depois-02-depois.webp', label: 'Limpeza de pele · 4 sessões' },
    { before: '/images/antes-depois-03-antes.webp', after: '/images/antes-depois-03-depois.webp', label: 'Rejuvenescimento · 12 semanas' },
  ],
}

export const skincare = {
  eyebrow: 'Marca própria',
  title: 'A ciência do cuidado diário',
  text: 'Uma linha desenvolvida para levar o cuidado profissional da clínica para a rotina diária.',
  cta: 'Conhecer a linha',
  // TODO: substituir pelos produtos reais
  products: [
    { name: 'Sérum Facial', benefit: 'Ativos concentrados para luminosidade e firmeza.', image: '/images/skincare-produto-01.webp' },
    { name: 'Hidratante Diário', benefit: 'Barreira de proteção e hidratação prolongada.', image: '/images/skincare-produto-02.webp' },
    { name: 'Sabonete de Limpeza', benefit: 'Limpeza suave que respeita o equilíbrio da pele.', image: '/images/skincare-produto-03.webp' },
  ],
}

export const testimonials = {
  eyebrow: 'Prova social',
  title: 'Depoimentos',
  // TODO: substituir por depoimentos reais de clientes
  items: [
    { name: 'Cliente da clínica', text: 'Atendimento cuidadoso do início ao fim. Me senti acolhida e os resultados foram muito além do esperado.', rating: 5 },
    { name: 'Cliente da clínica', text: 'A Bárbara entende exatamente o que a pele precisa. Profissionalismo e delicadeza em cada sessão.', rating: 5 },
    { name: 'Cliente da clínica', text: 'Um espaço lindo, tranquilo, e um cuidado muito personalizado. Recomendo de olhos fechados.', rating: 5 },
  ],
}

export const instagramSection = {
  eyebrow: 'Instagram',
  title: 'Acompanhe transformações e cuidados',
  text: 'Bastidores da clínica, dicas de skincare e resultados reais, todos os dias.',
  cta: 'Seguir no Instagram',
}

export const contact = {
  eyebrow: 'Fale conosco',
  title: 'Localização e contato',
  text: 'Agende sua avaliação e conheça de perto o cuidado personalizado da clínica.',
  cta: 'Agendar pelo WhatsApp',
}
