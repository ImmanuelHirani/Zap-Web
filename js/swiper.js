// Homepage
const bannerSwiper = new Swiper(".hero-banner-content ", {
    grabCursor: true,
    loop:true,
    // If we need pagination
    pagination: {
      el: '#swiperBanner .banner-pagination',
      clickable: true
    },
    autoplay : {
        delay : 2500,
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
    }
  });
  

  let TreatmentPilihanSwiper = new Swiper(".Treatment-pilihan-Content ", {

    grabCursor: true,
    loop:true,
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '#nextTreatmentPilihan',
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
    loop:true,
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '#nextPromo',
      prevEl: '#prevPromo',
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

    loop:true,
    grabCursor: true,
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '#nextTesti',
      prevEl: '#prevTesti',
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
      
    loop:true,
      // If we need pagination
      autoplay : {
        delay : 4000,
        disableOnInteraction: false,
    },
      // Navigation arrows
      navigation: {
        nextEl: '#nextProud',
        prevEl: '#prevProud',
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