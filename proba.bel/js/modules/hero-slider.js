document.addEventListener('DOMContentLoaded', function () {
    const heroSwiper = new Swiper('.hero-swiper', {
        // Параметры слайдера
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        // Пагинация (точки)
        pagination: {
            el: '.hero-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                // Кастомная пагинация с SVG (светлые кружки по умолчанию, активный - темный)
                return `<div class="${className}"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#F7FAF9" opacity="0.4" />
            </svg></div>`;
            },
        },
    });

    // Функция для обновления стилей активных буллетов
    function updatePaginationStyles() {
        const bullets = document.querySelectorAll('.hero-pagination .swiper-pagination-bullet');

        bullets.forEach(bullet => {
            const circle = bullet.querySelector('svg circle');
            if (circle) {
                if (bullet.classList.contains('swiper-pagination-bullet-active')) {
                    circle.setAttribute('fill', '#599D86');
                    circle.setAttribute('opacity', '1');
                } else {
                    circle.setAttribute('fill', '#F7FAF9');
                    circle.setAttribute('opacity', '0.4');
                }
            }
        });
    }

    // Переопределение стилей активных буллетов после инициализации слайдера
    heroSwiper.on('slideChange', function () {
        updatePaginationStyles();
    });

    // Запускаем принудительно при загрузке для установки начального состояния
    setTimeout(() => {
        updatePaginationStyles();
    }, 100);
});