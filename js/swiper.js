// Homepage
const bannerSwiper = new Swiper(".hero-banner-content ", {
  grabCursor: true,
  loop: true,
  // If we need pagination
  pagination: {
    el: "#swiperBanner .banner-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Navigation arrows
  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    968: {
      slidesPerView: 1,
    },
  },
});

let TreatmentPilihanSwiper = new Swiper(".Treatment-pilihan-Content ", {
  grabCursor: true,
  loop: true,
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: "#nextTreatmentPilihan",
  },

  breakpoints: {
    360: {
      slidesPerView: 1.2,
      spaceBetween: 12,
    },

    600: {
      slidesPerView: 2.5,
      spaceBetween: 12,
    },
    968: {
      slidesPerView: 3.1,
      spaceBetween: 16,
    },
  },
});

let promoContent = new Swiper(".promo-content ", {
  grabCursor: true,
  loop: true,
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: "#nextPromo",
    prevEl: "#prevPromo",
  },

  breakpoints: {
    360: {
      slidesPerView: 1.3,
      spaceBetween: 12,
      centeredSlides: true,
    },

    600: {
      slidesPerView: 2.5,
      spaceBetween: 12,
    },
    968: {
      slidesPerView: 3.5,
      spaceBetween: 16,
      centeredSlides: true,
    },
  },
});

let TestimonialSwiper = new Swiper(".testimonial-content", {
  loop: true,
  grabCursor: true,
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: "#nextTesti",
    prevEl: "#prevTesti",
  },

  breakpoints: {
    360: {
      slidesPerView: 1.3,
      spaceBetween: 12,
      centeredSlides: true,
    },

    600: {
      slidesPerView: 3.2,
      spaceBetween: 12,
      centeredSlides: true,
    },
    968: {
      slidesPerView: 3,
      spaceBetween: 50,
      centeredSlides: true,
    },

    1600: {
      slidesPerView: 3,
      spaceBetween: 32,
      centeredSlides: true,
    },
  },
});

// About Us

// Tentang Zap Section Proud being Zap
let proudSwipper = new Swiper(".proud-content", {
  grabCursor: true,

  loop: true,
  // If we need pagination
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: "#nextProud",
    prevEl: "#prevProud",
  },
  breakpoints: {
    360: {
      slidesPerView: 1.5,
      spaceBetween: 12,
      centeredSlides: true,
    },

    600: {
      slidesPerView: 3.5,
      spaceBetween: 12,
      centeredSlides: true,
    },
    968: {
      slidesPerView: 4,
      spaceBetween: 16,
    },

    1600: {
      slidesPerView: 3.5,
      spaceBetween: 18,
      centeredSlides: true,
    },
  },
});

// About Us End

// E-store
let bannerStoreSwiper = new Swiper(".banner-Store-content ", {
  grabCursor: true,
  loop: true,
  // If we need pagination
  pagination: {
    el: "#swiperBanner .banner-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: "#nextBannerStore ",
    prevEl: "#prevBannerStore ",
  },

  // Navigation arrows
  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    968: {
      slidesPerView: 1,
    },
  },
});

let ProductRecomend = new Swiper(".productRecomend-Content", {
  loop: true,
  grabCursor: true,
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: "#nextProductRecom",
    prevEl: "#prevProductRecom",
  },

  breakpoints: {
    360: {
      slidesPerView: 1.8,
      spaceBetween: 12,
      centeredSlides: true,
    },

    600: {
      slidesPerView: 3,
      spaceBetween: 12,
      centeredSlides: true,
    },
    968: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: true,
    },

    1600: {
      slidesPerView: 3,
      spaceBetween: 32,
      centeredSlides: true,
    },
  },
});

// E-store End

// Jadwal Lokasi

let JadwalLokasi = new Swiper(".jadwal-content", {
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  // If we need pagination

  navigation: {
    nextEl: "#nextSchedule",
    prevEl: "#prevSchedule",
  },

  pagination: {
    el: ".swiperJadwal .jadwal-paggination",
    clickable: true,
  },
});
// Jadwal  End

// Treatemnt Details

let stepSwiper = new Swiper(".Step-content ", {
  slidesPerView: 2,
  loop: true,
  grabCursor: true,
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: "#nextstep",
    prevEl: "#prevstep",
  },

  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: true,
    },

    600: {
      slidesPerView: 3,
      spaceBetween: 52,
    },
    968: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 3,
      spaceBetween: 80,
      centeredSlides: true,
    },
  },
});

let carakerjaSwiper = new Swiper(".cara-kerjaTreatment-content", {
  slidesPerView: 2,
  spaceBetween: 20,
  grabCursor: true,
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: "#nextCaraKerja",
    prevEl: "#prevCaraKerja",
  },

  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 12,
    },

    600: {
      slidesPerView: 2.5,
      spaceBetween: 12,
    },
    968: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

let BaSwiper = new Swiper(".card-content-Before-After", {
  grabCursor: true,
  loop: true,
  // If we need pagination
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: "#nextBeforeAfter",
    prevEl: "#prevBeforeAfter",
  },

  breakpoints: {
    360: {
      slidesPerView: 1.3,
      spaceBetween: 12,
      centeredSlides: true,
    },

    600: {
      slidesPerView: 2.5,
      spaceBetween: 12,
    },
    968: {
      slidesPerView: 3.5,
      spaceBetween: 10,
      centeredSlides: true,
    },
  },
});

let RaSwiper = new Swiper(".card-content-treatment", {
  slidesPerView: 1.1,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: "#nexttreatmentRecomendations",
    prevEl: "#prevtreatmentRecomendations",
  },
  breakpoints: {
    360: {
      slidesPerView: 1.1,
      spaceBetween: 10,
      centeredSlides: true,
    },

    600: {
      slidesPerView: 2.2,
      spaceBetween: 12,
      centeredSlides: true,
    },
    968: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1320: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      centeredSlides: true,
    },

    1600: {
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: true,
    },
  },
});

// Treatemnt Details end

// Cart

let OtherProductCartContent = new Swiper(".otherproductCart-content", {
  grabCursor: true,
  loop: true,
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: "#nextCartOtherproduct",
    prevEl: "#prevCartOtherproduct",
  },

  breakpoints: {
    360: {
      slidesPerView: 1.1,
      spaceBetween: 12,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    968: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
  },
});

let OtherArticelContent = new Swiper(".OtherArticel-Content", {
  grabCursor: true,
  loop: true,
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: "#nextOtherArticel",
    prevEl: "#prevOtherArticel",
  },

  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 12,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    968: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
  },
});

// Cart end

let ZapBeautyIndexcontent = new Swiper(".ZapBeautyIndex-content", {
  grabCursor: true,
  loop: true,
  // If we need pagination
  breakpoints: {
    360: {
      slidesPerView: 2.3,
      spaceBetween: 12,
    },

    600: {
      slidesPerView: 3.5,
      spaceBetween: 12,
    },
    968: {
      slidesPerView: 5,
      spaceBetween: 12,
    },
  },
});

let ZartikleToggleContent = new Swiper(".artikleToggle-Content", {
  grabCursor: true,
  // If we need pagination
  breakpoints: {
    360: {
      slidesPerView: 2.3,
      spaceBetween: 12,
    },

    600: {
      slidesPerView: 3.5,
      spaceBetween: 12,
    },
    968: {
      slidesPerView: 5,
      spaceBetween: 12,
    },
  },
});

let artikelTerbaruContent = new Swiper(".artikelTerbaru-Content", {
  grabCursor: true,
  loop: true,
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: "#nextArtikelTerbaru",
    prevEl: "#prevArtikelTerbaru",
  },

  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 12,
    },

    600: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    968: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
  },
});
