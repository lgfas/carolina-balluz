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


// FAQ

const questions = document.querySelectorAll(".faq-questions button");

function activateAnswer(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  // Deactivate all questions and answers
  questions.forEach(btn => {
    const btnControls = btn.getAttribute("aria-controls");
    const btnAnswer = document.getElementById(btnControls);
    btnAnswer.classList.remove("active");
    btn.classList.remove("active-question");
    btn.setAttribute("aria-expanded", false);
  });

  // Activate the selected question and answer
  answer.classList.add("active");
  question.classList.add("active-question");
  question.setAttribute("aria-expanded", true);
}

// Add click event listener to each question button
questions.forEach(question => {
  question.addEventListener('click', activateAnswer);
});

// Ensure at least one question is active on page load
document.addEventListener('DOMContentLoaded', () => {
  const firstQuestion = questions[0];
  const firstAnswer = document.getElementById(firstQuestion.getAttribute("aria-controls"));
  firstAnswer.classList.add("active");
  firstQuestion.classList.add("active-question");
  firstQuestion.setAttribute("aria-expanded", true);
});

