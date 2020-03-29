function zoomSlide() {

    const zoomContainer = document.querySelector(".bk-container-zoom");
    zoomContainer.classList.remove('bk-container-zoom--hidden');
    let btnClose = document.createElement("button");
    btnClose.classList.add('bk-container-zoom__close-btn');
    let cloneSlider = this.wrapperEl.closest(".swiper-container").cloneNode(true);
    cloneSlider.classList.add("swiper-container--zoom");
    let btnNext = document.createElement("button");
    btnNext.classList.add('bk-nav-btn--next', 'swiper-button-next');
    let btnPrev = document.createElement("button");
    btnPrev.classList.add('bk-nav-btn--prev', 'swiper-button-prev');
    zoomContainer.appendChild(btnClose);
    cloneSlider.appendChild(btnNext);
    cloneSlider.appendChild(btnPrev);
    zoomContainer.appendChild(cloneSlider);

    btnClose.addEventListener("click", (e) => {

        zoomContainer.classList.add('bk-container-zoom--hidden');
        zoomContainer.innerHTML = '';
    })

    new Swiper('.swiper-container--zoom', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        loop: true,
        initialSlide: this.clickedIndex,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}