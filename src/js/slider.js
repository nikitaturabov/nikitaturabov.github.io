(function (swipers) {

    if (!swipers) {

        return;
    }

    var swiper = new Swiper('.swiper-container', {
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

    });

})(document.querySelectorAll('.swiper-container'));