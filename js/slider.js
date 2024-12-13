
const casesSlider = new Swiper('.cases-slides', {
  // Optional parameters
  loop: true,
  slidesPerGroup: 1,
  slidesPerView: 4,
  spaceBetween:20,
  grid: {
    rows: 1,
    fill:'row'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.cases-slider-nav.right',
    prevEl: '.cases-slider-nav.left',
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
        fill:'row'
      },
    },
    1100: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
        fill:'row'
      },
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
        fill:'row'
      },
    },
    0: {
      spaceBetween: 30,
      slidesPerGroup: 1,
      slidesPerView: 1,
      grid: {
        rows: 2,
        fill:'row'
      },
    }
  },
  on: {
    breakpoint: function () {
      // Force swiper to update when the breakpoint changes
      this.update();
      this.init();
    }
  }
});

const nanniesSlider = new Swiper('.nannies-slides', {
  // Optional parameters
  slidesPerGroup: 1,
  slidesPerView: 4,
  grid: {
    rows: 1,
    fill:'row'
  },
  breakpoints: {
    1650: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
        fill:'row'
      },
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      grid: {
        rows: 2,
        fill:'row'
      },
    },
    0: {
      spaceBetween: 30,
      slidesPerGroup: 1,
      slidesPerView: 1,
      grid: {
        rows: 2,
        fill:'row'
      },
    }
  },
  on: {
    breakpoint: function () {
      // Force swiper to update when the breakpoint changes
      this.update();
      this.init();
    }
  }
});

window.addEventListener('resize', function() {
  casesSlider.update();
  nanniesSlider.update();
});