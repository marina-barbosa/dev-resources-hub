
function initLocalStorage(resources: Category[]): void {
  const storageResources = localStorage.getItem("resources");
  if (!storageResources) {
    localStorage.setItem("resources", JSON.stringify(resources));
    console.log('localStorage iniciado com resources default')
  } else {
    console.log('ja exite resources em localStorage')
  }
}


interface Item {
  id: number;
  title: string;
  url: string;
}

interface Category {
  title: string;
  items: Item[];
}

const resources: Category[] = [
  {
    title: 'Inspiração',
    items: [
      { id: 1, title: 'Minimal Gallery', url: 'https://minimal.gallery/' },
      { id: 2, title: 'Dark Mode Design', url: 'https://www.darkmodedesign.com/' },
      { id: 3, title: 'Awwwards', url: 'https://www.awwwards.com/' },
      { id: 4, title: 'Refero Design', url: 'https://refero.design/' }
    ]
  },
  {
    title: 'Colors',
    items: [
      { id: 5, title: 'Color Hunt', url: 'https://colorhunt.co/' },
      { id: 6, title: 'Realtime Colors', url: 'https://www.realtimecolors.com/' }
    ]
  },
  {
    title: 'Icons',
    items: [
      { id: 7, title: 'Feather Icons', url: 'https://feathericons.com/' },
      { id: 8, title: 'Ionicons', url: 'https://ionic.io/ionicons' },
      { id: 9, title: 'Tabler Icons', url: 'https://tabler.io/icons' },
      { id: 10, title: 'Boxicons', url: 'https://boxicons.com/usage' },
      { id: 11, title: 'Heroicons', url: 'https://heroicons.com/' },
      { id: 12, title: 'CSS.gg', url: 'https://css.gg/' },
      { id: 13, title: 'Bootstrap Icons', url: 'https://icons.getbootstrap.com/' },
      { id: 14, title: 'FontAwesome', url: 'https://fontawesome.com/icons' },
      { id: 15, title: 'Lucide Icons', url: 'https://lucide.dev/icons/' }
    ]
  },
  {
    title: 'Images',
    items: [
      { id: 16, title: 'Depositphotos', url: 'https://depositphotos.com/' },
      { id: 17, title: 'Unblast', url: 'https://unblast.com' },
      { id: 18, title: 'Mockup World', url: 'https://www.mockupworld.co' }
    ]
  },
  {
    title: 'Deploy',
    items: [
      { id: 19, title: 'Render', url: 'https://render.com/' },
      { id: 20, title: 'Fly.io', url: 'https://fly.io/' }
    ]
  }
];




async function fetchNavigation(url: string): Promise<void> {

  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = '';
  } else {
    console.error('Div root não encontrada.');
    return;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Requisição finalizada, porém o recurso não foi encontrado. Erro ${response.status}.`);
    }

    const data = await response.text();
    rootElement.innerHTML = data;

  } catch (error) {
    if (error instanceof Error) {
      rootElement.innerHTML = error.message;
    } else {
      rootElement.innerHTML = 'Algo deu errado.';
    }
  }
}


initLocalStorage(resources)
// fetchNavigation("../src/pages/home.html")



