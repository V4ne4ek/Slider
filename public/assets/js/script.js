const btn = document.querySelector('.btn-toggle');
const h2 = document.querySelector('.header');
const h3 = document.querySelector('.subtitle');
const h3_2 = document.querySelector('.subtitle_2');
const h3_3 = document.querySelector('.subtitle_3');
const next = document.querySelector('.swiper-button-next');
btn.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    h2.classList.toggle('light-theme');
    h3.classList.toggle('light-theme');
    h3_2.classList.toggle('light-theme');
    h3_3.classList.toggle('light-theme');
    next.classList.toggle('light-theme');
})

Fancybox.bind("[data-fancybox]", {

});


const mySwiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        426: {
            slidesPerView: 2,
        },
    },
});