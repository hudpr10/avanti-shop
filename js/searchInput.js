/* Desktop */
const inputDesktop = document.querySelector("#searchDesktop");
const searchButtonDesktop = document.querySelector("#searchButtonDesktop");
const insertSearchDesktop = document.querySelector("#insertSearchDesktop");
const searchTextDesktop = insertSearchDesktop.parentNode;

searchButtonDesktop.addEventListener("click", () => {
    if(inputDesktop.value != "") {
        insertSearchDesktop.innerHTML = inputDesktop.value;
        searchTextDesktop.style = "display: block;";
    } else {
        insertSearchDesktop.innerHTML = "";
        searchTextDesktop.style = "display: none;";
    }
})

/* Evento com teclado */
inputDesktop.addEventListener("keydown", (e) => {
    if(e.key === "Enter" && inputDesktop.value != "") {
        insertSearchDesktop.innerHTML = inputDesktop.value;
        searchTextDesktop.style = "display: block;";
    } else if(e.key === "Enter" && inputDesktop.value === "") {
        insertSearchDesktop.innerHTML = "";
        searchTextDesktop.style = "display: none;";
    }
})

/* Mobile */
const inputMobile = document.querySelector("#searchMobile");
const searchButtonMobile = document.querySelector("#searchButtonMobile");
const insertSearchMobile = document.querySelector("#insertSearchMobile");
const searchTextMobile = insertSearchMobile.parentNode;

searchButtonMobile.addEventListener("click", () => {

    if(inputMobile.value != "") {
        console.log(searchTextMobile)
        insertSearchMobile.innerHTML = inputMobile.value;
        searchTextMobile.style = "display: block;";
    } else {
        insertSearchMobile.innerHTML = "";
        searchTextMobile.style = "display: none;";
    }
})