const carousel = document.querySelector('.carousel');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  slides[index].classList.add('active');
  currentSlide = index;
}

prevBtn.addEventListener('click', () => {
  let prevSlide = currentSlide - 1;
  if (prevSlide < 0) {
    prevSlide = slides.length - 1;
  }
  showSlide(prevSlide);
});

nextBtn.addEventListener('click', () => {
  let nextSlide = currentSlide + 1;
  if (nextSlide >= slides.length) {
    nextSlide = 0;
  }
  showSlide(nextSlide);
});

