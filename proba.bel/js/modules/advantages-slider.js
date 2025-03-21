document.addEventListener('DOMContentLoaded', function() {
    const advantagesSwiper = new Swiper('.advantages .swiper', {
        slidesPerView: 4,
        spaceBetween: 24,
        loop: true,
        navigation: {
            nextEl: '.advantages__right',
            prevEl: '.advantages__left',
        },
        breakpoints: {
            // когда ширина экрана >= 576px
            390: {
                slidesPerView: 1,
            },
            // когда ширина экрана >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // когда ширина экрана >= 992px
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });
});