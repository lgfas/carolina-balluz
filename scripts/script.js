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





// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Event listener for "Saiba mais" buttons
var saibaMaisButtons = document.querySelectorAll('.saiba-mais');
saibaMaisButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    var contentId = this.getAttribute('data-content');
    var content = document.getElementById(contentId).innerHTML;
    document.getElementById('modal-content').innerHTML = content;
    modal.style.display = "block";
  });
});


