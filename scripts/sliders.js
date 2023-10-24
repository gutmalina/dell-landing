const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  keyboard: {
    enabled: true
  },
  mousewheel: {
    invert: true,
  },
  loop: true,
  pagination: {
    el: ".pagination",
    type: 'bullets',
    clickable: true,
  },
  autoResize: true,
});
