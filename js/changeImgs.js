const mainBanner = document.querySelector("#mainBanner");
const avantiWorkplace = document.querySelector("#avantiWorkplace");

window.addEventListener("load", (e) => {
    imgResize(e.target.defaultView.innerWidth);
})

window.addEventListener("resize", (e) => {
    imgResize(e.target.innerWidth);
});

function imgResize(width) {
    if(width >= 1200) {
        mainBanner.src = "/assets/imgs/desktop/sale-banner.png";
        avantiWorkplace.src = "/assets/imgs/desktop/avanti-workplace.png";
    } else {
        mainBanner.src = "/assets/imgs/mobile/sale-banner.png";
        avantiWorkplace.src = "/assets/imgs/mobile/avanti-workplace.png";
    }
}