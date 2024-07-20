"use strict";
function getStarted() {
    let data = localStorage.getItem('resources');
    if (data) {
        let resources = JSON.parse(data);
        ajaxNavigation("src/pages/resources.html", () => renderContent(resources));
    }
}
function handleDeleteClick(event) {
    toggleModalDelete();
    const target = event.target;
    const itemId = target.getAttribute('data-key');
    const catTitle = target.getAttribute('data-category');
    const confirmButton = document.getElementById("confirm-delete");
    confirmButton.setAttribute("data-key", itemId);
    confirmButton.setAttribute("data-category", catTitle);
}
function handleAddClick(event) {
    toggleModalAdd();
    const target = event.target;
    const catTitle = target.getAttribute('data-category');
    const addForm = document.getElementById("add-form");
    addForm.setAttribute("data-category", catTitle);
}
