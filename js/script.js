var swiper = new Swiper('.main-slider-wrapper', {
   effect: 'cube',
   grabCursor: true,
   cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,

   },
});



var swiper = new Swiper('.review-container', {
   pagination: {
      el: '.swiper-pagination',

   },
});