const deparments = document.querySelectorAll(".nav-department");
const menuDepartment = document.querySelector("#eachDepartment");

const menuTitle = menuDepartment.childNodes[1].childNodes[1];
const categoriesContainer = menuDepartment.childNodes[1].childNodes[3];

let timeout;

deparments.forEach(department => {
    department.addEventListener("mouseenter", () => {
        // Muda o titulo
        menuTitle.innerHTML = department.innerHTML;

        // Limpa e adiciona as novas categorias
        categoriesContainer.innerHTML = "";
        for(let i = 0; i < 24; i++) {
            categoriesContainer.innerHTML += `
                <li>
                    <a href="#">
                        Categoria
                    </a>
                </li
            `;
        }

        categoriesContainer.style = `
            opacity: 1;
            pointer-events: all; 
        `;

        showMenu();
    })

    department.addEventListener("mouseleave", closeMenu);

    menuDepartment.addEventListener("mouseenter", showMenu);
    menuDepartment.addEventListener("mouseleave", closeMenu);
});

function showMenu() {
    menuDepartment.style = `
        opacity: 1;
        pointer-events: all;
    `;
    clearTimeout(timeout);
}

function closeMenu() {
    timeout = setTimeout(() => {
        menuDepartment.style = `
            opacity: 0;
            pointer-events: none;
        `;

        categoriesContainer.style = `
            opacity: 0;
            pointer-events: none;
        `
    }, 300)
}
