const swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
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
    885: {
      slidesPerView: 1,
    },
    886: {
      slidesPerView: 2,
    },
    // 1200: {
    //   slidesPerView: 3,
    // },
  },
});
