const swiper = new Swiper('.swiper-container', {
    // Basic slider settings
    slidesPerView: 1,
    spaceBetween: 30,
  
    // Navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Autoplay
    autoplay: {
      delay: 2500, // Adjust the delay as needed
      disableOnInteraction: false,
    },
  
    // Loop
    loop: true,
  
    // Scrollbar (optional)
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });