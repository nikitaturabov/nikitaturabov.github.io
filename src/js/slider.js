(function (swipers) {

    if (!swipers) {

        return;
    }

    new Swiper('.swiper-container--diplomas', {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: false,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            click(e) {
                if (e.target.closest(".swiper-slide__zoom-btn")) {

                    zoomSlide.call(this);
                }
            }
        }
    });

    new Swiper('.swiper-container--documents', {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: false,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            click(e) {
                if (e.target.closest(".swiper-slide__zoom-btn")) {

                    zoomSlide.call(this);
                }
            }
        }
    });

})(document.querySelectorAll('.swiper-container'));