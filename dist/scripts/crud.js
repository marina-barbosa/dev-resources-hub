"use strict";
function addItem(event) {
    event.preventDefault();
    const form = document.querySelector('#add-form');
    const catTitle = form.getAttribute('data-category');
    let data = localStorage.getItem('resources');
    const titleInput = document.querySelector('#title-input');
    const urlInput = document.querySelector('#url-input');
    const descriptionInput = document.querySelector('#description-input');
    const title = titleInput.value.trim();
    let url = urlInput.value.trim();
    const description = descriptionInput.value.trim();
    if (!title || !url) {
        console.error('Todos os campos são obrigatórios.');
        return;
    }
    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
    }
    const newItem = {
        id: Date.now(),
        title,
        url,
        description: description ? description : "nothing to say"
    };
    if (!data) {
        console.error('data?');
        return;
    }
    const localResources = JSON.parse(data);
    const category = localResources.find(cat => cat.title === catTitle);
    if (!category) {
        console.error('cadegory?');
        return;
    }
    category.items.push(newItem);
    localStorage.clear();
    localStorage.setItem('resources', JSON.stringify(localResources));
    renderContent(localResources);
    toggleModalAdd();
    form.reset();
}
function deleteItem(event) {
    const target = event.target;
    const catTitle = target.getAttribute('data-category');
    const itemId = target.getAttribute('data-key');
    let data = localStorage.getItem('resources');
    if (!data)
        return;
    const localResources = JSON.parse(data);
    const category = localResources.find(cat => cat.title === catTitle);
    if (!category)
        return;
    category.items = category.items.filter(item => item.id !== parseInt(itemId));
    localStorage.clear();
    localStorage.setItem('resources', JSON.stringify(localResources));
    renderContent(localResources);
    toggleModalDelete();
}
