const spanOpenMenu = document.querySelector("#openSubmenu");
const menu = document.querySelector("#allDepartments");

let timeout; 

spanOpenMenu.addEventListener("mouseenter", openMenu);
spanOpenMenu.addEventListener("mouseleave", closeMenu);

menu.addEventListener("mouseenter", openMenu);
menu.addEventListener("mouseleave", closeMenu);

function openMenu() {
    menu.style = `
        opacity: 1;
        pointer-events: all;
    `;
    clearTimeout(timeout);
}

function closeMenu() {
    timeout = setTimeout(() => {
        menu.style = `
            opacity: 0;
            pointer-events: none;
        `;
    }, 300);
}
