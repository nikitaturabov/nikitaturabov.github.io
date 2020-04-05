(function (swipers) {

    if (!swipers) {

        return;
    }

    new Swiper('.swiper-container--diplomas', {
        slidesPerView: 1,
        spaceBetween: 50,
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
        },
        breakpoints: {
            1160: {
                slidesPerView: 4,
                spaceBetweenSlides: 30
            },
            900: {
                slidesPerView: 3,
                spaceBetweenSlides: 30
            },
            660: {
                slidesPerView: 2,
                spaceBetweenSlides: 30
            }
        }
    });

    new Swiper('.swiper-container--documents', {
        slidesPerView: 1,
        spaceBetween: 50,
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
            },
        },
        breakpoints: {
            1160: {
                slidesPerView: 4,
                spaceBetweenSlides: 30
            },
            900: {
                slidesPerView: 3,
                spaceBetweenSlides: 30
            },
            660: {
                slidesPerView: 2,
                spaceBetweenSlides: 30
            }
        }
    });

})(document.querySelectorAll('.swiper-container'));