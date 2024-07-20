
interface Item {
  id: number;
  title: string;
  url: string;
  description: string;
}

interface Category {
  title: string;
  items: Item[];
}

const resources: Category[] = [
  {
    title: 'Inspiração',
    items: [
      { id: 1, title: 'Minimal Gallery', url: 'https://minimal.gallery/', description: 'Galeria de design minimalista para inspiração em layouts simples e elegantes.' },
      { id: 2, title: 'Dark Mode Design', url: 'https://www.darkmodedesign.com/', description: 'Recursos e exemplos de design para interfaces com modo escuro.' },
      { id: 3, title: 'Awwwards', url: 'https://www.awwwards.com/', description: 'Premiações para os melhores sites e designs digitais.' },
      { id: 4, title: 'Refero Design', url: 'https://refero.design/', description: 'Inspiração e exemplos de design para vários tipos de projetos digitais.' }
    ]
  },
  {
    title: 'Colors',
    items: [
      { id: 5, title: 'Color Hunt', url: 'https://colorhunt.co/', description: 'Paletas de cores curadas para inspiração e uso em projetos.' },
      { id: 6, title: 'Realtime Colors', url: 'https://www.realtimecolors.com/', description: 'Ferramenta para gerar e explorar combinações de cores em tempo real.' }
    ]
  },
  {
    title: 'Icons',
    items: [
      { id: 7, title: 'Feather Icons', url: 'https://feathericons.com/', description: 'Conjunto de ícones simples e minimalistas.' },
      { id: 8, title: 'Ionicons', url: 'https://ionic.io/ionicons', description: 'Ícones personalizáveis e de alta qualidade para aplicações e sites.' },
      { id: 9, title: 'Tabler Icons', url: 'https://tabler.io/icons', description: 'Ícones gratuitos e bem desenhados para diferentes usos.' },
      { id: 10, title: 'Boxicons', url: 'https://boxicons.com/usage', description: 'Ícones simples e versáteis para integração em projetos web.' },
      { id: 11, title: 'Heroicons', url: 'https://heroicons.com/', description: 'Ícones SVG de alta qualidade para interfaces de usuário.' },
      { id: 12, title: 'CSS.gg', url: 'https://css.gg/', description: 'Coleção de ícones gratuitos em CSS e SVG.' },
      { id: 13, title: 'Bootstrap Icons', url: 'https://icons.getbootstrap.com/', description: 'Ícones gratuitos que podem ser usados com Bootstrap ou outros frameworks.' },
      { id: 14, title: 'FontAwesome', url: 'https://fontawesome.com/icons', description: 'Ícones amplamente utilizados e altamente personalizáveis.' },
      { id: 15, title: 'Lucide Icons', url: 'https://lucide.dev/icons/', description: 'Ícones claros e consistentes para desenvolvimento web e design.' }
    ]
  },
  {
    title: 'Images',
    items: [
      { id: 16, title: 'Depositphotos', url: 'https://depositphotos.com/', description: 'Banco de imagens com fotos e vetores de alta qualidade.' },
      { id: 17, title: 'Unblast', url: 'https://unblast.com', description: 'Recursos gratuitos, como mockups e imagens para designers.' },
      { id: 18, title: 'Mockup World', url: 'https://www.mockupworld.co', description: 'Uma vasta coleção de mockups gratuitos e premium para apresentação de projetos.' }
    ]
  },
  {
    title: 'Deploy',
    items: [
      { id: 19, title: 'Render', url: 'https://render.com/', description: 'Plataforma de hospedagem e deploy para aplicativos e sites.' },
      { id: 20, title: 'Fly.io', url: 'https://fly.io/', description: 'Plataforma para deploy e gerenciamento de aplicativos distribuídos.' }
    ]
  }
];