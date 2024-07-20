function initLocalStorage(resources: Category[]): void {
  const storageResources = localStorage.getItem("resources");
  if (!storageResources) {
    localStorage.setItem("resources", JSON.stringify(resources));
  }
}