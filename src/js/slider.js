(function (swipers) {

    if (!swipers) {

        return;
    }

    new Swiper('.swiper-container--diplomas', {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: false,
        navigation: {
            nextEl: '#dip-next',
            prevEl: '#dip-prev',
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
        navigation: {
            nextEl: '#doc-next',
            prevEl: '#doc-prev',
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