const swiperContainer01 = document.querySelector("#swiper01");
const swiperContainer02 = document.querySelector("#swiper02");

window.addEventListener("load", (e) => {
    if(e.target.defaultView.innerWidth >= 1200) {
        addProducts(swiperContainer01, 15);
        addProducts(swiperContainer02, 15);
    } else {
        addProducts(swiperContainer01, 6);
        addProducts(swiperContainer02, 6);
    }

    const swiper = new Swiper(".mySwiper", {
        loop: true,
    
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
        pagination: {
            el: ".swiper-pagination",
        },
        
        breakpoints: {
            // Tela >= 0px
            0: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 8,
            },
            // Tela >= 480px
            480: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 8,
            },
            // Tela >= 768px
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 16,
            },
            // Tela >= 1024px
            1024: {
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 16,
            },
        },
    });    
})

// window.addEventListener("resize", (e) => {
//     swiperContainer01.innerHTML = "";
//     swiperContainer02.innerHTML = "";

//     if(e.target.innerWidth >= 1200) {
//         addProducts(swiperContainer01, 15);
//         addProducts(swiperContainer02, 15);
//     } else {
//         addProducts(swiperContainer01, 6);
//         addProducts(swiperContainer02, 6);
//     }
// })

function addProducts(swiper, quantity) {
    for(let i = 0; i < quantity; i++) {
        const div = document.createElement("div");
        div.classList.add("swiper-slide", "product-container");
        div.innerHTML = `
            <span class="tag new-tag">NOVO</span>
            <img src="assets/imgs/shirt.png" alt="Camisa branca básica">
            <h3 class="product-title">Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit</h3>
            <div class="details-container">
                <div class="price-container">
                    <span class="old-price">R$ 100,00</span>
                    <span class="new-price">R$ 79,90</span>
                </div>
                <span class="tag discount-tag">10% OFF</span>
            </div>
            <span class="on-credit">Ou em até <strong>10x de R$ 7,90</strong></span>
            <button>Comprar</button>
        `;
    
        swiper.appendChild(div);
    }
}
