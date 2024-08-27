// swiperSetup.js

function initializeSwiper() {
    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centeredSlide: 'true',
        grabCursor: 'true',
        fade: 'true',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 25,
            }
        },
    });
}

// Call the function after DOM has loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSwiper();
});