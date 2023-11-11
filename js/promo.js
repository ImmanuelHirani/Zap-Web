const swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 1,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
