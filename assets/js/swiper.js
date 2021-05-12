var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
});