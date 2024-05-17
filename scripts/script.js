document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".icon-menu");
  const container = document.querySelector(".container");
  const close = document.querySelector(".icon-close");

  hamburger.addEventListener("click", function () {
    container.classList.toggle("menu-open");
  });
  close.addEventListener("click", function () {
    container.classList.remove("menu-open");
  });
});



var mySwiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500,  // O tempo de atraso em milissegundos entre transições automáticas
    disableOnInteraction: false,  // Continuar autoplay após interações do usuário (como swipes)
  },
  speed: 1000,
});
