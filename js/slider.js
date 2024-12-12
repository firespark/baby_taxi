
const casesSlider = new Swiper('.cases-slides', {
  // Optional parameters
  loop: true,
  slidesPerGroup: 1,
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: '.cases-slider-nav.right',
    prevEl: '.cases-slider-nav.left',
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
      slidesPerGroup: 1
    },
    1100: {
      slidesPerView: 3,
      slidesPerGroup: 1
    },
    500: {
      slidesPerView: 2,
      slidesPerGroup: 1
    },
    0: {
      slidesPerGroup: 1,
      slidesPerView: 2
    }
  }
});

const nanniesSlider = new Swiper('.nannies-slides', {
  // Optional parameters
  loop: true,
  slidesPerGroup: 1,
  slidesPerView: 4,

  breakpoints: {
    1400: {
      slidesPerView: 4,
      slidesPerGroup: 1
    },
    1100: {
      slidesPerView: 3,
      slidesPerGroup: 1
    },
    500: {
      slidesPerView: 2,
      slidesPerGroup: 1
    },
    0: {
      slidesPerGroup: 1,
      slidesPerView: 2
    }
  }
});