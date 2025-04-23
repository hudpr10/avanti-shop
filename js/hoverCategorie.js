/* Exibindo Categorias*/
const categoriesContainer = document.querySelector(".submenu-categories-container");
const departments = document.querySelectorAll(".department");
let timeout;

departments.forEach(department => {
    department.addEventListener("mouseenter", addCategories);
    department.addEventListener("mouseleave", closeCategories);

    categoriesContainer.addEventListener("mouseenter", addCategories);
    categoriesContainer.addEventListener("mouseleave", closeCategories);
});

function addCategories() {
    clearTimeout(timeout);
    categoriesContainer.style = `
        opacity: 1;
        pointer-events: all;
    `;
}

function closeCategories() {
    timeout = setTimeout(() => {
        categoriesContainer.style = `
            opacity: 0;
            pointer-events: none;
        `;
    }, 300);
}