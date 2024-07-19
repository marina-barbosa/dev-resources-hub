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
function getStarted() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = localStorage.getItem('resources');
        if (data) {
            let resources = JSON.parse(data);
            yield fetchNavigation('../src/pages/resources.html');
            renderContent(resources);
        }
    });
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
