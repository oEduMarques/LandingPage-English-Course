const swiper = new Swiper('.swiper-container', {
    // Configurações básicas do Swiper
    slidesPerView: 1,
    spaceBetween: 30,

    // Configurações de navegação
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Configurações de paginação
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets', // Isso mostra a fração (ex: 1/3)
    },

    // Configurações de autoplay
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // Configuração de loop
    loop: true,

    // Configurações opcionais de scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});