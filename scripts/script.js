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

const swiper = new Swiper(".swiper", {
  // Optional parameters
  //direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
