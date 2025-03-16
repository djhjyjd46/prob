document.addEventListener('DOMContentLoaded', function() {
    const advantagesSwiper = new Swiper('.advantages .swiper', {
        slidesPerView: 4,
        spaceBetween: 24,
        loop: true,
        navigation: {
            nextEl: '.advantages__right',
            prevEl: '.advantages__left',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // когда ширина экрана >= 390px
            500: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // когда ширина экрана >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // когда ширина экрана >= 992px
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });
});