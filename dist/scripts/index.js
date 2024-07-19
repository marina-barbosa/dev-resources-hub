"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function initLocalStorage(resources) {
    const storageResources = localStorage.getItem("resources");
    if (!storageResources) {
        localStorage.setItem("resources", JSON.stringify(resources));
        console.log('localStorage iniciado com resources default');
    }
    else {
        console.log('ja exite resources em localStorage');
    }
}
const resources = [
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
function fetchNavigation(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const rootElement = document.getElementById('root');
        if (rootElement) {
            rootElement.innerHTML = '';
        }
        else {
            console.error('Div root não encontrada.');
            return;
        }
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`Requisição finalizada, porém o recurso não foi encontrado. Erro ${response.status}.`);
            }
            const data = yield response.text();
            rootElement.innerHTML = data;
        }
        catch (error) {
            if (error instanceof Error) {
                rootElement.innerHTML = error.message;
            }
            else {
                rootElement.innerHTML = 'Algo deu errado.';
            }
        }
    });
}
initLocalStorage(resources);
fetchNavigation("../src/pages/home.html");
