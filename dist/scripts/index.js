"use strict";
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
function ajaxNavigation(url, callback) {
    let root = document.getElementById('root');
    if (!root)
        return;
    root.innerHTML = '';
    let ajax = new XMLHttpRequest();
    ajax.open('GET', url);
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            root.innerHTML = ajax.responseText;
            if (callback)
                callback();
        }
        if (ajax.readyState == 4 && ajax.status == 404) {
            root.innerHTML = 'Requisição finalizada, porém o recurso não foi encontrado. Erro 404.';
        }
    };
    ajax.send();
}
// initLocalStorage(resources)
// fetchNavigation("../src/pages/home.html")
document.addEventListener('DOMContentLoaded', () => {
    initLocalStorage(resources);
    ajaxNavigation("src/pages/home.html");
});
