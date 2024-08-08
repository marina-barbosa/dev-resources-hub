"use strict";
function initLocalStorage(resources) {
    const storageResources = localStorage.getItem("resources");
    if (!storageResources) {
        localStorage.setItem("resources", JSON.stringify(resources));
    }
}
