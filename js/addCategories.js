/* Adicionando Categorias */ 
const categoriesContainer = document.querySelector(".submenu-categories-container");
for(let i = 0; i < 24; i++) {
    categoriesContainer.innerHTML += `
        <li>
            <a href="#">
                Categoria
            </a>
        </li
    `;
}
