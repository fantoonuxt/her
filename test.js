
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,  
      touchRatio: 1,   
      touchAngle: 45,   
      breakpoints: {
        300: {
          slidesPerView: 1.5,
          },
        400: {
          slidesPerView: 2,
          },
        767: {
          slidesPerView: 2.2,
          },
      }
  });
});