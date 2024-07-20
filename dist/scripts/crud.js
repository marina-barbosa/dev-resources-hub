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
function addCategory(event) {
    event.preventDefault();
    const form = document.querySelector('#category-form');
    const titleInput = document.querySelector('#category-title-input');
    const title = titleInput.value.trim();
    if (!title) {
        console.error('O título da categoria é obrigatório.');
        return;
    }
    let data = localStorage.getItem('resources');
    let localResources = data ? JSON.parse(data) : [];
    if (localResources.some(cat => cat.title.toUpperCase() === title.toUpperCase())) {
        console.error('Categoria já existe.');
        return;
    }
    const newCategory = {
        title,
        items: []
    };
    localResources.push(newCategory);
    localStorage.setItem('resources', JSON.stringify(localResources));
    renderContent(localResources);
    form.reset();
}
function deleteCategory() {
    const input = document.querySelector("#delete-category-title-input");
    const categoryName = input.value.trim();
    if (categoryName) {
        const data = localStorage.getItem('resources');
        let localResources = data ? JSON.parse(data) : [];
        const category = localResources.find(cat => cat.title.toUpperCase() === categoryName.toUpperCase());
        if (!category)
            return;
        localResources = localResources.filter(cat => cat.title.toUpperCase() !== categoryName.toUpperCase());
        localStorage.clear();
        localStorage.setItem('resources', JSON.stringify(localResources));
        renderContent(localResources);
        toggleModalDeleteCategory();
    }
    else {
        toggleModalDeleteCategory();
    }
}
