
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
    769: {
      slidesPerView: 4,
      slidesPerGroup: 1
    },
    0: {
      slidesPerGroup: 1,
      slidesPerView: 2
    }
  }
});

