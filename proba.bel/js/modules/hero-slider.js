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
            <circle cx="10" cy="10" r="10" fill="#F7FAF9" opacity="1" />
        </svg></div>`;
        },
    }
});

// Переопределение стилей активных буллетов после инициализации слайдера
heroSwiper.on('slideChange', function () {
    // Находим все буллеты пагинации
    const bullets = document.querySelectorAll('.hero-pagination .swiper-pagination-bullet');

    // Перебираем их и меняем цвет
    bullets.forEach((bullet, idx) => {
        const circle = bullet.querySelector('circle');
        if (bullet.classList.contains('swiper-pagination-bullet-active')) {
            // Активный буллет - темный
            circle.setAttribute('fill', '#599D86');
            circle.setAttribute('opacity', '1');
        } else {
            // Неактивные буллеты - светлые
            circle.setAttribute('fill', '#599D86');
            circle.setAttribute('opacity', '0.4');
        }
    });
});

// Запускаем принудительно при загрузке для установки начального состояния
heroSwiper.emit('slideChange');