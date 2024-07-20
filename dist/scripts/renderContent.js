"use strict";
function renderContent(resources) {
    console.log('renderizando Content');
    const content = document.querySelector("#content");
    if (content && resources) {
        content.innerHTML = '';
        resources.forEach((category) => {
            const card = document.createElement("div");
            card.id = "card";
            card.className = "bg-neutral-800 text-neutral-200 rounded-lg px-4 border border-neutral-500 shadow-custom-card hover:scale-105 transition-all duration-300 min-w-60 flex flex-col justify-between";
            const contentContainer = document.createElement("div");
            contentContainer.className = "flex flex-col flex-1";
            const title = document.createElement("div");
            // title.id = "title";
            title.className = "py-2 text-2xl font-bold uppercase text-neutral-500";
            title.textContent = category.title;
            const ul = document.createElement("ul");
            category.items.forEach((item) => {
                const li = document.createElement("li");
                li.className = "border-t border-neutral-600 py-2 flex justify-between relative";
                li.title = item.description;
                const itemName = document.createElement("a");
                itemName.className = "text-xl hover:text-sky-300 transition-all duration-400 mr-5 group";
                itemName.textContent = item.title;
                itemName.href = item.url;
                itemName.target = "_blank";
                const button = document.createElement("button");
                button.className = "absolute right-0 bottom-2 text-2xl text-red-400";
                button.textContent = "x";
                button.setAttribute("data-key", item.id.toString());
                button.setAttribute("data-category", category.title);
                // button.addEventListener('click', (e) => {
                //   const target = e.target as HTMLElement;
                //   const itemId = parseInt(target.getAttribute('data-key')!);
                //   const catTitle = target.getAttribute('data-category')!;
                //   const localResources = deleteItem(catTitle, itemId);
                //   if (localResources) renderContent(localResources);
                // });
                button.addEventListener('click', handleDeleteClick);
                li.appendChild(itemName);
                li.appendChild(button);
                ul.appendChild(li);
            });
            const addButtonContainer = document.createElement("div");
            addButtonContainer.className = "py-2 text-right";
            const addButton = document.createElement("button");
            addButton.className = "bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-2 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group";
            addButton.innerHTML = `
      <span class="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      add`;
            addButton.setAttribute("data-category", category.title);
            // addButton.addEventListener('click', (e) => {
            //   const newId = Date.now();
            //   const newTitle = prompt('Enter the title:')?.trim();
            //   const newUrl = prompt('Enter the URL:')?.trim();
            //   if (newTitle && newUrl) {
            //     const newItem: Item = { id: newId, title: newTitle, url: newUrl };
            //     const localResources = addItem(category.title, newItem);
            //     if (localResources) renderContent(localResources);
            //   }
            // });
            addButton.addEventListener('click', handleAddClick);
            addButtonContainer.appendChild(addButton);
            contentContainer.appendChild(title);
            contentContainer.appendChild(ul);
            card.appendChild(contentContainer);
            card.appendChild(addButtonContainer);
            content.appendChild(card);
        });
        const addCategoryCard = document.createElement("div");
        addCategoryCard.id = "card-cat";
        addCategoryCard.className = " bg-neutral-800 text-neutral-200 rounded-lg px-4 border border-neutral-500 shadow-custom-card hover:scale-105 transition-all duration-300 min-w-60 flex flex-col";
        addCategoryCard.innerHTML = `
      <div class="py-2 pb-6 text-2xl font-bold uppercase text-neutral-500">
        addCategory()
      </div>
      <form id="category-form" onsubmit="addCategory(event)" class="flex flex-col justify-between gap-6">
        <input id="category-title-input" placeholder="Enter category name"
          class="bg-neutral-800 border border-neutral-500 rounded-lg text-white placeholder-neutral-400 px-6 py-3 text-base hover:border-white cursor-pointer transition"
          type="text" required />
        <button type="submit"
          class="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-2 py-1 
        rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 mb-6 group">
          <span
            class="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]">
          </span>
          New category
        </button>
      </form>
    `;
        content.appendChild(addCategoryCard);
        const deleteCategoryCard = document.createElement("div");
        deleteCategoryCard.id = "card-delete-cat";
        deleteCategoryCard.className = " bg-neutral-800 text-neutral-200 rounded-lg px-4 border border-neutral-500 shadow-custom-card hover:scale-105 transition-all duration-300 min-w-60 flex flex-col";
        deleteCategoryCard.innerHTML = `
      <div class="py-2 pb-6 text-2xl font-bold uppercase text-neutral-500">
        deleteCategory()
      </div>
      <div id="delete-category-form" class="flex flex-col justify-between gap-6">
        <input id="delete-category-title-input" placeholder="Enter category name"
          class="bg-neutral-800 border border-neutral-500 rounded-lg text-white placeholder-neutral-400 px-6 py-3 text-base hover:border-white cursor-pointer transition"
          type="text" required />
        <button onclick="toggleModalDeleteCategory()"
          class="bg-red-600 text-white border border-red-400 border-b-4 font-medium overflow-hidden relative px-2 py-1 
        rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 mb-6 group">
          <span
            class="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]">
          </span>
          Delete category
        </button>
      </div>
    `;
        // const deleteCategoryForm = deleteCategoryCard.querySelector("#delete-category-form");
        // if (deleteCategoryForm) {
        //   deleteCategoryForm.addEventListener('submit', deleteCategory);
        // }
        content.appendChild(deleteCategoryCard);
        console.log('render concluido');
    }
}
